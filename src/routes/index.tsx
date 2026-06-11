import { createFileRoute } from "@tanstack/react-router";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam from "@/assets/banh-cam.asset.json";
import banhCam1 from "@/assets/banh-cam-1.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";
import banhCam3 from "@/assets/banh-cam-3.asset.json";
import banhIt from "@/assets/banh-it.asset.json";
import boKhoLat from "@/assets/bo-kho-lat.asset.json";
import boKhoSoi from "@/assets/bo-kho-soi.asset.json";
import boKhoSoiLat from "@/assets/bo-kho-soi-lat.asset.json";

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
  component: Home,
});

const HOTLINES = [
  { num: "0919.644.625", tel: "0919644625" },
  { num: "0905.142.512", tel: "0905142512" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustStrip />
      <Products />
      <QualityPromise />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <span className="grid place-items-center size-11 rounded-full border-2 border-primary text-primary font-display font-bold leading-none">
        <span className="text-[11px] tracking-[0.18em] -mb-0.5">BAKERY</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground">TIỆM BÁNH</span>
        <span className="font-display text-xl font-bold text-foreground">THANH</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header id="top" className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#san-pham" className="hover:text-primary transition">Sản phẩm</a>
          <a href="#cam-ket" className="hover:text-primary transition">Cam kết</a>
          <a href="#gioi-thieu" className="hover:text-primary transition">Giới thiệu</a>
          <a href="#lien-he" className="hover:text-primary transition">Liên hệ</a>
        </nav>
        <a
          href={`tel:${HOTLINES[0].tel}`}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition shadow-warm"
        >
          <PhoneIcon className="size-4" /> Đặt bánh
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-grain">
      <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 size-[420px] rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            <span className="size-1.5 rounded-full bg-primary" /> Đặc sản Đà Nẵng làm quà
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-balance leading-[1.05]">
            Bánh{" "}
            <span className="font-script font-bold text-primary text-5xl md:text-7xl">bông lan cam</span>
            <br />mềm xốp – thơm hương cam.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl text-balance">
            Tiệm Bánh Thanh – thương hiệu bánh & đặc sản Đà Nẵng. Bao bì sang trọng,
            phù hợp làm quà biếu, giao hàng tận nơi theo yêu cầu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#san-pham" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition shadow-warm">
              Xem sản phẩm <ArrowIcon className="size-4" />
            </a>
            <a href={`tel:${HOTLINES[0].tel}`} className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 font-semibold hover:border-primary hover:text-primary transition">
              <PhoneIcon className="size-4" /> {HOTLINES[0].num}
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <Stat label="Năm xây dựng" value="Uy tín" />
            <Divider />
            <Stat label="Giao hàng" value="Tận nơi" />
            <Divider />
            <Stat label="Đặc sản" value="Đà Nẵng" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-3" />
          <img
            src={banhCam2.url}
            alt="Bánh bông lan cam Tiệm Bánh Thanh"
            className="relative rounded-[2.5rem] aspect-square object-cover w-full shadow-warm border-4 border-card"
            loading="eager"
          />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-warm flex items-center gap-3 max-w-[220px]">
            <span className="grid place-items-center size-10 rounded-full bg-primary/15 text-primary">🥮</span>
            <div className="text-sm">
              <div className="font-semibold">Mềm xốp – thơm cam</div>
              <div className="text-muted-foreground text-xs">Bao bì sang trọng</div>
            </div>
          </div>
          <div className="absolute -top-5 -right-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-warm hidden sm:block">
            <div className="text-xs text-muted-foreground">Có mặt trên</div>
            <div className="font-semibold text-sm">ShopeeFood · GrabFood</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-lg text-foreground font-semibold">{value}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}
function Divider() { return <span className="h-8 w-px bg-border" />; }

function TrustStrip() {
  const items = [
    { k: "GPKD số", v: "32A8029407" },
    { k: "Giấy ATTP", v: "07/2025/GCNATTP-UBND" },
    { k: "Số công bố CLSP", v: "01/HKD TIỆM BÁNH THANH/2026" },
  ];
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-6 grid sm:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.k} className="flex items-center gap-3">
            <ShieldIcon className="size-8 text-primary shrink-0" />
            <div className="text-sm">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.k}</div>
              <div className="font-semibold">{it.v}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

type Product = {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  img: string;
  badge?: string;
  meta: string[];
};

const PRODUCTS: Product[] = [
  {
    id: "bong-lan-cam",
    name: "Bánh bông lan cam",
    tagline: "Signature · Đặc sản làm quà",
    desc: "Cốt bánh mềm xốp, dậy hương cam dịu nhẹ, ngọt vừa. Đóng hộp sang trọng – món quà tinh tế mang về từ Đà Nẵng.",
    img: banhCamHop.url,
    badge: "Bán chạy",
    meta: ["Hộp giấy cao cấp", "Bảo quản 3–5 ngày", "Phù hợp làm quà"],
  },
  {
    id: "banh-it-tom-thit",
    name: "Bánh ít nhân tôm thịt",
    tagline: "Đặc sản mặn truyền thống",
    desc: "Vỏ nếp dẻo bọc lá chuối tiêu xanh, ôm trọn nhân tôm sông xào ba chỉ, nấm tai mèo và hành phi thơm phức.",
    img: banhIt.url,
    meta: ["Gói lá chuối tươi", "Nhân tôm – thịt – nấm mèo", "Hấp nóng – ăn ngay"],
  },
  {
    id: "bo-kho-soi",
    name: "Bò khô sợi sả ớt sạch",
    tagline: "Hũ 500g · Bò Khô Sạch",
    desc: "Sợi bò mềm dai, thấm vị sả ớt đặc trưng. Cam kết 100% bò tươi nguyên chất – không pha thịt heo, không phẩm màu, không chất bảo quản.",
    img: boKhoSoi.url,
    badge: "Hũ 500g",
    meta: ["100% bò tươi", "Không pha thịt heo", "Không phẩm màu"],
  },
  {
    id: "bo-kho-lat",
    name: "Bò khô miếng hảo hạng",
    tagline: "Hộp 500g · Loại 1",
    desc: "Miếng bò dày dặn, ướp gia vị đậm đà, sấy khô tự nhiên. Phù hợp lai rai, làm quà biếu hoặc dùng kèm bia.",
    img: boKhoLat.url,
    badge: "Loại 1",
    meta: ["Hộp 500g", "Thịt thăn bò chọn lọc", "Đậm đà – không cay gắt"],
  },
];

function Products() {
  return (
    <section id="san-pham" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Danh mục sản phẩm"
          title="Đặc sản Tiệm Bánh Thanh"
          desc="Từ bánh bông lan cam signature đến bánh ít truyền thống và bò khô sạch Đà Nẵng – mỗi sản phẩm là một lát cắt của vị quê hương."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.img} alt={p.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {p.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-warm">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-6 md:p-7">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">{p.tagline}</div>
                <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.meta.map((m) => (
                    <li key={m} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{m}</li>
                  ))}
                </ul>
                <a href={`tel:${HOTLINES[0].tel}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                  Đặt hàng ngay <ArrowIcon className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityPromise() {
  const items = [
    { icon: "✅", t: "Hương vị thơm ngon, ổn định", d: "Công thức nhất quán qua từng mẻ bánh." },
    { icon: "✅", t: "Mềm xốp, dễ thưởng thức", d: "Kết cấu nhẹ, hợp khẩu vị mọi lứa tuổi." },
    { icon: "✅", t: "Nguyên liệu đạt chuẩn an toàn", d: "Nguồn gốc rõ ràng, có kiểm định ATTP." },
    { icon: "✅", t: "Quy trình sản xuất nhất quán", d: "Kiểm soát chặt từ pha bột đến đóng gói." },
  ];
  return (
    <section id="cam-ket" className="py-20 md:py-28 bg-card/60 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <SectionHeader
            align="left"
            eyebrow="Cam kết chất lượng"
            title="Mỗi chiếc bánh – một lời cam kết."
            desc="Tại Tiệm Bánh Thanh, chúng tôi lựa chọn nguyên liệu có nguồn gốc rõ ràng, được kiểm định và đảm bảo an toàn thực phẩm."
          />
          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm">
            <div className="font-semibold text-primary mb-1">Lưu ý về hương cam</div>
            <p className="text-muted-foreground">
              Hương cam đặc trưng của bánh được tạo nên từ tổ hợp nguyên liệu chọn lọc,
              đảm bảo an toàn thực phẩm và hương vị ổn định qua từng mẻ – chứ không hoàn toàn
              từ 100% cam tươi tự nhiên. Chúng tôi tin rằng minh bạch là gốc rễ của chất lượng.
            </p>
          </div>
        </div>
        <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <li key={it.t} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition">
              <span className="text-2xl">{it.icon}</span>
              <h4 className="mt-3 font-bold text-lg">{it.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="gioi-thieu" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={banhCam3.url} alt="Hộp bánh bông lan cam Tiệm Bánh Thanh" className="rounded-3xl aspect-[4/5] object-cover w-full shadow-warm" loading="lazy" />
          <img src={banhCam1.url} alt="Bánh bông lan cam cắt lát" className="hidden sm:block absolute -bottom-8 -right-8 w-1/2 aspect-square object-cover rounded-2xl border-4 border-background shadow-warm" loading="lazy" />
        </div>
        <div>
          <SectionHeader
            align="left"
            eyebrow="Câu chuyện thương hiệu"
            title="Tiệm Bánh Thanh – vị Đà Nẵng trong từng chiếc bánh."
          />
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Khởi nguồn từ một căn bếp nhỏ tại Hải Châu, Tiệm Bánh Thanh ra đời với mong muốn
              giới thiệu đến khách phương xa những món đặc sản dung dị của Đà Nẵng – đóng gói
              chỉn chu, đủ trang trọng để làm quà.
            </p>
            <p>
              Mỗi sản phẩm tại tiệm – từ <strong className="text-foreground">bánh bông lan cam</strong> signature,
              <strong className="text-foreground"> bánh ít nhân tôm thịt</strong> gói lá chuối tươi, đến
              <strong className="text-foreground"> bò khô sạch</strong> 100% nguyên chất – đều được làm thủ công,
              kiểm soát chất lượng nghiêm ngặt và có đầy đủ giấy chứng nhận an toàn thực phẩm.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            <Cert title="GPKD" value="32A8029407" />
            <Cert title="ATTP" value="07/2025" sub="GCNATTP-UBND" />
            <Cert title="CLSP" value="01/2026" sub="HKD T.B.Thanh" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Cert({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-center">
      <ShieldIcon className="mx-auto size-6 text-primary" />
      <div className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">{title}</div>
      <div className="font-display font-bold text-sm">{value}</div>
      {sub && <div className="text-[10px] text-muted-foreground">{sub}</div>}
    </div>
  );
}

function Gallery() {
  const imgs = [banhCam.url, banhCam2.url, banhIt.url, boKhoSoiLat.url, boKhoLat.url, banhCam1.url];
  return (
    <section className="pb-4">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {imgs.map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" className={`rounded-2xl object-cover aspect-square hover:scale-105 transition-transform duration-500 ${i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="lien-he" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Liên hệ & đặt bánh"
          title="Giao hàng theo yêu cầu"
          desc="Liên hệ trực tiếp qua hotline để được tư vấn nhanh nhất. Có mặt trên ShopeeFood & GrabFood."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-8 md:p-10 shadow-warm">
            <div className="text-xs uppercase tracking-[0.25em] opacity-80">Hotline đặt bánh nhanh</div>
            <div className="mt-5 space-y-4">
              {HOTLINES.map((h) => (
                <a key={h.tel} href={`tel:${h.tel}`} className="flex items-center gap-4 group">
                  <span className="grid place-items-center size-12 rounded-full bg-primary-foreground/15 group-hover:bg-primary-foreground/25 transition">
                    <PhoneIcon className="size-5" />
                  </span>
                  <span className="font-display text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-1 transition-transform">
                    {h.num}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-sm space-y-2 opacity-95">
              <div className="flex items-start gap-2"><PinIcon className="size-4 mt-0.5 shrink-0" /> K25/5 Lý Thường Kiệt, Hải Châu, Đà Nẵng</div>
              <div className="flex items-start gap-2"><TruckIcon className="size-4 mt-0.5 shrink-0" /> Giao hàng tận nơi · ShopeeFood · GrabFood</div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold">Kết nối với chúng tôi</h3>
            <p className="mt-2 text-muted-foreground text-sm">Theo dõi để cập nhật mẻ bánh mới nhất và ưu đãi từ tiệm.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <SocialLink href="https://www.facebook.com/tiembanhthanh" label="Facebook" handle="tiệm bánh THANH" icon={<FbIcon className="size-5" />} />
              <SocialLink href="https://www.tiktok.com/@tiem_banh_thanh" label="TikTok" handle="@tiem_banh_thanh" icon={<TtIcon className="size-5" />} />
              <SocialLink href="https://zalo.me/0919644625" label="Zalo" handle="0919.644.625" icon={<ZaloIcon className="size-5" />} />
              <SocialLink href="https://zalo.me/0905142512" label="Zalo" handle="0905.142.512" icon={<ZaloIcon className="size-5" />} />
            </div>
            <div className="mt-8 rounded-2xl bg-secondary p-5 text-sm">
              <div className="font-semibold mb-1">Giờ phục vụ</div>
              <div className="text-muted-foreground">Mở cửa hằng ngày · Đặt trước 1–2 tiếng cho đơn lớn để tiệm chuẩn bị tốt nhất.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, handle, icon }: { href: string; label: string; handle: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-border p-4 hover:border-primary hover:bg-primary/5 transition-all hover:-translate-y-0.5">
      <span className="grid place-items-center size-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="block font-semibold text-sm truncate">{handle}</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background mt-10">
      <div className="mx-auto max-w-6xl px-5 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center size-11 rounded-full border-2 border-primary text-primary font-display font-bold">
              <span className="text-[11px] tracking-[0.18em]">BAKERY</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] tracking-[0.3em] opacity-60">TIỆM BÁNH</span>
              <span className="font-display text-xl font-bold">THANH</span>
            </span>
          </div>
          <p className="mt-4 text-sm opacity-70 max-w-md">
            Đặc sản Đà Nẵng làm quà – bánh bông lan cam, bánh ít nhân tôm thịt, bò khô sạch.
            Bao bì sang trọng, giao hàng tận nơi.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <FootBadge>GPKD 32A8029407</FootBadge>
            <FootBadge>ATTP 07/2025</FootBadge>
            <FootBadge>CLSP 01/2026</FootBadge>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider opacity-60 mb-3">Liên hệ</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li>K25/5 Lý Thường Kiệt</li>
            <li>Hải Châu, Đà Nẵng</li>
            <li><a className="hover:text-primary" href={`tel:${HOTLINES[0].tel}`}>{HOTLINES[0].num}</a></li>
            <li><a className="hover:text-primary" href={`tel:${HOTLINES[1].tel}`}>{HOTLINES[1].num}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider opacity-60 mb-3">Theo dõi</div>
          <ul className="space-y-2 text-sm">
            <li><a target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-2" href="https://www.facebook.com/tiembanhthanh"><FbIcon className="size-4" /> tiệm bánh THANH</a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-2" href="https://www.tiktok.com/@tiem_banh_thanh"><TtIcon className="size-4" /> @tiem_banh_thanh</a></li>
            <li className="opacity-70">ShopeeFood · GrabFood</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs opacity-60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Tiệm Bánh Thanh. Đã đăng ký kinh doanh tại TP. Đà Nẵng.</span>
          <span>Đặc sản Đà Nẵng làm quà</span>
        </div>
      </div>
    </footer>
  );
}

function FootBadge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 rounded-full border border-background/20 px-3 py-1 text-[11px] font-semibold opacity-90"><ShieldIcon className="size-3" />{children}</span>;
}

/* ---------- UI helpers ---------- */
function SectionHeader({ eyebrow, title, desc, align = "center" }: { eyebrow: string; title: string; desc?: string; align?: "center" | "left" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${a} max-w-2xl`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
        <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-balance leading-tight">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-balance">{desc}</p>}
    </div>
  );
}

/* ---------- Icons (inline SVG) ---------- */
function PhoneIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>;
}
function ArrowIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
}
function ShieldIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
}
function PinIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function TruckIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>;
}
function FbIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2C16.4 4.1 15.4 4 14.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.9H7.8V14h2.7v8h3z" /></svg>;
}
function TtIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M16.5 2c.3 2 1.5 3.7 3.5 4.4v3a7.6 7.6 0 0 1-3.6-1V15a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.2a3 3 0 1 0 2.1 2.9V2h3.1z" /></svg>;
}
function ZaloIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2L5 21l3.7-1.7c1 .2 2.1.4 3.3.4 5.5 0 10-3.6 10-8 0-4.5-4.5-8-10-8zm-4.4 9.7H5.4v-3.5h.7v2.9h1.5v.6zm1.2 0h-.7V9.2h.7v3.5zm3.2 0h-.6l-1.7-2.3v2.3h-.7V9.2h.6l1.7 2.3V9.2h.7v3.5zm3 0h-2.4V9.2h.7v2.9h1.7v.6zm3.4 0h-.6l-.3-.7h-1.3l-.3.7h-.7l1.3-3.5h.6l1.3 3.5z" /></svg>;
}
