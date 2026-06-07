# ABCD x Wellbeing Atlas: Care, Sport, Parks & More for All Ages

Static MVP for searching a Singapore postal sector or dropped map point and ranking nearby healthcare, ageing, children, youth, sport, park, and park connector facilities.

## Run

```sh
python3 -m http.server 8766
```

Open `http://127.0.0.1:8766/`.

## Data Coverage

- Bundled layer: 1,454 health records, 133 ageing/eldercare records, 1,856 children records, 4,214 youth records, 6,888 sport/exercise venue records, 461 park records, and 867 park connector records.
- Health coverage includes curated public institutions/polyclinics, 1,189 mapped CHAS clinic points, and 249 HSA registered retail pharmacy locations.
- The CHAS import maps 1,189 unique clinic points from 1,193 source rows; 3 duplicate source rows are collapsed and 1 source row with impossible geometry is skipped rather than approximated.
- Ageing coverage includes data.gov.sg eldercare points such as senior activity centres, cluster support, senior group homes, and aged-care homes. It does not yet include the full live AIC Active Ageing Centre locator.
- Ageing sector is marked as Public, Private, People/social sector, or Unknown using conservative provider/name inference.
- Children coverage includes 1,856 ECDA childcare/kindergarten centre records geocoded through OneMap postal-code coordinates.
- Youth coverage includes youth-suitable recreation venues derived from the data.gov.sg Sport Facilities National Census: courts, pools, tracks, climbing/skating venues, fields, and similar school-age/youth recreation points.
- The ECDA cache covers 1,745 of 1,746 valid unique postal codes in the downloaded CSV. Postal `640991` did not return OneMap geometry and is skipped rather than approximated.
- Sport coverage comes from the data.gov.sg Sport Facilities National Census and may include non-public venues.
- Sport access type is marked as Public, Private, or Unknown using conservative name-based inference unless the record is curated.
- Parks coverage comes from the data.gov.sg NParks Parks GeoJSON.
- Park connector coverage comes from the data.gov.sg Park Connector Loop GeoJSON. Connector features are represented by the centre point of each connector geometry.
- Quality signals in the app combine official source/provenance, access where available, and distance from the selected point.
- Benchmarks use data.gov.sg Electoral Boundary 2025 GeoJSON for constituencies and HDB Existing Building GeoJSON for residential comparison points.
- Benchmark mode `Residential locations` gives each HDB residential building/postal point equal weight.
- Benchmark mode `Population weighted` currently uses HDB building footprint area as an open-data proxy weight until dwelling-unit or finer population weights are added.
- Nearby constituency benchmarks use the five closest constituencies by electoral-boundary centroid.
- The Benchmark panel links to a details report showing percentile meaning plus example residential postal points ranked above and below the selected point.

## Next Data Work

- Add non-CHAS private specialist, allied-health, CPF/MediSave, and manual-review ingestion with provenance fields.
- Replace postal-sector fallback with exact OneMap geocoding once an API token is configured server-side.
- Upgrade the population-weighted benchmark from footprint proxy to dwelling-unit or subzone population weights.
