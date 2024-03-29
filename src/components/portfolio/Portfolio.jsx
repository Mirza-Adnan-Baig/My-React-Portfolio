import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Expenses Calculator",
    github: "https://github.com/Mirza-Adnan-Baig/ExpensesCalculator",
    demo: "http://Mirza-Adnan-Baig.github.io/ExpensesCalculator",
  },
  {
    id: 2,
    image: IMG2,
    title: "Meine Portfolio-Website",
    github: "https://github.com/Mirza-Adnan-Baig/My-React-Portfolio.git",
    demo: "http://Mirza-Adnan-Baig.github.io/My-React-Portfolio",
  },
  {
    id: 3,
    image: IMG3,
    title: "Calculator using React.js",
    github: "https://github.com/Mirza-Adnan-Baig/React-Calculator",
    demo: "http://Mirza-Adnan-Baig.github.io/React-Calculator",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Project4",
  //   github: "https://github.com",
  //   demo: "https://distrodigitizing.com",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Project5",
  //   github: "https://github.com",
  //   demo: "https://distrodigitizing.com",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Project6",
  //   github: "https://github.com",
  //   demo: "https://distrodigitizing.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="__blank"
                  rel="noreferrer">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
