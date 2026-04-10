import type { Metadata } from "next";
import { CategoryListing } from "../_components/category-listing";

export const metadata: Metadata = {
  title: "Yu-Gi-Oh! TCG",
  description:
    "Shop Yu-Gi-Oh! Trading Card Game products. Booster boxes, tins, structure decks, and collector sets at great prices.",
};

export default function YugiohPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <CategoryListing slug="yugioh" searchParams={searchParams} />;
}
