import { LogoGlyph } from "@/components/Logo";
import { colors } from "@/lib/design-tokens";

const navItems = [
  { label: "Overview", active: true },
  { label: "Framework" },
  { label: "Evaluations" },
  { label: "Insights" },
  { label: "Resources" },
  { label: "Settings" },
];

const kpis = [
  { label: "Evaluations", value: "128", unit: "", delta: "+12%" },
  { label: "Framework Score", value: "86", unit: "/100", delta: "+6" },
  { label: "Entities Analyzed", value: "532", unit: "", delta: "+18%" },
  { label: "Integrity Index", value: "92", unit: "/100", delta: "+7" },
];

const evaluations = [
  { entity: "G-SEO Framework Overview", type: "Framework", score: "87", date: "Jun 3" },
  { entity: "Entity Graph - Products", type: "Evaluation", score: "92", date: "Jun 2" },
  { entity: "Documentation Hierarchy", type: "Evaluation", score: "78", date: "May 29" },
];

const scores = [58, 62, 60, 66, 71, 69, 74, 78, 76, 81, 84, 86];
const benchmark = [64, 65, 65, 66, 67, 67, 68, 68, 69, 69, 70, 70];
const xLabels = ["May 1", "May 8", "May 15", "May 22", "May 29", "Jun 5"];

function ScoreChart() {
  const x = (i: number) => 30 + (i * 500) / (scores.length - 1);
  const y = (s: number) => 160 - s * 1.5;
  const points = scores.map((s, i) => `${x(i)},${y(s)}`).join(" ");
  const benchPoints = benchmark.map((s, i) => `${x(i)},${y(s)}`).join(" ");
  const area = `M${x(0)},160 L${points.replace(/ /g, " L")} L${x(scores.length - 1)},160 Z`;
  const last = scores.length - 1;

  return (
    <svg viewBox="0 0 540 200" className="mt-3 w-full" aria-hidden="true">
      {[0, 25, 50, 75, 100].map((s) => (
        <g key={s}>
          <line
            x1="30"
            y1={y(s)}
            x2="530"
            y2={y(s)}
            stroke={colors.gray[100]}
            strokeWidth="1"
          />
          <text
            x="22"
            y={y(s) + 3}
            textAnchor="end"
            fontSize="9"
            fontFamily="var(--font-plex-mono), monospace"
            fill={colors.gray[400]}
          >
            {s}
          </text>
        </g>
      ))}
      <path d={area} fill={colors.data.chartFill} />
      <polyline
        points={benchPoints}
        fill="none"
        stroke={colors.gray[400]}
        strokeWidth="1"
        strokeDasharray="3 3"
        strokeLinejoin="round"
      />
      <polyline
        points={points}
        fill="none"
        stroke={colors.data.seriesPrimary}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx={x(last)} cy={y(scores[last])} r="3" fill={colors.data.seriesPrimary} />
      <text
        x={x(last) - 10}
        y={y(scores[last]) - 10}
        textAnchor="end"
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-inter), sans-serif"
        fill={colors.brand.ink}
      >
        86
      </text>
      <text
        x={x(last) - 10}
        y={y(benchmark[last]) + 14}
        textAnchor="end"
        fontSize="9"
        fontFamily="var(--font-plex-mono), monospace"
        fill={colors.gray[400]}
      >
        BENCHMARK 70
      </text>
      {xLabels.map((l, i) => (
        <text
          key={l}
          x={x(i * 2.2)}
          y="188"
          textAnchor="middle"
          fontSize="9"
          fontFamily="var(--font-plex-mono), monospace"
          fill={colors.gray[400]}
        >
          {l.toUpperCase()}
        </text>
      ))}
    </svg>
  );
}

function NavIcon({ i, active }: { i: number; active?: boolean }) {
  const stroke = active ? "#fff" : colors.gray[400];
  const shapes = [
    <rect key="0" x="2" y="2" width="10" height="10" rx="2" />,
    <path key="1" d="M7 1.5 12.5 4.5v5L7 12.5 1.5 9.5v-5L7 1.5Z" />,
    <path key="2" d="M2 12.5 5.5 8l2.5 2 3.5-5" />,
    <path key="3" d="M7 2v10M2 7h10" />,
    <path key="4" d="M3 2h8v10H3zM5.5 5h3M5.5 7.5h3" />,
    <circle key="5" cx="7" cy="7" r="3.5" />,
  ];

  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round">
        {shapes[i]}
      </g>
    </svg>
  );
}

