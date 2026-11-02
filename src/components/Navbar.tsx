"use client";

import { useState } from "react";
import { Command, Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface NavbarProps {
  onOpenCommand: () => void;
}

export default function Navbar({ onOpenCommand }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Architecture", href: "#architecture" },
    { label: "Terminal", href: "#terminal" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-14 py-4">
        {/* Monogram / Avatar Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-100 text-sm tracking-tight group-hover:text-blue-400 transition-colors">
                {portfolioData.personal.name}
              </span>
             
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Cmd + K Button */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 hover:border-blue-500/40 hover:text-zinc-200 hover:bg-white/[0.06] transition-all shadow-sm"
            title="Open Command Palette"
          >
            <Command className="h-3.5 w-3.5 text-blue-400" />
            <span className="hidden md:inline font-mono text-[11px]">Cmd+K</span>
          </button>

          {/* Cal / Chat CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/35 transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-white/10 p-2 text-zinc-400 hover:text-white lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-zinc-950 px-6 py-4 lg:hidden animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2.5 text-sm text-zinc-300"
              >
                <Terminal className="h-4 w-4 text-blue-400" />
                <span>Command Menu (Cmd+K)</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white"
              >
                <span>Schedule a Chat</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
