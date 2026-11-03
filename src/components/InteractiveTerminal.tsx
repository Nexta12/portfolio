"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface TerminalHistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-zinc-300">
         
          <p className="text-zinc-400">
            Type <span className="text-emerald-400 font-semibold">help</span> to list commands or click suggested chips below.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-zinc-400">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2">
              <div><span className="text-emerald-400 font-semibold">about</span> — Bio & core value proposition</div>
              <div><span className="text-emerald-400 font-semibold">projects</span> — Flagship production systems (Spider, Z-Remote, PrepFocus)</div>
              <div><span className="text-emerald-400 font-semibold">skills</span> — Technical abilities & proficiencies</div>
            
              <div><span className="text-emerald-400 font-semibold">Principles</span> — Engineering principles</div>
              <div><span className="text-emerald-400 font-semibold">contact</span> — Reach out</div>
              <div><span className="text-emerald-400 font-semibold">clear</span> — Reset terminal output</div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-blue-400 font-semibold text-xs">[FLAGSHIP PRODUCTION ARCHITECTURES]:</p>
            {portfolioData.caseStudies.map((p, idx) => (
              <div key={idx} className="border-l-2 border-emerald-500/50 pl-3 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-xs">{p.title}</span>
                  <span className="text-[10px] text-emerald-400 font-mono">[{p.badge}]</span>
                </div>
                <p className="text-xs text-zinc-400">{p.tagline}</p>
                <p className="text-[11px] font-mono text-blue-300">
                  Live URL: <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="underline">{p.liveUrl}</a>
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "about":
        output = (
          <div className="text-zinc-300 space-y-1">
            <p className="text-white font-semibold">{portfolioData.personal.name} — {portfolioData.personal.role}</p>
            <p className="text-zinc-400">{portfolioData.personal.bio}</p>
            <p className="text-xs text-blue-300 font-mono mt-1">Based in: {portfolioData.personal.location} | Timezone: {portfolioData.personal.timezone}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-zinc-300">
            {portfolioData.skillCategories.map((cat, idx) => (
              <div key={idx} className="border-l-2 border-blue-500/50 pl-3">
                <p className="font-semibold text-white text-xs">{cat.title}</p>
                <p className="text-zinc-400 text-xs">
                  {cat.skills.map((s) => s.name).join(" • ")}
                </p>
              </div>
            ))}
          </div>
        );
        break;

    
      case "architecture":
        output = (
          <div className="space-y-1.5 text-zinc-300">
            <p className="text-purple-400 font-semibold text-xs">Architectural Principles:</p>
            {portfolioData.engineeringPrinciples.map((p, i) => (
              <div key={i} className="text-xs">
                <span className="text-white font-medium">{i + 1}. {p.title}:</span>{" "}
                <span className="text-zinc-400">{p.description}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p>Direct Email: <span className="text-blue-400 underline">{portfolioData.personal.email}</span></p>
            <p>Calendar: <span className="text-blue-400 underline">{portfolioData.personal.calUrl}</span></p>
            <p>GitHub: <span className="text-blue-400 underline">{portfolioData.personal.github}</span></p>
            <p>LinkedIn: <span className="text-blue-400 underline">{portfolioData.personal.linkedin}</span></p>
          </div>
        );
        break;

   

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            command not found: &ldquo;{cmd}&rdquo;. Type <span className="text-emerald-400 font-semibold underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to see valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const suggestions = ["projects", "about", "skills", "benchmarks", "architecture", "contact"];

  return (
    <section id="terminal" className="py-20 relative border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
            <TerminalIcon className="h-4 w-4" />
            <span>Interactive Engineering Playground</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Developer Shell
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto mt-2">
            Inspect system benchmarks, query skills, or test commands live in the terminal.
          </p>
        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-zinc-500">Suggested:</span>
          {suggestions.map((sug) => (
            <button
              key={sug}
              onClick={() => executeCommand(sug)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-zinc-300 hover:border-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all cursor-pointer "
            >
              {sug}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl border border-white/15 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Title Bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-zinc-400">
                ernest@production-node:~ (zsh)
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              Interactive Mode
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs sm:text-sm min-h-[320px] max-h-[460px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-emerald-400 font-bold">&lambda;</span>
                  <span className="text-blue-400 font-medium">ernest@portfolio:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            {/* <div ref={bottomRef} /> */}
          </div>

          {/* Terminal Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-white/10 px-4 py-3 bg-zinc-900/40"
          >
            <span className="text-emerald-400 font-bold font-mono">&lambda;</span>
            <span className="text-blue-400 font-medium font-mono text-xs hidden sm:inline">
              ernest@portfolio:~$
            </span>
            <input
              type="text"
              value={input}
            
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command (try 'benchmarks' or 'help')..."
              className="flex-1 bg-transparent text-xs sm:text-sm text-zinc-100 font-mono placeholder-zinc-600 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <CornerDownLeft className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
