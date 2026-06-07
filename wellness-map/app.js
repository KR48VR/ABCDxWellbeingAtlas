const CATEGORY = {
  healthcare: { label: "Health", color: "#147c86", glyph: "+" },
  ageing: { label: "Ageing", color: "#8b6f2f", glyph: "○" },
  children: { label: "Children", color: "#2f71b8", glyph: "C" },
  youth: { label: "Youth", color: "#a9448d", glyph: "Y" },
  sport: { label: "Sport", color: "#d05a34", glyph: "" },
  park: { label: "Parks", color: "#2f8a4d", glyph: "" },
  connector: { label: "PCN", color: "#7a5ab8", glyph: "" }
};

const CATEGORY_ORDER = ["healthcare", "ageing", "children", "youth", "sport", "park", "connector"];

const POSTAL_HINTS = {
  "01": [1.2836, 103.8519, "Raffles Place / Marina Bay"],
  "02": [1.2797, 103.8476, "Chinatown / Tanjong Pagar"],
  "03": [1.2863, 103.8324, "Bukit Merah"],
  "04": [1.2712, 103.8198, "HarbourFront"],
  "05": [1.2922, 103.8360, "River Valley"],
  "06": [1.2917, 103.8500, "City Hall"],
  "07": [1.2764, 103.8458, "Anson"],
  "08": [1.2764, 103.8420, "Tanjong Pagar"],
  "09": [1.2644, 103.8223, "Sentosa / HarbourFront"],
  "10": [1.3138, 103.8159, "Tanglin / Holland"],
  "11": [1.3006, 103.7848, "Kent Ridge"],
  "12": [1.3119, 103.7593, "Clementi"],
  "13": [1.3351, 103.7421, "Jurong East"],
  "14": [1.2987, 103.8014, "Queenstown"],
  "15": [1.3028, 103.9059, "Marine Parade"],
  "16": [1.3180, 103.9226, "Bedok South"],
  "17": [1.3644, 103.9915, "Changi Airport"],
  "18": [1.2987, 103.8556, "Bugis"],
  "19": [1.3020, 103.8621, "Kallang"],
  "20": [1.3099, 103.8566, "Little India"],
  "21": [1.3270, 103.8402, "Novena / Balestier"],
  "22": [1.3184, 103.8455, "Newton"],
  "23": [1.3794, 103.7620, "Bukit Panjang"],
  "24": [1.3408, 103.7758, "Bukit Timah"],
  "25": [1.3220, 103.8103, "Adam / Farrer"],
  "26": [1.3191, 103.8050, "Bukit Timah"],
  "27": [1.4110, 103.8320, "Yishun"],
  "28": [1.3744, 103.8732, "Serangoon North"],
  "29": [1.3444, 103.8678, "Toa Payoh / Braddell"],
  "30": [1.3217, 103.8464, "Novena"],
  "31": [1.3349, 103.8516, "Toa Payoh"],
  "32": [1.3208, 103.8628, "Bendemeer"],
  "33": [1.3285, 103.8689, "Potong Pasir"],
  "34": [1.3176, 103.8930, "Geylang / Paya Lebar"],
  "35": [1.3427, 103.8788, "Upper Serangoon"],
  "36": [1.3528, 103.8797, "Hougang"],
  "37": [1.3677, 103.8907, "Hougang"],
  "38": [1.3225, 103.8895, "MacPherson"],
  "39": [1.3127, 103.8892, "Geylang"],
  "40": [1.3150, 103.8955, "Eunos"],
  "41": [1.3304, 103.9072, "Kaki Bukit"],
  "42": [1.3127, 103.9127, "Joo Chiat"],
  "43": [1.3024, 103.9021, "Katong"],
  "44": [1.3039, 103.9228, "Marine Parade East"],
  "45": [1.3209, 103.9352, "Bedok"],
  "46": [1.3241, 103.9306, "Bedok"],
  "47": [1.3332, 103.9418, "Simei"],
  "48": [1.3496, 103.9639, "Tampines East"],
  "49": [1.3616, 103.9878, "Changi"],
  "50": [1.3732, 103.9492, "Pasir Ris"],
  "51": [1.3725, 103.9497, "Pasir Ris"],
  "52": [1.3546, 103.9442, "Tampines"],
  "53": [1.3729, 103.8931, "Hougang / Sengkang"],
  "54": [1.3952, 103.8937, "Sengkang"],
  "55": [1.3574, 103.8752, "Serangoon Gardens"],
  "56": [1.3729, 103.8457, "Ang Mo Kio"],
  "57": [1.3542, 103.8495, "Bishan"],
  "58": [1.3376, 103.7778, "Bukit Timah West"],
  "59": [1.3300, 103.7655, "Clementi / Ulu Pandan"],
  "60": [1.3331, 103.7468, "Jurong East"],
  "61": [1.3347, 103.7219, "Jurong West"],
  "62": [1.3204, 103.7059, "Jurong Industrial"],
  "63": [1.3447, 103.6974, "Boon Lay"],
  "64": [1.3427, 103.6904, "Pioneer"],
  "65": [1.3484, 103.7546, "Bukit Batok"],
  "66": [1.3587, 103.7641, "Hillview"],
  "67": [1.3807, 103.7625, "Bukit Panjang"],
  "68": [1.3840, 103.7445, "Choa Chu Kang"],
  "69": [1.3276, 103.6782, "Tuas"],
  "70": [1.4160, 103.7580, "Kranji"],
  "71": [1.4383, 103.7899, "Woodlands"],
  "72": [1.4422, 103.8016, "Woodlands East"],
  "73": [1.4359, 103.7864, "Woodlands"],
  "75": [1.4467, 103.8193, "Sembawang"],
  "76": [1.4241, 103.8388, "Yishun"],
  "77": [1.3861, 103.8285, "Upper Thomson"],
  "78": [1.3929, 103.8754, "Seletar"],
  "79": [1.3917, 103.8570, "Seletar / Yio Chu Kang"],
  "80": [1.4045, 103.8717, "Seletar"],
  "81": [1.3580, 103.9894, "Changi Airport"],
  "82": [1.4038, 103.9101, "Punggol"]
};

