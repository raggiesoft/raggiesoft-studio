#!/usr/bin/env node
/**
 * @license MIT
 * ============================================================================
 * scripts/prerender.mjs — Static Site Generator, OpenGraph, AI Spec & VPAT Publisher
 * Property: https://raggiesoftstudio.com (RaggieSoft Studio Suite Portal)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW (100-LEVEL NODE.JS SSG BUILD SCRIPT):
 *   What does this script do at the end of `npm run build`?
 *     1. Compiles `src/entry-server.ts` into `.ssr-temp/` via Vite so Node.js
 *        can execute our TypeScript route renderers cleanly.
 *     2. Pre-renders all Suite-level and `/installer-studio/*` routes defined
 *        in `STUDIO_ROUTES` (`/`, `/launcher-studio`, `/showcase-studio`,
 *        `/installer-studio`, `/installer-studio/screenshots`,
 *        `/installer-studio/roadmap`, `/installer-studio/docs`,
 *        `/installer-studio/faq`, `/installer-studio/changelog`,
 *        `/installer-studio/vpat`, `/installer-studio/accessibility`, and
 *        `/installer-studio/security`) PLUS `/404.html` into static HTML5!
 *     3. Enforces `<= 60` character `<title>` and `<= 155` character
 *        `<meta description>`, emits OpenGraph + Twitter Card tags and
 *        Schema.org `SoftwareApplication` / `ItemList` JSON-LD.
 *     4. Publishes `/installer-studio/docs/<topicId>` chapters directly from
 *        `desktop-apps/installer-studio/help/raggiesoft.installer-studio/`,
 *        copies `llms-full.txt`, `SKILL.md`, `ROADMAP.md`, and VPAT 2.5 HTML5
 *        into both `/installer-studio/*` and `/` for zero broken bookmarks,
 *        and emits a comprehensive Suite-Wide `/llms.txt` indexing all 4
 *        RaggieSoft Studio tools!
 *     5. Mounts the pre-compiled IBM Carbon Design System Accessibility Studio
 *        sub-portal (`subdomains/a11y/dist`) under `dist/accessibility-studio/`,
 *        and emits `dist/sitemap.xml`, `dist/robots.txt`, and IndexNow!
 * ============================================================================
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Resolve workspace paths relative to `raggiesoftstudio.com/www/scripts/prerender.mjs`.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const ssrDir = path.join(projectRoot, '.ssr-temp');
const installerStudioRoot = path.resolve(projectRoot, '../../../desktop-apps/installer-studio');
const a11yDistDir = path.resolve(projectRoot, '../../raggiesoft.com/subdomains/a11y/dist');

/**
 * Recursively copies a pre-built sub-application directory (such as the IBM Carbon
 * Design System Accessibility Studio bundle from `subdomains/a11y/dist`) into
 * `dist/accessibility-studio/`, skipping root-only crawler manifests (`robots.txt`,
 * `sitemap.xml`, and the IndexNow key file) that belong exclusively at `dist/`!
 */
function copyDirRecursive(srcDir, destDir, skipNames = new Set()) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (skipNames.has(entry.name)) continue;
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath, skipNames);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Canonical production origin, OpenGraph imagery, favicon, and IndexNow verification key.
const SITE_ORIGIN = 'https://raggiesoftstudio.com';
const DEFAULT_OG_IMAGE = 'https://assets.raggiesoft.com/raggiesoft-installer-studio/images/og-installer-studio.jpg';
const MOCKUP_CDN_BASE = 'https://assets.raggiesoft.com/raggiesoft-studio/mockups';
const FAVICON_SVG = 'https://assets.raggiesoft.com/raggiesoft-installer-studio/images/installer-studio-logo.svg';
const INDEXNOW_KEY = '726167676965736f6674696e6465786e';

/**
 * Escapes `<`, `>`, `&`, and `"` so dynamic strings inside HTML attributes and
 * `<title>` tags can never break HTML5 syntax or introduce markup injection.
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Truncates long strings cleanly on a word boundary so auto-generated chapter
 * `<title>` (`<= 60`) and `<meta description>` (`<= 155`) tags always pass SEO gates.
 */
