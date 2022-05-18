import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { about } from "../../portfolio";
import SocialProfiles from "../../components/SocialProfiles/SocialProfiles";

function Home() {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: Window.innerWidth}}
    >
      <div className="intro">
        <h1 className="hi-msg">
          Hi, I am <span className="name">{about.name}</span>
        </h1>
        <h3 className="role">A {about.role}</h3>
        <p className="bio">
          <span className="angular-brace">&lt;</span>
          <span
            className="main-bio"
            dangerouslySetInnerHTML={{ __html: about.bio }}
          ></span>
          <span className="angular-brace">&gt;</span>
        </p>
      </div>
      <SocialProfiles />
    </motion.div>
  );
}

export default Home;
