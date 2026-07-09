import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Input } from "@/components/ui/input";
import { episodes } from "@/data/episodes";

export const Route = createFileRoute("/episodes/")({
  head: () => ({
    meta: [
      { title: "All Episodes — Technology Channel" },
      {
        name: "description",
        content: "Browse every episode from Technology Channel — AI, automation, self-hosting and development.",
      },
      { property: "og:title", content: "All Episodes — Technology Channel" },
      { property: "og:description", content: "Browse every episode from Technology Channel." },
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
        !term ||
        e.title.toLowerCase().includes(term) ||
        e.excerpt.toLowerCase().includes(term);
      const matchesTag = !tag || e.tags.includes(tag);
      return matchesQ && matchesTag;
    });
  }, [q, tag]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-20 border-b border-border/60">
          <div className="container-page max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Library</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All Episodes</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Every guide, tutorial and note — filter by topic or search.
            </p>

            <div className="mt-10 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search episodes…"
                className="pl-11 h-12 bg-card border-border"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => setTag(null)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                  tag === null
                    ? "bg-primary/15 text-primary border-primary/40"
                    : "bg-card border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(tag === t ? null : t)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                    tag === t
                      ? "bg-primary/15 text-primary border-primary/40"
                      : "bg-card border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-page">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                No episodes match your filters yet.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((ep) => (
                  <EpisodeCard key={ep.slug} ep={ep} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
