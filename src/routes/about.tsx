import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { Navigation, Footer } from "./index";
import { Code2, Youtube, Users, Globe, BrainCircuit, TerminalSquare, Rocket, Facebook, Instagram, MessageSquare, Send, Github } from "lucide-react";
import NeuralNetworkCanvas from "../components/ui/NeuralNetworkCanvas";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const yImage = useTransform(smoothProgress, [0, 1], [0, 400]);
  const scaleImage = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const opacityHeader = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden font-sans relative" ref={containerRef}>
      <NeuralNetworkCanvas />
      <div className="bg-noise mix-blend-overlay opacity-50 z-0" />
      <Navigation />
      
      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-32 container-page min-h-[90vh] flex flex-col items-center justify-center">
        <motion.div 
          style={{ opacity: opacityHeader }}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Typography */}
          <div className="order-2 lg:order-1 relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 backdrop-blur-md">
                <BrainCircuit className="w-5 h-5 text-primary" />
                <span className="text-xs font-mono tracking-widest text-primary uppercase">Founder / Architect</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-2xl">
                BISHWORAJ<br />
                <span className="text-primary">POUDEL</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light mb-12 max-w-xl">
                Technology Channel is an edu-tech platform dedicated to making technology simple, practical, and accessible for everyone.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/10 pt-10">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-display font-bold text-white">10+</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40">Years Experience</span>
                </div>
                <div className="w-px h-12 bg-white/10 hidden sm:block" />
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-display font-bold text-white">500+</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40">Open Source Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right Column: Image Parallax */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
            <motion.div 
              style={{ y: yImage, scale: scaleImage }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {/* Image Glow */}
              <div className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" />
              
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-md p-10 overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                <img 
                  src="https://technologychannel.org/logos/logo.png" 
                  alt="Technology Channel" 
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Stats Section */}
      <section className="relative z-20 py-32 bg-black/80 backdrop-blur-3xl border-t border-white/10">
        <div className="container-page relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard delay={0.2} icon={<Youtube className="w-8 h-8 text-red-500" />} label="Subscribers" value="100K+" />
            <StatCard delay={0.4} icon={<Users className="w-8 h-8 text-blue-500" />} label="Students Enrolled" value="50K+" />
            <StatCard delay={0.6} icon={<Code2 className="w-8 h-8 text-primary" />} label="Technical Tutorials" value="500+" />
            <StatCard delay={0.8} icon={<Globe className="w-8 h-8 text-emerald-500" />} label="Countries Reached" value="120+" />
          </div>

          <div className="mt-32 max-w-5xl mx-auto space-y-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 rounded-[3rem] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent -z-10" />
              <h2 className="text-3xl font-display font-bold text-white mb-6">About Technology Channel</h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  Technology Channel is an edu-tech platform dedicated to making technology simple, practical, and accessible for everyone. Through websites, YouTube, mobile apps, courses, and community-driven learning, we help people build real skills that lead to real opportunities.
                </p>
                <p>
                  We believe technology education should not be confusing or overly theoretical. It should be clear, hands-on, and connected to real-world outcomes. Our goal is to empower learners with practical knowledge so they can grow personally, professionally, and financially.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-widest font-mono">Vision</h3>
                <p className="text-white/80 font-medium">Creating opportunity from skills through practical education.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-widest font-mono">Mission</h3>
                <p className="text-white/80 font-medium">Make tech simple and job-ready with real projects, guidance, and community.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-widest font-mono">Goal</h3>
                <p className="text-white/80 font-medium">Make technology simple and practical so anyone can learn skills and create income opportunities.</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8">Values</h2>
                <ul className="space-y-6">
                  {[
                    { title: "Practicality", desc: "We focus on useful, real-world skills that learners can apply immediately." },
                    { title: "Integrity", desc: "We are committed to honesty, truth, and ethical education." },
                    { title: "Consistency", desc: "We believe regular learning and steady progress create long-term success." },
                    { title: "Learner-First Impact", desc: "We design our content, tools, and teaching with the learner's growth in mind." },
                    { title: "Continuous Improvement", desc: "We keep learning, improving, and adapting to serve our community better." }
                  ].map((val, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                      <div>
                        <strong className="text-white block mb-1">{val.title}</strong>
                        <span className="text-white/60 font-light">{val.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-6">What We Do</h2>
                  <p className="text-white/70 font-light leading-relaxed mb-4">
                    We provide technology-related content and tools through various mediums such as websites, YouTube, mobile apps, and digital platforms. We also create courses, tutorials, and practical learning resources designed to help learners understand technology in a simple and effective way.
                  </p>
                  <p className="text-white/70 font-light leading-relaxed">
                    Our content covers areas like technology, programming, coding, digital skills, and practical career-building knowledge. We aim to bridge the gap between learning and doing by focusing on useful education that creates confidence and opportunity.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-6">Our Commitment</h2>
                  <p className="text-white/70 font-light leading-relaxed">
                    Our foundation is built on truth, honesty, user privacy, and meaningful impact. We are committed to providing quality technology education and tools that help learners grow safely and confidently. We always aim to protect our users from harmful, misleading, or low-value information by focusing on trustworthy and practical content.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Us</h3>
                <p className="text-white/60 font-light mb-6">If you have any questions, suggestions, or would like to connect with us, feel free to reach out:</p>
                <ul className="space-y-4 text-white/80 font-mono text-sm uppercase tracking-widest">
                  <li><a href="https://www.facebook.com/technologychannel.org" className="hover:text-primary transition-colors flex items-center gap-3"><Facebook className="w-4 h-4" /> Facebook</a></li>
                  <li><a href="https://www.instagram.com/technologychannelofficial/" className="hover:text-primary transition-colors flex items-center gap-3"><Instagram className="w-4 h-4" /> Instagram</a></li>
                  <li><a href="https://discord.gg/hwNSzvE92F" className="hover:text-primary transition-colors flex items-center gap-3"><MessageSquare className="w-4 h-4" /> Discord</a></li>
                  <li><a href="https://t.me/technology_channel_official" className="hover:text-primary transition-colors flex items-center gap-3"><Send className="w-4 h-4" /> Telegram</a></li>
                  <li><a href="https://github.com/technologychannel" className="hover:text-primary transition-colors flex items-center gap-3"><Github className="w-4 h-4" /> GitHub</a></li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-3xl border border-white/10 bg-black/40"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6">Our Office Address</h3>
                <ul className="space-y-4 text-white/70 font-light">
                  <li><strong className="text-white">Company Name:</strong> Technology Channel Private Limited</li>
                  <li><strong className="text-white">Address:</strong> Pokhara, Nepal</li>
                  <li><strong className="text-white">Phone:</strong> +9779805832889</li>
                  <li><strong className="text-white">Email:</strong> contact@technologychannel.org</li>
                  <li><strong className="text-white">Postal Code:</strong> 33700</li>
                  <li><strong className="text-white">Company Registration Number:</strong> 335505/80/081</li>
                  <li><strong className="text-white">Company PAN Number:</strong> 621129733</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

function StatCard({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className="glass-panel p-10 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/20 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 p-5 rounded-2xl bg-black/50 border border-white/10 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">{value}</div>
        <div className="text-xs font-mono text-white/50 tracking-widest uppercase">{label}</div>
      </div>
    </motion.div>
  );
}
