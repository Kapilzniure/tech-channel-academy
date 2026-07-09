import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  GitBranch,
  Sparkles,
  Server,
  Code2,
  TrendingUp,
  Check,
  Radio,
  Zap,
  Play,
  Clock,
  Star,
  BookOpen,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { episodes, topics, tools, courses } from "@/data/episodes";
import { JoinModal } from "@/components/site/JoinModal";
import { BookModal } from "@/components/site/BookModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Transmission — Practical AI, Automation & Self-Hosting" },
      {
        name: "description",
        content:
          "Premium guides on AI, automation, self-hosting and development — by Bishworaj Poudel.",
      },
      { property: "og:title", content: "The Transmission" },
    ],
  }),
  component: Home,
});

const iconMap = { Workflow, GitBranch, Sparkles, Server, Code2, TrendingUp } as const;

function Home() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero onJoin={() => setJoinOpen(true)} />
        <LatestEpisodes />
        <Topics />
        <Creator onBook={() => setBookOpen(true)} />
        <Academy />
        <Newsletter onJoin={() => setJoinOpen(true)} />
      </main>
      <Footer />
      <JoinModal open={joinOpen} onOpenChange={setJoinOpen} />
      <BookModal open={bookOpen} onOpenChange={setBookOpen} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────── */
