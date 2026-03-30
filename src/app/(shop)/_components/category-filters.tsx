"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { RetroSelect } from "~/components/ui/retro-select";

export function CategoryPageFilters({
  currentSort,
  currentType,
}: {
  currentSort?: string;
  currentType?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <div className="w-48">
        <label className="mb-1 block font-body text-xs text-theme-text-secondary">
          Sort by
        </label>
        <RetroSelect
          value={currentSort ?? ""}
          onChange={(e) => updateParam("sort", e.target.value)}
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name A-Z</option>
          <option value="newest">Newest First</option>
        </RetroSelect>
      </div>
      <div className="w-48">
        <label className="mb-1 block font-body text-xs text-theme-text-secondary">
          Product Type
        </label>
        <RetroSelect
          value={currentType ?? ""}
          onChange={(e) => updateParam("type", e.target.value)}
        >
          <option value="">All Types</option>
          <option value="booster-box">Booster Box</option>
          <option value="elite-trainer-box">Elite Trainer Box</option>
          <option value="booster-pack">Booster Pack</option>
          <option value="collection-box">Collection Box</option>
          <option value="starter-deck">Starter Deck</option>
          <option value="tin">Tin</option>
          <option value="bundle">Bundle</option>
          <option value="accessory">Accessory</option>
        </RetroSelect>
      </div>
    </div>
  );
}
