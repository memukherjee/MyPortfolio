import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./ProjectBox.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function ProjectBox({ project }) {
  return (
    <div className="project-box">
      {project.icon && <FontAwesomeIcon className="project-icon" icon={project.icon} />}
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="stack">
        {project.stack.map((tech, index) => (
          <p key={index} className="tech">
            {tech}
          </p>
        ))}
      </div>
      {project.sourceCode && (
        <a target="_blank" rel="noreferrer" href={project.sourceCode} className="link source-link">
        <FontAwesomeIcon icon={faGithub} />
        </a>
      )}
      {project.livePreview && (
        <a target="_blank" rel="noreferrer" href={project.livePreview} className="link source-link">
        <FontAwesomeIcon icon={faLink} />
        </a>
      )}
    </div>
  );
}

export default ProjectBox;
