import { useMemo } from "react";

/**
 * Generative "signal" artwork for a transmission.
 * Each episode gets a deterministic, on-brand composition (broadcast rings,
 * a live waveform and scattered signal nodes) derived from its slug — so every
 * card feels custom-designed rather than a repeated template.
 */

const palettes = [
  { a: "#2dd4bf", b: "#06b6d4" }, // teal → cyan
  { a: "#818cf8", b: "#6366f1" }, // indigo
  { a: "#34d399", b: "#14b8a6" }, // emerald → teal
  { a: "#38bdf8", b: "#3b82f6" }, // sky → blue
  { a: "#e879f9", b: "#a855f7" }, // fuchsia
  { a: "#fb923c", b: "#f59e0b" }, // amber
];

function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

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

interface EpisodeArtworkProps {
  seed: string;
  paletteIndex?: number;
  /** Big landscape header (featured card / article cover) vs. small square thumbnail. */
  variant?: "banner" | "thumb";
  label?: string;
  initial?: string;
  className?: string;
}

export function EpisodeArtwork({
  seed,
  paletteIndex = 0,
  variant = "banner",
  label,
  initial,
  className = "",
}: EpisodeArtworkProps) {
  const p = palettes[paletteIndex % palettes.length];
  const uid = useMemo(() => `art-${hashSeed(seed).toString(36)}`, [seed]);

  const model = useMemo(() => {
    const rnd = mulberry32(hashSeed(seed));
    // Focal point of the broadcast rings.
    const cx = 22 + rnd() * 30;
    const cy = 30 + rnd() * 40;
    const rings = Array.from({ length: 4 }, (_, i) => 10 + i * (12 + rnd() * 6));
    // Waveform bar heights (0..1).
    const barCount = variant === "banner" ? 34 : 18;
    const bars = Array.from({ length: barCount }, () => 0.18 + rnd() * 0.82);
    // Scattered signal nodes.
    const nodes = Array.from({ length: variant === "banner" ? 7 : 4 }, () => ({
      x: rnd() * 100,
      y: rnd() * 62,
      r: 0.6 + rnd() * 1.6,
      d: rnd() * 4,
    }));
    return { cx, cy, rings, bars, nodes };
  }, [seed, variant]);

  const isBanner = variant === "banner";
  const vbW = 100;
  const vbH = isBanner ? 50 : 60;
  const barW = vbW / model.bars.length;
  const baseY = vbH - 4;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p.a} stopOpacity="0.22" />
            <stop offset="55%" stopColor={p.b} stopOpacity="0.08" />
            <stop offset="100%" stopColor="#05070d" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${uid}-wave`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.a} stopOpacity="0.9" />
            <stop offset="100%" stopColor={p.b} stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={p.a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={p.a} stopOpacity="0" />
          </radialGradient>
          <pattern id={`${uid}-dots`} width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.45" fill="#ffffff" opacity="0.08" />
          </pattern>
        </defs>

        {/* base */}
        <rect width={vbW} height={vbH} fill={`url(#${uid}-bg)`} />
        <rect width={vbW} height={vbH} fill={`url(#${uid}-dots)`} />

        {/* focal glow */}
        <circle cx={model.cx} cy={model.cy} r={isBanner ? 34 : 26} fill={`url(#${uid}-glow)`} />

        {/* broadcast rings */}
        <g fill="none" stroke={p.a} style={{ transformOrigin: `${model.cx}px ${model.cy}px` }}>
          {model.rings.map((r, i) => (
            <circle
              key={i}
              cx={model.cx}
              cy={model.cy}
              r={r}
              strokeOpacity={0.32 - i * 0.055}
              strokeWidth={0.5}
            />
          ))}
          <circle cx={model.cx} cy={model.cy} r={1.7} fill={p.a} stroke="none" />
        </g>

        {/* signal nodes */}
        {model.nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={p.a}
            opacity={0.55}
            style={{
              animation: `art-twinkle 3.2s ease-in-out ${n.d}s infinite`,
            }}
          />
        ))}

        {/* waveform */}
        <g>
          {model.bars.map((h, i) => {
            const bh = h * (isBanner ? 24 : 22);
            return (
              <rect
                key={i}
                x={i * barW + barW * 0.22}
                y={baseY - bh}
                width={barW * 0.56}
                height={bh}
                rx={barW * 0.28}
                fill={`url(#${uid}-wave)`}
                style={{
                  transformOrigin: `${i * barW + barW / 2}px ${baseY}px`,
                  animation: `art-bar 2.6s ease-in-out ${(i % 9) * 0.16}s infinite`,
                }}
              />
            );
          })}
        </g>

        {/* baseline */}
        <line
          x1="0"
          y1={baseY}
          x2={vbW}
          y2={baseY}
          stroke={p.a}
          strokeOpacity="0.25"
          strokeWidth="0.4"
        />
      </svg>

      {/* Big faint initial */}
      {initial && (
        <span
          className={`pointer-events-none absolute select-none font-display font-bold leading-none text-white/[0.06] ${
            isBanner ? "bottom-3 right-5 text-[7rem]" : "bottom-1 right-2 text-[3.2rem]"
          }`}
        >
          {initial}
        </span>
      )}

      {/* TX label */}
      {label && isBanner && (
        <span className="pointer-events-none absolute left-5 top-4 font-display text-[11px] font-bold tracking-[0.25em] text-white/45">
          {label}
        </span>
      )}
    </div>
  );
}
