import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Radio, X } from "lucide-react";
import { motion } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Input } from "@/components/ui/input";
import { episodes } from "@/data/episodes";

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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative py-20 md:py-28 border-b border-border/30 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.78 0.17 182 / 0.07), transparent 65%)",
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

          <div className="container-page max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-semibold mb-5">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
                Signal Archive
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
                All Transmissions
              </h1>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl">
                Every guide, tutorial, and field note — {episodes.length} transmissions and
                counting. Filter by topic or search the archive.
              </p>
            </motion.div>

            {/* Search */}
            <div className="mt-10 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search transmissions…"
                className="pl-11 h-12 bg-card border-border/60 focus-visible:ring-primary/30 text-sm"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Tag filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setTag(null)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                  tag === null
                    ? "bg-primary/15 text-primary border-primary/40 shadow-[0_0_12px_oklch(0.78_0.17_182/0.2)]"
                    : "bg-card border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                All
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(tag === t ? null : t)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                    tag === t
                      ? "bg-primary/15 text-primary border-primary/40 shadow-[0_0_12px_oklch(0.78_0.17_182/0.2)]"
                      : "bg-card border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/20"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16">
          <div className="container-page">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <div className="font-display text-6xl font-bold text-primary/10 mb-4">∅</div>
                <p className="text-muted-foreground">No transmissions match your search.</p>
                <button
                  onClick={() => {
                    setQ("");
                    setTag(null);
                  }}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-muted-foreground mb-6 font-medium">
                  {filtered.length} transmission{filtered.length !== 1 ? "s" : ""}
                  {tag ? ` in "${tag}"` : ""}
                  {q ? ` matching "${q}"` : ""}
                </p>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((ep, i) => (
                    <motion.div
                      key={ep.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                    >
                      <EpisodeCard ep={ep} index={i} />
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
