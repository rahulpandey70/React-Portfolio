import CV from "./CV";
import HeaderSocial from "./HeaderSocial";

import "./Header.css";
import Me from "../../images/me.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rahul Kr Pandey</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CV />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
