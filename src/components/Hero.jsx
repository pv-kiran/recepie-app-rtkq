import heroBike from "../assets/hero-bike.png";
import { FaPlay } from "react-icons/fa";
import HeroRecepies from "./HeroRecepies";
import ViewButton from "./shared/ViewButton";
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
          Explore culinary wonders with our app! Effortless recipes,
          personalized recommendations, and a foodie community. Download now for
          a flavorful journey!
        </p>
        <div className="btn-container">
          <ViewButton text={"View Recipes"} />
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
