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

const CITY_CENTER = { lat: 1.2836, lng: 103.8519, label: "Raffles Place / Marina Bay" };

const CLIMATE_MONTHS = [
  { label: "Jan", season: "NE monsoon", windFrom: 25, windLabel: "NE wind", windDetail: "seasonal N/NE" },
  { label: "Feb", season: "NE monsoon", windFrom: 25, windLabel: "NE wind", windDetail: "seasonal N/NE" },
  { label: "Mar", season: "Late NE", windFrom: 35, windLabel: "NE wind", windDetail: "lighter N/NE" },
  { label: "Apr", season: "Inter-monsoon", windFrom: 135, windLabel: "Variable", windDetail: "variable breeze" },
  { label: "May", season: "Inter-monsoon", windFrom: 150, windLabel: "Variable", windDetail: "variable breeze" },
  { label: "Jun", season: "SW monsoon", windFrom: 160, windLabel: "S/SE wind", windDetail: "seasonal S/SE" },
  { label: "Jul", season: "SW monsoon", windFrom: 160, windLabel: "S/SE wind", windDetail: "seasonal S/SE" },
  { label: "Aug", season: "SW monsoon", windFrom: 160, windLabel: "S/SE wind", windDetail: "seasonal S/SE" },
  { label: "Sep", season: "SW monsoon", windFrom: 160, windLabel: "S/SE wind", windDetail: "seasonal S/SE" },
  { label: "Oct", season: "Inter-monsoon", windFrom: 115, windLabel: "Variable", windDetail: "variable storms" },
  { label: "Nov", season: "Inter-monsoon", windFrom: 65, windLabel: "Variable", windDetail: "variable wetter" },
  { label: "Dec", season: "NE monsoon", windFrom: 25, windLabel: "NE wind", windDetail: "seasonal N/NE" }
];

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
  housingFlatType: "all",
  housingOverlayExpanded: false,
  climateVisible: false,
  climateMonth: new Date().getMonth(),
  climateRestoreView: null,
  selected: { lat: 1.3521, lng: 103.8198, title: "Singapore centroid", meta: "Click the map or search a postal code." },
  markers: new Map(),
  climateLayer: null,
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
  housingFlatType: document.getElementById("housing-flat-type"),
  housingContext: document.getElementById("housing-context"),
  housingList: document.getElementById("housing-list"),
  climateToggle: document.getElementById("climate-toggle"),
  climateMonth: document.getElementById("climate-month"),
  climateLegend: document.getElementById("climate-legend"),
  mapHousingOverlay: document.getElementById("map-housing-overlay"),
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
  state.climateLayer = L.layerGroup().addTo(state.map);
  if (el.climateMonth) el.climateMonth.value = String(state.climateMonth);

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

  el.housingFlatType.addEventListener("change", () => {
    state.housingFlatType = el.housingFlatType.value;
    render();
  });

  el.climateToggle?.addEventListener("click", () => {
    state.climateVisible = !state.climateVisible;
    el.climateToggle.setAttribute("aria-pressed", String(state.climateVisible));
    el.climateToggle.classList.toggle("active", state.climateVisible);
    if (el.climateLegend) el.climateLegend.hidden = !state.climateVisible;
    renderClimateLayer();
    if (state.climateVisible) {
      state.climateRestoreView = {
        center: state.map.getCenter(),
        zoom: state.map.getZoom()
      };
      fitClimateView();
    } else {
      restoreClimateView();
    }
  });

  el.climateMonth?.addEventListener("change", () => {
    state.climateMonth = Number(el.climateMonth.value);
    renderClimateLayer();
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
  renderHousing();
  renderNearest(facilities);
  renderOverallNearest(visibleSet);
  renderList(visibleSet);
  renderMarkers(visibleSet);
  renderClimateLayer();
}

function renderHousing() {
  const summary = housingSummary();
  if (!summary.available) {
    el.housingContext.textContent = "Housing data unavailable.";
    el.housingList.innerHTML = "";
    renderMapHousing(summary);
    return;
  }

  if (!summary.town) {
    el.housingContext.textContent = "Search an HDB postal code or block address to infer an HDB town for price/rent context.";
    el.housingList.innerHTML = "";
    renderMapHousing(summary);
    return;
  }

  el.housingContext.textContent = summary.context;

  el.housingList.innerHTML = [
    housingCard("Resale", summary.resale, "median resale price", formatMoney, "sale transactions"),
    housingCard("Rent", summary.rent, "median monthly rent", formatMoney, "rental approvals"),
    housingSynthesisCard(summary)
  ].join("");
  renderMapHousing(summary);
}

function housingSummary() {
  const data = window.HOUSING_DATA;
  if (!data) return { available: false };

  const town = selectedHousingTown();
  const flatType = state.housingFlatType;
  const flatLabel = flatType === "all" ? "all HDB flat types" : flatType;
  if (!town) return { available: true, town: "" };

  const resale = housingMetric(data.resale, town, flatType);
  const rent = housingMetric(data.rent, town, flatType);
  const amenity = amenityAccessSummary();
  const centrality = cityProximitySummary();
  const transit = transitSummary();
  const context = `${titleCase(town)} · ${flatLabel} · latest 12 months. Resale window ${data.resale.windowStart} to ${data.resale.latestMonth}; rent window ${data.rent.windowStart} to ${data.rent.latestMonth}.`;

  return {
    available: true,
    town,
    flatType,
    flatLabel,
    resale,
    rent,
    amenity,
    centrality,
    transit,
    context,
    synthesis: housingSynthesisText(amenity, resale, rent)
  };
}

function housingMetric(dataset, town, flatType) {
  const townMetric = dataset.byTown?.[town]?.[flatType] || null;
  const sgMetric = dataset.singapore?.[flatType] || null;
  const percentile = dataset.percentiles?.[flatType]?.[town] || null;
  if (!townMetric || !sgMetric) return null;
  return { town: townMetric, singapore: sgMetric, percentile };
}

function housingCard(label, metric, metricLabel, formatter, countLabel) {
  if (!metric) {
    return `
      <article class="housing-card">
        <div class="housing-title">
          <span>${label}</span>
          <strong>Unavailable</strong>
        </div>
        <p class="housing-note">No recent HDB ${label.toLowerCase()} records for this town/flat-type selection.</p>
      </article>
    `;
  }

  const diff = metric.town.median - metric.singapore.median;
  const status = diff > 0 ? "above" : diff < 0 ? "below" : "average";
  const statusLabel = status === "average" ? "avg" : status;
  const diffText = `${diff >= 0 ? "+" : ""}${formatter(diff)} vs SG ${formatter(metric.singapore.median)}`;
  const quartiles = `${formatter(metric.town.p25)} to ${formatter(metric.town.p75)}`;

  return `
    <article class="housing-card">
      <div class="housing-title">
        <span>${label}</span>
        <strong>${formatter(metric.town.median)}</strong>
      </div>
      <div class="housing-comparison">
        <span>${metricLabel}</span>
        <strong>${diffText}</strong>
        <span class="benchmark-chip ${status}">${statusLabel}</span>
      </div>
      <p class="housing-note">Percentile ${metric.percentile}; middle range ${quartiles}; ${metric.town.count.toLocaleString()} ${countLabel}.</p>
      ${metric.town.medianPsm ? `<p class="housing-note">Median resale price per sqm: ${formatter(metric.town.medianPsm)}</p>` : ""}
    </article>
  `;
}

function housingSynthesisCard(summary) {
  return `
    <article class="housing-card synthesis">
      <div class="housing-title">
        <span>Planning read</span>
      </div>
      <p class="housing-note">${escapeHtml(summary.synthesis)}</p>
      <p class="housing-note">Housing is town-level; amenity access uses ${formatRadiusLabel(state.benchmarkRadius)} facility counts around the selected point.</p>
    </article>
  `;
}

function renderMapHousing(summary) {
  if (!el.mapHousingOverlay) return;
  el.mapHousingOverlay.className = "map-housing-overlay compact";

  if (!summary.available) {
    el.mapHousingOverlay.innerHTML = `
      <div class="map-housing-title">Housing</div>
      <p>Housing data unavailable.</p>
    `;
    return;
  }
  if (!summary.town) {
    el.mapHousingOverlay.innerHTML = `
      <div class="map-housing-title">Housing</div>
      <p>Search an HDB postal code or block to show affordability on the map.</p>
    `;
    return;
  }

  const expanded = state.housingOverlayExpanded;
  el.mapHousingOverlay.className = `map-housing-overlay ${expanded ? "expanded" : "collapsed"}`;
  const toggleLabel = expanded ? "Collapse" : "Expand";
  const inlineMetrics = [
    mapHousingInlineMetric("Resale", summary.resale),
    mapHousingInlineMetric("Rent", summary.rent)
  ].join(" · ");

  el.mapHousingOverlay.innerHTML = `
    <div class="map-housing-head">
      <div class="map-housing-title">
        <span>${escapeHtml(titleCase(summary.town))}</span>
        <small>${escapeHtml(summary.flatLabel)}</small>
      </div>
      <button type="button" class="map-housing-toggle" data-housing-overlay-toggle aria-expanded="${expanded}" aria-label="${toggleLabel} housing overlay">${toggleLabel}</button>
    </div>
    ${expanded ? `
      <div class="map-housing-metrics">
        ${mapHousingMetric("Resale", summary.resale)}
        ${mapHousingMetric("Rent", summary.rent)}
      </div>
      ${renderMapHousingSignals(summary)}
      <small>Town-level housing · ${formatRadiusLabel(state.benchmarkRadius)} amenity access</small>
    ` : `
      <p class="map-housing-compact">${escapeHtml(inlineMetrics)}</p>
      <small>Town-level housing · ${formatRadiusLabel(state.benchmarkRadius)} access</small>
    `}
  `;

  const toggle = el.mapHousingOverlay.querySelector("[data-housing-overlay-toggle]");
  toggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.housingOverlayExpanded = !state.housingOverlayExpanded;
    renderHousing();
  });
}