const state = {
  facilities: [...window.STARTER_FACILITIES],
  activeCategories: new Set(CATEGORY_ORDER),
  radiusKm: 2,
  benchmarkMode: "residential",
  benchmarkRadius: 1,
  selected: { lat: 1.3521, lng: 103.8198, title: "Singapore centroid", meta: "Click the map or search a postal code." },
  markers: new Map(),
  userMarker: null,
  map: null,
  searchInProgress: false
};

const el = {
  form: document.getElementById("search-form"),
  input: document.getElementById("location-input"),
  locate: document.getElementById("locate-button"),
  sync: document.getElementById("sync-button"),
  reset: document.getElementById("reset-button"),
  radius: document.getElementById("radius-select"),
  list: document.getElementById("facility-list"),
  nearest: document.getElementById("nearest-strip"),
  overall: document.getElementById("overall-list"),
  selectedTitle: document.getElementById("selected-title"),
  selectedMeta: document.getElementById("selected-meta"),
  proximityGrid: document.getElementById("proximity-grid"),
  selectedRadiusLabel: document.getElementById("selected-radius-label"),
  benchmarkMode: document.getElementById("benchmark-mode"),
  benchmarkRadius: document.getElementById("benchmark-radius"),
  benchmarkContext: document.getElementById("benchmark-context"),
  benchmarkDetailLink: document.getElementById("benchmark-detail-link"),
  benchmarkList: document.getElementById("benchmark-list"),
  listTitle: document.getElementById("facility-list-title"),
  status: document.getElementById("sync-status")
};

