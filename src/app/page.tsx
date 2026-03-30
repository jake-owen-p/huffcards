import { HeroSection } from "~/components/home/hero-section";
import { CategoryCards } from "~/components/home/category-cards";
import { FeaturedProducts } from "~/components/home/featured-products";
import { CommunitySection } from "~/components/home/community-section";
import { JsonLd } from "~/components/seo/json-ld";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "~/lib/constants";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <HeroSection />
      <CategoryCards />
      <FeaturedProducts />
      <CommunitySection />
    </>
  );
}
