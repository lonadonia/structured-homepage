import Image from "next/image";

type StructuredVisualProps = {
  className?: string;
  id?: string;
  preserveAspectRatio?: string;
  still?: boolean;
  annotated?: boolean;
  preload?: boolean;
};

/**
 * Cached presentation wrapper for the canonical chaos-to-lattice artwork.
 * The static SVG keeps the exact geometry without repeating hundreds of SVG
 * nodes in the page HTML each time the visual appears.
 */
export default function StructuredVisual({
  className = "",
  id,
  preserveAspectRatio = "xMidYMid meet",
  still = false,
  annotated = false,
  preload = false,
}: StructuredVisualProps) {
  const fit = preserveAspectRatio.includes("slice")
    ? "object-cover"
    : "object-contain";

  return (
    <div id={id} className={`relative ${className}`} aria-hidden="true">
      <Image
        src="/structured-visuals/chaos-to-lattice.svg"
        alt=""
        fill
        sizes="100vw"
        loading={preload ? "eager" : "lazy"}
        fetchPriority={preload ? "high" : "auto"}
        unoptimized
        className={`${fit} ${still ? "" : "lattice-drift"}`}
      />

      {annotated && (
        <div className="absolute right-[3%] top-[45%] hidden items-start gap-3 lg:flex">
          <span className="mt-2 h-px w-12 origin-right -rotate-45 bg-indigo-400/55" />
          <span className="text-overline-s flex flex-col gap-1 text-gray-300">
            <span>Entity 128</span>
            <span className="text-indigo-400">Resolved</span>
          </span>
        </div>
      )}
    </div>
  );
}
