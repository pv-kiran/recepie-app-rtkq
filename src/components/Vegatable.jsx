import { useGetVegRecepiesQuery } from "../api/recepieApi";
import RecepieCard from "./shared/RecepieCard";
import ShimmerLoading from "./shared/ShimmerLoading";
import Title from "./Title";

function Vegatable() {
  const { isLoading, data } = useGetVegRecepiesQuery();

  return (
    <>
      <Title
        title={"Veggie Delights"}
        subtitle={"Savor Fresh Garden Goodness"}></Title>
      {isLoading ? (
        <ShimmerLoading />
      ) : (
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
      )}
    </>
  );
}

export default Vegatable;
