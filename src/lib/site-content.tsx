import { Link } from "@tanstack/react-router";
import banhCamHop from "@/assets/banh-cam-hop.asset.json";
import banhCam from "@/assets/banh-cam.asset.json";
import banhCam1 from "@/assets/banh-cam-1.asset.json";
import banhCam2 from "@/assets/banh-cam-2.asset.json";
import banhCam3 from "@/assets/banh-cam-3.asset.json";
import banhIt from "@/assets/banh-it.asset.json";
import boKhoLat from "@/assets/bo-kho-lat.asset.json";
import boKhoSoi from "@/assets/bo-kho-soi.asset.json";
import boKhoSoiLat from "@/assets/bo-kho-soi-lat.asset.json";

export type Lang = "vi" | "en";

const SHOPEEFOOD_URL = "https://shopeefood.vn/u/H237mDM";
const GRABFOOD_URL = "https://food.grab.com/vn/vi/restaurant/online-delivery/5-C6UUJ24WCJUBG2?sourceID=20240813_095504_B70CCB33720843FBAA241A6E90DC6A9C_MEXMPS";

const HOTLINES = [
  { num: "0919.644.625", tel: "0919644625" },
  { num: "0905.142.512", tel: "0905142512" },
];

/* ============================================================
   Translation dictionary
   ============================================================ */
type Product = { id: string; name: string; tagline: string; desc: string; img: string; badge?: string; meta: string[] };
type Translation = {
  nav: { products: string; promise: string; about: string; contact: string };
  ctaOrder: string;
  brandTagline: string;
  hero: {
    eyebrow: string; titleA: string; titleScript: string; titleB: string; desc: string;
    seeProducts: string; floatTitle: string; floatSub: string; quickOrder: string;
    stats: { v: string; l: string }[];
  };
  trust: { k: string; v: string }[];
  products: { eyebrow: string; title: string; desc: string; orderCta: string; bestSeller: string };
  productList: Product[];
  quality: {
    eyebrow: string; title: string; desc: string; noteTitle: string; note: string;
    items: { t: string; d: string }[];
  };
  about: { eyebrow: string; title: string; p1: string; p2: string };
  contact: {
    eyebrow: string; title: string; desc: string; hotline: string; address: string;
    deliveryLine: string; connectTitle: string; connectDesc: string;
    hoursTitle: string; hoursDesc: string; mapTitle: string; mapOpen: string;
  };
  footer: {
    tagline: string; contact: string; follow: string;
    address1: string; address2: string; rights: string; slogan: string;
  };
};

