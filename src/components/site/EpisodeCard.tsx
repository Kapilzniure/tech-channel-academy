import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Episode } from "@/data/episodes";
import { episodes } from "@/data/episodes";
import { EpisodeArtwork } from "./EpisodeArtwork";

function getTxNum(ep: Episode): string {
  const idx = episodes.findIndex((e) => e.slug === ep.slug);
  return `TX-${String(episodes.length - idx).padStart(3, "0")}`;
}

interface EpisodeCardProps {
  ep: Episode;
  index?: number;
  featured?: boolean;
}

export function EpisodeCard({ ep, index = 0, featured = false }: EpisodeCardProps) {
  const txNum = getTxNum(ep);

  if (featured) {
    return (
      <article className="group relative flex flex-col rounded-2xl border border-white/7 bg-white/[0.03] overflow-hidden transition-all duration-500 hover:border-primary/35 hover:-translate-y-1 hover:shadow-[0_24px_64px_oklch(0.78_0.17_182/0.15)]">
        {/* top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* visual header */}
        <Link
          to="/episodes/$slug"
          params={{ slug: ep.slug }}
          className="block aspect-[16/8] relative overflow-hidden"
        >
          <EpisodeArtwork
            seed={ep.slug}
            paletteIndex={index}
            variant="banner"
            label={txNum}
            initial={ep.title.charAt(0)}
            className="transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </Link>

        {/* content */}
        <div className="flex flex-col gap-4 p-7 flex-1">
          <div className="flex flex-wrap gap-2">
            {ep.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/18"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="font-display text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
            <Link to="/episodes/$slug" params={{ slug: ep.slug }}>
              {ep.title}
            </Link>
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">{ep.excerpt}</p>

          <div className="mt-auto pt-5 border-t border-white/6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{ep.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {ep.readTime}
              </span>
            </div>
            <Link
              to="/episodes/$slug"
              params={{ slug: ep.slug }}
              className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all"
            >
              Read <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  /* ── compact card ── */
  return (
    <article className="group relative flex gap-4 rounded-xl border border-white/7 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.05] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_oklch(0.78_0.17_182/0.1)] overflow-hidden h-full">
      {/* hover glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, oklch(0.78 0.17 182 / 0.04), transparent 60%)",
        }}
      />

      {/* thumbnail */}
      <Link
        to="/episodes/$slug"
        params={{ slug: ep.slug }}
        className="relative shrink-0 h-16 w-16 rounded-xl border border-white/8 overflow-hidden"
      >
        <EpisodeArtwork
          seed={ep.slug}
          paletteIndex={index}
          variant="thumb"
          initial={ep.title.charAt(0)}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </Link>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="font-display text-[10px] font-bold tracking-widest text-primary/60">
            {txNum}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            <Clock className="h-2.5 w-2.5" />
            {ep.readTime}
          </span>
        </div>

        <h3 className="font-display text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
          <Link to="/episodes/$slug" params={{ slug: ep.slug }}>
            {ep.title}
          </Link>
        </h3>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-[11px] text-muted-foreground">{ep.date}</span>
          <Link
            to="/episodes/$slug"
            params={{ slug: ep.slug }}
            className="inline-flex items-center gap-0.5 text-[11px] font-bold text-primary/70 group-hover:text-primary group-hover:gap-1 transition-all"
          >
            Read <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
