import {
  cardGame1,
  cardGame2,
  cardGame3,
  cardGameMobile1,
  cardGameMobile2,
  cardGameMobile3,
  dod1,
  dod2,
  dod3,
  dod4,
  foxBook1,
  foxBook2,
  foxBook3,
  foxBookMobile1,
  foxBookMobile2,
  foxBookMobile3,
  mvdbScreenshots,
  whistlerApp1,
  whistlerApp2,
  whistlerApp3,
  whistlerAppMobile1,
  whistlerAppMobile2,
  whistlerAppMobile3,
} from "../assets/index.ts";
import youbikeDesktop1 from "../assets/showcases/Youbike/youbike-desktop1.png";
import youbikeMobile1 from "../assets/showcases/Youbike/youbike-mobile1.png";

export const showcaseData = [
  {
    name: "MVDB",
    desc: "A pure front-end website enables users to see and look up movie info.",
    libraries:
      "Ant Design, Axios, TanStack Router, React-spring, TanStack Query",
    screenshots: mvdbScreenshots,
    deployedUrl: "https://spiffy-scone-79afc0.netlify.app/",
    githubUrl: "https://gitlab.com/isaac.run.dev/mvdb",
  },
  {
    name: "YouBike Live Data Tracker",
    desc: "A web-based service enables users to check live data of the bicycle-sharing system (YouBike) in Taipei city",
    libraries: "Vite, ReactJS, TailwindCSS, Shadcn/ui, React Query, Axios",
    screenshots: [youbikeDesktop1, youbikeMobile1],
    deployedUrl: "https://youbike-tan.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/Youbike",
  },
  {
    name: "Diet or Die",
    desc: "A website for recording diet by bringing your own data or importing from OpenFoodFacts API *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.",
    libraries:
      "NextJS, ReactJS, NextAuthJS, Prisma, PostgreSQL, TailwindCSS, Shadcn/ui, React Hook Form, Zod, BcryptJS",
    screenshots: [dod1, dod2, dod3, dod4],
    deployedUrl: "https://dod-nextjs.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/dod-nextjs",
    demoUsername: "aloha@qmail.com",
    demoPswd: "111111",
  },
  {
    name: "FoxBook",
    desc: "A CRUD MERN stack website for sharing posts among registered users",
    libraries:
      "MongoDB, ExpressJS, ReactJS, NodeJS, Mongoose, TailwindCSS, Flowbite, React Hook Form, React-router-dom, Zod, BcryptJS. *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.",
    screenshots: [
      foxBook1,
      foxBook2,
      foxBook3,
      foxBookMobile1,
      foxBookMobile2,
      foxBookMobile3,
    ],
    deployedUrl: "https://nodejs-final-client.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/nodejs-final",
  },
  {
    name: "Whistler App",
    desc: "An anonymous system for reporting inappropriate behaviors to admins. For both reporters and admins",
    libraries:
      "React, TypeScript, Redux(Redux-toolkit), React Router DOM, Material-UI, React Query, Axios, React-beautiful-dnd",
    screenshots: [
      whistlerApp1,
      whistlerApp2,
      whistlerApp3,
      whistlerAppMobile1,
      whistlerAppMobile2,
      whistlerAppMobile3,
    ],
    deployedUrl: "https://dev-whistler-app.vercel.app/login",
    githubUrl:
      "https://github.com/WMAD-0522-Final-Project/whistleblower-app-backend",
    role: "Frontend developer",
  },
  {
    name: "Card Game",
    desc: "Get a new deck of cards every single game. 100% no cheating guaranteed",
    libraries: "HTML, CSS, JavaScript, Bootstrap, jQuery, GSAP",
    screenshots: [
      cardGame1,
      cardGame2,
      cardGame3,
      cardGameMobile1,
      cardGameMobile2,
      cardGameMobile3,
    ],
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final",
  },
];
