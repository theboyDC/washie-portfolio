export interface Project {
  idx: string;
  title: string;
  desc: string;
  tags: string;
  status: string;
  href?: string;
  githubHref?: string;
  thumb: "pipeline" | "grid" | "calendar" | "mobile" | "web" | "robot";
}

export const projects: Project[] = [
  {
    idx: "01",
    title: "MoCredit",
    desc: "AI-powered credit scoring & micro-lending mini app on the MTN MoMo Open API platform — 2nd place, 2026 MTN MoMo FinTech Hackathon. Flutter frontend, Node.js/Hono backend on Cloudflare Workers, live MoMo Collections & Disbursements APIs, plus an n8n-orchestrated AI coaching agent.",
    tags: "Flutter (Dart) · Node.js · Hono · Cloudflare Workers/D1/KV · MTN MoMo APIs · n8n",
    status: "Live",
    href: "https://momo-credit-app.pages.dev",
    githubHref: "https://github.com/bhekani17/South-africa-VoiceMo-mini-app",
    thumb: "mobile",
  },
  {
    idx: "02",
    title: "Thuso Health",
    desc: "Offline-first digital health passport & smart clinic finder for the Digital Pulse G13 Health Challenge (Gauteng Dept. of Health) — Top 3 at the G13 Hackathon. QR-code identification, one-time-PIN practitioner access, one-tap PDF export, and clinic recommendations combining travel-time, queue congestion, and load-shedding data.",
    tags: "JavaScript · Hono · Cloudflare Workers/D1/R2 · JWT · Leaflet · OSRM · jsPDF · QRCode.js",
    status: "View",
    href: "https://github.com/peekay11/thuso-health",
    thumb: "grid",
  },
  {
    idx: "03",
    title: "Thukela Technologies Website",
    desc: "Client-facing single-page site — helped shape the visual design and interactive UI, including an orbital hero visualization, cursor-repel physics, and elastic-collision animated components. Centralized all site content into a single maintainable data module.",
    tags: "React · TypeScript · Vite · Framer Motion · Lucide React",
    status: "Live",
    href: "https://thukela-technologies.vercel.app",
    githubHref: "https://github.com/peekay11/thukela-Technologies",
    thumb: "web",
  },
  {
    idx: "04",
    title: "TSUMO Network Backend Architecture",
    desc: "Scalable backend services supporting media streaming workflows and automated revenue allocation split calculations, with structured RESTful API endpoints connecting application interfaces to persistent storage layers.",
    tags: "Python · RESTful APIs · Microservices",
    status: "Private",
    thumb: "pipeline",
  },
  {
    idx: "05",
    title: "Robot World Simulation Platform",
    desc: "Java-based multiplayer robot world simulation built with Maven — WeThinkCode_ coursework. Refactored core simulation logic against CodeScene Bumpy Road complexity warnings, with a Swing GUI client visualizing robot movement.",
    tags: "Java · Maven · JUnit 5 · Swing · Socket & Network Programming · TDD — WeThinkCode_ (private)",
    status: "Private",
    thumb: "robot",
  },
  {
    idx: "06",
    title: "Code Clinic Booking System",
    desc: "Booking system for scheduling and managing code clinic sessions — WeThinkCode_ course project.",
    tags: "Python · Flask · SQLite — WeThinkCode_ (private)",
    status: "Private",
    thumb: "calendar",
  },
];

export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  { label: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "Bash/Shell"] },
  {
    label: "Backend & Web Development",
    items: [
      "RESTful APIs",
      "Microservices",
      "Socket & Network Programming",
      "Flask",
      "Node.js",
      "Hono",
      "Next.js",
      "React",
      "React Bootstrap",
      "Vite",
      "Flutter (Dart)",
      "Cloudflare Workers",
      "JWT Authentication",
      "UI/UX Design",
    ],
  },
  {
    label: "Data Engineering",
    items: ["ETL Pipelines", "SQLite", "Cloudflare D1", "Cloudflare KV"],
  },
  {
    label: "Testing & Practices",
    items: ["Test-Driven Development (TDD)", "JUnit 5", "Object-Oriented Design (OOD)", "Agile"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab CI/CD", "Linux (Ubuntu)", "Docker", "Maven", "n8n", "Generative AI Tools"],
  },
];

export interface ExperienceItem {
  role: string;
  meta: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Peer Tutor & Bootcamp Assistant",
    meta: "WeThinkCode_ · Oct 2025 – Present",
    points: [
      "Facilitate hands-on technical sessions covering Python fundamentals, Java object-oriented design, and Git workflow best practices for incoming student cohorts",
      "Conduct structured code reviews, assist students with systems debugging, and enforce test-driven development principles",
      "Assist campus facilitators with organizing logistics and running technical bootcamp orientation cycles",
    ],
  },
];

export interface Cert {
  name: string;
  meta: string;
}

export const certs: Cert[] = [
  { name: "Generative AI for Software Engineering", meta: "WeThinkCode_" },
  { name: "Data Engineering Basics for Everyone", meta: "edX · Aug 2026" },
  { name: "Relational Database Management Systems", meta: "Sep 2026" },
];

export interface RecordStat {
  num: string;
  cap: string;
}

export const record: RecordStat[] = [
  { num: "Final-year", cap: "Diploma in Software Engineering & Data Engineering, WeThinkCode_" },
  { num: "2nd Place", cap: "2026 MTN MoMo FinTech Hackathon — MoCredit" },
  { num: "Top 3", cap: "Digital Pulse G13 Health Hackathon — Thuso Health" },
  { num: "11+ months", cap: "Peer tutoring & bootcamp assisting at WeThinkCode_" },
];