function init() {
  if (!window.L) {
    document.getElementById("map").innerHTML = '<div class="map-fallback">Map library unavailable</div>';
    render();
    return;
  }

  state.map = L.map("map", { zoomControl: false }).setView([1.3521, 103.8198], 11);
  L.control.zoom({ position: "bottomright" }).addTo(state.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(state.map);

  state.map.on("click", (event) => {
    setSelected({
      lat: event.latlng.lat,
      lng: event.latlng.lng,
      title: "Dropped pin",
      meta: `${event.latlng.lat.toFixed(5)}, ${event.latlng.lng.toFixed(5)}`
    });
  });

  bindEvents();
  render();
  showCoverageStatus();
  runInitialSearch();
}

function showCoverageStatus() {
  const counts = window.DATA_COVERAGE?.counts;
  if (!counts) return;
  flashStatus(`Loaded ${(counts.healthcare || 0).toLocaleString()} health, ${(counts.ageing || 0).toLocaleString()} ageing, ${(counts.children || 0).toLocaleString()} children, ${(counts.youth || 0).toLocaleString()} youth, ${(counts.sport || 0).toLocaleString()} sport, ${(counts.park || 0).toLocaleString()} parks, ${(counts.connector || 0).toLocaleString()} PCN records`);
}

function bindEvents() {
  el.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await runSearchFromInput();
  });

  el.input.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    await runSearchFromInput();
  });

  el.locate.addEventListener("click", () => {
    if (!navigator.geolocation) {
      flashStatus("Browser location is unavailable");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSelected({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: "Current location",
          meta: `Accuracy about ${Math.round(position.coords.accuracy)} m`
        });
      },
      () => flashStatus("Could not read current location")
    );
  });

  el.reset.addEventListener("click", () => {
    setSelected({ lat: 1.3521, lng: 103.8198, title: "Singapore centroid", meta: "Click the map or search a postal code." });
    state.map.setView([1.3521, 103.8198], 11);
  });

  el.sync.addEventListener("click", syncOpenData);

  el.radius.addEventListener("change", () => {
    state.radiusKm = el.radius.value === "all" ? "all" : Number(el.radius.value);
    render();
    fitMapToVisibleFacilities();
  });

  el.benchmarkMode.addEventListener("change", () => {
    state.benchmarkMode = el.benchmarkMode.value;
    render();
  });

  el.benchmarkRadius.addEventListener("change", () => {
    state.benchmarkRadius = Number(el.benchmarkRadius.value);
    render();
  });

  document.querySelectorAll(".toggle input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) state.activeCategories.add(input.value);
      else state.activeCategories.delete(input.value);
      render();
      fitMapToVisibleFacilities();
    });
  });
}

async function runSearchFromInput() {
  if (state.searchInProgress) return;
  state.searchInProgress = true;
  try {
    flashStatus("Searching location...");
    await searchLocation(el.input.value.trim());
  } finally {
    state.searchInProgress = false;
  }
}

function runInitialSearch() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  if (query) {
    el.input.value = query;
    searchLocation(query);
  }
}

async function searchLocation(query) {
  if (!query) return;

  if (/^\d{6}$/.test(query)) {
    const oneMapResult = await geocodeWithOneMap(query);
    if (oneMapResult) {
      applySelectedLocation({
        lat: oneMapResult.lat,
        lng: oneMapResult.lng,
        title: oneMapResult.postalCode || query,
        meta: oneMapResult.address
      }, 17);
      flashStatus("Exact postal-code location from OneMap");
      return;
    }

    const exact = state.facilities.find((facility) => facility.postalCode === query);
    if (exact) {
      applySelectedLocation({ lat: exact.lat, lng: exact.lng, title: exact.postalCode, meta: exact.name }, 16);
      flashStatus("Matched a facility with this postal code");
      return;
    }

    const hint = postalSectorHint(query);
    if (hint) {
      applySelectedLocation({
        lat: hint[0],
        lng: hint[1],
        title: query,
        meta: `Approximate postal-sector match: ${hint[2]}`
      }, 14);
      flashStatus("OneMap lookup unavailable; using approximate postal sector");
      return;
    }
  }

  const localMatch = state.facilities.find((facility) => facility.name.toLowerCase().includes(query.toLowerCase()));
  if (localMatch) {
    applySelectedLocation({ lat: localMatch.lat, lng: localMatch.lng, title: localMatch.name, meta: localMatch.address }, 15);
    flashStatus("Matched local facility name");
    return;
  }

  const oneMapResult = await geocodeWithOneMap(query);
  if (oneMapResult) {
    applySelectedLocation({
      lat: oneMapResult.lat,
      lng: oneMapResult.lng,
      title: oneMapResult.name,
      meta: oneMapResult.address
    }, 16);
    flashStatus("Location found with OneMap");
    return;
  }

  flashStatus("No local match found. Try a postal code, facility name, or click the map.");
}

