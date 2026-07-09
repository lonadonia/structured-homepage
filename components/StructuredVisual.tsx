import { colors } from "@/lib/design-tokens";

/**
 * The signature brand visual: an unresolved field of scattered points on the
 * left that resolves into an ordered lattice on the right — chaos becoming
 * structure. Every node converges onto a 48px cell (2× the 24px dot grid),
 * so the artwork is constructed on the page's own grid rather than decorating
 * it. 1px indigo strokes, one permitted radial glow, and a single slow
 * opacity drift (>=20s, disabled under prefers-reduced-motion).
 *
 * Geometry is generated with a seeded PRNG at module scope, so the server
 * and client always render identical markup.
 */

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Blend two brand hexes; used to ramp node colour from gray (noise) to indigo (order). */
function mixColor(from: string, to: string, t: number): string {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `rgb(${c[0]} ${c[1]} ${c[2]})`;
}

const CELL = 48;
const COLS = 15;
const ROWS = 12;
const X0 = 24;
const Y0 = 24;
const W = 720;
const H = 576;

type LatticeNode = {
  gx: number;
  gy: number;
  /** Snapped lattice position. */
  lx: number;
  ly: number;
  /** Rendered (jittered) position. */
  x: number;
  y: number;
  /** 1 = fully scattered (left edge), 0 = fully resolved (right edge). */
  d: number;
  skip: boolean;
};

const rand = mulberry32(7);

const nodes: LatticeNode[] = [];
for (let gx = 0; gx < COLS; gx++) {
  for (let gy = 0; gy < ROWS; gy++) {
    const t = gx / (COLS - 1);
    const d = Math.pow(1 - t, 1.7);
    const lx = X0 + gx * CELL;
    const ly = Y0 + gy * CELL;
    const jx = (rand() * 2 - 1) * 38 * d;
    const jy = (rand() * 2 - 1) * 38 * d;
    const skip = d > 0.75 && rand() < 0.25;
    nodes.push({ gx, gy, lx, ly, x: lx + jx, y: ly + jy, d, skip });
  }
}

const at = (gx: number, gy: number) => nodes[gx * ROWS + gy];

const ORDERED = 0.22;

/** Lattice segments between resolved neighbours (right + down). */
const latticeEdges: Array<{ x1: number; y1: number; x2: number; y2: number; o: number }> = [];
for (const n of nodes) {
  if (n.d > ORDERED || n.skip) continue;
  for (const [nx, ny] of [
    [n.gx + 1, n.gy],
    [n.gx, n.gy + 1],
  ]) {
    if (nx >= COLS || ny >= ROWS) continue;
    const m = at(nx, ny);
    if (m.d > ORDERED || m.skip) continue;
    latticeEdges.push({
      x1: n.x,
      y1: n.y,
      x2: m.x,
      y2: m.y,
      o: 0.14 + 0.2 * (1 - n.d),
    });
  }
}

/** Convergence trails: mid-zone points drawn toward their lattice position. */
const trails = nodes.filter(
  (n) => !n.skip && n.d > ORDERED && n.d < 0.6 && rand() < 0.45
);

/** Sparse noise connections in the scattered zone. */
const chaosEdges: Array<{ a: LatticeNode; b: LatticeNode }> = [];
const scattered = nodes.filter((n) => n.d > 0.5 && !n.skip);
for (const a of scattered) {
  if (rand() > 0.22) continue;
  const near = scattered.filter(
    (b) => b !== a && Math.hypot(b.x - a.x, b.y - a.y) < 100
  );
  if (near.length) chaosEdges.push({ a, b: near[Math.floor(rand() * near.length)] });
}

/** Evaluated entities: highlighted nodes on the resolved side. */
const highlights = [
  [10, 3],
  [12, 7],
  [9, 8],
  [13, 4],
  [11, 10],
].map(([gx, gy]) => at(gx, gy));

/** Blueprint register marks on the resolved grid. */
const crosses = [
  [9, 1],
  [14, 9],
  [10, 11],
  [13, 0],
].map(([gx, gy]) => at(gx, gy));

type StructuredVisualProps = {
  className?: string;
  id?: string;
  preserveAspectRatio?: string;
  /** Disable the slow drift (e.g. when echoed at low opacity in the CTA). */
  still?: boolean;
};

export default function StructuredVisual({
  className = "",
  id,
  preserveAspectRatio = "xMidYMid meet",
  still = false,
}: StructuredVisualProps) {
  return (
    <svg
      id={id}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio={preserveAspectRatio}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${id ?? "lattice"}-glow`}>
          <stop offset="0%" stopColor={colors.brand.indigo} stopOpacity="0.22" />
          <stop offset="100%" stopColor={colors.brand.indigo} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* The only permitted gradient: the resolution glow */}
      <circle cx={540} cy={264} r={250} fill={`url(#${id ?? "lattice"}-glow)`} />

      <g className={still ? undefined : "lattice-drift"}>
        {/* Noise connections (scattered zone) */}
        <g stroke={colors.gray[500]} strokeWidth="1" strokeOpacity="0.16">
          {chaosEdges.map(({ a, b }, i) => (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ))}
        </g>

        {/* Convergence trails: scattered position → lattice position */}
        <g stroke={colors.indigo[500]} strokeWidth="1" strokeOpacity="0.15">
          {trails.map((n, i) => (
            <line key={i} x1={n.x} y1={n.y} x2={n.lx} y2={n.ly} />
          ))}
        </g>

        {/* Resolved lattice */}
        <g stroke={colors.brand.indigo} strokeWidth="1">
          {latticeEdges.map((e, i) => (
            <line
              key={i}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              strokeOpacity={e.o}
            />
          ))}
        </g>

        {/* Register marks */}
        <g stroke={colors.brand.paper} strokeWidth="1" strokeOpacity="0.28">
          {crosses.map((n, i) => (
            <g key={i}>
              <line x1={n.x - 4} y1={n.y} x2={n.x + 4} y2={n.y} />
              <line x1={n.x} y1={n.y - 4} x2={n.x} y2={n.y + 4} />
            </g>
          ))}
        </g>

        {/* Point field */}
        <g>
          {nodes
            .filter((n) => !n.skip)
            .map((n, i) => (
              <circle
                key={i}
                cx={n.x}
                cy={n.y}
                r={1.8}
                fill={mixColor(colors.gray[500], colors.indigo[400], 1 - n.d)}
                fillOpacity={0.4 + 0.55 * (1 - n.d)}
              />
            ))}
        </g>

        {/* Evaluated entities */}
        <g>
          {highlights.map((n, i) => (
            <g key={i}>
              <circle
                cx={n.x}
                cy={n.y}
                r={6}
                fill="none"
                stroke={colors.indigo[500]}
                strokeWidth="1"
                strokeOpacity="0.45"
              />
              <circle cx={n.x} cy={n.y} r={2.4} fill={colors.indigo[400]} />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
