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
  Star,
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
          "A premium broadcast on AI, automation, self-hosting and development — by Bishworaj Poudel.",
      },
      { property: "og:title", content: "The Transmission" },
      {
        property: "og:description",
        content: "Premium guides on AI, automation, self-hosting and development.",
      },
    ],
  }),
  component: Home,
});

const iconMap = { Workflow, GitBranch, Sparkles, Server, Code2, TrendingUp } as const;

// Frequency "Hz" numbers for topics
const frequencyMap: Record<string, string> = {
  automation: "88.4",
  "n8n-workflows": "92.1",
  "ai-tools": "104.5",
  "self-hosting": "96.8",
  "git-development": "100.3",
  "career-growth": "107.9",
};

function Home() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero onJoin={() => setJoinOpen(true)} />
        <LatestTransmissions />
        <Frequencies />
        <TheStudio onBook={() => setBookOpen(true)} />
        <Academy />
        <JoinTransmission onJoin={() => setJoinOpen(true)} />
      </main>
      <Footer />
      <JoinModal open={joinOpen} onOpenChange={setJoinOpen} />
      <BookModal open={bookOpen} onOpenChange={setBookOpen} />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────── */
function Hero({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Deep radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 50%, oklch(0.78 0.17 182 / 0.07), transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, oklch(0.6 0.15 200 / 0.05), transparent 60%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.78 0.17 182) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.17 182) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Waveform bands */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-[0.07]"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 Q 180 40 360 100 T 720 100 T 1080 100 T 1440 100"
            stroke="oklch(0.78 0.17 182)"
            strokeWidth="1.5"
          />
          <path
            d="M0 130 Q 200 70 400 130 T 800 130 T 1200 130 T 1440 130"
            stroke="oklch(0.78 0.17 182)"
            strokeWidth="1"
          />
          <path
            d="M0 160 Q 160 100 320 160 T 640 160 T 960 160 T 1280 160 T 1440 160"
            stroke="oklch(0.78 0.17 182)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container-page w-full pt-16 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3.5 py-1.5 text-xs font-medium text-primary mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Now transmitting — new episode weekly
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            <span className="block text-foreground">THE</span>
            <span className="block bg-gradient-to-r from-primary via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              TRANS
            </span>
            <span className="block text-foreground">MISSION</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
            A premium broadcast on practical AI, automation, and self-hosting.
            Real tools. Real workflows. No hype — just what actually ships.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold gap-2 h-12 px-7 text-base"
            >
              <Link to="/episodes">
                <Play className="h-4 w-4 fill-current" />
                Explore Transmissions
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/60 bg-transparent hover:bg-secondary font-semibold h-12 px-7 text-base gap-2"
              onClick={onJoin}
            >
              <Radio className="h-4 w-4 text-primary" />
              Join the Frequency
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            {[
              { value: `${episodes.length}+`, label: "Transmissions" },
              { value: "2K+", label: "Practitioners" },
              { value: "Weekly", label: "New Signal" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — signal visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm aspect-square">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-primary/8 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border border-primary/12" />

            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-primary/10 blur-2xl animate-[pulse_3s_ease-in-out_infinite]" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Radio className="h-10 w-10 text-primary" />
                </div>
              </div>
            </div>

            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={deg}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `rotate(${deg}deg)` }}
              >
                <div
                  className="absolute w-2.5 h-2.5 rounded-full bg-primary/50"
                  style={{ top: "8px", opacity: 0.4 + i * 0.1 }}
                />
              </div>
            ))}

            {/* Waveform bars */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-primary/40 rounded-full"
                  style={{
                    height: `${20 + Math.sin(i * 0.8) * 20 + 10}px`,
                    animationDelay: `${i * 0.12}s`,
                    animation: "waveform 1.5s ease-in-out infinite",
                  }}
                />
              ))}
            </div>

            {/* TX badge */}
            <div className="absolute top-4 right-0 rounded-xl border border-border/60 bg-card/80 backdrop-blur px-3 py-2">
              <p className="font-display text-[10px] tracking-widest text-muted-foreground">LATEST</p>
              <p className="font-display text-sm font-bold text-primary">
                TX-00{episodes.length}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Latest Transmissions ─────────────────────────────────────────── */