async function geocodeWithOneMap(query) {
  const url = `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${encodeURIComponent(query)}&returnGeom=Y&getAddrDetails=Y&pageNum=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const payload = await response.json();
    const result = payload?.results?.find((item) => item.LATITUDE && item.LONGITUDE);
    if (!result) return null;

    return {
      name: titleCase(result.SEARCHVAL || result.BUILDING || result.ROAD_NAME || query),
      address: titleCase(result.ADDRESS || result.SEARCHVAL || query),
      postalCode: result.POSTAL || "",
      lat: Number(result.LATITUDE),
      lng: Number(result.LONGITUDE)
    };
  } catch (error) {
    console.warn(error);
    return null;
  }
}

function postalSectorHint(query) {
  return POSTAL_HINTS[query.slice(0, 2)];
}

function applySelectedLocation(point, zoom) {
  setSelected(point);
  zoomToSelected(point, zoom);
}

function zoomToSelected(point, zoom) {
  if (!state.map) return;
  requestAnimationFrame(() => {
    state.map.invalidateSize();
    state.map.setView([point.lat, point.lng], zoom, { animate: true });
  });
}

function setSelected(point) {
  state.selected = point;
  if (state.map) {
    if (state.userMarker) state.userMarker.remove();
    state.userMarker = L.marker([point.lat, point.lng], {
      icon: L.divIcon({
        className: "user-pin",
        html: '<span></span>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })
    }).addTo(state.map);
  }
  render();
}

function visibleFacilities() {
  return state.facilities
    .filter((facility) => state.activeCategories.has(facility.category))
    .map((facility) => ({
      ...facility,
      distanceKm: distanceKm(state.selected.lat, state.selected.lng, facility.lat, facility.lng)
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

function render() {
  el.selectedTitle.textContent = state.selected.title;
  el.selectedMeta.textContent = state.selected.meta;

  const facilities = visibleFacilities();
  const visibleSet = filteredByRadius(facilities);

  renderProximitySummary(facilities);
  renderBenchmarks();
  renderNearest(facilities);
  renderOverallNearest(visibleSet);
  renderList(visibleSet);
  renderMarkers(visibleSet);
}

function renderProximitySummary(facilities) {
  const activeCategories = CATEGORY_ORDER.filter((category) => state.activeCategories.has(category));
  const selectedRadius = state.radiusKm === "all" ? Infinity : state.radiusKm;
  el.selectedRadiusLabel.textContent = state.radiusKm === "all" ? "All" : formatRadiusLabel(state.radiusKm);

  const rows = activeCategories.map((category) => {
    const categoryFacilities = facilities.filter((facility) => facility.category === category);
    return `
      <div class="proximity-row ${category}">
        <span class="proximity-type"><span class="dot ${dotClass(category)}"></span>${CATEGORY[category].label}</span>
        <strong>${countWithin(categoryFacilities, 0.5)}</strong>
        <strong>${countWithin(categoryFacilities, 1)}</strong>
        <strong>${selectedRadius === Infinity ? categoryFacilities.length : countWithin(categoryFacilities, selectedRadius)}</strong>
      </div>
    `;
  }).join("");

  el.proximityGrid.innerHTML = `
    <div class="proximity-head">
      <span>Type</span>
      <span>500m</span>
      <span>1km</span>
      <span>${state.radiusKm === "all" ? "All" : formatRadiusLabel(state.radiusKm)}</span>
    </div>
    ${rows}
  `;
}

function countWithin(facilities, radiusKm) {
  return facilities.filter((facility) => facility.distanceKm <= radiusKm).length;
}

function renderBenchmarks() {
  const data = window.BENCHMARK_DATA;
  if (!data) {
    el.benchmarkContext.textContent = "Benchmark data unavailable.";
    el.benchmarkDetailLink.hidden = true;
    el.benchmarkList.innerHTML = "";
    return;
  }

  const constituency = selectedConstituency();
  if (!constituency) {
    el.benchmarkContext.textContent = "No constituency benchmark found for this selected point.";
    el.benchmarkDetailLink.hidden = true;
    el.benchmarkList.innerHTML = "";
    return;
  }

  const mode = state.benchmarkMode;
  const radius = String(state.benchmarkRadius);
  const activeCategories = CATEGORY_ORDER.filter((category) => state.activeCategories.has(category));
  const allFacilities = state.facilities.map((facility) => ({
    ...facility,
    distanceKm: distanceKm(state.selected.lat, state.selected.lng, facility.lat, facility.lng)
  }));
  const nearbyNames = (constituency.nearby || [])
    .map((id) => data.constituencies.find((item) => item.id === id)?.shortName)
    .filter(Boolean)
    .slice(0, 3)
    .join(", ");

  el.benchmarkContext.textContent = `${constituency.name}. ${data.modes?.[mode] || "Benchmark"} at ${formatRadiusLabel(state.benchmarkRadius)}. Nearby benchmark uses closest constituencies${nearbyNames ? `: ${nearbyNames}` : ""}.`;
  el.benchmarkDetailLink.hidden = false;
  el.benchmarkDetailLink.href = benchmarkDetailsUrl(mode, state.benchmarkRadius);

  el.benchmarkList.innerHTML = activeCategories.map((category) => {
    const count = allFacilities.filter((facility) => facility.category === category && facility.distanceKm <= state.benchmarkRadius).length;
    const comparisons = [
      benchmarkComparison("Constituency", count, data.stats.constituency?.[constituency.id]?.[mode]?.[category]?.[radius]),
      benchmarkComparison("Nearby", count, data.stats.nearby?.[constituency.id]?.[mode]?.[category]?.[radius]),
      benchmarkComparison("Singapore", count, data.stats.singapore?.[mode]?.[category]?.[radius])
    ].filter(Boolean);

    return `
      <article class="benchmark-card">
        <div class="benchmark-title">
          <span class="dot ${dotClass(category)}"></span>
          <span>${CATEGORY[category].label}</span>
          <strong>${count.toLocaleString()}</strong>
        </div>
        <div class="benchmark-comparisons">${comparisons.join("")}</div>
      </article>
    `;
  }).join("");
}

function benchmarkComparison(label, count, metric) {
  if (!metric) return "";
  const diff = count - metric.avg;
  const status = diff > 0.5 ? "above" : diff < -0.5 ? "below" : "average";
  const statusLabel = status === "average" ? "avg" : status;
  const percentile = percentileFromHistogram(metric.hist, count);
  const diffText = `${diff >= 0 ? "+" : ""}${diff.toFixed(1)} vs avg ${metric.avg.toFixed(1)}`;

  return `
    <div class="benchmark-comparison">
      <strong>${label}</strong>
      <span>${diffText} · percentile ${percentile}</span>
      <span class="benchmark-chip ${status}">${statusLabel}</span>
    </div>
  `;
}

function benchmarkDetailsUrl(mode, radius) {
  const params = new URLSearchParams({
    lat: String(state.selected.lat),
    lng: String(state.selected.lng),
    title: state.selected.title || "Selected point",
    meta: state.selected.meta || "",
    mode,
    radius: String(radius)
  });
  const postal = selectedPostalCode();
  if (postal) params.set("postal", postal);
  return `./benchmark-details.html?${params.toString()}`;
}

function percentileFromHistogram(hist, value) {
  const entries = Object.entries(hist || {}).map(([key, weight]) => [Number(key), Number(weight)]);
  const total = entries.reduce((sum, item) => sum + item[1], 0);
  if (!total) return 0;
  const cumulative = entries.reduce((sum, item) => sum + (item[0] <= value ? item[1] : 0), 0);
  return Math.max(1, Math.min(100, Math.round((cumulative / total) * 100)));
}

function selectedConstituency() {
  const data = window.BENCHMARK_DATA;
  if (!data) return null;
  const postal = selectedPostalCode();
  const indexed = postal ? data.postalIndex?.[postal] : null;
  if (indexed) return data.constituencies.find((item) => item.id === indexed.constituency) || null;
  return data.constituencies.find((item) => pointInGeometry(state.selected, item.geometry)) || null;
}

function selectedPostalCode() {
  if (/^\d{6}$/.test(state.selected.title || "")) return state.selected.title;
  const match = String(state.selected.meta || "").match(/\b(\d{6})\b/);
  return match?.[1] || "";
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

function formatRadiusLabel(radiusKm) {
  return radiusKm < 1 ? `${Math.round(radiusKm * 1000)}m` : `${radiusKm}km`;
}

function dotClass(category) {
  return category === "healthcare" ? "health" : category;
}

function filteredByRadius(facilities) {
  if (state.radiusKm === "all") return facilities;
  return facilities.filter((facility) => facility.distanceKm <= state.radiusKm);
}

function renderNearest(facilities) {
  const nearestByCategory = CATEGORY_ORDER
    .filter((category) => state.activeCategories.has(category))
    .map((category) => facilities.find((facility) => facility.category === category))
    .filter(Boolean);

  el.nearest.innerHTML = nearestByCategory.map((facility) => `
    <article class="nearest-card ${facility.category}">
      <p>${CATEGORY[facility.category].label}</p>
      <h3>${escapeHtml(facility.name)}</h3>
      <span>${formatDistance(facility.distanceKm)}</span>
    </article>
  `).join("");
}

function renderOverallNearest(facilities) {
  const nearest = facilities.slice(0, 6);
  if (!nearest.length) {
    el.overall.innerHTML = '<p class="empty-state compact">No active facilities match this filter.</p>';
    return;
  }

  el.overall.innerHTML = nearest.map((facility) => `
    <button class="overall-item" type="button" data-id="${facility.id}">
      <span class="category-chip ${facility.category}"><span>${CATEGORY[facility.category].glyph}</span></span>
      <span class="overall-copy">
        <strong>${escapeHtml(facility.name)}</strong>
        <small>${escapeHtml(CATEGORY[facility.category].label)} · ${formatDistance(facility.distanceKm)}</small>
      </span>
    </button>
  `).join("");

  el.overall.querySelectorAll(".overall-item").forEach((item) => {
    item.addEventListener("click", () => focusFacility(item.dataset.id));
  });
}

function renderList(facilities) {
  el.listTitle.textContent = state.radiusKm === "all" ? "All facilities" : `Within ${state.radiusKm} km`;

  if (!facilities.length) {
    el.list.innerHTML = '<p class="empty-state">No active facilities match this filter.</p>';
    return;
  }

  el.list.innerHTML = facilities.map((facility) => `
    <article class="facility-card" data-id="${facility.id}">
      <div class="facility-main">
        <span class="category-chip ${facility.category}"><span>${CATEGORY[facility.category].glyph}</span></span>
        <div>
          <h3>${escapeHtml(facility.name)}</h3>
          <p>${escapeHtml(facility.subcategory)} · ${escapeHtml(facility.operator || "Unknown operator")}</p>
        </div>
      </div>
      <div class="facility-meta">
        <span>${formatDistance(facility.distanceKm)}</span>
        <span>${escapeHtml(facility.address || "Address unavailable")}</span>
      </div>
      <div class="quality-row">${escapeHtml(qualitySignalLabel(facility))}</div>
      <div class="source-row">
        <a href="${facility.sourceUrl}" target="_blank" rel="noreferrer">${escapeHtml(facility.source)}</a>
        <span>${escapeHtml(facility.lastSeen || "unverified")}</span>
      </div>
    </article>
  `).join("");

  el.list.querySelectorAll(".facility-card").forEach((card) => {
    card.addEventListener("click", () => {
      focusFacility(card.dataset.id);
    });
  });
}

function focusFacility(id) {
  const facility = state.facilities.find((item) => item.id === id);
  if (!facility || !state.map) return;
  state.map.setView([facility.lat, facility.lng], 16);
  const marker = state.markers.get(facility.id);
  if (marker) marker.openPopup();
}

function renderMarkers(facilities) {
  if (!state.map) return;
  const visibleIds = new Set(facilities.map((facility) => facility.id));

  state.markers.forEach((marker, id) => {
    if (!visibleIds.has(id)) {
      marker.remove();
      state.markers.delete(id);
    }
  });

  facilities.forEach((facility) => {
    if (state.markers.has(facility.id)) {
      state.markers.get(facility.id).setPopupContent(facilityPopupHtml(facility));
      return;
    }
    const category = CATEGORY[facility.category];
    const marker = L.marker([facility.lat, facility.lng], {
      icon: L.divIcon({
        className: `facility-pin ${facility.category}`,
        html: `<span>${category.glyph}</span>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      })
    }).bindPopup(facilityPopupHtml(facility), {
      closeButton: false,
      autoPan: false,
      offset: [0, -8]
    });
    marker.on("mouseover", () => marker.openPopup());
    marker.on("mouseout", () => marker.closePopup());
    marker.on("focus", () => marker.openPopup());
    marker.on("blur", () => marker.closePopup());
    marker.addTo(state.map);
    const markerElement = marker.getElement();
    if (markerElement) {
      markerElement.addEventListener("mouseenter", () => marker.openPopup());
      markerElement.addEventListener("mouseleave", () => marker.closePopup());
      markerElement.addEventListener("focus", () => marker.openPopup());
      markerElement.addEventListener("blur", () => marker.closePopup());
    }
    state.markers.set(facility.id, marker);
  });
}

