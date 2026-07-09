import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navigation, Footer } from "./index";
import { Sparkles, Terminal, Code2, MoveRight } from "lucide-react";

export const Route = createFileRoute("/learn")({
  component: LearnRoute,
});

function LearnRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans relative">
      <div className="bg-noise" />
      <Navigation />
      
      <main className="relative z-10 pt-40 pb-32 container-page min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 border border-primary/30 rounded-full mb-8">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            AI HUB
          </h1>
          <p className="text-xl text-white/50 leading-relaxed font-light">
            Welcome to the Artificial Intelligence learning hub. Master prompt engineering, understand large language models, and build next-generation applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.a 
            href="http://learnaibasic.com/" 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-panel p-12 rounded-[3rem] border border-white/5 hover:border-primary/50 group transition-all duration-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <Terminal className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-4xl font-display font-bold text-white mb-4">Prompt Engineering</h2>
              <p className="text-white/60 mb-12 font-light">Learn the science of communicating with LLMs to generate precise, powerful outputs.</p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6 group-hover:border-primary/30 transition-colors">
                <span className="text-sm font-mono tracking-widest uppercase text-primary">Start Module</span>
                <MoveRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.a>

          <motion.a 
            href="http://learnaibasic.com/" 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass-panel p-12 rounded-[3rem] border border-white/5 hover:border-primary/50 group transition-all duration-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <Code2 className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-4xl font-display font-bold text-white mb-4">AI Integration</h2>
              <p className="text-white/60 mb-12 font-light">Build applications that leverage the power of OpenAI, Anthropic, and local models.</p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6 group-hover:border-primary/30 transition-colors">
                <span className="text-sm font-mono tracking-widest uppercase text-primary">Start Module</span>
                <MoveRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
