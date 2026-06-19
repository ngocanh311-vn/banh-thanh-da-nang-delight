import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/lib/site-content";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";

const SITE =
  typeof window !== "undefined"
    ? window.location.origin
    : import.meta.env.VITE_SITE_URL || "https://banh-thanh-da-nang-delight.lovable.app";
const OG_IMAGE = `${SITE}${banhCamHop.url}`;
const HERO_IMAGE = banhCam2.url;

const TITLE = "Tiệm Bánh Thanh – 다낭 베이커리 · 오렌지 스폰지 케이크 & 기념품";
const DESC =
  "다낭 현지 베이커리 Tiệm Bánh Thanh – 부드러운 오렌지 스폰지 케이크, 새우·돼지고기 바인잇(Bánh ít), 깨끗한 다낭 소고기 육포. 선물용 고급 포장, 다낭 시내 배달. 주소: K25/5 Lý Thường Kiệt, Hải Châu.";

export const Route = createFileRoute("/ko")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "다낭 베이커리, 다낭 케이크, 다낭 기념품, 베트남 케이크, 다낭 빵집, 다낭 선물, 오렌지 스폰지 케이크, 다낭 육포, Tiem Banh Thanh",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/ko` },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "다낭 오렌지 스폰지 케이크 선물 박스 – Tiệm Bánh Thanh",
      },
      { property: "og:locale", content: "ko_KR" },
      { property: "og:locale:alternate", content: "vi_VN" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:locale:alternate", content: "zh_CN" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "language", content: "ko" },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/ko` },
      { rel: "alternate", hrefLang: "vi", href: `${SITE}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE}/en` },
      { rel: "alternate", hrefLang: "ko", href: `${SITE}/ko` },
      { rel: "alternate", hrefLang: "zh", href: `${SITE}/zh` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE}/` },
      { rel: "preload", as: "image", href: HERO_IMAGE, fetchPriority: "high" },
    ],
  }),
  component: () => <Home lang="en" />,
});