function mapHousingMetric(label, metric) {
  if (!metric) return `<div><span>${label}</span><strong>N/A</strong></div>`;
  return `
    <div>
      <span>${label}</span>
      <strong>${formatMoney(metric.town.median)}</strong>
      <small>p${metric.percentile}</small>
    </div>
  `;
}

function mapHousingInlineMetric(label, metric) {
  if (!metric) return `${label} N/A`;
  return `${label} ${formatMoney(metric.town.median)} p${metric.percentile}`;
}

function renderMapHousingSignals(summary) {
  const amenityChips = (summary.amenity?.items || [])
    .map((item) => {
      const percentile = Number.isFinite(item.percentile) ? ` · p${item.percentile}` : "";
      return signalChip(item.label, item.status, "access", `${item.count} vs avg ${formatNumber(item.avg)}${percentile}`);
    })
    .join("");
  const affordabilityChips = [
    housingSignalChip("Resale", summary.resale),
    housingSignalChip("Rent", summary.rent)
  ].filter(Boolean).join("");
  const locationChip = summary.centrality
    ? signalChip("City centre", summary.centrality.status, "centrality", `${formatDistance(summary.centrality.distanceKm)} · p${summary.centrality.percentile}`)
    : "";
  const transitChips = [
    transitSignalChip("MRT", summary.transit?.mrt),
    transitSignalChip("Bus terminal", summary.transit?.bus),
    transitSignalChip("Future MRT", summary.transit?.futureMrt)
  ].filter(Boolean).join("");

  return `
    <div class="map-housing-signals" aria-label="Housing and amenity signals">
      ${locationChip || transitChips ? `
        <div class="signal-group">
          <span>Location</span>
          <div>${locationChip}${transitChips}</div>
        </div>
      ` : ""}
      ${amenityChips ? `
        <div class="signal-group">
          <span>Access</span>
          <div>${amenityChips}</div>
        </div>
      ` : ""}
      ${affordabilityChips ? `
        <div class="signal-group">
          <span>Affordability</span>
          <div>${affordabilityChips}</div>
        </div>
      ` : ""}
      <p class="signal-note">p = percentile. City/transit/access p compare against benchmark points; resale/rent p compares against Singapore HDB towns.</p>
    </div>
  `;
}

