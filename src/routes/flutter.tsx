import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Navigation, Footer } from "./index";
import { MonitorPlay, Smartphone, Monitor, Globe, ArrowRight } from "lucide-react";
import Magnetic from "../components/ui/Magnetic";

export const Route = createFileRoute("/flutter")({
  component: FlutterRoute,
});

function FlutterRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden font-sans relative" ref={containerRef}>
      {/* Custom Flutter Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(84,197,248,0.15),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[size:40px_40px] bg-[position:0_0,20px_20px] opacity-10" style={{ backgroundImage: "linear-gradient(45deg, rgba(84,197,248,0.1) 25%, transparent 25%, transparent 75%, rgba(84,197,248,0.1) 75%, rgba(84,197,248,0.1)), linear-gradient(45deg, rgba(84,197,248,0.1) 25%, transparent 25%, transparent 75%, rgba(84,197,248,0.1) 75%, rgba(84,197,248,0.1))" }} />
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
          <div className="inline-flex items-center justify-center p-4 bg-[#54C5F8]/10 border border-[#54C5F8]/30 backdrop-blur-md rounded-full mb-8 shadow-[0_0_30px_rgba(84,197,248,0.3)]">
            <MonitorPlay className="w-6 h-6 text-[#54C5F8]" />
            <span className="ml-3 font-mono text-sm tracking-widest uppercase text-white/80 pr-4">Flutter UI Toolkit</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black drop-shadow-2xl">
            BUILD FOR<br/>
            <span className="text-[#54C5F8] opacity-90">ANY SCREEN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-16">
            Build beautiful, natively compiled, multi-platform applications from a single codebase. Master the UI toolkit created by Google.
          </p>

          <Magnetic>
            <Link 
              to="/course/flutter"
              className="inline-block px-12 py-5 bg-[#54C5F8] text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_40px_rgba(84,197,248,0.4)] hover:shadow-[0_0_60px_rgba(84,197,248,0.6)] transition-shadow"
            >
              Launch Flutter Guide
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
              icon={<Smartphone className="w-8 h-8 text-[#54C5F8]" />}
              title="Mobile First"
              desc="Deploy to iOS and Android from a single codebase without compromising on performance or native feel."
            />
            <FeatureCard 
              delay={0.4}
              icon={<Globe className="w-8 h-8 text-[#54C5F8]" />}
              title="Web Ready"
              desc="Compile your Dart code directly to highly optimized JavaScript and WebAssembly for browser deployment."
            />
            <FeatureCard 
              delay={0.6}
              icon={<Monitor className="w-8 h-8 text-[#54C5F8]" />}
              title="Native Desktop"
              desc="Create deeply integrated desktop applications for Windows, macOS, and Linux with native hardware access."
            />
          </div>
          
          <div className="mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-24 flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#54C5F8]/20 to-transparent opacity-50 z-0" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Start Building Now</h2>
              <p className="text-white/60 mb-12 max-w-2xl text-lg">Dive into widget trees, state management, and custom animations in our comprehensive guide.</p>
              <Link to="/course/flutter" className="inline-flex items-center gap-4 text-[#54C5F8] font-mono tracking-widest uppercase border-b border-[#54C5F8]/30 pb-2 hover:border-[#54C5F8] transition-colors">
                Open Flutter Guide
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
      className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-[#54C5F8]/30 transition-colors"
    >
      <div className="w-16 h-16 rounded-2xl bg-[#54C5F8]/10 flex items-center justify-center mb-8 border border-[#54C5F8]/20">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold text-white mb-4">{title}</h3>
      <p className="text-white/50 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
