import React from "react";
import { motion } from "framer-motion";
import SocialProfiles from "../../components/SocialProfiles/SocialProfiles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from "../../portfolio";
import "./Skills.css";
import { useState } from "react";
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

  const [skillClass, setSkillClass] = useState({elementText: '', color: ''})

  const hoverShadow = (e) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setSkillClass({elementText: e.target.innerText, color: `${color}-shadow`})
  };

  const unHover = () => {
    setSkillClass({elementText: '', color: ''});
  };

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will run every second!");
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <motion.div
      initial={window.innerWidth>850?{width: 0}:{opacity: 0}}
      animate={window.innerWidth>850?{width: '100%'}:{opacity:1}}
      exit={window.innerWidth>850?{x: Window.innerWidth}:{opacity:0}}
    >
      <h1 className="heading link">SKILLS</h1>
      <ul className="skills">
        {skills.map((skill, index) => {
          return (
            <li
              key={index}
              onMouseOut={unHover}
              onMouseOver={hoverShadow}
              className={`skill-box ${skill.name===skillClass.elementText?skillClass.color:''}`}
            >
              { skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} /> }
              {skill.name && skill.name}
            </li>
          );
        })}
      </ul>
      <SocialProfiles />
    </motion.div>
  );
}

export default Skills;
