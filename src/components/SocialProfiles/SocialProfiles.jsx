import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { about } from "../../portfolio";
import "./SocialProfile.css";

function SocialProfiles() {
  return (
    <div className="profiles">
      {about.socials.map((e, index) => {
        return (
          <div className="social-box" key={index}>
            <a
              target="_blank"
              rel="noreferrer"
              href={e.url}
              className={`social link ${e.name}`}
            >
              <FontAwesomeIcon icon={e.icon} />
            </a>
            {index + 1 === about.socials.length / 2 && (
              <div className="btn from-left">
                <a
                  className="resume-link"
                  href={about.resume}
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SocialProfiles;
