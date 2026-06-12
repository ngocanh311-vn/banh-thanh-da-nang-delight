import { createFileRoute } from "@tanstack/react-router";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";
import { Home } from "@/lib/site-content";

const SITE = "https://banh-thanh-da-nang-delight.lovable.app";
const OG_IMAGE = `${SITE}${banhCamHop.url}`;
const HERO_IMAGE = banhCam2.url;

const TITLE = "Tiệm Bánh Thanh – Bánh bông lan cam · Đặc sản Đà Nẵng làm quà";
const DESC = "Bánh bông lan cam mềm xốp thơm hương cam, bánh ít nhân tôm thịt, bò khô sạch Đà Nẵng. Giao hàng tận nơi – K25/5 Lý Thường Kiệt, Hải Châu, Đà Nẵng.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "tiệm bánh Thanh, bánh bông lan cam Đà Nẵng, đặc sản Đà Nẵng làm quà, bánh ít nhân tôm thịt, bò khô Đà Nẵng, đặt bánh Đà Nẵng" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Hộp bánh bông lan cam Tiệm Bánh Thanh – đặc sản Đà Nẵng" },
      { property: "og:locale", content: "vi_VN" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:locale:alternate", content: "ko_KR" },
      { property: "og:locale:alternate", content: "zh_CN" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "language", content: "vi" },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "alternate", hrefLang: "vi", href: `${SITE}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE}/en` },
      { rel: "alternate", hrefLang: "ko", href: `${SITE}/ko` },
      { rel: "alternate", hrefLang: "zh", href: `${SITE}/zh` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Tiệm Bánh Thanh",
          image: OG_IMAGE,
          url: `${SITE}/`,
          telephone: "+84919644625",
          address: {
            "@type": "PostalAddress",
            streetAddress: "K25/5 Lý Thường Kiệt",
            addressLocality: "Hải Châu",
            addressRegion: "Đà Nẵng",
            addressCountry: "VN",
          },
          servesCuisine: ["Vietnamese", "Bakery", "Da Nang specialty"],
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: () => <Home lang="vi" />,
});
