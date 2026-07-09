import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { CustomCursor } from "../components/ui/CustomCursor";
import { articles } from "../data/articles";

export const Route = createFileRoute("/")({
  component: HomeRoute,
});

function HomeRoute() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans select-none relative">
      <CustomCursor />
      <div className="bg-noise" />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <HeroSection />
            <KnowledgeGrid />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Preloader() {
  return (
    <motion.div
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-[2px] w-64 bg-primary origin-left mb-8"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xs tracking-[0.5em] text-primary uppercase font-display"
      >
        Initializing Core
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 text-[10px] text-muted-foreground tracking-widest"
      >
        AWAITING SIGNAL
      </motion.div>
    </motion.div>
  );
}

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden container-page"
    >
      {/* Abstract geometric background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full border-dashed pointer-events-none"
      />

      <motion.div style={{ y: y1 }} className="relative z-10 text-center flex flex-col items-center w-full mt-20">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[10vw] leading-[0.8] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
        >
          TECHNOLOGY
        </motion.h1>
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[10vw] leading-[0.8] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-primary/80 to-white ml-0 md:ml-[10vw]"
        >
          CHANNEL
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-base md:text-xl text-muted-foreground font-light max-w-xl text-center tracking-wide"
        >
          Redefining digital discovery. A cinematic journey through automation, AI, and modern web architecture.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </motion.section>
  );
}

function KnowledgeGrid() {
  return (
    <section className="relative min-h-screen py-32 container-page z-20">
      <div className="flex flex-col gap-32">
        {articles.map((article, index) => (
          <ArticleNode key={article.id} article={article} index={index} />
        ))}
      </div>
    </section>
  );
}

function ArticleNode({ article, index }: { article: typeof articles[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 0.5"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`flex flex-col md:flex-row gap-8 md:gap-24 items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Graphic / Holographic element representing the article */}
      <div 
        className="w-full md:w-1/2 aspect-square md:aspect-[4/3] glass-panel rounded-3xl relative overflow-hidden group cursor-none"
        data-cursor-text="READ"
      >
        {/* Animated gradients inside the panel */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] cinematic-gradient opacity-30 group-hover:opacity-60 transition-opacity duration-700"
        />
        
        <div className="absolute inset-0 flex flex-col justify-between p-8 z-10 pointer-events-none">
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1 border border-white/10 rounded-full bg-black/40 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-primary font-mono text-sm tracking-widest flex items-center justify-between">
            <span>{article.id.split('-')[0].toUpperCase()} // {String(index + 1).padStart(2, '0')}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">INITIATING_</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground tracking-widest">
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span>{article.readTime}</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight group-hover:text-primary transition-colors" data-cursor-text="EXPLORE">
          {article.title}
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
          {article.excerpt}
        </p>

        <motion.a 
          href={article.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 10 }}
          className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-primary mt-4 w-fit"
          data-cursor-text="LINK"
        >
          Access Data 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="relative py-32 border-t border-white/5 mt-32 container-page overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center z-10 relative"
      >
        <h2 className="text-[12vw] md:text-[8vw] font-display font-black tracking-tighter text-white/5 mb-8">
          TRANSMISSION END
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {['Twitter', 'GitHub', 'Discord', 'YouTube'].map((social) => (
            <a key={social} href="#" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-white transition-colors" data-cursor-text="OPEN">
              {social}
            </a>
          ))}
        </div>
        <p className="text-xs font-mono text-muted-foreground/50">
          © {new Date().getFullYear()} TECHNOLOGY CHANNEL. ALL SYSTEMS NOMINAL.
        </p>
      </motion.div>
    </footer>
  );
}
