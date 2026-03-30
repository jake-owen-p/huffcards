import type { Metadata } from "next";
import { getProductsByCategory, getCategoryBySlug } from "~/data";
import type { ProductType } from "~/data/types";
import { ProductGrid } from "~/components/product/product-grid";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { CategoryPageFilters } from "../_components/category-filters";


export const metadata: Metadata = {
  title: "Pokemon TCG",
  description:
    "Browse our collection of Pokemon Trading Card Game products. Booster boxes, elite trainer boxes, booster packs, and more at great prices.",
};

export default async function PokemonPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const sort = (params.sort as string) ?? undefined;
  const type = (params.type as string) ?? undefined;
  const category = getCategoryBySlug("pokemon")!;
  const { products, total } = getProductsByCategory("pokemon", {
    sort: sort as "price-asc" | "price-desc" | "name" | "newest" | undefined,
    productType: type as ProductType | undefined,
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Pokemon" }]} />
      <div className="mb-8 flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/pokemon.svg" alt="Pokemon TCG" className="h-10" />
        <div>
          <h1 className="text-heading-xl" style={{ color: category.color }}>
            Pokemon TCG
          </h1>
          <p className="font-body text-sm text-theme-text-secondary">
            {total} products available
          </p>
        </div>
      </div>
      <CategoryPageFilters currentSort={sort} currentType={type} />
      <ProductGrid products={products} />
    </div>
  );
}