function transitSignalChip(label, item) {
  if (!item) return "";
  if (item.type === "future_mrt") {
    return signalChip(label, "near", "transit", `${item.name} · ${formatDistance(item.distanceKm)} · ${item.opening || "future"}`);
  }
  const detail = Number.isFinite(item.percentile) ? `${formatDistance(item.distanceKm)} · p${item.percentile}` : formatDistance(item.distanceKm);
  return signalChip(label, item.status, "transit", `${item.name} · ${detail}`);
}

function housingSignalChip(label, metric) {
  if (!metric) return "";
  const diff = metric.town.median - metric.singapore.median;
  const status = diff > 0 ? "above" : diff < 0 ? "below" : "near";
  return signalChip(label, status, "affordability", `${formatMoney(metric.town.median)} · p${metric.percentile}`);
}

function signalChip(label, status, type, detail) {
  const normalizedStatus = status === "average" ? "near" : status;
  const statusLabel = normalizedStatus === "near" ? "near avg" : normalizedStatus;
  return `
    <span class="signal-chip ${escapeHtml(type)} ${escapeHtml(normalizedStatus)}">
      <strong>${escapeHtml(label)}</strong>
      <span>${escapeHtml(statusLabel)}</span>
      <small>${escapeHtml(detail)}</small>
    </span>
  `;
}

