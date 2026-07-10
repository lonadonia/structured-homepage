import { colors } from "@/lib/design-tokens";

const W = 960;
const H = 540;
const PLOT = { left: 64, right: 920, top: 28, bottom: 470 };

const thresholdY = (x: number) =>
  340 - ((340 - 120) / (PLOT.right - PLOT.left)) * (x - PLOT.left);

const grayNodes: Array<[number, number]> = [
  [128, 406], [176, 362], [210, 418], [258, 338], [302, 390],
  [330, 300], [378, 352], [416, 282], [455, 330], [500, 376],
  [540, 260], [586, 312], [640, 352], [700, 286],
];

const indigoNodes: Array<[number, number]> = [
  [300, 208], [392, 196], [470, 168], [540, 190],
  [610, 148], [760, 128], [830, 96], [876, 108],
];

const highlight = { x: 688, y: 132 };
const highlightPoint: [number, number] = [highlight.x, highlight.y];

const gridX: number[] = [];
for (let x = PLOT.left; x <= 880; x += 48) gridX.push(x);
const gridY: number[] = [];
for (let y = PLOT.bottom; y >= PLOT.top + 10; y -= 48) gridY.push(y);

const ticksX = [64, 160, 256, 352, 448, 544, 640, 736, 832];
const ticksY = [470, 374, 278, 182, 86];

const relationshipEdges: Array<[[number, number], [number, number]]> = [
  [indigoNodes[0], indigoNodes[1]],
  [indigoNodes[1], indigoNodes[2]],
  [indigoNodes[2], indigoNodes[3]],
  [indigoNodes[3], indigoNodes[4]],
  [indigoNodes[4], highlightPoint],
  [indigoNodes[5], indigoNodes[6]],
  [indigoNodes[6], indigoNodes[7]],
];

export default function EvaluationMap({
  className = "",
  id,
  tone = "light",
  compact = false,
}: {
  className?: string;
  id?: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const dark = tone === "dark";
  const grid = dark ? colors.brand.paper : colors.brand.ink;
  const axis = dark ? colors.ink[600] : colors.gray[300];
  const muted = dark ? colors.gray[500] : colors.gray[500];
  const nodeMuted = dark ? colors.ink[600] : colors.gray[300];
  const readoutFill = dark ? colors.ink[900] : "#FFFFFF";
  const readoutStroke = dark ? colors.ink[700] : colors.brand.mist;
  const text = dark ? colors.brand.paper : colors.brand.ink;

  return (
    <svg
      id={id}
      viewBox={compact ? "430 30 490 270" : `0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label="Evaluation map plotting entities by structural clarity and semantic consistency. Evaluated entities cluster above the integrity threshold; one entity is highlighted with a score of 92 out of 100."
    >
      <polygon
        points={`${PLOT.left},${thresholdY(PLOT.left)} ${PLOT.right},${thresholdY(PLOT.right)} ${PLOT.right},${PLOT.top} ${PLOT.left},${PLOT.top}`}
        fill={colors.brand.indigo}
        fillOpacity={dark ? "0.09" : "0.045"}
      />

      <g stroke={grid} strokeOpacity={dark ? "0.06" : "0.045"} strokeWidth="1">
        {gridX.map((x) => (
          <line key={x} x1={x} y1={PLOT.top} x2={x} y2={PLOT.bottom} />
        ))}
        {gridY.map((y) => (
          <line key={y} x1={PLOT.left} y1={y} x2={PLOT.right} y2={y} />
        ))}
      </g>

      <g stroke={axis} strokeWidth="1">
        <line x1={PLOT.left} y1={PLOT.top} x2={PLOT.left} y2={PLOT.bottom} />
        <line x1={PLOT.left} y1={PLOT.bottom} x2={PLOT.right} y2={PLOT.bottom} />
        {ticksX.map((x) => (
          <line key={x} x1={x} y1={PLOT.bottom} x2={x} y2={PLOT.bottom + 6} />
        ))}
        {ticksY.map((y) => (
          <line key={y} x1={PLOT.left - 6} y1={y} x2={PLOT.left} y2={y} />
        ))}
      </g>

      <text
        x={PLOT.right}
        y={502}
        textAnchor="end"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="11"
        fill={muted}
      >
        STRUCTURAL CLARITY {"→"}
      </text>
      <text
        x={36}
        y={PLOT.bottom}
        transform={`rotate(-90 36 ${PLOT.bottom})`}
        textAnchor="start"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="11"
        fill={muted}
      >
        SEMANTIC CONSISTENCY {"→"}
      </text>

      <line
        x1={PLOT.left}
        y1={thresholdY(PLOT.left)}
        x2={PLOT.right}
        y2={thresholdY(PLOT.right)}
        stroke={colors.brand.indigo}
        strokeWidth="1"
        strokeOpacity={dark ? "0.65" : "0.45"}
        strokeDasharray="4 5"
      />
      <text
        x={430}
        y={238}
        transform="rotate(-14.4 430 238)"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="10"
        fill={colors.brand.indigo}
        fillOpacity={dark ? "0.9" : "0.75"}
      >
        INTEGRITY THRESHOLD
      </text>

      <g stroke={colors.brand.indigo} strokeOpacity={dark ? "0.16" : "0.12"} strokeWidth="1">
        {relationshipEdges.map(([[x1, y1], [x2, y2]], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      <g fill={nodeMuted}>
        {grayNodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={3.5} />
        ))}
      </g>

      <g fill={colors.brand.indigo} fillOpacity={dark ? "1" : "0.9"}>
        {indigoNodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={4} />
        ))}
      </g>

      <circle
        cx={highlight.x}
        cy={highlight.y}
        r={13}
        fill="none"
        stroke={colors.brand.indigo}
        strokeWidth="1"
        strokeOpacity={dark ? "0.65" : "0.4"}
      />
      <circle cx={highlight.x} cy={highlight.y} r={4.5} fill={colors.indigo[400]} />
      <line
        x1={highlight.x + 8}
        y1={highlight.y - 8}
        x2={726}
        y2={98}
        stroke={dark ? colors.ink[600] : colors.gray[300]}
        strokeWidth="1"
      />
      <g>
        <rect
          x={726}
          y={52}
          width={170}
          height={58}
          rx={8}
          fill={readoutFill}
          stroke={readoutStroke}
        />
        <text
          x={742}
          y={76}
          fontFamily="var(--font-plex-mono), monospace"
          fontSize="10"
          fill={muted}
        >
          ENTITY 128
        </text>
        <text
          x={742}
          y={98}
          fontFamily="var(--font-inter), sans-serif"
          fontSize="16"
          fontWeight="600"
          fill={text}
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          Score 92<tspan fill={muted}>/100</tspan>
        </text>
      </g>
    </svg>
  );
}
