import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import { Navigation, Footer } from "./index";
import { MonitorPlay, Server, Terminal, Cpu, ArrowRight } from "lucide-react";
import NeuralNetworkCanvas from "../components/ui/NeuralNetworkCanvas";

export const Route = createFileRoute("/courses")({
  component: CoursesRoute,
});

const courses = [
  {
    title: "Java Masterclass",
    description: "Go from zero to hero in Java. Learn object-oriented programming, data structures, and enterprise application development.",
    icon: <Server className="w-10 h-10 text-primary" />,
    link: "/course/java",
    tag: "POPULAR"
  },
  {
    title: "AI Basics & Prompt Engineering",
    description: "Master the fundamentals of Artificial Intelligence and learn how to leverage LLMs for automation and productivity.",
    icon: <Cpu className="w-10 h-10 text-primary" />,
    link: "/course/ai",
    tag: "NEW"
  },
  {
    title: "Flutter Mobile Development",
    description: "Build beautiful natively compiled applications for mobile, web, and desktop from a single codebase.",
    icon: <MonitorPlay className="w-10 h-10 text-primary" />,
    link: "/course/flutter",
    tag: "TRENDING"
  },
  {
    title: "Dart Programming Guide",
    description: "Master the language behind Flutter. Understand core concepts, async programming, and modern Dart syntax.",
    icon: <Terminal className="w-10 h-10 text-primary" />,
    link: "/course/dart",
    tag: "ESSENTIAL"
  }
];

function CoursesRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans relative">
      <NeuralNetworkCanvas />
      <div className="bg-noise mix-blend-overlay opacity-50" />
      <Navigation />
      
      <main className="relative z-10 pt-40 pb-32 container-page min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-3 px-6 bg-primary/10 border border-primary/30 rounded-full mb-8">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Global Directory</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            PREMIUM<br/>COURSES
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Master the most in-demand skills in technology. Practical, project-based learning designed to elevate your career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-1000">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function CourseCard({ course }: { course: any }) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Smooth springs for 3D physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Glare effect physics
  const background = useMotionTemplate`radial-gradient(800px circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])}, rgba(255,255,255,0.06), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize values between -0.5 and 0.5
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={course.link} className="block relative w-full h-full">
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="block relative w-full h-full glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/50 group transition-colors duration-500 overflow-hidden"
      >
        {/* Glare layer */}
        <motion.div 
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />
        
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-12">
            <div className="p-5 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 transform group-hover:scale-110 origin-left">
              {course.icon}
            </div>
            <span className="text-xs font-mono tracking-widest uppercase text-primary border border-primary/30 px-4 py-1.5 rounded-full bg-primary/10 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
              {course.tag}
            </span>
          </div>
          
          <h3 className="text-4xl font-display font-bold text-white mb-6 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-white/50 leading-relaxed font-light mb-12 flex-grow text-lg">
            {course.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white/50 group-hover:text-primary border-t border-white/10 pt-8 group-hover:border-primary/30 transition-colors mt-auto">
            Access Course
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
