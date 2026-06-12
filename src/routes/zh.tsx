import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/lib/site-content";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";

const SITE = "https://banh-thanh-da-nang-delight.lovable.app";
const OG_IMAGE = `${SITE}${banhCamHop.url}`;
const HERO_IMAGE = banhCam2.url;

const TITLE = "Tiệm Bánh Thanh – 岘港特色烘焙店 · 香橙海绵蛋糕与伴手礼";
const DESC = "岘港本地烘焙店 Tiệm Bánh Thanh – 松软香甜的香橙海绵蛋糕、虾肉糯米糍 (Bánh ít)、岘港牛肉干。精美礼盒包装，岘港市区送货上门。地址：K25/5 Lý Thường Kiệt, Hải Châu, 岘港。";

export const Route = createFileRoute("/zh")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "岘港蛋糕, 岘港烘焙, 岘港伴手礼, 越南蛋糕, 越南手信, 香橙海绵蛋糕, 岘港牛肉干, 越南糯米糍, Tiem Banh Thanh" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/zh` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "岘港香橙海绵蛋糕礼盒 – Tiệm Bánh Thanh" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:locale:alternate", content: "vi_VN" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:locale:alternate", content: "ko_KR" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "language", content: "zh" },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/zh` },
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
