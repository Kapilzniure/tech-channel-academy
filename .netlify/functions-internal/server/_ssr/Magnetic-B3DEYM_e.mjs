import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Magnetic-B3DEYM_e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Magnetic({ children, intensity = .4 }) {
	const ref = (0, import_react.useRef)(null);
	const [position, setPosition] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const handleMouse = (e) => {
		if (!ref.current) return;
		const { clientX, clientY } = e;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({
			x: middleX * intensity,
			y: middleY * intensity
		});
	};
	const reset = () => {
		setPosition({
			x: 0,
			y: 0
		});
	};
	const { x, y } = position;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: handleMouse,
		onMouseLeave: reset,
		animate: {
			x,
			y
		},
		transition: {
			type: "spring",
			stiffness: 150,
			damping: 15,
			mass: .1
		},
		className: "inline-block",
		children
	});
}
//#endregion
export { Magnetic as t };