function housingSynthesisText(amenity, resale, rent) {
  const affordability = [
    metricStatusPhrase("resale", resale),
    metricStatusPhrase("rent", rent)
  ].filter(Boolean).join("; ");
  const amenityText = amenity?.summary || "Amenity access benchmark unavailable";
  return `${amenityText}; ${affordability || "housing benchmark unavailable"}.`;
}

function metricStatusPhrase(label, metric) {
  if (!metric) return "";
  const diff = metric.town.median - metric.singapore.median;
  const status = diff > 0 ? "above" : diff < 0 ? "below" : "near";
  return `${status}-SG ${label} (${formatMoney(metric.town.median)}, p${metric.percentile})`;
}

function amenityAccessSummary() {
  const data = window.BENCHMARK_DATA;
  if (!data) return null;
  const mode = state.benchmarkMode;
  const radius = String(state.benchmarkRadius);
  const allFacilities = state.facilities.map((facility) => ({
    ...facility,
    distanceKm: distanceKm(state.selected.lat, state.selected.lng, facility.lat, facility.lng)
  }));
  const focus = [
    ["Care", "healthcare"],
    ["Ageing", "ageing"],
    ["Children", "children"],
    ["Youth", "youth"],
    ["Sport", "sport"],
    ["Parks", "park"],
    ["PCN", "connector"]
  ];
  const items = focus.map(([label, category]) => {
    const count = allFacilities.filter((facility) => facility.category === category && facility.distanceKm <= state.benchmarkRadius).length;
    const metric = data.stats.singapore?.[mode]?.[category]?.[radius];
    const avg = metric?.avg;
    if (!Number.isFinite(avg)) return { label, category, count, avg: null, percentile: null, status: "near", phrase: `${label.toLowerCase()} unavailable` };
    const diff = count - avg;
    const status = diff > 0.5 ? "above" : diff < -0.5 ? "below" : "near";
    const percentile = percentileFromHistogram(metric.hist, count);
    return { label, category, count, avg, diff, percentile, status, phrase: `${label.toLowerCase()} ${status} SG avg` };
  });
  const parts = items.map((item) => item.phrase);
  const score = items.reduce((sum, item) => sum + (item.status === "above" ? 1 : item.status === "below" ? -1 : 0), 0);
  const headline = score >= 2 ? "strong amenity access" : score <= -2 ? "lower amenity access" : "mixed amenity access";
  return {
    summary: `${headline}: ${parts.join(", ")}`,
    items,
    parts,
    score
  };
}

function cityProximitySummary() {
  const data = window.BENCHMARK_DATA;
  const distance = distanceKm(state.selected.lat, state.selected.lng, CITY_CENTER.lat, CITY_CENTER.lng);
  const benchmarkDistances = (data?.points || [])
    .map((point) => benchmarkPointCoords(point))
    .filter(Boolean)
    .map((point) => distanceKm(point.lat, point.lng, CITY_CENTER.lat, CITY_CENTER.lng))
    .filter(Number.isFinite);
  const percentile = centralityPercentile(benchmarkDistances, distance);
  const status = percentile >= 67 ? "above" : percentile <= 33 ? "below" : "near";
  return {
    distanceKm: distance,
    percentile,
    status,
    reference: CITY_CENTER.label
  };
}

