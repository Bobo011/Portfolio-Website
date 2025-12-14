import {
  carapp,
  thread,
  shopmate,
  codeBook,
  fitnessApp,
  movieApp,
  passwordGenerator,
  taskmate,
  flora,
  ibsu,
  Kovzy,
  storera,
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
    title: "React Developer",
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
    title: "Frontend Engineer",
    company_name: "Kovzy.com",
    icon: Kovzy,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Refactored 200+ React components using MUI, establishing a consistent design system to streamline development.",
      "Boosted table component performance by 300% through virtualization, enhancing user experience on data-heavy pages.",
      "Upgraded API management with GraphQL, reducing server load by 20% for 60+ endpoints via efficient caching.",
      "Collaborated with designers using Figma, creating 15 responsive interfaces to improve mobile user satisfaction by 15%",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Storera",
    icon: storera,
    iconBg: "#E6DEDD",
    date: "January 2021 - December 2022",
    points: [
      "Designed a monorepo architecture for 5+ front-end projects, cutting development time by 20% with TypeScript.",
      "Implemented Docker caching for builds, reducing CI/CD pipeline times by 50% across 10+ deployments.",
      "Enhanced MongoDB integration for 50+ API endpoints, improving query efficiency by 25% with Node.js.",
      "Built 100+ reusable React components, increasing UI consistency and speeding feature development by 15%.",
    ],
  },
  {
    title: "Network Engineer",
    company_name: "Softline Group",
    icon: softline,
    iconBg: "#383E56",
    date: "June 2018 - January 2021",
    points: [
      " Strengthened security with Checkpoint appliances, reducing network downtime by 25% for 100+ servers.",
      "Improved incident response using Smartconsole, cutting troubleshooting time by 30% for 50+ monthly issues.",
      "Enhanced network stability through monitoring, achieving 20% higher uptime for 1000+ client connections.",
      "Deployed 200+ monitoring tools, actively resolving 80% of potential issues to minimize downtime.",
      "Mentored 2 junior engineers on security protocols, improving team efficiency by 10% in 6 months",
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
    name: "Threads",
    description:
      "Discover, connect, and engage with like-minded individuals on our Threads app. Join conversations, share ideas, and foster meaningful connections in your favorite communities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: thread,
    source_code_link1: "https://github.com/Bobo011/09-threads-clone.git",
    source_code_link2: "https://09-threads-clone.vercel.app/",
  },
  {
    name: "Car App",
    description:
      "Rev up your passion for cars with our car enthusiast app. Explore, connect, and experience the world of automobiles like never before.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carapp,
    source_code_link1: "https://github.com/Bobo011/08-car-showcase.git",
    source_code_link2: "https://08-car-showcase.vercel.app/",
  },

  {
    name: "Movie App",
    description:
      "Web application that enables users to search for movies, view latest or upcoming ones, and search for the movie of your choice.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movieApp,
    source_code_link1:
      "https://github.com/Bobo011/React-Projects-New/tree/341c90b816f277d5a36b62f4399b3ec16c741f1a/vite-react/Projects/05-Movie-App/movie-app",
    source_code_link2: "https://movies-app-g.netlify.app/",
  },
  {
    name: "Fitness App",
    description:
      "Your go-to fitness app for personalized workout plans, nutrition tracking, and expert guidance. Achieve your health goals with ease.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessApp,
    source_code_link1:
      "https://github.com/Bobo011/Fitness-Application-Type-React.git",
    source_code_link2: "https://fitness-typescript-vite.netlify.app/",
  },
  {
    name: "Password Generator",
    description:
      "Generate strong, secure passwords effortlessly with our Password Generator app. Protect your online accounts with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: passwordGenerator,
    source_code_link1: "https://github.com/Bobo011/Password-generator",
    source_code_link2: "https://password-generator-gm.netlify.app/",
  },
  {
    name: "Task Maker",
    description:
      "Easily manage your tasks and stay organized with our Task Maker app. Boost your productivity and keep track of your to-do lists.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: taskmate,
    source_code_link1:
      "https://github.com/Bobo011/React-Projects-New/tree/341c90b816f277d5a36b62f4399b3ec16c741f1a/vite-react/Projects/02-TaskMate/task-mate",
    source_code_link2: "https://add-tasks1.netlify.app/",
  },
  {
    name: "Shop Mate",
    description:
      "Shop smart with Shop Mate, your perfect shopping companion. Discover deals, save money, and enjoy a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: shopmate,
    source_code_link1:
      "https://github.com/Bobo011/React-Projects-New/tree/master/vite-react/Projects/07-Shopmatecr",
    source_code_link2: "https://shopmate-1.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
