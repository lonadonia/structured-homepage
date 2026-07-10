import { colors } from "@/lib/design-tokens";

/**
 * The signature brand visual: an unresolved field of signal on the left that
 * resolves into an ordered lattice on the right — chaos becoming structure.
 * Structural nodes snap to a 48px cell (2× the 24px dot grid), so the
 * artwork is constructed on the page's own grid rather than decorating it.
 * A finer, ungridded "dust" layer gives the chaotic zone real visual mass
 * instead of reading as a few sparse dots in empty space. 1px indigo
 * strokes, two permitted radial glows (one soft/wide, one tight/bright —
 * both part of the single "resolution glow" concept), and a slow
 * opacity-only drift (>=20s, disabled under prefers-reduced-motion).
 *
 * Geometry is generated with seeded PRNGs at module scope, so the server
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
};

const randField = mulberry32(7);

const nodes: LatticeNode[] = [];
for (let gx = 0; gx < COLS; gx++) {
  for (let gy = 0; gy < ROWS; gy++) {
    const t = gx / (COLS - 1);
    const d = Math.pow(1 - t, 1.7);
    const lx = X0 + gx * CELL;
    const ly = Y0 + gy * CELL;
    const jx = (randField() * 2 - 1) * 40 * d;
    const jy = (randField() * 2 - 1) * 40 * d;
    nodes.push({ gx, gy, lx, ly, x: lx + jx, y: ly + jy, d });
  }
}

const at = (gx: number, gy: number) => nodes[gx * ROWS + gy];

const ORDERED = 0.22;

/** Lattice segments between resolved neighbours (right + down). */
const latticeEdges: Array<{ x1: number; y1: number; x2: number; y2: number; o: number }> = [];
for (const n of nodes) {
  if (n.d > ORDERED) continue;
  for (const [nx, ny] of [
    [n.gx + 1, n.gy],
    [n.gx, n.gy + 1],
  ]) {
    if (nx >= COLS || ny >= ROWS) continue;
    const m = at(nx, ny);
    if (m.d > ORDERED) continue;
    latticeEdges.push({
      x1: n.x,
      y1: n.y,
      x2: m.x,
      y2: m.y,
      o: 0.16 + 0.22 * (1 - n.d),
    });
  }
}

/** Convergence trails: mid-zone points drawn toward their lattice position. */
const randTrails = mulberry32(13);
const trails = nodes.filter(
  (n) => n.d > ORDERED && n.d < 0.6 && randTrails() < 0.45
);

/** Sparse noise connections among the coarse scattered nodes. */
const randChaos = mulberry32(23);
const chaosEdges: Array<{ a: LatticeNode; b: LatticeNode }> = [];
const scattered = nodes.filter((n) => n.d > 0.5);
for (const a of scattered) {
  if (randChaos() > 0.12) continue;
  const near = scattered.filter(
    (b) => b !== a && Math.hypot(b.x - a.x, b.y - a.y) < 100
  );
  if (near.length) chaosEdges.push({ a, b: near[Math.floor(randChaos() * near.length)] });
}

