export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Crown */}
      <g fill="currentColor">
        <path d="M22 14 L26 7 L30 12 L32 5 L34 12 L38 7 L42 14 L42 17 L22 17 Z" />
        <circle cx="26" cy="7" r="1.6" />
        <circle cx="32" cy="5" r="1.6" />
        <circle cx="38" cy="7" r="1.6" />
      </g>

      {/* Shield */}
      <path
        d="M8 20 L56 20 L56 46 C56 60 46 70 32 74 C18 70 8 60 8 46 Z"
        fill="#0a1628"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Letter E */}
      <text
        x="32"
        y="55"
        textAnchor="middle"
        fontSize="30"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight="500"
        fill="currentColor"
      >
        E
      </text>
    </svg>
  );
}
