import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Radio, X } from "lucide-react";
import { motion } from "motion/react";
import { Navigation, Footer } from "./index";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Input } from "@/components/ui/input";
import { episodes } from "@/data/episodes";
import NeuralNetworkCanvas from "../components/ui/NeuralNetworkCanvas";

export const Route = createFileRoute("/episodes/")({
  head: () => ({
    meta: [
      { title: "All Transmissions — The Transmission" },
      {
        name: "description",
        content:
          "Browse every transmission — AI, automation, self-hosting and development by Bishworaj Poudel.",
      },
      { property: "og:title", content: "All Transmissions" },
    ],
  }),
  component: EpisodesPage,
});

function EpisodesPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    episodes.forEach((e) => e.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return episodes.filter((e) => {
      const matchesQ =
        !term || e.title.toLowerCase().includes(term) || e.excerpt.toLowerCase().includes(term);
      const matchesTag = !tag || e.tags.includes(tag);
      return matchesQ && matchesTag;
    });
  }, [q, tag]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-foreground relative font-sans">
      <NeuralNetworkCanvas />
      <div className="bg-noise mix-blend-overlay opacity-50 z-0" />
      <Navigation />

      <main className="flex-1 relative z-10 pt-40 pb-32">
        {/* Header */}
        <section className="relative overflow-hidden mb-24 container-page">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center justify-center p-3 px-6 bg-primary/10 border border-primary/30 rounded-full mb-8 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                <Radio className="w-5 h-5 text-primary animate-pulse mr-3" />
                <span className="text-primary font-mono text-sm tracking-widest uppercase">Signal Archive</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                ALL<br/>TRANSMISSIONS
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                Every guide, tutorial, and field note — {episodes.length} transmissions and
                counting. Filter by topic or search the archive.
              </p>
            </motion.div>

            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-12 relative max-w-2xl mx-auto"
            >
              <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
              <div className="relative glass-panel rounded-full flex items-center p-2 border border-white/10 shadow-2xl">
                <Search className="ml-4 h-5 w-5 text-white/50" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search transmissions…"
                  className="border-0 bg-transparent text-white placeholder:text-white/30 h-14 px-4 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {q && (
                  <button
                    onClick={() => setQ("")}
                    className="mr-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Tag filters */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            >
              <button
                onClick={() => setTag(null)}
                className={`px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-full border transition-all duration-300 ${
                  tag === null
                    ? "bg-primary text-black font-bold border-primary shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                    : "bg-black/50 backdrop-blur-md border-white/10 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                All
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(tag === t ? null : t)}
                  className={`px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-full border transition-all duration-300 ${
                    tag === t
                      ? "bg-primary text-black font-bold border-primary shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                      : "bg-black/50 backdrop-blur-md border-white/10 text-white/60 hover:text-white hover:border-white/30"
                  }`}
                >
                  {t}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="container-page">
          {filtered.length === 0 ? (
            <div className="text-center py-32 glass-panel rounded-3xl border border-white/5">
              <div className="font-display text-8xl font-black text-white/5 mb-6">∅</div>
              <p className="text-xl text-white/40 mb-6 font-light">No transmissions match your search parameters.</p>
              <button
                onClick={() => {
                  setQ("");
                  setTag(null);
                }}
                className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white transition-colors"
              >
                Reset Systems
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
                <p className="text-sm font-mono uppercase tracking-widest text-primary">
                  {filtered.length} Transmission{filtered.length !== 1 ? "s" : ""}
                </p>
                {(tag || q) && (
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Filtered
                  </p>
                )}
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((ep, i) => (
                  <motion.div
                    key={ep.slug}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                  >
                    <EpisodeCard ep={ep} index={i} featured={i === 0 && !tag && !q} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
