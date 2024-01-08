import { useParams } from "react-router-dom";
import { useGetRecepieByIdQuery } from "../api/recepieApi";

function RecepieInfo() {
  const { id } = useParams();
  console.log(id);
  const { isLoading, isSuccess, data: recipie } = useGetRecepieByIdQuery(id);
  console.log(recipie);
  if (isLoading) {
    return <h1>Loading ...!!</h1>;
  }
  if (isSuccess) {
    return (
      <section className="section-recipie-info">
        <article className="recipie-details">
          <h1>{recipie?.title}</h1>
          <h3 dangerouslySetInnerHTML={{ __html: recipie?.summary }}></h3>
          <div>
            <h3>
              <span>Prep: </span>
              {recipie?.readyInMinutes} MIN
            </h3>
            <h3>
              <span>Cook: </span>
              {recipie?.readyInMinutes} MIN
            </h3>
            <h3>
              <span>Yield: </span>
              {recipie?.servings} Servings
            </h3>
            <h3>
              <span>Level: </span>
              Easy
            </h3>
          </div>
        </article>
        <div className="receipie-image">
          <img src={recipie?.image} alt="recepie image" />
        </div>
      </section>
    );
  }
}

export default RecepieInfo;
