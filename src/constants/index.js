import {
  codebook,
  fitnessApp,
  movieApp,
  passwordGenerator,
  taskmate,
  flora,
  ibsu,
  mobile,
  backend,
  softline,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  itcs,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "TypeScript Developer",
    icon: backend,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "IT Assistant",
    company_name: "IBSU - International Black Sea Univercity, Tbilisi",
    icon: ibsu,
    iconBg: "#383E56",
    date: "September 2012 - September 2014",
    points: [
      "Maintained computers, faxes and Network cables.",
      "Managed university Technical stock.",
      "Collaborated with vendors to locate replacement components and resolve advanced problems. ",
    ],
  },
  {
    title: "Technical Support/Technical Supply Coordinator",
    company_name: "ITCS",
    icon: itcs,
    iconBg: "#E6DEDD",
    date: "September 2014 - May 2018",
    points: [
      "Assessed, Stored and took out necessary technical material, machines or machine parts to clients and coworkers.",
      "Helped maintain healthy Network and Technical conditions for client companies. ",
      "Prepared reports by collecting, analyzing and summarizing information.",
      "Designed and prepared technical reports, studies and related documentation.",
    ],
  },
  {
    title: "Network Engineer",
    company_name: "Softline Georgia, Tbilisi",
    icon: softline,
    iconBg: "#383E56",
    date: "July 2018 - Jan 2020",
    points: [
      "Installed, managed and monitored Checkpoint Security Gateway Appliances. ",
      "Created security logs via Smartconsole(Checkpoints Security Management Software) in order to troubleshoot network based problems. ",
      "Provided technical and software support for co-workers and clients.",
      "Monitored network capacity and performance, as well as diagnosed and resolved complex network problems.",
    ],
  },
  {
    title: "Programmer/Warehouse Inventory Control Manager ",
    company_name: "Impex Flora",
    icon: flora,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Present",
    points: [
      "Managing the warehouse and the stock",
      "Filled the appropriate documents like FITO, Invoice etc. ",
      "Maintaining Technical Condition of the warehouse IT and Otherwise",
      "Monitoring and Solving Complex Network Problems",
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
    name: "Codebook",
    description:
      "CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codebook,
    source_code_link: "https://github.com/Bobo011/CodeBook",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
