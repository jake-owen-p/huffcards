"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "~/lib/cn";

const PRODUCT_TYPE_OPTIONS = [
  { value: "booster-box", label: "Booster Box" },
  { value: "elite-trainer-box", label: "Elite Trainer Box" },
  { value: "booster-pack", label: "Booster Pack" },
  { value: "collection-box", label: "Collection Box" },
  { value: "starter-deck", label: "Starter Deck" },
  { value: "tin", label: "Tin" },
  { value: "bundle", label: "Bundle" },
  { value: "accessory", label: "Accessory" },
];

const SORT_OPTIONS = [
  { value: "", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name A–Z" },
  { value: "newest", label: "Newest first" },
];

function useFilterState() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort") ?? "";
  const types = (searchParams.get("types") ?? "").split(",").filter(Boolean);
  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const inStock = searchParams.get("inStock") === "1";

  const update = (patch: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(patch).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const toggleType = (type: string) => {
    const next = types.includes(type)
      ? types.filter((t) => t !== type)
      : [...types, type];
    update({ types: next.length > 0 ? next.join(",") : null });
  };

  const clearAll = () => router.push(pathname);

  const activeCount =
    types.length + (minPrice ? 1 : 0) + (maxPrice ? 1 : 0) + (inStock ? 1 : 0);

  return {
    sort,
    types,
    minPrice,
    maxPrice,
    inStock,
    update,
    toggleType,
    clearAll,
    activeCount,
  };
}

function FiltersPanel({
  state,
}: {
  state: ReturnType<typeof useFilterState>;
}) {
  const { types, minPrice, maxPrice, inStock, update, toggleType, clearAll, activeCount } = state;
  const [minDraft, setMinDraft] = useState(minPrice);
  const [maxDraft, setMaxDraft] = useState(maxPrice);

  useEffect(() => setMinDraft(minPrice), [minPrice]);
  useEffect(() => setMaxDraft(maxPrice), [maxPrice]);

  const applyPrices = () => {
    update({
      minPrice: minDraft || null,
      maxPrice: maxDraft || null,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-base font-semibold text-theme-text">
          Filters
        </h2>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-xs font-medium text-[var(--ember-primary)] hover:underline"
          >
            Clear all ({activeCount})
          </button>
        )}
      </div>

      {/* In stock toggle */}
      <label className="flex cursor-pointer items-center justify-between">
        <span className="text-sm font-medium text-theme-text">
          In stock only
        </span>
        <span
          className={cn(
            "relative h-5 w-9 rounded-full transition-colors",
            inStock ? "bg-[var(--ember-primary)]" : "bg-theme-border",
          )}
          role="switch"
          aria-checked={inStock}
        >
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) =>
              update({ inStock: e.target.checked ? "1" : null })
            }
            className="sr-only"
          />
          <span
            className={cn(
              "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform",
              inStock ? "translate-x-4" : "translate-x-0.5",
            )}
          />
        </span>
      </label>

      {/* Price range */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-text-muted">
          Price (£)
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            placeholder="Min"
            value={minDraft}
            onChange={(e) => setMinDraft(e.target.value)}
            onBlur={applyPrices}
            onKeyDown={(e) => e.key === "Enter" && applyPrices()}
            className="w-full rounded-md border border-theme bg-theme-surface px-3 py-2 text-sm text-theme-text focus:border-[var(--ember-primary)] focus:outline-none"
          />
          <span className="text-theme-text-muted">—</span>
          <input
            type="number"
            min={0}
            placeholder="Max"
            value={maxDraft}
            onChange={(e) => setMaxDraft(e.target.value)}
            onBlur={applyPrices}
            onKeyDown={(e) => e.key === "Enter" && applyPrices()}
            className="w-full rounded-md border border-theme bg-theme-surface px-3 py-2 text-sm text-theme-text focus:border-[var(--ember-primary)] focus:outline-none"
          />
        </div>
      </div>

      {/* Product type */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-text-muted">
          Product type
        </h3>
        <ul className="flex flex-col gap-2">
          {PRODUCT_TYPE_OPTIONS.map((opt) => {
            const checked = types.includes(opt.value);
            return (
              <li key={opt.value}>
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-theme-text-secondary hover:text-theme-text">
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded border transition-colors",
                      checked
                        ? "border-[var(--ember-primary)] bg-[var(--ember-primary)] text-white"
                        : "border-theme-border bg-theme-surface",
                    )}
                  >
                    {checked && (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5L5 9L9.5 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleType(opt.value)}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function FilterSidebar() {
  const state = useFilterState();
  return (
    <aside className="hidden md:block md:w-60 md:shrink-0">
      <div className="sticky top-28">
        <FiltersPanel state={state} />
      </div>
    </aside>
  );
}

export function FilterTopBar({
  totalProducts,
  resultCount,
}: {
  totalProducts: number;
  resultCount: number;
}) {
  const state = useFilterState();
  const { sort, update, activeCount } = state;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-theme-text-secondary">
          <span className="font-semibold text-theme-text">{resultCount}</span>{" "}
          {resultCount === 1 ? "product" : "products"}
          {activeCount > 0 && (
            <span className="text-theme-text-muted"> of {totalProducts}</span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 rounded-full border border-theme px-4 py-2 text-sm font-medium text-theme-text md:hidden"
          >
            Filters
            {activeCount > 0 && (
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: "var(--ember-primary)" }}
              >
                {activeCount}
              </span>
            )}
          </button>
          <select
            value={sort}
            onChange={(e) => update({ sort: e.target.value || null })}
            className="rounded-full border border-theme bg-theme-surface px-4 py-2 text-sm font-medium text-theme-text focus:border-[var(--ember-primary)] focus:outline-none"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-theme-surface p-6"
            style={{
              borderTopLeftRadius: "var(--theme-radius-lg)",
              borderTopRightRadius: "var(--theme-radius-lg)",
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-theme-text">
                Filters
              </h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-theme-text-muted"
                aria-label="Close filters"
              >
                ×
              </button>
            </div>
            <FiltersPanel state={state} />
            <button
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full rounded-full py-3 text-sm font-semibold text-white"
              style={{ background: "var(--ink)" }}
            >
              Show {resultCount} products
            </button>
          </div>
        </div>
      )}
    </>
  );
}
