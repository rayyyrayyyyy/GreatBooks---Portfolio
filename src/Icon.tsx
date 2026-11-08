import type { CSSProperties } from "react";

export function Icon({
  name,
  size = 20,
  className = "",
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const paths: Record<string, React.ReactNode> = {
    book: (
      <>
        <path d="M12 5.5C9 3.8 5.8 3.4 2 4v15c3.8-.6 7-.2 10 1.5 3-1.7 6.2-2.1 10-1.5V4c-3.8-.6-7-.2-10 1.5Z" />
        <path d="M12 5.5v15M5.5 8h3M5.5 11h3M15.5 8h3M15.5 11h3" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15m-5-5 5 5-5 5" />
      </>
    ),
    diagonal: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    heart: <path d="m12 20-8.2-8.1a5 5 0 0 1 7.1-7L12 6l1.1-1.1a5 5 0 0 1 7.1 7L12 20Z" />,
    stack: (
      <>
        <path d="m3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4" />
      </>
    ),
    sprout: (
      <>
        <path d="M12 21v-9M12 16C4 16 3 12 3 7c6 0 9 3 9 9ZM12 12c0-7 3-10 9-10 0 6-3 10-9 10Z" />
      </>
    ),
    history: (
      <>
        <path d="m3 8 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 18l9 4 9-4M3 8v5m18-5v5" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6.5" />
        <path d="m15 15 6 6M7 7a4 4 0 0 1 5 0" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="11" r="8" />
        <path d="m7 4 2 4-2 3 4 2 1 5m6-13-3 4 3 3-1 4M8 23h8m-4-4v4" />
      </>
    ),
    thought: (
      <>
        <path d="M21 10c0 4-4 7-9 7H9l-5 4 1-6a7 7 0 0 1-3-5c0-4 4-7 10-7 5 0 9 3 9 7Z" />
        <path d="M7 10h.01M12 10h.01M17 10h.01" />
      </>
    ),
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    down: <path d="m6 9 6 6 6-6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    quote: (
      <>
        <path d="M10 5H4v7h5c0 4-1 5-4 6m15-13h-6v7h5c0 4-1 5-4 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {paths[name] || paths.book}
    </svg>
  );
}
