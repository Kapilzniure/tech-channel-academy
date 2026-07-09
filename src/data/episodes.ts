export type Episode = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  author: string;
  content: string;
};

export const episodes: Episode[] = [
  {
    slug: "what-is-automation-simple-practical-guide",
    title: "What is Automation? A Simple, Practical Guide",
    date: "Feb 11, 2026",
    readTime: "2 min read",
    tags: ["Automation", "Beginners", "Guide"],
    excerpt:
      "Automation replaces repetitive manual work with software that runs reliably in the background. Here is a plain-English tour of what it is, where it helps, and how to start.",
    author: "Bishworaj Poudel",
    content: `
Automation is the practice of letting software handle the repetitive, rule-based tasks that would otherwise consume your day. It is not artificial intelligence — it is a set of predictable steps that a computer can execute faster, more accurately, and around the clock.

## Why automation matters

Every business runs on small workflows: moving a form entry into a spreadsheet, sending a reminder email, syncing a customer between two apps. Individually they are trivial. Together, they eat entire afternoons. Automation lets you reclaim that time.

## Where to start

Look for a task you do at least three times per week that follows the same steps. That is your first candidate. Map the steps on paper, then translate each one into a trigger and an action inside a tool like n8n or Zapier.

## What to expect

Your first workflow will feel small — and that is the point. Confidence compounds. Within a month, you will spot automation opportunities everywhere.
`,
  },
  {
    slug: "how-to-setup-n8n-to-own-domain",
    title: "How to Setup n8n to Own Domain",
    date: "Feb 4, 2026",
    readTime: "6 min read",
    tags: ["n8n", "Self-Hosting", "DevOps"],
    excerpt:
      "A calm, step-by-step walkthrough for pointing your own domain at a self-hosted n8n instance, with HTTPS via Caddy and clean DNS records.",
    author: "Bishworaj Poudel",
    content: `
Running n8n on your own domain feels professional and unlocks webhooks that external services can reach. This guide keeps the moving parts minimal.

## What you need

A VPS (a small DigitalOcean droplet is plenty), a registered domain, and about thirty focused minutes.

## Step 1 — DNS

Create an A record for your subdomain pointing at your server's public IP. Give propagation a few minutes.

## Step 2 — Reverse proxy

Caddy is the easiest option. It fetches TLS certificates automatically and reloads on config changes.

## Step 3 — Run n8n

Use the official Docker image with a persistent volume for your workflows. Restart the container after every environment change.

## Step 4 — Verify

Open your domain in a private window. You should see the n8n login screen served over HTTPS.
`,
  },
  {
    slug: "n8n-for-beginners-complete-guide",
    title: "n8n For Beginners: Complete Guide to Workflow Automation",
    date: "Jan 26, 2026",
    readTime: "14 min read",
    tags: ["n8n", "Automation", "Tutorial"],
    excerpt:
      "The long-form introduction I wish existed when I started with n8n — nodes, triggers, credentials, and the mental model for building workflows that survive real use.",
    author: "Bishworaj Poudel",
    content: `
n8n is a fair-code workflow tool that lets you connect services with a visual editor. If you have used Zapier or Make, the shape will feel familiar — but n8n runs on your own infrastructure and gives you far more control.

## The mental model

Every workflow starts with a trigger, moves data through a series of nodes, and ends with one or more actions. Data flows as JSON. If you can read JSON, you can debug any workflow.

## Credentials

Store API keys inside n8n's credential vault, not inside individual nodes. This keeps secrets portable and easy to rotate.

## Error handling

Wrap fragile branches in an Error Trigger workflow. Notify yourself in Slack or email the moment something breaks — silence is the enemy of automation.
`,
  },
  {
    slug: "how-to-create-slides-using-ai",
    title: "How to Create Slides Using AI",
    date: "Jan 2, 2026",
    readTime: "3 min read",
    tags: ["AI Tools", "Productivity"],
    excerpt:
      "A short workflow for turning a rough outline into a polished slide deck using AI — without the generic template look.",
    author: "Bishworaj Poudel",
    content: `
Slides are storytelling. AI can accelerate the boring parts — layout, wording, imagery — but the argument still has to be yours.

## The workflow

Draft a one-line thesis. Ask the model for a section outline. Refine until it feels sharp. Only then generate slide-level copy and imagery.

## Keep it honest

Read every generated line out loud. If it sounds like a brochure, rewrite it in your own voice.
`,
  },
  {
    slug: "best-tools-for-ai-automation",
    title: "Best Tools For AI Automation",
    date: "Jan 1, 2026",
    readTime: "4 min read",
    tags: ["AI Tools", "Automation", "Tools"],
    excerpt:
      "A curated list of the tools I actually reach for when combining large language models with real-world workflows.",
    author: "Bishworaj Poudel",
    content: `
The AI tooling landscape is noisy. These are the pieces that have earned a permanent slot in my stack.

## Orchestration

n8n for visual workflows. LangChain when I need programmatic control.

## Models

A hosted frontier model for hard reasoning, a small open model for cheap batch work.

## Storage

A vector database for retrieval, a plain Postgres table for everything else. Do not over-architect.
`,
  },
  {
    slug: "git-and-github-training-in-nepal",
    title: "Git and GitHub Training in Nepal",
    date: "Nov 21, 2025",
    readTime: "3 min read",
    tags: ["Git", "Training", "Career"],
    excerpt:
      "Details about the in-person Git and GitHub training I run in Nepal — who it is for, what we cover, and how to join the next cohort.",
    author: "Bishworaj Poudel",
    content: `
Version control is the single most leveraged skill a developer can learn. This training exists to give students and early-career engineers a rock-solid foundation.

## What we cover

The mental model of commits, branches, and merges. Real-world team workflows. Pull requests, code review, and the small habits that keep repositories healthy.

## Who it is for

Students, bootcamp grads, and self-taught developers who want to work confidently in a team.
`,
  },
];

