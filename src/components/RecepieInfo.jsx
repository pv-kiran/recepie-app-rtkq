import { useParams } from "react-router-dom";
import { useGetRecepieByIdQuery } from "../api/recepieApi";
import CookingStep from "./CookingStep";
import { useEffect } from "react";
import { saveRecipie } from "../features/recepieSlice";
import { useDispatch } from "react-redux";

function RecepieInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, data: recipie } = useGetRecepieByIdQuery(id);
  useEffect(() => {
    dispatch(saveRecipie(recipie));
  }, [isSuccess]);
  if (isLoading) {
    return <h1>Loading ...!!</h1>;
  }
  if (isSuccess) {
    return (
      <>
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
        <CookingStep></CookingStep>
      </>
    );
  }
}

export default RecepieInfo;
