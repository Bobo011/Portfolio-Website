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
        name: "typescript",
        color: "green-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codeBook,
    source_code_link1: "https://github.com/Bobo011/CodeBook",
    source_code_link2: "https://codebook-gm.netlify.app/",
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
];

export { services, technologies, experiences, testimonials, projects };
