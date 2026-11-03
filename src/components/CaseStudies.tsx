"use client";

import { useState } from "react";
import { FolderGit2, ArrowUpRight, CheckCircle2, Code2, Layers, Cpu, Activity, Monitor, ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { HeaderTitle } from "./HeaderTitle";

export default function CaseStudies() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"preview" | "architecture" | "code">("preview");

  const currentProject = portfolioData.caseStudies[activeProjectIndex];

  return (
    <section id="case-studies" className=" pb-24 relative border-t border-white/10">

      <div className="mx-auto max-w-7xl px-14">
        {/* Section Header */}

        <HeaderTitle mainTitle="Flagship Projects" />

        {/* Project Selector Tabs with Image Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {portfolioData.caseStudies.map((project, idx) => {
            const isSelected = idx === activeProjectIndex;
            return (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setActiveTab("preview");
                }}
                className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-blue-500/70 bg-gradient-to-b from-blue-950/40 to-zinc-900/90 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/40"
                    : "border-white/10 bg-zinc-900/30 hover:border-white/20 hover:bg-zinc-900/60"
                }`}
              >
                {/* Mini Image Preview */}
                <div className="relative h-16 w-24 rounded-lg overflow-hidden border border-white/10 bg-zinc-950 shrink-0 shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-blue-500/20 ring-1 ring-inset ring-blue-400/50" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                
                  <h3 className="font-semibold text-white text-sm mb-1 truncate">
                    {project.title.split(":")[0]}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-1">
                    {project.liveUrl?.replace("https://", "")}
                  </p>
                </div>
              </button>
            );
          })}
        </div>




        {/* Selected Project Full Details Showcase */}
        <div className="rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Context, Problem & Solution */}
            <div className="lg:col-span-5 space-y-6">
              <div>
               

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {currentProject.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {currentProject.tagline}
                </p>
              </div>

              {/* The Engineering Challenge & Strategy */}
              <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5" />
                    The Challenge
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {currentProject.problem}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5" />
                    Engineered Solution
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {currentProject.solution}
                  </p>
                </div>
              </div>

              {/* Tags & Action Links */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all"
                    >
                      <span>Visit {currentProject.liveUrl.replace("https://", "")}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tabs (Screenshot Preview / Architecture / Code) */}
            <div className="lg:col-span-7 flex flex-col h-full">
              {/* Tab Navigation */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                    <span>Live Dashboard</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                      activeTab === "architecture"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Layers className="h-3.5 w-3.5" />
                    <span>System Architecture</span>
                  </button>

                </div>

                <div className="text-[11px] font-mono text-zinc-500 hidden sm:flex items-center gap-2">
                  {activeTab === "preview" && currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <span>{currentProject.liveUrl}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {activeTab === "code" && currentProject.codeSnippet && (
                    <span>{currentProject.codeSnippet.filename}</span>
                  )}
                </div>
              </div>

              {/* Tab 1: Screenshot & Interactive Browser Mockup */}
              {activeTab === "preview" && (
                <div className="rounded-2xl border border-white/15 bg-zinc-950 overflow-hidden shadow-2xl flex flex-col group">
                  {/* Browser Chrome Header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-zinc-900/80 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Browser Address Bar */}
                    <div className="flex items-center gap-2 rounded-lg bg-black/60 border border-white/10 px-3 py-1 text-xs font-mono text-zinc-300 w-full max-w-sm mx-auto">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{currentProject.liveUrl}</span>
                    </div>

                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="Open in new window"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  {/* High-Resolution Screenshot */}
                  <div className="relative overflow-hidden bg-zinc-950 aspect-[16/9.5]">
                    <img
                      src={currentProject.image}
                      alt={`${currentProject.title} screenshot`}
                      className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                    />
                    
                    {/* Hover Overlay with Direct Link */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600/90 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white shadow-xl hover:bg-blue-500 transition-all"
                      >
                        <span>Launch Live Platform</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: System Architecture */}
              {activeTab === "architecture" && (
                <div className="space-y-3.5 flex-1 flex flex-col justify-center">
                  {currentProject.architecturePoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {point.includes(":") ? (
                          <>
                            <strong className="text-white font-semibold">
                              {point.slice(0, point.indexOf(":"))}:
                            </strong>
                            <span>{point.slice(point.indexOf(":") + 1)}</span>
                          </>
                        ) : (
                          point
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              )}

             
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

