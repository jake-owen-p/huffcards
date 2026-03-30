import { RetroBadge } from "~/components/ui/retro-badge";

export function StockIndicator({
  inStock,
  stockCount,
}: {
  inStock: boolean;
  stockCount: number;
}) {
  if (!inStock || stockCount === 0) {
    return <RetroBadge variant="error">Out of Stock</RetroBadge>;
  }
  if (stockCount <= 5) {
    return <RetroBadge variant="warning">Low Stock ({stockCount} left)</RetroBadge>;
  }
  return <RetroBadge variant="success">In Stock</RetroBadge>;
}
