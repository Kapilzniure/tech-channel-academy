import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronLeft, BookOpen, CheckCircle, PlayCircle, Code2, Terminal, HelpCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/course/$topic")({
  component: CourseViewerRoute,
});

function CourseViewerRoute() {
  const { topic } = Route.useParams();
  const [activeChapter, setActiveChapter] = useState(0);

  // Generate dynamic dummy content based on the topic
  const getCourseData = (t: string) => {
    switch (t) {
      case "dart":
        return {
          title: "Dart Masterclass",
          color: "text-[#0175C2]",
          bg: "bg-[#0175C2]",
          border: "border-[#0175C2]",
          glow: "shadow-[0_0_30px_rgba(1,117,194,0.3)]",
          chapters: ["Introduction to Dart", "Variables & Data Types", "Control Flow", "Functions", "Object Oriented Programming", "Asynchronous Programming", "Null Safety"]
        };
      case "flutter":
        return {
          title: "Flutter UI Toolkit",
          color: "text-[#54C5F8]",
          bg: "bg-[#54C5F8]",
          border: "border-[#54C5F8]",
          glow: "shadow-[0_0_30px_rgba(84,197,248,0.3)]",
          chapters: ["Getting Started with Flutter", "Widget Tree Basics", "Stateful vs Stateless", "Layouts & Flexbox", "Navigation & Routing", "Animations", "HTTP & APIs"]
        };
      case "java":
        return {
          title: "Java Enterprise Architecture",
          color: "text-[#FF8C00]",
          bg: "bg-[#FF8C00]",
          border: "border-[#FF8C00]",
          glow: "shadow-[0_0_30px_rgba(255,140,0,0.3)]",
          chapters: ["JVM Architecture", "Primitive Types & Operators", "Classes & Objects", "Inheritance & Polymorphism", "Collections Framework", "Exception Handling", "Concurrency & Threads"]
        };
      case "ai":
        return {
          title: "AI Mastery Protocol",
          color: "text-primary",
          bg: "bg-primary",
          border: "border-primary",
          glow: "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
          chapters: ["History of Neural Networks", "Transformers & Attention Mechanisms", "Prompt Engineering 101", "RAG Architecture", "Building Autonomous Agents", "Model Fine-Tuning", "Deployment Strategies"]
        };
      default:
        return {
          title: "Technology Course",
          color: "text-white",
          bg: "bg-white",
          border: "border-white",
          glow: "shadow-[0_0_30px_rgba(255,255,255,0.3)]",
          chapters: ["Module 1", "Module 2", "Module 3"]
        };
    }
  };

  const data = getCourseData(topic);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      {/* Top Navbar */}
      <header className="h-20 border-b border-white/10 bg-black/50 backdrop-blur-xl flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-6">
          <Link to="/" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <ChevronLeft className="w-5 h-5 text-white/70" />
          </Link>
          <div className="flex flex-col">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Currently Learning</span>
            <h1 className={`text-lg font-display font-bold ${data.color}`}>{data.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-white/60 font-mono hidden md:block">Progress: 14%</div>
          <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden hidden md:block">
            <div className={`h-full ${data.bg} w-[14%]`} />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <div className="bg-noise mix-blend-overlay opacity-30 pointer-events-none absolute inset-0 z-0" />
        
        {/* Sidebar Syllabus */}
        <aside className="w-80 border-r border-white/10 bg-black/30 backdrop-blur-md overflow-y-auto hidden lg:block z-10">
          <div className="p-6">
            <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-6">Course Syllabus</h2>
            <div className="space-y-2">
              {data.chapters.map((chapter, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveChapter(index)}
                  className={`w-full text-left p-4 rounded-2xl flex items-start gap-4 transition-all duration-300 ${
                    activeChapter === index 
                      ? `bg-white/10 ${data.border} border` 
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="mt-1">
                    {index === 0 ? (
                      <CheckCircle className={`w-5 h-5 ${data.color}`} />
                    ) : (
                      <PlayCircle className={`w-5 h-5 ${activeChapter === index ? data.color : "text-white/30"}`} />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/40 mb-1">Module {index + 1}</div>
                    <div className={`text-sm font-bold ${activeChapter === index ? "text-white" : "text-white/70"}`}>
                      {chapter}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative z-10 scroll-smooth">
          <div className="max-w-4xl mx-auto px-8 py-16 md:py-24">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8`}>
                <BookOpen className={`w-4 h-4 ${data.color}`} />
                <span className="text-xs font-mono tracking-widest text-white/70 uppercase">Module {activeChapter + 1}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-8 tracking-tight">
                {data.chapters[activeChapter]}
              </h1>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-white/70 leading-relaxed font-light mb-12">
                  Welcome to Module {activeChapter + 1}. In this lesson, we will explore the fundamental concepts of {data.chapters[activeChapter].toLowerCase()} and how they apply to building modern, scalable applications in {data.title}.
                </p>

                <div className={`p-8 rounded-3xl bg-black border ${data.border} border-opacity-30 mb-12 relative overflow-hidden group`}>
                  <div className={`absolute inset-0 ${data.bg} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10 flex items-start gap-6">
                    <Terminal className={`w-8 h-8 ${data.color} shrink-0`} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Core Concept</h3>
                      <p className="text-white/60">This module focuses on the theoretical and practical underpinnings of the architecture. Make sure you follow along with the interactive code examples below to solidify your understanding.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Interactive Code Example</h3>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] mb-12">
                  <div className="flex items-center px-4 py-3 border-b border-white/10 bg-black/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 text-xs font-mono text-white/40">example.code</div>
                  </div>
                  <div className="p-6 overflow-x-auto text-sm font-mono text-white/80 leading-relaxed">
                    <pre>
                      <code>
{`// Initialize the core system architecture
function initializeSystem() {
  const config = loadConfiguration();
  
  if (config.isReady) {
    console.log("System optimized and ready.");
    startEngine(config);
  } else {
    throw new Error("Configuration failed.");
  }
}

initializeSystem();`}
                      </code>
                    </pre>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Knowledge Check</h3>
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <HelpCircle className="w-6 h-6 text-white/50" />
                    <span className="font-bold text-white">Question 1</span>
                  </div>
                  <p className="text-white/80 mb-6">What is the primary purpose of initializing the core system before starting the engine?</p>
                  <div className="space-y-3">
                    <button className="w-full text-left p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white/70">To allocate memory resources.</button>
                    <button className={`w-full text-left p-4 rounded-xl border ${data.border} border-opacity-50 bg-white/5 transition-colors text-white`}>To verify the configuration is valid and loaded.</button>
                    <button className="w-full text-left p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white/70">To bypass security protocols.</button>
                  </div>
                </div>

              </div>

              {/* Next Chapter Button */}
              <div className="mt-16 pt-8 border-t border-white/10 flex justify-end">
                <button 
                  onClick={() => setActiveChapter(c => Math.min(c + 1, data.chapters.length - 1))}
                  className={`flex items-center gap-4 px-8 py-4 rounded-full ${data.bg} text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform ${data.glow}`}
                >
                  Continue to Next Module
                </button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
