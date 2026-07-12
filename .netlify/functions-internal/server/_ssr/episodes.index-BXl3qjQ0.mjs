import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { g as Radio, h as Search, r as X } from "../_libs/lucide-react.mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
import { t as NeuralNetworkCanvas } from "./NeuralNetworkCanvas-DBr5KTau.mjs";
import { t as episodes } from "./episodes-CwYI_L2B.mjs";
import { t as EpisodeCard } from "./EpisodeCard-BMcY0_Rp.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/episodes.index-BXl3qjQ0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function EpisodesPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [tag, setTag] = (0, import_react.useState)(null);
	const allTags = (0, import_react.useMemo)(() => {
		const s = /* @__PURE__ */ new Set();
		episodes.forEach((e) => e.tags.forEach((t) => s.add(t)));
		return Array.from(s).sort();
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		return episodes.filter((e) => {
			const matchesQ = !term || e.title.toLowerCase().includes(term) || e.excerpt.toLowerCase().includes(term);
			const matchesTag = !tag || e.tags.includes(tag);
			return matchesQ && matchesTag;
		});
	}, [q, tag]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-black text-foreground relative font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralNetworkCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise mix-blend-overlay opacity-50 z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 relative z-10 pt-40 pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative overflow-hidden mb-24 container-page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-4xl mx-auto text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: 1,
									ease: "easeOut"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center justify-center p-3 px-6 bg-primary/10 border border-primary/30 rounded-full mb-8 shadow-[0_0_30px_rgba(0,255,255,0.2)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "w-5 h-5 text-primary animate-pulse mr-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-mono text-sm tracking-widest uppercase",
											children: "Signal Archive"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40",
										children: [
											"ALL",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"TRANSMISSIONS"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed",
										children: [
											"Every guide, tutorial, and field note — ",
											episodes.length,
											" transmissions and counting. Filter by topic or search the archive."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: 1,
									delay: .2
								},
								className: "mt-12 relative max-w-2xl mx-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary/10 blur-xl rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative glass-panel rounded-full flex items-center p-2 border border-white/10 shadow-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-4 h-5 w-5 text-white/50" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: q,
											onChange: (e) => setQ(e.target.value),
											placeholder: "Search transmissions…",
											className: "border-0 bg-transparent text-white placeholder:text-white/30 h-14 px-4 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
										}),
										q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQ(""),
											className: "mr-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: {
									duration: 1,
									delay: .4
								},
								className: "mt-8 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTag(null),
									className: `px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-full border transition-all duration-300 ${tag === null ? "bg-primary text-black font-bold border-primary shadow-[0_0_20px_rgba(0,255,255,0.4)]" : "bg-black/50 backdrop-blur-md border-white/10 text-white/60 hover:text-white hover:border-white/30"}`,
									children: "All"
								}), allTags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTag(tag === t ? null : t),
									className: `px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-full border transition-all duration-300 ${tag === t ? "bg-primary text-black font-bold border-primary shadow-[0_0_20px_rgba(0,255,255,0.4)]" : "bg-black/50 backdrop-blur-md border-white/10 text-white/60 hover:text-white hover:border-white/30"}`,
									children: t
								}, t))]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "container-page",
					children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-32 glass-panel rounded-3xl border border-white/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-8xl font-black text-white/5 mb-6",
								children: "∅"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl text-white/40 mb-6 font-light",
								children: "No transmissions match your search parameters."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setQ("");
									setTag(null);
								},
								className: "inline-flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white transition-colors",
								children: "Reset Systems"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-end mb-12 border-b border-white/10 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-mono uppercase tracking-widest text-primary",
							children: [
								filtered.length,
								" Transmission",
								filtered.length !== 1 ? "s" : ""
							]
						}), (tag || q) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono uppercase tracking-widest text-white/40",
							children: "Filtered"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: filtered.map((ep, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 50
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: i * .1,
								type: "spring"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EpisodeCard, {
								ep,
								index: i,
								featured: i === 0 && !tag && !q
							})
						}, ep.slug))
					})] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { EpisodesPage as component };
