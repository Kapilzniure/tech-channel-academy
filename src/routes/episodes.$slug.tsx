import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Clock, Share2, Twitter, Linkedin, LinkIcon } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Button } from "@/components/ui/button";
import { episodes, type Episode } from "@/data/episodes";

export const Route = createFileRoute("/episodes/$slug")({
  loader: ({ params }) => {
    const episode = episodes.find((e) => e.slug === params.slug);
    if (!episode) throw notFound();
    return { episode };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Episode not found" }, { name: "robots", content: "noindex" }] };
    }
    const { episode } = loaderData;
    return {
      meta: [
        { title: `${episode.title} — Technology Channel` },
        { name: "description", content: episode.excerpt },
        { property: "og:title", content: episode.title },
        { property: "og:description", content: episode.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: EpisodePage,
});

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 grid place-items-center py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Episode not found</h1>
          <p className="mt-3 text-muted-foreground">This episode may have moved or been unpublished.</p>
          <Button asChild className="mt-6"><Link to="/episodes">Back to episodes</Link></Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function EpisodePage() {
  const { episode } = Route.useLoaderData();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(1, h.scrollTop / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const related = episodes.filter((e) => e.slug !== episode.slug).slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const copyLink = () => {
    if (typeof navigator !== "undefined") navigator.clipboard?.writeText(shareUrl);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-transparent z-40">
        <div
          className="h-full bg-primary transition-[width] duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <main className="flex-1">
        <article className="pt-16 pb-24">
          <div className="container-page max-w-3xl">
            <Link
              to="/episodes"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All episodes
            </Link>

            <div className="mt-8 flex flex-wrap gap-2">
              {episode.tags.map((t) => (
                <span key={t} className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border/60">
                  {t}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {episode.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{episode.author}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span>{episode.date}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {episode.readTime}</span>
            </div>

            <div className="mt-10 aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-secondary via-card to-background border border-border/60 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-8xl font-bold text-primary/25 tracking-tighter">{episode.title.charAt(0)}</span>
              </div>
            </div>

            <div className="prose-content mt-12 text-foreground/90 leading-relaxed">
              {episode.content
                .trim()
                .split(/\n\n+/)
                .map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2 key={i} className="mt-12 mb-4 text-2xl font-bold tracking-tight">
                        {block.replace(/^##\s+/, "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="mb-5 text-base md:text-[17px] leading-[1.75]">
                      {block}
                    </p>
                  );
                })}
            </div>

            <div className="mt-14 pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Share2 className="h-4 w-4" /> Share this episode
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(episode.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card hover:border-primary/40 hover:text-primary transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card hover:border-primary/40 hover:text-primary transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  onClick={copyLink}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card hover:border-primary/40 hover:text-primary transition-colors"
                  aria-label="Copy link"
                >
                  <LinkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <aside className="mt-10 rounded-xl border border-border/70 bg-card p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary/15 text-primary text-xl font-semibold">
                BP
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">Written by</p>
                <h3 className="text-lg font-semibold">{episode.author}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Developer, trainer and automation practitioner. Helping people cut
                  busywork and ship real projects with AI in the loop.
                </p>
              </div>
              <Button variant="outline" className="border-border shrink-0">Follow</Button>
            </aside>
          </div>
        </article>

        <section className="py-16 border-t border-border/60">
          <div className="container-page">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Related Episodes</h2>
              <Link to="/episodes" className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                All episodes <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <EpisodeCard key={r.slug} ep={r} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
