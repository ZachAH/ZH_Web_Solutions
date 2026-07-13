#!/usr/bin/env node
/**
 * Per-route prerender for static SEO meta tags.
 *
 * Reads dist/index.html (the SPA entry) and writes a copy for every
 * indexable route into dist/<route>/index.html — replacing the
 * canonical, og:url, twitter:url, <title>, and description so each
 * route ships with its OWN first-paint SEO tags.
 *
 * Why this exists:
 *   This is a client-side React SPA. The Seo.jsx component sets per-
 *   route meta tags after hydration, but Googlebot frequently locks
 *   onto the FIRST canonical it sees in the initial HTML payload.
 *   Without this script, every route's initial HTML has
 *   `<link rel="canonical" href="https://zachhowell.dev/">`, which
 *   tells Google that /services, /about, /audit, etc. are duplicates
 *   of the homepage. This script eliminates that bug at build time
 *   without adding an SSR/SSG framework.
 *
 * Netlify behavior:
 *   Netlify serves static files first, then falls back to the
 *   `_redirects` SPA rule for unknown paths. So /services serves
 *   dist/services/index.html (correct canonical), and any deep route
 *   we didn't prerender still hydrates the SPA via index.html.
 */
import fs from 'node:fs';
import path from 'node:path';
import { getLocationPath, locationPages } from '../src/data/locationPages.js';
import { seoContent } from '../src/data/seoContent.js';
import { blogPosts } from '../src/data/blogPosts.js';
import { absoluteUrl, canonicalPath, distSegment } from '../src/utils/seoUrls.js';
const DIST = path.resolve('dist');
const TEMPLATE_PATH = path.join(DIST, 'index.html');

// Per-route SEO config. `home`, `services`, `about`, and `custom-ai` are
// pulled from src/data/seoContent.js — the SAME source each page's <Seo>
// component reads from — so first-paint copy and hydrated copy can never
// drift apart again. Routes without a shared-content entry keep their
// title/description defined here directly.
const ROUTES = [
  {
    // canonicalPath('/') -> distSegment('/') -> '' -> writes to dist/index.html
    // itself, keeping the homepage's first-paint meta locked to the same
    // seoContent.home values Home.jsx's <Seo> uses after hydration.
    path: canonicalPath('/'),
    title: seoContent.home.title,
    description: seoContent.home.description,
  },
  {
    path: canonicalPath('/services'),
    title: seoContent.services.title,
    description: seoContent.services.description,
  },
  {
    path: canonicalPath('/custom-ai'),
    title: seoContent.customAi.title,
    description: seoContent.customAi.description,
  },
  {
    path: canonicalPath('/about'),
    title: seoContent.about.title,
    description: seoContent.about.description,
  },
  {
    path: canonicalPath('/pricing'),
    title: 'Pricing | Custom Builds & Partnership Plans — Zach Howell',
    description:
      'Transparent pricing for custom React builds and ongoing partnership plans. No hidden fees — see exactly what you get at each tier.',
  },
  {
    path: canonicalPath('/audit'),
    title: 'Free Website Audit | Find What\'s Hurting Your Site — Zach Howell',
    description:
      'Get a free, no-strings website audit. I review your site\'s performance, SEO, accessibility, and conversion gaps and send you a personalized action plan.',
  },
  {
    path: canonicalPath('/custom-discovery'),
    title: 'Custom Build Discovery | Zach Howell',
    description:
      'Start a custom website or web app project with ZH Web Solutions. Share your business, goals, and what you need built and get a response within 24 hours.',
    noindex: true,
  },
  {
    path: canonicalPath('/locations'),
    title: 'Web Design Service Areas in Southeastern Wisconsin | ZH Web Solutions',
    description:
      'Explore the Southeastern Wisconsin markets ZH Web Solutions serves, including Milwaukee, Brookfield, Mequon, Elm Grove, Whitefish Bay, and West Bend.',
  },
  ...locationPages.map((location) => ({
    path: getLocationPath(location.slug),
    title: `Custom Web Development in ${location.city}, WI | ZH Web Solutions`,
    description: location.metaDescription,
  })),
  {
    path: canonicalPath('/blog'),
    title: 'Web Development, Local SEO & AI Blog | ZH Web Solutions',
    description:
      'Practical web development, local SEO, and AI automation guidance for Brookfield, Milwaukee, Waukesha, and Southeastern Wisconsin small businesses.',
  },
  ...blogPosts.map((post) => ({
    path: canonicalPath(`/blog/${post.slug}`),
    title: `${post.title} | ZH Web Solutions Blog`,
    description: post.metaDescription,
  })),
];

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`[prerender] dist/index.html not found at ${TEMPLATE_PATH}`);
  console.error('[prerender] Did you run `vite build` first?');
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const renderRoute = ({ path: routePath, title, description, noindex = false }) => {
  const url = absoluteUrl(routePath);
  const escTitle = escapeHtml(title);
  const escDesc = escapeHtml(description);

  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escTitle}</title>`
  );

  // Replace <meta name="title">
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="title" content="${escTitle}" />`
  );

  // Replace <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escDesc}" />`
  );

  // Replace <meta property="og:url">
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${url}" />`
  );

  // Replace <meta property="og:title">
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escTitle}" />`
  );

  // Replace <meta property="og:description">
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escDesc}" />`
  );

  // Replace <meta property="twitter:url">
  html = html.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:url" content="${url}" />`
  );

  // Replace <meta property="twitter:title">
  html = html.replace(
    /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:title" content="${escTitle}" />`
  );

  // Replace <meta property="twitter:description">
  html = html.replace(
    /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:description" content="${escDesc}" />`
  );

  // Replace <link rel="canonical">
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${url}" />`
  );

  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="${noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'}" />`
  );

  return html;
};

let written = 0;
for (const route of ROUTES) {
  const html = renderRoute(route);
  const outDir = path.join(DIST, distSegment(route.path));
  const outFile = path.join(outDir, 'index.html');

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, html, 'utf8');
  console.log(`[prerender] wrote ${path.relative(DIST, outFile)}  (canonical: ${absoluteUrl(route.path)})`);
  written++;
}

console.log(`[prerender] done — ${written} route(s) written`);
