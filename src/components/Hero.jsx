import heroBike from "../assets/hero-bike.png";
import { FaPlay } from "react-icons/fa";
import HeroRecepies from "./HeroRecepies";
function Hero() {
  return (
    <section className="hero-section">
      <div className="left-area">
        <button className="hero-btn">
          <span>Recepie Delivery</span>
          <img src={heroBike} alt="Hero bike" className="hero-icon" />
        </button>
        <h2 className="hero-title">
          Unleash Culinary Magic with Our <span>Recipe App</span>
        </h2>
        <p className="hero-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore enim
          accusamus nobis dicta illo. Rerum eum porro saepe ratione animi!
        </p>
        <div className="btn-container">
          <button className="btn-order">View Recepies</button>
          <button className="btn-play">
            <FaPlay size={20} color="#F48E28"></FaPlay>
          </button>
          <span>Start Cooking</span>
        </div>
      </div>
      <div className="right-area">
        <HeroRecepies></HeroRecepies>
      </div>
    </section>
  );
}

export default Hero;
