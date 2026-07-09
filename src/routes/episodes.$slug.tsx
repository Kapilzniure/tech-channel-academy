import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Clock, Share2, Twitter, Linkedin, LinkIcon, Radio, Check } from "lucide-react";
import { motion } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Button } from "@/components/ui/button";
import { episodes, type Episode } from "@/data/episodes";

export const Route = createFileRoute("/episodes/$slug")({
  loader: ({ params }) => {
    const episode = episodes.find((e) => e.slug === params.slug);
    if (!episode) throw notFound();
    const txIndex = episodes.findIndex((e) => e.slug === params.slug);
    const txNum = `TX-${String(episodes.length - txIndex).padStart(3, "0")}`;
    return { episode, txNum };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Transmission not found" }, { name: "robots", content: "noindex" }] };
    }
    const { episode } = loaderData;
    return {
      meta: [
        { title: `${episode.title} — The Transmission` },
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
          <p className="font-display text-8xl font-bold text-primary/10 mb-4">∅</p>
          <h1 className="font-display text-3xl font-bold">Transmission not found</h1>
          <p className="mt-3 text-muted-foreground">This transmission may have moved or been rescheduled.</p>
          <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/episodes">Back to Archive</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function EpisodePage() {
  const { episode, txNum } = Route.useLoaderData() as { episode: Episode; txNum: string };
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

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

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const copyLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard?.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const related = episodes.filter((e) => e.slug !== episode.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-transparent z-40">
        <div
          className="h-full bg-gradient-to-r from-primary/80 via-primary to-cyan-400 transition-[width] duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <main className="flex-1">
        <article>
          {/* Hero header */}
          <div className="relative border-b border-border/30 overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 70% 50%, oklch(0.78 0.17 182 / 0.07), transparent 65%)",
                }}
                className="absolute inset-0"
              />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(oklch(0.78 0.17 182) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.17 182) 1px, transparent 1px)`,
                  backgroundSize: "48px 48px",
                }}
              />
            </div>

            <div className="container-page max-w-4xl pt-14 pb-12">
              <Link
                to="/episodes"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" /> Signal Archive
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <span className="font-display text-xs font-bold tracking-widest text-primary/70 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                    {txNum}
                  </span>
                  {episode.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  {episode.title}
                </h1>

                <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {episode.excerpt}
                </p>

                <div className="mt-7 flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold font-display">
                      BP
                    </div>
                    <span className="font-medium text-foreground">{episode.author}</span>
                  </div>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{episode.date}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {episode.readTime}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Cover visual */}
          <div className="container-page max-w-4xl">
            <div className="relative mt-10 aspect-[21/9] rounded-2xl overflow-hidden border border-border/40 bg-card">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.78_0.17_182/0.18),transparent_60%)]" />
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(oklch(0.78 0.17 182) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.17 182) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[10rem] font-bold text-primary/8 tracking-tighter leading-none select-none">
                  {episode.title.charAt(0)}
                </span>
              </div>
              {/* TX number badge */}
              <div className="absolute top-5 left-6 font-display text-sm font-bold tracking-widest text-primary/50">
                {txNum}
              </div>
            </div>
          </div>

          {/* Article body */}
          <div className="container-page max-w-3xl mt-14 pb-24">
            <div className="text-foreground/90 leading-relaxed">
              {episode.content
                .trim()
                .split(/\n\n+/)
                .map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-display mt-14 mb-5 text-2xl md:text-3xl font-bold tracking-tight text-foreground"
                      >
                        {block.replace(/^##\s+/, "")}
                      </h2>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="mb-6 text-base md:text-[17px] leading-[1.8] text-muted-foreground"
                    >
                      {block}
                    </p>
                  );
                })}
            </div>

            {/* Share bar */}
            <div className="mt-16 pt-8 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Share2 className="h-4 w-4" />
                Share this transmission
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(episode.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on X / Twitter"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card hover:border-primary/40 hover:text-primary transition-all hover:-translate-y-0.5"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card hover:border-primary/40 hover:text-primary transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  onClick={copyLink}
                  aria-label="Copy link"
                  className={`grid h-9 w-9 place-items-center rounded-lg border transition-all hover:-translate-y-0.5 ${
                    copied
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "border-border/60 bg-card hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Author card */}
            <aside className="mt-10 rounded-2xl border border-border/40 bg-card overflow-hidden">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="p-7 flex flex-col sm:flex-row items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/25 text-primary text-xl font-bold font-display">
                  BP
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Transmitted by</p>
                  <h3 className="font-display text-lg font-bold">{episode.author}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Developer, trainer and automation practitioner. Helping people cut
                    busywork and ship real projects with AI in the loop — from Kathmandu, Nepal.
                  </p>
                </div>
                <Button variant="outline" className="border-border/60 shrink-0 gap-1.5">
                  Follow <Radio className="h-3.5 w-3.5 text-primary" />
                </Button>
              </div>
            </aside>
          </div>
        </article>

        {/* Related transmissions */}
        <section className="py-20 border-t border-border/30">
          <div className="container-page">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                  Keep Reading
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  Related Transmissions
                </h2>
              </div>
              <Link
                to="/episodes"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                All transmissions <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <EpisodeCard key={r.slug} ep={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
