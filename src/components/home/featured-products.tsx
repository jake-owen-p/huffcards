import { getFeaturedProducts } from "~/data";
import { ProductGrid } from "~/components/product/product-grid";
import { PixelDivider } from "~/components/ui/pixel-divider";

export function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <PixelDivider />
      <div className="vault-only-block"><hr className="vault-divider" /></div>
      <h2 className="text-heading-lg mb-2 text-center text-theme-text">
        <span className="vault-hide">Staff Picks</span>
        <span className="vault-only">The Collection</span>
      </h2>
      <p className="mb-8 text-center font-body text-sm text-theme-text-secondary vault-hide">
        Hand-picked favourites from the HuffCards team
      </p>
      <p className="mb-8 text-center font-body text-sm text-theme-text-secondary vault-only-block">
        Curated for the discerning collector
      </p>
      <ProductGrid products={products} />
    </section>
  );
}
