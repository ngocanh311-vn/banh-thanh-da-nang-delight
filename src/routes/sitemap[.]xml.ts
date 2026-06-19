import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Get site URL from environment or use default
// On Vercel, you must set VITE_SITE_URL in Environment Variables
const BASE_URL = (() => {
  const siteUrl = process.env.VITE_SITE_URL;
  if (siteUrl) return siteUrl;

  // Fallback for development
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:8080";
  }

  // Fallback for production
  return "https://banh-thanh-da-nang-delight.lovable.app";
})();

const LOCALES = [
  { code: "vi", path: "/" },
  { code: "en", path: "/en" },
  { code: "ko", path: "/ko" },
  { code: "zh", path: "/zh" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const alternates = LOCALES.map(
          (l) =>
            `      <xhtml:link rel="alternate" hreflang="${l.code}" href="${BASE_URL}${l.path}"/>`,
        )
          .concat(`      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/"/>`)
          .join("\n");

        const urls = LOCALES.map(
          (l) =>
            `  <url>\n    <loc>${BASE_URL}${l.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${l.code === "vi" ? "1.0" : "0.9"}</priority>\n${alternates}\n  </url>`,
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
