export const professional = {
  name: "Dra. Beatriz Romanini Fernandes",
  crm: "CRM-GO 41241",
  specialties: [
    { name: "Clínica Médica", rqe: "22146" },
    { name: "Nefrologia", rqe: "22147" },
  ],
  clinic: "Center Clínica",
  street: "Rua Rosulino Ferreira Guimarães, nº 970",
  neighborhood: "Setor Central",
  city: "Rio Verde",
  state: "GO",
  postalCode: "75901-260",
  phone: "(64) 3621-2999",
  phoneHref: "tel:+556436212999",
  whatsapp: "(64) 98403-3031",
  appointmentUrl: "https://wa.me/5564984033031?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Beatriz%20Romanini.",
  instagram: "@beatrizromanini.nefro",
  instagramUrl: "https://www.instagram.com/beatrizromanini.nefro/",
  siteUrl: "https://beatrizromanini-nefrologia.lovable.app",
} as const;

export const fullAddress = `${professional.street}, ${professional.neighborhood}, ${professional.city} – ${professional.state}, CEP ${professional.postalCode}`;
export const mapQuery = `${professional.clinic}, ${fullAddress}, Brasil`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

export function getMapEmbedUrl(browserKey: string | undefined) {
  if (!browserKey) return undefined;
  return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(browserKey)}&q=${encodeURIComponent(mapQuery)}&language=pt-BR&region=BR&solution_id=gmp_lovable_agentskills_v1`;
}