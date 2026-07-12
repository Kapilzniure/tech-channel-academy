import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Magnetic } from "./Magnetic-B3DEYM_e.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Layers, F as CodeXml, T as LayoutTemplate, q as ArrowRight, t as Zap } from "../_libs/lucide-react.mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dart-Cf4P7VRi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DartRoute() {
	const containerRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const opacity = useTransform(scrollYProgress, [0, .5], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-black text-foreground overflow-hidden font-sans relative",
		ref: containerRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,180,255,0.15),transparent_50%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20",
					style: { backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)" }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise mix-blend-overlay opacity-50 z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 pt-40 pb-32 container-page min-h-screen flex flex-col items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						y,
						opacity
					},
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: 1.2,
						ease: "easeOut"
					},
					className: "text-center max-w-5xl mx-auto relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center justify-center p-4 bg-[#0175C2]/10 border border-[#0175C2]/30 backdrop-blur-md rounded-full mb-8 shadow-[0_0_30px_rgba(1,117,194,0.3)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-6 h-6 text-[#0175C2]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 font-mono text-sm tracking-widest uppercase text-white/80 pr-4",
								children: "Dart Language"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black drop-shadow-2xl",
							children: [
								"CLIENT",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#0175C2] opacity-90",
									children: "OPTIMIZED"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-16",
							children: "The definitive guide to Dart. Master the highly productive, object-oriented programming language that powers Flutter's revolutionary cross-platform capabilities."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/course/dart",
							className: "inline-block px-12 py-5 bg-[#0175C2] text-white font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_40px_rgba(1,117,194,0.4)] hover:shadow-[0_0_60px_rgba(1,117,194,0.6)] transition-shadow",
							children: "Start Learning Dart"
						}) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-20 py-32 bg-black/80 backdrop-blur-3xl border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								delay: .2,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-8 h-8 text-[#0175C2]" }),
								title: "Lightning Fast",
								desc: "AOT compiled to fast, predictable, native code, allowing you to write high-performance applications."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								delay: .4,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutTemplate, { className: "w-8 h-8 text-[#0175C2]" }),
								title: "UI Optimized",
								desc: "Built specifically for user interface creation with features like sound null safety and spread operators."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								delay: .6,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-8 h-8 text-[#0175C2]" }),
								title: "Multi-Platform",
								desc: "Compile to ARM & x64 machine code for mobile, desktop, and backend, or compile to JavaScript for the web."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-24 flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0175C2]/20 to-transparent opacity-50 z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-4xl md:text-6xl font-display font-bold text-white mb-6",
									children: "Ready to master Dart?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/60 mb-12 max-w-2xl text-lg",
									children: "Join thousands of developers learning the language behind the fastest growing UI framework on the planet."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/course/dart",
									className: "inline-flex items-center gap-4 text-[#0175C2] font-mono tracking-widest uppercase border-b border-[#0175C2]/30 pb-2 hover:border-[#0175C2] transition-colors",
									children: ["Open Dart Guide", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5" })]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function FeatureCard({ icon, title, desc, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 50
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
			delay,
			duration: .8,
			type: "spring"
		},
		className: "glass-panel p-10 rounded-3xl border border-white/5 hover:border-[#0175C2]/30 transition-colors",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-2xl bg-[#0175C2]/10 flex items-center justify-center mb-8 border border-[#0175C2]/20",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl font-display font-bold text-white mb-4",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-white/50 leading-relaxed",
				children: desc
			})
		]
	});
}
//#endregion
export { DartRoute as component };
