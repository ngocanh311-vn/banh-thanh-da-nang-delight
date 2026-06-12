import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/lib/site-content";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";

const SITE = "https://banh-thanh-da-nang-delight.lovable.app";
const OG_IMAGE = `${SITE}${banhCamHop.url}`;
const HERO_IMAGE = banhCam2.url;

const TITLE = "Tiệm Bánh Thanh – Da Nang Specialty Bakery · Orange Sponge Cake & Gifts";
const DESC = "Soft, fluffy orange sponge cake, shrimp-and-pork bánh ít, and clean dried beef from Da Nang. Elegant gift packaging, on-demand delivery – K25/5 Ly Thuong Kiet, Hai Chau, Da Nang.";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Da Nang bakery, orange sponge cake Da Nang, Vietnamese gift cake, Banh It Da Nang, dried beef Da Nang, Tiem Banh Thanh, Vietnam souvenir food" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/en` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Orange sponge cake gift box – Tiệm Bánh Thanh, Da Nang" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "vi_VN" },
      { property: "og:locale:alternate", content: "ko_KR" },
      { property: "og:locale:alternate", content: "zh_CN" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/en` },
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