function facilityPopupHtml(facility) {
  return `
    <strong>${escapeHtml(facility.name)}</strong><br>
    ${escapeHtml(facility.subcategory)}<br>
    ${formatDistance(facility.distanceKm)} from selected point<br>
    ${escapeHtml(qualitySignalLabel(facility))}
  `;
}

function fitMapToVisibleFacilities() {
  if (!state.map) return;
  const facilities = filteredByRadius(visibleFacilities());
  const points = [
    [state.selected.lat, state.selected.lng],
    ...facilities.map((facility) => [facility.lat, facility.lng])
  ];

  if (points.length === 1) {
    state.map.setView(points[0], 15);
    return;
  }

  state.map.fitBounds(L.latLngBounds(points), {
    padding: [44, 44],
    maxZoom: state.radiusKm === "all" ? 12 : 16
  });
}

async function syncOpenData() {
  showCoverageStatus();
  fitMapToVisibleFacilities();
  return;

  el.sync.disabled = true;
  flashStatus("Syncing open-data feeds...");
  let imported = 0;
  const notes = [];

  try {
    const sports = await syncSportsFacilities();
    imported += sports;
    notes.push(`sports ${sports.toLocaleString()}`);
  } catch (error) {
    console.warn(error);
    notes.push("sports unavailable");
  }

  try {
    const parks = await syncParks();
    imported += parks;
    notes.push(`parks ${parks.toLocaleString()}`);
  } catch (error) {
    console.warn(error);
    notes.push("parks need server import");
  }

  try {
    const eldercare = await syncEldercare();
    imported += eldercare;
    notes.push(`eldercare ${eldercare.toLocaleString()}`);
  } catch (error) {
    console.warn(error);
    notes.push("eldercare need server import");
  }

  el.sync.disabled = false;
  flashStatus(imported ? `Synced ${imported.toLocaleString()} records: ${notes.join(", ")}` : `No new records synced: ${notes.join(", ")}`);
  render();
  fitMapToVisibleFacilities();
}

