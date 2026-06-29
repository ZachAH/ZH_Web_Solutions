# PostPilot — standalone marketing site

A self-contained Vite + React + Tailwind landing site for **PostPilot**, deployed
to its own subdomain: **postpilot.zachhowell.dev**.

It lives inside the main `ZH_Web_Solutions` repo but is a completely separate app
(its own `package.json`, build, and deploy). The main `zachhowell.dev` site is
unaffected by anything in this folder.

## Local development

```bash
cd postpilot
npm install
npm run dev      # http://localhost:5173
```

## Deploy (Netlify — as a SECOND site from the same repo)

The main site is one Netlify site. PostPilot is a **second** Netlify site that
builds only this subfolder:

1. Netlify → **Add new site → Import an existing project** → pick the same
   `ZH_Web_Solutions` GitHub repo.
2. In the build settings, set **Base directory** to `postpilot`.
   (Build command `npm run build` and publish dir `dist` are already in
   `postpilot/netlify.toml`, resolved relative to that base directory.)
3. Deploy. You'll get a temporary `*.netlify.app` URL — confirm it looks right.

Both sites now auto-deploy from `main`; each only rebuilds when its own files change.

## Point the subdomain (DNS)

1. In the PostPilot Netlify site → **Domain settings → Add a domain** →
   `postpilot.zachhowell.dev`.
2. At your DNS provider for `zachhowell.dev`, add the record Netlify shows —
   typically a **CNAME**: `postpilot` → `<your-site>.netlify.app`
   (or the Netlify-provided target). Netlify provisions HTTPS automatically.

## Editing copy

All page content lives in `src/App.jsx` (data arrays near the top: `painPoints`,
`voicePoints`, `steps`, `postTypes`, `features`, `faqs`). Brand tokens are in
`tailwind.config.js` and `src/index.css`, mirrored from the main site.

Booking link and contact constants are in `src/calendly.js` and the top of
`src/App.jsx` (`PHONE_NUMBER`, `FACEBOOK_URL`).
