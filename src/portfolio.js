import {
  faGithub,
  faHackerrank,
  faLinkedin,
  faTwitter,
  faChrome,
  faJava,
  faHtml5,
  faCss3,
  faJsSquare,
  faBootstrap,
  faReact,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faHandScissors, faImages } from "@fortawesome/free-regular-svg-icons";
import {
  faClipboardList,
  faBlog,
  faRobot,
  faGraduationCap,
  faGamepad,
  faCode,
  faM,
  faE,
  faDatabase,
  faFilm
} from "@fortawesome/free-solid-svg-icons";

const newline = "<br>&emsp;&emsp;";

const header = {
  title: "AM",
};

const about = {
  name: "Akash Mukherjee",
  role: "Full Stack Developer",
  bio: `I am a tier 3 college student from Asansol, WB, India, a striving learner and working hard with over 1.5+years of experience in web development. I am a <span>self-taught developer</span>, with a passion for learning and interested in bleeding-edge technologies and tech stack.${newline}During the phase of lockdown, I fell in love with programming and I have dipped my hands in some techs and learnt them thoroughly, I think… I am fluent in classics like <span>C</span>, <span>Java</span>, and <span>Javascript</span> and also I enjoy doing web development, especially on the frontend side. Recently I have dived into the world of backend development and finally was able to break into the <span>MERN stack</span>.${newline}Fueled by high energy levels and boundless enthusiasm, I'm inspired and more willing to work on myself to learn and grow more as though there isn't any accurate age for learning. I am never satisfied to come up with ideas. Instead, I have an urge and need to act on them.`,
  resume:
    "https://drive.google.com/file/d/1wObkHkDeKcV6CPZG_RyP2fqFhE2FwTN_/view?usp=sharing",
  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/memukherjee/",
      icon: faLinkedin,
    },
    { name: "github", url: "https://github.com/memukherjee", icon: faGithub },
    {
      name: "hackerrank",
      url: "https://www.hackerrank.com/memukherjee",
      icon: faHackerrank,
    },
    {
      name: "twitter",
      url: "https://twitter.com/memukherjee1",
      icon: faTwitter,
    },
  ],
};

const projects = [
  {
    name: "Twitter Clone",
    icon: faTwitter,
    description: "Social media application with functionalities like posting, liking, deleting, Singup with Google, etc. Similar to twitter with clone UI.",
    stack: ["NodeJS", "EJS", "Bootstrap", "HarperDB"],
    sourceCode: "https://github.com/memukherjee/Nagarro-Projects/tree/main/twitter-clone",
    livePreview: "https://me-twitter.herokuapp.com/",
  },
  {
    name: "To Do App [MERN]",
    icon: faClipboardList,
    description:
      "Multiuser task management application to manage day to day tasks.",
    stack: ["React", "NodeJS", "ExpressJS", "MongoDB", "Bootstrap"],
    sourceCode: "https://github.com/MERN-To-Do-App",
  },
  {
    name: "Image Gallery",
    icon: faImages,
    description: "Responsive dynamic web based image gallery application.",
    stack: ["React", "Javascript", "CSS"],
    sourceCode: "https://github.com/memukherjee/image-gallery",
    livePreview: "https://memukherjee.github.io/image-gallery/",
  },
  {
    name: "Personal Blog",
    icon: faBlog,
    description:
      "Blog website to feature my thoughts. Used the concept of dynamic routing.",
    stack: ["EJS", "NodeJS", "ExpressJS", "MongoDB"],
    sourceCode: "https://github.com/memukherjee/Blog-Website",
    livePreview: "https://akash-blogsite.herokuapp.com/",
  },
  {
    name: "Discord Bot",
    icon: faRobot,
    description:
      "Discord bot that replies on your specific text messages. It's a bot made for fun only.",
    stack: ["discord.js", "Javascript"],
    sourceCode: "https://github.com/memukherjee/Discord-Bot",
    livePreview:
      "https://discord.com/oauth2/authorize?client_id=935102650754678784&scope=bot",
  },
  {
    name: "OMDB Movie Finder",
    icon: faFilm,
    description: "Frontend application to search for movies using OMDB API. Shows the details of the movie like poster, description, release year.",
    stack: ["HTML", "Javascript", "Bootstrap"],
    sourceCode: "https://github.com/memukherjee/Nagarro-Projects/tree/main/OMDB-api",
    livePreview: "https://memukherjee.github.io/Nagarro-Projects/OMDB-api/",
  },
  {
    name: "Stone Paper Scissor Android App",
    icon: faHandScissors,
    description:
      "Basic android app to play Stone Paper Scissor game based upon the basic input output facilities of the android ecosystem",
    stack: ["Java", "Gradle", "XML"],
    sourceCode:
      "https://github.com/memukherjee/Stone-Paper-Scissor-Android-App",
  },
  {
    name: "Random Meme & Jokes Chrome Extension",
    icon: faChrome,
    description:
      "Chrome extension to generate random meme and jokes using api call.",
    stack: ["HTML", "Javascript"],
    sourceCode: "https://github.com/memukherjee/Dunk-Jokes",
  },
  {
    name: "To Do List",
    icon: faClipboardList,
    description:
      "Task management application to perform CRUD operations in task lists of different names in dynamic routes.",
    stack: ["EJS", "NodeJS", "MongoDB", "ExpressJS"],
    sourceCode: "https://github.com/memukherjee/ToDoList-Node-EJS-MongoDB",
    livePreview: "https://akash-todolist.herokuapp.com/",
  },
  {
    name: "Learning Management System",
    icon: faGraduationCap,
    description:
      "Learning management system for colleges. It's a group project and my contribution in that is to design the html pages.",
    stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    sourceCode: "https://github.com/memukherjee/College-LMS",
    livePreview: "https://collegelmsystem.000webhostapp.com/",
  },
  {
    name: "Simon Game",
    icon: faGamepad,
    description: "It is a memory game based upon color pattern memorization.",
    stack: ["HTML", "CSS", "JQuery"],
    sourceCode: "https://github.com/memukherjee/simon",
    livePreview: "https://memukherjee.github.io/simon/",
  },
];

const skills = [
  { name: "Java", icon: faJava },
  { name: "C", icon: faCode },
  { name: "HTML", icon: faHtml5 },
  {name: "CSS", icon: faCss3 },
  {name: "JavaScript", icon: faJsSquare },
  {name: "Bootstrap", icon: faBootstrap },
  {name: "JQuery", icon: faJsSquare },
  {name: "React", icon: faReact },
  {name: "Material UI", icon: faM },
  {name: "EJS", icon: faNodeJs },
  {name: "Node", icon: faNodeJs },
  {name: "Express", icon: faE },
  {name: "MongoDB", icon: faDatabase },
  {name: "SQL", icon: faDatabase },
  {name: "Git", icon: faGitAlt },
];

const contact = {
  email: "akash3.11.2000@gmail.com",
  mobile: "9083354110",
};

export { header, about, projects, skills, contact };
