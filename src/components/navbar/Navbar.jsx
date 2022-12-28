import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNavbar("#")}
        className={activeNavbar === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavbar("#about")}
        className={activeNavbar === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavbar("#experience")}
        className={activeNavbar === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNavbar("#portfolio")}
        className={activeNavbar === "#portfolio" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#certificates"
        onClick={() => setActiveNavbar("#certificates")}
        className={activeNavbar === "#certificates" ? "active" : ""}
      >
        <FiAward />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNavbar("#contact")}
        className={activeNavbar === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;
