import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Workflow,
  GitBranch,
  Sparkles,
  Server,
  Code2,
  TrendingUp,
  Check,
  Mail,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { episodes, topics, tools, courses } from "@/data/episodes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Technology Channel — Practical AI, Automation & Self-Hosting" },
      {
        name: "description",
        content:
          "Practical guides to master AI, automation, self-hosting and development — made simple by Bishworaj Poudel.",
      },
      { property: "og:title", content: "Technology Channel" },
      {
        property: "og:description",
        content: "Practical guides to master AI, automation, self-hosting and development.",
      },
    ],
  }),
  component: Home,
});

const iconMap = { Workflow, GitBranch, Sparkles, Server, Code2, TrendingUp } as const;

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LatestEpisodes />
        <Topics />
        <Creator />
        <Tools />
        <Academy />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 -z-10 w-full opacity-[0.15]"
        viewBox="0 0 1200 300"
        fill="none"
      >
        <path d="M0 150 Q 300 60 600 150 T 1200 150" stroke="currentColor" strokeWidth="1" className="text-primary" />
        <path d="M0 200 Q 300 110 600 200 T 1200 200" stroke="currentColor" strokeWidth="1" className="text-primary/70" />
      </svg>

      <div className="container-page pt-24 pb-24 md:pt-32 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            New episodes every week
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Technology Channel
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Practical guides to master AI, automation, self-hosting and development —
            made simple.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-44">
              <Link to="/episodes">
                Browse Episodes <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-transparent hover:bg-secondary min-w-44"
            >
              <a href="#community">Get Free Starter Guide</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LatestEpisodes() {
  return (
    <section id="episodes" className="py-20 md:py-24">
      <div className="container-page">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">The Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Latest Episodes</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Fresh notes from the workshop — automation, AI, self-hosting and the small
            engineering decisions that compound.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <EpisodeCard ep={ep} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-border">
            <Link to="/episodes">View All Episodes <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Topics() {
  return (
    <section id="topics" className="py-20 md:py-24 border-t border-border/60">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Explore by Topic</h2>
          <p className="mt-3 text-muted-foreground">
            Six focused tracks. Pick one and go deep.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => {
            const Icon = iconMap[t.icon as keyof typeof iconMap];
            return (
              <a
                key={t.slug}
                href="#"
                className="group flex items-center gap-4 rounded-xl border border-border/70 bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Explore episodes</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Creator() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-border/60">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary via-card to-background border border-border/60 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_60%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-8xl font-bold text-primary/30 tracking-tighter">BP</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 hidden md:block rounded-xl border border-border/60 bg-card px-4 py-3 shadow-lg">
            <p className="text-xs text-muted-foreground">Based in</p>
            <p className="text-sm font-semibold">Kathmandu, Nepal</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Meet the Creator</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Bishworaj Poudel</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I'm a developer, trainer, and automation practitioner. For the past several
            years I've been helping students and small teams cut busywork, self-host the
            tools they rely on, and ship real projects with AI in the loop.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Technology Channel is where I share what actually works — no hype, no
            churn — just the patterns and tools I use in my own practice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Work With Me
            </Button>
            <Button variant="outline" className="border-border">
              Read the Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="py-20 md:py-24 border-t border-border/60">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recommended Tools</h2>
          <p className="mt-3 text-muted-foreground">
            The tools I personally use and recommend to students. Some links are
            affiliate — they support the channel at no extra cost to you.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col rounded-xl border border-border/70 bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-semibold">{tool.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {tool.description}
              </p>
              <p className="mt-4 inline-flex items-start gap-2 text-xs text-foreground/80">
                <Check className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" />
                <span>{tool.benefit}</span>
              </p>
              <a
                href={tool.url}
                className="mt-5 inline-flex items-center justify-between rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
              >
                Get Started <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground/70">
                Affiliate link
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" className="py-20 md:py-24 border-t border-border/60">
      <div className="container-page">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Academy</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Structured, Cohort-Based Learning</h2>
            <p className="mt-3 text-muted-foreground">
              When a single article isn't enough — go deep with a proper course.
            </p>
          </div>
          <Button variant="outline" className="border-border">All Courses</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl border border-border/70 bg-card p-7 transition-all hover:border-primary/40 hover:-translate-y-0.5"
            >
              <span className="self-start text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-primary/15 text-primary">
                {c.tag}
              </span>
              <h3 className="mt-5 text-xl font-semibold leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {c.description}
              </p>
              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{c.duration}</span>
                <a href="#" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="py-20 md:py-24 border-t border-border/60">
      <div className="container-page">
        <div className="rounded-2xl border border-border/70 bg-card p-8 md:p-14 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(50% 60% at 100% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-3">Newsletter</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Join the Community</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                One thoughtful email each week: the new episode, a tool worth trying,
                and a workflow you can copy. No fluff, unsubscribe anytime.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Free starter guide on your first email",
                  "Early access to new courses",
                  "Weekly practical tips — never generic",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-foreground/80">
                    <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl border border-border/70 bg-background/60 p-6 space-y-3"
            >
              <label className="text-sm font-medium">Your email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="pl-9 bg-secondary/40 border-border h-11"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
              <p className="text-[11px] text-muted-foreground text-center">
                Join 2,000+ practitioners. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
