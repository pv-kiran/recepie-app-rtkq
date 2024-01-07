import Title from "./Title";
import burger from "../assets/burger.png";
import customer from "../assets/testimonial-dp.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Testimonial() {
  return (
    <section className="section-testionial">
      <Title title={"Testimonials"} subtitle={"Our Happy Client Says"}></Title>
      <article className="testimonial-card-container">
        <div className="customer-testimonial-card">
          <div className="profile-card">
            <img src={customer} alt="" className="customer-img" />
            <div className="customer-details">
              <h3>William Jhone</h3>
              <h5>CEO &#38; Cofounder</h5>
            </div>
          </div>
          <p className="customer-comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            adipisci perspiciatis, enim temporibus corporis sit eligendi! Fuga
            voluptatem doloribus adipisci.
          </p>
          <FaRegArrowAltCircleRight className="icon-right"></FaRegArrowAltCircleRight>
          <FaRegArrowAltCircleLeft className="icon-left"></FaRegArrowAltCircleLeft>
        </div>

        <div className="testimonial-img">
          <img src={burger} alt="burger" />
        </div>
      </article>
    </section>
  );
}

export default Testimonial;
