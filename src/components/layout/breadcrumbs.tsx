import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 font-body text-xs text-theme-text-secondary">
        <li>
          <Link href="/" className="hover:text-theme-accent transition-theme">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden="true">{" > "}</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-theme-accent transition-theme">
                {item.label}
              </Link>
            ) : (
              <span className="text-theme-text">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
