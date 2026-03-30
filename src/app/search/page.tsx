import type { Metadata } from "next";
import { searchProducts } from "~/data";
import { ProductGrid } from "~/components/product/product-grid";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const results = q ? searchProducts(q) : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Search" }]} />
      <h1 className="text-heading-xl mb-2 text-theme-text">Search Results</h1>
      {q && (
        <p className="mb-8 font-body text-sm text-theme-text-secondary">
          {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{q}&quot;
        </p>
      )}
      {!q && (
        <p className="mb-8 font-body text-sm text-theme-text-secondary">
          Enter a search term to find products. Try &quot;booster box&quot; or &quot;elite trainer&quot;.
        </p>
      )}
      <ProductGrid products={results} />
    </div>
  );
}
