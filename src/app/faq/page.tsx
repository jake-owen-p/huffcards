import type { Metadata } from "next";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";

import { JsonLd } from "~/components/seo/json-ld";
import { faqItems } from "~/data/faq-data";
import { FaqAccordion } from "./_components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about HuffCards. Shipping, returns, payment methods, and more.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <h1 className="text-heading-xl mb-2 text-theme-text">
        Frequently Asked Questions
      </h1>
      <p className="mb-8 font-body text-sm text-theme-text-secondary">
        Can&apos;t find your answer? Contact us at support@huffcards.co.uk
      </p>

      <div className="space-y-3">
        {faqItems.map((item, i) => (
          <FaqAccordion key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
