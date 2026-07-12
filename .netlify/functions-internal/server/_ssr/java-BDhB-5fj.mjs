import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useTransform } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Magnetic } from "./Magnetic-B3DEYM_e.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Database, P as Cpu, p as Server, q as ArrowRight, u as Shield } from "../_libs/lucide-react.mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/java-BDhB-5fj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function JavaRoute() {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,140,0,0.15),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 left-0 w-full h-full opacity-20",
					style: {
						backgroundImage: `
            linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)
          `,
						backgroundSize: "100px 100px",
						maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
					}
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
							className: "inline-flex items-center justify-center p-4 bg-[#FF8C00]/10 border border-[#FF8C00]/30 backdrop-blur-md rounded-full mb-8 shadow-[0_0_30px_rgba(255,140,0,0.3)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "w-6 h-6 text-[#FF8C00]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 font-mono text-sm tracking-widest uppercase text-white/80 pr-4",
								children: "Enterprise Architecture"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black drop-shadow-2xl",
							children: [
								"ROBUST &",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#FF8C00] opacity-90",
									children: "SCALABLE"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-16",
							children: "Master enterprise-grade Java programming. From object-oriented principles to distributed systems, learn the language that runs the world's largest financial and tech infrastructures."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/course/java",
							className: "inline-block px-12 py-5 bg-[#FF8C00] text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_40px_rgba(255,140,0,0.4)] hover:shadow-[0_0_60px_rgba(255,140,0,0.6)] transition-shadow",
							children: "Access Java Guide"
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
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-8 h-8 text-[#FF8C00]" }),
								title: "Enterprise Grade",
								desc: "Build highly concurrent, fault-tolerant backend systems designed to handle millions of transactions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								delay: .4,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-8 h-8 text-[#FF8C00]" }),
								title: "Secure & Reliable",
								desc: "Leverage Java's strict typing, garbage collection, and comprehensive security manager."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
								delay: .6,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-8 h-8 text-[#FF8C00]" }),
								title: "JVM Ecosystem",
								desc: "Compile once, run anywhere. Tap into the massive ecosystem of Maven packages and Spring Boot frameworks."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-24 flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#FF8C00]/20 to-transparent opacity-50 z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-4xl md:text-6xl font-display font-bold text-white mb-6",
									children: "Master the JVM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/60 mb-12 max-w-2xl text-lg",
									children: "Go from zero to hero in Java object-oriented programming, data structures, and architecture."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/course/java",
									className: "inline-flex items-center gap-4 text-[#FF8C00] font-mono tracking-widest uppercase border-b border-[#FF8C00]/30 pb-2 hover:border-[#FF8C00] transition-colors",
									children: ["Open Java Guide", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5" })]
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
		className: "glass-panel p-10 rounded-3xl border border-white/5 hover:border-[#FF8C00]/30 transition-colors",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-2xl bg-[#FF8C00]/10 flex items-center justify-center mb-8 border border-[#FF8C00]/20",
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
export { JavaRoute as component };
