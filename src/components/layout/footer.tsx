import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from "~/lib/constants";
import { PixelCoin } from "~/components/ui/pixel-coin";
import { PixelDivider } from "~/components/ui/pixel-divider";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--theme-border-primary)] bg-theme-footer text-theme-footer-text">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="retro-only"><PixelCoin size={20} /></span>
              <span className="text-heading-sm text-theme-footer-heading">{SITE_NAME}</span>
            </div>
            <p className="font-body text-xs text-theme-text-muted">
              {SITE_TAGLINE}
            </p>
            <p className="mt-3 font-body text-xs text-theme-text-secondary">
              42 Card Lane, Bristol, BS1 4QA
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-heading-xs mb-3 text-theme-footer-heading">Shop</h3>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-theme-text-muted hover:text-theme-accent transition-theme"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-heading-xs mb-3 text-theme-footer-heading">Info</h3>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-theme-text-muted hover:text-theme-accent transition-theme"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-heading-xs mb-3 text-theme-footer-heading">Legal</h3>
            <ul className="space-y-1.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-theme-text-muted hover:text-theme-accent transition-theme"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="retro-only"><PixelDivider className="my-8" /></div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-body text-xs text-theme-text-secondary">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-body text-xs text-theme-footer-muted">
            Pokemon, Yu-Gi-Oh!, and Magic: The Gathering are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