function truncateClean(text, maxLen) {
  const s = String(text).trim();
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen - 1).replace(/\s+\S*$/, '').trim() + '…';
}

/**
 * Extracts inner `<body>...</body>` HTML from offline help topics, strips raw HTML
 * comments (so `--` inside source teaching headers never trips strict web validators),
 * rewrites any root `/docs` references to `/installer-studio/docs`, and removes the
 * duplicate bottom `<blockquote>` Fictitious Disclaimer (already rendered in `<footer>`).
 */
function extractBodyInnerHtml(rawTopicHtml) {
  const bodyMatch = rawTopicHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : rawTopicHtml;
  return bodyHtml
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/href="\/docs(?=\/|#|"|$)/g, 'href="/installer-studio/docs')
    .replace(/<hr\s*\/?>\s*<blockquote>\s*Fictitious Persons[\s\S]*?<\/blockquote>/i, '')
    .trim();
}

/**
 * Selects route-appropriate OpenGraph social preview artwork and alt text so
 * sharing `/launcher-studio` or `/showcase-studio` previews their actual UI mockups!
 */
function resolveOgMedia(routePath) {
  if (routePath === '/launcher-studio') {
    return {
      url: `${MOCKUP_CDN_BASE}/mockup-launcher-studio-ide.png`,
      mime: 'image/png',
      width: '1280',
      height: '800',
      alt: 'RaggieSoft Launcher Studio visual IDE mockup showing a branded publisher desktop app hub and static-CDN catalog designer.'
    };
  }
  if (routePath === '/showcase-studio') {
    return {
      url: `${MOCKUP_CDN_BASE}/mockup-showcase-1990s-bmp-a11y.png`,
      mime: 'image/png',
      width: '1280',
      height: '800',
      alt: 'RaggieSoft Showcase Studio mockup showing a 1990s painted bitmap CD-ROM showcase menu enhanced with WCAG 2.2 AA keyboard focus rings and UI Automation.'
    };
  }
  return {
    url: DEFAULT_OG_IMAGE,
    mime: 'image/jpeg',
    width: '1200',
    height: '630',
    alt: 'RaggieSoft Studio developer suite showcase featuring RaggieSoft Installer Studio for Windows 11 x64 and ARM64.'
  };
}

/**
 * Builds `<head>` metadata (strictly validated `<title>`, `<meta name="description">`,
 * canonical URL, OpenGraph, Twitter Card, and Schema.org JSON-LD without comments).
 */
