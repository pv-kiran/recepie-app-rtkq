import { useSelector } from "react-redux";
import RecepieCard from "./shared/RecepieCard";
import Title from "./Title";
import ViewButton from "./shared/ViewButton";

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
      <div className="viewbtn-container">
        <ViewButton text={"View All"} />
      </div>
    </>
  );
}

export default Popular;
