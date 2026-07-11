import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Play } from "lucide-react";
import type { Episode } from "@/data/episodes";
import { episodes } from "@/data/episodes";
import { EpisodeArtwork } from "./EpisodeArtwork";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

function getTxNum(ep: Episode): string {
  const idx = episodes.findIndex((e) => e.slug === ep.slug);
  return `TX-${String(episodes.length - idx).padStart(3, "0")}`;
}

interface EpisodeCardProps {
  ep: Episode;
  index?: number;
  featured?: boolean;
}

export function EpisodeCard({ ep, index = 0, featured = false }: EpisodeCardProps) {
  const txNum = getTxNum(ep);
  const ref = useRef<HTMLDivElement>(null);

  // 3D Hover Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  // For compact cards, less rotation
  const maxRotation = featured ? 7 : 4;
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxRotation}deg`, `-${maxRotation}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxRotation}deg`, `${maxRotation}deg`]);

  const background = useMotionTemplate`radial-gradient(800px circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])}, rgba(0,255,255,0.06), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (featured) {
    return (
      <Link to="/episodes/$slug" params={{ slug: ep.slug }} className="block perspective-1000">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="group relative flex flex-col rounded-[2rem] border border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden transition-colors duration-500 hover:border-primary/50"
        >
          {/* Glare layer */}
          <motion.div 
            className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background }}
          />

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          {/* visual header */}
          <div className="block aspect-[16/8] relative overflow-hidden transform-gpu" style={{ transform: "translateZ(20px)" }}>
            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <EpisodeArtwork
              seed={ep.slug}
              paletteIndex={index}
              variant="banner"
              label={txNum}
              initial={ep.title.charAt(0)}
              className="transition-transform duration-1000 group-hover:scale-110 w-full h-full"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col gap-4 p-8 flex-1 transform-gpu" style={{ transform: "translateZ(30px)" }}>
            <div className="flex flex-wrap gap-2 mb-2">
              {ep.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3 className="font-display text-3xl font-bold leading-tight text-white group-hover:text-primary transition-colors duration-300">
              {ep.title}
            </h3>

            <p className="text-lg text-white/50 leading-relaxed font-light">{ep.excerpt}</p>

            <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-white/40 font-mono">
                <span>{ep.date}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {ep.readTime}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase group-hover:gap-4 transition-all">
                Read More <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  /* ── compact card ── */
  return (
    <Link to="/episodes/$slug" params={{ slug: ep.slug }} className="block perspective-1000 h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex flex-col rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl p-6 transition-colors duration-500 hover:border-primary/50 overflow-hidden h-full"
      >
        <motion.div 
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        <div className="flex gap-6 relative z-10 transform-gpu h-full flex-col" style={{ transform: "translateZ(20px)" }}>
          <div className="relative shrink-0 h-48 w-full rounded-2xl border border-white/10 overflow-hidden mb-2">
            <EpisodeArtwork
              seed={ep.slug}
              paletteIndex={index}
              variant="banner"
              initial={ep.title.charAt(0)}
              className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono font-bold text-primary tracking-widest">
              {txNum}
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <h3 className="font-display text-xl font-bold leading-snug text-white group-hover:text-primary transition-colors mb-4 line-clamp-2">
              {ep.title}
            </h3>
            
            <p className="text-white/40 text-sm mb-6 line-clamp-2 font-light">
              {ep.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-3 h-3" />
                {ep.readTime}
              </span>
              <div className="inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-white/50 group-hover:text-primary group-hover:gap-2 transition-all">
                Read <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
