// Builds a self-contained single-file HTML reference of the Structured™
// homepage: fetches the SSR'd page from a running `next start` server,
// inlines the compiled CSS, converts every local image/font reference to a
// base64 data URI, and strips scripts — the page's content is visible
// without JS by design (Reveal's hidden state only ever applies once React
// marks the document motion-ready), so a static snapshot reads correctly.
//
// Usage:
//   npm run build && npm run start   (in one terminal, leave it running)
//   node scripts/export-single-file.mjs   (in another)
//
// Output: structured-homepage-reference.html at the project root.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const BASE = process.env.EXPORT_BASE_URL ?? "http://localhost:3000";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "structured-homepage-reference.html");

async function fetchText(path) {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.text();
}
function decodeEntities(s) {
  return s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}
async function fetchDataUri(path) {
  const res = await fetch(BASE + decodeEntities(path));
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ct = res.headers.get("content-type") || "application/octet-stream";
  return `data:${ct};base64,${buf.toString("base64")}`;
}

let html = await fetchText("/");

// Inline stylesheet(s)
const cssLinkRe = /<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g;
for (const m of [...html.matchAll(cssLinkRe)]) {
  const href = m[1];
  let css = await fetchText(href);

  // Inline font-face url() references inside the CSS (woff2 files)
  const fontUrls = [...css.matchAll(/url\((\/[^)]+\.woff2?)\)/g)].map((x) => x[1]);
  for (const fu of [...new Set(fontUrls)]) {
    const dataUri = await fetchDataUri(fu);
    css = css.split(`url(${fu})`).join(`url(${dataUri})`);
  }

  html = html.replace(m[0], `<style>${css}</style>`);
}

// Inline every local <img src="...">
const imgSrcRe = /<img([^>]*?)\ssrc="(\/[^"]+)"/g;
const imgSrcs = [...new Set([...html.matchAll(imgSrcRe)].map((m) => m[2]))];
for (const src of imgSrcs) {
  const dataUri = await fetchDataUri(src);
  html = html.split(`src="${src}"`).join(`src="${dataUri}"`);
}

// Inline srcset entries (next/image's SSR output uses the camelCase
// "srcSet" attribute name — browsers parse it case-insensitively, but a
// case-sensitive regex here would silently miss it and leave a dead
// relative URL that browsers prefer over the already-inlined src).
const srcsetRe = /srcset="([^"]+)"/gi;
for (const m of [...html.matchAll(srcsetRe)]) {
  const parts = m[1].split(",").map((s) => s.trim());
  const rebuilt = [];
  for (const part of parts) {
    const [url, descriptor] = part.split(/\s+/);
    if (url.startsWith("/")) {
      const dataUri = await fetchDataUri(url);
      rebuilt.push(descriptor ? `${dataUri} ${descriptor}` : dataUri);
    } else {
      rebuilt.push(part);
    }
  }
  html = html.replace(m[0], `srcSet="${rebuilt.join(", ")}"`);
}

// Inline every icon-ish <link> (icon, shortcut icon, apple-touch-icon)
const iconLinkRe = /<link[^>]+rel="[^"]*icon[^"]*"[^>]+href="(\/[^"]+)"[^>]*>/g;
for (const m of [...html.matchAll(iconLinkRe)]) {
  const dataUri = await fetchDataUri(m[1]);
  html = html.replace(m[1], dataUri);
}

// Strip scripts and every preload/modulepreload hint (font/image/script) —
// all actual assets are already inlined as data URIs above, and content is
// visible without JS; only the mobile menu toggle, scroll-reveal stagger,
// and counter tick-up are inert in this static snapshot.
html = html.replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/g, "");
html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "");
html = html.replace(/<link[^>]+rel="preload"[^>]*>/g, "");
html = html.replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "");

html = html.replace(
  "<body",
  `<!-- Static single-file reference export. All CSS, images, and fonts are inlined; JavaScript is stripped since the page is fully visible without it. Regenerate via scripts/export-single-file.mjs against a running \`next start\` server. -->\n<body`
);

writeFileSync(OUT, html, "utf8");
console.log(`wrote ${(html.length / 1024 / 1024).toFixed(2)} MB to ${OUT}`);
