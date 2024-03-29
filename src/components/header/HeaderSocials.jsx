import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mirza-adnan-baig-161258157/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin size={22} />
      </a>
      <a
        href="https://github.com/Mirza-Adnan-Baig"
        target="_blank"
        rel="noreferrer">
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.instagram.com/mirza.adnan.95/"
        target="_blank"
        rel="noreferrer">
        <FaInstagram size={22} />
      </a>
    </div>
  );
};

export default HeaderSocials;
