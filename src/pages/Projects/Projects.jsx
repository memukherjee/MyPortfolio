import React from "react";
import { motion } from "framer-motion";
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import { projects } from "../../portfolio";
import "./Projects.css";

function Projects() {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: Window.innerWidth}}
    >
      <h1 className="heading link">PROJECTS</h1>
      <div className="projects">
        {projects.map((project, index) => {
          return <ProjectBox key={index} project={project} />;
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
