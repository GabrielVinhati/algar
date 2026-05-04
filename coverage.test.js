import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load coverage polygons from the static file
let COVERAGE_POLYS;
beforeAll(() => {
  const js = readFileSync(resolve(__dirname, "coverage.js"), "utf-8");
  // Extract the JSON array from "var COVERAGE_POLYS=[...];"
  const match = js.match(/var COVERAGE_POLYS=(\[[\s\S]*\]);/);
  COVERAGE_POLYS = JSON.parse(match[1]);
});

// Ray-casting point-in-polygon (same logic as scripts.js)
function pointInPolygon(lng, lat, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if ((yi > lat) !== (yj > lat) && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function isInCoverage(lng, lat) {
  for (const poly of COVERAGE_POLYS) {
    if (pointInPolygon(lng, lat, poly)) return true;
  }
  return false;
}

// ========================================================
// Coordenadas confirmadas DENTRO dos poligonos de cobertura
// ========================================================
const COVERED_POINTS = [
  // Minas Gerais
  { name: "BH - Centro",           lng: -43.945095, lat: -19.922732 },
  { name: "BH - Savassi",          lng: -43.935642, lat: -19.929494 },
  { name: "BH - Barreiro regiao",  lng: -43.983700, lat: -19.946150 },
  { name: "Nova Lima - Centro",    lng: -43.847069, lat: -19.985409 },
  { name: "Nova Lima - regiao",    lng: -43.949608, lat: -20.007214 },
  { name: "Contagem - Centro",     lng: -44.082903, lat: -19.915804 },
  { name: "Contagem - regiao",     lng: -44.037172, lat: -19.966758 },
  { name: "Juiz de Fora - Centro", lng: -43.349853, lat: -21.761967 },
  { name: "Juiz de Fora - S.Mateus", lng: -43.343271, lat: -21.758145 },
  { name: "Varginha",              lng: -45.435600, lat: -21.594700 },
  { name: "Pocos de Caldas",       lng: -46.588200, lat: -21.798100 },
  { name: "Pouso Alegre",          lng: -45.922650, lat: -22.272250 },
  { name: "Divinopolis",           lng: -44.903400, lat: -20.183650 },
  { name: "Itauna",                lng: -44.578926, lat: -20.088019 },
  { name: "Passos",                lng: -46.606223, lat: -20.726811 },
  // Espirito Santo
  { name: "Serra - Laranjeiras",   lng: -40.253484, lat: -20.194342 },
  { name: "Vila Velha",            lng: -40.386350, lat: -20.309700 },
  { name: "Vitoria - Praia do Canto", lng: -40.296434, lat: -20.303176 },
  { name: "Vitoria - centro",      lng: -40.297949, lat: -20.302821 },
  { name: "Cariacica",             lng: -40.386350, lat: -20.309700 },
];

// ========================================================
// Coordenadas que NAO devem estar cobertas
// ========================================================
const NOT_COVERED_POINTS = [
  // Capitais distantes
  { name: "Sao Paulo - Centro",       lng: -46.633652, lat: -23.550525 },
  { name: "Rio de Janeiro - Centro",  lng: -43.176943, lat: -22.901146 },
  { name: "Curitiba - Centro",        lng: -49.267825, lat: -25.428173 },
  { name: "Manaus - Centro",          lng: -60.014384, lat: -3.120484 },
  // Cidades MG nao atendidas
  { name: "Uberlandia",               lng: -48.262268, lat: -18.894141 },
  { name: "Montes Claros",            lng: -43.861700, lat: -16.735000 },
  { name: "Governador Valadares",     lng: -41.950000, lat: -18.851000 },
  // Ponto no oceano (offshore)
  { name: "Oceano Atlantico",         lng: -39.000000, lat: -20.300000 },
  // Ponto no interior de SP
  { name: "Campinas - SP",            lng: -47.060833, lat: -22.905833 },
];

describe("Coverage polygons data", () => {
  it("should have loaded polygons", () => {
    expect(COVERAGE_POLYS).toBeDefined();
    expect(COVERAGE_POLYS.length).toBeGreaterThan(1000);
  });

  it("each polygon should have at least 3 points", () => {
    for (const poly of COVERAGE_POLYS) {
      expect(poly.length).toBeGreaterThanOrEqual(3);
    }
  });
});

describe("pointInPolygon algorithm", () => {
  const square = [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ];

  it("detects point inside a simple square", () => {
    expect(pointInPolygon(0, 0, square)).toBe(true);
  });

  it("detects point outside a simple square", () => {
    expect(pointInPolygon(2, 2, square)).toBe(false);
  });

  it("detects point outside on the opposite side", () => {
    expect(pointInPolygon(-2, 0, square)).toBe(false);
  });
});

describe("Cidades COBERTAS - devem retornar true", () => {
  COVERED_POINTS.forEach(({ name, lng, lat }) => {
    it(`${name} (${lat}, ${lng})`, () => {
      expect(isInCoverage(lng, lat)).toBe(true);
    });
  });
});

describe("Cidades NAO COBERTAS - devem retornar false", () => {
  NOT_COVERED_POINTS.forEach(({ name, lng, lat }) => {
    it(`${name} (${lat}, ${lng})`, () => {
      expect(isInCoverage(lng, lat)).toBe(false);
    });
  });
});
