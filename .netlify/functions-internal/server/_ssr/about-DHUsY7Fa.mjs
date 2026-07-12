import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useTransform, t as useSpring } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as Github, F as CodeXml, O as Instagram, S as MessageSquare, W as BrainCircuit, i as Users, j as Facebook, k as Globe, m as Send, n as Youtube } from "../_libs/lucide-react.mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
import { t as NeuralNetworkCanvas } from "./NeuralNetworkCanvas-DBr5KTau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DHUsY7Fa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AboutRoute() {
	const containerRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"]
	});
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	});
	const yImage = useTransform(smoothProgress, [0, 1], [0, 400]);
	const scaleImage = useTransform(smoothProgress, [0, 1], [1, 1.2]);
	const opacityHeader = useTransform(smoothProgress, [0, .5], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-black text-foreground overflow-hidden font-sans relative",
		ref: containerRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralNetworkCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise mix-blend-overlay opacity-50 z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 pt-40 pb-32 container-page min-h-[90vh] flex flex-col items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { opacity: opacityHeader },
					className: "w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-2 lg:order-1 relative z-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -50
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								duration: 1,
								ease: "easeOut",
								delay: .2
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "w-5 h-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono tracking-widest text-primary uppercase",
										children: "Founder / Architect"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-2xl",
									children: [
										"BISHWORAJ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "POUDEL"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl md:text-2xl text-white/50 leading-relaxed font-light mb-12 max-w-xl",
									children: "Technology Channel is an edu-tech platform dedicated to making technology simple, practical, and accessible for everyone."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/10 pt-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-4xl font-display font-bold text-white",
												children: "10+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono uppercase tracking-widest text-white/40",
												children: "Years Experience"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-12 bg-white/10 hidden sm:block" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-4xl font-display font-bold text-white",
												children: "500+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono uppercase tracking-widest text-white/40",
												children: "Open Source Projects"
											})]
										})
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: {
								y: yImage,
								scale: scaleImage
							},
							className: "absolute inset-0 w-full h-full flex items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									scale: .8,
									rotate: -5
								},
								animate: {
									opacity: 1,
									scale: 1,
									rotate: 0
								},
								transition: {
									duration: 1.5,
									type: "spring",
									bounce: .4
								},
								className: "w-64 h-64 relative z-10 flex items-center justify-center bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] p-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/favicon.ico",
									alt: "Technology Channel Symbol",
									className: "w-full h-full object-contain"
								})
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-20 py-32 bg-black/80 backdrop-blur-3xl border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								delay: .2,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-8 h-8 text-red-500" }),
								label: "Subscribers",
								value: "100K+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								delay: .4,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-8 h-8 text-blue-500" }),
								label: "Students Enrolled",
								value: "50K+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								delay: .6,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-8 h-8 text-primary" }),
								label: "Technical Tutorials",
								value: "500+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								delay: .8,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-8 h-8 text-emerald-500" }),
								label: "Countries Reached",
								value: "120+"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-32 max-w-5xl mx-auto space-y-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "glass-panel p-12 rounded-[3rem] border border-white/10 relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent -z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-display font-bold text-white mb-6",
										children: "About Technology Channel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6 text-white/70 font-light leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Technology Channel is an edu-tech platform dedicated to making technology simple, practical, and accessible for everyone. Through websites, YouTube, mobile apps, courses, and community-driven learning, we help people build real skills that lead to real opportunities." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We believe technology education should not be confusing or overly theoretical. It should be clear, hands-on, and connected to real-world outcomes. Our goal is to empower learners with practical knowledge so they can grow personally, professionally, and financially." })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-3 gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 30
										},
										whileInView: {
											opacity: 1,
											y: 0
										},
										viewport: { once: true },
										className: "glass-panel p-8 rounded-3xl border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-primary mb-4 uppercase tracking-widest font-mono",
											children: "Vision"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 font-medium",
											children: "Creating opportunity from skills through practical education."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
										transition: { delay: .1 },
										className: "glass-panel p-8 rounded-3xl border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-primary mb-4 uppercase tracking-widest font-mono",
											children: "Mission"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 font-medium",
											children: "Make tech simple and job-ready with real projects, guidance, and community."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
										transition: { delay: .2 },
										className: "glass-panel p-8 rounded-3xl border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-primary mb-4 uppercase tracking-widest font-mono",
											children: "Goal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 font-medium",
											children: "Make technology simple and practical so anyone can learn skills and create income opportunities."
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-display font-bold text-white mb-8",
									children: "Values"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-6",
									children: [
										{
											title: "Practicality",
											desc: "We focus on useful, real-world skills that learners can apply immediately."
										},
										{
											title: "Integrity",
											desc: "We are committed to honesty, truth, and ethical education."
										},
										{
											title: "Consistency",
											desc: "We believe regular learning and steady progress create long-term success."
										},
										{
											title: "Learner-First Impact",
											desc: "We design our content, tools, and teaching with the learner's growth in mind."
										},
										{
											title: "Continuous Improvement",
											desc: "We keep learning, improving, and adapting to serve our community better."
										}
									].map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_rgba(0,255,255,0.8)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-white block mb-1",
											children: val.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/60 font-light",
											children: val.desc
										})] })]
									}, i))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-12",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-3xl font-display font-bold text-white mb-6",
											children: "What We Do"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/70 font-light leading-relaxed mb-4",
											children: "We provide technology-related content and tools through various mediums such as websites, YouTube, mobile apps, and digital platforms. We also create courses, tutorials, and practical learning resources designed to help learners understand technology in a simple and effective way."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/70 font-light leading-relaxed",
											children: "Our content covers areas like technology, programming, coding, digital skills, and practical career-building knowledge. We aim to bridge the gap between learning and doing by focusing on useful education that creates confidence and opportunity."
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-display font-bold text-white mb-6",
										children: "Our Commitment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/70 font-light leading-relaxed",
										children: "Our foundation is built on truth, honesty, user privacy, and meaningful impact. We are committed to providing quality technology education and tools that help learners grow safely and confidently. We always aim to protect our users from harmful, misleading, or low-value information by focusing on trustworthy and practical content."
									})] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: -30
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: { once: true },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-display font-bold text-white mb-6",
											children: "Contact Us"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/60 font-light mb-6",
											children: "If you have any questions, suggestions, or would like to connect with us, feel free to reach out:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "space-y-4 text-white/80 font-mono text-sm uppercase tracking-widest",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "https://www.facebook.com/technologychannel.org",
													className: "hover:text-primary transition-colors flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-4 h-4" }), " Facebook"]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "https://www.instagram.com/technologychannelofficial/",
													className: "hover:text-primary transition-colors flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-4 h-4" }), " Instagram"]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "https://discord.gg/hwNSzvE92F",
													className: "hover:text-primary transition-colors flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-4 h-4" }), " Discord"]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "https://t.me/technology_channel_official",
													className: "hover:text-primary transition-colors flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), " Telegram"]
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "https://github.com/technologychannel",
													className: "hover:text-primary transition-colors flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4" }), " GitHub"]
												}) })
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: 30
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: { once: true },
									className: "glass-panel p-8 rounded-3xl border border-white/10 bg-black/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-display font-bold text-white mb-6",
										children: "Our Office Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-4 text-white/70 font-light",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Company Name:"
											}), " Technology Channel Private Limited"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Address:"
											}), " Pokhara, Nepal"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Phone:"
											}), " +9779805832889"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Email:"
											}), " contact@technologychannel.org"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Postal Code:"
											}), " 33700"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Company Registration Number:"
											}), " 335505/80/081"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Company PAN Number:"
											}), " 621129733"] })
										]
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function StatCard({ icon, label, value, delay }) {
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
		className: "glass-panel p-10 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/20 group relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 p-5 rounded-2xl bg-black/50 border border-white/10 group-hover:scale-110 transition-transform duration-500",
					children: icon
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl md:text-5xl font-display font-black text-white mb-2",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-mono text-white/50 tracking-widest uppercase",
					children: label
				})
			]
		})]
	});
}
//#endregion
export { AboutRoute as component };
