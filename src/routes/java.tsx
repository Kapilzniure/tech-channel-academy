import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Navigation, Footer } from "./index";
import { Server, Database, Shield, Cpu, ArrowRight } from "lucide-react";
import Magnetic from "../components/ui/Magnetic";

export const Route = createFileRoute("/java")({
  component: JavaRoute,
});

function JavaRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden font-sans relative" ref={containerRef}>
      {/* Custom Java Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,140,0,0.15),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }} />
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
          <div className="inline-flex items-center justify-center p-4 bg-[#FF8C00]/10 border border-[#FF8C00]/30 backdrop-blur-md rounded-full mb-8 shadow-[0_0_30px_rgba(255,140,0,0.3)]">
            <Server className="w-6 h-6 text-[#FF8C00]" />
            <span className="ml-3 font-mono text-sm tracking-widest uppercase text-white/80 pr-4">Enterprise Architecture</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-black drop-shadow-2xl">
            ROBUST &<br/>
            <span className="text-[#FF8C00] opacity-90">SCALABLE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-16">
            Master enterprise-grade Java programming. From object-oriented principles to distributed systems, learn the language that runs the world's largest financial and tech infrastructures.
          </p>

          <Magnetic>
            <Link 
              to="/course/java"
              className="inline-block px-12 py-5 bg-[#FF8C00] text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_40px_rgba(255,140,0,0.4)] hover:shadow-[0_0_60px_rgba(255,140,0,0.6)] transition-shadow"
            >
              Access Java Guide
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
              icon={<Database className="w-8 h-8 text-[#FF8C00]" />}
              title="Enterprise Grade"
              desc="Build highly concurrent, fault-tolerant backend systems designed to handle millions of transactions."
            />
            <FeatureCard 
              delay={0.4}
              icon={<Shield className="w-8 h-8 text-[#FF8C00]" />}
              title="Secure & Reliable"
              desc="Leverage Java's strict typing, garbage collection, and comprehensive security manager."
            />
            <FeatureCard 
              delay={0.6}
              icon={<Cpu className="w-8 h-8 text-[#FF8C00]" />}
              title="JVM Ecosystem"
              desc="Compile once, run anywhere. Tap into the massive ecosystem of Maven packages and Spring Boot frameworks."
            />
          </div>
          
          <div className="mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-24 flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/20 to-transparent opacity-50 z-0" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Master the JVM</h2>
              <p className="text-white/60 mb-12 max-w-2xl text-lg">Go from zero to hero in Java object-oriented programming, data structures, and architecture.</p>
              <Link to="/course/java" className="inline-flex items-center gap-4 text-[#FF8C00] font-mono tracking-widest uppercase border-b border-[#FF8C00]/30 pb-2 hover:border-[#FF8C00] transition-colors">
                Open Java Guide
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
      className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-[#FF8C00]/30 transition-colors"
    >
      <div className="w-16 h-16 rounded-2xl bg-[#FF8C00]/10 flex items-center justify-center mb-8 border border-[#FF8C00]/20">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold text-white mb-4">{title}</h3>
      <p className="text-white/50 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
