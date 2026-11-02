"use client";

import { Cpu, Server, Layout, Cloud, Database, ShieldCheck, Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { HeaderTitle } from "./HeaderTitle";

export default function ArchitectureRadar() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="h-5 w-5 text-blue-400" />;
      case "Layout":
        return <Layout className="h-5 w-5 text-indigo-400" />;
      case "Cloud":
        return <Cloud className="h-5 w-5 text-purple-400" />;
      case "Database":
        return <Database className="h-5 w-5 text-emerald-400" />;
      default:
        return <Cpu className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-14">
        {/* Section Header */}
        <HeaderTitle mainTitle="Technical Competencies"/>
        

        {/* 4-Quadrant Architecture Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {portfolioData.skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-xl hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-zinc-400">{category.description}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-white/5 bg-black/30 hover:bg-white/[0.03] transition-colors gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:text-right">
                      {skill.highlight && (
                        <span className="text-[11px] font-mono text-zinc-400">
                          {skill.highlight}
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                          skill.level === "Expert"
                            ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                            : skill.level === "Advanced"
                            ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                            : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Principles Card */}
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 via-zinc-900/60 to-zinc-950 p-8 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Engineering Philosophy & Architectural Tenets</h3>
              <p className="text-xs text-zinc-400">Core guiding values refined through years of scaling systems</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.engineeringPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/10 bg-black/40 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-semibold mb-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Principle 0{idx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{principle.title}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
