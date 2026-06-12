import { createFileRoute } from "@tanstack/react-router";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import { Home } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiệm Bánh Thanh – Bánh bông lan cam · Đặc sản Đà Nẵng làm quà" },
      { name: "description", content: "Bánh bông lan cam mềm xốp thơm hương cam, bánh ít nhân tôm thịt, bò khô sạch Đà Nẵng. Giao hàng tận nơi – K25/5 Lý Thường Kiệt, Hải Châu, Đà Nẵng." },
      { property: "og:title", content: "Tiệm Bánh Thanh – Đặc sản Đà Nẵng làm quà" },
      { property: "og:description", content: "Bánh bông lan cam mềm xốp, bao bì sang. Đặc sản Đà Nẵng làm quà – giao hàng theo yêu cầu." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: banhCamHop.url },
      { name: "language", content: "vi" },
    ],
    links: [
      { rel: "alternate", hreflang: "vi", href: "/" },
      { rel: "alternate", hreflang: "en", href: "/en" },
    ],
  }),
  component: () => <Home lang="vi" />,
});
