import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts, getProductBySlug, getRelatedProducts, getCategoryBySlug } from "~/data";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { ProductImage } from "~/components/product/product-image";
import { PriceDisplay } from "~/components/product/price-display";
import { StockIndicator } from "~/components/product/stock-indicator";
import { ProductTypeBadge } from "~/components/product/product-type-badge";
import { RelatedProducts } from "~/components/product/related-products";
import { AddToCartButton } from "~/components/cart/add-to-cart-button";
import { RetroCard } from "~/components/ui/retro-card";
import { JsonLd } from "~/components/seo/json-ld";
import { SITE_URL, CURRENCY } from "~/lib/constants";


export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

const categoryLabels: Record<string, { label: string; href: string }> = {
  pokemon: { label: "Pokemon", href: "/pokemon" },
  yugioh: { label: "Yu-Gi-Oh!", href: "/yugioh" },
  magic: { label: "Magic: The Gathering", href: "/magic" },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.id, 4);
  const cat = categoryLabels[product.category]!;
  const categoryMeta = getCategoryBySlug(product.category);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          sku: product.id,
          brand: { "@type": "Brand", name: categoryMeta?.name ?? product.category },
          offers: {
            "@type": "Offer",
            priceCurrency: CURRENCY,
            price: (product.price / 100).toFixed(2),
            availability: product.inStock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            url: `${SITE_URL}/products/${product.slug}`,
          },
        }}
      />

      <Breadcrumbs
        items={[
          { label: cat.label, href: cat.href },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image */}
        <RetroCard className="flex items-center justify-center p-8">
          <ProductImage
            image={product.image}
            name={product.name}
            size="lg"
          />
        </RetroCard>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <ProductTypeBadge productType={product.productType} />
            {product.isNew && (
              <span className="text-heading-xs bg-theme-accent px-2 py-1 text-theme-text">
                NEW
              </span>
            )}
          </div>

          <h1 className="text-heading-lg text-theme-text">{product.name}</h1>

          <p className="font-body text-xs text-theme-text-secondary">
            Set: {product.setName}
          </p>

          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            size="lg"
          />

          <StockIndicator
            inStock={product.inStock}
            stockCount={product.stockCount}
          />

          <p className="font-body text-sm leading-relaxed text-theme-text">
            {product.description}
          </p>

          <div className="mt-4">
            <AddToCartButton product={product} />
          </div>

          <p className="mt-2 font-body text-xs text-theme-text-muted">
            Free UK delivery on orders over &pound;50
          </p>
        </div>
      </div>

      {/* Long description */}
      <RetroCard className="mt-8 p-6">
        <h2 className="text-heading-sm mb-4 text-theme-text">Product Details</h2>
        <p className="font-body text-sm leading-relaxed text-theme-text-secondary">
          {product.longDescription}
        </p>
        <div className="mt-4 border-t border-theme-border-secondary pt-4">
          <dl className="grid grid-cols-2 gap-2 font-body text-xs">
            <dt className="text-theme-text-muted">Release Date</dt>
            <dd className="text-theme-text">{new Date(product.releaseDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</dd>
            <dt className="text-theme-text-muted">Category</dt>
            <dd className="text-theme-text">{categoryMeta?.name}</dd>
            <dt className="text-theme-text-muted">SKU</dt>
            <dd className="text-theme-text">{product.id.toUpperCase()}</dd>
          </dl>
        </div>
      </RetroCard>

      <RelatedProducts products={related} />
    </div>
  );
}
