const CATEGORY = {
  healthcare: { label: "Health" },
  ageing: { label: "Ageing" },
  children: { label: "Children" },
  youth: { label: "Youth" },
  sport: { label: "Sport" },
  park: { label: "Parks" },
  connector: { label: "PCN" }
};

const CATEGORY_ORDER = ["healthcare", "ageing", "children", "youth", "sport", "park", "connector"];

const params = new URLSearchParams(window.location.search);
const selected = {
  lat: Number(params.get("lat")),
  lng: Number(params.get("lng")),
  title: params.get("title") || params.get("postal") || "Selected point",
  meta: params.get("meta") || "",
  postal: params.get("postal") || "",
  mode: params.get("mode") || "residential",
  radius: Number(params.get("radius") || 1)
};
let decodedPointsCache = null;

function init() {
  const data = window.BENCHMARK_DATA;
  if (!data || !Number.isFinite(selected.lat) || !Number.isFinite(selected.lng)) {
    document.getElementById("report-content").innerHTML = '<p class="empty">Benchmark data or selected location is unavailable.</p>';
    return;
  }

  const constituency = selectedConstituency(data);
  if (!constituency) {
    document.getElementById("report-content").innerHTML = '<p class="empty">No constituency was found for this selected point.</p>';
    return;
  }

  document.getElementById("report-subtitle").textContent = `${selected.title} · ${constituency.name} · ${formatRadiusLabel(selected.radius)} · ${data.modes[selected.mode] || selected.mode}`;
  document.getElementById("report-method").textContent = data.methodology.join(" ");
  document.getElementById("report-content").innerHTML = CATEGORY_ORDER.map((category) => categorySection(data, constituency, category)).join("");
  bindAddressLookups();
}

function categorySection(data, constituency, category) {
  const count = selectedCount(category);
  const groups = [
    { key: "constituency", label: "Constituency", points: benchmarkPoints(data, [constituency.id]) },
    { key: "nearby", label: "Nearby", points: benchmarkPoints(data, constituency.nearby || []) },
    { key: "singapore", label: "Singapore", points: allBenchmarkPoints(data) }
  ];

  const summaries = groups.map((group) => summaryCard(data, constituency, group, category, count)).join("");
  const examples = groups.map((group) => exampleGroup(data, group, category, count)).join("");

  return `
    <section class="category-section">
      <div class="category-heading">
        <span class="dot ${category}"></span>
        <h2>${CATEGORY[category].label}</h2>
        <span class="selected-count">${count.toLocaleString()}</span>
      </div>
      <div class="summary-grid">${summaries}</div>
      <details>
        <summary>Show examples ranked above and below</summary>
        <div class="examples-grid">${examples}</div>
      </details>
    </section>
  `;
}

function summaryCard(data, constituency, group, category, count) {
  const radiusKey = String(selected.radius);
  const metric = group.key === "singapore"
    ? data.stats.singapore?.[selected.mode]?.[category]?.[radiusKey]
    : data.stats[group.key]?.[constituency.id]?.[selected.mode]?.[category]?.[radiusKey];
  const comparison = compare(count, metric);
  const aboveBelow = aboveBelowCounts(group.points, category, count);

  return `
    <article class="summary-card">
      <h3>${group.label}</h3>
      <div class="metric-line"><span>Average</span><strong>${metric?.avg?.toFixed(1) ?? "n/a"}</strong></div>
      <div class="metric-line"><span>Difference</span><strong>${comparison.diffText}</strong></div>
      <div class="metric-line"><span>Percentile</span><strong>${comparison.percentile}</strong></div>
      <div class="metric-line"><span>Above / same / below</span><strong>${aboveBelow.above} / ${aboveBelow.same} / ${aboveBelow.below}</strong></div>
    </article>
  `;
}

function exampleGroup(data, group, category, count) {
  const above = group.points
    .map((point) => ({ ...point, value: pointValue(data, point, category) }))
    .filter((point) => point.value > count)
    .sort((a, b) => a.value - b.value || a.postalCode.localeCompare(b.postalCode))
    .slice(0, 6);
  const below = group.points
    .map((point) => ({ ...point, value: pointValue(data, point, category) }))
    .filter((point) => point.value < count)
    .sort((a, b) => b.value - a.value || a.postalCode.localeCompare(b.postalCode))
    .slice(0, 6);

  return `
    <article class="example-group">
      <h3>${group.label}</h3>
      ${exampleTable("Closest above", above)}
      ${exampleTable("Closest below", below)}
    </article>
  `;
}

function exampleTable(label, rows) {
  if (!rows.length) return `<p class="empty">${label}: none</p>`;
  return `
    <h4 class="example-list-title">${label}</h4>
    <div class="example-list">
      ${rows.map((row) => `
        <div class="example-row">
          <span class="postal-code">${escapeHtml(row.postalCode)}</span>
          <span class="point-copy">
            <span class="point-address" data-postal="${escapeHtml(row.postalCode)}">HDB residential postal point</span>
            <span class="point-constituency">${escapeHtml(constituencyName(row.constituency))}</span>
          </span>
          <span class="point-count">${row.value.toLocaleString()}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function bindAddressLookups() {
  document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open || detail.dataset.addressesLoaded === "true") return;
      detail.dataset.addressesLoaded = "true";
      loadAddresses(detail);
    });
  });
}

