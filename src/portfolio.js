import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import TwitterIcon from "@mui/icons-material/Twitter";

const newline = "<br>&emsp;&emsp;"

const header = {
  title: "AM",
};

const about = {
  name: "Akash Mukherjee",
  role: "Full Stack Developer",
  bio: `I am a tier 3 college student from Asansol, WB, India, a striving learner and working hard with over 1.5+years of experience in web development. I am a <span>self-taught developer</span>, with a passion for learning and interested in bleeding-edge technologies and tech stack.${newline}During the phase of lockdown, I fell in love with programming and I have dipped my hands in some techs and learnt them thoroughly, I think… I am fluent in classics like <span>C</span>, <span>Java</span>, and <span>Javascript</span> and also I enjoy doing web development, especially on the frontend side. Recently I have dived into the world of backend development and finally was able to break into the <span>MERN stack</span>.${newline}Fueled by high energy levels and boundless enthusiasm, I'm inspired and more willing to work on myself to learn and grow more as though there isn't any accurate age for learning. I am never satisfied to come up with ideas. Instead, I have an urge and need to act on them.`,
  resume: "https://drive.google.com/file/d/1wObkHkDeKcV6CPZG_RyP2fqFhE2FwTN_/view?usp=sharing",
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/memukherjee/", icon: <LinkedInIcon /> },
    { name: "github", url: "https://github.com/memukherjee", icon: <GitHubIcon /> },
    {
      name: "hackerrank",
      url: "https://www.hackerrank.com/memukherjee",
      icon: <CodeIcon />,
    },
    {
      name: "twitter",
      url: "https://twitter.com/memukherjee1",
      icon: <TwitterIcon />,
    },
  ],
};

const projects = [
  {
    name: "To Do App [MERN]",
    description:
      "Multiuser task management application to manage day to day tasks.",
    stack: ["React", "NodeJS", "ExpressJS","MongoDB","Bootstrap"],
    sourceCode: "https://github.com/MERN-To-Do-App",
    // livePreview: "https://memukherjee.github.io/image-gallery/",
  },
  {
    name: "Image Gallery",
    description:
      "Responsive dynamic web based image gallery application.",
    stack: ["React", "Javascript", "CSS"],
    sourceCode: "https://github.com/memukherjee/image-gallery",
    livePreview: "https://memukherjee.github.io/image-gallery/",
  },
  {
    name: "Personal Blog",
    description:
      "Blog website to feature my thoughts. Used the concept of dynamic routing.",
    stack: ["EJS", "NodeJS", "ExpressJS", "MongoDB"],
    sourceCode: "https://github.com/memukherjee/Blog-Website",
    livePreview: "https://akash-blogsite.herokuapp.com/",
  },
  {
    name: "Discord Bot",
    description:
      "Discord bot that replies on your specific text messages. It's a bot made for fun only.",
    stack: ["discord.js", "Javascript"],
    sourceCode: "https://github.com/memukherjee/Discord-Bot",
    livePreview: "https://discord.com/oauth2/authorize?client_id=935102650754678784&scope=bot",
  },
  {
    name: "Random Meme & Jokes Chrome Extension",
    description:
      "Chrome extension to generate random meme and jokes using api call.",
    stack: ["HTML", "Javascript"],
    sourceCode: "https://github.com/memukherjee/Dunk-Jokes"
  },
  {
    name: "To Do List",
    description:
      "Task management application to perform CRUD operations in task lists of different names in dynamic routes.",
    stack: ["EJS", "NodeJS", "MongoDB", "ExpressJS"],
    sourceCode: "https://github.com/memukherjee/ToDoList-Node-EJS-MongoDB",
    livePreview: "https://akash-todolist.herokuapp.com/",
  },
  {
    name: "Learning Management System",
    description:
      "Learning management system for colleges. It's a group project and my contribution in that is to design the html pages.",
    stack: ["HTML", "CSS", "Javascript","PHP","MySQL"],
    sourceCode: "https://github.com/memukherjee/College-LMS",
    livePreview: "https://collegelmsystem.000webhostapp.com/",
  },
  {
    name: "Simon Game",
    description:
      "It is a memory game based upon color pattern memorization.",
    stack: ["HTML", "CSS", "JQuery"],
    sourceCode: "https://github.com/memukherjee/simon",
    livePreview: "https://memukherjee.github.io/simon/",
  },
];

const skills = [
  "Java",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "JQuery",
  "React",
  "Material UI",
  "EJS",
  "Node",
  "Express",
  "MongoDB",
  "SQL",
  "Git",
];

const contact = {
  email: "akash3.11.2000@gmail.com",
  mobile: "9083354110",
};

export { header, about, projects, skills, contact };
