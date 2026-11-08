// ── Mobashra | Bridal Makeup Artist, Kolkata ──────────────────────────────
// VERIFIED facts (Instagram @makeup_by_mobashra, checked 2026-11-08):
//  • Services: Bridal, Engagement, Party, Haldi & Mehendi makeup + hairstyling
//  • HD + waterproof, long-lasting makeup; in-studio and at home
//  • In business since 2019; based in Kolkata; books via DM & WhatsApp
//  • Bridal makeup from Rs 5,000 — the ONLY price verified. Every other
//    price on this site is labelled "Sample price".
//  • 17,608 followers, 2,104 posts (8 Nov 2026)
//  • YouTube: youtube.com/@makeupbymobashra5051 (bio link, verified)
// Photos are Unsplash stand-ins (all curl-verified HTTP 200, 2026-11-08).
// Her own photos replace them at launch.

const U = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

export const IG_HANDLE = "@makeup_by_mobashra";
export const IG_URL = "https://www.instagram.com/makeup_by_mobashra/";
export const YOUTUBE_URL = "https://youtube.com/@makeupbymobashra5051";
export const PHONE_DISPLAY = "+91 87778 32350";
export const PHONE_TEL = "+918777832350";
export const WA_BASE = "https://wa.me/918777832350";
export const waLink = (msg: string) =>
  `${WA_BASE}?text=${encodeURIComponent(msg)}`;

export const HERO_IMG = U("photo-1487412947147-5cebf100ffc2");
export const ABOUT_IMG = U("photo-1544005313-94ddf0286df2");
export const PACKAGES_IMG = U("photo-1534528741775-53994a69daeb");

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  text: string;
  includes: string[];
  img: string;
  priceNote: string;
  samplePrice: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "bridal",
    name: "Bridal Makeup",
    tagline: "Your big day, flawless all day",
    text: "HD, waterproof, long-lasting bridal makeup that stays picture-perfect from the pheras to the last photo — with hairstyling to match your outfit and jewellery.",
    includes: ["HD + waterproof bridal makeup", "Bridal hairstyling", "Saree / lehenga draping help", "Touch-up guidance for the day"],
    img: U("photo-1524504388940-b1c1722653e1"),
    priceNote: "from ₹5,000",
    samplePrice: false,
  },
  {
    slug: "engagement",
    name: "Engagement Makeup",
    tagline: "Glam for the ring ceremony",
    text: "A soft-glam engagement look made for the ring, the photos and the family — elegant, fresh and camera-ready, with hairstyling included.",
    includes: ["Soft-glam engagement look", "Hairstyling", "Long-lasting, photo-friendly finish"],
    img: U("photo-1531746020798-e6953c6e8e04"),
    priceNote: "from ₹3,499",
    samplePrice: true,
  },
  {
    slug: "party",
    name: "Party Makeup",
    tagline: "Evening glam, done right",
    text: "Party and occasion makeup with hairstyling — for birthdays, receptions, sangeet nights and every evening you want to stand out.",
    includes: ["Party / occasion glam look", "Hairstyling", "HD finish that lasts the evening"],
    img: U("photo-1494790108377-be9c29b29330"),
    priceNote: "from ₹2,499",
    samplePrice: true,
  },
  {
    slug: "haldi-mehendi",
    name: "Haldi & Mehendi Makeup",
    tagline: "Fresh, dewy, celebration-ready",
    text: "Light, fresh looks for haldi and mehendi — dewy skin, soft colour and hairstyles with braids, curls and floral details that suit the morning functions.",
    includes: ["Dewy haldi / mehendi look", "Floral-detail hairstyles", "Skin-first, comfortable wear"],
    img: U("photo-1594744803329-e58b31de8bf5"),
    priceNote: "from ₹2,999",
    samplePrice: true,
  },
  {
    slug: "hairstyling",
    name: "Hairstyling",
    tagline: "Braids, curls & floral finishes",
    text: "Bridal hairstyles made with care — romantic curls, braids and delicate floral details, styled to complete your look for any occasion.",
    includes: ["Bridal hairdos", "Braids, curls & floral styling", "Hairstyling with any makeup booking"],
    img: U("photo-1488426862026-3ee34a7d66df"),
    priceNote: "from ₹1,499",
    samplePrice: true,
  },
];

export type GalleryItem = {
  cat: "Bridal" | "Engagement" | "Party" | "Haldi & Mehendi" | "Hairstyling";
  title: string;
  img: string;
};

export const GALLERY: GalleryItem[] = [
  { cat: "Bridal", title: "Bridal glow", img: U("photo-1610030469983-98e550d6193c") },
  { cat: "Bridal", title: "Wedding day", img: U("photo-1524504388940-b1c1722653e1") },
  { cat: "Engagement", title: "Engagement glam", img: U("photo-1531746020798-e6953c6e8e04") },
  { cat: "Engagement", title: "Ring-ceremony glow", img: U("photo-1554151228-14d9def656e4") },
  { cat: "Party", title: "Party glam", img: U("photo-1494790108377-be9c29b29330") },
  { cat: "Party", title: "Evening glam", img: U("photo-1529626455594-4ff0802cfb7e") },
  { cat: "Haldi & Mehendi", title: "Mehendi details", img: U("photo-1594744803329-e58b31de8bf5") },
  { cat: "Haldi & Mehendi", title: "Haldi glow", img: U("photo-1519699047748-de8e457a634e") },
  { cat: "Hairstyling", title: "Bridal hairstyling", img: U("photo-1488426862026-3ee34a7d66df") },
  { cat: "Hairstyling", title: "Hair & finish", img: U("photo-1492106087820-71f1a00d2b11") },
];

export const GALLERY_CATS = ["All", "Bridal", "Engagement", "Party", "Haldi & Mehendi", "Hairstyling"] as const;

export type Package = {
  name: string;
  best: string;
  priceNote: string;
  samplePrice: boolean;
  points: string[];
};

export const PACKAGES: Package[] = [
  {
    name: "Bridal Signature",
    best: "The full wedding-day look",
    priceNote: "from ₹5,000",
    samplePrice: false,
    points: [
      "HD + waterproof bridal makeup",
      "Bridal hairstyling",
      "Saree / lehenga draping help",
      "In-studio or at your home",
    ],
  },
  {
    name: "Engagement Glow",
    best: "For the ring ceremony",
    priceNote: "from ₹3,499",
    samplePrice: true,
    points: [
      "Soft-glam engagement makeup",
      "Hairstyling included",
      "Photo-friendly, long-lasting finish",
    ],
  },
  {
    name: "Party Glam",
    best: "Evenings & occasions",
    priceNote: "from ₹2,499",
    samplePrice: true,
    points: [
      "Party / occasion glam look",
      "Hairstyling included",
      "HD finish for the evening",
    ],
  },
  {
    name: "Haldi & Mehendi",
    best: "Morning functions",
    priceNote: "from ₹2,999",
    samplePrice: true,
    points: [
      "Dewy haldi / mehendi look",
      "Floral-detail hairstyles",
      "Light, comfortable wear",
    ],
  },
];
