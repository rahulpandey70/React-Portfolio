import "./Footer.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        PORTFOLIO
      </a>

      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="www.facebook.com">
          <RiFacebookCircleLine />
        </a>
        <a href="www.instagram">
          <AiOutlineInstagram />
        </a>
        <a href="www.twitter.com">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