function transitSummary() {
  const data = window.TRANSIT_DATA;
  if (!data) return null;
  return {
    mrt: nearestTransitNode(data.mrt || [], data.benchmarks?.mrt, "mrt"),
    bus: nearestTransitNode(data.bus || [], data.benchmarks?.bus, "bus"),
    futureMrt: nearestTransitNode(data.futureMrt || [], data.benchmarks?.futureMrt, "future")
  };
}

function nearestTransitNode(nodes, benchmark, type) {
  const nearest = nodes
    .map((node) => ({
      ...node,
      distanceKm: distanceKm(state.selected.lat, state.selected.lng, node.lat, node.lng)
    }))
    .filter((node) => Number.isFinite(node.distanceKm))
    .sort((a, b) => a.distanceKm - b.distanceKm)[0];
  if (!nearest) return null;

  const percentile = transitPercentileFromHistogram(benchmark?.hist, nearest.distanceKm);
  const status = transitStatus(type, nearest.distanceKm, percentile);
  return { ...nearest, percentile, status };
}

function transitPercentileFromHistogram(hist, distanceKmValue) {
  const entries = Object.entries(hist || {}).map(([key, weight]) => [Number(key), Number(weight)]);
  const total = entries.reduce((sum, item) => sum + item[1], 0);
  if (!total || !Number.isFinite(distanceKmValue)) return null;
  const selectedMeters = Math.round(distanceKmValue * 1000);
  const fartherOrSame = entries.reduce((sum, item) => sum + (item[0] >= selectedMeters ? item[1] : 0), 0);
  return Math.max(1, Math.min(100, Math.round((fartherOrSame / total) * 100)));
}

function transitStatus(type, distanceKmValue, percentile) {
  if (type === "future") return distanceKmValue <= 1.2 ? "above" : "near";
  if (distanceKmValue <= 0.8) return "above";
  if (distanceKmValue > 1.5) return "below";
  if (!Number.isFinite(percentile)) return "near";
  return percentile >= 67 ? "above" : percentile <= 33 ? "below" : "near";
}

function benchmarkPointCoords(point) {
  if (Array.isArray(point)) return { lat: Number(point[2]), lng: Number(point[3]) };
  if (point && Number.isFinite(point.lat) && Number.isFinite(point.lng)) return point;
  return null;
}

function centralityPercentile(distances, selectedDistance) {
  if (!distances.length || !Number.isFinite(selectedDistance)) return 0;
  const fartherOrSame = distances.filter((distance) => distance >= selectedDistance).length;
  return Math.max(1, Math.min(100, Math.round((fartherOrSame / distances.length) * 100)));
}

function selectedHousingTown() {
  const data = window.HOUSING_DATA;
  if (!data?.addressTownIndex) return "";
  const address = `${state.selected.title || ""} ${state.selected.meta || ""}`;
  const block = parseAddressBlock(address);
  const normalizedAddress = normalizeAddressStreet(address);
  if (!block || !normalizedAddress) return "";

  for (const [key, town] of Object.entries(data.addressTownIndex)) {
    const [candidateBlock, candidateStreet] = key.split("|");
    if (candidateBlock === block && normalizedAddress.includes(candidateStreet)) return town;
  }
  return "";
}

function parseAddressBlock(address) {
  const withoutPostal = String(address || "").replace(/\b\d{6}\b/g, " ");
  const match = withoutPostal.match(/\b(?:BLK\s*)?(\d+[A-Z]?)\b/i);
  return match ? match[1].toUpperCase() : "";
}

function normalizeAddressStreet(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/\bAVENUE\b/g, "AVE")
    .replace(/\bSTREET\b/g, "ST")
    .replace(/\bROAD\b/g, "RD")
    .replace(/\bDRIVE\b/g, "DR")
    .replace(/\bCRESCENT\b/g, "CRES")
    .replace(/\bCENTRAL\b/g, "CTRL")
    .replace(/\bNORTH\b/g, "NTH")
    .replace(/\bSOUTH\b/g, "STH")
    .replace(/\bUPPER\b/g, "UPP")
    .replace(/\bBUKIT\b/g, "BT")
    .replace(/\s+/g, " ")
    .trim();
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

