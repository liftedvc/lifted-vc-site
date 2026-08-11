// Minimal geometric icon for "Lifted" — a chevron rising above a bar.
// Placeholder mark, easily swapped for a real brand asset.

export function LogoMark({
  className = "",
  size = 22,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 14.5L11 5L19 14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
