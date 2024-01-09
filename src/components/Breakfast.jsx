import { useGetBreakfastRecepiesQuery } from "../api/recepieApi";
import Title from "./Title";
import RecepieCard from "./shared/RecepieCard";

import ShimmerLoading from "./shared/ShimmerLoading";

function Breakfast() {
  const { isLoading, data } = useGetBreakfastRecepiesQuery();
  return (
    <>
      <Title
        title={"Breakfast Bonanza"}
        subtitle={"Start Your Day with Deliciousness"}></Title>
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

export default Breakfast;
