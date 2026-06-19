import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Application", "Desktop Application", "DevOps"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((proj) => proj.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-24 dot-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-[0.2em] text-accent-blue uppercase block mb-3">
              CREATIVE WORKS
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Projects<span className="text-accent-blue">.</span>
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between glass-panel rounded-3xl overflow-hidden hover:border-white/12 transition-all duration-300 hover:shadow-[0_25px_50px_rgba(168,85,247,0.04)] border border-white/5"
              >
                {/* Product/Project Image & Hover overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                  {/* Aspect tag in corner */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 bg-obsidian/75 backdrop-blur-md rounded-full text-[10px] font-mono text-gray-300 border border-white/5 uppercase">
                    <Layers className="w-3 h-3 text-accent-blue" />
                    <span>{proj.category}</span>
                  </div>

                  {/* Gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10 opacity-60" />

                  <img
                    src={proj.imageSrc}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${proj.id}/800/500`;
                    }}
                  />

                  {/* Hover action slide-in layout */}
                  <div className="absolute inset-0 bg-obsidian/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                      title="Visit Live App"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/15 text-white flex items-center justify-center border border-white/15 backdrop-blur-md hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info and Tags Details section */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 flex items-center justify-between group-hover:text-accent-blue transition-colors">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-accent-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  {/* Skills/Tags listed on card */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400 uppercase font-medium tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
