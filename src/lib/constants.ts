export const SITE_NAME = "HuffCards";
export const SITE_TAGLINE = "Your Friendly Local Card Shop, Online";
export const SITE_DESCRIPTION =
  "HuffCards is your go-to online trading card shop for Pokemon, Yu-Gi-Oh!, and Magic: The Gathering. Booster boxes, elite trainer boxes, singles, and more at great prices.";
export const SITE_URL = "https://huffcards.co.uk";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Pokemon",
    href: "/pokemon",
    children: [
      { label: "All Pokemon", href: "/pokemon", description: "Browse everything" },
      { label: "Booster Boxes", href: "/pokemon?type=booster-box", description: "36-pack sealed boxes" },
      { label: "Booster Packs", href: "/pokemon?type=booster-pack", description: "Single packs & Japanese" },
      { label: "Elite Trainer Boxes", href: "/pokemon?type=elite-trainer-box", description: "ETBs with accessories" },
      { label: "Collection Boxes", href: "/pokemon?type=collection-box", description: "Premium collections" },
      { label: "Tins", href: "/pokemon?type=tin", description: "Collectible gift tins" },
      { label: "Starter Decks", href: "/pokemon?type=starter-deck", description: "Ready-to-play decks" },
      { label: "Accessories", href: "/pokemon?type=accessory", description: "Sleeves, boxes & mats" },
    ],
  },
  {
    label: "Yu-Gi-Oh!",
    href: "/yugioh",
    children: [
      { label: "All Yu-Gi-Oh!", href: "/yugioh", description: "Browse everything" },
      { label: "Booster Boxes", href: "/yugioh?type=booster-box", description: "24-pack sealed boxes" },
      { label: "Booster Packs", href: "/yugioh?type=booster-pack", description: "Single booster packs" },
      { label: "Structure Decks", href: "/yugioh?type=starter-deck", description: "Ready-to-play decks" },
      { label: "Tins", href: "/yugioh?type=tin", description: "Collector tins with mega packs" },
      { label: "Collection Boxes", href: "/yugioh?type=collection-box", description: "Legendary & special sets" },
      { label: "Bundles & Repacks", href: "/yugioh?type=bundle", description: "Value bundles" },
    ],
  },
  {
    label: "Magic",
    href: "/magic",
    children: [
      { label: "All Magic", href: "/magic", description: "Browse everything" },
      { label: "Booster Boxes", href: "/magic?type=booster-box", description: "Draft & collector boxes" },
      { label: "Booster Packs", href: "/magic?type=booster-pack", description: "Single booster packs" },
      { label: "Bundles", href: "/magic?type=bundle", description: "Fat packs & bundles" },
      { label: "Commander Decks", href: "/magic?type=starter-deck", description: "100-card commander decks" },
      { label: "Sealed Products", href: "/magic?type=collection-box", description: "Special editions & more" },
    ],
  },
  { label: "About", href: "/about" },
];

export const FOOTER_LINKS = {
  shop: [
    { label: "Pokemon", href: "/pokemon" },
    { label: "Yu-Gi-Oh!", href: "/yugioh" },
    { label: "Magic: The Gathering", href: "/magic" },
  ],
  info: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/huffcards",
  instagram: "https://instagram.com/huffcards",
  discord: "https://discord.gg/huffcards",
  youtube: "https://youtube.com/@huffcards",
} as const;

export const CURRENCY = "GBP";
export const CURRENCY_SYMBOL = "\u00a3";
export const FREE_SHIPPING_THRESHOLD = 5000; // £50 in pence
