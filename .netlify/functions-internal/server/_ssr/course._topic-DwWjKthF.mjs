import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as CircleCheckBig, G as BookOpen, L as CircleQuestionMark, R as CirclePlay, V as ChevronLeft, o as Terminal } from "../_libs/lucide-react.mjs";
import { t as Route } from "./course._topic-By_zZOkM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/course._topic-DwWjKthF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CourseViewerRoute() {
	const { topic } = Route.useParams();
	const [activeChapter, setActiveChapter] = (0, import_react.useState)(0);
	const getCourseData = (t) => {
		switch (t) {
			case "dart": return {
				title: "Dart Masterclass",
				color: "text-[#0175C2]",
				bg: "bg-[#0175C2]",
				border: "border-[#0175C2]",
				glow: "shadow-[0_0_30px_rgba(1,117,194,0.3)]",
				chapters: [
					"Introduction to Dart",
					"Variables & Data Types",
					"Control Flow",
					"Functions",
					"Object Oriented Programming",
					"Asynchronous Programming",
					"Null Safety"
				]
			};
			case "flutter": return {
				title: "Flutter UI Toolkit",
				color: "text-[#54C5F8]",
				bg: "bg-[#54C5F8]",
				border: "border-[#54C5F8]",
				glow: "shadow-[0_0_30px_rgba(84,197,248,0.3)]",
				chapters: [
					"Getting Started with Flutter",
					"Widget Tree Basics",
					"Stateful vs Stateless",
					"Layouts & Flexbox",
					"Navigation & Routing",
					"Animations",
					"HTTP & APIs"
				]
			};
			case "java": return {
				title: "Java Enterprise Architecture",
				color: "text-[#FF8C00]",
				bg: "bg-[#FF8C00]",
				border: "border-[#FF8C00]",
				glow: "shadow-[0_0_30px_rgba(255,140,0,0.3)]",
				chapters: [
					"JVM Architecture",
					"Primitive Types & Operators",
					"Classes & Objects",
					"Inheritance & Polymorphism",
					"Collections Framework",
					"Exception Handling",
					"Concurrency & Threads"
				]
			};
			case "ai": return {
				title: "AI Mastery Protocol",
				color: "text-primary",
				bg: "bg-primary",
				border: "border-primary",
				glow: "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
				chapters: [
					"History of Neural Networks",
					"Transformers & Attention Mechanisms",
					"Prompt Engineering 101",
					"RAG Architecture",
					"Building Autonomous Agents",
					"Model Fine-Tuning",
					"Deployment Strategies"
				]
			};
			default: return {
				title: "Technology Course",
				color: "text-white",
				bg: "bg-white",
				border: "border-white",
				glow: "shadow-[0_0_30px_rgba(255,255,255,0.3)]",
				chapters: [
					"Module 1",
					"Module 2",
					"Module 3"
				]
			};
		}
	};
	const data = getCourseData(topic);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "h-20 border-b border-white/10 bg-black/50 backdrop-blur-xl flex items-center justify-between px-8 z-50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-5 h-5 text-white/70" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-mono text-white/50 uppercase tracking-widest",
						children: "Currently Learning"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: `text-lg font-display font-bold ${data.color}`,
						children: data.title
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-white/60 font-mono hidden md:block",
					children: "Progress: 14%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-48 h-2 bg-white/10 rounded-full overflow-hidden hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full ${data.bg} w-[14%]` })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 overflow-hidden relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise mix-blend-overlay opacity-30 pointer-events-none absolute inset-0 z-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "w-80 border-r border-white/10 bg-black/30 backdrop-blur-md overflow-y-auto hidden lg:block z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-mono tracking-widest uppercase text-white/40 mb-6",
							children: "Course Syllabus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: data.chapters.map((chapter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveChapter(index),
								className: `w-full text-left p-4 rounded-2xl flex items-start gap-4 transition-all duration-300 ${activeChapter === index ? `bg-white/10 ${data.border} border` : "hover:bg-white/5 border border-transparent"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1",
									children: index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: `w-5 h-5 ${data.color}` }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: `w-5 h-5 ${activeChapter === index ? data.color : "text-white/30"}` })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-mono text-white/40 mb-1",
									children: ["Module ", index + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `text-sm font-bold ${activeChapter === index ? "text-white" : "text-white/70"}`,
									children: chapter
								})] })]
							}, index))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 overflow-y-auto relative z-10 scroll-smooth",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-4xl mx-auto px-8 py-16 md:py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .5 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: `w-4 h-4 ${data.color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-mono tracking-widest text-white/70 uppercase",
										children: ["Module ", activeChapter + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-5xl md:text-6xl font-display font-black text-white mb-8 tracking-tight",
									children: data.chapters[activeChapter]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "prose prose-invert prose-lg max-w-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xl text-white/70 leading-relaxed font-light mb-12",
											children: [
												"Welcome to Module ",
												activeChapter + 1,
												". In this lesson, we will explore the fundamental concepts of ",
												data.chapters[activeChapter].toLowerCase(),
												" and how they apply to building modern, scalable applications in ",
												data.title,
												"."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `p-8 rounded-3xl bg-black border ${data.border} border-opacity-30 mb-12 relative overflow-hidden group`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 ${data.bg} opacity-5 group-hover:opacity-10 transition-opacity` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative z-10 flex items-start gap-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: `w-8 h-8 ${data.color} shrink-0` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xl font-bold text-white mb-2",
													children: "Core Concept"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-white/60",
													children: "This module focuses on the theoretical and practical underpinnings of the architecture. Make sure you follow along with the interactive code examples below to solidify your understanding."
												})] })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-bold text-white mb-6",
											children: "Interactive Code Example"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] mb-12",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center px-4 py-3 border-b border-white/10 bg-black/50",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-yellow-500/80" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-green-500/80" })
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "ml-4 text-xs font-mono text-white/40",
													children: "example.code"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-6 overflow-x-auto text-sm font-mono text-white/80 leading-relaxed",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: `// Initialize the core system architecture
function initializeSystem() {
  const config = loadConfiguration();
  
  if (config.isReady) {
    console.log("System optimized and ready.");
    startEngine(config);
  } else {
    throw new Error("Configuration failed.");
  }
}

initializeSystem();` }) })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-bold text-white mb-6",
											children: "Knowledge Check"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-8 rounded-3xl border border-white/10 bg-white/5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-4 mb-6",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "w-6 h-6 text-white/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-white",
														children: "Question 1"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-white/80 mb-6",
													children: "What is the primary purpose of initializing the core system before starting the engine?"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															className: "w-full text-left p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white/70",
															children: "To allocate memory resources."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															className: `w-full text-left p-4 rounded-xl border ${data.border} border-opacity-50 bg-white/5 transition-colors text-white`,
															children: "To verify the configuration is valid and loaded."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															className: "w-full text-left p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white/70",
															children: "To bypass security protocols."
														})
													]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-16 pt-8 border-t border-white/10 flex justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveChapter((c) => Math.min(c + 1, data.chapters.length - 1)),
										className: `flex items-center gap-4 px-8 py-4 rounded-full ${data.bg} text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform ${data.glow}`,
										children: "Continue to Next Module"
									})
								})
							]
						}, activeChapter)
					})
				})
			]
		})]
	});
}
//#endregion
export { CourseViewerRoute as component };
