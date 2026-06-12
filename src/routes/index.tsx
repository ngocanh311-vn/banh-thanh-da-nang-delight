import { createFileRoute, Link } from "@tanstack/react-router";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam from "@/assets/banh-cam.asset.json";
import banhCam1 from "@/assets/banh-cam-1.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";
import banhCam3 from "@/assets/banh-cam-3.asset.json";
import banhIt from "@/assets/banh-it.asset.json";
import boKhoLat from "@/assets/bo-kho-lat.asset.json";
import boKhoSoi from "@/assets/bo-kho-soi.asset.json";
import boKhoSoiLat from "@/assets/bo-kho-soi-lat.asset.json";
import { Home, T } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiệm Bánh Thanh – Bánh bông lan cam · Đặc sản Đà Nẵng làm quà" },
      { name: "description", content: "Bánh bông lan cam mềm xốp thơm hương cam, bánh ít nhân tôm thịt, bò khô sạch Đà Nẵng. Giao hàng tận nơi – K25/5 Lý Thường Kiệt, Hải Châu, Đà Nẵng." },
      { property: "og:title", content: "Tiệm Bánh Thanh – Đặc sản Đà Nẵng làm quà" },
      { property: "og:description", content: "Bánh bông lan cam mềm xốp, bao bì sang. Đặc sản Đà Nẵng làm quà – giao hàng theo yêu cầu." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: banhCamHop.url },
    ],
  }),
  component: () => <Home lang="vi" />,
});

// Re-export so other route files can import from one place
export { Home, T, Link };
export { banhCamHop, banhCam, banhCam1, banhCam2, banhCam3, banhIt, boKhoLat, boKhoSoi, boKhoSoiLat };
