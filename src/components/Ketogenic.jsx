import { useGetKetoRecepiesQuery } from "../api/recepieApi";
import Title from "./Title";
import RecepieCard from "./shared/RecepieCArd";

function Ketogenic() {
  const { data } = useGetKetoRecepiesQuery();
  return (
    <>
      <Title
        title={"Keto Kitchen"}
        subtitle={"High-Fat, Low-Carb Delights"}></Title>
      <section className="section-receipies keto">
        {data?.recipes?.map((item, index) => {
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

export default Ketogenic;
