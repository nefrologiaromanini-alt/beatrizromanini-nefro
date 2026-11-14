import { professional } from "@/lib/professional";

export type PageMeta = {
  title: string;
  description: string;
};

/** Canonical origin for every crawler-facing URL (primary connected domain). */
export const origin = professional.siteUrl;

/**
 * One entry per public route. The sitemap, the per-page <head> tags and the
 * consistency tests all read this map, so a route cannot drift between them.
 */
export const seoPages = {
  "/": {
    title: "Dra. Beatriz Romanini | Nefrologista em Rio Verde – GO",
    description:
      "Nefrologista e clínica médica em Rio Verde – GO. Consultas para doença renal crônica, hipertensão arterial, cálculos renais e prevenção de doenças. Agende sua consulta.",
  },
  "/sobre": {
    title: "Sobre | Dra. Beatriz Romanini – Nefrologista em Rio Verde",
    description:
      "Formação e modo de trabalho da nefrologista Dra. Beatriz Romanini Fernandes em Rio Verde – GO: clínica médica, nefrologia e cuidado preventivo.",
  },
  "/areas": {
    title: "Áreas de Atuação | Dra. Beatriz Romanini – Nefrologista em Rio Verde",
    description:
      "Áreas de atuação: doença renal crônica, cálculos renais, hipertensão arterial, creatinina elevada, proteinúria e infecção urinária de repetição.",
  },
  "/conteudos": {
    title: "Conteúdos sobre Saúde Renal | Dra. Beatriz Romanini",
    description:
      "Artigos educativos sobre saúde renal, prevenção e qualidade de vida com a nefrologista Dra. Beatriz Romanini em Rio Verde – GO.",
  },
  "/contato": {
    title: "Contato e Agendamento | Dra. Beatriz Romanini – Rio Verde – GO",
    description:
      "Agende sua consulta com a nefrologista Dra. Beatriz Romanini na Center Clínica, Rio Verde – GO. WhatsApp (64) 98403-3031 ou telefone (64) 3621-2999.",
  },
} satisfies Record<string, PageMeta>;

export type SeoPath = keyof typeof seoPages;

export const seoPaths = Object.keys(seoPages) as SeoPath[];

export function absoluteUrl(path: SeoPath | string): string {
  return path === "/" ? `${origin}/` : `${origin}${path}`;
}
