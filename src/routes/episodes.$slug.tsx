import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  LinkIcon,
  Radio,
  Check,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Navigation, Footer } from "./index";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { EpisodeArtwork } from "@/components/site/EpisodeArtwork";
import { episodes, type Episode } from "@/data/episodes";
import NeuralNetworkCanvas from "../components/ui/NeuralNetworkCanvas";
import Magnetic from "../components/ui/Magnetic";

export const Route = createFileRoute("/episodes/$slug")({
  loader: ({ params }) => {
    const episode = episodes.find((e) => e.slug === params.slug);
    if (!episode) throw notFound();
    const txIndex = episodes.findIndex((e) => e.slug === params.slug);
    const txNum = `TX-${String(episodes.length - txIndex).padStart(3, "0")}`;
    return { episode, txNum, txIndex };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Transmission not found" }, { name: "robots", content: "noindex" }],
      };
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
    <div className="min-h-screen flex flex-col bg-black text-foreground relative font-sans">
      <NeuralNetworkCanvas />
      <div className="bg-noise mix-blend-overlay opacity-50 z-0" />
      <Navigation />
      <div className="flex-1 grid place-items-center py-24 relative z-10">
        <div className="text-center glass-panel p-16 rounded-[3rem] border border-white/5">
          <p className="font-display text-8xl font-black text-white/5 mb-6">∅</p>
          <h1 className="font-display text-4xl font-bold text-white mb-4">Transmission Not Found</h1>
          <p className="text-white/50 mb-8 font-light">
            This transmission may have moved or been rescheduled in the archive.
          </p>
          <Link to="/episodes" className="inline-flex items-center px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-105 transition-transform">
            Back to Archive
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function EpisodePage() {
  const { episode, txNum, txIndex } = Route.useLoaderData() as {
    episode: Episode;
    txNum: string;
    txIndex: number;
  };
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 300]);

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
    <div className="min-h-screen flex flex-col bg-black text-foreground relative font-sans">
      <div className="bg-noise mix-blend-overlay opacity-50 z-0" />
      <Navigation />

      {/* Reading progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
      />

      <main className="flex-1 relative z-10 pt-24 pb-32">
        <article>
          {/* Hero header */}
          <div className="relative pt-14 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />

            <div className="container-page max-w-5xl">
              <Link
                to="/episodes"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors mb-12 font-mono uppercase tracking-widest"
              >
                <ArrowLeft className="h-4 w-4" /> Signal Archive
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                  <span className="font-mono text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                    {txNum}
                  </span>
                  {episode.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                  {episode.title}
                </h1>

                <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-3xl mx-auto mb-10">
                  {episode.excerpt}
                </p>

                <div className="flex items-center justify-center gap-6 text-sm text-white/40 font-mono flex-wrap border-t border-white/10 pt-8 max-w-2xl mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold font-display shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                      BP
                    </div>
                    <span className="text-white">{episode.author}</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span>{episode.date}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {episode.readTime}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Cover visual */}
          <div className="container-page max-w-6xl">
            <motion.div 
              style={{ y: yImage }}
              className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <motion.div style={{ scale: scaleImage }} className="w-full h-full">
                <EpisodeArtwork
                  seed={episode.slug}
                  paletteIndex={txIndex}
                  variant="banner"
                  label={txNum}
                  initial={episode.title.charAt(0)}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Article body */}
          <div className="container-page max-w-3xl mt-24 pb-24 relative z-20">
            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-white/70 leading-relaxed font-light prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {episode.content
                .trim()
                .split(/\n\n+/)
                .map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="mt-16 mb-8 text-3xl md:text-4xl tracking-tight"
                      >
                        {block.replace(/^##\s+/, "")}
                      </h2>
                    );
                  }
                  if (block.startsWith("```")) {
                    // Primitive code block handling for aesthetic
                    return (
                      <div key={i} className="my-10 rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d]">
                        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-black/50">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                        </div>
                        <div className="p-6 overflow-x-auto text-sm font-mono text-primary/80">
                          <pre>{block.replace(/```[a-z]*\n/, "").replace(/```$/, "")}</pre>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="mb-8">
                      {block}
                    </p>
                  );
                })}
            </div>

            {/* Share bar */}
            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-sm text-white/50 font-mono tracking-widest uppercase">
                <Share2 className="h-4 w-4" />
                Share Transmission
              </div>
              <div className="flex items-center gap-4">
                <Magnetic>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(episode.title)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-black transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-black transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <button
                    onClick={copyLink}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      copied
                        ? "border-primary bg-primary text-black"
                        : "border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-black"
                    }`}
                  >
                    {copied ? <Check className="h-5 w-5" /> : <LinkIcon className="h-5 w-5" />}
                  </button>
                </Magnetic>
              </div>
            </div>

            {/* Author card */}
            <aside className="mt-16 rounded-[2rem] border border-white/5 glass-panel overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/20 border border-primary/40 text-primary text-2xl font-bold font-display shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                  BP
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                    Transmitted by
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{episode.author}</h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    System Architect and Educator. Helping developers bridge the gap between theoretical computer science and practical, world-changing applications.
                  </p>
                </div>
                <div className="shrink-0 mt-4 sm:mt-0">
                  <Magnetic>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 text-white transition-colors text-sm font-bold uppercase tracking-widest">
                      Follow <Radio className="h-4 w-4 text-primary" />
                    </button>
                  </Magnetic>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Related transmissions */}
        <section className="pt-24 border-t border-white/10 mt-12 bg-black/50">
          <div className="container-page">
            <div className="flex items-end justify-between mb-16 gap-4 flex-wrap">
              <div>
                <p className="text-sm font-mono uppercase tracking-widest text-primary mb-3">
                  System Archives
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Related Transmissions
                </h2>
              </div>
              <Link
                to="/episodes"
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/50 hover:text-primary transition-all"
              >
                All transmissions <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <EpisodeCard ep={r} index={i} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
