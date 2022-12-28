import React from "react";
import "./header.css";
import CTA from "./CTA";
import MIRZA from "../../assets/mirza.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hallo Ich bin</h5>
        <h1>Mirza Adnan Baig</h1>
        <h5 className="text-light">React.Js Entwickler</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={MIRZA} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Hinunterscrollen
        </a>
      </div>
    </header>
  );
};

export default Header;