async function syncSportsFacilities() {
  const url = "https://data.gov.sg/api/action/datastore_search?resource_id=d_2cfb0867cdeb2b7303068995699dc33b&limit=5000";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Sports datastore failed");
  const payload = await response.json();
  const records = payload?.result?.records || [];
  const grouped = new Map();

  records.forEach((record, index) => {
    const lat = Number(record.Latitude || record.latitude);
    const lng = Number(record.Longitude || record.longitude);
    const name = record.VenueName || record.venue_name || "Unnamed sport facility";
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    const key = `${name}|${lat.toFixed(5)}|${lng.toFixed(5)}`;
    const item = grouped.get(key) || {
      id: `sg-sport-${slugify(name)}-${index}`,
      name,
      category: "sport",
      subcategory: "Sport facility",
      lat,
      lng,
      address: record.Address || record.Location || "",
      postalCode: record.PostalCode || "",
      operator: record.Operator || "Public sport facility",
      source: "data.gov.sg Sport Facilities National Census",
      sourceUrl: "https://data.gov.sg/",
      lastSeen: new Date().toISOString().slice(0, 10),
      facilityTypes: new Set()
    };
    if (record.SportsFacility || record.FacilityType) item.facilityTypes.add(record.SportsFacility || record.FacilityType);
    grouped.set(key, item);
  });

  return upsertFacilities(Array.from(grouped.values()).map((item) => ({
    ...item,
    subcategory: Array.from(item.facilityTypes).slice(0, 4).join(", ") || "Sport facility",
    facilityTypes: undefined
  })));
}

