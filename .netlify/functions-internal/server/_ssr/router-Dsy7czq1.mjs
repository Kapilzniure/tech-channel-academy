import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$9 } from "./routes-BqAnJPau.mjs";
import { t as Route$10 } from "./course._topic-By_zZOkM.mjs";
import { t as Route$11 } from "./episodes._slug-44jYr-nU.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dsy7czq1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-r9LHq87c.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function CustomCursor() {
	const [mousePosition, setMousePosition] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [isHovering, setIsHovering] = (0, import_react.useState)(false);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const updateMousePosition = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY
			});
			if (!isVisible) setIsVisible(true);
		};
		const handleMouseOver = (e) => {
			const target = e.target;
			if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.closest("a") || target.closest("button")) setIsHovering(true);
			else setIsHovering(false);
		};
		const handleMouseLeave = () => setIsVisible(false);
		window.addEventListener("mousemove", updateMousePosition);
		window.addEventListener("mouseover", handleMouseOver);
		window.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
			window.removeEventListener("mouseover", handleMouseOver);
			window.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [isVisible]);
	if (!isVisible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference",
		animate: {
			x: mousePosition.x - 6,
			y: mousePosition.y - 6,
			scale: isHovering ? 2.5 : 1
		},
		transition: {
			type: "spring",
			stiffness: 800,
			damping: 40,
			mass: .1
		}
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Technology Channel" },
			{
				name: "description",
				content: "Technology Channel Official Website."
			},
			{
				name: "keywords",
				content: "technology channel,technology channel,technologychannel"
			},
			{
				name: "author",
				content: "Bishworaj Poudel"
			},
			{
				property: "og:title",
				content: "Technology Channel"
			},
			{
				property: "og:description",
				content: "Technology Channel Official Website."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;800;900&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		const handleGlobalMouseMove = (e) => {
			document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
			document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
		};
		window.addEventListener("mousemove", handleGlobalMouseMove);
		return () => {
			lenis.destroy();
			window.removeEventListener("mousemove", handleGlobalMouseMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					filter: "blur(10px)"
				},
				animate: {
					opacity: 1,
					filter: "blur(0px)"
				},
				exit: {
					opacity: 0,
					filter: "blur(10px)"
				},
				transition: {
					duration: .6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}, location.pathname)
		})
	});
}
var $$splitComponentImporter$7 = () => import("./learn-BKzbcMNe.mjs");
var Route$7 = createFileRoute("/learn")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./java-BDhB-5fj.mjs");
var Route$6 = createFileRoute("/java")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./flutter-DUJ4I-E4.mjs");
var Route$5 = createFileRoute("/flutter")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./dart-Cf4P7VRi.mjs");
var Route$4 = createFileRoute("/dart")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./courses-DZYXYA9F.mjs");
var Route$3 = createFileRoute("/courses")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./apps-DruV2oaw.mjs");
var Route$2 = createFileRoute("/apps")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./about-DHUsY7Fa.mjs");
var Route$1 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./episodes.index-BXl3qjQ0.mjs");
var Route = createFileRoute("/episodes/")({
	head: () => ({ meta: [
		{ title: "All Transmissions — The Transmission" },
		{
			name: "description",
			content: "Browse every transmission — AI, automation, self-hosting and development by Bishworaj Poudel."
		},
		{
			property: "og:title",
			content: "All Transmissions"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var LearnRoute = Route$7.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$8
});
var JavaRoute = Route$6.update({
	id: "/java",
	path: "/java",
	getParentRoute: () => Route$8
});
var FlutterRoute = Route$5.update({
	id: "/flutter",
	path: "/flutter",
	getParentRoute: () => Route$8
});
var DartRoute = Route$4.update({
	id: "/dart",
	path: "/dart",
	getParentRoute: () => Route$8
});
var CoursesRoute = Route$3.update({
	id: "/courses",
	path: "/courses",
	getParentRoute: () => Route$8
});
var AppsRoute = Route$2.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var EpisodesIndexRoute = Route.update({
	id: "/episodes/",
	path: "/episodes/",
	getParentRoute: () => Route$8
});
var EpisodesSlugRoute = Route$11.update({
	id: "/episodes/$slug",
	path: "/episodes/$slug",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AppsRoute,
	CoursesRoute,
	DartRoute,
	FlutterRoute,
	JavaRoute,
	LearnRoute,
	CourseTopicRoute: Route$10.update({
		id: "/course/$topic",
		path: "/course/$topic",
		getParentRoute: () => Route$8
	}),
	EpisodesSlugRoute,
	EpisodesIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
