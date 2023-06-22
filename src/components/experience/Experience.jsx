import React from "react";
import "./experience.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { TbBrandTailwind } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <CgFigma size={22} className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaHtml5 size={22} className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt size={22} className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandTailwind size={22} className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap size={22} className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript size={20} className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact size={22} className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaJava size={22} className="experience__details-icon" />
              <div>
                <h4>JAVA</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs size={22} className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql size={22} className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaRProject size={22} className="experience__details-icon" />
              <div>
                <h4>R Project</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaPython size={22} className="experience__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
