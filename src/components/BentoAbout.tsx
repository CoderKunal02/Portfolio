import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, Award, Code, Globe, Terminal, Server, Star } from "lucide-react";
import { DEV_PROFILE, SKILL_CATEGORIES, CERTIFICATIONS } from "../data";

export default function BentoAbout() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [time, setTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <section id="about" className="py-24 bg-charcoal/40 dot-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-[0.2em] text-accent-blue uppercase block mb-3">
              ABOUT & STACK
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              About Me<span className="text-accent-blue">.</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-400 text-sm leading-relaxed font-sans">
            A showcase of my projects, technical skills, certifications, and professional growth.
          </p>
        </div>

        {/* Bento Grid Layout Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tile 1: Profile & Bio Card (Takes Full 3 Columns on desktop for spacious elegant view) */}
          <div className="md:col-span-3 glass-panel rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            {/* Background vector glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[70px] pointer-events-none" />

            <div>
              {/* Header inside profile card */}
              <div className="mb-8">
                <div>
                  <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white flex items-center gap-2 tracking-tight">
                    {DEV_PROFILE.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-accent-blue mb-2.5 font-semibold uppercase tracking-wider">
                    {DEV_PROFILE.title}
                  </p>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-sans">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      {DEV_PROFILE.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Redesigned fresher-friendly layout with detailed Who I Am, info list, and Professional Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                {/* Left: Who I Am & Key Information */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div>
                    <h4 className="text-accent-blue font-display font-extrabold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue inline-block"></span>
                      Who I Am
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      I am a motivated, self-taught IT student and software developer with a strong focus on core computing fundamentals. I've built low-latency desktop utilities, automated storage tools, web scrapers, and website scanners. I enjoy crafting pristine applications, automating recurring setups, and investigating secure architectures.
                    </p>
                  </div>

                  {/* Info List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-white/5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Location:</span>
                      <span className="text-white text-xs sm:text-sm font-sans flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                        Jaipur, Rajasthan, India
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Email:</span>
                      <a href={`mailto:${DEV_PROFILE.email}`} className="text-white hover:text-accent-blue text-xs sm:text-sm font-sans font-medium underline transition-colors truncate">
                        {DEV_PROFILE.email}
                      </a>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Phone:</span>
                      <a href={`tel:${DEV_PROFILE.phone.replace(/\s+/g, '')}`} className="text-white hover:text-accent-blue text-xs sm:text-sm font-sans font-medium transition-colors">
                        {DEV_PROFILE.phone}
                      </a>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Status:</span>
                      <span className="text-cyber-teal text-xs sm:text-sm font-sans font-bold uppercase tracking-wide">
                        Available for Intern/Fresher roles
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Built-in Professional Summary Card */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden group/card hover:border-white/10 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div>
                    <h4 className="text-accent-purple font-display font-extrabold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple inline-block"></span>
                      Professional Summary
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                      Goal-driven BCA graduate (currently deep in 6th Sem coursework) with well-grounded experience in programming paradigms, database design, and pipeline automation. Developed real-world projects covering security scanners, system-tray utilities, backup modules, and custom audio applications. Highly adaptive, passionate about code quality, and looking forward to making immediate impacts in a development-focused engineering team.
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Academic Placement</span>
                    <span className="text-[10px] font-mono text-accent-purple font-bold">BCA 6TH SEM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 3: Interactive Skills Stack (Takes 2 Columns) */}
          <div id="skills" className="md:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between relative group">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/5 mb-6 gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-purple" />
                  <h3 className="font-display text-md font-extrabold text-white tracking-wide uppercase">
                    Interactive Stack Profile
                  </h3>
                </div>

                {/* Subcategory selectors */}
                <div className="flex flex-wrap items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/5">
                  {SKILL_CATEGORIES.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(idx)}
                      className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg transition-all duration-300 ${
                        activeCategory === idx
                          ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-md font-semibold"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills grid list */}
              <div className="relative min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {SKILL_CATEGORIES[activeCategory]?.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300"
                      >
                        <div className="p-2 rounded-lg bg-white/5 flex items-center justify-center">
                          {activeCategory % 3 === 0 ? (
                            <Terminal className="w-4 h-4 text-accent-blue" />
                          ) : activeCategory % 3 === 1 ? (
                            <Server className="w-4 h-4 text-accent-purple" />
                          ) : (
                            <Globe className="w-4 h-4 text-cyber-teal" />
                          )}
                        </div>
                        <span className="text-zinc-200 text-xs font-mono font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
              <Code className="w-4 h-4 text-accent-blue" />
              <span>Tailored explicitly for semantic standards and high performance.</span>
            </div>
          </div>

          {/* Tile 4: Certifications Card (Takes 1 Column) */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-4 h-4 text-cyber-teal" />
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-400">
                  Accreditation & Seals
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="border-b border-white/5 last:border-none pb-3 last:pb-0">
                    <div className="text-white text-xs font-mono font-medium leading-relaxed">
                      {cert.name}
                    </div>
                    <div className="text-[10px] font-mono text-accent-blue mt-1.5">
                      ★ Verified Cert — {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-white/5 mt-6 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>WCT Compliance</span>
              <span className="text-cyber-teal font-semibold">100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