function renderClimateLayer() {
  if (!state.map || !state.climateLayer) return;
  state.climateLayer.clearLayers();
  if (!state.climateVisible) return;

  const selected = state.selected;
  const climate = CLIMATE_MONTHS[state.climateMonth] || CLIMATE_MONTHS[0];
  const sun = sunPathSummary(state.climateMonth);
  const pmSun = pmSunSummary(sun);
  const heat = heatExposureSummary(climate, pmSun);
  const downwind = (climate.windFrom + 180) % 360;
  const sunRadiusKm = 0.86;

  L.polygon([
    [selected.lat, selected.lng],
    latLngFromBearing(selected, pmSun.startBearing, 0.92),
    latLngFromBearing(selected, pmSun.centerBearing, 1.06),
    latLngFromBearing(selected, pmSun.endBearing, 0.92)
  ], {
    className: "climate-pm-wedge",
    color: "#c026d3",
    fillColor: "#d946ef",
    fillOpacity: 0.18,
    opacity: 0.7,
    weight: 2,
    interactive: false
  }).addTo(state.climateLayer);

  L.polyline(sunArcPoints(selected, sun.sunriseBearing, sun.sunsetBearing, sunRadiusKm), {
    className: "climate-sun-arc",
    color: "#ffb000",
    opacity: 0.96,
    weight: 5,
    interactive: false
  }).addTo(state.climateLayer);
  sunTimeLabels(selected, sun, sunRadiusKm).forEach((item) => {
    climateTimeLabel(item.latlng, item.label).addTo(state.climateLayer);
  });

  L.circle([selected.lat, selected.lng], {
    className: `heat-halo ${heat.status}`,
    radius: 430,
    color: heat.color,
    fillColor: heat.color,
    fillOpacity: 0.11,
    opacity: 0.58,
    weight: 2,
    interactive: false
  }).addTo(state.climateLayer);

  const windStart = latLngFromBearing(selected, climate.windFrom, 0.76);
  const windEnd = latLngFromBearing(selected, downwind, 0.76);
  L.polyline([windStart, windEnd], {
    className: "climate-wind-line",
    color: "#0284c7",
    opacity: 0.95,
    weight: 5,
    interactive: false
  }).addTo(state.climateLayer);

  climateLabel(latLngFromBearing(selected, pmSun.centerBearing, 0.72), "PM west sun", pmSun.detail, "sun").addTo(state.climateLayer);
  climateLabel(latLngFromBearing(selected, downwind, 0.94), "Wind flow", climate.windDetail, "wind").addTo(state.climateLayer);
  climateLabel(latLngFromBearing(selected, 18, 0.34), heat.label, heat.short, `heat ${heat.status}`).addTo(state.climateLayer);
  windArrowHead(windStart, downwind).addTo(state.climateLayer);
  windArrowHead(windEnd, downwind).addTo(state.climateLayer);
}

function fitClimateView() {
  if (!state.map) return;
  const targetZoom = Math.min(state.map.getZoom(), 16);
  requestAnimationFrame(() => {
    state.map.invalidateSize();
    state.map.setView([state.selected.lat, state.selected.lng], targetZoom, { animate: true });
  });
}

function restoreClimateView() {
  if (!state.map || !state.climateRestoreView) return;
  const { center, zoom } = state.climateRestoreView;
  state.climateRestoreView = null;
  state.map.setView(center, zoom, { animate: true });
}

function sunPathSummary(monthIndex) {
  const dayOfYear = Math.round((monthIndex + 0.5) * 30.44);
  const declination = 23.44 * Math.sin(toRad((360 / 365) * (dayOfYear - 81)));
  const sunriseBearing = clamp(90 - declination, 63, 116);
  const sunsetBearing = 360 - sunriseBearing;
  return { declination, sunriseBearing, sunsetBearing };
}

function sunArcPoints(origin, startBearing, endBearing, radiusKm) {
  const points = [];
  const steps = 28;
  for (let index = 0; index <= steps; index += 1) {
    const bearing = startBearing + ((endBearing - startBearing) * index / steps);
    points.push(latLngFromBearing(origin, bearing, radiusKm));
  }
  return points;
}

