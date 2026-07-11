import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navigation, Footer } from "./index";
import { Smartphone, Download, Star, CheckCircle2, Zap, ShieldCheck, Code2 } from "lucide-react";
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
          <div className="order-1 lg:order-2 relative h-[650px] flex items-center justify-center perspective-1000">
            <div className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" />
            
            {/* Phone Body */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotateX: [10, 15, 10],
                rotateY: [-10, -5, -10]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "easeInOut" 
              }}
              className="relative w-[320px] h-[650px] rounded-[50px] bg-[#0a0a0a] shadow-[0_0_0_2px_#333,0_0_0_8px_#111,0_30px_60px_rgba(0,0,0,0.8)] border border-[#222] transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Hardware Buttons */}
              <div className="absolute top-[120px] -left-[10px] w-[4px] h-[30px] bg-[#333] rounded-l-md shadow-inner" />
              <div className="absolute top-[170px] -left-[10px] w-[4px] h-[60px] bg-[#333] rounded-l-md shadow-inner" />
              <div className="absolute top-[240px] -left-[10px] w-[4px] h-[60px] bg-[#333] rounded-l-md shadow-inner" />
              <div className="absolute top-[180px] -right-[10px] w-[4px] h-[80px] bg-[#333] rounded-r-md shadow-inner" />

              {/* Inner Bezel & Screen */}
              <div className="absolute inset-[6px] bg-black rounded-[44px] overflow-hidden">
                
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-[0_0_2px_rgba(255,255,255,0.1)]">
                  <div className="w-3 h-3 rounded-full bg-[#111] shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-blue-900/40 shadow-[0_0_5px_rgba(0,0,255,0.5)]" />
                </div>

                {/* App UI Inside Phone */}
                <div className="w-full h-full bg-[#050505] text-white flex flex-col pt-12 pb-6 relative z-10">
                  {/* App Header */}
                  <div className="px-5 flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-white/50 text-[10px] font-mono uppercase tracking-widest mb-1">Welcome back</h3>
                      <h2 className="text-lg font-display font-bold">Bishworaj Poudel</h2>
                    </div>
                    <img src="/favicon.ico" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-primary/30" />
                  </div>

                  <div className="flex-1 overflow-y-auto px-5 no-scrollbar space-y-6">
                    {/* Featured Video Card */}
                    <div className="w-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-lg">
                      <div className="relative w-full aspect-video">
                        <img 
                          src="https://technologychannel.org/images/thumbnail.png"
                          alt="Video Thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                          <div className="w-10 h-10 rounded-full bg-primary/90 text-black flex items-center justify-center pl-1 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-bold mb-1">Complete AI Masterclass 2026</h4>
                        <p className="text-[10px] text-white/50 line-clamp-2">Learn how to build advanced AI applications with modern tools and frameworks.</p>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                        <div className="text-xl font-black">14</div>
                        <div className="text-[9px] text-white/40 uppercase tracking-widest">Day Streak</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-xl font-black">23</div>
                        <div className="text-[9px] text-white/40 uppercase tracking-widest">Completed</div>
                      </div>
                    </div>

                    {/* Continue Learning */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/70 mb-3">Continue Learning</h4>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex gap-3 items-center">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                          <Code2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xs font-bold mb-1">Dart Programming</h5>
                          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[60%] h-full bg-blue-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Bottom Navigation */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 flex justify-between items-center pb-4">
                    <div className="flex flex-col items-center gap-1 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      <span className="text-[8px] font-bold">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white/40">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                      <span className="text-[8px] font-bold">Courses</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white/40">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      <span className="text-[8px] font-bold">Info</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white/40">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span className="text-[8px] font-bold">Profile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glass Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/5 to-transparent rounded-[50px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[150px] h-[300px] bg-gradient-to-bl from-white/10 to-transparent rounded-tr-[50px] pointer-events-none" />
            </motion.div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
