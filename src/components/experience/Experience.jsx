import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

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
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaHtml5 size={22} className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt size={22} className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript size={20} className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Entry Level</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact size={22} className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Entry Level</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React </h4>
                <small className="text-light"></small>
              </div>
            </article> */}
          </div>
        </div>

        {/* END */}

        <div className="experience__backend">
          <h3>Berufserfahrung</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Syscom I.T Solution</h4>
                <small className="text-light">Aug 2020 - Mar 2022</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Spotcomm</h4>
                <small className="text-light">Oct 2019 - Feb 2020</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JLogic Innovations</h4>
                <small className="text-light">Nov 2016 - Jan 2017</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
