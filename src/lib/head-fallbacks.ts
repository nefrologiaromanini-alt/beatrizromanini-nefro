/**
 * Head tags index.html ships as the fallback for crawlers that do not run
 * JavaScript. Once a route renders its own copy, the static one is dropped so
 * the rendered document carries exactly one description, robots and og:url.
 */
const OWNED_TAGS = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
];

export function dropStaticHeadFallbacks() {
  for (const selector of OWNED_TAGS) {
    document.querySelectorAll(`${selector}:not([data-rh])`).forEach((tag) => tag.remove());
  }
}
