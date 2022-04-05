import "./Portfolio.css";

import Img1 from "../../images/portfolio1.jpg";
import Img2 from "../../images/portfolio2.jpg";
import Img3 from "../../images/portfolio3.jpg";
import Img4 from "../../images/portfolio4.jpg";
import Img5 from "../../images/portfolio5.png";
import Img6 from "../../images/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__item-cv">
            <a href="#portfolio" className="btn">
              Github
            </a>
            <a href="#portfolio" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__item-cv">
            <a href="#portfolio" className="btn">
              Github
            </a>
            <a href="#portfolio" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__item-cv">
            <a href="#portfolio" className="btn">
              Github
            </a>
            <a href="#portfolio" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img4} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__item-cv">
            <a href="#portfolio" className="btn">
              Github
            </a>
            <a href="#portfolio" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img5} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__item-cv">
            <a href="#portfolio" className="btn">
              Github
            </a>
            <a href="#portfolio" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img6} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__item-cv">
            <a href="#portfolio" className="btn">
              Github
            </a>
            <a href="#portfolio" className="btn btn-primary">
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
