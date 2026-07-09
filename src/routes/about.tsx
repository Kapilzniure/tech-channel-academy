import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navigation, Footer } from "./index";
import { Code2, Youtube, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans relative">
      <div className="bg-noise" />
      <Navigation />
      
      <main className="relative z-10 pt-40 pb-20 container-page min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 shrink-0 relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl" />
              <img src="/favicon.ico" alt="Bishworaj Poudel" className="w-full h-full object-cover p-8 relative z-10 drop-shadow-2xl" />
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                Bishworaj Poudel
              </h1>
              <h2 className="text-xl text-primary font-mono tracking-widest uppercase mb-6">System Architect & Educator</h2>
              <p className="text-lg text-white/60 leading-relaxed font-light">
                Founder of Technology Channel. Passionate about making complex technology accessible to everyone. Specializing in AI, automation, self-hosting, and modern web architectures. Over a decade of experience bridging the gap between theoretical computer science and practical, world-changing applications.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon={<Youtube className="w-6 h-6 text-primary" />} label="Subscribers" value="100K+" />
            <StatCard icon={<Users className="w-6 h-6 text-primary" />} label="Students" value="50K+" />
            <StatCard icon={<Code2 className="w-6 h-6 text-primary" />} label="Tutorials" value="500+" />
            <StatCard icon={<Globe className="w-6 h-6 text-primary" />} label="Countries" value="120+" />
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors border border-white/5">
      <div className="mb-4 bg-primary/10 p-4 rounded-full">{icon}</div>
      <div className="text-3xl font-display font-bold text-white mb-2">{value}</div>
      <div className="text-xs font-mono text-white/50 tracking-widest uppercase">{label}</div>
    </div>
  );
}
