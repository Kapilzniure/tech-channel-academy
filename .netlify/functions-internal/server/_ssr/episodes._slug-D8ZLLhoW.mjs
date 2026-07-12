import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Magnetic } from "./Magnetic-B3DEYM_e.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Linkedin, I as Clock, J as ArrowLeft, K as ArrowUpRight, U as Check, a as Twitter, f as Share2, g as Radio, w as Link$1 } from "../_libs/lucide-react.mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
import { t as episodes } from "./episodes-CwYI_L2B.mjs";
import { t as Route } from "./episodes._slug-44jYr-nU.mjs";
import { t as EpisodeCard } from "./EpisodeCard-BMcY0_Rp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/episodes._slug-D8ZLLhoW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Generative "signal" artwork for a transmission.
* Each episode gets a deterministic, on-brand composition (broadcast rings,
* a live waveform and scattered signal nodes) derived from its slug — so every
* card feels custom-designed rather than a repeated template.
*/
var palettes = [
	{
		a: "#2dd4bf",
		b: "#06b6d4"
	},
	{
		a: "#818cf8",
		b: "#6366f1"
	},
	{
		a: "#34d399",
		b: "#14b8a6"
	},
	{
		a: "#38bdf8",
		b: "#3b82f6"
	},
	{
		a: "#e879f9",
		b: "#a855f7"
	},
	{
		a: "#fb923c",
		b: "#f59e0b"
	}
];
function hashSeed(str) {
	let h = 2166136261;
	for (let i = 0; i < str.length; i++) {
		h ^= str.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function mulberry32(seed) {
	let a = seed;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function EpisodeArtwork({ seed, paletteIndex = 0, variant = "banner", label, initial, className = "" }) {
	const p = palettes[paletteIndex % palettes.length];
	const uid = (0, import_react.useMemo)(() => `art-${hashSeed(seed).toString(36)}`, [seed]);
	const model = (0, import_react.useMemo)(() => {
		const rnd = mulberry32(hashSeed(seed));
		const cx = 22 + rnd() * 30;
		const cy = 30 + rnd() * 40;
		const rings = Array.from({ length: 4 }, (_, i) => 10 + i * (12 + rnd() * 6));
		const barCount = variant === "banner" ? 34 : 18;
		return {
			cx,
			cy,
			rings,
			bars: Array.from({ length: barCount }, () => .18 + rnd() * .82),
			nodes: Array.from({ length: variant === "banner" ? 7 : 4 }, () => ({
				x: rnd() * 100,
				y: rnd() * 62,
				r: .6 + rnd() * 1.6,
				d: rnd() * 4
			}))
		};
	}, [seed, variant]);
	const isBanner = variant === "banner";
	const vbW = 100;
	const vbH = isBanner ? 50 : 60;
	const barW = vbW / model.bars.length;
	const baseY = vbH - 4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `absolute inset-0 overflow-hidden ${className}`,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${vbW} ${vbH}`,
				preserveAspectRatio: "xMidYMid slice",
				className: "h-full w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-bg`,
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: p.a,
									stopOpacity: "0.22"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "55%",
									stopColor: p.b,
									stopOpacity: "0.08"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#05070d",
									stopOpacity: "0"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-wave`,
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: p.a,
								stopOpacity: "0.9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: p.b,
								stopOpacity: "0.15"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
							id: `${uid}-glow`,
							cx: "50%",
							cy: "50%",
							r: "50%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: p.a,
								stopOpacity: "0.55"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: p.a,
								stopOpacity: "0"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
							id: `${uid}-dots`,
							width: "5",
							height: "5",
							patternUnits: "userSpaceOnUse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "1",
								cy: "1",
								r: "0.45",
								fill: "#ffffff",
								opacity: "0.08"
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: vbW,
						height: vbH,
						fill: `url(#${uid}-bg)`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: vbW,
						height: vbH,
						fill: `url(#${uid}-dots)`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: model.cx,
						cy: model.cy,
						r: isBanner ? 34 : 26,
						fill: `url(#${uid}-glow)`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "none",
						stroke: p.a,
						style: { transformOrigin: `${model.cx}px ${model.cy}px` },
						children: [model.rings.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: model.cx,
							cy: model.cy,
							r,
							strokeOpacity: .32 - i * .055,
							strokeWidth: .5
						}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: model.cx,
							cy: model.cy,
							r: 1.7,
							fill: p.a,
							stroke: "none"
						})]
					}),
					model.nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: n.x,
						cy: n.y,
						r: n.r,
						fill: p.a,
						opacity: .55,
						style: { animation: `art-twinkle 3.2s ease-in-out ${n.d}s infinite` }
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: model.bars.map((h, i) => {
						const bh = h * (isBanner ? 24 : 22);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: i * barW + barW * .22,
							y: baseY - bh,
							width: barW * .56,
							height: bh,
							rx: barW * .28,
							fill: `url(#${uid}-wave)`,
							style: {
								transformOrigin: `${i * barW + barW / 2}px ${baseY}px`,
								animation: `art-bar 2.6s ease-in-out ${i % 9 * .16}s infinite`
							}
						}, i);
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "0",
						y1: baseY,
						x2: vbW,
						y2: baseY,
						stroke: p.a,
						strokeOpacity: "0.25",
						strokeWidth: "0.4"
					})
				]
			}),
			initial && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `pointer-events-none absolute select-none font-display font-bold leading-none text-white/[0.06] ${isBanner ? "bottom-3 right-5 text-[7rem]" : "bottom-1 right-2 text-[3.2rem]"}`,
				children: initial
			}),
			label && isBanner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute left-5 top-4 font-display text-[11px] font-bold tracking-[0.25em] text-white/45",
				children: label
			})
		]
	});
}
function EpisodePage() {
	const { episode, txNum, txIndex } = Route.useLoaderData();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	const yImage = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const shareUrl = typeof window !== "undefined" ? window.location.href : "";
	const copyLink = () => {
		if (typeof navigator !== "undefined") {
			navigator.clipboard?.writeText(shareUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		}
	};
	const related = episodes.filter((e) => e.slug !== episode.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-black text-foreground relative font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise mix-blend-overlay opacity-50 z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left",
				style: {
					scaleX: scrollYProgress,
					boxShadow: "0 0 20px rgba(0,255,255,0.5)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 relative z-10 pt-24 pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pt-14 pb-20 overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "container-page max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/episodes",
								className: "inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors mb-12 font-mono uppercase tracking-widest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Signal Archive"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									ease: "easeOut"
								},
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center gap-3 mb-8 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(0,255,255,0.2)]",
											children: txNum
										}), episode.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10",
											children: t
										}, t))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "font-display text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60",
										children: episode.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-3xl mx-auto mb-10",
										children: episode.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center gap-6 text-sm text-white/40 font-mono flex-wrap border-t border-white/10 pt-8 max-w-2xl mx-auto",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold font-display shadow-[0_0_15px_rgba(0,255,255,0.2)]",
													children: "BP"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-white",
													children: episode.author
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white/20" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: episode.date }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white/20" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
													" ",
													episode.readTime
												]
											})
										]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-page max-w-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: { y: yImage },
							className: "relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_50px_100px_rgba(0,0,0,0.8)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary/10 mix-blend-overlay z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								style: { scale: scaleImage },
								className: "w-full h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EpisodeArtwork, {
									seed: episode.slug,
									paletteIndex: txIndex,
									variant: "banner",
									label: txNum,
									initial: episode.title.charAt(0),
									className: "w-full h-full object-cover"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page max-w-3xl mt-24 pb-24 relative z-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "prose prose-invert prose-lg md:prose-xl max-w-none text-white/70 leading-relaxed font-light prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
								children: episode.content.trim().split(/\n\n+/).map((block, i) => {
									if (block.startsWith("## ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-16 mb-8 text-3xl md:text-4xl tracking-tight",
										children: block.replace(/^##\s+/, "")
									}, i);
									if (block.startsWith("```")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-10 rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center px-4 py-3 border-b border-white/10 bg-black/50",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-yellow-500/80" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-green-500/80" })
												]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-6 overflow-x-auto text-sm font-mono text-primary/80",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: block.replace(/```[a-z]*\n/, "").replace(/```$/, "") })
										})]
									}, i);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-8",
										children: block
									}, i);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-sm text-white/50 font-mono tracking-widest uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), "Share Transmission"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(episode.title)}&url=${encodeURIComponent(shareUrl)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-black transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-5 w-5" })
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-black transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: copyLink,
											className: `flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${copied ? "border-primary bg-primary text-black" : "border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-black"}`,
											children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { className: "h-5 w-5" })
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "mt-16 rounded-[2rem] border border-white/5 glass-panel overflow-hidden relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/20 border border-primary/40 text-primary text-2xl font-bold font-display shadow-[0_0_30px_rgba(0,255,255,0.2)]",
											children: "BP"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-mono uppercase tracking-widest text-white/40 mb-2",
													children: "Transmitted by"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl font-bold text-white mb-3",
													children: episode.author
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-white/60 leading-relaxed font-light",
													children: "System Architect and Educator. Helping developers bridge the gap between theoretical computer science and practical, world-changing applications."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "shrink-0 mt-4 sm:mt-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 text-white transition-colors text-sm font-bold uppercase tracking-widest",
												children: ["Follow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "h-4 w-4 text-primary" })]
											}) })
										})
									]
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "pt-24 border-t border-white/10 mt-12 bg-black/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between mb-16 gap-4 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-mono uppercase tracking-widest text-primary mb-3",
								children: "System Archives"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-bold tracking-tight text-white",
								children: "Related Transmissions"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/episodes",
								className: "inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/50 hover:text-primary transition-all",
								children: ["All transmissions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
							children: related.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									margin: "-50px"
								},
								transition: {
									duration: .6,
									delay: i * .1
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EpisodeCard, {
									ep: r,
									index: i
								})
							}, r.slug))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { EpisodePage as component };
