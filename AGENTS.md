# Architecture rules
- Keep confirmed professional and appointment details in a shared data module consumed by all pages; this prevents contact information drifting between views.
- Keep crawler-facing medical and location metadata in the static HTML document and test its consistency with the shared data module; the site is a client-rendered Vite application.