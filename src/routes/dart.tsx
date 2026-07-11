import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Navigation, Footer } from "./index";
import { Code2, Zap, LayoutTemplate, Layers, ArrowRight } from "lucide-react";
import Magnetic from "../components/ui/Magnetic";

export const Route = createFileRoute("/dart")({
  component: DartRoute,
});

function DartRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden font-sans relative" ref={containerRef}>
      {/* Custom Dart Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,180,255,0.15),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)" }} />
      </div>
      
      <div className="bg-noise mix-blend-overlay opacity-50 z-0" />
      <Navigation />
      
      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-32 container-page min-h-screen flex flex-col items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto relative"
        >
          <div className="inline-flex items-center justify-center p-4 bg-[#0175C2]/10 border border-[#0175C2]/30 backdrop-blur-md rounded-full mb-8 shadow-[0_0_30px_rgba(1,117,194,0.3)]">
            <Code2 className="w-6 h-6 text-[#0175C2]" />
            <span className="ml-3 font-mono text-sm tracking-widest uppercase text-white/80 pr-4">Dart Language</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black drop-shadow-2xl">
            CLIENT<br/>
            <span className="text-[#0175C2] opacity-90">OPTIMIZED</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-16">
            The definitive guide to Dart. Master the highly productive, object-oriented programming language that powers Flutter's revolutionary cross-platform capabilities.
          </p>

          <Magnetic>
            <Link 
              to="/course/dart"
              className="inline-block px-12 py-5 bg-[#0175C2] text-white font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_40px_rgba(1,117,194,0.4)] hover:shadow-[0_0_60px_rgba(1,117,194,0.6)] transition-shadow"
            >
              Start Learning Dart
            </Link>
          </Magnetic>
        </motion.div>
      </main>

      {/* Features Grid */}
      <section className="relative z-20 py-32 bg-black/80 backdrop-blur-3xl border-t border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              delay={0.2}
              icon={<Zap className="w-8 h-8 text-[#0175C2]" />}
              title="Lightning Fast"
              desc="AOT compiled to fast, predictable, native code, allowing you to write high-performance applications."
            />
            <FeatureCard 
              delay={0.4}
              icon={<LayoutTemplate className="w-8 h-8 text-[#0175C2]" />}
              title="UI Optimized"
              desc="Built specifically for user interface creation with features like sound null safety and spread operators."
            />
            <FeatureCard 
              delay={0.6}
              icon={<Layers className="w-8 h-8 text-[#0175C2]" />}
              title="Multi-Platform"
              desc="Compile to ARM & x64 machine code for mobile, desktop, and backend, or compile to JavaScript for the web."
            />
          </div>
          
          <div className="mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-24 flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0175C2]/20 to-transparent opacity-50 z-0" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to master Dart?</h2>
              <p className="text-white/60 mb-12 max-w-2xl text-lg">Join thousands of developers learning the language behind the fastest growing UI framework on the planet.</p>
              <Link to="/course/dart" className="inline-flex items-center gap-4 text-[#0175C2] font-mono tracking-widest uppercase border-b border-[#0175C2]/30 pb-2 hover:border-[#0175C2] transition-colors">
                Open Dart Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-[#0175C2]/30 transition-colors"
    >
      <div className="w-16 h-16 rounded-2xl bg-[#0175C2]/10 flex items-center justify-center mb-8 border border-[#0175C2]/20">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold text-white mb-4">{title}</h3>
      <p className="text-white/50 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
