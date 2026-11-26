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

const SITE_ORIGIN = 'https://raggiesoftstudio.com';
const OG_IMAGE = 'https://assets.raggiesoft.com/raggiesoft-installer-studio/images/og-installer-studio.jpg';
const FAVICON_SVG = 'https://assets.raggiesoft.com/raggiesoft-installer-studio/images/installer-studio-logo.svg';
const INDEXNOW_KEY = '726167676965736f6674696e6465786e';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function truncateClean(text, maxLen) {
  const s = String(text).trim();
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen - 1).replace(/\s+\S*$/, '').trim() + '…';
}

function extractBodyInnerHtml(rawTopicHtml) {
  // Extract inner `<body>...</body>` markup and strip HTML comments so `--` inside
  // offline source comments never violates HTML5 strict comment rules on the web!
  const bodyMatch = rawTopicHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : rawTopicHtml;
  // Also strip the trailing duplicate `<blockquote>Fictitious Persons...</blockquote>` + `<hr />`
  // because `renderStudioPage` already renders the global Fictitious Disclaimer in `<footer>`!
  return bodyHtml
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<hr\s*\/?>\s*<blockquote>\s*Fictitious Persons[\s\S]*?<\/blockquote>/i, '')
    .trim();
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
        image: OG_IMAGE,
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
    `<meta property="og:site_name" content="RaggieSoft Studio" />`,
    `<meta property="og:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(OG_IMAGE)}" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="RaggieSoft Installer Studio boxed software showcase — Install Without Limits (Native Win32 C++20 for x64 and ARM64)" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seoTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seoDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(OG_IMAGE)}" />`,
    `<meta name="twitter:image:alt" content="RaggieSoft Installer Studio boxed software showcase — Install Without Limits (Native Win32 C++20 for x64 and ARM64)" />`,
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
    seoTitle: '404 Not Found | RaggieSoft Studio',
    seoDescription: 'The requested RaggieSoft Studio developer suite page could not be found.',
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

  // Copy human-readable Markdown roadmap (`ROADMAP.md`) directly from `desktop-apps/installer-studio/ROADMAP.md`
  // into `dist/ROADMAP.md` so `https://raggiesoftstudio.com/ROADMAP.md` and GitHub never drift!
  const srcRoadmap = path.join(installerStudioRoot, 'ROADMAP.md');
  if (fs.existsSync(srcRoadmap)) {
    fs.copyFileSync(srcRoadmap, path.join(distDir, 'ROADMAP.md'));
  }

  // Publish Single-Source `/docs/<topicId>` chapters & `/docs/module.rshm.json` directly from the
  // distributed offline help module (`desktop-apps/installer-studio/help/raggiesoft.installer-studio/`)!
  const helpModuleDir = path.join(installerStudioRoot, 'help', 'raggiesoft.installer-studio');
  const helpManifestPath = path.join(helpModuleDir, 'module.rshm.json');
  const docRoutePaths = [];
  if (fs.existsSync(helpManifestPath)) {
    const docsDistRoot = path.join(distDir, 'docs');
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

      const routePath = `/docs/${topic.id}`;
      const canonicalUrl = `${SITE_ORIGIN}${routePath}`;
      const seoTitle = truncateClean(`${topic.title} | Installer Studio`, 60);
      const seoDescription = truncateClean(topic.summary || helpManifest.description, 155);

      const tocHtml = topics
        .map((t, idx) => {
          const cur = t.id === topic.id ? ' aria-current="page"' : '';
          return `<li><a class="docs-toc-link" href="/docs/${escapeHtml(t.id)}"${cur}>${idx + 1}. ${escapeHtml(t.title)}</a></li>`;
        })
        .join('\n              ');

      const prevTopic = i > 0 ? topics[i - 1] : null;
      const nextTopic = i + 1 < topics.length ? topics[i + 1] : null;
      const prevBtn = prevTopic
        ? `<a class="btn btn-outline" href="/docs/${escapeHtml(prevTopic.id)}">&larr; ${escapeHtml(prevTopic.title)}</a>`
        : `<a class="btn btn-outline" href="/docs">&larr; All Documentation</a>`;
      const nextBtn = nextTopic
        ? `<a class="btn btn-primary" href="/docs/${escapeHtml(nextTopic.id)}">${escapeHtml(nextTopic.title)} &rarr;</a>`
        : `<a class="btn btn-primary" href="/roadmap">Explore Engineering Roadmap &rarr;</a>`;

      const articleInner = extractBodyInnerHtml(rawTopicHtml);
      const readerMarkup = `
        <div class="docs-reader-grid">
          <aside class="docs-sidebar" aria-label="Documentation Chapters">
            <span class="eyebrow">F1 Help Manual (v${escapeHtml(helpManifest.productVersion || '0.5.0')})</span>
            <h2 style="font-size: 1.05rem; margin: 0.15rem 0 0.5rem;">Chapters</h2>
            <ul class="docs-toc-list">
              <li><a class="docs-toc-link" href="/docs">Documentation Index</a></li>
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
        noindex: false
      });
      const finalTopicPage = templateHtml
        .replace('<!--SSR_HEAD-->', headMarkup)
        .replace('<!--SSR_OUTLET-->', html);

      const topicFolder = path.join(docsDistRoot, topic.id);
      fs.mkdirSync(topicFolder, { recursive: true });
      fs.writeFileSync(path.join(topicFolder, 'index.html'), finalTopicPage, 'utf8');
      fs.writeFileSync(path.join(docsDistRoot, `${topic.id}.html`), finalTopicPage, 'utf8');
      docRoutePaths.push(routePath);
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

  // Mount the pre-compiled IBM Carbon Design System Accessibility Studio sub-portal
  // (`subdomains/a11y/dist`, built with `base: '/accessibility-studio/'`) directly under
  // `dist/accessibility-studio/` AND `dist/accessibility-studio.html` (`301` target of `a11y.raggiesoft.com`)!
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

  // Generate `sitemap.xml`, `robots.txt`, and IndexNow verification file
  const today = new Date().toISOString().slice(0, 10);
  const allSitemapPaths = [...STUDIO_ROUTES.map((r) => r.path), ...a11yRoutePaths, ...docRoutePaths];
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allSitemapPaths.map((p) => {
      const loc = p === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${p}`;
      const priority = p === '/' ? '1.0' : p === '/accessibility-studio' ? '0.9' : p.startsWith('/docs/') ? '0.75' : '0.8';
      return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
    }),
    '</urlset>',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, 'utf8');
  fs.writeFileSync(path.join(distDir, `${INDEXNOW_KEY}.txt`), `${INDEXNOW_KEY}\n`, 'utf8');

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`[prerender] Pre-rendered ${STUDIO_ROUTES.length} core routes + ${a11yRoutePaths.length} /accessibility-studio/* routes + ${docRoutePaths.length} /docs/* chapters + /llms.txt + VPAT 2.5 + sitemap.xml for ${SITE_ORIGIN}`);
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
