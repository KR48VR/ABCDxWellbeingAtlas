function init() {
  const qa = window.DATA_QA;
  if (!qa) return;

  document.getElementById("qa-subtitle").textContent = `Generated ${formatDate(qa.generatedAt)}. App data bundle generated ${qa.appGeneratedAt}.`;
  renderSummary(qa);
  renderValidations(qa);
  renderSources(qa);
  renderCaveats(qa);
}

function renderSummary(qa) {
  const items = [
    ["Facilities", qa.summary.totalFacilities],
    ["Benchmark points", qa.summary.benchmarkResidentialPoints],
    ["Constituencies", qa.summary.constituencyCount],
    ["Housing towns", qa.summary.housingTowns || 0],
    ["Validation issues", qa.summary.invalidFacilityCount + qa.summary.duplicateIdCount],
    ["Postal fixes", qa.summary.postalCorrectionCount || 0]
  ];

  document.getElementById("qa-summary").innerHTML = items.map(([label, value]) => `
    <div class="metric">
      <span>${label}</span>
      <strong>${Number(value).toLocaleString()}</strong>
    </div>
  `).join("");
}

function renderValidations(qa) {
  document.getElementById("qa-validations").innerHTML = `
    <h2>Validation Checks</h2>
    <div class="validation-list">
      ${qa.validations.map((item) => `
        <article class="validation-card">
          <div class="card-head">
            <h3>${escapeHtml(item.name)}</h3>
            <span class="status ${item.status}">${item.status}</span>
          </div>
          <p class="muted">${escapeHtml(item.value)}</p>
          ${renderDetail(item.detail)}
        </article>
      `).join("")}
    </div>
  `;
}

function renderSources(qa) {
  document.getElementById("qa-sources").innerHTML = `
    <h2>Source Inventory</h2>
    <div class="source-list">
      ${qa.sources.map((source) => `
        <article class="source-card">
          <div class="card-head">
            <h3>${escapeHtml(source.name)}</h3>
            <a href="${escapeHtml(source.sourceUrl)}" target="_blank" rel="noreferrer">Source</a>
          </div>
          <p class="muted">${escapeHtml(source.type)}</p>
          <div class="source-grid">
            ${metric("Raw", source.rawRecords)}
            ${metric("Mapped", source.mappedRecords)}
            ${metric("Derived", source.derivedRecords ?? 0)}
            ${metric("Skipped", source.skippedRecords ?? 0)}
          </div>
          <p class="muted"><strong>Fields used:</strong> ${escapeHtml((source.fieldsUsed || []).join(", "))}</p>
          ${source.postalStatuses ? `<p class="muted"><strong>Postal cleanup:</strong> ${escapeHtml(formatCounts(source.postalStatuses))}</p>` : ""}
          ${source.licenceTypes ? `<p class="muted"><strong>Licence types:</strong> ${escapeHtml(formatCounts(source.licenceTypes))}</p>` : ""}
          ${source.duplicateRows ? `<p class="muted"><strong>Duplicate source rows collapsed:</strong> ${Number(source.duplicateRows).toLocaleString()}</p>` : ""}
          <ul class="tag-list">
            ${(source.limitations || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;
}

function renderCaveats(qa) {
  document.getElementById("qa-caveats").innerHTML = `
    <h2>Methodology & Caveats</h2>
    <ul class="caveat-list">
      ${qa.benchmarkMethodology.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      ${qa.caveats.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function metric(label, value) {
  return `
    <div>
      <span>${label}</span>
      <strong>${Number(value || 0).toLocaleString()}</strong>
    </div>
  `;
}

function renderDetail(detail) {
  if (!detail || !Object.keys(detail).length) return "";
  if (Array.isArray(detail) && detail.length && detail.every((item) => item && typeof item === "object" && !Array.isArray(item))) {
    const columns = Object.keys(detail[0]);
    return `
      <div class="detail-table-wrap">
        <table class="detail-table">
          <thead><tr>${columns.map((column) => `<th>${escapeHtml(titleLabel(column))}</th>`).join("")}</tr></thead>
          <tbody>
            ${detail.map((row) => `
              <tr>${columns.map((column) => `<td>${escapeHtml(row[column] ?? "")}</td>`).join("")}</tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  return `<pre>${escapeHtml(JSON.stringify(detail, null, 2))}</pre>`;
}

function titleLabel(value) {
  return String(value)
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
}

function formatCounts(counts) {
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}: ${Number(value || 0).toLocaleString()}`)
    .join(", ");
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