function Hero({ onJoin }: { onJoin: () => void }) {
  const latest = episodes.slice(0, 3);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* ── background ── */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 65% 40%, oklch(0.78 0.17 182 / 0.09), transparent 60%), radial-gradient(ellipse 50% 60% at 10% 90%, oklch(0.55 0.14 200 / 0.06), transparent 55%)",
          }}
        />
        {/* dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.78 0.17 182 / 0.12) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* fade edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
      </div>

      <div className="container-page w-full pt-10 pb-16 grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">
        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary mb-8 tracking-wide">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            New episode every week
          </div>

          <h1 className="font-display leading-[0.95] tracking-tight">
            <span className="block text-5xl sm:text-6xl xl:text-7xl font-bold text-foreground">
              Practical AI,
            </span>
            <span
              className="block text-5xl sm:text-6xl xl:text-7xl font-bold mt-1"
              style={{
                background: "linear-gradient(100deg, oklch(0.82 0.18 182), oklch(0.72 0.2 196), oklch(0.65 0.18 210))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Automation
            </span>
            <span className="block text-5xl sm:text-6xl xl:text-7xl font-bold text-foreground mt-1">
              & Self-Hosting.
            </span>
          </h1>

          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-lg">
            High-quality guides to master the tools and workflows that actually
            matter — made simple by Bishworaj Poudel from Kathmandu, Nepal.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 px-7 text-[15px] font-display font-bold bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-[0_0_32px_oklch(0.78_0.17_182/0.35)] hover:shadow-[0_0_48px_oklch(0.78_0.17_182/0.45)] transition-shadow"
            >
              <Link to="/episodes">
                <Play className="h-4 w-4 fill-current" />
                Browse Episodes
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onJoin}
              className="h-12 px-7 text-[15px] font-semibold border-border/50 bg-transparent hover:bg-white/5 gap-2"
            >
              <Radio className="h-4 w-4 text-primary" />
              Join Free
            </Button>
          </div>

          {/* stats row */}
          <div className="mt-12 flex items-center gap-8 flex-wrap">
            {[
              { n: `${episodes.length}+`, l: "Episodes published" },
              { n: "2K+", l: "Newsletter readers" },
              { n: "Weekly", l: "New content" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-foreground">{s.n}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — floating episode cards ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative h-[520px]"
        >
          {latest.map((ep, i) => (
            <motion.div
              key={ep.slug}
              initial={{ opacity: 0, y: 20 + i * 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="absolute"
              style={{
                top: i === 0 ? "0px" : i === 1 ? "160px" : "300px",
                left: i === 0 ? "60px" : i === 1 ? "0px" : "80px",
                right: i === 0 ? "0px" : i === 1 ? "40px" : "0px",
                zIndex: 3 - i,
              }}
            >
              <HeroEpisodeCard ep={ep} index={i} />
            </motion.div>
          ))}

          {/* ambient glow behind cards */}
          <div
            className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, oklch(0.78 0.17 182 / 0.4), transparent 60%)",
            }}
          />
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* mini card for hero */
function HeroEpisodeCard({ ep, index }: { ep: (typeof episodes)[0]; index: number }) {
  const tagColors = ["from-teal-500/30 to-cyan-600/10", "from-violet-500/25 to-indigo-600/8", "from-emerald-500/25 to-teal-500/8"];
  const accent = tagColors[index % tagColors.length];
  const txNum = `TX-00${episodes.length - episodes.findIndex((e) => e.slug === ep.slug)}`;

  return (
    <Link
      to="/episodes/$slug"
      params={{ slug: ep.slug }}
      className="flex gap-4 items-start rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 group"
    >
      {/* thumbnail */}
      <div className={`shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br ${accent} border border-white/8 flex items-center justify-center`}>
        <span className="font-display text-xl font-bold text-primary/60">{ep.title.charAt(0)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-bold tracking-widest text-primary/60 font-display">{txNum}</span>
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            <Clock className="h-2.5 w-2.5" />{ep.readTime}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {ep.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{ep.date}</p>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   LATEST EPISODES
───────────────────────────────────────────────────────────────────── */
function LatestEpisodes() {
  const featured = episodes[0];
  const rest = episodes.slice(1);

  return (
    <section id="episodes" className="py-24 border-t border-white/5">
      <div className="container-page">
        {/* header */}
        <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Latest Content</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Latest Episodes</h2>
          </div>
          <Button asChild variant="outline" className="border-border/40 gap-2 hover:border-primary/30">
            <Link to="/episodes">All Episodes <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        {/* layout: featured + side stack */}
        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          {/* Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <EpisodeCard ep={featured} index={0} featured />
          </motion.div>

          {/* side stack */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 3).map((ep, i) => (
              <motion.div
                key={ep.slug}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                <EpisodeCard ep={ep} index={i + 1} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* bottom row */}
        {rest.length > 3 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(3).map((ep, i) => (
              <motion.div
                key={ep.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <EpisodeCard ep={ep} index={i + 4} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   TOPICS
───────────────────────────────────────────────────────────────────── */
function Topics() {
  return (
    <section id="topics" className="py-24 border-t border-white/5">
      <div className="container-page">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Explore by Topic</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Browse Categories</h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Six focused tracks. Pick one and go deep.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => {
            const Icon = iconMap[t.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={t.slug}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative flex items-center gap-4 rounded-2xl border border-white/7 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/35 hover:bg-white/[0.055] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_oklch(0.78_0.17_182/0.12)] overflow-hidden"
              >
                {/* hover glow bg */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 0% 50%, oklch(0.78 0.17 182 / 0.06), transparent 60%)" }}
                />

                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all group-hover:border-primary/35 group-hover:bg-primary/15">
                  <Icon className="h-5 w-5" />
                </span>

                <div className="relative flex-1 min-w-0">
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Browse episodes →</p>
                </div>

                <ArrowUpRight className="relative h-4 w-4 text-muted-foreground/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   CREATOR
───────────────────────────────────────────────────────────────────── */
function Creator({ onBook }: { onBook: () => void }) {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="container-page">
        <div className="relative rounded-3xl border border-white/7 overflow-hidden">
          {/* background */}
          <div className="absolute inset-0 bg-white/[0.025]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 100% 0%, oklch(0.78 0.17 182 / 0.1), transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, oklch(0.55 0.14 200 / 0.07), transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, oklch(0.78 0.17 182) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_1.5fr] items-stretch">
            {/* visual side */}
            <div className="relative min-h-[340px] lg:min-h-0 flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="relative">
                {/* rings */}
                <div className="absolute -inset-12 rounded-full border border-primary/8 animate-[spin_25s_linear_infinite]" />
                <div className="absolute -inset-8 rounded-full border border-primary/6 animate-[spin_18s_linear_infinite_reverse]" />
                {/* glow */}
                <div className="absolute -inset-8 rounded-full bg-primary/5 blur-2xl" />
                {/* avatar */}
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-primary/25 bg-gradient-to-br from-primary/20 to-primary/5 shadow-[0_0_60px_oklch(0.78_0.17_182/0.2)]">
                  <span className="font-display text-3xl font-bold text-primary/80">BP</span>
                </div>
                {/* location chip */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-card/90 backdrop-blur px-4 py-1.5 text-xs font-medium text-foreground shadow-lg">
                  📍 Kathmandu, Nepal
                </div>
              </div>
            </div>

            {/* content side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Meet the Creator</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Bishworaj Poudel</h2>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                Developer, trainer, and automation practitioner. For the past several years
                I've been helping students and small teams cut busywork, self-host the
                tools they rely on, and ship real projects with AI in the loop.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                This channel is where I share what actually works — no hype, no churn —
                just the patterns and tools I use in my own practice, every week.
              </p>

              {/* stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 py-7 border-y border-white/7">
                {[
                  { n: "6+", l: "Years building" },
                  { n: "2K+", l: "Practitioners" },
                  { n: `${episodes.length}`, l: "Episodes" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl font-bold text-primary">{s.n}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold gap-2 shadow-[0_0_24px_oklch(0.78_0.17_182/0.3)]"
                  onClick={onBook}
                >
                  <Star className="h-4 w-4" /> Book a Session
                </Button>
                <Button variant="outline" className="border-border/40 gap-1.5 hover:border-primary/30">
                  Read the Story <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ACADEMY
───────────────────────────────────────────────────────────────────── */
function Academy() {
  return (
    <section id="academy" className="py-24 border-t border-white/5">
      <div className="container-page">
        <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Deep Learning</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">The Academy</h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              When a single episode isn't enough — go deep with a proper course.
            </p>
          </div>
          <Button variant="outline" className="border-border/40 gap-1.5 hover:border-primary/30">
            All Courses <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* course cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-16">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group relative flex flex-col rounded-2xl border border-white/7 bg-white/[0.03] p-7 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_oklch(0.78_0.17_182/0.1)]"
            >
              {/* background number watermark */}
              <div
                className="absolute -bottom-4 -right-2 font-display text-[7rem] font-bold leading-none select-none pointer-events-none transition-all duration-300"
                style={{ color: "oklch(0.78 0.17 182 / 0.05)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/12 text-primary border border-primary/20 mb-6">
                {c.tag}
              </span>

              <h3 className="font-display text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                {c.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{c.description}</p>

              <div className="mt-7 pt-5 border-t border-white/6 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {c.duration}
                </div>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Join <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* book 1:1 banner */}
        <div className="relative rounded-2xl border border-white/7 bg-white/[0.025] overflow-hidden p-8 md:p-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 100% 50%, oklch(0.78 0.17 182 / 0.08), transparent 55%)",
            }}
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">1-on-1 Training Sessions</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-md">
                  Private sessions tailored to your goals — automation strategy, n8n deep dives, or team workshops.
                </p>
              </div>
            </div>
            <Button className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold gap-2 shadow-[0_0_20px_oklch(0.78_0.17_182/0.25)]">
              <BookOpen className="h-4 w-4" /> Book Training
            </Button>
          </div>
        </div>

        {/* tools */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Recommended Stack</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Tools I Actually Use</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col rounded-2xl border border-white/7 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_oklch(0.78_0.17_182/0.1)]"
              >
                <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{tool.description}</p>
                <div className="mt-4 flex items-start gap-1.5 text-xs text-foreground/70">
                  <Check className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" />
                  <span>{tool.benefit}</span>
                </div>
                <a
                  href={tool.url}
                  className="mt-4 flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all group-hover:bg-primary/5"
                >
                  Get Started <ArrowUpRight className="h-3 w-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────────────────────────────────── */
function Newsletter({ onJoin }: { onJoin: () => void }) {
  const [email, setEmail] = useState("");

  return (
    <section id="community" className="py-24 border-t border-white/5">
      <div className="container-page">
        <div className="relative rounded-3xl overflow-hidden border border-white/7">
          {/* layered bg */}
          <div className="absolute inset-0 bg-white/[0.025]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 90% 10%, oklch(0.78 0.17 182 / 0.12), transparent 55%), radial-gradient(ellipse 50% 60% at 5% 90%, oklch(0.55 0.14 200 / 0.08), transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `radial-gradient(circle, oklch(0.78 0.17 182) 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />
          {/* top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative p-8 md:p-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            {/* left */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Weekly Newsletter
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Join 2,000+ Practitioners
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                One thoughtful email each week: the new episode, a tool worth trying,
                and a workflow you can copy. No fluff. Unsubscribe anytime.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Free Starter Guide on your first email",
                  "Early access to new courses and cohorts",
                  "Weekly practical tips — never generic",
                  "Exclusive tools and automation templates",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* right form */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur p-7 space-y-4">
              <div>
                <p className="font-display font-bold text-lg">Get the newsletter — free</p>
                <p className="text-sm text-muted-foreground mt-1">Trusted by practitioners in 40+ countries.</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); onJoin(); }} className="space-y-3">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-11 bg-white/5 border-white/10 focus-visible:ring-primary/30 text-sm"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold gap-2 shadow-[0_0_24px_oklch(0.78_0.17_182/0.3)] hover:shadow-[0_0_32px_oklch(0.78_0.17_182/0.4)] transition-shadow"
                >
                  <Zap className="h-4 w-4" /> Subscribe — It's Free
                </Button>
              </form>
              <p className="text-[11px] text-muted-foreground text-center">
                No spam. One email per week. Unsubscribe in one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
