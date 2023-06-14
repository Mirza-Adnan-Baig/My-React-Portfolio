import React from "react";
import FIGMA from "../../assets/svg/figma-ar21.svg";
import JS from "../../assets/svg/javascript-ar21.svg";
import NODE from "../../assets/svg/nodejs-ar21.svg";
import PY from "../../assets/svg/python-ar21.svg";
import R from "../../assets/svg/r-project-ar21.svg";
import RE from "../../assets/svg/reactjs-ar21.svg";
import TW from "../../assets/svg/tailwindcss-ar21.svg";
import CS from "../../assets/svg/css3-seeklogo.com.svg";
import HTML from "../../assets/svg/w3_html5-ar21.svg";
import SQL from "../../assets/svg/mysql-ar21.svg";
import JAVA from "../../assets/svg/java-ar21.svg";
import BS from "../../assets/svg/getbootstrap-ar21.svg";
import GIT from "../../assets/svg/git-scm-ar21.svg";
import JEST from "../../assets/svg/jestjsio-ar21.svg";
import "./slider.css";
const Slider = () => {
  return (
    <div class="logos">
      <div class="logos-slide">
        <img src={FIGMA} alt="" />
        <img src={JS} alt="" />
        <img src={NODE} alt="" />
        <img src={PY} alt="" />
        <img src={R} alt="" />
        <img src={RE} alt="" />
        <img src={TW} alt="" />
        <img src={CS} alt="" />
        <img src={HTML} alt="" />
        <img src={SQL} alt="" />
        <img src={JAVA} alt="" />
        <img src={BS} alt="" />
        <img src={GIT} alt="" />
        <img src={JEST} alt="" />
      </div>
      <div className="logos-slide">
        <img src={FIGMA} alt="" />
        <img src={JS} alt="" />
        <img src={NODE} alt="" />
        <img src={PY} alt="" />
        <img src={R} alt="" />
        <img src={RE} alt="" />
        <img src={TW} alt="" />
        <img src={CS} alt="" />
        <img src={HTML} alt="" />
        <img src={SQL} alt="" />
        <img src={JAVA} alt="" />
        <img src={BS} alt="" />
        <img src={GIT} alt="" />
        <img src={JEST} alt="" />
      </div>
    </div>
  );
};

export default Slider;
