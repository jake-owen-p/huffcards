export function PixelCoin({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="1" width="8" height="1" fill="#f39c12" />
      <rect x="3" y="2" width="1" height="1" fill="#f39c12" />
      <rect x="12" y="2" width="1" height="1" fill="#f39c12" />
      <rect x="2" y="3" width="1" height="1" fill="#f39c12" />
      <rect x="13" y="3" width="1" height="1" fill="#f39c12" />
      <rect x="2" y="4" width="12" height="8" fill="#f39c12" />
      <rect x="3" y="3" width="10" height="1" fill="#ffd700" />
      <rect x="4" y="2" width="8" height="1" fill="#ffd700" />
      <rect x="3" y="4" width="10" height="7" fill="#ffd700" />
      <rect x="6" y="5" width="4" height="5" fill="#f39c12" />
      <rect x="7" y="4" width="2" height="1" fill="#f39c12" />
      <rect x="7" y="10" width="2" height="1" fill="#f39c12" />
      <rect x="7" y="6" width="2" height="2" fill="#ffd700" />
      <rect x="2" y="12" width="1" height="1" fill="#f39c12" />
      <rect x="13" y="12" width="1" height="1" fill="#f39c12" />
      <rect x="3" y="13" width="1" height="1" fill="#f39c12" />
      <rect x="12" y="13" width="1" height="1" fill="#f39c12" />
      <rect x="4" y="14" width="8" height="1" fill="#f39c12" />
    </svg>
  );
}
