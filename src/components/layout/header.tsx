"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { NAV_ITEMS, type NavItem } from "~/lib/constants";
import { useCart } from "~/components/cart/cart-provider";
import { SearchIcon, CartIcon, MenuIcon, CloseIcon } from "~/components/ui/icons";
import { HuffcardsMark } from "~/components/ui/brand-icons";
import { cn } from "~/lib/cn";

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pathname = usePathname();

  const enter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const leave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 font-body text-base font-semibold text-theme-text hover:text-theme-accent transition-theme"
      >
        {item.label}
        <span className="text-xs text-theme-text-muted">▾</span>
      </Link>

      {open && (
        <div className="nav-dropdown absolute top-full left-0 z-50 mt-1 w-64 border-theme bg-theme-surface shadow-theme">
          <ul className="py-1">
            {item.children!.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="group flex flex-col px-4 py-2 transition-theme hover:bg-theme-surface-hover"
                >
                  <span className="font-body text-sm font-bold text-theme-text group-hover:text-theme-accent">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="font-body text-[11px] text-theme-text-muted">
                      {child.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

function MobileDropdown({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between py-1 font-body text-sm text-theme-text hover:text-theme-accent transition-theme"
      >
        <span>{item.label}</span>
        <span className="text-theme-text-muted">{open ? "\u2212" : "+"}</span>
      </button>
      <ul
        className={cn(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-96 pb-2" : "max-h-0",
        )}
      >
        {item.children!.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={onNavigate}
              className="block py-1 pl-6 font-body text-xs text-theme-text-secondary hover:text-theme-accent transition-theme"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Header() {
  const { itemCount } = useCart();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setMobileOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-40 bg-theme-surface/95 backdrop-blur-sm"
      style={{ borderBottom: "1px solid var(--theme-border-primary)" }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-theme hover:opacity-90"
          >
            <HuffcardsMark size={34} />
            <span className="font-heading text-2xl leading-none text-theme-text">
              HuffCards<span style={{ color: "var(--ember-primary)" }}>.</span>
            </span>
          </Link>

          {/* Search - desktop */}
          <form onSubmit={handleSearch} className="hidden flex-1 px-8 md:block">
            <div className="relative mx-auto max-w-md">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search cards..."
                className="header-search-input w-full border-theme bg-theme-input px-4 py-2 pr-10 font-body text-sm text-theme-text placeholder:text-theme-text-muted focus:outline-none focus:ring-2 focus:ring-theme-ring transition-theme"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer font-body text-theme-text-secondary hover:text-theme-accent transition-theme"
              >
                <SearchIcon size={18} />
              </button>
            </div>
          </form>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden font-body text-sm text-theme-text hover:text-theme-accent transition-theme md:block"
            >
              Login
            </Link>
            <Link
              href="/cart"
              className="relative font-body text-sm font-bold text-theme-text hover:text-theme-accent transition-theme"
            >
              <div className="relative">
                <CartIcon size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--theme-accent-primary)] text-[10px] font-bold text-[var(--theme-accent-text-on-primary)]">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cursor-pointer font-body text-lg text-theme-text md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {/* Navigation - desktop */}
        <nav className="hidden border-t border-theme-border-secondary md:block">
          <ul className="flex items-center justify-center gap-10 py-3">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base font-semibold text-theme-text hover:text-theme-accent transition-theme"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-theme-border-secondary bg-theme-surface-alt md:hidden">
          <form onSubmit={handleSearch} className="p-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cards..."
              className="header-search-input w-full border-theme bg-theme-input px-4 py-2 font-body text-sm text-theme-text placeholder:text-theme-text-muted focus:outline-none focus:ring-2 focus:ring-theme-ring"
            />
          </form>
          <nav className="px-4 pb-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <MobileDropdown
                    key={item.href}
                    item={item}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 font-body text-sm text-theme-text hover:text-theme-accent transition-theme"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 font-body text-sm text-theme-text hover:text-theme-accent transition-theme"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
