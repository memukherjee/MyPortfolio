import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TerminalIcon from "@mui/icons-material/Terminal";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DarkLightToggler from "../DarkLightToggler/DarkLightToggler";
import { header } from "../../portfolio";
import "./Navbar.css";
import Navitem from "../Navitem/Navitem";
import { useLocation } from "react-router-dom";

function Navbar({ setTheme, theme }) {
  const location = useLocation().pathname
  return (
    <>
      <nav className="navbar">
        <span className="brand-name">{header.title}<span className="blink">.</span> </span>
        <ul className="nav-items">
          <li>
            <Navitem selected={location==='/'} theme={theme} title={"Home"} Icon={HomeIcon} />
          </li>
          <li>
            <Navitem selected={location==='/projects'} theme={theme} title={"Projects"} Icon={TerminalIcon} />
          </li>
          <li>
            <Navitem
              selected={location==='/skills'}
              theme={theme}
              title={"Skills"}
              Icon={IntegrationInstructionsIcon}
            />
          </li>
          <li>
            <Navitem
              selected={location==='/contact'}
              theme={theme}
              title={"Contact"}
              Icon={ContactMailIcon}
            />
          </li>
          <DarkLightToggler setTheme={setTheme} theme={theme} />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
