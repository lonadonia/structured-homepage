import { colors } from "@/lib/design-tokens";

/**
 * The visual identity moment: an evaluation map. Entities are positioned by
 * structural clarity (x) and semantic consistency (y); evaluated entities sit
 * above the integrity threshold in indigo. Drawn like a technical instrument —
 * hairline grid, measured ticks, mono annotations — on the light ground.
 *
 * Passes the caption test: every mark depicts something true about the system.
 */

const W = 960;
const H = 540;
const PLOT = { left: 64, right: 920, top: 28, bottom: 470 };

/** Integrity threshold: y = 340 - 0.257 * (x - 64) */
const thresholdY = (x: number) =>
  340 - ((340 - 120) / (PLOT.right - PLOT.left)) * (x - PLOT.left);

/** Entities not yet evaluated (below threshold). */
const grayNodes: Array<[number, number]> = [
  [128, 406], [176, 362], [210, 418], [258, 338], [302, 390],
  [330, 300], [378, 352], [416, 282], [455, 330], [500, 376],
  [540, 260], [586, 312], [640, 352], [700, 286],
];

/** Evaluated entities (above threshold). */
const indigoNodes: Array<[number, number]> = [
  [300, 208], [392, 196], [470, 168], [540, 190],
  [610, 148], [760, 128], [830, 96], [876, 108],
];

const highlight = { x: 688, y: 132 };

const gridX: number[] = [];
for (let x = PLOT.left; x <= 880; x += 48) gridX.push(x);
const gridY: number[] = [];
for (let y = PLOT.bottom; y >= PLOT.top + 10; y -= 48) gridY.push(y);

const ticksX = [64, 160, 256, 352, 448, 544, 640, 736, 832];
const ticksY = [470, 374, 278, 182, 86];

export default function EvaluationMap({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      id={id}
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label="Evaluation map plotting entities by structural clarity and semantic consistency. Evaluated entities cluster above the integrity threshold; one entity is highlighted with a score of 92 out of 100."
    >
      {/* Construction grid */}
      <g stroke={colors.brand.ink} strokeOpacity="0.045" strokeWidth="1">
        {gridX.map((x) => (
          <line key={x} x1={x} y1={PLOT.top} x2={x} y2={PLOT.bottom} />
        ))}
        {gridY.map((y) => (
          <line key={y} x1={PLOT.left} y1={y} x2={PLOT.right} y2={y} />
        ))}
      </g>

      {/* Axes */}
      <g stroke={colors.gray[300]} strokeWidth="1">
        <line x1={PLOT.left} y1={PLOT.top} x2={PLOT.left} y2={PLOT.bottom} />
        <line x1={PLOT.left} y1={PLOT.bottom} x2={PLOT.right} y2={PLOT.bottom} />
        {ticksX.map((x) => (
          <line key={x} x1={x} y1={PLOT.bottom} x2={x} y2={PLOT.bottom + 6} />
        ))}
        {ticksY.map((y) => (
          <line key={y} x1={PLOT.left - 6} y1={y} x2={PLOT.left} y2={y} />
        ))}
      </g>

      {/* Axis labels — the instrument voice */}
      <text
        x={PLOT.right}
        y={502}
        textAnchor="end"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="11"
        letterSpacing="0.08em"
        fill={colors.gray[500]}
      >
        STRUCTURAL CLARITY →
      </text>
      <text
        x={36}
        y={PLOT.bottom}
        transform={`rotate(-90 36 ${PLOT.bottom})`}
        textAnchor="start"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="11"
        letterSpacing="0.08em"
        fill={colors.gray[500]}
      >
        SEMANTIC CONSISTENCY →
      </text>

      {/* Integrity threshold */}
      <line
        x1={PLOT.left}
        y1={thresholdY(PLOT.left)}
        x2={PLOT.right}
        y2={thresholdY(PLOT.right)}
        stroke={colors.brand.indigo}
        strokeWidth="1"
        strokeOpacity="0.45"
        strokeDasharray="4 5"
      />
      <text
        x={430}
        y={238}
        transform="rotate(-14.4 430 238)"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="10"
        letterSpacing="0.08em"
        fill={colors.brand.indigo}
        fillOpacity="0.75"
      >
        INTEGRITY THRESHOLD
      </text>

      {/* Entities awaiting evaluation */}
      <g fill={colors.gray[300]}>
        {grayNodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={3.5} />
        ))}
      </g>

      {/* Evaluated entities */}
      <g fill={colors.brand.indigo} fillOpacity="0.9">
        {indigoNodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={4} />
        ))}
      </g>

      {/* Highlighted entity + readout */}
      <circle
        cx={highlight.x}
        cy={highlight.y}
        r={11}
        fill="none"
        stroke={colors.brand.indigo}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <circle cx={highlight.x} cy={highlight.y} r={4.5} fill={colors.brand.indigo} />
      <line
        x1={highlight.x + 8}
        y1={highlight.y - 8}
        x2={726}
        y2={98}
        stroke={colors.gray[300]}
        strokeWidth="1"
      />
      <g>
        <rect
          x={726}
          y={52}
          width={170}
          height={58}
          rx={8}
          fill="#FFFFFF"
          stroke={colors.brand.mist}
        />
        <text
          x={742}
          y={76}
          fontFamily="var(--font-plex-mono), monospace"
          fontSize="10"
          letterSpacing="0.08em"
          fill={colors.gray[500]}
        >
          ENTITY 128
        </text>
        <text
          x={742}
          y={98}
          fontFamily="var(--font-inter), sans-serif"
          fontSize="16"
          fontWeight="600"
          fill={colors.brand.ink}
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          Score 92<tspan fill={colors.gray[400]}>/100</tspan>
        </text>
      </g>
    </svg>
  );
}