async function loadAddresses(container) {
  const cells = [...container.querySelectorAll(".point-address[data-postal]")];
  const uniquePostals = [...new Set(cells.map((cell) => cell.dataset.postal))];

  await runInBatches(uniquePostals, 4, async (postal) => {
    const address = await lookupPostalAddress(postal);
    cells.filter((cell) => cell.dataset.postal === postal).forEach((cell) => {
      cell.textContent = address || "HDB residential postal point";
      cell.dataset.loaded = address ? "true" : "false";
    });
  });
}

async function runInBatches(items, limit, task) {
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const item = items[cursor];
      cursor += 1;
      await task(item);
    }
  });
  await Promise.all(workers);
}

async function lookupPostalAddress(postal) {
  try {
    const url = `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${encodeURIComponent(postal)}&returnGeom=Y&getAddrDetails=Y&pageNum=1`;
    const response = await fetch(url);
    if (!response.ok) return "";
    const payload = await response.json();
    const exact = (payload.results || []).find((item) => item.POSTAL === postal && item.ADDRESS);
    const result = exact || (payload.results || []).find((item) => item.ADDRESS);
    return titleCase(result?.ADDRESS || result?.SEARCHVAL || "");
  } catch (error) {
    console.warn(error);
    return "";
  }
}

function compare(count, metric) {
  if (!metric) return { diffText: "n/a", percentile: "n/a" };
  const diff = count - metric.avg;
  return {
    diffText: `${diff >= 0 ? "+" : ""}${diff.toFixed(1)} vs avg ${metric.avg.toFixed(1)}`,
    percentile: percentileFromHistogram(metric.hist, count)
  };
}

function aboveBelowCounts(points, category, count) {
  let above = 0;
  let same = 0;
  let below = 0;
  for (const point of points) {
    const value = pointValue(window.BENCHMARK_DATA, point, category);
    if (value > count) above += 1;
    else if (value === count) same += 1;
    else below += 1;
  }
  return { above, same, below };
}

function selectedCount(category) {
  return window.STARTER_FACILITIES.filter((facility) => (
    facility.category === category &&
    distanceKm(selected.lat, selected.lng, facility.lat, facility.lng) <= selected.radius
  )).length;
}

function benchmarkPoints(data, constituencyIds) {
  const allowed = new Set(constituencyIds);
  return allBenchmarkPoints(data).filter((point) => allowed.has(point.constituency));
}

function allBenchmarkPoints(data) {
  if (decodedPointsCache) return decodedPointsCache;
  decodedPointsCache = (data.points || []).map((point) => ({
    postalCode: point[0],
    constituency: point[1],
    lat: point[2],
    lng: point[3],
    weight: point[4],
    counts: point[5]
  }));
  return decodedPointsCache;
}

function pointValue(data, point, category) {
  const categoryIndex = data.categories.indexOf(category);
  const radiusIndex = data.radii.indexOf(selected.radius);
  return point.counts[(categoryIndex * data.radii.length) + radiusIndex] || 0;
}

function percentileFromHistogram(hist, value) {
  const entries = Object.entries(hist || {}).map(([key, weight]) => [Number(key), Number(weight)]);
  const total = entries.reduce((sum, item) => sum + item[1], 0);
  if (!total) return 0;
  const cumulative = entries.reduce((sum, item) => sum + (item[0] <= value ? item[1] : 0), 0);
  return Math.max(1, Math.min(100, Math.round((cumulative / total) * 100)));
}

function selectedConstituency(data) {
  const indexed = selected.postal ? data.postalIndex?.[selected.postal] : null;
  if (indexed) return data.constituencies.find((item) => item.id === indexed.constituency) || null;
  return data.constituencies.find((item) => pointInGeometry(selected, item.geometry)) || null;
}

function constituencyName(id) {
  return window.BENCHMARK_DATA.constituencies.find((item) => item.id === id)?.shortName || id;
}

function pointInGeometry(point, geometry) {
  if (!geometry) return false;
  if (geometry.type === "Polygon") return pointInPolygon(point, geometry.coordinates);
  if (geometry.type === "MultiPolygon") return geometry.coordinates.some((polygon) => pointInPolygon(point, polygon));
  return false;
}

function pointInPolygon(point, polygon) {
  if (!polygon?.length || !pointInRing(point, polygon[0])) return false;
  return !polygon.slice(1).some((hole) => pointInRing(point, hole));
}

function pointInRing(point, ring) {
  let inside = false;
  const x = point.lng;
  const y = point.lat;

  for (let i = 0, j = ring.length - 1; i < ring.length; j = i, i += 1) {
    const xi = ring[i][0];
    const yi = ring[i][1];
    const xj = ring[j][0];
    const yj = ring[j][1];
    const intersects = ((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
    if (intersects) inside = !inside;
  }

  return inside;
}

function distanceKm(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(value) {
  return value * Math.PI / 180;
}

function formatRadiusLabel(radiusKm) {
  return radiusKm < 1 ? `${Math.round(radiusKm * 1000)}m` : `${radiusKm}km`;
}

function titleCase(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase())
    .replace(/\bSingapore\b/i, "Singapore")
    .replace(/\bHdb\b/g, "HDB")
    .replace(/\bMrt\b/g, "MRT");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

init();
