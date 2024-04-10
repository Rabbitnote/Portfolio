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
  meta,
  starbucks,
  tesla,
  shopify,
  agnos,
  innovasive,
  carrent,
  jobit,
  tripguide,
  threejs,
  setthi,
  mevaccine,
  synthia,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "NextJS Developer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "React.js Developer",
    company_name: "Agnos",
    icon: agnos,
    iconBg: "#383E56",
    date: "Jan 2022 - August 2022",
    points: [
      "Developing and maintaining web applications in layout mobile using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Research Google analytic and used information to improved the solution reduce drop off from 40% to 20%",
    ],
  },
  {
    title: "Nextjs Developer",
    company_name: "Innovasive",
    icon: innovasive,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, NextJs. and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contrbuted core design system and converted Figmatoken to tailwind config file",
      "Research E2E testing and Unit testing for reduced proccess occur bug.",
      "Experienced with Craft components for teams and researching the best component for all projects flexible. Also, craft component calendar display like Microsoft Team and make EditorJs similar to Medium"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Setthi",
    description:
      "Setthi is an expense management application that can help you to manage your expenses and transactions in your daily life and also allow you to split your money by purpose.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
    ],
    image: setthi,
    source_code_link: "https://github.com/GGolfz/Setthi",
  },
  {
    name: "MeVaccine",
    description:
      "Mo Prom is the application appointment of vaccinating of Covid-19.  It helps the user to register an appointment to getting a vaccine from the COVID-19 situation. It allows users to select a hospital and chooses the time to the appointment. After your vaccination complete it will keep a record of your vaccination in the system of vaccinating.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
    ],
    image: mevaccine,
    source_code_link: "https://github.com/MeVaccine/MeVaccine",
  },
  {
    name: "Synthia",
    description:
      "Synthia is a telemedicine system designed for Noncommunicable disease (NCD) patients. It was designed as an extension of the existing hospital system. It provides a telemedicine channel for patients and doctors. It can show the appointment, video call with the doctor, and receive the payment using a credit card. Synthia also provides a way for the patient to self-record measurement results such as blood pressure, pulse, and glucose. The system will aggregate the recorded data and visualize them for both patient and the doctor. For this project, we developed two applications for both doctors and patients.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "black-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: synthia,
    source_code_link: "https://github.com/synthia-telemed",
  },
];

export { services, technologies, experiences, testimonials, projects };
