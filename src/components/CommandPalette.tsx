"use client";

import { useState, useEffect } from "react";
import { Search, Terminal, FolderGit2, Cpu, Briefcase, Mail, FileText, ArrowRight, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or shortcut
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (selector: string) => {
    onClose();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const actions = [
    {
      label: "Spider WebCrawler (spiderweb.com.ng) — Open Live Site",
      category: "Projects",
      icon: FolderGit2,
      action: () => {
        window.open("https://www.spiderweb.com.ng", "_blank");
        onClose();
      },
    },
    {
      label: "Z-Remote MSP RMM (z-remote.com) — Open Live Site",
      category: "Projects",
      icon: FolderGit2,
      action: () => {
        window.open("https://z-remote.com", "_blank");
        onClose();
      },
    },
    {
      label: "PrepFocus EdTech Platform (prepfocus.org) — Open Live Site",
      category: "Projects",
      icon: FolderGit2,
      action: () => {
        window.open("https://prepfocus.org", "_blank");
        onClose();
      },
    },
    {
      label: "Jump to Architecture & Case Studies",
      category: "Navigation",
      icon: FolderGit2,
      action: () => navigateTo("#case-studies"),
    },
    {
      label: "View Engineering Arsenal & Skills",
      category: "Navigation",
      icon: Cpu,
      action: () => navigateTo("#architecture"),
    },
    {
      label: "View Career History & Impact",
      category: "Navigation",
      icon: Briefcase,
      action: () => navigateTo("#experience"),
    },
    {
      label: "Interactive Architecture Terminal",
      category: "Interactive",
      icon: Terminal,
      action: () => navigateTo("#terminal"),
    },
    {
      label: copied ? "Email Copied to Clipboard!" : `Copy Email (${portfolioData.personal.email})`,
      category: "Contact",
      icon: Mail,
      action: copyEmail,
    },
    {
      label: "Schedule Architecture / Senior Role Chat",
      category: "Contact",
      icon: ArrowRight,
      action: () => {
        window.open(portfolioData.personal.calUrl, "_blank");
        onClose();
      },
    },
    {
      label: "Download Senior Engineer CV / Resume",
      category: "Documentation",
      icon: FileText,
      action: () => {
        window.open(portfolioData.personal.resumeUrl, "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/95 shadow-2xl shadow-blue-500/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
          <Search className="h-5 w-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Type a command or search portfolio (e.g. Case Studies, Email, Go)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
           
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-sm text-zinc-500">
              No matching commands or sections found.
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-zinc-200 transition-colors hover:bg-blue-600/15 hover:text-blue-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                        <Icon className="h-4 w-4 text-zinc-400 group-hover:text-blue-400" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 group-hover:text-blue-400/80">
                      {item.category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">ESC</span>
            <span>to close</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">ENTER</span>
            <span>to select</span>
          </div>
        </div>
      </div>
    </div>
  );
}