export const T: Record<Lang, Translation> = {
  vi: {
    nav: { products: "Sản phẩm", promise: "Cam kết", about: "Giới thiệu", contact: "Liên hệ" },
    ctaOrder: "Đặt bánh",
    brandTagline: "TIỆM BÁNH",
    hero: {
      eyebrow: "Đặc sản Đà Nẵng làm quà",
      titleA: "Bánh",
      titleScript: "bông lan cam",
      titleB: "mềm xốp – thơm hương cam.",
      desc: "Tiệm Bánh Thanh – thương hiệu bánh & đặc sản Đà Nẵng. Bao bì sang trọng, phù hợp làm quà biếu, giao hàng tận nơi theo yêu cầu.",
      seeProducts: "Xem sản phẩm",
      floatTitle: "Mềm xốp – thơm cam",
      floatSub: "Bao bì sang trọng",
      quickOrder: "Đặt nhanh qua",
      stats: [
        { v: "Uy tín", l: "Năm xây dựng" },
        { v: "Tận nơi", l: "Giao hàng" },
        { v: "Đà Nẵng", l: "Đặc sản" },
      ],
    },
    trust: [
      { k: "GPKD số", v: "32A8029407" },
      { k: "Giấy ATTP", v: "07/2025/GCNATTP-UBND" },
      { k: "Số công bố CLSP", v: "01/HKD TIỆM BÁNH THANH/2026" },
    ],
    products: {
      eyebrow: "Danh mục sản phẩm",
      title: "Đặc sản Tiệm Bánh Thanh",
      desc: "Từ bánh bông lan cam signature đến bánh ít truyền thống và bò khô sạch Đà Nẵng – mỗi sản phẩm là một lát cắt của vị quê hương.",
      orderCta: "Đặt hàng ngay",
      bestSeller: "Bán chạy",
    },
    productList: [
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
        name: "Bò khô sợi sả ớt",
        tagline: "Hũ 500g · Bò Khô Sạch",
        desc: "Sợi bò mềm dai, thấm vị sả ớt đặc trưng. 100% bò tươi nguyên chất – không pha thịt heo, không phẩm màu, không chất bảo quản. Có hai vị cay và ít cay; nhận đặt loại không cay theo đơn lớn.",
        img: boKhoSoi.url,
        badge: "Hũ 500g",
        meta: ["Cay / ít cay", "Không cay – theo đơn lớn", "Hút chân không theo yêu cầu"],
      },
      {
        id: "bo-kho-lat",
        name: "Bò khô lát hảo hạng",
        tagline: "Hũ 500g · Loại 1",
        desc: "Miếng bò dày dặn từ thịt thăn chọn lọc, ướp gia vị đậm đà, sấy khô tự nhiên. Có hai vị cay và ít cay; nhận đặt loại không cay theo đơn lớn. Phù hợp lai rai, làm quà biếu hoặc dùng kèm bia.",
        img: boKhoLat.url,
        badge: "Hũ 500g",
        meta: ["Cay / ít cay", "Không cay – theo đơn lớn", "Hút chân không theo yêu cầu"],
      },
    ],
    quality: {
      eyebrow: "Cam kết chất lượng",
      title: "Mỗi chiếc bánh – một lời cam kết.",
      desc: "Tại Tiệm Bánh Thanh, chúng tôi lựa chọn nguyên liệu có nguồn gốc rõ ràng, được kiểm định và đảm bảo an toàn thực phẩm.",
      noteTitle: "Lưu ý về hương cam",
      note: "Hương cam đặc trưng của bánh được tạo nên từ tổ hợp nguyên liệu chọn lọc, đảm bảo an toàn thực phẩm và hương vị ổn định qua từng mẻ – chứ không hoàn toàn từ 100% cam tươi tự nhiên. Chúng tôi tin rằng minh bạch là gốc rễ của chất lượng.",
      items: [
        { t: "Hương vị thơm ngon, ổn định", d: "Công thức nhất quán qua từng mẻ bánh." },
        { t: "Mềm xốp, dễ thưởng thức", d: "Kết cấu nhẹ, hợp khẩu vị mọi lứa tuổi." },
        { t: "Nguyên liệu đạt chuẩn an toàn", d: "Nguồn gốc rõ ràng, có kiểm định ATTP." },
        { t: "Quy trình sản xuất nhất quán", d: "Kiểm soát chặt từ pha bột đến đóng gói." },
      ],
    },
    about: {
      eyebrow: "Câu chuyện thương hiệu",
      title: "Tiệm Bánh Thanh – vị Đà Nẵng trong từng chiếc bánh.",
      p1: "Khởi nguồn từ một căn bếp nhỏ tại Hải Châu, Tiệm Bánh Thanh ra đời với mong muốn giới thiệu đến khách phương xa những món đặc sản dung dị của Đà Nẵng – đóng gói chỉn chu, đủ trang trọng để làm quà.",
      p2: "Mỗi sản phẩm tại tiệm – từ bánh bông lan cam signature, bánh ít nhân tôm thịt gói lá chuối tươi, đến bò khô sạch 100% nguyên chất – đều được làm thủ công, kiểm soát chất lượng nghiêm ngặt và có đầy đủ giấy chứng nhận an toàn thực phẩm.",
    },
    contact: {
      eyebrow: "Liên hệ & đặt bánh",
      title: "Giao hàng theo yêu cầu",
      desc: "Liên hệ trực tiếp qua hotline để được tư vấn nhanh nhất. Có mặt trên ShopeeFood & GrabFood.",
      hotline: "Hotline đặt bánh nhanh",
      address: "K25/5 Lý Thường Kiệt, Hải Châu, Đà Nẵng",
      deliveryLine: "Giao hàng tận nơi qua các ứng dụng:",
      connectTitle: "Kết nối với chúng tôi",
      connectDesc: "Theo dõi để cập nhật mẻ bánh mới nhất và ưu đãi từ tiệm.",
      hoursTitle: "Giờ phục vụ",
      hoursDesc: "Mở cửa hằng ngày · Đặt trước 1–2 tiếng cho đơn lớn để tiệm chuẩn bị tốt nhất.",
      mapTitle: "Bản đồ tiệm",
      mapOpen: "Mở Google Maps →",
    },
    footer: {
      tagline: "Đặc sản Đà Nẵng làm quà – bánh bông lan cam, bánh ít nhân tôm thịt, bò khô sạch. Bao bì sang trọng, giao hàng tận nơi.",
      contact: "Liên hệ",
      follow: "Theo dõi",
      address1: "K25/5 Lý Thường Kiệt",
      address2: "Hải Châu, Đà Nẵng",
      rights: "Tiệm Bánh Thanh. Đã đăng ký kinh doanh tại TP. Đà Nẵng.",
      slogan: "Đặc sản Đà Nẵng làm quà",
    },
  },
  en: {
    nav: { products: "Products", promise: "Promise", about: "About", contact: "Contact" },
    ctaOrder: "Order now",
    brandTagline: "BAKERY",
    hero: {
      eyebrow: "Da Nang specialty · The perfect gift",
      titleA: "Soft",
      titleScript: "orange sponge cake",
      titleB: "with a fresh citrus aroma.",
      desc: "Tiệm Bánh Thanh – a Da Nang bakery & specialty brand. Elegant packaging, ideal as a gift, with on-demand delivery.",
      seeProducts: "See products",
      floatTitle: "Soft, fluffy & citrus-fresh",
      floatSub: "Elegant gift packaging",
      quickOrder: "Quick order",
      stats: [
        { v: "Trusted", l: "Established" },
        { v: "On demand", l: "Delivery" },
        { v: "Da Nang", l: "Specialty" },
      ],
    },
    trust: [
      { k: "Business License", v: "32A8029407" },
      { k: "Food Safety Cert.", v: "07/2025/GCNATTP-UBND" },
      { k: "Product Quality Reg.", v: "01/HKD TIỆM BÁNH THANH/2026" },
    ],
    products: {
      eyebrow: "Our products",
      title: "Da Nang specialties from Tiệm Bánh Thanh",
      desc: "From our signature orange sponge cake to traditional bánh ít and clean dried beef – each item is a slice of Da Nang flavor.",
      orderCta: "Order now",
      bestSeller: "Best seller",
    },
    productList: [
      {
        id: "bong-lan-cam",
        name: "Orange sponge cake",
        tagline: "Signature · Perfect as a gift",
        desc: "A soft, fluffy sponge with a gentle citrus aroma and balanced sweetness. Packed in an elegant gift box – a refined souvenir from Da Nang.",
        img: banhCamHop.url,
        badge: "Best seller",
        meta: ["Premium gift box", "Best within 3–5 days", "Great as a gift"],
      },
      {
        id: "banh-it-tom-thit",
        name: "Bánh ít with shrimp & pork",
        tagline: "Traditional savory specialty",
        desc: "Chewy sticky-rice dumplings wrapped in fresh banana leaves, filled with river shrimp, pork belly, wood-ear mushroom and fragrant fried shallots.",
        img: banhIt.url,
        meta: ["Wrapped in fresh banana leaf", "Shrimp, pork & mushroom", "Steam & serve hot"],
      },
      {
        id: "bo-kho-soi",
        name: "Shredded dried beef – lemongrass & chili",
        tagline: "500g jar · Clean dried beef",
        desc: "Tender, chewy shreds infused with signature lemongrass and chili. 100% pure beef – no pork blend, no artificial color, no preservatives. Available in spicy and mild; non-spicy made to order for large quantities.",
        img: boKhoSoi.url,
        badge: "500g jar",
        meta: ["Spicy / mild", "Non-spicy on bulk order", "Vacuum-sealed on request"],
      },
      {
        id: "bo-kho-lat",
        name: "Premium dried beef slices",
        tagline: "500g jar · Grade 1",
        desc: "Thick slices from selected beef tenderloin, richly marinated and naturally dried. Available in spicy and mild; non-spicy made to order for large quantities. Perfect for snacking, gifting, or pairing with beer.",
        img: boKhoLat.url,
        badge: "500g jar",
        meta: ["Spicy / mild", "Non-spicy on bulk order", "Vacuum-sealed on request"],
      },
    ],
    quality: {
      eyebrow: "Our quality promise",
      title: "Every cake – a promise we keep.",
      desc: "At Tiệm Bánh Thanh, we source ingredients with clear provenance, properly tested and certified for food safety.",
      noteTitle: "A note on the orange aroma",
      note: "The signature orange aroma comes from a carefully selected blend of ingredients that ensure food safety and consistent flavor in every batch – it is not made entirely from 100% fresh oranges. We believe transparency is the root of quality.",
      items: [
        { t: "Delicious, consistent flavor", d: "A recipe that stays consistent batch after batch." },
        { t: "Soft and easy to enjoy", d: "Light texture suitable for all ages." },
        { t: "Ingredients meet safety standards", d: "Clear provenance and food-safety certification." },
        { t: "Consistent production process", d: "Tightly controlled from mixing to packaging." },
      ],
    },
    about: {
      eyebrow: "Our story",
      title: "Tiệm Bánh Thanh – the taste of Da Nang in every bite.",
      p1: "Born in a small kitchen in Hải Châu, Tiệm Bánh Thanh was founded to share Da Nang's humble specialties with visitors from afar – carefully packaged and refined enough to give as a gift.",
      p2: "Every product – from our signature orange sponge cake, banana-leaf bánh ít with shrimp and pork, to 100% pure clean dried beef – is handcrafted, quality-controlled, and fully certified for food safety.",
    },
    contact: {
      eyebrow: "Contact & order",
      title: "Delivery on demand",
      desc: "Call our hotline for the fastest assistance. Also available on ShopeeFood & GrabFood.",
      hotline: "Quick-order hotline",
      address: "K25/5 Ly Thuong Kiet, Hai Chau, Da Nang",
      deliveryLine: "Doorstep delivery via:",
      connectTitle: "Connect with us",
      connectDesc: "Follow us for the latest batches and special offers.",
      hoursTitle: "Opening hours",
      hoursDesc: "Open daily · Please order 1–2 hours in advance for large orders.",
      mapTitle: "Find us on the map",
      mapOpen: "Open in Google Maps →",
    },
    footer: {
      tagline: "Da Nang specialties to take home – orange sponge cake, bánh ít with shrimp & pork, clean dried beef. Elegant packaging, doorstep delivery.",
      contact: "Contact",
      follow: "Follow",
      address1: "K25/5 Ly Thuong Kiet",
      address2: "Hai Chau, Da Nang",
      rights: "Tiệm Bánh Thanh. Registered business in Da Nang, Vietnam.",
      slogan: "Da Nang specialty · The perfect gift",
    },
  },
};

