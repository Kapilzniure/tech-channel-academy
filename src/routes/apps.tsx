import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navigation, Footer } from "./index";
import { Smartphone, Download, Star, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import NeuralNetworkCanvas from "../components/ui/NeuralNetworkCanvas";
import Magnetic from "../components/ui/Magnetic";

export const Route = createFileRoute("/apps")({
  component: AppsRoute,
});

function AppsRoute() {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden font-sans relative">
      <NeuralNetworkCanvas />
      <div className="bg-noise mix-blend-overlay opacity-50 z-0" />
      <Navigation />
      
      <main className="relative z-10 pt-40 pb-32 container-page min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          
          {/* Left Column: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 relative z-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">Mobile Ecosystem</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-2xl">
              LEARNING<br/>
              <span className="text-primary">ANYWHERE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light mb-12 max-w-xl">
              Take your education on the go. Download our official mobile applications designed for seamless educational experiences, offline access, and interactive coding.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
              <Magnetic>
                <motion.a 
                  href="https://play.google.com/store/apps/dev?id=7053759830235005660" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow"
                >
                  <Download className="w-5 h-5" />
                  Google Play
                </motion.a>
              </Magnetic>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Trusted by 100K+ Users</span>
              </div>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/70">Offline Video Playback</span>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-white/70">Interactive Code Snippets</span>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-white/70">Ad-Free Premium Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Phone Mockup */}
          <div className="order-1 lg:order-2 relative h-[600px] flex items-center justify-center perspective-1000">
            <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateX: [15, 20, 15],
                rotateY: [-15, -10, -15]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
              className="relative w-[300px] h-[600px] rounded-[3rem] border-4 border-white/10 bg-black shadow-[0_0_100px_rgba(0,255,255,0.2)] overflow-hidden transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-30" />
              
              {/* Screen Content Simulation */}
              <div className="absolute inset-0 bg-[#0a0a0a] z-10 flex flex-col">
                <div className="h-48 bg-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary mb-4 shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
                    <div className="w-32 h-4 bg-white rounded-full mb-2" />
                    <div className="w-24 h-3 bg-white/50 rounded-full" />
                  </div>
                </div>
                <div className="flex-1 p-6 space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="w-full h-3 bg-white/20 rounded-full" />
                        <div className="w-2/3 h-3 bg-white/10 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glass Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 z-20 pointer-events-none" />
            </motion.div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
