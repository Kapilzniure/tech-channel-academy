import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.1;
    this.vy = (Math.random() - 0.5) * 0.1;
    this.radius = Math.random() * 1.5 + 0.5;
  }

  update(mouseX: number, mouseY: number) {
    // Standard movement
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;

    // Mouse repulsion physics
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 150) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = 150;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * 5;
      const directionY = forceDirectionY * force * 5;
      
      this.x -= directionX;
      this.y -= directionY;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
    ctx.fill();
  }
}

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMousePresent = false;
    let isMouseMoving = false;
    let mouseMoveTimeout: NodeJS.Timeout;
    let globalOpacity = 0;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.baseX = this.x;
        this.baseY = this.y;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(mx: number, my: number, isPresent: boolean) {
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
            this.x += (this.baseX - this.x) * 0.05;
            this.y += (this.baseY - this.y) * 0.05;
          }
        } else {
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }
      }

      draw(ctx: CanvasRenderingContext2D, opacity: number) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${0.3 * opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
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
      
      if (isMouseMoving) {
        globalOpacity += (1 - globalOpacity) * 0.1;
      } else {
        globalOpacity += (0 - globalOpacity) * 0.05;
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY, isMousePresent);
        
        if (globalOpacity > 0.01) {
          particles[i].draw(ctx, globalOpacity);
          
          if (isMousePresent) {
            const dxMouse = particles[i].x - mouseX;
            const dyMouse = particles[i].y - mouseY;
            const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            
            if (distanceMouse < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 255, 255, ${(0.5 - distanceMouse / 240) * globalOpacity})`;
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

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-100"
    />
  );
}
