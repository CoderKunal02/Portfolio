import { useState, useEffect, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, Code, Github, Linkedin, MonitorPlay } from "lucide-react";
import { DEV_PROFILE } from "../data";

export default function Hero() {
  const roles = [
    "Software Developer",
    "DevOps Explorer",
    "Automation Specialist",
    "Digital Forensics Student"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Simple, high-reliability custom react typing hook
  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    const currentWord = roles[currentRoleIndex];

    if (isDeleting) {
      typingTimer = setTimeout(() => {
        setDisplayedRole(currentWord.substring(0, displayedRole.length - 1));
      }, 50);
    } else {
      typingTimer = setTimeout(() => {
        setDisplayedRole(currentWord.substring(0, displayedRole.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedRole === currentWord) {
      typingTimer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(typingTimer);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  // Magnetic hover effects using Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350 };
  const dMouseX = useSpring(mouseX, springConfig);
  const dMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left - width / 2) * 0.15;
    const y = (e.clientY - rect.top - height / 2) * 0.15;
    mouseX.set(x);
    mouseY.set(y);
  };


  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax glow movements
  const bgTranslateX = useTransform(dMouseX, (val) => val * -0.5);
  const bgTranslateY = useTransform(dMouseY, (val) => val * -0.5);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden dot-bg"
    >
      {/* Background ambient light leaks */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: bgTranslateX, y: bgTranslateY }}
          className="absolute -top-[10%] -left-[10%] w-[50%] aspect-square rounded-full bg-accent-blue/10 blur-[120px]"
        />
        <motion.div
          style={{ x: useTransform(bgTranslateX, (v) => v * -1), y: useTransform(bgTranslateY, (v) => v * -1) }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] aspect-square rounded-full bg-accent-purple/10 blur-[120px]"
        />
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-full h-[500px] bg-radial from-transparent via-obsidian/90 to-obsidian pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-8 flex flex-col justify-between py-4 text-left">
          <div>
            {/* Available for projects tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 max-w-full"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-teal"></span>
              </span>
              <span className="text-xs font-mono font-medium text-zinc-300 leading-normal tracking-wide">
                {DEV_PROFILE.location}
              </span>
            </motion.div>

            {/* Oversized Editorial Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-black tracking-tighter text-white mb-6 select-none leading-[0.85] text-[65px] sm:text-[95px] md:text-[130px]"
            >
              KUNAL<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">CHOUDHARY</span>
            </motion.h1>

            {/* Role dynamic subtitle typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-8 mb-6 flex items-center gap-2 text-sm sm:text-base font-mono text-zinc-400 font-medium"
            >
              <Code className="w-4 h-4 text-accent-blue" />
              <span>I'm a </span>
              <span className="text-white border-r-2 border-accent-purple pr-1 animate-pulse">
                {displayedRole}
              </span>
            </motion.div>

            {/* Short value statement with italic styles */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-zinc-400 text-base md:text-lg leading-snug font-light mb-10 font-sans"
            >
              A passionate <span className="text-white font-medium">IT professional</span> specializing in Software Development, Automation, and DevOps. Building secure, high-performance web & desktop applications while exploring <span className="text-accent-blue italic font-medium">digital forensics</span>.
            </motion.p>

            {/* CTA Buttons - Novak Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-6 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <span>View Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://drive.google.com/file/d/1Gv9eSM1CaOGTjvgwa63_CKf_Y-5amgfi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 text-[11px] font-bold uppercase tracking-widest bg-accent-blue hover:bg-accent-blue/90 text-white rounded-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                <span>View Resume</span>
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 py-4 rounded-sm font-display text-[11px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
              </button>
            </motion.div>
          </div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 mt-16 text-zinc-500 font-mono text-[10px] uppercase tracking-widest"
          >
            <a
              href={DEV_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 flex items-center gap-1 group"
            >
              <Github className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>GitHub</span>
            </a>
            <span className="w-[1px] h-3 bg-white/10" />
            <a
              href={DEV_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 flex items-center gap-1 group"
            >
              <Linkedin className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Novak-styled Interactive Bento Teaser Block (takes 4 columns) */}
        <div className="hidden lg:block lg:col-span-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-accent-purple/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-48 h-48 bg-accent-blue/15 rounded-full blur-2xl pointer-events-none" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-purple font-bold mb-2 block">
              Strategic Focus
            </span>
            <span className="text-xs font-mono text-zinc-500 block mb-6">
              Status // Academic Sem-6
            </span>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-semibold text-zinc-300">Python & Security</span>
                <span className="text-[10px] text-accent-blue font-mono">92%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-semibold text-zinc-300">C# .NET Desktop</span>
                <span className="text-[10px] text-accent-blue font-mono">88%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-semibold text-zinc-300">DevOps & Automation</span>
                <span className="text-[10px] text-accent-blue font-mono">85%</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyber-teal animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-300">Optimal Response</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">0.02ms</span>
            </div>
          </motion.div>
        </div>
      </div>

        {/* Scroll hint line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 invisible lg:visible pointer-events-none"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-1 rounded-full border border-white/15 bg-white/5"
          >
            <ArrowDown className="w-3.5 h-3.5 text-accent-blue" />
          </motion.div>
        </motion.div>
    </section>
  );
}
