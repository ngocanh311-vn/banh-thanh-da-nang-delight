import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/lib/site-content";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Tiệm Bánh Thanh – Da Nang Specialty Bakery · Orange Sponge Cake" },
      { name: "description", content: "Soft, fluffy orange sponge cake, shrimp-and-pork bánh ít, and clean dried beef from Da Nang. On-demand delivery – K25/5 Ly Thuong Kiet, Hai Chau, Da Nang." },
      { property: "og:title", content: "Tiệm Bánh Thanh – Da Nang specialty bakery" },
      { property: "og:description", content: "Soft orange sponge cake, elegant gift packaging. Da Nang specialty – on-demand delivery." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: banhCamHop.url },
      { name: "language", content: "en" },
    ],
    links: [
      { rel: "alternate", hreflang: "vi", href: "/" },
      { rel: "alternate", hreflang: "en", href: "/en" },
    ],
  }),
  component: () => <Home lang="en" />,
});
