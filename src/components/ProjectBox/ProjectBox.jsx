import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "./ProjectBox.css";

function ProjectBox({ project }) {
  return (
    <div className="project-box">
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
        <a href={project.sourceCode} className="link source-link">
          <GitHubIcon />
        </a>
      )}
      {project.livePreview && (
        <a href={project.livePreview} className="link source-link">
          <LinkIcon />
        </a>
      )}
    </div>
  );
}

export default ProjectBox;