/* ============================================================
   Components
   ============================================================ */
export function Home({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} t={t} />
      <Hero lang={lang} t={t} />
      <TrustStrip t={t} />
      <Products lang={lang} t={t} />
      <QualityPromise t={t} />
      <About t={t} />
      <Gallery />
      <Contact t={t} />
      <Footer lang={lang} t={t} />
    </div>
  );
}

type Tt = Translation;

function LangSwitcher({ lang }: { lang: Lang }) {
  const base = "px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition";
  return (
    <div className="inline-flex items-center rounded-full border border-border overflow-hidden">
      <Link to="/" className={`${base} ${lang === "vi" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>VI</Link>
      <Link to="/en" className={`${base} ${lang === "en" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>EN</Link>
    </div>
  );
}

function Logo({ t }: { t: Tt }) {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <span className="grid place-items-center size-11 rounded-full border-2 border-primary text-primary font-display font-bold leading-none">
        <span className="text-[11px] tracking-[0.18em] -mb-0.5">BAKERY</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground">{t.brandTagline}</span>
        <span className="font-display text-xl font-bold text-foreground">THANH</span>
      </span>
    </a>
  );
}

function Header({ lang, t }: { lang: Lang; t: Tt }) {
  return (
    <header id="top" className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-3">
        <Logo t={t} />
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#san-pham" className="hover:text-primary transition">{t.nav.products}</a>
          <a href="#cam-ket" className="hover:text-primary transition">{t.nav.promise}</a>
          <a href="#gioi-thieu" className="hover:text-primary transition">{t.nav.about}</a>
          <a href="#lien-he" className="hover:text-primary transition">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitcher lang={lang} />
          <a
            href={`tel:${HOTLINES[0].tel}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition shadow-warm"
          >
            <PhoneIcon className="size-4" /> {t.ctaOrder}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang, t }: { lang: Lang; t: Tt }) {
  return (
    <section className="relative overflow-hidden bg-grain">
      <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 size-[420px] rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
            <span className="size-1.5 rounded-full bg-primary" /> {t.hero.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-balance leading-[1.05]">
            {t.hero.titleA}{" "}
            <span className="font-script font-bold text-primary text-5xl md:text-7xl">{t.hero.titleScript}</span>
            <br />{t.hero.titleB}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl text-balance">{t.hero.desc}</p>
          {lang === "en" && (
            <div className="mt-4 space-y-1.5 max-w-xl text-sm text-muted-foreground/90" aria-label="Multilingual introduction">
              <p lang="ko">
                <span className="font-semibold text-foreground">🇰🇷 한국어:</span>{" "}
                다낭 현지 베이커리 <strong>Tiệm Bánh Thanh</strong> – 부드러운 오렌지 스폰지 케이크, 새우·돼지고기 바인잇, 깨끗한 다낭 소고기 육포. 선물용 고급 포장, 다낭 시내 배달 가능.
              </p>
              <p lang="zh">
                <span className="font-semibold text-foreground">🇨🇳 中文:</span>{" "}
                岘港特色烘焙店 <strong>Tiệm Bánh Thanh</strong> – 香橙海绵蛋糕松软香甜，虾肉糯米糍 (Bánh ít)，岘港牛肉干。精美礼盒包装，岘港市区送货上门。
              </p>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#san-pham" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition shadow-warm">
              {t.hero.seeProducts} <ArrowIcon className="size-4" />
            </a>
            <a href={`tel:${HOTLINES[0].tel}`} className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 font-semibold hover:border-primary hover:text-primary transition">
              <PhoneIcon className="size-4" /> {HOTLINES[0].num}
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            {t.hero.stats.map((s, i) => (
              <span key={s.l} className="flex items-center gap-6">
                {i > 0 && <span className="h-8 w-px bg-border" />}
                <span>
                  <span className="block font-display text-lg text-foreground font-semibold">{s.v}</span>
                  <span className="block text-xs uppercase tracking-wider">{s.l}</span>
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-3" />
          <img
            src={banhCam2.url}
            alt={lang === "vi" ? "Bánh bông lan cam Tiệm Bánh Thanh" : "Orange sponge cake from Tiệm Bánh Thanh"}
            className="relative rounded-[2.5rem] aspect-square object-cover w-full shadow-warm border-4 border-card"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={800}
            height={800}
          />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-warm flex items-center gap-3 max-w-[220px]">
            <span className="grid place-items-center size-10 rounded-full bg-primary/15 text-primary">🥮</span>
            <div className="text-sm">
              <div className="font-semibold">{t.hero.floatTitle}</div>
              <div className="text-muted-foreground text-xs">{t.hero.floatSub}</div>
            </div>
          </div>
          <div className="absolute -top-5 -right-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-warm hidden sm:block">
            <div className="text-xs text-muted-foreground mb-1.5">{t.hero.quickOrder}</div>
            <div className="flex flex-col gap-1.5 text-sm font-semibold">
              <a href={SHOPEEFOOD_URL} target="_blank" rel="noopener noreferrer" className="text-[#ee4d2d] hover:underline">ShopeeFood →</a>
              <a href={GRABFOOD_URL} target="_blank" rel="noopener noreferrer" className="text-[#00b14f] hover:underline">GrabFood →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ t }: { t: Tt }) {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-6 grid sm:grid-cols-3 gap-4">
        {t.trust.map((it) => (
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

function Products({ lang, t }: { lang: Lang; t: Tt }) {
  return (
    <section id="san-pham" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow={t.products.eyebrow} title={t.products.title} desc={t.products.desc} />
        <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
          {t.productList.map((p) => (
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
                  {t.products.orderCta} <ArrowIcon className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        {/* lang token avoids unused var */}
        <span className="sr-only">{lang}</span>
      </div>
    </section>
  );
}

function QualityPromise({ t }: { t: Tt }) {
  return (
    <section id="cam-ket" className="py-20 md:py-28 bg-card/60 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <SectionHeader align="left" eyebrow={t.quality.eyebrow} title={t.quality.title} desc={t.quality.desc} />
          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm">
            <div className="font-semibold text-primary mb-1">{t.quality.noteTitle}</div>
            <p className="text-muted-foreground">{t.quality.note}</p>
          </div>
        </div>
        <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {t.quality.items.map((it) => (
            <li key={it.t} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition">
              <span className="text-2xl">✅</span>
              <h4 className="mt-3 font-bold text-lg">{it.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About({ t }: { t: Tt }) {
  return (
    <section id="gioi-thieu" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={banhCam3.url} alt="Tiệm Bánh Thanh" className="rounded-3xl aspect-[4/5] object-cover w-full shadow-warm" loading="lazy" />
          <img src={banhCam1.url} alt="" className="hidden sm:block absolute -bottom-8 -right-8 w-1/2 aspect-square object-cover rounded-2xl border-4 border-background shadow-warm" loading="lazy" />
        </div>
        <div>
          <SectionHeader align="left" eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
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

function Contact({ t }: { t: Tt }) {
  return (
    <section id="lien-he" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} desc={t.contact.desc} />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-8 md:p-10 shadow-warm">
            <div className="text-xs uppercase tracking-[0.25em] opacity-80">{t.contact.hotline}</div>
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
            <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-sm space-y-3 opacity-95">
              <div className="flex items-start gap-2"><PinIcon className="size-4 mt-0.5 shrink-0" /> {t.contact.address}</div>
              <div className="flex items-start gap-2"><TruckIcon className="size-4 mt-0.5 shrink-0" /> {t.contact.deliveryLine}</div>
              <div className="flex flex-wrap gap-2 pl-6">
                <a href={SHOPEEFOOD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground text-primary px-4 py-2 text-xs font-semibold hover:opacity-90 transition">
                  🛵 ShopeeFood
                </a>
                <a href={GRABFOOD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground text-primary px-4 py-2 text-xs font-semibold hover:opacity-90 transition">
                  🛵 GrabFood
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold">{t.contact.connectTitle}</h3>
            <p className="mt-2 text-muted-foreground text-sm">{t.contact.connectDesc}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <SocialLink href="https://www.facebook.com/tiembanhthanh" label="Facebook" handle="tiệm bánh THANH" icon={<FbIcon className="size-5" />} />
              <SocialLink href="https://www.tiktok.com/@tiem_banh_thanh" label="TikTok" handle="@tiem_banh_thanh" icon={<TtIcon className="size-5" />} />
              <SocialLink href="https://zalo.me/0919644625" label="Zalo" handle="0919.644.625" icon={<ZaloIcon className="size-5" />} />
              <SocialLink href="https://zalo.me/0905142512" label="Zalo" handle="0905.142.512" icon={<ZaloIcon className="size-5" />} />
            </div>
            <div className="mt-8 rounded-2xl bg-secondary p-5 text-sm">
              <div className="font-semibold mb-1">{t.contact.hoursTitle}</div>
              <div className="text-muted-foreground">{t.contact.hoursDesc}</div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{t.contact.mapTitle}</div>
                <a href="https://maps.app.goo.gl/Yuw4kYQaMReYriFo7" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                  {t.contact.mapOpen}
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border">
                <iframe
                  title="Tiệm Bánh Thanh map"
                  src="https://www.google.com/maps?q=K25%2F5+L%C3%BD+Th%C6%B0%E1%BB%9Dng+Ki%E1%BB%87t%2C+H%E1%BA%A3i+Ch%C3%A2u%2C+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
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

function Footer({ lang, t }: { lang: Lang; t: Tt }) {
  return (
    <footer className="bg-foreground text-background mt-10">
      <div className="mx-auto max-w-6xl px-5 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center size-11 rounded-full border-2 border-primary text-primary font-display font-bold">
              <span className="text-[11px] tracking-[0.18em]">BAKERY</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] tracking-[0.3em] opacity-60">{t.brandTagline}</span>
              <span className="font-display text-xl font-bold">THANH</span>
            </span>
          </div>
          <p className="mt-4 text-sm opacity-70 max-w-md">{t.footer.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <FootBadge>GPKD 32A8029407</FootBadge>
            <FootBadge>ATTP 07/2025</FootBadge>
            <FootBadge>CLSP 01/2026</FootBadge>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider opacity-60 mb-3">{t.footer.contact}</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li>{t.footer.address1}</li>
            <li>{t.footer.address2}</li>
            <li><a className="hover:text-primary" href={`tel:${HOTLINES[0].tel}`}>{HOTLINES[0].num}</a></li>
            <li><a className="hover:text-primary" href={`tel:${HOTLINES[1].tel}`}>{HOTLINES[1].num}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider opacity-60 mb-3">{t.footer.follow}</div>
          <ul className="space-y-2 text-sm">
            <li><a target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-2" href="https://www.facebook.com/tiembanhthanh"><FbIcon className="size-4" /> tiệm bánh THANH</a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-2" href="https://www.tiktok.com/@tiem_banh_thanh"><TtIcon className="size-4" /> @tiem_banh_thanh</a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="hover:text-primary" href={SHOPEEFOOD_URL}>🛵 ShopeeFood</a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="hover:text-primary" href={GRABFOOD_URL}>🛵 GrabFood</a></li>
          </ul>
          <div className="mt-4"><LangSwitcher lang={lang} /></div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs opacity-60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          <span>{t.footer.slogan}</span>
        </div>
      </div>
    </footer>
  );
}

function FootBadge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 rounded-full border border-background/20 px-3 py-1 text-[11px] font-semibold opacity-90"><ShieldIcon className="size-3" />{children}</span>;
}

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

/* ---------- Icons ---------- */
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
