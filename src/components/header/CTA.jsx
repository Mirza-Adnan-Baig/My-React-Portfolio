import React from "react";
import CV from "../../assets/cv.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <button class="learn-more" onClick={scrollToAbout}>
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Learn More</span>
      </button>
    </div>
  );
};

function scrollToAbout() {
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

export default CTA;
