import type { CategoryMeta } from "./types";

export const categories: CategoryMeta[] = [
  {
    slug: "pokemon",
    name: "Pokemon TCG",
    shortName: "Pokemon",
    description:
      "Gotta catch 'em all! Browse our collection of Pokemon Trading Card Game products including booster boxes, elite trainer boxes, and special collections.",
    color: "#ffcb05",
    secondaryColor: "#2a75bb",
    productCount: 0, // computed at runtime
  },
  {
    slug: "yugioh",
    name: "Yu-Gi-Oh! TCG",
    shortName: "Yu-Gi-Oh!",
    description:
      "It's time to duel! Discover our range of Yu-Gi-Oh! Trading Card Game products from booster boxes and tins to structure decks and collector sets.",
    color: "#8b5cf6",
    secondaryColor: "#d4a017",
    productCount: 0,
  },
  {
    slug: "magic",
    name: "Magic: The Gathering",
    shortName: "Magic",
    description:
      "Planeswalkers, assemble! Explore our Magic: The Gathering products including draft boosters, collector boosters, commander decks, and bundles.",
    color: "#228b22",
    secondaryColor: "#8b4513",
    productCount: 0,
  },
];
