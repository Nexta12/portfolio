"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-12 relative">
      <div className="mx-auto max-w-7xl px-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-semibold text-white">
                {portfolioData.personal.name}
              </p>
              <p className="text-xs text-zinc-400">
                Founder, z-code Technologies Ltd
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">Overview</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#architecture" className="hover:text-white transition-colors">Arsenal</a>
            <a href="#terminal" className="hover:text-white transition-colors">Terminal</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>
            &copy; {year} {portfolioData.personal.name}. All systems operational.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>Open for immediate collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