/** Fine dust layer: ungridded texture giving the chaotic zone real mass. */
const randDust = mulberry32(101);
type Dust = { x: number; y: number; r: number; o: number; c: string };
const dust: Dust[] = [];
for (let i = 0; i < 260; i++) {
  const t = Math.pow(randDust(), 2.2);
  const x = t * W;
  const localD = Math.pow(1 - x / W, 1.7);
  if (localD < 0.3) continue;
  const y = randDust() * H;
  const r = 0.5 + randDust() * 0.9;
  const o = (0.14 + 0.4 * localD) * (0.65 + 0.35 * randDust());
  dust.push({ x, y, r, o, c: mixColor(colors.gray[600], colors.indigo[400], (1 - localD) * 0.35) });
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

/** Ruler ticks under the resolved columns — a restrained blueprint detail. */
const tickCols = [10, 11, 12, 13, 14];

/** Annotation target: a calm, near-center-row node on the resolved side. */
const annotationNode = at(12, 6);

type StructuredVisualProps = {
  className?: string;
  id?: string;
  preserveAspectRatio?: string;
  /** Disable the slow drift (e.g. when echoed at low opacity in the CTA). */
  still?: boolean;
  /** Show the single "Entity 128 — Resolved" leader-line annotation. */
  annotated?: boolean;
};

export default function StructuredVisual({
  className = "",
  id,
  preserveAspectRatio = "xMidYMid meet",
  still = false,
  annotated = false,
}: StructuredVisualProps) {
  const gid = id ?? "lattice";

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
        <radialGradient id={`${gid}-glow-soft`}>
          <stop offset="0%" stopColor={colors.brand.indigo} stopOpacity="0.2" />
          <stop offset="100%" stopColor={colors.brand.indigo} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${gid}-glow-core`}>
          <stop offset="0%" stopColor={colors.indigo[400]} stopOpacity="0.25" />
          <stop offset="100%" stopColor={colors.indigo[400]} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* The permitted gradient, in two parts: a wide ambient wash and a
          tighter bright core over the resolution zone. */}
      <circle cx={560} cy={280} r={280} fill={`url(#${gid}-glow-soft)`} />
      <circle cx={612} cy={296} r={120} fill={`url(#${gid}-glow-core)`} />

      {/* Resolved surface — a flat low-opacity plate, not a gradient,
          giving the lattice a sense of settled weight. */}
      <rect x={492} y={0} width={228} height={H} fill={colors.brand.indigo} fillOpacity="0.045" />

      <g className={still ? undefined : "lattice-drift"}>
        {/* Fine dust: the unresolved signal, given real texture and mass */}
        <g>
          {dust.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} fillOpacity={d.o} />
          ))}
        </g>

        {/* Noise connections among coarse scattered nodes */}
        <g stroke={colors.gray[500]} strokeWidth="1" strokeOpacity="0.14">
          {chaosEdges.map(({ a, b }, i) => (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ))}
        </g>

        {/* Convergence trails: scattered position → lattice position */}
        <g stroke={colors.indigo[500]} strokeWidth="1" strokeOpacity="0.16">
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

        {/* Ruler ticks — a restrained instrument/blueprint detail */}
        <g stroke={colors.indigo[400]} strokeOpacity="0.3" strokeWidth="1">
          {tickCols.map((gx) => {
            const x = X0 + gx * CELL;
            return <line key={gx} x1={x} y1={H - 20} x2={x} y2={H - 12} />;
          })}
        </g>

        {/* Register marks */}
        <g stroke={colors.brand.paper} strokeWidth="1" strokeOpacity="0.26">
          {crosses.map((n, i) => (
            <g key={i}>
              <line x1={n.x - 4} y1={n.y} x2={n.x + 4} y2={n.y} />
              <line x1={n.x} y1={n.y - 4} x2={n.x} y2={n.y + 4} />
            </g>
          ))}
        </g>

        {/* Structural point field */}
        <g>
          {nodes.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={1.9}
              fill={mixColor(colors.gray[500], colors.indigo[400], 1 - n.d)}
              fillOpacity={0.42 + 0.55 * (1 - n.d)}
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
                strokeOpacity="0.5"
              />
              <circle cx={n.x} cy={n.y} r={2.4} fill={colors.indigo[400]} />
            </g>
          ))}
        </g>

        {/* Single elegant annotation — echoes "Entity 128" from the
            evaluation map, rewarding attentive scrollers later on the page */}
        {annotated && (
          <g>
            <line
              x1={annotationNode.x}
              y1={annotationNode.y}
              x2={annotationNode.x + 34}
              y2={annotationNode.y - 34}
              stroke={colors.indigo[400]}
              strokeWidth="1"
              strokeOpacity="0.55"
            />
            <circle
              cx={annotationNode.x + 34}
              cy={annotationNode.y - 34}
              r="1.6"
              fill={colors.indigo[400]}
            />
            <text
              x={annotationNode.x + 42}
              y={annotationNode.y - 31}
              fontFamily="var(--font-plex-mono), monospace"
              fontSize="10"
              letterSpacing="0.06em"
              fill={colors.gray[300]}
            >
              ENTITY 128
            </text>
            <text
              x={annotationNode.x + 42}
              y={annotationNode.y - 18}
              fontFamily="var(--font-plex-mono), monospace"
              fontSize="10"
              letterSpacing="0.06em"
              fill={colors.indigo[400]}
            >
              RESOLVED
            </text>
          </g>
        )}
      </g>
    </svg>
  );
}
