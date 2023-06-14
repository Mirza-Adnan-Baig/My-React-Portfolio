import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo" alt="">
        MAB
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header" alt="">
            Home
          </a>
        </li>
        <li>
          <a href="#about" alt="">
            About
          </a>
        </li>
        <li>
          <a href="#experience" alt="">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" alt="">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#certificates" alt="">
            Certificates
          </a>
        </li>
        <li>
          <a href="#contact" alt="">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/mirza.adnan.baig01"
          target="_blank"
          rel="noreferrer"
          alt="">
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/mirza.adnan.95/"
          target="_blank"
          rel="noreferrer"
          alt="">
          <AiFillInstagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mirza-adnan-baig-161258157/"
          target="_blank"
          rel="noreferrer"
          alt="">
          <BsLinkedin size={20} />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MAB Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
