import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { useEffect, useState, useRef, ReactNode } from "react";
import { episodes } from "@/data/episodes";
import { EpisodeCard } from "@/components/site/EpisodeCard";
import { Github, Facebook, Instagram, ChevronDown, MonitorPlay, Code2, Sparkles, Server, ArrowUpRight, Keyboard } from "lucide-react";
import Magnetic from "../components/ui/Magnetic";
import NeuralNetworkCanvas from "../components/ui/NeuralNetworkCanvas";

// Discord SVG icon
const Discord = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

export const Route = createFileRoute("/")({
  component: HomeRoute,
});

// --- ADVANCED COMPONENTS ---

// 1. Cinematic Text Reveal
function CinematicText({ text, className = "" }: { text: string, className?: string }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center", perspective: "1000px" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em", display: "inline-block", transformOrigin: "50% 100%" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// 2. 3D Tilt Card Physics
function TiltCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Glare physics
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Glare Layer */}
      <motion.div 
        className="absolute inset-0 z-50 pointer-events-none rounded-[inherit] mix-blend-overlay"
        style={{ background: glareBackground }}
      />
      {children}
    </motion.div>
  );
}

// --- MAIN PAGE ---

function HomeRoute() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-hidden font-sans relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Navigation />
            <HeroSection />
            <LatestTransmissions />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Preloader() {
  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-[1px] w-48 bg-primary origin-left mb-6 shadow-[0_0_10px_var(--color-primary)]"
      />
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[10px] tracking-[0.4em] text-primary uppercase font-display"
      >
        Technology Channel
      </motion.div>
    </motion.div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isLearnOpen ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/10' : 'py-8'}`}
      >
        <div className="container-page flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 z-50 group relative">
            <img src="/favicon.ico" alt="Logo" className="w-8 h-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_var(--color-primary)] transition-shadow relative z-10" />
            <span className="font-display font-bold text-lg tracking-tight hidden sm:block relative z-10">Technology Channel</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 relative z-50">
            <Magnetic><Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2">Home</Link></Magnetic>
            
            <Magnetic>
              <button 
                onMouseEnter={() => setIsLearnOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer uppercase tracking-widest p-2"
              >
                Learn <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLearnOpen ? 'rotate-180' : ''}`} />
              </button>
            </Magnetic>
            
            <Magnetic><Link to="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2">About</Link></Magnetic>
            <Magnetic><Link to="/courses" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2">Courses</Link></Magnetic>
            <Magnetic><Link to="/apps" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest block p-2">Apps</Link></Magnetic>
          </nav>

          <Magnetic>
            <a href="https://forms.gle/5n6kLxeyR2CgHQpG7" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform z-50">
              Become a Teacher
            </a>
          </Magnetic>
        </div>
      </motion.header>

      {/* Clean Header structure without Mega-Menu */}
      <AnimatePresence>
        {isLearnOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 pt-[120px] pb-12 overflow-y-auto"
            onMouseLeave={() => setIsLearnOpen(false)}
          >
            <div className="container-page">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <Link to="/learn" className="group block">
                  <TiltCard className="h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden">
                    <Sparkles className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" />
                    <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">AI Mastery</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10">Master ChatGPT, prompt engineering, and core AI concepts.</p>
                    <div className="text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10">Launch Hub</div>
                  </TiltCard>
                </Link>

                <Link to="/course/$topic" params={{ topic: "dart" }} className="group block">
                  <TiltCard className="h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden">
                    <Code2 className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" />
                    <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">Dart</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10">The definitive guide to Dart, the language powering Flutter.</p>
                    <div className="text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10">Launch Hub</div>
                  </TiltCard>
                </Link>

                <Link to="/course/$topic" params={{ topic: "flutter" }} className="group block">
                  <TiltCard className="h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden">
                    <MonitorPlay className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" />
                    <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">Flutter Dev</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10">Build cross-platform applications beautifully and efficiently.</p>
                    <div className="text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10">Launch Hub</div>
                  </TiltCard>
                </Link>

                <Link to="/course/$topic" params={{ topic: "java" }} className="group block">
                  <TiltCard className="h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden">
                    <Server className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" />
                    <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">Java</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10">Enterprise-grade Java programming from absolute scratch.</p>
                    <div className="text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10">Launch Hub</div>
                  </TiltCard>
                </Link>

                <a href="https://typingowl.com/" target="_blank" rel="noreferrer" className="group block">
                  <TiltCard className="h-full flex flex-col bg-white/5 hover:bg-white/10 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors relative overflow-hidden">
                    <Keyboard className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform relative z-10" />
                    <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">Typing Owl</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light mb-6 relative z-10">Master touch typing to code and work faster.</p>
                    <div className="text-[10px] text-primary font-mono tracking-widest uppercase mt-auto relative z-10 flex items-center gap-1">External <ArrowUpRight className="w-3 h-3" /></div>
                  </TiltCard>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden container-page"
    >
      <NeuralNetworkCanvas />
      
      {/* Abstract geometric background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] border border-white/5 rounded-full pointer-events-none mix-blend-overlay"
      />
      
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center w-full mt-20 select-none">
        <CinematicText 
          text="TECHNOLOGY" 
          className="text-[14vw] md:text-[10vw] leading-[0.8] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
        />
        <CinematicText 
          text="CHANNEL" 
          className="text-[14vw] md:text-[10vw] leading-[0.8] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-primary/80 to-white ml-0 md:ml-[10vw]"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-base md:text-xl text-white/60 font-light max-w-xl text-center tracking-wide"
        >
          Practical guides to master AI, automation, self-hosting and development — made simple by Bishworaj Poudel.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </motion.section>
  );
}

function LatestTransmissions() {
  const recentEpisodes = episodes.slice(0, 6); // Take top 6 latest episodes

  return (
    <section className="relative min-h-screen py-32 container-page z-20">
      <div className="flex items-end justify-between mb-16 gap-4 flex-wrap">
        <div>
          <p className="text-sm font-mono uppercase tracking-widest text-primary mb-3">
            Latest Updates
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Recent Transmissions
          </h2>
        </div>
        <Link
          to="/episodes"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/50 hover:text-primary transition-all"
        >
          View Archive <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recentEpisodes.map((ep, i) => (
          <motion.div
            key={ep.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
          >
            <EpisodeCard ep={ep} index={i} featured={i === 0} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-32 pb-16 border-t border-white/10 mt-32 overflow-hidden bg-black/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/favicon.ico" alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">Technology Channel</span>
            </div>
            <p className="text-white/50 font-light max-w-sm mb-8 leading-relaxed">
              Making technology accessible. Practical guides for AI, automation, and modern software development by Bishworaj Poudel.
            </p>
            <div className="flex gap-4">
              <Magnetic><SocialLink href="https://github.com/technologychannel" icon={<Github className="w-5 h-5" />} label="GitHub" /></Magnetic>
              <Magnetic><SocialLink href="https://discord.gg/hwNSzvE92F" icon={<Discord className="w-5 h-5" />} label="Discord" /></Magnetic>
              <Magnetic><SocialLink href="https://www.facebook.com/technologychannel.org" icon={<Facebook className="w-5 h-5" />} label="Facebook" /></Magnetic>
              <Magnetic><SocialLink href="https://www.instagram.com/technologychannelofficial/" icon={<Instagram className="w-5 h-5" />} label="Instagram" /></Magnetic>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-white/50 font-light text-sm uppercase tracking-widest">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/apps" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Learning Paths</h4>
            <ul className="flex flex-col gap-4 text-white/50 font-light text-sm uppercase tracking-widest">
              <li><Link to="/learn" className="hover:text-primary transition-colors">AI Basics</Link></li>
              <li><Link to="/course/$topic" params={{ topic: "dart" }} className="hover:text-primary transition-colors">Dart Programming</Link></li>
              <li><Link to="/course/$topic" params={{ topic: "flutter" }} className="hover:text-primary transition-colors">Flutter Development</Link></li>
              <li><Link to="/course/$topic" params={{ topic: "java" }} className="hover:text-primary transition-colors">Java Masterclass</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-mono text-white/30">
          <p>© {new Date().getFullYear()} Technology Channel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-black hover:border-primary transition-all hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
