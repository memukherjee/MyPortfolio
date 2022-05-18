import React from "react";
import { motion } from "framer-motion";
import SocialProfiles from "../../components/SocialProfiles/SocialProfiles";
import { skills } from "../../portfolio";
import "./Skills.css";
function Skills() {
  const colors = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];
  const hoverShadow = (e) => {
    const element = e.target;
    const color = colors[Math.floor(Math.random() * 7)];
    element.classList = "skill-box " + color + "-shadow";
  };

  const unHover = (e) => {
    const element = e.target;
    element.classList = "skill-box ";
  };

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will run every second!");
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: Window.innerWidth}}
    >
      <h1 className="heading link">SKILLS</h1>
      <ul className="skills">
        {skills.map((skill, index) => {
          return (
            <li
              key={index}
              onMouseOut={unHover}
              onMouseOver={hoverShadow}
              className="skill-box"
            >
              {skill}
            </li>
          );
        })}
      </ul>
      <SocialProfiles />
    </motion.div>
  );
}

export default Skills;
