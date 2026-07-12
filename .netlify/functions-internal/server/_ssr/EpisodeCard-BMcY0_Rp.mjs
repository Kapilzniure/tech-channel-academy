import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useMotionValue, n as useTransform, r as useMotionTemplate, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as Clock, K as ArrowUpRight, _ as Play } from "../_libs/lucide-react.mjs";
import { t as episodes } from "./episodes-CwYI_L2B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EpisodeCard-BMcY0_Rp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getTxNum(ep) {
	const idx = episodes.findIndex((e) => e.slug === ep.slug);
	return `TX-${String(episodes.length - idx).padStart(3, "0")}`;
}
function EpisodeCard({ ep, index = 0, featured = false }) {
	const txNum = getTxNum(ep);
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseXSpring = useSpring(x, {
		stiffness: 300,
		damping: 40
	});
	const mouseYSpring = useSpring(y, {
		stiffness: 300,
		damping: 40
	});
	const maxRotation = featured ? 7 : 4;
	const rotateX = useTransform(mouseYSpring, [-.5, .5], [`${maxRotation}deg`, `-${maxRotation}deg`]);
	const rotateY = useTransform(mouseXSpring, [-.5, .5], [`-${maxRotation}deg`, `${maxRotation}deg`]);
	const background = useMotionTemplate`radial-gradient(800px circle at ${useTransform(mouseXSpring, [-.5, .5], ["0%", "100%"])} ${useTransform(mouseYSpring, [-.5, .5], ["0%", "100%"])}, rgba(0,255,255,0.06), transparent 40%)`;
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX / width - .5);
		y.set(mouseY / height - .5);
	};
	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	if (featured) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/episodes/$slug",
		params: { slug: ep.slug },
		className: "block perspective-1000",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onMouseMove: handleMouseMove,
			onMouseLeave: handleMouseLeave,
			style: {
				rotateX,
				rotateY,
				transformStyle: "preserve-3d"
			},
			className: "group relative flex flex-col rounded-[2rem] border border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden transition-colors duration-500 hover:border-primary/50",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
					style: { background }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "block aspect-[16/8] relative overflow-hidden transform-gpu",
					style: { transform: "translateZ(20px)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ep.image || "https://technologychannel.org/images/thumbnail.png",
							alt: ep.title,
							className: "transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-6 h-6 text-white ml-1" })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 p-8 flex-1 transform-gpu",
					style: { transform: "translateZ(30px)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 mb-2",
							children: ep.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-bold leading-tight text-white group-hover:text-primary transition-colors duration-300",
							children: ep.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-white/50 leading-relaxed font-light",
							children: ep.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto pt-6 border-t border-white/10 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm text-white/40 font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ep.date }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
											" ",
											ep.readTime
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase group-hover:gap-4 transition-all",
								children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5" })]
							})]
						})
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/episodes/$slug",
		params: { slug: ep.slug },
		className: "block perspective-1000 h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onMouseMove: handleMouseMove,
			onMouseLeave: handleMouseLeave,
			style: {
				rotateX,
				rotateY,
				transformStyle: "preserve-3d"
			},
			className: "group relative flex flex-col rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl p-6 transition-colors duration-500 hover:border-primary/50 overflow-hidden h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
					style: { background }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6 relative z-10 transform-gpu h-full flex-col",
					style: { transform: "translateZ(20px)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative shrink-0 h-48 w-full rounded-2xl border border-white/10 overflow-hidden mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ep.image || "https://technologychannel.org/images/thumbnail.png",
							alt: ep.title,
							className: "transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono font-bold text-primary tracking-widest",
							children: txNum
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold leading-snug text-white group-hover:text-primary transition-colors mb-4 line-clamp-2",
								children: ep.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/40 text-sm mb-6 line-clamp-2 font-light",
								children: ep.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex items-center justify-between pt-4 border-t border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }), ep.readTime]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-white/50 group-hover:text-primary group-hover:gap-2 transition-all",
									children: ["Read ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { EpisodeCard as t };
