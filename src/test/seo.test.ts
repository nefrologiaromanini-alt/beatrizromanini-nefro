import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { absoluteUrl, origin, seoPages, seoPaths } from "@/lib/seo";
import { professional } from "@/lib/professional";

const html = readFileSync("index.html", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const home = readFileSync("src/pages/Index.tsx", "utf8");

const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
if (!jsonLd) throw new Error("Missing structured data in index.html");
const graph = JSON.parse(jsonLd)["@graph"];
const doctor = graph.find((entry: { "@type": string }) => entry["@type"] === "Physician");
const clinic = graph.find((entry: { "@type": string }) => entry["@type"] === "MedicalClinic");
const site = graph.find((entry: { "@type": string }) => entry["@type"] === "WebSite");

const CANONICAL = "https://drabeatriznefrologia.com";

describe("Canonical domain", () => {
  it("serves every crawler-facing URL from the primary domain", () => {
    expect(origin).toBe(CANONICAL);
    expect(professional.siteUrl).toBe(CANONICAL);
    expect(html).not.toContain("lovable.app");
    expect(robots).not.toContain("lovable.app");
    expect(sitemap).not.toContain("lovable.app");
  });

  it("lets each route own its canonical instead of the shared document", () => {
    // A sitewide canonical in index.html would point every route at the homepage.
    expect(html).not.toContain('rel="canonical"');
    expect(seoPaths.length).toBe(5);
  });

  it("lists every public route once in the sitemap", () => {
    const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    expect(locs).toEqual(seoPaths.map((path) => absoluteUrl(path)));
  });

  it("lets robots.txt index the site and reference the canonical sitemap", () => {
    expect(robots).toContain("Allow: /");
    expect(robots).not.toMatch(/Disallow:\s*\//);
    expect(robots).toContain(`Sitemap: ${CANONICAL}/sitemap.xml`);
  });
});

describe("Homepage search metadata", () => {
  it("uses the requested meta title", () => {
    expect(html).toContain(
      "<title>Dra. Beatriz Romanini | Nefrologista em Rio Verde – GO</title>",
    );
    expect(seoPages["/"].title).toBe("Dra. Beatriz Romanini | Nefrologista em Rio Verde – GO");
  });

  it("uses the requested meta description", () => {
    expect(html).toContain(
      '<meta name="description" content="Nefrologista e clínica médica em Rio Verde – GO. Consultas para doença renal crônica, hipertensão arterial, cálculos renais e prevenção de doenças. Agende sua consulta.">',
    );
    expect(seoPages["/"].description).toBe(
      "Nefrologista e clínica médica em Rio Verde – GO. Consultas para doença renal crônica, hipertensão arterial, cálculos renais e prevenção de doenças. Agende sua consulta.",
    );
  });

  it("keeps the homepage indexable", () => {
    expect(html).toContain('<meta name="robots" content="index, follow" />');
    expect(html).not.toContain("noindex");
  });

  it("renders one H1 with the requested wording", () => {
    expect(home.match(/<h1/g) ?? []).toHaveLength(1);
    expect(home).toContain("Dra. Beatriz Romanini — Nefrologista em Rio Verde");
  });

  it("points Open Graph previews at the canonical domain", () => {
    expect(html).toContain(`content="${CANONICAL}/og-image.jpg"`);
    expect(html).toContain(`content="${CANONICAL}/"`);
    expect(html).toContain('<meta property="og:locale" content="pt_BR" />');
    expect(html).toContain('<meta name="twitter:card" content="summary_large_image">');
  });
});

describe("Structured medical data", () => {
  it("publishes the physician on the canonical domain", () => {
    expect(doctor["@id"]).toBe(`${CANONICAL}/#physician`);
    expect(doctor.url).toBe(`${CANONICAL}/`);
    expect(doctor.image).toBe(`${CANONICAL}/og-image.jpg`);
    expect(doctor.areaServed).toMatchObject({
      "@type": "City",
      name: "Rio Verde",
      containedInPlace: { "@type": "State", name: "GO" },
    });
  });

  it("links the physician to the clinic and the clinic to the site", () => {
    expect(doctor.memberOf).toEqual({ "@id": `${CANONICAL}/#clinic` });
    expect(clinic["@id"]).toBe(`${CANONICAL}/#clinic`);
    expect(clinic.url).toBe(`${CANONICAL}/`);
    expect(site.url).toBe(`${CANONICAL}/`);
    expect(site.inLanguage).toBe("pt-BR");
  });

  it("keeps the confirmed credentials and contact channels intact", () => {
    expect(doctor.identifier[0]).toMatchObject({ propertyID: "CRM-GO", value: "41241" });
    expect(doctor.telephone).toBe("+5564984033031");
    expect(clinic.telephone).toBe("+556436212999");
    expect(doctor.sameAs).toEqual(["https://www.instagram.com/beatrizromanini.nefro/"]);
  });

  it("does not publish unprovided opening hours or reviews", () => {
    for (const entry of [doctor, clinic, site]) {
      expect(Object.keys(entry)).not.toContain("openingHoursSpecification");
      expect(Object.keys(entry)).not.toContain("openingHours");
      expect(Object.keys(entry)).not.toContain("aggregateRating");
      expect(Object.keys(entry)).not.toContain("review");
    }
  });
});
