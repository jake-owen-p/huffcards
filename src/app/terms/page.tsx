import type { Metadata } from "next";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { RetroCard } from "~/components/ui/retro-card";
import { termsContent } from "~/data/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "HuffCards terms and conditions governing the use of our website and purchase of products.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
      <h1 className="text-heading-xl mb-2 text-theme-text">Terms & Conditions</h1>
      <p className="mb-8 font-body text-xs text-theme-text-muted">
        Last updated: {termsContent.lastUpdated}
      </p>

      <RetroCard className="p-8">
        <div className="space-y-6">
          {termsContent.sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-2 font-body text-sm font-bold text-theme-text">
                {section.title}
              </h2>
              <p className="font-body text-sm leading-relaxed text-theme-text-secondary">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </RetroCard>
    </div>
  );
}
