import { createFileRoute } from "@tanstack/react-router";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";
import { Home } from "@/lib/site-content";

const SITE =
  typeof window !== "undefined"
    ? window.location.origin
    : import.meta.env.VITE_SITE_URL || "https://banh-thanh-da-nang-delight.lovable.app";
const OG_IMAGE = `${SITE}${banhCamHop.url}`;
const HERO_IMAGE = banhCam2.url;

const TITLE = "Tiệm Bánh Thanh – Bánh bông lan cam · Đặc sản Đà Nẵng làm quà";
const DESC =
  "Bánh bông lan cam mềm xốp thơm hương cam, bánh ít nhân tôm thịt, bò khô sạch Đà Nẵng. Giao hàng tận nơi – K25/5 Lý Thường Kiệt, Hải Châu, Đà Nẵng.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "bánh cam Đà Nẵng, bánh gato cam Đà Nẵng, bánh gatocam Đà Nẵng, đặc sản Đà Nẵng, Đà Nẵng mua gì, Đà Nẵng mua gì làm quà, bánh bông lan cam Đà Nẵng, đặc sản Đà Nẵng làm quà, đặc sản làm quà Đà Nẵng, tiệm bánh Thanh, bánh bông lan cam, bánh bông lan cam Đà Nẵng ngon, mua bánh bông lan cam Đà Nẵng ở đâu, quà Đà Nẵng, quà biếu Đà Nẵng, bánh đặc sản Đà Nẵng, bánh ít nhân tôm thịt Đà Nẵng, bò khô Đà Nẵng, đặt bánh Đà Nẵng, giao bánh Đà Nẵng, tiệm bánh Đà Nẵng ngon, K25 Lý Thường Kiệt Đà Nẵng",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Hộp bánh bông lan cam Tiệm Bánh Thanh – đặc sản Đà Nẵng",
      },
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
      { rel: "preload", as: "image", href: HERO_IMAGE, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          "@id": `${SITE}/#bakery`,
          name: "Tiệm Bánh Thanh",
          alternateName: ["Bánh Thanh Đà Nẵng", "Tiệm Bánh Thanh Đà Nẵng"],
          description: DESC,
          image: OG_IMAGE,
          url: `${SITE}/`,
          telephone: "+84919644625",
          address: {
            "@type": "PostalAddress",
            streetAddress: "K25/5 Lý Thường Kiệt",
            addressLocality: "Hải Châu",
            addressRegion: "Đà Nẵng",
            postalCode: "550000",
            addressCountry: "VN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 16.0678, longitude: 108.2208 },
          areaServed: [
            { "@type": "City", name: "Đà Nẵng" },
            { "@type": "AdministrativeArea", name: "Miền Trung Việt Nam" },
          ],
          servesCuisine: ["Vietnamese", "Bakery", "Da Nang specialty", "Đặc sản Đà Nẵng"],
          priceRange: "$$",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bánh bông lan cam Đà Nẵng" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bánh ít nhân tôm thịt" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bò khô sạch Đà Nẵng" } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Bánh bông lan cam Đà Nẵng – Tiệm Bánh Thanh",
          image: OG_IMAGE,
          description:
            "Bánh bông lan cam mềm xốp, thơm hương cam, bao bì sang trọng – đặc sản Đà Nẵng làm quà chuẩn vị Tiệm Bánh Thanh.",
          brand: { "@type": "Brand", name: "Tiệm Bánh Thanh" },
          category: "Đặc sản Đà Nẵng làm quà",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "VND",
            url: `${SITE}/`,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Mua bánh bông lan cam Đà Nẵng ở đâu ngon?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tiệm Bánh Thanh tại K25/5 Lý Thường Kiệt, Hải Châu, Đà Nẵng chuyên bánh bông lan cam mềm xốp, thơm hương cam, bao bì sang – đặt qua 0919.644.625 hoặc ShopeeFood/GrabFood.",
              },
            },
            {
              "@type": "Question",
              name: "Đặc sản Đà Nẵng làm quà nên chọn gì?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bánh bông lan cam, bánh ít nhân tôm thịt và bò khô sạch của Tiệm Bánh Thanh là bộ ba đặc sản Đà Nẵng làm quà được ưa chuộng: dễ mang đi xa, bao bì gọn đẹp, hương vị đặc trưng miền Trung.",
              },
            },
            {
              "@type": "Question",
              name: "Có giao bánh tận nơi trong Đà Nẵng không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Có. Tiệm Bánh Thanh giao hàng nội thành Đà Nẵng qua ShopeeFood, GrabFood và nhận đặt trước 1/2–1 ngày cho đơn số lượng lớn.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Bánh bông lan cam Đà Nẵng", item: `${SITE}/#san-pham` },
          ],
        }),
      },
    ],
  }),
  component: () => <Home lang="vi" />,
});
