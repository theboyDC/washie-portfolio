export interface Project {
  idx: string;
  title: string;
  desc: string;
  tags: string;
  status: string;
  href?: string;
  thumb: "pipeline" | "grid" | "calendar" | "mobile";
}

export const projects: Project[] = [
  {
    idx: "01",
    title: "Weather ETL Pipeline",
    desc: "Extracts, cleans, and loads hourly weather data into a normalized PostgreSQL database.",
    tags: "Python · pandas · PostgreSQL · Docker",
    status: "View",
    href: "https://github.com/theboyDC/lead_pipeline",
    thumb: "pipeline",
  },
  {
    idx: "02",
    title: "Robot World",
    desc: "Multiplayer client-server game — robots on a shared grid, synced over TCP sockets.",
    tags: "Java · Maven · TCP Sockets · JUnit 5 — WeThinkCode_ GitLab (private)",
    status: "Private",
    thumb: "grid",
  },
  {
    idx: "03",
    title: "Google Calendar Clinic System",
    desc: "CLI booking tool syncing volunteer time slots and student bookings to Google Calendar.",
    tags: "Python · Google Calendar API · Click · Rich — WeThinkCode_ GitLab (private)",
    status: "Private",
    thumb: "calendar",
  },
  {
    idx: "04",
    title: "Thukela Technologies App",
    desc: "Mobile application built for Thukela Technologies.",
    tags: "React Native · TypeScript · Vite",
    status: "Live",
    href: "https://thukela-technologies.vercel.app",
    thumb: "mobile",
  },
];

export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  { label: "Languages", items: ["Python", "Java", "TypeScript", "SQL"] },
  {
    label: "Data & Databases",
    items: ["PostgreSQL", "pandas", "Relational DB Design", "ETL Pipelines"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React Native", "Vite", "Maven", "JUnit 5", "Click", "Rich", "Gson"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab", "Docker", "Docker Compose", "Linux / Ubuntu", "IntelliJ IDEA"],
  },
  {
    label: "Concepts",
    items: [
      "REST & OAuth2 APIs",
      "TCP Sockets",
      "Client-Server Architecture",
      "Multithreading",
      "JSON Protocol Design",
      "OOP",
      "Unit Testing",
    ],
  },
];

export interface ExperienceItem {
  role: string;
  meta: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Bootcamp Assistant",
    meta: "WeThinkCode_ · Jul 2026 – Present",
    points: [
      "Assist facilitators in running coding bootcamp sessions, supporting participants through hands-on exercises and troubleshooting",
      "Help onboard new learners to programming fundamentals and the bootcamp's tools and workflow",
    ],
  },
  {
    role: "Peer Tutor",
    meta: "WeThinkCode_ · Oct 2025 – Present",
    points: [
      "Support fellow students by explaining programming concepts, debugging code, and reinforcing problem-solving techniques",
      "Contribute to WeThinkCode_'s peer-driven, project-based learning environment",
    ],
  },
];

export interface Cert {
  name: string;
  meta: string;
}

export const certs: Cert[] = [
  { name: "GenAI Course for Software Engineers", meta: "WeThinkCode_ · Mar 2026" },
  { name: "Data Engineering Basics for Everyone", meta: "edX · Aug 2026" },
  { name: "Relational Database Management Systems", meta: "IBM · Sep 2026" },
];

export interface RecordStat {
  num: string;
  cap: string;
}

export const record: RecordStat[] = [
  { num: "2nd Year", cap: "Diploma in Software Engineering, WeThinkCode_" },
  { num: "4+", cap: "Projects shipped across data, backend & mobile" },
  { num: "3+", cap: "Certifications completed in 2026" },
  { num: "11+ months", cap: "Peer tutoring fellow students at WeThinkCode_" },
];
