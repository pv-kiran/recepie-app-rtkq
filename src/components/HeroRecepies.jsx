import { useSelector } from "react-redux";
import RecepieCard from "./shared/RecepieCard";

function HeroRecepies() {
  const { reciepies } = useSelector((state) => state?.recepie);
  return (
    <section className="hero-recipie-container">
      {reciepies?.slice(0, 4)?.map((item, index) => {
        return <RecepieCard key={index} recepie={item}></RecepieCard>;
      })}
    </section>
  );
}

export default HeroRecepies;
