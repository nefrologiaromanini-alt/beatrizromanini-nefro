# Architecture rules
- Keep confirmed professional and appointment details in a shared data module consumed by all pages; this prevents contact information drifting between views.
- Keep crawler-facing medical and location metadata in the static HTML document and test its consistency with the shared data module; the site is a client-rendered Vite application.
- Use a compact appointment-button option and section-scoped editorial color tokens for presentation/location refinements; this preserves other pages and the existing visual identity.
- Keep per-route search metadata (title, description, canonical) in one data module consumed by a single head component, and keep the static sitemap's URL list in sync with it; this prevents routes drifting apart in search results.