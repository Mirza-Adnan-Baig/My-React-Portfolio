import React from "react";
import "./about.css";
import ME from "../../assets/mirza-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Erfahren Sie mehr</h5>
      <h2>Über mich</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Erfahrung</h5>
              <small>2+ Jahre Arbeit</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Projekte</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Repositories</h5>
              <small>3 und mehr in Zukunft</small>
            </article>
          </div>
          <p>
            Ein autodidaktischer Website-Entwickler, der immer an das Lernen
            glaubt. Ich habe gute Erfahrung in der Entwicklung von WordPress-
            und Shopify-Websites. Ich möchte mich weiterentwickeln, indem ich in
            die Welt der React-Website-Entwicklung einsteige. Ich bin konsequent
            bei meinen Aufgaben und Projekten und werde ein sehr guter und
            fokussierter Mitarbeiter sein, wenn man mir die Gelegenheit gibt.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
