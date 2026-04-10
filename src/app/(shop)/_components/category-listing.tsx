/* eslint-disable @next/next/no-img-element */
import {
  getProductsByCategory,
  getCategoryBySlug,
  allProducts,
} from "~/data";
import type { Category, ProductType } from "~/data/types";
import { ProductGrid } from "~/components/product/product-grid";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { FilterSidebar, FilterTopBar } from "./category-filters";

const categoryLogos: Record<Category, string> = {
  pokemon: "/logos/pokemon.svg",
  yugioh: "/logos/yugioh.png",
  magic: "/logos/magic.png",
};

const taglines: Record<Category, string> = {
  pokemon: "Booster boxes, ETBs, collection boxes and more.",
  yugioh: "Booster boxes, tins, structure decks and collector sets.",
  magic: "Draft boosters, collector boosters, bundles and commander decks.",
};

type SortValue = "price-asc" | "price-desc" | "name" | "newest" | undefined;

export async function CategoryListing({
  slug,
  searchParams,
}: {
  slug: Category;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const sort = (params.sort as string) || undefined;
  const typesParam = (params.types as string) || "";
  const productTypes = typesParam
    ? (typesParam.split(",").filter(Boolean) as ProductType[])
    : undefined;
  const minPrice = params.minPrice
    ? Number(params.minPrice) * 100
    : undefined;
  const maxPrice = params.maxPrice
    ? Number(params.maxPrice) * 100
    : undefined;
  const inStockOnly = params.inStock === "1";

  const category = getCategoryBySlug(slug)!;
  const { products } = getProductsByCategory(slug, {
    sort: sort as SortValue,
    productTypes,
    minPrice,
    maxPrice,
    inStockOnly,
  });

  const totalInCategory = allProducts.filter((p) => p.category === slug).length;

  return (
    <div>
      {/* Category hero strip */}
      <section
        className="parchment-grain"
        style={{
          borderBottom: "1px solid var(--theme-border-primary)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <Breadcrumbs items={[{ label: category.shortName }]} />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="flex items-center gap-5">
              <div
                className="flex h-20 w-32 shrink-0 items-center justify-center rounded-xl p-3"
                style={{
                  background: "var(--theme-bg-surface)",
                  border: "1px solid var(--theme-border-primary)",
                  boxShadow: "0 4px 16px -6px rgba(30, 18, 8, 0.08)",
                }}
              >
                <img
                  src={categoryLogos[slug]}
                  alt={category.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <p
                  className="eyebrow mb-1"
                  style={{ color: category.color }}
                >
                  {totalInCategory} products available
                </p>
                <h1 className="text-heading-xl md:text-heading-2xl text-theme-text">
                  {category.name}
                </h1>
                <p className="mt-2 max-w-xl text-sm text-theme-text-secondary md:text-base">
                  {taglines[slug]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main listing */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:gap-12">
          <FilterSidebar />
          <div className="flex-1 min-w-0">
            <FilterTopBar
              totalProducts={totalInCategory}
              resultCount={products.length}
            />
            {products.length === 0 ? (
              <div
                className="flex flex-col items-center gap-3 p-16 text-center"
                style={{
                  background: "var(--theme-bg-surface)",
                  border: "1px dashed var(--theme-border-primary)",
                  borderRadius: "var(--theme-radius-lg)",
                }}
              >
                <h3 className="font-heading text-lg font-semibold text-theme-text">
                  No products match your filters
                </h3>
                <p className="text-sm text-theme-text-secondary">
                  Try loosening the filters or clearing them all.
                </p>
              </div>
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
