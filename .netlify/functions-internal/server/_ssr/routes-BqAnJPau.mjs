import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useMotionValue, n as useTransform, r as useMotionTemplate, s as AnimatePresence, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Magnetic } from "./Magnetic-B3DEYM_e.mjs";
import { g as Link, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Github, D as Keyboard, F as CodeXml, H as ChevronDown, K as ArrowUpRight, O as Instagram, c as Sparkles, j as Facebook, p as Server, x as MonitorPlay } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BqAnJPau.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./routes-B8XS3VpB.mjs");
var Discord = ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	className,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "none",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" })
});
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function TiltCard({ children, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseXSpring = useSpring(x, {
		stiffness: 150,
		damping: 20
	});
	const mouseYSpring = useSpring(y, {
		stiffness: 150,
		damping: 20
	});
	const rotateX = useTransform(mouseYSpring, [-.5, .5], ["15deg", "-15deg"]);
	const rotateY = useTransform(mouseXSpring, [-.5, .5], ["-15deg", "15deg"]);
	const glareBackground = useMotionTemplate`radial-gradient(circle at ${useTransform(mouseXSpring, [-.5, .5], ["100%", "0%"])} ${useTransform(mouseYSpring, [-.5, .5], ["100%", "0%"])}, rgba(255,255,255,0.15) 0%, transparent 60%)`;
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const xPct = mouseX / width - .5;
		const yPct = mouseY / height - .5;
		x.set(xPct);
		y.set(yPct);
	};
	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		style: {
			rotateX,
			rotateY,
			transformStyle: "preserve-3d"
		},
		className: `relative ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute inset-0 z-50 pointer-events-none rounded-[inherit] mix-blend-overlay",
			style: { background: glareBackground }
		}), children]
	});
}
function Navigation() {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [isLearnOpen, setIsLearnOpen] = (0, import_react.useState)(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
			initial: { y: -100 },
			animate: { y: 0 },
			transition: {
				duration: 1,
				delay: .1
			},
			className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isLearnOpen || isMobileMenuOpen ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/10" : "py-8"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3 z-50 group relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/favicon.ico",
							alt: "Logo",
							className: "w-8 h-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_var(--color-primary)] transition-shadow relative z-10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-bold text-lg tracking-tight sm:block relative z-10",
							children: "Technology Channel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden lg:flex items-center gap-8 relative z-50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onMouseEnter: () => setIsLearnOpen(true),
								className: "flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer uppercase tracking-widest p-2",
								children: ["Learn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-4 h-4 transition-transform duration-300 ${isLearnOpen ? "rotate-180" : ""}` })]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								className: "text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2",
								children: "Courses"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/apps",
								className: "text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2",
								children: "Apps"
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 z-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://forms.gle/5n6kLxeyR2CgHQpG7",
							target: "_blank",
							rel: "noreferrer",
							className: "hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform",
							children: "Become a Teacher"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden p-2 text-white/70 hover:text-white transition-colors",
							onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: isMobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "18",
									y1: "6",
									x2: "6",
									y2: "18"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "6",
									y1: "6",
									x2: "18",
									y2: "18"
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "4",
										y1: "12",
										x2: "20",
										y2: "12"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "4",
										y1: "6",
										x2: "20",
										y2: "6"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "4",
										y1: "18",
										x2: "20",
										y2: "18"
									})
								] })
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			className: "fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-3xl border-b border-white/10 pt-24 pb-8 px-6 lg:hidden overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						onClick: () => setIsMobileMenuOpen(false),
						to: "/",
						className: "text-xl font-display font-bold text-white hover:text-primary transition-colors",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						onClick: () => setIsMobileMenuOpen(false),
						to: "/learn",
						className: "text-xl font-display font-bold text-white hover:text-primary transition-colors",
						children: "Learn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						onClick: () => setIsMobileMenuOpen(false),
						to: "/about",
						className: "text-xl font-display font-bold text-white hover:text-primary transition-colors",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						onClick: () => setIsMobileMenuOpen(false),
						to: "/courses",
						className: "text-xl font-display font-bold text-white hover:text-primary transition-colors",
						children: "Courses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						onClick: () => setIsMobileMenuOpen(false),
						to: "/apps",
						className: "text-xl font-display font-bold text-white hover:text-primary transition-colors",
						children: "Apps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						onClick: () => setIsMobileMenuOpen(false),
						href: "https://forms.gle/5n6kLxeyR2CgHQpG7",
						target: "_blank",
						rel: "noreferrer",
						className: "text-xl font-display font-bold text-primary hover:text-white transition-colors",
						children: "Become a Teacher"
					})
				]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isLearnOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -20
			},
			transition: { duration: .3 },
			className: "fixed inset-0 bg-black z-40 pt-[120px] pb-12 overflow-y-auto hidden lg:block",
			onMouseLeave: () => setIsLearnOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/learn",
							className: "group block",
							onClick: () => setIsLearnOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-display font-bold text-white mb-3 relative z-10",
										children: "AI Mastery"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10",
										children: "Master ChatGPT, prompt engineering, and core AI concepts."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10",
										children: "Launch Hub"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/course/$topic",
							params: { topic: "dart" },
							className: "group block",
							onClick: () => setIsLearnOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-display font-bold text-white mb-3 relative z-10",
										children: "Dart"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10",
										children: "The definitive guide to Dart, the language powering Flutter."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10",
										children: "Launch Hub"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/course/$topic",
							params: { topic: "flutter" },
							className: "group block",
							onClick: () => setIsLearnOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorPlay, { className: "w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-display font-bold text-white mb-3 relative z-10",
										children: "Flutter Dev"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10",
										children: "Build cross-platform applications beautifully and efficiently."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10",
										children: "Launch Hub"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/course/$topic",
							params: { topic: "java" },
							className: "group block",
							onClick: () => setIsLearnOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-display font-bold text-white mb-3 relative z-10",
										children: "Java"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10",
										children: "Enterprise-grade Java programming from absolute scratch."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10",
										children: "Launch Hub"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://typingowl.com/",
							target: "_blank",
							rel: "noreferrer",
							className: "group block",
							onClick: () => setIsLearnOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, { className: "w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-display font-bold text-white mb-3 relative z-10",
										children: "Typing Owl"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10",
										children: "Master touch typing to code and work faster."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10 flex items-center gap-1",
										children: ["External ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3 h-3" })]
									})
								]
							})
						})
					]
				})
			})
		}) })
	] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative pt-32 pb-16 border-t border-white/10 mt-32 overflow-hidden bg-black/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-16 mb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/favicon.ico",
									alt: "Logo",
									className: "w-8 h-8 rounded-full"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-bold text-2xl tracking-tight text-white",
									children: "Technology Channel"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/50 font-light max-w-sm mb-8 leading-relaxed",
								children: "Making technology accessible. Practical guides for AI, automation, and modern software development by Bishworaj Poudel."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: "https://github.com/technologychannel",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-5 h-5" }),
										label: "GitHub"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: "https://discord.gg/hwNSzvE92F",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Discord, { className: "w-5 h-5" }),
										label: "Discord"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: "https://www.facebook.com/technologychannel.org",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-5 h-5" }),
										label: "Facebook"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
										href: "https://www.instagram.com/technologychannelofficial/",
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-5 h-5" }),
										label: "Instagram"
									}) })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display font-semibold mb-6",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-4 text-white/50 font-light text-sm uppercase tracking-widest",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-primary transition-colors",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-primary transition-colors",
								children: "About Us"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								className: "hover:text-primary transition-colors",
								children: "Courses"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/apps",
								className: "hover:text-primary transition-colors",
								children: "Mobile Apps"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display font-semibold mb-6",
						children: "Learning Paths"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-4 text-white/50 font-light text-sm uppercase tracking-widest",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn",
								className: "hover:text-primary transition-colors",
								children: "AI Basics"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/course/$topic",
								params: { topic: "dart" },
								className: "hover:text-primary transition-colors",
								children: "Dart Programming"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/course/$topic",
								params: { topic: "flutter" },
								className: "hover:text-primary transition-colors",
								children: "Flutter Development"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/course/$topic",
								params: { topic: "java" },
								className: "hover:text-primary transition-colors",
								children: "Java Masterclass"
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-mono text-white/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Technology Channel. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6 mt-4 md:mt-0 uppercase tracking-widest",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white transition-colors",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white transition-colors",
							children: "Terms of Service"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							className: "flex items-center gap-2 ml-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-black hover:border-primary transition-all text-white/50",
							children: ["Back to Top ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3 h-3 -rotate-45" })]
						})
					]
				})]
			})]
		})]
	});
}
function SocialLink({ href, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-black hover:border-primary transition-all hover:scale-110",
		"aria-label": label,
		children: icon
	});
}
//#endregion
export { Navigation as n, Route as r, Footer as t };
