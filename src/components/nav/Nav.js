import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
