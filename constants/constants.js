export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Kanika Sharma",
    position: "Owner of Chiaras Casket",
    img: "https://imgs.search.brave.com/JV4OKERG_fYqdNZISY4DeM6ZSqY-Ut55OqsdYZTj5vY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyMi5wbmc",
    review:
      "Working with Hemanshu was a fantastic experience. He built our jewelry website using WordPress, creating a modern and user-friendly platform. His expertise in WordPress development and attention to detail made the project a success. Highly recommend him for any web development projects.",
  },
  {
    id: 2,
    name: "Shiva Dwivedi",
    position: "SDE-2 At Rebid",
    img: "https://imgs.search.brave.com/qckNHIA3-RFIn9aFlH-zipn-lombVlJzDhCjofSw-bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw",
    review:
      "I had the pleasure of collaborating with Hemanshu on a complex MERN stack project. His strong grasp of MongoDB, Express.js, React, and Node.js made him an invaluable team member. His code was always clean and well-structured, and he consistently delivered features ahead of schedule.",
  },
  {
    id: 3,
    name: "Deepali Shelar",
    position: "Project Manager at QED42",
    img: "https://imgs.search.brave.com/JV4OKERG_fYqdNZISY4DeM6ZSqY-Ut55OqsdYZTj5vY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyMi5wbmc",
    review:
      "Working alongside Hemanshu at QED42 has been fantastic. His ability to tackle complex project requirements and transform them into elegant solutions is remarkable. His problem-solving skills and dedication to delivering high-quality code have made him a valuable asset to our team.",
  },
  {
    id: 4,
    name: "Piyuesh Kumar",
    position: "Frontend Technical Architect at QED42",
    img: "https://imgs.search.brave.com/qckNHIA3-RFIn9aFlH-zipn-lombVlJzDhCjofSw-bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw",
    review:
      "As Hemanshu's manager, I was consistently impressed by his remarkable ability to adapt to new technologies. His enthusiasm for learning and staying current with industry trends is exceptional. He quickly masters new tools and frameworks, implementing them effectively in our projects. His dedication to continuous improvement and eagerness to take on challenging tasks makes him an invaluable team member.",
  },
];

export const myProjects = [
  {
    title: "Podcastr - AI Podcast Platform",
    desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://podcaster-lemon.vercel.app/",
    github_href: "https://github.com/Hemanshu-Upadhyay/Podcaster",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "QED42",
    pos: "Full-Stack Javascript Developer",
    duration: "2022 - Present",
    title:
      "Developed end-to-end components using Next.js, TypeScript, and React, delivering scalable and reusable solutions for high-performance web applications, Led full-cycle development in React Native for iOS applications, implementing performance optimization techniques that improved app responsiveness and load times by 25%.",
    icon: "/assets/qed42.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Doyenhub Software Solutions",
    pos: "Web Developer",
    duration: "2021 - 2022",
    title:
      "Implementing new features based on client requirements and ensuring seamless functionality.Managed the AWS deployment process for the front end, ensuring smooth and efficient project launches.",
    icon: "https://www.doyenhub.com/wp-content/uploads/2018/03/logo.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Attainu",
    pos: "Full-Stack Deveoper trainee",
    duration: "2020 - 2021",
    title:
      "Attainu was 12 month training program for web development, focsusing on the MERN Stack",
    icon: "https://attainu.com/images/logo.png",
    animation: "salute",
  },
];
