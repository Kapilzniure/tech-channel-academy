import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useMotionValue, n as useTransform, r as useMotionTemplate, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as Cpu, o as Terminal, p as Server, q as ArrowRight, x as MonitorPlay } from "../_libs/lucide-react.mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
import { t as NeuralNetworkCanvas } from "./NeuralNetworkCanvas-DBr5KTau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-DZYXYA9F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var courses = [
	{
		title: "Java Masterclass",
		description: "Go from zero to hero in Java. Learn object-oriented programming, data structures, and enterprise application development.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "w-10 h-10 text-primary" }),
		topic: "java",
		tag: "POPULAR"
	},
	{
		title: "AI Basics & Prompt Engineering",
		description: "Master the fundamentals of Artificial Intelligence and learn how to leverage LLMs for automation and productivity.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-10 h-10 text-primary" }),
		topic: "ai",
		tag: "NEW"
	},
	{
		title: "Flutter Mobile Development",
		description: "Build beautiful natively compiled applications for mobile, web, and desktop from a single codebase.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorPlay, { className: "w-10 h-10 text-primary" }),
		topic: "flutter",
		tag: "TRENDING"
	},
	{
		title: "Dart Programming Guide",
		description: "Master the language behind Flutter. Understand core concepts, async programming, and modern Dart syntax.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "w-10 h-10 text-primary" }),
		topic: "dart",
		tag: "ESSENTIAL"
	}
];
function CoursesRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-hidden font-sans relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralNetworkCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise mix-blend-overlay opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 pt-40 pb-32 container-page min-h-[80vh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "text-center mb-24 max-w-4xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center justify-center p-3 px-6 bg-primary/10 border border-primary/30 rounded-full mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-mono text-sm tracking-widest uppercase",
								children: "Global Directory"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40",
							children: [
								"PREMIUM",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"COURSES"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed",
							children: "Master the most in-demand skills in technology. Practical, project-based learning designed to elevate your career."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-1000",
					children: courses.map((course, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
							delay: index * .1,
							duration: .8,
							type: "spring"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course })
					}, course.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function CourseCard({ course }) {
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
	const rotateX = useTransform(mouseYSpring, [-.5, .5], ["7deg", "-7deg"]);
	const rotateY = useTransform(mouseXSpring, [-.5, .5], ["-7deg", "7deg"]);
	const background = useMotionTemplate`radial-gradient(800px circle at ${useTransform(mouseXSpring, [-.5, .5], ["0%", "100%"])} ${useTransform(mouseYSpring, [-.5, .5], ["0%", "100%"])}, rgba(255,255,255,0.06), transparent 40%)`;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/course/$topic",
		params: { topic: course.topic },
		className: "block relative w-full h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onMouseMove: handleMouseMove,
			onMouseLeave: handleMouseLeave,
			style: {
				rotateX,
				rotateY,
				transformStyle: "preserve-3d"
			},
			className: "block relative w-full h-full glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/50 group transition-colors duration-500 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
					style: { background }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col h-full transform-gpu",
					style: { transform: "translateZ(30px)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-5 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 transform group-hover:scale-110 origin-left",
								children: course.icon
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono tracking-widest uppercase text-primary border border-primary/30 px-4 py-1.5 rounded-full bg-primary/10 shadow-[0_0_20px_rgba(0,255,255,0.2)]",
								children: course.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-4xl font-display font-bold text-white mb-6 group-hover:text-primary transition-colors",
							children: course.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/50 leading-relaxed font-light mb-12 flex-grow text-lg",
							children: course.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white/50 group-hover:text-primary border-t border-white/10 pt-8 group-hover:border-primary/30 transition-colors mt-auto",
							children: ["Access Course", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-2 transition-transform" })]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { CoursesRoute as component };
