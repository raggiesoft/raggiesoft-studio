#!/usr/bin/env node
/**
 * @license MIT
 * ============================================================================
 * scripts/prerender.mjs — Static Site Generator, OpenGraph, AI Spec & VPAT Publisher
 * Property: https://raggiesoftstudio.com (301 target of installwithoutlimits.com)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW (100-LEVEL NODE.JS SSG BUILD SCRIPT):
 *   What does this script do at the end of `npm run build`?
 *     1. Compiles `src/entry-server.ts` into `.ssr-temp/` via Vite.
 *     2. Pre-renders all 5 Technical Preview routes (`/`, `/docs`, `/vpat`,
 *        `/accessibility`, `/security`) PLUS `/404.html` into static HTML5.
 *     3. Enforces `<= 60` character `<title>` and `<= 155` character
 *        `<meta description>`, emits OpenGraph + Twitter Card tags and
 *        Schema.org `SoftwareApplication` JSON-LD.
 *     4. Copies `llms.txt`, `llms-full.txt`, `SKILL.md`, and the compiled
 *        HTML5 VPAT 2.5 report directly from `desktop-apps/installer-studio/`
 *        into `dist/` so `https://raggiesoftstudio.com/llms.txt` and `/vpat/...`
 *        never drift from `instbuild.exe`!
 *     5. Emits `dist/sitemap.xml`, `dist/robots.txt`, and the IndexNow key!
 * ============================================================================
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const ssrDir = path.join(projectRoot, '.ssr-temp');
const installerStudioRoot = path.resolve(projectRoot, '../../../desktop-apps/installer-studio');

const SITE_ORIGIN = 'https://raggiesoftstudio.com';
const OG_IMAGE = 'https://assets.raggiesoft.com/raggiesoft-a11y-studio/images/og-a11y-studio.jpg';
const FAVICON_SVG = 'https://assets.raggiesoft.com/raggiesoft-a11y-studio/images/studio-logo.svg';
const INDEXNOW_KEY = '726167676965736f6674696e6465786e';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildSeoHead({ seoTitle, seoDescription, canonicalUrl, noindex = false }) {
  if (seoTitle.length > 60) {
    throw new Error(`SEO Title exceeds 60 chars (${seoTitle.length}): "${seoTitle}"`);
  }
  if (seoDescription.length > 155) {
    throw new Error(`SEO Description exceeds 155 chars (${seoDescription.length}): "${seoDescription}"`);
  }

  const robots = noindex ? 'noindex,follow' : 'index,follow';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_ORIGIN}/#software`,
        name: 'RaggieSoft Installer Studio',
        alternateName: 'Install Without Limits',
        url: `${SITE_ORIGIN}/`,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows 11 (x64, ARM64)',
        softwareVersion: '0.3.0',
        license: 'https://opensource.org/licenses/MIT',
        author: {
          '@type': 'Organization',
          name: 'RaggieSoft',
          url: 'https://raggiesoft.dev'
        },
        offers: {
          '@type': 'Offer',
          name: 'Open-Source Technical Preview (MIT)',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: 'RaggieSoft Installer Studio'
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seoTitle,
        description: seoDescription,
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        about: { '@id': `${SITE_ORIGIN}/#software` }
      }
    ]
  };

  return [
    `<title>${escapeHtml(seoTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(seoDescription)}" />`,
    `<meta name="robots" content="${robots}" />`,
    ...(noindex ? [] : [`<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`]),
    `<link rel="icon" type="image/svg+xml" href="${escapeHtml(FAVICON_SVG)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="RaggieSoft Installer Studio" />`,
    `<meta property="og:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(OG_IMAGE)}" />`,
    `<meta property="og:image:alt" content="RaggieSoft Installer Studio — Zero-Dependency Win32 C++20 Windows Packaging Suite" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(OG_IMAGE)}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  ].join('\n    ');
}

async function main() {
  const viteBin = path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
  execFileSync(
    process.execPath,
    [viteBin, 'build', '--ssr', 'src/entry-server.ts', '--outDir', '.ssr-temp'],
    { cwd: projectRoot, stdio: 'inherit' }
  );

  const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const ssrEntryUrl = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
  const { renderStudioPage, STUDIO_ROUTES } = await import(ssrEntryUrl);

  for (const route of STUDIO_ROUTES) {
    const { html } = renderStudioPage(route.path);
    const canonicalUrl = route.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.path}`;
    const headMarkup = buildSeoHead({
      seoTitle: route.seoTitle,
      seoDescription: route.seoDescription,
      canonicalUrl,
      noindex: false
    });

    const finalPage = templateHtml
      .replace('<!--SSR_HEAD-->', headMarkup)
      .replace('<!--SSR_OUTLET-->', html);

    if (route.path === '/') {
      fs.writeFileSync(path.join(distDir, 'index.html'), finalPage, 'utf8');
    } else {
      const subName = route.path.replace(/^\/+/, '');
      const routeFolder = path.join(distDir, subName);
      fs.mkdirSync(routeFolder, { recursive: true });
      fs.writeFileSync(path.join(routeFolder, 'index.html'), finalPage, 'utf8');
      fs.writeFileSync(path.join(distDir, `${subName}.html`), finalPage, 'utf8');
    }
  }

  // Generate genuine `/404.html` (`noindex,follow`)
  const notFoundRender = renderStudioPage('/404');
  const notFoundHead = buildSeoHead({
    seoTitle: '404 Not Found | RaggieSoft Installer Studio',
    seoDescription: 'The requested RaggieSoft Installer Studio page could not be found.',
    canonicalUrl: `${SITE_ORIGIN}/404`,
    noindex: true
  });
  fs.writeFileSync(
    path.join(distDir, '404.html'),
    templateHtml.replace('<!--SSR_HEAD-->', notFoundHead).replace('<!--SSR_OUTLET-->', notFoundRender.html),
    'utf8'
  );

  // Copy machine-readable AI specs (`llms.txt`, `llms-full.txt`, `SKILL.md`) emitted by `instbuild.exe --emit-ai-spec`
  const specsDir = path.join(installerStudioRoot, 'specs');
  for (const specFile of ['llms.txt', 'llms-full.txt', 'SKILL.md']) {
    const srcSpec = path.join(specsDir, specFile);
    if (fs.existsSync(srcSpec)) {
      fs.copyFileSync(srcSpec, path.join(distDir, specFile));
    }
  }

  // Copy live HTML5 VPAT 2.5 Conformance Report into `dist/vpat/raggiesoft-installer-studio-vpat-2.5.html`
  const vpatDestDir = path.join(distDir, 'vpat');
  fs.mkdirSync(vpatDestDir, { recursive: true });
  const vpatCandidates = [
    path.join(installerStudioRoot, 'projects', 'apps', 'installer-studio', 'out', 'raggiesoft-installer-studio-installer-vpat-2.5.html'),
    path.join(installerStudioRoot, 'examples', 'hello-raggiesoft', 'out', 'hello-raggiesoft-installer-vpat-2.5.html')
  ];
  for (const cand of vpatCandidates) {
    if (fs.existsSync(cand)) {
      fs.copyFileSync(cand, path.join(vpatDestDir, 'raggiesoft-installer-studio-vpat-2.5.html'));
      break;
    }
  }

  // Generate `sitemap.xml`, `robots.txt`, and IndexNow verification file
  const today = new Date().toISOString().slice(0, 10);
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...STUDIO_ROUTES.map((r) => {
      const loc = r.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${r.path}`;
      const priority = r.path === '/' ? '1.0' : '0.8';
      return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
    }),
    '</urlset>',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, 'utf8');
  fs.writeFileSync(path.join(distDir, `${INDEXNOW_KEY}.txt`), `${INDEXNOW_KEY}\n`, 'utf8');

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`[prerender] Pre-rendered ${STUDIO_ROUTES.length} routes + /llms.txt + VPAT 2.5 + sitemap.xml for ${SITE_ORIGIN}`);
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
