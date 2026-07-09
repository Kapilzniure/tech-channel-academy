import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import type { Episode } from "@/data/episodes";

export function EpisodeCard({ ep }: { ep: Episode }) {
  return (
    <article className="group flex flex-col rounded-xl border border-border/70 bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_40px_-15px_rgba(20,184,166,0.25)]">
      <Link
        to="/episodes/$slug"
        params={{ slug: ep.slug }}
        className="block aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-secondary via-card to-background"
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-primary/25 tracking-tighter">
            {ep.title.charAt(0)}
          </span>
        </div>
      </Link>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{ep.date}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {ep.readTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold leading-snug text-foreground">
          <Link to="/episodes/$slug" params={{ slug: ep.slug }} className="hover:text-primary transition-colors">
            {ep.title}
          </Link>
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {ep.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border/60"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {ep.excerpt}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/60">
          <span className="text-xs text-muted-foreground">{ep.author}</span>
          <Link
            to="/episodes/$slug"
            params={{ slug: ep.slug }}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
          >
            Read Episode <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
