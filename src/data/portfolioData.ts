export interface ProjectCaseStudy {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  image: string;
  problem: string;
  solution: string;
  architecturePoints: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: "Expert" | "Advanced" | "Proficient"; highlight?: string }[];
}

export const portfolioData = {
  personal: {
    name: process.env.NEXT_PUBLIC_PERSONAL_NAME ,
    shortName: process.env.NEXT_PUBLIC_PERSONAL_SHORT_NAME ,
    role: "Senior Software Engineer & Founder",
    company: "z-code Technologies Ltd",
    avatarUrl: "/images/udeze_ernest.jpg",
    location: "Lagos, Nigeria",
    timezone: "UTC+1 Lagos",
    status: "Available for Senior / Lead Roles",
    tagline: "Senior Software Engineer",
    bio: "Senior Software Engineer & Founder of z-code Technologies Ltd — parent company of Z-Remote, PrepFocus, and Spider.",
    email: process.env.NEXT_PUBLIC_PERSONAL_EMAIL || "ernestez12@gmail.com",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/nexta12",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/udeze-ernest",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/nexta12",
    resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "#resume",
    calUrl: process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com",
  },
  
  metrics: [
    { value: "8+", label: "Years Engineering", detail: "Leading teams & architecture" },
    { value: "120k", label: "Peak Req / Sec", detail: "Engineered sub-15ms p99" },
    { value: "99.99%", label: "Production SLA", detail: "Zero unplanned outages" },
    { value: "$3.4M", label: "Infra Cost Saved", detail: "Via query & cluster tuning" },
  ],

  caseStudies: [
    {
      id: "spider",
      title: "Spider",
      badge: "High-Volume B2B / B2C Lead Generation machine",
      tagline: "Hybrid Client-Centric / Edge-Scraping Desktop Architecture eliminating cloud crawler overhead with offline-first SQLite persistence and real-time MX verification.",
      image: "/images/spider.png",
      problem:
        "Cloud-hosted scraping platforms charge expensive recurring credit fees due to heavy server-side compute and proxy costs, while fragmenting lead generation workflows across separate scraping, email verification, and outreach tools.",
      solution:
        "Engineered an offline-first Electron + React desktop crawler that executes high-concurrency HTTP parsing and proxy rotation directly on the client machine, featuring embedded better-sqlite3 WAL persistence, real-time DNS MX email validation, direct SMTP campaign delivery, and a decoupled Next.js licensing control plane.",
      architecturePoints: [
        "Zero Cloud Scraping Overhead: Compute, proxy consumption, and DOM extraction run entirely on the client machine, eliminating cloud infrastructure costs.",
        "Embedded High-Speed Persistence: Utilizes better-sqlite3 with Write-Ahead Logging (WAL) for concurrent, sub-millisecond lead queries and zero-latency local search.",
        "Integrated Multi-Source Extraction & Verification: Multi-engine search dorking, Cheerio HTML parsing, and asynchronous DNS MX record checks before direct SMTP dispatch.",
        "Decoupled Licensing Control Plane: Next.js + Supabase backend managing hardware fingerprint binding (node-machine-id), 5-minute telemetry heartbeats, and automated payment webhooks.",
      ],
      metrics: [
        { label: "Cloud Scraping Cost", value: "$0 Server Overhead" },
        { label: "Local Database", value: "better-sqlite3 (WAL)" },
        { label: "Lead Pipeline", value: "Crawl → Verify → Mail" },
      ],
      tags: [
        "Electron",
        "React 19",
        "TypeScript",
        "Node.js",
        "better-sqlite3",
        "Next.js",
        "Supabase",
        "Proxy Rotation",
        "DNS MX Verification",
      ],
      githubUrl: process.env.NEXT_PUBLIC_SPIDER_GITHUB_URL || "https://github.com",
      liveUrl: "https://www.spiderweb.com.ng",
      codeSnippet: {
        language: "typescript",
        filename: "src/config.ts",
        code: `// Decoupled Next.js + Supabase Licensing Control Plane & Local WAL Engine
export interface ClientRuntimeConfig {
  apiBaseUrl: string;
  clientVersion: string;
  heartbeatIntervalMs: number;
}

export const APP_CONFIG: ClientRuntimeConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_SPIDER_API_URL || "https://api.spiderweb.com.ng",
  clientVersion: "2.4.1",
  heartbeatIntervalMs: 1000 * 60 * 5, // 5-minute telemetry heartbeat
};

// Zero Cloud Overhead: Client-Side Extraction & better-sqlite3 WAL Persistence
export class SpiderLocalPipeline {
  constructor(private localDb: SQLiteConnection) {}

  async ingestScrapedLeads(campaignId: string, leads: ScrapedContact[]) {
    // Multi-engine search, Cheerio parsing & DNS MX checks execute on client
    await this.localDb.transaction(async (tx) => {
      for (const lead of leads) {
        await tx.run(
          \`INSERT OR IGNORE INTO leads (campaign_id, email, business_name, mx_valid, status, created_at)
           VALUES (?, ?, ?, ?, ?, ?)\`,
          [campaignId, lead.email, lead.businessName, lead.mxValid ? 1 : 0, lead.status, Date.now()]
        );
      }
    });
  }

  // Decoupled Next.js + Supabase licensing heartbeat with hardware ID binding
  async sendHeartbeat(licenseKey: string, machineId: string): Promise<LicenseStatus> {
    const res = await fetch(\`\${APP_CONFIG.apiBaseUrl}/api/v1/license/heartbeat\`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Client-Ver": APP_CONFIG.clientVersion },
      body: JSON.stringify({ licenseKey, machineId }),
    });
    return res.json();
  }
}`,
      },
    },
    {
      id: "z-remote-rmm",
      title: "Z-Remote: Sophisticated Enterprise RMM Built for MSPs",
      badge: "Managed Service Provider RMM Platform",
      tagline: "Enterprise Remote Monitoring & Management (RMM) platform built for Managed Service Providers (MSPs) with live telemetry and remote shell.",
      image: "/images/zremote.jpg",
      problem:
        "MSPs managing thousands of distributed client machines lacked real-time low-overhead telemetry, instant remote terminal execution, and reliable zero-latency patch management without heavy agent bloat.",
      solution:
        "Architected a high-concurrency lightweight agent (<18MB RAM) and WebRTC / secure WebSocket daemon enabling instant sub-38ms remote terminal access, live fleet health metrics, and automated patch rollouts across multiple active endpoints.",
      architecturePoints: [
        "Ultra-lightweight endpoint daemon (<18MB RAM footprint) running cross-platform on Windows Server and MacOS machines",
        "Bidirectional multiplexed WebSockets & gRPC streams for real-time remote PowerShell/bash shell execution and file push",
        "Automated security patch compliance engine with rollback guarantees and zero-day vulnerability detection",
        "Multi-tenant RBAC MSP console with live interactive telemetry matrix, asset tracking, and instant alerts",
      ],
      metrics: [
        { label: "Monitored Endpoints", value: "14+ devices" },
        { label: "Patch Compliance", value: "99.4% SLA" },
        { label: "Terminal Latency", value: "38ms round-trip" },
      ],
      tags: ["Node.js", "RustDesk", "MeshCentral", "Next.js", "TypeScript", "gRPC", "WebSockets", "PowerShell", "Security & RBAC"],
      githubUrl: "https://github.com",
      liveUrl: "https://z-remote.com",
      codeSnippet: {
        language: "go",
        filename: "daemon/session_broker.go",
        code: `// Secure Remote Terminal PTY Multiplexer with End-to-End Encryption
func (b *SessionBroker) HandleRemoteShell(ws *websocket.Conn, agentID string) error {
    sessionKey := generateNonce()
    pty, err := b.agentRegistry.SpawnPTY(agentID, sessionKey)
    if err != nil {
        return fmt.Errorf("pty spawn failed: %w", err)
    }
    defer pty.Close()

    // Multiplex PTY stdout to WebSocket client
    go io.Copy(ws.UnderlyingConn(), pty.Stdout())
    
    // Stream encrypted client keystrokes directly to agent PTY
    buf := make([]byte, 1024)
    for {
        n, err := ws.Read(buf)
        if err != nil { break }
        if _, err := pty.Stdin().Write(buf[:n]); err != nil { break }
    }
    return nil
}`,
      },
    },
    {
      id: "prepfocus-edtech",
      title: "PrepFocus: Advanced / Hybrid exam preparatory platform",
      badge: "EdTech Platform & Adaptive Testing",
      tagline: "Scalable EdTech assessment & preparation platform powering high-concurrency standardized test simulations and real-time candidate analytics and advanced grading engine.",
      image: "/images/prepfocus.jpg",
      problem:
        "Accounting Exams preparation is believed to only be possible mannually due to the calculations, tables, charts, graphs and theories involved. We decided to track this down and solve it with a highly advanced rubricks using modern progamming initiatives and impossible logics.",
      solution:
        "Engineered an edge-cached test delivery architecture with offline-first client sync, optimistic state reconciliation, automated question Item Response Theory (IRT) adaptation, and live proctoring telemetry.",
      architecturePoints: [
        "Zero-data-loss exam state engine with client-side encrypted IndexedDB backups and automatic offline continuation",
        "Real-time candidate performance analytics radar powered by Item Response Theory (IRT) adaptive scoring algorithms",
        "Distributed rate-limited session validator preventing simultaneous multi-device cheating or desync",
        "Live proctoring telemetry stream monitoring student pacing, anomalous focus loss, and completion velocity",
      ],
      metrics: [
        { label: "Active Test Takers", value: "3050+ live" },
        { label: "Adaptive Bank", value: "42,500+ items" },
        { label: "Platform Uptime", value: "99.99% exam SLA" },
      ],
      tags: ["React 19", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "WebSockets", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://prepfocus.org",
      codeSnippet: {
        language: "typescript",
        filename: "engine/adaptive_scoring.ts",
        code: `// Item Response Theory (IRT) 3-Parameter Adaptive Question Evaluator
export function calculateNextQuestionTheta(
  currentTheta: number,
  responses: Array<{ isCorrect: boolean; difficulty: number; discrimination: number; guessing: number }>
): number {
  let numerator = 0;
  let denominator = 0;

  for (const item of responses) {
    const { isCorrect, difficulty: b, discrimination: a, guessing: c } = item;
    const p = c + (1 - c) / (1 + Math.exp(-1.7 * a * (currentTheta - b)));
    const q = 1 - p;
    const w = (p - c) / (1 - c);
    
    numerator += a * w * ((isCorrect ? 1 : 0) - p) / q;
    denominator += Math.pow(a * w, 2) * p / q;
  }

  const delta = numerator / (denominator + 1e-5);
  return Math.min(3.0, Math.max(-3.0, currentTheta + Math.max(-0.5, Math.min(0.5, delta))));
}`,
      },
    },
  ],

  experiences: [
    {
      period: "2025 — Present",
      role: "Lead Systems Architect",
      company: "z-code Technologies Ltd",
      location: "Lagos, Nigeria",
      summary: "Spearheading distributed systems architecture, developer productivity, and platform scalability across 3 core product initiatives.",
      achievements: [
        "Architected core multi-region event streaming fabric, scaling peak throughput by 400% without increasing node count",
        "Mentored 8 senior and mid-level engineers in distributed consensus, profiling, and domain-driven design",
        "Instituted standardized RFC system architecture review process, reducing technical debt regressions by 35%",
      ],
      technologies: ["Node.js", "Next.js", "PostgreSQL", "MongoDB", "Tailwind", "RabbitMQ"],
    },
    {
      period: "2023 — 2025",
      role: "Senior Full-Stack Engineer",
      company: "Dataactions Ltd",
      location: "Birmingham, UK (Remote)",
      summary: "Built high-frequency financial intelligence dashboards and real-time streaming interfaces for Dataactions, MyChurchnow.",
      achievements: [
        "Reduced initial page render latency from 3.8s to 640ms via Next.js SSR, optimistic UI updates, and intelligent edge prefetching",
        "Built custom WebSocket streaming multiplexer handling 5,000 continuous socket connections",
        "Led SOC2 Type II compliance audit for application infrastructure and CI/CD security scanning",
      ],
      technologies: ["TypeScript", "React", "Next.js", "Node.js", "Redis", "Docker", "MongoDB"],
    },
    {
      period: "2017 — 2023",
      role: "Software Engineer — Platform & Core",
      company: "RevolutionPlus LLC",
      location: "Lagos, Nigeria",
      summary: "Developed high-volume Customer Management and Debt recovery system.",
      achievements: [
        "Wrote automated data ingestion adapters that processed 15TB+ monthly transaction data",
        "Refactored relational query plans with composite indices, reducing expensive table scans by 70%",
      ],
      technologies: ["Node.js", "PostgreSQL", "React", "Docker"],
    },
  ],

  skillCategories: [
    {
      title: "Distributed Systems & Backend",
      icon: "Server",
      description: "Fault-tolerant architectures, streaming pipelines, and microservices.",
      skills: [
        { name: "Node.js / TypeScript", level: "Expert", highlight: "Enterprise API architecture" },
        { name: "Kafka & Event-Driven", level: "Advanced", highlight: "CQRS & event sourcing" },
        { name: "Redis & Memcached", level: "Expert", highlight: "Cluster caching & pub/sub" },
        { name: "gRPC & Protocol Buffers", level: "Advanced", highlight: "High-speed internal RPC" },
      ],
    },
    {
      title: "Frontend Engineering & Web Core",
      icon: "Layout",
      description: "Hyper-optimized web apps with modern ergonomics and fluid UX.",
      skills: [
        { name: "Next.js 15+ (App Router)", level: "Expert", highlight: "RSC, streaming & server actions" },
        { name: "React 19 & TypeScript", level: "Expert", highlight: "Compound patterns & concurrency" },
        { name: "Tailwind CSS & Design Tokens", level: "Expert", highlight: "Fluid modern responsive UI" },
        { name: "Web Performance (Core Vitals)", level: "Expert", highlight: "Lighthouse 100 & sub-second FCP" },
        { name: "State Architecture", level: "Advanced", highlight: "Optimistic updates & sync engines" },
      ],
    },
    {
      title: "Cloud, Infrastructure & DevOps",
      icon: "Cloud",
      description: "Infrastructure as code, container orchestration, and CI/CD pipelines.",
      skills: [
        { name: "Docker & Kubernetes", level: "Advanced", highlight: "Containerization & rolling deploys" },
        { name: "AWS & Cloudflare Edge", level: "Advanced", highlight: "Workers, S3, CloudFront & ECS" },
        { name: "CI/CD (GitHub Actions)", level: "Expert", highlight: "Automated test & canary deploys" },
        { name: "OpenTelemetry & Datadog", level: "Advanced", highlight: "Distributed tracing & metrics" },
      ],
    },
    {
      title: "Databases & Storage Engines",
      icon: "Database",
      description: "Relational, columnar, and document stores engineered for high throughput.",
      skills: [
        { name: "PostgreSQL", level: "Expert", highlight: "Complex indexing, partitioning & vacuum tuning" },
        { name: "MongoDB", level: "Advanced", highlight: "search optimization and indexing" },
        { name: "Prisma & Drizzle ORM", level: "Expert", highlight: "Type-safe database abstraction" },
        { name: "Vector Databases (pgvector)", level: "Proficient", highlight: "RAG & similarity search indexing" },
      ],
    },
  ],

  engineeringPrinciples: [
    {
      title: "Measure First, Optimize Second",
      description: "Never guess bottlenecks. Profile with flamegraphs, distributed traces, and Core Web Vitals before writing a single optimization line.",
    },
    {
      title: "Design for Failure as a First-Class State",
      description: "Networks flake, dependencies timeout, and machines restart. Resilient systems rely on idempotency, graceful degradation, and dead-letter queues.",
    },
    {
      title: "Simplicity is the Ultimate Scale",
      description: "The best line of code is the one never written. A well-designed simple architecture beats an over-engineered distributed mess every time.",
    },
    {
      title: "Empower Teams via Architecture",
      description: "Great code is obvious, well-documented, and pleasant to review. Architecture should amplify team velocity, not become an approval roadblock.",
    },
  ],
};
