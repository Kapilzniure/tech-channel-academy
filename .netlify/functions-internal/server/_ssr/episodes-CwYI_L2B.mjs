//#region node_modules/.nitro/vite/services/ssr/assets/episodes-CwYI_L2B.js
var episodes = [
	{
		slug: "how-ai-search-really-works",
		title: "How AI Search Really Works: A Simple, Practical Guide",
		date: "Feb 18, 2026",
		readTime: "4 min read",
		tags: [
			"AI",
			"Search",
			"Guide"
		],
		image: "/images/ai_search.png",
		excerpt: "A deep dive into the mechanisms behind AI search engines. Understand how vector embeddings and retrieval-augmented generation are transforming how we find information online.",
		author: "Bishworaj Poudel",
		content: `
AI search is not just a better keyword matcher — it is a fundamental shift in how computers understand human intent. Instead of looking for exact strings of text, modern AI search engines use vector embeddings to understand the semantic meaning of your query.

## The Role of RAG

Retrieval-Augmented Generation (RAG) is the secret sauce. When you ask a question, the system first retrieves relevant documents from a massive database, then feeds those documents to a large language model to synthesize a coherent, accurate answer.

## Why it matters

This means you can ask complex, multi-part questions and get answers that are actually synthesized from multiple sources, rather than just a list of blue links you have to comb through yourself.
`
	},
	{
		slug: "what-is-automation",
		title: "What is Automation? A Simple, Practical Guide",
		date: "Feb 11, 2026",
		readTime: "2 min read",
		tags: [
			"Automation",
			"Beginners",
			"Guide"
		],
		image: "/images/automation.png",
		excerpt: "Automation replaces repetitive manual work with software that runs reliably in the background. Here is a plain-English tour of what it is, where it helps, and how to start.",
		author: "Bishworaj Poudel",
		content: `
Automation is the practice of letting software handle the repetitive, rule-based tasks that would otherwise consume your day. It is not artificial intelligence — it is a set of predictable steps that a computer can execute faster, more accurately, and around the clock.

## Why automation matters

Every business runs on small workflows: moving a form entry into a spreadsheet, sending a reminder email, syncing a customer between two apps. Individually they are trivial. Together, they eat entire afternoons. Automation lets you reclaim that time.
`
	},
	{
		slug: "how-to-setup-n8n-to-own-domain",
		title: "How to Setup n8n to Own Domain",
		date: "Feb 4, 2026",
		readTime: "6 min read",
		tags: [
			"n8n",
			"Self-Hosting",
			"DevOps"
		],
		image: "/images/n8n_setup.png",
		excerpt: "A calm, step-by-step walkthrough for pointing your own domain at a self-hosted n8n instance, with HTTPS via Caddy and clean DNS records.",
		author: "Bishworaj Poudel",
		content: `
Running n8n on your own domain feels professional and unlocks webhooks that external services can reach. This guide keeps the moving parts minimal.

## What you need

A VPS (a small DigitalOcean droplet is plenty), a registered domain, and about thirty focused minutes.
`
	},
	{
		slug: "n8n-for-beginners",
		title: "n8n For Beginners: Complete Guide to Workflow Automation",
		date: "Jan 26, 2026",
		readTime: "14 min read",
		tags: [
			"n8n",
			"Automation",
			"Tutorial"
		],
		image: "/images/n8n_beginners.png",
		excerpt: "The long-form introduction I wish existed when I started with n8n — nodes, triggers, credentials, and the mental model for building workflows that survive real use.",
		author: "Bishworaj Poudel",
		content: `
n8n is a fair-code workflow tool that lets you connect services with a visual editor. If you have used Zapier or Make, the shape will feel familiar — but n8n runs on your own infrastructure and gives you far more control.

## The mental model

Every workflow starts with a trigger, moves data through a series of nodes, and ends with one or more actions. Data flows as JSON. If you can read JSON, you can debug any workflow.
`
	},
	{
		slug: "how-to-create-slides-using-ai",
		title: "How to Create Slides Using AI",
		date: "Jan 2, 2026",
		readTime: "3 min read",
		tags: ["AI Tools", "Productivity"],
		image: "/images/ai_slides.png",
		excerpt: "A short workflow for turning a rough outline into a polished slide deck using AI — without the generic template look.",
		author: "Bishworaj Poudel",
		content: `
Slides are storytelling. AI can accelerate the boring parts — layout, wording, imagery — but the argument still has to be yours.

## The workflow

Draft a one-line thesis. Ask the model for a section outline. Refine until it feels sharp. Only then generate slide-level copy and imagery.
`
	},
	{
		slug: "best-tools-for-ai-automation",
		title: "Best Tools For AI Automation",
		date: "Jan 1, 2026",
		readTime: "4 min read",
		tags: [
			"AI Tools",
			"Automation",
			"Tools"
		],
		image: "/images/ai_tools.png",
		excerpt: "A curated list of the tools I actually reach for when combining large language models with real-world workflows.",
		author: "Bishworaj Poudel",
		content: `
The AI tooling landscape is noisy. These are the pieces that have earned a permanent slot in my stack.

## Orchestration

n8n for visual workflows. LangChain when I need programmatic control.
`
	}
];
//#endregion
export { episodes as t };
