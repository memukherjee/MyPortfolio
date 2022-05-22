import React from "react";
import { motion } from "framer-motion";
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import { projects } from "../../portfolio";
import "./Projects.css";

function Projects() {
  return (
    <motion.div
      initial={window.innerWidth>850?{width: 0}:{opacity: 0}}
      animate={window.innerWidth>850?{width: '100%'}:{opacity:1}}
      exit={window.innerWidth>850?{x: Window.innerWidth}:{opacity:0}}
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
