import React from "react";
import "./certificates.css";
import I1 from "../../assets/C1.jpg";
import I2 from "../../assets/C2.jpg";

const data = [
  {
    id: 1,
    image: I1,
    title: "In Learning Certified Software Developer",
    view: "https://drive.google.com/file/d/16jbind7pwBTuGV2jYCPbI0i5FbJ_jJLA/view",
  },
  {
    id: 2,
    image: I2,
    title: "Certified Software Engineering Virtual Experience",
    view: "https://drive.google.com/file/d/1lrVI5r7oKFrPkQRkBMlefk3BG69PxkZO/view",
  },
];
const Certificates = () => {
  return (
    <section id="certificates">
      <h5>Achievements</h5>
      <h2>My Certificates</h2>
      <div className="container certificates__container">
        {data.map(({ id, image, title, view }) => {
          return (
            <article key={id} className="certificates__item">
              <div className="certificates__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="certificates__item-cta">
                <a
                  href={view}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
