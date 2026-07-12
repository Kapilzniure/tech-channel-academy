import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navigation, t as Footer } from "./routes-BqAnJPau.mjs";
import { t as NeuralNetworkCanvas } from "./NeuralNetworkCanvas-DBr5KTau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/episodes._slug-1FJm9L2v.js
var import_jsx_runtime = require_jsx_runtime();
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-black text-foreground relative font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralNetworkCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-noise mix-blend-overlay opacity-50 z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 grid place-items-center py-24 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center glass-panel p-16 rounded-[3rem] border border-white/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-8xl font-black text-white/5 mb-6",
							children: "∅"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl font-bold text-white mb-4",
							children: "Transmission Not Found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/50 mb-8 font-light",
							children: "This transmission may have moved or been rescheduled in the archive."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/episodes",
							className: "inline-flex items-center px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-105 transition-transform",
							children: "Back to Archive"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { NotFound as notFoundComponent };
