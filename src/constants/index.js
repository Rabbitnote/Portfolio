import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  agnos,
  innovasive,
  threejs,
  setthi,
  mevaccine,
  figmaclone,
  synthia,
  notekeeper,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Agnos Health",
    icon: agnos,
    iconBg: "#383E56",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Built and maintained mobile-responsive web interfaces using React.js.",
      "Used Google Analytics data to redesign onboarding flows — cutting AI diagnostic drop-off from 40% to 20% within 2 months.",
      "Led end-to-end redesign of agnoshealth.com, improving UX and driving adoption of the Morphom mental health screening tool.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Innovasive",
    icon: innovasive,
    iconBg: "#E6DEDD",
    date: "March 2023 - May 2024",
    points: [
      "Architected the core design system by converting Figma design tokens into Tailwind CSS and global CSS variables.",
      "Delivered pixel-perfect, cross-browser responsive UI from Figma mockups including Safari-specific edge cases.",
      "Implemented E2E testing with Cypress to automate regression coverage and reduce manual QA effort.",
      "Built reusable components including a calendar display (Microsoft Teams-style) and a rich text editor (Medium-style).",
    ],
  },
  {
    title: "Front-End Developer (Next.js + TypeScript)",
    company_name: "VIALINK",
    icon: innovasive,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Independently designed and built 10+ major features on an enterprise AI workflow automation platform.",
      "Architected a visual RPA step builder — drag-and-drop graph canvas with 10+ node types including screenshot capture and output file handling.",
      "Built a custom AI Copilot chat UI from scratch — message threads, tool call display, reasoning display, and Splitter panel layout.",
      "Contributed backend Python features — implemented a Count Row Excel workflow piece and fixed a leading-zero data loss bug in Excel file merging using openpyxl.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "NoteKeeper",
    description:
      "Full-stack real-time collaborative notes app. Built a Go REST API with JWT auth and SSE broker for live sync, PostgreSQL database, and a Next.js Kanban board with drag-and-drop — containerized with Docker.",
    tags: [
      {
        name: "Go",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "black-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: notekeeper,
    demo: "https://note-keeper-3uoi.vercel.app",
    source_code_link: "https://github.com/Rabbitnote/NoteKeeper",
  },
  {
    name: "Figma Clone",
    description:
      "Real-time collaborative design tool built with Next.js and Liveblocks. Supports multi-user canvas editing with live cursors and presence.",
    tags: [
      {
        name: "Next.js",
        color: "black-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Liveblocks",
        color: "purple-text-gradient",
      },
    ],
    image: figmaclone,
    demo: "https://figma-clone-chi-seven.vercel.app/",
    source_code_link: "https://github.com/Rabbitnote/figmaClone",
  },
  {
    name: "Synthia",
    description:
      "Telemedicine system for NCD patients — WebRTC video calls, appointment management, health data visualization, and payment integration. Built for both patient and doctor interfaces.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "black-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: synthia,
    source_code_link: "https://github.com/synthia-telemed",
  },
  {
    name: "MeVaccine",
    description:
      "COVID-19 vaccination appointment app built with Flutter. Step-by-step reservation UI optimized for elderly users with bilingual support (Thai/English).",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
    ],
    image: mevaccine,
    source_code_link: "https://github.com/MeVaccine/MeVaccine",
  },
  {
    name: "Setthi",
    description:
      "Personal expense management app built with Flutter. Track daily transactions, categorize spending, and split money by purpose.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
    ],
    image: setthi,
    source_code_link: "https://github.com/GGolfz/Setthi",
  },
];

export { services, technologies, experiences, testimonials, projects };