export default function DashboardArtifact({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="The Structured dashboard: evaluation counts, framework score of 86 out of 100, entities analyzed, integrity index of 92 out of 100, a rising framework-score chart, a top insight, and a table of recent evaluations."
      className={`pointer-events-none flex select-none overflow-hidden rounded-lg border border-gray-300 bg-white shadow-[0_30px_90px_-58px_rgb(11_15_23_/_0.55),inset_0_1px_0_rgb(255_255_255_/_0.94)] ${className}`}
    >
      <div className="hidden w-[216px] shrink-0 flex-col border-r border-white/10 bg-ink-950 text-paper md:flex">
        <div className="flex items-center gap-2 px-5 pt-5 pb-7">
          <LogoGlyph size={18} />
          <span className="text-[10px] font-semibold uppercase text-paper">
            Structured
          </span>
        </div>
        <nav className="flex flex-col gap-1 px-3" aria-hidden="true">
          {navItems.map((item, i) => (
            <span
              key={item.label}
              className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[12px] font-medium ${
                item.active
                  ? "border border-white/10 bg-blue-600 text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.18)]"
                  : "text-gray-400"
              }`}
            >
              <NavIcon i={i} active={item.active} />
              {item.label}
            </span>
          ))}
        </nav>
        <div className="mt-auto border-t border-white/10 px-5 py-5">
          <p className="text-overline-s text-gray-500">Framework v2.4</p>
          <p className="mt-2 text-[12px] leading-relaxed text-gray-400">
            Structural intelligence layer
          </p>
        </div>
      </div>

      <div className="min-w-0 flex-1 bg-gray-50">
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
          <div>
            <p className="text-[14px] font-semibold text-ink-900">Overview</p>
            <p className="text-[11px] text-gray-500">
              Welcome back. Here is what is happening.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-sm border border-gray-200 px-2.5 py-1 text-[10px] font-medium text-gray-500">
              System stable
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 text-[10px] font-semibold text-white">
              S
            </span>
          </div>
        </div>

        <div className="space-y-3 p-4 lg:p-5">
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-md border border-gray-200 bg-white p-3.5 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.86)]"
              >
                <p className="text-[11px] font-medium text-gray-500">{k.label}</p>
                <p className="mt-1.5 text-[23px] font-semibold tabular-nums text-ink-900">
                  {k.value}
                  {k.unit && (
                    <span className="text-[13px] font-medium text-gray-400">
                      {k.unit}
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-[11px] tabular-nums">
                  <span className="font-medium text-delta-up">{k.delta}</span>{" "}
                  <span className="text-gray-400">vs last 30 days</span>
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 xl:grid-cols-3">
            <div className="rounded-md border border-gray-200 bg-white p-4 xl:col-span-2">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[13px] font-semibold text-ink-900">
                  Framework Score Over Time
                </p>
                <span className="rounded-sm border border-gray-200 px-2 py-1 text-[10px] font-medium text-gray-500">
                  Last 30 days
                </span>
              </div>
              <ScoreChart />
            </div>
            <div className="flex flex-col rounded-md border border-gray-200 bg-white p-4">
              <p className="text-overline-s text-gray-500">Top insight</p>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-600">
                Semantic clarity and structural consistency are improving
                across your content.
              </p>
              <p className="mt-auto pt-4 text-[12px] font-medium text-blue-600">
                View insight {"→"}
              </p>
            </div>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between pb-3">
              <p className="text-[13px] font-semibold text-ink-900">
                Recent Evaluations
              </p>
              <span className="text-[12px] font-medium text-blue-600">
                View all -&gt;
              </span>
            </div>
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_auto_auto]">
              <span className="text-overline-s border-b border-gray-100 pb-2 text-gray-400">
                Entity
              </span>
              <span className="text-overline-s hidden border-b border-gray-100 pb-2 text-gray-400 md:block">
                Type
              </span>
              <span className="text-overline-s border-b border-gray-100 pb-2 text-right text-gray-400">
                Score
              </span>
              <span className="text-overline-s border-b border-gray-100 pb-2 text-right text-gray-400">
                Date
              </span>
              {evaluations.map((row, i) => {
                const border = i < evaluations.length - 1 ? "border-b border-gray-100" : "";
                return (
                  <div key={row.entity} className="contents">
                    <span className={`truncate py-2.5 text-[13px] font-medium text-ink-900 ${border}`}>
                      {row.entity}
                    </span>
                    <span className={`hidden py-2.5 text-[13px] text-gray-500 md:block ${border}`}>
                      {row.type}
                    </span>
                    <span className={`py-2.5 text-right text-[13px] font-semibold tabular-nums text-ink-900 ${border}`}>
                      {row.score}
                    </span>
                    <span className={`py-2.5 text-right text-[13px] tabular-nums text-gray-500 ${border}`}>
                      {row.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
