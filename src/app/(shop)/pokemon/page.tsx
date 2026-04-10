import type { Metadata } from "next";
import { CategoryListing } from "../_components/category-listing";

export const metadata: Metadata = {
  title: "Pokemon TCG",
  description:
    "Browse our collection of Pokemon Trading Card Game products. Booster boxes, elite trainer boxes, booster packs, and more at great prices.",
};

export default function PokemonPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <CategoryListing slug="pokemon" searchParams={searchParams} />;
}
