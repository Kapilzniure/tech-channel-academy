import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Navigation, Footer } from "./index";
import { Sparkles, Terminal, Code2, MoveRight, BrainCircuit, Network } from "lucide-react";
import NeuralNetworkCanvas from "../components/ui/NeuralNetworkCanvas";
import Magnetic from "../components/ui/Magnetic";

export const Route = createFileRoute("/learn")({
  component: LearnRoute,
});

function LearnRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans relative" ref={containerRef}>
      <NeuralNetworkCanvas />
      <div className="bg-noise mix-blend-overlay opacity-50" />
      <Navigation />
      
      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-32 container-page min-h-screen flex flex-col items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto relative"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
          
          <div className="inline-flex items-center justify-center p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-8 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="ml-3 font-mono text-sm tracking-widest uppercase text-white/80 pr-4">AI Mastery Protocol</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black drop-shadow-2xl">
            INTELLIGENCE<br/>
            <span className="text-primary opacity-90">AMPLIFIED</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-16">
            Welcome to the definitive Artificial Intelligence learning hub. Master prompt engineering, leverage large language models, and construct autonomous systems.
          </p>

          <Magnetic>
            <Link 
              to="/course/ai"
              className="inline-block px-12 py-5 bg-white text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow"
            >
              Initialize Sequence
            </Link>
          </Magnetic>
        </motion.div>
      </main>

      {/* Modules Section */}
      <section className="relative z-20 py-32 bg-black/80 backdrop-blur-3xl border-t border-white/10">
        <div className="container-page">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Core Modules</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ModuleCard 
              delay={0.2}
              href="/course/ai"
              icon={<Terminal className="w-12 h-12 text-primary" />}
              title="Prompt Engineering"
              desc="Learn the exact science of communicating with LLMs to generate precise, powerful, and deterministic outputs."
            />
            <ModuleCard 
              delay={0.4}
              href="/course/ai"
              icon={<Network className="w-12 h-12 text-primary" />}
              title="AI Integration"
              desc="Build modern applications that leverage the power of OpenAI, Anthropic, and localized open-source models."
            />
            <ModuleCard 
              delay={0.6}
              href="/course/ai"
              icon={<BrainCircuit className="w-12 h-12 text-primary" />}
              title="Autonomous Agents"
              desc="Construct intelligent agents capable of planning, executing tools, and solving complex multi-step problems."
            />
            <ModuleCard 
              delay={0.8}
              href="/course/ai"
              icon={<Code2 className="w-12 h-12 text-primary" />}
              title="Model Fine-tuning"
              desc="Adapt large language models to your specific domain data for unprecedented accuracy and domain mastery."
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

function ModuleCard({ href, icon, title, desc, delay }: { href: string, icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <Link to={href} className="block group">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.8, type: "spring" }}
        className="glass-panel p-1 rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-700 relative overflow-hidden h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
        
        <div className="bg-black/60 backdrop-blur-xl rounded-[1.4rem] p-10 h-full relative z-10 flex flex-col overflow-hidden">
          {/* Subtle glow effect instead of an image */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />

          <div className="relative z-10 flex-grow flex flex-col">
            <div className="mb-8 transform group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-500 origin-left">
              {icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-white/50 leading-relaxed font-light mb-12 flex-grow text-lg">{desc}</p>
            
            <div className="flex items-center justify-between border-t border-white/10 pt-6 group-hover:border-primary/30 transition-colors mt-auto">
              <span className="text-xs font-mono tracking-widest uppercase text-white/50 group-hover:text-primary transition-colors">Start Module</span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