function buildSeoHead({ seoTitle, seoDescription, canonicalUrl, routePath = '/', noindex = false }) {
  if (seoTitle.length > 60) {
    throw new Error(`SEO Title exceeds 60 chars (${seoTitle.length}): "${seoTitle}"`);
  }
  if (seoDescription.length > 155) {
    throw new Error(`SEO Description exceeds 155 chars (${seoDescription.length}): "${seoDescription}"`);
  }

  const ogMedia = resolveOgMedia(routePath);
  const robots = noindex ? 'noindex,follow' : 'index,follow';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_ORIGIN}/installer-studio#software`,
        name: 'RaggieSoft Installer Studio',
        alternateName: 'Install Without Limits',
        url: `${SITE_ORIGIN}/installer-studio`,
        image: DEFAULT_OG_IMAGE,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows 11 (x64, ARM64)',
        softwareVersion: '0.5.0',
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
        '@type': 'SoftwareApplication',
        '@id': `${SITE_ORIGIN}/accessibility-studio#software`,
        name: 'RaggieSoft Accessibility Studio',
        url: `${SITE_ORIGIN}/accessibility-studio`,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows 11 (x64, ARM64)',
        softwareVersion: '1.0.0',
        license: 'https://opensource.org/licenses/MIT',
        author: {
          '@type': 'Organization',
          name: 'RaggieSoft',
          url: 'https://raggiesoft.dev'
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: 'RaggieSoft Studio'
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seoTitle,
        description: seoDescription,
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        about: { '@id': `${SITE_ORIGIN}/installer-studio#software` }
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
    `<meta property="og:site_name" content="RaggieSoft Studio" />`,
    `<meta property="og:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogMedia.url)}" />`,
    `<meta property="og:image:type" content="${escapeHtml(ogMedia.mime)}" />`,
    `<meta property="og:image:width" content="${escapeHtml(ogMedia.width)}" />`,
    `<meta property="og:image:height" content="${escapeHtml(ogMedia.height)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(ogMedia.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogMedia.url)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(ogMedia.alt)}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  ].join('\n    ');
}

/**
 * Writes a pre-rendered HTML5 string to both `<dist>/<subPath>/index.html` AND
 * `<dist>/<subPath>.html` (handling nested paths like `installer-studio/screenshots`
 * automatically by creating parent directories first!).
 */
function writeStaticRouteHtml(routePath, finalHtml) {
  if (routePath === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), finalHtml, 'utf8');
    return;
  }
  const relClean = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  const folderPath = path.join(distDir, relClean);
  const htmlFilePath = path.join(distDir, `${relClean}.html`);
  fs.mkdirSync(folderPath, { recursive: true });
  fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });
  fs.writeFileSync(path.join(folderPath, 'index.html'), finalHtml, 'utf8');
  fs.writeFileSync(htmlFilePath, finalHtml, 'utf8');
}

/**
 * Generates the Suite-Wide `/llms.txt` index at `https://raggiesoftstudio.com/llms.txt`
 * introducing all 4 RaggieSoft Studio developer tools while linking directly to
 * Installer Studio's compiler-emitted `/installer-studio/llms.txt` & `/installer-studio/llms-full.txt`.
 */
function buildSuiteOverviewLlmsTxt() {
  return [
    '# RaggieSoft Studio — Native Windows 11 Developer, Packaging & Compliance Suite',
    '',
    '> Canonical Portal: https://raggiesoftstudio.com',
    '> Open-Source Engineering Hub: https://raggiesoft.dev',
    '> License: MIT License (Code) / CC BY-SA 4.0 (Documentation)',
    '',
    '## Suite Product Lineup (4 Cohesive Developer Tools)',
    '',
    '1. **RaggieSoft Installer Studio (`v0.5.0` — Shipping Now)**:',
    '   - Product Portal: https://raggiesoftstudio.com/installer-studio',
    '   - Visual Tour (14 Captures): https://raggiesoftstudio.com/installer-studio/screenshots',
    '   - Engineering Roadmap: https://raggiesoftstudio.com/installer-studio/roadmap',
    '   - User Manual & Schema: https://raggiesoftstudio.com/installer-studio/docs',
    '   - Concise AI Spec: https://raggiesoftstudio.com/installer-studio/llms.txt',
    '   - Complete Grammar Spec: https://raggiesoftstudio.com/installer-studio/llms-full.txt',
    '   - Agent Skill File: https://raggiesoftstudio.com/installer-studio/SKILL.md',
    '   - Summary: Zero-dependency static `/MT` Win32 C++20 MSI, MSM, MST, MSP & Universal Setup.exe IDE and CLI (`x64` & `ARM64`) with 10 selectable Wizard Styles, WCAG 2.2 AA Auto-Contrast, and VPAT 2.5 export.',
    '',
    '2. **RaggieSoft Accessibility Studio (`v1.0.0` — Shipping Now)**:',
    '   - Product Portal: https://raggiesoftstudio.com/accessibility-studio',
    '   - Rule Catalog & CLI Exit Codes: https://raggiesoftstudio.com/accessibility-studio/docs',
    '   - Enterprise MSI & GPO Matrix: https://raggiesoftstudio.com/accessibility-studio/enterprise',
    '   - Summary: C# 13 / .NET 10 WinForms + Monaco side-by-side refactoring diff workstation and headless OASIS SARIF 2.1.0 CLI for WCAG 2.2 AA & Revised Section 508 source remediation.',
    '',
    '3. **RaggieSoft Launcher Studio (Upcoming Suite IDE — Design Preview & Mockups)**:',
    '   - Product Page: https://raggiesoftstudio.com/launcher-studio',
    '   - Summary: Visual IDE and `.rslp` plain-text manifest compiler for building white-label, zero-account desktop application hubs, offline media shelves, and SHA-256 + Authenticode static-CDN updaters.',
    '',
    '4. **RaggieSoft Showcase Studio (Upcoming Suite IDE — Design Preview & Mockups)**:',
    '   - Product Page: https://raggiesoftstudio.com/showcase-studio',
    '   - Summary: Visual canvas IDE (`.rssp` plain-text manifests) compiling zero-dependency Win32 C++20 interactive launchpads (`x64` & `ARM64`)—from nostalgic 1990s `.BMP` CD-ROM showcases upgraded with WCAG 2.2 AA keyboard/screen-reader/High-Contrast safeguards to modern Windows 11 `FluentMica` collector menus.',
    ''
  ].join('\n');
}

async function main() {
  // 1. Compile `src/entry-server.ts` into `.ssr-temp/entry-server.js` using local Vite.
  const viteBin = path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
  execFileSync(
    process.execPath,
    [viteBin, 'build', '--ssr', 'src/entry-server.ts', '--outDir', '.ssr-temp'],
    { cwd: projectRoot, stdio: 'inherit' }
  );

  // 2. Load the Vite-compiled client `dist/index.html` shell and SSR route module.
  const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const ssrEntryUrl = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
  const { renderStudioPage, STUDIO_ROUTES } = await import(ssrEntryUrl);

  // 3. Pre-render every route in `STUDIO_ROUTES` (`/`, `/launcher-studio`, `/showcase-studio`, `/installer-studio/*`).
  for (const route of STUDIO_ROUTES) {
    const { html } = renderStudioPage(route.path);
    const canonicalUrl = route.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route.path}`;
    const headMarkup = buildSeoHead({
      seoTitle: route.seoTitle,
      seoDescription: route.seoDescription,
      canonicalUrl,
      routePath: route.path,
      noindex: false
    });

    const finalPage = templateHtml
      .replace('<!--SSR_HEAD-->', headMarkup)
      .replace('<!--SSR_OUTLET-->', html);

    writeStaticRouteHtml(route.path, finalPage);
  }

  // 4. Generate genuine `/404.html` (`noindex,follow`) for Nginx `error_page 404 /404.html`.
  const notFoundRender = renderStudioPage('/404');
  const notFoundHead = buildSeoHead({
    seoTitle: '404 Not Found | RaggieSoft Studio',
    seoDescription: 'The requested RaggieSoft Studio developer suite page could not be found.',
    canonicalUrl: `${SITE_ORIGIN}/404`,
    routePath: '/404',
    noindex: true
  });
  fs.writeFileSync(
    path.join(distDir, '404.html'),
    templateHtml.replace('<!--SSR_HEAD-->', notFoundHead).replace('<!--SSR_OUTLET-->', notFoundRender.html),
    'utf8'
  );

  // 5. Publish Installer Studio machine-readable AI specs (`llms.txt`, `llms-full.txt`, `SKILL.md`)
  //    and `ROADMAP.md` under `/installer-studio/*`, keep root `/llms-full.txt`, `/SKILL.md`, and
  //    `/ROADMAP.md` available for existing bookmarks, and write the Suite-Wide `/llms.txt` at root!
  const installerDistDir = path.join(distDir, 'installer-studio');
  fs.mkdirSync(installerDistDir, { recursive: true });
  const specsDir = path.join(installerStudioRoot, 'specs');
  for (const specFile of ['llms.txt', 'llms-full.txt', 'SKILL.md']) {
    const srcSpec = path.join(specsDir, specFile);
    if (fs.existsSync(srcSpec)) {
      fs.copyFileSync(srcSpec, path.join(installerDistDir, specFile));
      if (specFile !== 'llms.txt') {
        fs.copyFileSync(srcSpec, path.join(distDir, specFile));
      }
    }
  }
  fs.writeFileSync(path.join(distDir, 'llms.txt'), buildSuiteOverviewLlmsTxt(), 'utf8');

  const srcRoadmap = path.join(installerStudioRoot, 'ROADMAP.md');
  if (fs.existsSync(srcRoadmap)) {
    fs.copyFileSync(srcRoadmap, path.join(installerDistDir, 'ROADMAP.md'));
    fs.copyFileSync(srcRoadmap, path.join(distDir, 'ROADMAP.md'));
  }

  // 6. Publish Single-Source `/installer-studio/docs/<topicId>` chapters directly from
  //    `desktop-apps/installer-studio/help/raggiesoft.installer-studio/`!
  const helpModuleDir = path.join(installerStudioRoot, 'help', 'raggiesoft.installer-studio');
  const helpManifestPath = path.join(helpModuleDir, 'module.rshm.json');
  const docRoutePaths = [];
  if (fs.existsSync(helpManifestPath)) {
    const docsDistRoot = path.join(installerDistDir, 'docs');
    fs.mkdirSync(docsDistRoot, { recursive: true });
    fs.copyFileSync(helpManifestPath, path.join(docsDistRoot, 'module.rshm.json'));

    const helpManifest = JSON.parse(fs.readFileSync(helpManifestPath, 'utf8'));
    const topics = Array.isArray(helpManifest.topics) ? helpManifest.topics : [];

    for (let i = 0; i < topics.length; i++) {
      const topic = topics[i];
      const srcTopicPath = path.join(helpModuleDir, topic.fileName);
      if (!fs.existsSync(srcTopicPath)) continue;

      const rawTopicHtml = fs.readFileSync(srcTopicPath, 'utf8');
      const rawOutPath = path.join(docsDistRoot, 'raw', topic.fileName);
      fs.mkdirSync(path.dirname(rawOutPath), { recursive: true });
      fs.copyFileSync(srcTopicPath, rawOutPath);

      const routePath = `/installer-studio/docs/${topic.id}`;
      const canonicalUrl = `${SITE_ORIGIN}${routePath}`;
      const seoTitle = truncateClean(`${topic.title} | Installer Studio`, 60);
      const seoDescription = truncateClean(topic.summary || helpManifest.description, 155);

      const tocHtml = topics
        .map((t, idx) => {
          const cur = t.id === topic.id ? ' aria-current="page"' : '';
          return `<li><a class="docs-toc-link" href="/installer-studio/docs/${escapeHtml(t.id)}"${cur}>${idx + 1}. ${escapeHtml(t.title)}</a></li>`;
        })
        .join('\n              ');

      const prevTopic = i > 0 ? topics[i - 1] : null;
      const nextTopic = i + 1 < topics.length ? topics[i + 1] : null;
      const prevBtn = prevTopic
        ? `<a class="btn btn-outline" href="/installer-studio/docs/${escapeHtml(prevTopic.id)}">&larr; ${escapeHtml(prevTopic.title)}</a>`
        : `<a class="btn btn-outline" href="/installer-studio/docs">&larr; All Documentation</a>`;
      const nextBtn = nextTopic
        ? `<a class="btn btn-primary" href="/installer-studio/docs/${escapeHtml(nextTopic.id)}">${escapeHtml(nextTopic.title)} &rarr;</a>`
        : `<a class="btn btn-primary" href="/installer-studio/roadmap">Explore Engineering Roadmap &rarr;</a>`;

      const articleInner = extractBodyInnerHtml(rawTopicHtml);
      const readerMarkup = `
        <div class="docs-reader-grid">
          <aside class="docs-sidebar" aria-label="Installer Studio Documentation Chapters">
            <span class="eyebrow">F1 Help Manual (v${escapeHtml(helpManifest.productVersion || '0.5.0')})</span>
            <h2 style="font-size: 1.05rem; margin: 0.15rem 0 0.5rem;">Chapters</h2>
            <ul class="docs-toc-list">
              <li><a class="docs-toc-link" href="/installer-studio/docs">Documentation Index</a></li>
              ${tocHtml}
            </ul>
          </aside>
          <article class="docs-article">
            <span class="eyebrow">Chapter ${i + 1} of ${topics.length} • ${escapeHtml(topic.category || 'User Guide')}</span>
            ${articleInner}
            <nav class="docs-pager" aria-label="Chapter Pagination">
              ${prevBtn}
              ${nextBtn}
            </nav>
          </article>
        </div>
      `;

      const { html } = renderStudioPage(routePath, readerMarkup);
      const headMarkup = buildSeoHead({
        seoTitle,
        seoDescription,
        canonicalUrl,
        routePath,
        noindex: false
      });
      const finalTopicPage = templateHtml
        .replace('<!--SSR_HEAD-->', headMarkup)
        .replace('<!--SSR_OUTLET-->', html);

      writeStaticRouteHtml(routePath, finalTopicPage);
      docRoutePaths.push(routePath);
    }
  }

  // 7. Copy live HTML5 VPAT 2.5 Conformance Report into `/installer-studio/vpat/...` (and `/vpat/...` fallback).
  const installerVpatDir = path.join(installerDistDir, 'vpat');
  const legacyVpatDir = path.join(distDir, 'vpat');
  fs.mkdirSync(installerVpatDir, { recursive: true });
  fs.mkdirSync(legacyVpatDir, { recursive: true });
  const vpatCandidates = [
    path.join(installerStudioRoot, 'projects', 'apps', 'installer-studio', 'out', 'raggiesoft-installer-studio-installer-vpat-2.5.html'),
    path.join(installerStudioRoot, 'examples', 'hello-raggiesoft', 'out', 'hello-raggiesoft-installer-vpat-2.5.html')
  ];
  for (const cand of vpatCandidates) {
    if (fs.existsSync(cand)) {
      fs.copyFileSync(cand, path.join(installerVpatDir, 'raggiesoft-installer-studio-vpat-2.5.html'));
      fs.copyFileSync(cand, path.join(legacyVpatDir, 'raggiesoft-installer-studio-vpat-2.5.html'));
      break;
    }
  }

  // 8. Mount the pre-compiled IBM Carbon Design System Accessibility Studio sub-portal
  //    (`subdomains/a11y/dist`, built with `base: '/accessibility-studio/'`) directly under
  //    `dist/accessibility-studio/` AND `dist/accessibility-studio.html` (`301` target of `a11y.raggiesoft.com`)!
  const a11yRoutePaths = [];
  if (fs.existsSync(path.join(a11yDistDir, 'index.html'))) {
    const a11yMountDir = path.join(distDir, 'accessibility-studio');
    copyDirRecursive(
      a11yDistDir,
      a11yMountDir,
      new Set(['robots.txt', 'sitemap.xml', `${INDEXNOW_KEY}.txt`])
    );
    fs.copyFileSync(
      path.join(a11yDistDir, 'index.html'),
      path.join(distDir, 'accessibility-studio.html')
    );
    a11yRoutePaths.push(
      '/accessibility-studio',
      '/accessibility-studio/features',
      '/accessibility-studio/enterprise',
      '/accessibility-studio/reports',
      '/accessibility-studio/docs'
    );
  }

  // 9. Generate `sitemap.xml`, `robots.txt`, and IndexNow verification file across the entire 4-product suite!
  const today = new Date().toISOString().slice(0, 10);
  const allSitemapPaths = [...STUDIO_ROUTES.map((r) => r.path), ...a11yRoutePaths, ...docRoutePaths];
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allSitemapPaths.map((p) => {
      const loc = p === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${p}`;
      const isPrimaryProductHub =
        p === '/installer-studio' ||
        p === '/accessibility-studio' ||
        p === '/launcher-studio' ||
        p === '/showcase-studio';
      const priority = p === '/' ? '1.0' : isPrimaryProductHub ? '0.9' : p.includes('/docs/') ? '0.75' : '0.8';
      return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
    }),
    '</urlset>',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, 'utf8');
  fs.writeFileSync(path.join(distDir, `${INDEXNOW_KEY}.txt`), `${INDEXNOW_KEY}\n`, 'utf8');

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`[prerender] Pre-rendered ${STUDIO_ROUTES.length} Studio & Installer routes + ${a11yRoutePaths.length} /accessibility-studio/* routes + ${docRoutePaths.length} /installer-studio/docs/* chapters + /llms.txt + VPAT 2.5 + sitemap.xml for ${SITE_ORIGIN}`);
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
