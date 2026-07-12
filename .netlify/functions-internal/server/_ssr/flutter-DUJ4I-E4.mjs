import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Magnetic } from "./Magnetic-B3DEYM_e.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Monitor, k as Globe, l as Smartphone, q as ArrowRight, x as MonitorPlay } from "../_libs/lucide-react.mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flutter-DUJ4I-E4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FlutterRoute() {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(84,197,248,0.15),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[size:40px_40px] bg-[position:0_0,20px_20px] opacity-10",
					style: { backgroundImage: "linear-gradient(45deg, rgba(84,197,248,0.1) 25%, transparent 25%, transparent 75%, rgba(84,197,248,0.1) 75%, rgba(84,197,248,0.1)), linear-gradient(45deg, rgba(84,197,248,0.1) 25%, transparent 25%, transparent 75%, rgba(84,197,248,0.1) 75%, rgba(84,197,248,0.1))" }
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
							className: "inline-flex items-center justify-center p-4 bg-[#54C5F8]/10 border border-[#54C5F8]/30 backdrop-blur-md rounded-full mb-8 shadow-[0_0_30px_rgba(84,197,248,0.3)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorPlay, { className: "w-6 h-6 text-[#54C5F8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 font-mono text-sm tracking-widest uppercase text-white/80 pr-4",
								children: "Flutter UI Toolkit"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black drop-shadow-2xl",
							children: [
								"BUILD FOR",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#54C5F8] opacity-90",
									children: "ANY SCREEN"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-16",
							children: "Build beautiful, natively compiled, multi-platform applications from a single codebase. Master the UI toolkit created by Google."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/course/flutter",
							className: "inline-block px-12 py-5 bg-[#54C5F8] text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_40px_rgba(84,197,248,0.4)] hover:shadow-[0_0_60px_rgba(84,197,248,0.6)] transition-shadow",
							children: "Launch Flutter Guide"
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
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-8 h-8 text-[#54C5F8]" }),
								title: "Mobile First",
								desc: "Deploy to iOS and Android from a single codebase without compromising on performance or native feel."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								delay: .4,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-8 h-8 text-[#54C5F8]" }),
								title: "Web Ready",
								desc: "Compile your Dart code directly to highly optimized JavaScript and WebAssembly for browser deployment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								delay: .6,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "w-8 h-8 text-[#54C5F8]" }),
								title: "Native Desktop",
								desc: "Create deeply integrated desktop applications for Windows, macOS, and Linux with native hardware access."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-24 flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#54C5F8]/20 to-transparent opacity-50 z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-4xl md:text-6xl font-display font-bold text-white mb-6",
									children: "Start Building Now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/60 mb-12 max-w-2xl text-lg",
									children: "Dive into widget trees, state management, and custom animations in our comprehensive guide."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/course/flutter",
									className: "inline-flex items-center gap-4 text-[#54C5F8] font-mono tracking-widest uppercase border-b border-[#54C5F8]/30 pb-2 hover:border-[#54C5F8] transition-colors",
									children: ["Open Flutter Guide", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5" })]
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
		className: "glass-panel p-10 rounded-3xl border border-white/5 hover:border-[#54C5F8]/30 transition-colors",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-2xl bg-[#54C5F8]/10 flex items-center justify-center mb-8 border border-[#54C5F8]/20",
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
export { FlutterRoute as component };
