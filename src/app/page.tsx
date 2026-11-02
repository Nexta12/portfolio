"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ArchitectureRadar from "@/components/ArchitectureRadar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-zinc-100 font-sans selection:bg-blue-600 selection:text-white bg-grid-pattern">
      {/* Interactive Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Blurred Glass Navigation Bar */}
      <Navbar onOpenCommand={() => setCommandPaletteOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <CaseStudies />
        <InteractiveTerminal />
        <ArchitectureRadar />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
