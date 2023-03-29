import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  ecommerce,
  resturent,
  youtube,
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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "React Native, I'm Learning",
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
];

const experiences = [
  {
    title: "Youtube-Clone",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Throughout the development process, I faced a number of challenges, ",
      "including integrating the Rapid API to fetch video data and working ",
      "with the YouTube API to display video content. However, by breaking ",
      "down the project into smaller, manageable tasks, I was able to ",
      "overcome these obstacles and deliver a fully functional YouTube clone web application.",
    ],
  },
  {
    title: "Ecommerce Website",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Building an ecommerce website using Next.js, Sanity, and Stripe was an",
      "exciting challenge as a frontend developer. Throughout the project, I gained",
      "aluable experience in developing a fully functional ecommerce website from start to finish.",
      "                                                                             ",
      "I also utilized the headless CMS platform, Sanity, to manage the product data and content of the website. This allowed me to have a seamless integration between the product listings and content management system.",
    ],
  },
  {
    title: "Landing Pages",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I have built numerous landing pages using various technologies such as Tailwind CSS,",
      "Material UI, Bootstrap, and React JS",
    ],
  },
  {
    title: "Learing React Native, But I'am absolute beginner",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Currently, I am also learning React Native to expand my skill set and develop mobile",
      "applications. Through this learning process, I am gaining a better understanding of",
      "mobile application development and the challenges that come with it.",
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
    name: "Ecommerce",
    description:
      " The project involved designing and developing a fully functional ecommerce website from scratch, including the integration of the Sanity headless CMS to manage product data and content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "strip",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/ankitmukhia/ecommerce-site",
    source_code_link_website: "https://ecommerce-site-chi.vercel.app//",
  },
  {
    name: "Youtube-clone",
    description:
      "I built a YouTube clone using React JS, Material UI, and RapidAPI. The project involved developing a website that replicated the functionality and design of YouTube, including the ability to search for videos, view video details, and play videos..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/ankitmukhia/Youtube-Clone",
    source_code_link_website: "https://youtube-clone-youtube.netlify.app/",
  },
  {
    name: "UI/UX Restaurant Website",
    description:
      " I built a landing page for a restaurant using React JS. The project involved developing a visually appealing and responsive website that showcased the restaurant's offerings and encouraged visitors to make a reservation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: resturent,
    source_code_link: "https://github.com/ankitmukhia/Restaurant-Landing-Page",
    source_code_link_website: "https://restaurant-landing-page-one.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
