import React from "react";
import "./about.css";
import ME from "../../assets/mirza-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Learn More</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>2+ years in the field</small>
            </article>
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Repositories</h5>
              <small>Follow me on Github</small>
            </article>
          </div>
          <p>
            I am a highly motivated computer science graduate with over 2 years
            of experience in software development. My expertise lies in multiple
            programming languages, including JavaScript, HTML5, CSS3, Node.js,
            and SQL. I am passionate about tackling new challenges and
            continuously expanding my knowledge base. With a strong desire to
            learn and grow, I am always seeking opportunities to further enhance
            my skills and stay updated with the latest industry trends. My
            dedication to delivering high-quality software solutions and my
            eagerness to embrace new technologies make me a valuable asset in
            any software development team.
          </p>
          <a href="#contact" className="btn btn-primary" alt="Contact Section">
            {" "}
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
