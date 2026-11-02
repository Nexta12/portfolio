"use client";

import { Briefcase, Calendar, MapPin, ArrowUpRight, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/10">
      <div className="mx-auto max-w-5xl px-14">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Briefcase className="h-4 w-4" />
            <span>Track Record & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career Trajectory & Impact
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto mt-2">
            A progression of architecting distributed architectures, scaling platforms, and elevating engineering team standards.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {portfolioData.experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border-2 border-blue-400 group-hover:scale-125 group-hover:border-blue-300 transition-all">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              </div>

              {/* Card Container */}
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-xl hover:border-white/20 transition-all">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-zinc-200">
                        {exp.company}
                      </span>
                      <span className="text-zinc-500">&bull;</span>
                      <span className="flex items-center gap-1 text-xs text-zinc-400">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 text-xs font-mono text-blue-300">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Measurable Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {ach}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies Badge Strip */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
