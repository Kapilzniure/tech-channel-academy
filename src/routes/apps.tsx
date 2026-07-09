import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navigation, Footer } from "./index";
import { Smartphone, Download, Star } from "lucide-react";

export const Route = createFileRoute("/apps")({
  component: AppsRoute,
});

function AppsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans relative">
      <div className="bg-noise" />
      <Navigation />
      
      <main className="relative z-10 pt-40 pb-32 container-page min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-center"
        >
          <div className="inline-flex items-center justify-center p-6 bg-primary/10 border border-primary/30 rounded-full mb-12 shadow-[0_0_50px_rgba(0,255,255,0.2)]">
            <Smartphone className="w-16 h-16 text-primary" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-display font-black tracking-tighter mb-8 text-white">
            MOBILE APPS
          </h1>
          
          <p className="text-xl text-white/50 leading-relaxed font-light mb-12">
            Take your learning on the go. Download our official mobile applications designed to provide seamless educational experiences, offline access, and interactive coding environments.
          </p>
          
          <a 
            href="https://play.google.com/store/apps/dev?id=7053759830235005660" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <Download className="w-6 h-6" />
            View on Google Play
          </a>
          
          <div className="mt-16 flex items-center justify-center gap-2 text-white/40 font-mono text-sm uppercase tracking-widest border-t border-white/10 pt-8">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-2">Trusted by 100K+ Users</span>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
