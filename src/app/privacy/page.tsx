import type { Metadata } from "next";
import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { RetroCard } from "~/components/ui/retro-card";
import { privacyContent } from "~/data/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HuffCards privacy policy explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="text-heading-xl mb-2 text-theme-text">Privacy Policy</h1>
      <p className="mb-8 font-body text-xs text-theme-text-muted">
        Last updated: {privacyContent.lastUpdated}
      </p>

      <RetroCard className="p-8">
        <div className="space-y-6">
          {privacyContent.sections.map((section, i) => (
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
