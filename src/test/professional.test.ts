import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { directionsUrl, getMapEmbedUrl, professional } from "@/lib/professional";

const html = readFileSync("index.html", "utf8");
const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
if (!jsonLd) throw new Error("Missing structured professional data");
const graph = JSON.parse(jsonLd)["@graph"];
const doctor = graph.find((entry: { "@type": string }) => entry["@type"] === "Physician");
const clinic = graph.find((entry: { "@type": string }) => entry["@type"] === "MedicalClinic");

describe("Confirmed professional and appointment information", () => {
  it("uses the confirmed full professional name", () => {
    expect(professional.name).toBe("Dra. Beatriz Romanini Fernandes");
    expect(doctor.name).toBe(professional.name);
  });
  it("uses CRM-GO 41241", () => {
    expect(professional.crm).toBe("CRM-GO 41241");
    expect(doctor.identifier[0]).toMatchObject({ propertyID: "CRM-GO", value: "41241" });
  });
  it("assigns RQE 22146 to Clínica Médica", () => {
    expect(professional.specialties[0]).toEqual({ name: "Clínica Médica", rqe: "22146" });
    expect(doctor.identifier[1].value).toBe("22146");
  });
  it("assigns RQE 22147 to Nefrologia", () => {
    expect(professional.specialties[1]).toEqual({ name: "Nefrologia", rqe: "22147" });
    expect(doctor.identifier[2].value).toBe("22147");
  });
  it("sends appointments to the confirmed WhatsApp with the official message", () => {
    const url = new URL(professional.appointmentUrl);
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/5564984033031");
    expect(url.searchParams.get("text")).toBe("Olá! Gostaria de agendar uma consulta com a Dra. Beatriz Romanini.");
    expect(doctor.potentialAction.target).toBe(professional.appointmentUrl);
    expect(doctor.telephone).toBe("+5564984033031");
  });
  it("uses the confirmed landline", () => {
    expect(professional.phoneHref).toBe("tel:+556436212999");
    expect(clinic.telephone).toBe("+556436212999");
  });
  it("uses the confirmed clinic address for directions and structured data", () => {
    expect(professional.clinic).toBe("Center Clínica");
    expect(clinic.address).toMatchObject({ streetAddress: "Rua Rosulino Ferreira Guimarães, nº 970, Setor Central", addressLocality: "Rio Verde", addressRegion: "GO", postalCode: "75901-260", addressCountry: "BR" });
    expect(doctor.address).toEqual(clinic.address);
    const destination = new URL(directionsUrl).searchParams.get("destination");
    expect(destination).toContain("Rua Rosulino Ferreira Guimarães, nº 970");
    expect(destination).toContain("Rio Verde – GO, CEP 75901-260");
  });
  it("uses the confirmed Instagram", () => {
    expect(professional.instagramUrl).toBe("https://www.instagram.com/beatrizromanini.nefro/");
    expect(doctor.sameAs).toEqual([professional.instagramUrl]);
  });
  it("does not publish unprovided opening hours", () => {
    expect(Object.keys(doctor)).not.toContain("openingHoursSpecification");
    expect(Object.keys(clinic)).not.toContain("openingHours");
    expect(Object.keys(clinic)).not.toContain("openingHoursSpecification");
  });
  it("requires a browser key and passes the confirmed address to the map", () => {
    expect(getMapEmbedUrl(undefined)).toBeUndefined();
    const url = new URL(getMapEmbedUrl("test-key") ?? "");
    expect(url.pathname).toBe("/maps/embed/v1/place");
    expect(url.searchParams.get("q")).toContain("Rio Verde – GO");
  });
});