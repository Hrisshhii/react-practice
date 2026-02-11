import type { Project } from "./pt-types";

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "AI Resume Analyzer",
    description:
      "A tool that analyzes resumes using AI and provides improvement suggestions.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-03-15",
    tags: ["React", "AI", "Node"],
    createdAt: new Date("2026-01-10"),
  },
  {
    id: "p2",
    title: "Music Dating App",
    description:
      "Connect users based on music taste compatibility using Spotify APIs.",
    status: "planned",
    priority: "high",
    dueDate: "2026-05-01",
    tags: ["Next.js", "API", "MongoDB"],
    createdAt: new Date("2026-02-01"),
  },
  {
    id: "p3",
    title: "Developer Portfolio v2",
    description:
      "Redesigning portfolio with animations, dark UI, and case studies.",
    status: "completed",
    priority: "medium",
    dueDate: "2025-12-20",
    tags: ["Framer Motion", "Tailwind"],
    createdAt: new Date("2025-11-05"),
  },
  {
    id: "p4",
    title: "Project Tracker SaaS",
    description:
      "A full-featured project tracker with filters, sorting, and Kanban board.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-02-28",
    tags: ["TypeScript", "React"],
    createdAt: new Date("2026-01-25"),
  },
  {
    id: "p5",
    title: "Real-time Chat Application",
    description:
      "Socket-based chat app supporting rooms, typing indicators, and media.",
    status: "planned",
    priority: "medium",
    dueDate: "2026-04-10",
    tags: ["Socket.io", "Express"],
    createdAt: new Date("2026-02-05"),
  },
  {
    id: "p6",
    title: "Fitness Tracker",
    description:
      "Track workouts, calories, and weekly progress with visual analytics.",
    status: "completed",
    priority: "low",
    dueDate: "2025-10-10",
    tags: ["Charts", "React"],
    createdAt: new Date("2025-09-01"),
  },
  {
    id: "p7",
    title: "Startup Landing Page Kit",
    description:
      "Collection of premium landing page templates for SaaS founders.",
    status: "in-progress",
    priority: "medium",
    dueDate: "2026-03-05",
    tags: ["UI/UX", "Tailwind"],
    createdAt: new Date("2026-01-18"),
  },
  {
    id: "p8",
    title: "Code Snippet Manager",
    description:
      "Save, tag, and search reusable code snippets across languages.",
    status: "planned",
    priority: "low",
    tags: ["Electron", "LocalStorage"],
    createdAt: new Date("2026-02-12"),
  },
  {
    id: "p9",
    title: "Team Collaboration Tool",
    description:
      "Manage tasks, comments, and timelines for remote teams.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-03-30",
    tags: ["WebSockets", "PostgreSQL"],
    createdAt: new Date("2026-01-28"),
  },
  {
    id: "p10",
    title: "Habit Builder",
    description:
      "Gamified habit tracking with streaks and milestone rewards.",
    status: "completed",
    priority: "medium",
    dueDate: "2025-11-12",
    tags: ["PWA", "IndexedDB"],
    createdAt: new Date("2025-10-01"),
  },
];