function sunTimeLabels(origin, sun, radiusKm) {
  return ["7am", "10am", "1pm", "4pm", "7pm"].map((label, index, labels) => {
    const bearing = sun.sunriseBearing + ((sun.sunsetBearing - sun.sunriseBearing) * index / (labels.length - 1));
    return {
      label,
      latlng: latLngFromBearing(origin, bearing, radiusKm + 0.035)
    };
  });
}

function pmSunSummary(sun) {
  const centerBearing = normalizeBearing(sun.sunsetBearing);
  return {
    centerBearing,
    startBearing: normalizeBearing(centerBearing - 27),
    endBearing: normalizeBearing(centerBearing + 27),
    detail: `${compassDirection(centerBearing)} exposure`
  };
}

function heatExposureSummary(climate, pmSun) {
  const scoredFacilities = state.facilities.map((facility) => ({
    ...facility,
    distanceKm: distanceKm(state.selected.lat, state.selected.lng, facility.lat, facility.lng)
  }));
  const parks = scoredFacilities.filter((facility) => facility.category === "park" && facility.distanceKm <= 1).length;
  const connectors = scoredFacilities.filter((facility) => facility.category === "connector" && facility.distanceKm <= 1).length;
  const city = cityProximitySummary();
  let score = 0;
  if (parks === 0) score += 2;
  else if (parks <= 1) score += 1;
  else score -= 1;
  if (connectors >= 5) score -= 1;
  if ((city?.percentile || 0) >= 85) score += 1;
  if (angleDifference(pmSun.centerBearing, 270) <= 35) score += 1;
  if (climate.season === "Inter-monsoon") score += 1;
  else if (climate.season.includes("monsoon")) score -= 1;

  if (score >= 2) return { status: "high", label: "Heat proxy", short: "higher risk", color: "#d05a34" };
  if (score <= -1) return { status: "lower", label: "Heat proxy", short: "lower risk", color: "#2f8a4d" };
  return { status: "mixed", label: "Heat proxy", short: "mixed risk", color: "#d97706" };
}

function climateLabel(latlng, title, detail, type) {
  return L.marker(latlng, {
    interactive: false,
    icon: L.divIcon({
      className: `climate-label ${type}`,
      html: `<strong>${escapeHtml(title)}</strong><small>${escapeHtml(detail)}</small>`,
      iconSize: [92, 38],
      iconAnchor: [46, 19]
    })
  });
}

function climateTimeLabel(latlng, label) {
  return L.marker(latlng, {
    interactive: false,
    icon: L.divIcon({
      className: "climate-time-label",
      html: `<span>${escapeHtml(label)}</span>`,
      iconSize: [38, 22],
      iconAnchor: [19, 11]
    })
  });
}

function windArrowHead(latlng, bearing) {
  return L.marker(latlng, {
    interactive: false,
    icon: L.divIcon({
      className: "climate-arrow",
      html: `<span style="transform: rotate(${bearing - 90}deg)"></span>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })
  });
}

function latLngFromBearing(origin, bearing, distance) {
  const radius = 6371;
  const angularDistance = distance / radius;
  const bearingRad = toRad(bearing);
  const lat1 = toRad(origin.lat);
  const lng1 = toRad(origin.lng);
  const lat2 = Math.asin(Math.sin(lat1) * Math.cos(angularDistance) +
    Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(bearingRad));
  const lng2 = lng1 + Math.atan2(
    Math.sin(bearingRad) * Math.sin(angularDistance) * Math.cos(lat1),
    Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2)
  );
  return [lat2 * 180 / Math.PI, lng2 * 180 / Math.PI];
}

function normalizeBearing(bearing) {
  return ((bearing % 360) + 360) % 360;
}

function angleDifference(a, b) {
  const diff = Math.abs(normalizeBearing(a) - normalizeBearing(b));
  return Math.min(diff, 360 - diff);
}

function compassDirection(bearing) {
  const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return directions[Math.round(normalizeBearing(bearing) / 22.5) % directions.length];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
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

function formatNumber(value) {
  if (!Number.isFinite(value)) return "N/A";
  return Math.abs(value) >= 10 ? value.toFixed(0) : value.toFixed(1);
}

function formatMoney(value) {
  const sign = value < 0 ? "-" : "";
  const absolute = Math.abs(Number(value) || 0);
  return `${sign}$${Math.round(absolute).toLocaleString()}`;
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
