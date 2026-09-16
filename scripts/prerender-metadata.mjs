import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { loadEnv } from "vite";
import { getRouteMetadata } from "../src/routes/getRouteMetadata.ts";
import { projects } from "../src/data/projects.ts";

// Static route metadata lets crawlers read the right page without executing the SPA.
const env = loadEnv("production", process.cwd(), "VITE_SITE_URL");
const configuredOrigin =
  process.env.VITE_SITE_URL ||
  env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");
const origin = configuredOrigin ? new URL(configuredOrigin).origin : "";
const routes = [
  "/",
  "/projects",
  "/about",
  "/contact",
  ...projects.map((project) => `/projects/${project.slug}`),
  "/404",
];
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

for (const path of routes) {
  const metadata = getRouteMetadata(path);
  const tags = [
    `<title>${escape(metadata.title)}</title>`,
    `<meta name="description" content="${escape(metadata.description)}" />`,
    `<meta name="robots" content="${metadata.notFound ? "noindex, follow" : "index, follow"}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escape(metadata.title)}" />`,
    `<meta property="og:description" content="${escape(metadata.description)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escape(metadata.description)}" />`,
  ];
  if (origin && !metadata.notFound) {
    tags.push(
      `<link rel="canonical" href="${escape(origin + metadata.path)}" />`,
      `<meta property="og:url" content="${escape(origin + metadata.path)}" />`,
    );
    if (metadata.image)
      tags.push(
        `<meta property="og:image" content="${escape(origin + metadata.image)}" />`,
        `<meta property="og:image:alt" content="${escape(metadata.imageAlt ?? "")}" />`,
        `<meta name="twitter:image" content="${escape(origin + metadata.image)}" />`,
        `<meta name="twitter:image:alt" content="${escape(metadata.imageAlt ?? "")}" />`,
      );
  }
  const html = template
    .replace(/<title>.*?<\/title>/s, "")
    .replace(/<meta\s+name="description"[^>]*\/>/s, "")
    .replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
  const destination =
    path === "/" ? "dist/index.html" : `dist${path}.html`;
  await mkdir(resolve(destination, ".."), { recursive: true });
  await writeFile(destination, html);
}
if (origin) {
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes
      .filter((path) => path !== "/404")
      .map((path) => `<url><loc>${escape(origin + path)}</loc></url>`)
      .join("")}</urlset>\n`,
  );
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
  );
}
console.log(
  `Generated metadata for ${routes.length} route documents${origin ? " and the sitemap" : " (set VITE_SITE_URL to include canonical URLs and a sitemap)"}.`,
);
