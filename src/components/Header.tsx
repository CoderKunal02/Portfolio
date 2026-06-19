import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  navItems: { label: string; href: string }[];
}

export default function Header({ navItems }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track active section and navbar scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracker
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const targetId = item.href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      setMobileMenuOpen(false);
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 80,
        behavior: "smooth",
      });
      // Fallback
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian/75 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Branding */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-accent-purple to-accent-blue rounded-lg flex items-center justify-center font-bold text-xs text-white">
            KC
          </div>
          <span className="text-sm font-semibold tracking-widest uppercase text-white font-display">
            Kunal<span className="text-accent-blue">.</span>Codes
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative py-2 transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-blue rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Menu Toggles */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest font-bold font-display hover:bg-white hover:text-black transition-all duration-300 text-white"
          >
            <span>Talk</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white md:hidden transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian/95 border-b border-white/5 overflow-hidden backdrop-blur-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`block py-2 text-md font-display tracking-widest uppercase transition-colors ${
                      isActive ? "text-accent-blue font-semibold border-l-2 border-accent-blue pl-4" : "text-gray-400 hover:text-white pl-4"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-sm font-semibold uppercase tracking-wider font-display text-white mt-4"
              >
                <span>Hire Kunal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