export const topics = [
  { slug: "automation", title: "Automation", icon: "Workflow" },
  { slug: "n8n-workflows", title: "n8n & Workflows", icon: "GitBranch" },
  { slug: "ai-tools", title: "AI Tools", icon: "Sparkles" },
  { slug: "self-hosting", title: "Self-Hosting", icon: "Server" },
  { slug: "git-development", title: "Git & Development", icon: "Code2" },
  { slug: "career-growth", title: "Career Growth", icon: "TrendingUp" },
];

export const tools = [
  {
    name: "n8n",
    description: "Self-hostable workflow automation. The engine behind most of my systems.",
    benefit: "Fair-code, unlimited workflows, full data ownership.",
    url: "#",
  },
  {
    name: "DigitalOcean",
    description: "Simple, reliable cloud VPS hosting for self-hosted tools.",
    benefit: "Predictable pricing, one-click apps, excellent docs.",
    url: "#",
  },
  {
    name: "Cloudflare",
    description: "DNS, CDN, and edge security in one calm dashboard.",
    benefit: "Free tier covers most personal and small-team needs.",
    url: "#",
  },
  {
    name: "Notion",
    description: "The knowledge base I connect to almost every workflow.",
    benefit: "Flexible schema, clean API, great for content pipelines.",
    url: "#",
  },
];

export const courses = [
  {
    title: "Git & GitHub Training",
    description:
      "A live, cohort-based program covering the version-control skills every developer needs on a real team.",
    duration: "3 weeks • Live sessions",
    tag: "Cohort",
  },
  {
    title: "n8n Automation Mastery",
    description:
      "Build production-ready workflows from scratch. Triggers, credentials, error handling, and deployment.",
    duration: "5 weeks • Self-paced + Q&A",
    tag: "Featured",
  },
  {
    title: "AI for Practitioners",
    description:
      "How to combine large language models with automation to build tools that actually ship.",
    duration: "Coming soon",
    tag: "New",
  },
];
