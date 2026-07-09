import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Episode } from "@/data/episodes";
import { episodes } from "@/data/episodes";

function getTransmissionNumber(ep: Episode): string {
  const idx = episodes.findIndex((e) => e.slug === ep.slug);
  return `TX-${String(episodes.length - idx).padStart(3, "0")}`;
}

// Color accents cycling per card
const accentColors = [
  "from-teal-500/20 to-cyan-600/5",
  "from-violet-500/20 to-indigo-600/5",
  "from-emerald-500/20 to-teal-600/5",
  "from-sky-500/20 to-blue-600/5",
  "from-fuchsia-500/20 to-purple-600/5",
  "from-orange-500/15 to-amber-600/5",
];

interface EpisodeCardProps {
  ep: Episode;
  index?: number;
  featured?: boolean;
}

export function EpisodeCard({ ep, index = 0, featured = false }: EpisodeCardProps) {
  const txNum = getTransmissionNumber(ep);
  const accent = accentColors[index % accentColors.length];

  if (featured) {
    return (
      <article className="group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(20,184,166,0.2)]">
        {/* Visual header */}
        <Link
          to="/episodes/$slug"
          params={{ slug: ep.slug }}
          className={`block aspect-[16/8] relative overflow-hidden bg-gradient-to-br ${accent}`}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(oklch(0.78 0.17 182 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.17 182 / 0.04) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.78_0.17_182/0.15),transparent_60%)]" />
          {/* TX number */}
          <div className="absolute top-4 left-5 font-display text-xs font-bold tracking-widest text-primary/70">
            {txNum}
          </div>
          {/* Big initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[7rem] font-bold text-primary/10 tracking-tighter leading-none select-none">
              {ep.title.charAt(0)}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col gap-4 p-7 flex-1">
          <div className="flex flex-wrap gap-2">
            {ep.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="font-display text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
            <Link to="/episodes/$slug" params={{ slug: ep.slug }}>
              {ep.title}
            </Link>
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">{ep.excerpt}</p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/40">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{ep.date}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {ep.readTime}
              </span>
            </div>
            <Link
              to="/episodes/$slug"
              params={{ slug: ep.slug }}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
            >
              Read <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_10px_40px_-15px_rgba(20,184,166,0.15)]">
      {/* Thin accent line */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${accent.replace("from-", "from-").replace("/20", "/60").replace("/5", "/0")}`} />

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-display text-[10px] font-bold tracking-widest text-primary/60">
            {txNum}
          </span>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" /> {ep.readTime}
          </div>
        </div>

        <h3 className="font-display text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
          <Link to="/episodes/$slug" params={{ slug: ep.slug }}>
            {ep.title}
          </Link>
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{ep.excerpt}</p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {ep.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 flex items-center justify-between border-t border-border/40">
          <span className="text-[11px] text-muted-foreground">{ep.date}</span>
          <Link
            to="/episodes/$slug"
            params={{ slug: ep.slug }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all"
          >
            Read <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
