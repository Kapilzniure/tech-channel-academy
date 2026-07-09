import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navigation, Footer } from "./index";
import { MonitorPlay, Server, Terminal, Cpu } from "lucide-react";

export const Route = createFileRoute("/courses")({
  component: CoursesRoute,
});

const courses = [
  {
    title: "Java Masterclass",
    description: "Go from zero to hero in Java. Learn object-oriented programming, data structures, and enterprise application development.",
    icon: <Server className="w-8 h-8 text-primary" />,
    link: "https://javaguide.technologychannel.org",
    tag: "POPULAR"
  },
  {
    title: "AI Basics & Prompt Engineering",
    description: "Master the fundamentals of Artificial Intelligence and learn how to leverage LLMs for automation and productivity.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    link: "http://learnaibasic.com/",
    tag: "NEW"
  },
  {
    title: "Flutter Mobile Development",
    description: "Build beautiful natively compiled applications for mobile, web, and desktop from a single codebase.",
    icon: <MonitorPlay className="w-8 h-8 text-primary" />,
    link: "https://flutter-tutorial.net",
    tag: "TRENDING"
  },
  {
    title: "Dart Programming Guide",
    description: "Master the language behind Flutter. Understand core concepts, async programming, and modern Dart syntax.",
    icon: <Terminal className="w-8 h-8 text-primary" />,
    link: "https://dart-tutorial.com/",
    tag: "ESSENTIAL"
  }
];

function CoursesRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans relative">
      <div className="bg-noise" />
      <Navigation />
      
      <main className="relative z-10 pt-40 pb-32 container-page">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            PREMIUM COURSES
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Master the most in-demand skills in technology. Practical, project-based learning designed to elevate your career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.a 
              href={course.link}
              target="_blank"
              rel="noreferrer"
              key={course.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-primary/50 group transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary/10 transition-colors">
                    {course.icon}
                  </div>
                  <span className="text-xs font-mono tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/10">
                    {course.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light mb-8 flex-grow">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary border-t border-white/10 pt-6 group-hover:border-primary/30 transition-colors">
                  View Syllabus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
