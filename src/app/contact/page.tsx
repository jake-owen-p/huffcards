"use client";

import { Breadcrumbs } from "~/components/layout/breadcrumbs";
import { RetroCard } from "~/components/ui/retro-card";
import { RetroButton } from "~/components/ui/retro-button";
import { RetroInput } from "~/components/ui/retro-input";
import { RetroSelect } from "~/components/ui/retro-select";
import { useToast } from "~/components/ui/toast";

export default function ContactPage() {
  const { addToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Thanks for reaching out! This is a demo store.", "info");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <h1 className="text-heading-xl mb-8 text-theme-text">Get in Touch</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <RetroCard className="p-6">
          <h2 className="text-heading-sm mb-4 text-theme-text">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block font-body text-xs text-theme-text-secondary">
                Name
              </label>
              <RetroInput type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block font-body text-xs text-theme-text-secondary">
                Email
              </label>
              <RetroInput type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label className="mb-1 block font-body text-xs text-theme-text-secondary">
                Subject
              </label>
              <RetroSelect>
                <option value="">Select a topic...</option>
                <option value="order">Order Enquiry</option>
                <option value="product">Product Question</option>
                <option value="returns">Returns & Refunds</option>
                <option value="wholesale">Wholesale</option>
                <option value="other">Other</option>
              </RetroSelect>
            </div>
            <div>
              <label className="mb-1 block font-body text-xs text-theme-text-secondary">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="w-full border-theme bg-theme-surface px-3 py-2 font-body text-sm text-theme-text placeholder:text-theme-text-secondary focus:bg-[var(--theme-bg-input-focus)] focus:outline-none focus:ring-2 focus:ring-theme-ring transition-theme"
              />
            </div>
            <RetroButton type="submit" variant="primary" className="w-full">
              Send Message
            </RetroButton>
          </form>
        </RetroCard>

        <div className="space-y-6">
          <RetroCard className="p-6">
            <h2 className="text-heading-sm mb-4 text-theme-text">Contact Info</h2>
            <dl className="space-y-3 font-body text-sm">
              <div>
                <dt className="text-xs text-theme-text-muted">Email</dt>
                <dd className="text-theme-text">support@huffcards.co.uk</dd>
              </div>
              <div>
                <dt className="text-xs text-theme-text-muted">Phone</dt>
                <dd className="text-theme-text">0117 496 0042</dd>
              </div>
              <div>
                <dt className="text-xs text-theme-text-muted">Address</dt>
                <dd className="text-theme-text">
                  42 Card Lane<br />
                  Bristol, BS1 4QA<br />
                  United Kingdom
                </dd>
              </div>
            </dl>
          </RetroCard>

          <RetroCard className="p-6">
            <h2 className="text-heading-sm mb-4 text-theme-text">Hours</h2>
            <dl className="space-y-1 font-body text-sm">
              <div className="flex justify-between">
                <dt className="text-theme-text-muted">Mon - Fri</dt>
                <dd className="text-theme-text">9:00 - 18:00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-theme-text-muted">Saturday</dt>
                <dd className="text-theme-text">10:00 - 16:00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-theme-text-muted">Sunday</dt>
                <dd className="text-theme-text">Closed</dd>
              </div>
            </dl>
          </RetroCard>

          <RetroCard className="p-6">
            <h2 className="text-heading-sm mb-3 text-theme-text">Response Times</h2>
            <p className="font-body text-xs text-theme-text-secondary">
              We aim to respond to all enquiries within 24 hours during
              business days. For urgent order issues, please include your
              order number in the subject line.
            </p>
          </RetroCard>
        </div>
      </div>
    </div>
  );
}
