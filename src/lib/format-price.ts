import { CURRENCY_SYMBOL } from "./constants";

export function formatPrice(pence: number): string {
  const pounds = (pence / 100).toFixed(2);
  return `${CURRENCY_SYMBOL}${pounds}`;
}
