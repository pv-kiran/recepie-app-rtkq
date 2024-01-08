import { useGetVegRecepiesQuery } from "../api/recepieApi";
import RecepieCard from "./shared/RecepieCArd";
import Title from "./Title";

function Vegatable() {
  const { data } = useGetVegRecepiesQuery();

  return (
    <>
      <Title
        title={"Veggie Delights"}
        subtitle={"Savor Fresh Garden Goodness"}></Title>
      <section className="section-receipies">
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

export default Vegatable;