function LatestTransmissions() {
  const featured = episodes[0];
  const rest = episodes.slice(1, 6);

  return (
    <section id="episodes" className="py-24 border-t border-border/30">
      <div className="container-page">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              Latest Signal
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Latest Transmissions
            </h2>
          </div>
          <Button asChild variant="outline" className="border-border/60 gap-1.5">
            <Link to="/episodes">
              All transmissions <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Asymmetric layout */}
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <EpisodeCard ep={featured} index={0} featured />
          </motion.div>

          {/* Stack of 2 */}
          <div className="flex flex-col gap-5">
            {rest.slice(0, 2).map((ep, i) => (
              <motion.div
                key={ep.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
                className="flex-1"
              >
                <EpisodeCard ep={ep} index={i + 1} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row of 3 */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((ep, i) => (
            <motion.div
              key={ep.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <EpisodeCard ep={ep} index={i + 3} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Frequencies (Topics) ─────────────────────────────────────────── */
function Frequencies() {
  return (
    <section id="topics" className="py-24 border-t border-border/30 overflow-hidden">
      <div className="container-page">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Tune In
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            The Frequencies
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Six focused tracks. Find your signal and go deep.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal spectrum line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent hidden lg:block" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t, i) => {
              const Icon = iconMap[t.icon as keyof typeof iconMap];
              const freq = frequencyMap[t.slug] ?? "99.9";
              return (
                <motion.a
                  key={t.slug}
                  href="#"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group relative flex items-center gap-5 rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[oklch(0.16_0.025_258)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(20,184,166,0.15)]"
                >
                  {/* Freq indicator */}
                  <div className="absolute top-3 right-4 font-display text-[10px] font-bold tracking-widest text-muted-foreground/40 group-hover:text-primary/50 transition-colors">
                    {freq} FM
                  </div>

                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Explore transmissions →
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── The Studio (Creator) ─────────────────────────────────────────── */
function TheStudio({ onBook }: { onBook: () => void }) {
  return (
    <section id="about" className="py-24 border-t border-border/30">
      <div className="container-page">
        <div className="rounded-2xl border border-border/40 bg-card overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.6fr]">
            {/* Visual side */}
            <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden bg-[oklch(0.12_0.025_258)]">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.78_0.17_182/0.12),transparent_65%)]" />
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(oklch(0.78 0.17 182) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.17 182) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-12 bg-primary/5 rounded-full blur-3xl" />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                    <span className="font-display text-4xl font-bold text-primary/70">BP</span>
                  </div>
                </div>
              </div>
              {/* Location badge */}
              <div className="absolute bottom-5 left-5 rounded-lg border border-border/50 bg-card/80 backdrop-blur px-4 py-2.5">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Broadcasting from</p>
                <p className="font-display text-sm font-bold text-foreground">Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                The Studio
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Bishworaj Poudel
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Developer, trainer, and automation practitioner. For the past several years
                I've been helping students and small teams cut busywork, self-host the tools
                they rely on, and ship real projects with AI in the loop.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The Transmission is where I share what actually works — no hype, no churn —
                just the patterns and tools I use in my own practice, every week.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 py-6 border-y border-border/40">
                {[
                  { n: "6+", l: "Years building" },
                  { n: "2K+", l: "Practitioners" },
                  { n: `${episodes.length}`, l: "Transmissions" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl font-bold text-primary">{s.n}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold font-display gap-2"
                  onClick={onBook}
                >
                  <Star className="h-4 w-4" />
                  Book a Session
                </Button>
                <Button variant="outline" className="border-border/60 gap-1.5">
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

/* ── Academy ──────────────────────────────────────────────────────── */
function Academy() {
  return (
    <section id="academy" className="py-24 border-t border-border/30">
      <div className="container-page">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              Deep Learning
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              The Academy
            </h2>
            <p className="mt-3 text-muted-foreground">
              When a single transmission isn't enough — go deep with a proper course.
            </p>
          </div>
          <Button variant="outline" className="border-border/60 gap-1.5">
            All Courses <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(20,184,166,0.15)] overflow-hidden"
            >
              {/* Course number watermark */}
              <div className="absolute top-4 right-5 font-display text-6xl font-bold text-primary/5 group-hover:text-primary/8 transition-colors leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <span className="self-start text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/12 text-primary border border-primary/20 mb-5">
                {c.tag}
              </span>

              <h3 className="font-display text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                {c.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {c.description}
              </p>

              <div className="mt-7 pt-5 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{c.duration}</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  Join Course <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools section */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Recommended Stack</p>
            <h3 className="font-display text-2xl font-bold">Tools I Actually Use</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30 hover:-translate-y-0.5"
              >
                <h4 className="font-display font-bold text-foreground">{tool.name}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                <p className="mt-3 flex items-start gap-1.5 text-xs text-foreground/70">
                  <Check className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" />
                  {tool.benefit}
                </p>
                <a
                  href={tool.url}
                  className="mt-4 flex items-center justify-between rounded-lg border border-border/50 bg-secondary/50 px-3 py-2 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-colors"
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

/* ── Join the Transmission (Newsletter) ───────────────────────────── */
function JoinTransmission({ onJoin }: { onJoin: () => void }) {
  const [email, setEmail] = useState("");

  return (
    <section id="community" className="py-24 border-t border-border/30">
      <div className="container-page">
        <div className="relative rounded-2xl overflow-hidden border border-border/40">
          {/* Background */}
          <div className="absolute inset-0 bg-card" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 100% 0%, oklch(0.78 0.17 182 / 0.1), transparent 60%), radial-gradient(ellipse 50% 60% at 0% 100%, oklch(0.6 0.15 200 / 0.07), transparent 60%)",
            }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(oklch(0.78 0.17 182) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.17 182) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative p-8 md:p-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-semibold mb-5">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
                Live on Air
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Join the Transmission
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                One precise signal per week: the new episode, a tool worth trying,
                and a workflow you can copy. No filler. No noise. Unsubscribe anytime.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Free Starter Guide on sign-up",
                  "Early access to new courses and cohorts",
                  "Weekly practical tips — never generic",
                  "Exclusive tools and automation templates",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/50 bg-background/60 backdrop-blur p-7 space-y-4">
              <div>
                <p className="font-display font-bold text-lg">Tune in — it's free</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Joining 2,000+ practitioners from around the world.
                </p>
              </div>
              <form
                onSubmit={(e) => { e.preventDefault(); onJoin(); }}
                className="space-y-3"
              >
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-11 bg-secondary/60 border-border text-sm"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold gap-2 h-11"
                >
                  <Zap className="h-4 w-4" />
                  Join the Frequency — Free
                </Button>
              </form>
              <p className="text-[11px] text-muted-foreground text-center">
                No spam. Unsubscribe anytime with one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
