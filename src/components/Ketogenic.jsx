import { useGetKetoRecepiesQuery } from "../api/recepieApi";
import Title from "./Title";
import RecepieCard from "./shared/RecepieCArd";
import ShimmerLoading from "./shared/ShimmerLoading";

function Ketogenic() {
  const { isLoading, data } = useGetKetoRecepiesQuery();
  return (
    <>
      <Title
        title={"Keto Kitchen"}
        subtitle={"High-Fat, Low-Carb Delights"}></Title>
      {isLoading ? (
        <ShimmerLoading />
      ) : (
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
      )}
    </>
  );
}

export default Ketogenic;
