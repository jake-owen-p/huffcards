import type { Metadata } from "next";
import { CategoryListing } from "../_components/category-listing";

export const metadata: Metadata = {
  title: "Magic: The Gathering",
  description:
    "Explore Magic: The Gathering products. Draft boosters, collector boosters, commander decks, bundles, and more.",
};

export default function MagicPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <CategoryListing slug="magic" searchParams={searchParams} />;
}
