import { useSelector } from "react-redux";
import RecepieCard from "./shared/RecepieCArd";
import Title from "./Title";

function Popular() {
  const { reciepies } = useSelector((state) => state?.recepie);
  return (
    <>
      <Title title={"Product"} subtitle={"Most Popular product"}></Title>
      <section className="popular-section">
        {reciepies?.slice(0, 6)?.map((item, index) => {
          return (
            <RecepieCard
              key={index}
              recepie={item}
              popular={true}></RecepieCard>
          );
        })}
      </section>
    </>
  );
}

export default Popular;