async function syncParks() {
  const pollUrl = "https://api-open.data.gov.sg/v1/public/api/datasets/d_0542d48f0991541706b58059381a6eca/poll-download";
  const poll = await fetch(pollUrl);
  if (!poll.ok) throw new Error("Parks poll failed");
  const payload = await poll.json();
  const downloadUrl = payload?.data?.url;
  if (!downloadUrl) throw new Error("Parks download URL missing");
  const geojson = await (await fetch(downloadUrl)).json();
  const features = geojson.features || [];
  return upsertFacilities(features.map((feature, index) => {
    const point = featureCenter(feature.geometry);
    const props = feature.properties || {};
    return {
      id: `sg-park-${props.Name || props.NAME || index}`,
      name: props.Name || props.NAME || props.Name_En || "Unnamed park",
      category: "park",
      subcategory: props.Type || props.TYPE || "Park",
      lat: point?.[0],
      lng: point?.[1],
      address: props.Address || props.ADDRESS || "",
      postalCode: props.PostalCode || props.POSTALCODE || "",
      operator: "NParks",
      source: "data.gov.sg NParks Parks GeoJSON",
      sourceUrl: "https://data.gov.sg/",
      lastSeen: new Date().toISOString().slice(0, 10)
    };
  }));
}

async function syncEldercare() {
  const pollUrl = "https://api-open.data.gov.sg/v1/public/api/datasets/d_f0fd1b3643ed8bd34bd403dedd7c1533/poll-download";
  const poll = await fetch(pollUrl);
  if (!poll.ok) throw new Error("Eldercare poll failed");
  const payload = await poll.json();
  const downloadUrl = payload?.data?.url;
  if (!downloadUrl) throw new Error("Eldercare download URL missing");
  const geojson = await (await fetch(downloadUrl)).json();
  const features = geojson.features || [];
  return upsertFacilities(features.map((feature, index) => {
    const props = feature.properties || {};
    const attrs = parseDescriptionTable(props.Description || props.DESCRIPTION || "");
    const point = featureCenter(feature.geometry);
    const name = attrs.NAME || props.Name || props.NAME || "Unnamed eldercare service";
    const address = [attrs.ADDRESSBLOCKHOUSENUMBER, attrs.ADDRESSSTREETNAME, attrs.ADDRESSFLOORNUMBER, attrs.ADDRESSUNITNUMBER]
      .filter(Boolean)
      .join(" ");
    return {
      id: `sg-eldercare-${slugify(name)}-${index}`,
      name,
      category: "healthcare",
      subcategory: "Eldercare",
      lat: point?.[0],
      lng: point?.[1],
      address,
      postalCode: attrs.ADDRESSPOSTALCODE || "",
      operator: "MOH / AIC eldercare service",
      source: "data.gov.sg Eldercare Services GeoJSON",
      sourceUrl: "https://data.gov.sg/",
      lastSeen: new Date().toISOString().slice(0, 10)
    };
  }));
}

