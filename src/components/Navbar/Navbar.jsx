import React from "react";
import DarkLightToggler from "../DarkLightToggler/DarkLightToggler";
import { header } from "../../portfolio";
import "./Navbar.css";
import Navitem from "../Navitem/Navitem";
import { useLocation } from "react-router-dom";
import { faAddressCard, faCode, faCodeBranch, faHouse } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setTheme, theme }) {
  const location = useLocation().pathname
  return (
    <>
      <nav className="navbar">
        <span className="brand-name">{header.title}<span className="blink">.</span> </span>
        <ul className="nav-items">
          <li>
            <Navitem selected={location==='/'} theme={theme} title={"Home"} Icon={faHouse} />
          </li>
          <li>
            <Navitem selected={location==='/projects'} theme={theme} title={"Projects"} Icon={faCodeBranch} />
          </li>
          <li>
            <Navitem
              selected={location==='/skills'}
              theme={theme}
              title={"Skills"}
              Icon={faCode}
            />
          </li>
          <li>
            <Navitem
              selected={location==='/contact'}
              theme={theme}
              title={"Contact"}
              Icon={faAddressCard}
            />
          </li>
          <DarkLightToggler setTheme={setTheme} theme={theme} />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
