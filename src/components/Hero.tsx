"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-10 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* PROFILE IMAGE: Shows top on Mobile (order-1), Right Side on Desktop (order-2) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-center w-full">
            <div className="relative group w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[340px]">
              {/* Subtle Ambient Glow Behind Card */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600/35 via-indigo-500/25 to-purple-600/35 opacity-70 blur-xl group-hover:opacity-95 transition duration-700"></div>

              {/* Framed Profile Card */}
              <div className="relative rounded-3xl border border-white/15 bg-zinc-950/85 p-2.5 sm:p-3.5 backdrop-blur-xl shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-zinc-900">
                  <img
                    src={portfolioData.personal.avatarUrl}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  />
                  
                  {/* Subtle bottom edge blend */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* TEXT & FOUNDER INTRO: Below image on Mobile (order-2), Left Side on Desktop (order-1) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Pill */}
            <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 mb-4 lg:mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                {portfolioData.personal.status}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 lg:mb-3 leading-[1.1]">
              Udeze Ernest
            </h1>

            {/* Lean Role & Company */}
            <h2 className="text-base sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mb-4 lg:mb-5">
              Senior Software Engineer &bull; Founder, z-code Technologies Ltd
            </h2>

            {/* Lean, Non-Fluffy Introduction */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mb-6 lg:mb-8 leading-relaxed font-light">
              Engineering high-concurrency systems, edge runtimes, and resilient distributed platforms some of which are <span className="text-blue-300 font-medium">z-Remote</span> (RMM for MSPs), <span className="text-indigo-300 font-medium">PrepFocus</span> (adaptive EdTech), and <span className="text-purple-300 font-medium">Spider</span> (A masterclass B2B/B2C Lead management system)
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 lg:mb-10 w-full sm:w-auto">
              <a
                href="#case-studies"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-200 hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono text-xs">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span className="font-mono text-xs">Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="#terminal"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:border-blue-500/40 transition-all"
              >
                <Terminal className="h-4 w-4 text-blue-400" />
                <span className="font-mono text-xs">Shell</span>
              </a>
            </div>

            {/* Lean Key Stats */}
           
          </div>

        </div>
      </div>
    </section>
  );
}

