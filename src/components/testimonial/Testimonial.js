import "./Testimonial.css";
import Avavatar1 from "../../images/avatar1.jpg";
import Avavatar2 from "../../images/avatar2.jpg";
import Avavatar3 from "../../images/avatar3.jpg";
import Avavatar4 from "../../images/avatar4.jpg";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avavatar1} alt="" />
          </div>
          <h5 className="client__name">Suman</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avavatar2} alt="" />
          </div>
          <h5 className="client__name">Shivam</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avavatar3} alt="" />
          </div>
          <h5 className="client__name">Ajay</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avavatar4} alt="" />
          </div>
          <h5 className="client__name">Khushi</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
