import { getFeaturedProducts } from "~/data";
import { ProductGrid } from "~/components/product/product-grid";
import { PixelDivider } from "~/components/ui/pixel-divider";

export function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <PixelDivider />
      <h2 className="text-heading-lg mb-2 text-center text-theme-text">
        Staff Picks
      </h2>
      <p className="mb-8 text-center font-body text-sm text-theme-text-secondary">
        Hand-picked favourites from the HuffCards team
      </p>
      <ProductGrid products={products} />
    </section>
  );
}
