type Props = {
  className?: string;
  /** Highlight color for the "TRON" segment. Defaults to currentColor. */
  accent?: string;
  title?: string;
};

/**
 * QIANTRON wordmark rendered as SVG in a futuristic geometric font (Orbitron),
 * with the horizontal crossbar of the "A" intentionally removed.
 * Uses a fixed-cell grid so a hand-drawn crossbar-less "A" slots cleanly in.
 */
export function QianTronWordmark({ className, accent, title = "QIANTRON" }: Props) {
  const cellW = 90;
  const cellH = 130;
  const letters: (string | null)[] = ["Q", "I", null, "N", "T", "R", "O", "N"];
  const totalW = cellW * letters.length;
  const stroke = 12;
  const legApex = 18;
  const legFoot = 112;

  return (
    <svg
      role="img"
      aria-label={title}
      viewBox={`0 0 ${totalW} ${cellH}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>{title}</title>
      {letters.map((L, i) => {
        const cx = cellW * i + cellW / 2;
        // "TRON" is the 4 trailing letters (indices 4..7)
        const color = accent && i >= 4 ? accent : "currentColor";

        if (L === null) {
          // Custom "A" — futuristic chevron: apex chamfered flat, twin legs,
          // inner diagonal accent bars, NO horizontal crossbar.
          const halfBase = cellW * 0.4;
          const chamfer = 10;
          const leftFootX = cx - halfBase;
          const rightFootX = cx + halfBase;
          const apexLX = cx - chamfer;
          const apexRX = cx + chamfer;
          const apexY = legApex + 6;
          // Inner accent verticals — a subtle "tron" glyph inside the A.
          const innerY1 = 60;
          const innerY2 = legFoot - 6;
          const innerHalf = cellW * 0.14;
          return (
            <g key={`a-${i}`} stroke={color} strokeWidth={stroke} strokeLinecap="square" strokeLinejoin="miter" fill="none">
              {/* Left leg with chamfered apex */}
              <polyline points={`${leftFootX},${legFoot} ${apexLX},${apexY} ${apexRX},${apexY} ${rightFootX},${legFoot}`} />
              {/* Chamfer flat top notch accent */}
              <line x1={apexLX + 2} y1={apexY - 6} x2={apexRX - 2} y2={apexY - 6} strokeWidth={4} />
              {/* Inner accent bars — replaces the missing crossbar */}
              <line x1={cx - innerHalf} y1={innerY1} x2={cx - innerHalf} y2={innerY2} strokeWidth={4} />
              <line x1={cx + innerHalf} y1={innerY1} x2={cx + innerHalf} y2={innerY2} strokeWidth={4} />
            </g>
          );
        }

        return (
          <text
            key={`${L}-${i}`}
            x={cx}
            y={108}
            textAnchor="middle"
            fontFamily='"Orbitron", "Michroma", ui-sans-serif, system-ui, sans-serif'
            fontWeight={900}
            fontSize={108}
            fill={color}
            letterSpacing="0"
          >
            {L}
          </text>
        );
      })}
    </svg>
  );
}
