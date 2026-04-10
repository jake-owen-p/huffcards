import Link from "next/link";
import { getFeaturedProducts } from "~/data";
import { ProductGrid } from "~/components/product/product-grid";

export function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section
      className="py-20"
      style={{ background: "var(--theme-bg-surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Curated · This week</p>
            <h2 className="text-heading-xl md:text-heading-2xl text-theme-text">
              Staff picks
            </h2>
            <p className="mt-2 max-w-md text-sm text-theme-text-secondary md:text-base">
              Hand-picked by the team — the sets, boxes, and products we&apos;d
              open ourselves.
            </p>
          </div>
          <Link
            href="/search"
            className="hidden whitespace-nowrap text-sm font-medium text-theme-text-secondary hover:text-[var(--ember-primary)] md:inline-block"
          >
            View all →
          </Link>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
