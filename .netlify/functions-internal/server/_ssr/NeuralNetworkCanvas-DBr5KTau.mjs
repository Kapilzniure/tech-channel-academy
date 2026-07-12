import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NeuralNetworkCanvas-DBr5KTau.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NeuralNetworkCanvas() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		let particles = [];
		let mouseX = 0;
		let mouseY = 0;
		let isMousePresent = false;
		let isMouseMoving = false;
		let mouseMoveTimeout;
		let globalOpacity = 0;
		class Particle {
			x;
			y;
			baseX;
			baseY;
			radius;
			canvasWidth;
			canvasHeight;
			constructor(canvasWidth, canvasHeight) {
				this.canvasWidth = canvasWidth;
				this.canvasHeight = canvasHeight;
				this.x = Math.random() * canvasWidth;
				this.y = Math.random() * canvasHeight;
				this.baseX = this.x;
				this.baseY = this.y;
				this.radius = Math.random() * 1.5 + .5;
			}
			update(mx, my, isPresent) {
				if (isPresent) {
					const dx = mx - this.x;
					const dy = my - this.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const maxDistance = 120;
					if (distance < maxDistance) {
						const force = (maxDistance - distance) / maxDistance;
						const angle = Math.atan2(dy, dx);
						this.x -= Math.cos(angle) * force * 3;
						this.y -= Math.sin(angle) * force * 3;
					} else {
						this.x += (this.baseX - this.x) * .05;
						this.y += (this.baseY - this.y) * .05;
					}
				} else {
					this.x += (this.baseX - this.x) * .05;
					this.y += (this.baseY - this.y) * .05;
				}
			}
			draw(ctx, opacity) {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(0, 255, 255, ${.3 * opacity})`;
				ctx.fill();
			}
		}
		const initParticles = () => {
			particles = [];
			const numParticles = Math.floor(canvas.width * canvas.height / 1e4);
			for (let i = 0; i < numParticles; i++) particles.push(new Particle(canvas.width, canvas.height));
		};
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles();
		};
		const handleMouseMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			isMousePresent = true;
			isMouseMoving = true;
			clearTimeout(mouseMoveTimeout);
			mouseMoveTimeout = setTimeout(() => {
				isMouseMoving = false;
			}, 150);
		};
		const handleMouseLeave = () => {
			isMousePresent = false;
			isMouseMoving = false;
		};
		window.addEventListener("resize", resizeCanvas);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);
		resizeCanvas();
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (isMouseMoving) globalOpacity += (1 - globalOpacity) * .1;
			else globalOpacity += (0 - globalOpacity) * .05;
			for (let i = 0; i < particles.length; i++) {
				particles[i].update(mouseX, mouseY, isMousePresent);
				if (globalOpacity > .01) {
					particles[i].draw(ctx, globalOpacity);
					if (isMousePresent) {
						const dxMouse = particles[i].x - mouseX;
						const dyMouse = particles[i].y - mouseY;
						const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
						if (distanceMouse < 120) {
							ctx.beginPath();
							ctx.strokeStyle = `rgba(0, 255, 255, ${(.5 - distanceMouse / 240) * globalOpacity})`;
							ctx.lineWidth = 1.5;
							ctx.moveTo(particles[i].x, particles[i].y);
							ctx.lineTo(mouseX, mouseY);
							ctx.stroke();
						}
					}
				}
			}
			animationFrameId = requestAnimationFrame(animate);
		};
		animate();
		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-100"
	});
}
//#endregion
export { NeuralNetworkCanvas as t };