function upsertFacilities(records) {
  let imported = 0;
  const existing = new Set(state.facilities.map((facility) => facility.id));
  records.forEach((record) => {
    if (!Number.isFinite(record.lat) || !Number.isFinite(record.lng) || existing.has(record.id)) return;
    state.facilities.push(record);
    existing.add(record.id);
    imported += 1;
  });
  return imported;
}

function featureCenter(geometry) {
  if (!geometry) return null;
  if (geometry.type === "Point") return [geometry.coordinates[1], geometry.coordinates[0]];
  const coords = flattenCoordinates(geometry.coordinates);
  if (!coords.length) return null;
  const sum = coords.reduce((acc, item) => [acc[0] + item[1], acc[1] + item[0]], [0, 0]);
  return [sum[0] / coords.length, sum[1] / coords.length];
}

function flattenCoordinates(value) {
  if (!Array.isArray(value)) return [];
  if (typeof value[0] === "number") return [value];
  return value.flatMap(flattenCoordinates);
}

function parseDescriptionTable(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const attrs = {};
  doc.querySelectorAll("tr").forEach((row) => {
    const key = row.querySelector("th")?.textContent?.trim();
    const value = row.querySelector("td")?.textContent?.trim();
    if (key && value) attrs[key] = value;
  });
  return attrs;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "item";
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

function formatDistance(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

function qualitySignalLabel(facility) {
  const signals = [
    facility.officialSignal || `Official: ${facility.source || "source listed"}`,
    accessSignal(facility),
    facility.qualityNote || "",
    facility.ageGroup ? `Age: ${facility.ageGroup}` : "",
    `Distance: ${formatDistance(facility.distanceKm)}`
  ].filter(Boolean);
  return signals.join(" · ");
}

function accessSignal(facility) {
  if (!facility.accessType) return "";
  if ((facility.category === "sport" || facility.category === "ageing" || facility.category === "children" || facility.category === "youth") && facility.accessSource) {
    return `Access/sector: ${facility.accessType} (${facility.accessSource})`;
  }
  return `Access/sector: ${facility.accessType}`;
}

function flashStatus(message) {
  el.status.textContent = message;
}

function titleCase(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase())
    .replace(/\bS(?:ingapore)?\b/i, "Singapore")
    .replace(/\bAmk\b/g, "AMK")
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
