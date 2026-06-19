/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoAbout from "./components/BentoAbout";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  return (
    <div className="bg-obsidian min-h-screen text-slate-200 antialiased selection:bg-accent-blue/30 selection:text-white">
      {/* Dynamic Header */}
      <Header navItems={NAV_ITEMS} />

      {/* Main Sections */}
      <main>
        {/* Full Viewport typography and focus CTAs */}
        <Hero />

        {/* Modular Profile information (Bento format) */}
        <BentoAbout />

        {/* Selected works and filters */}
        <Projects />

        {/* Academic & Certifications tracker */}
        <Education />

        {/* Fully interactive messaging center */}
        <Contact />
      </main>

      {/* High-contrast legal & footer */}
      <Footer />
    </div>
  );
}
