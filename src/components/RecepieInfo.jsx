import { useSelector } from "react-redux";

function RecepieInfo() {
  const { myRecipie } = useSelector((state) => state?.recepie);
  {
    return (
      <>
        <section className="section-recipie-info">
          <article className="recipie-details">
            <h1>{myRecipie?.title}</h1>
            <h3 dangerouslySetInnerHTML={{ __html: myRecipie?.summary }}></h3>
            <div>
              <h3>
                <span>Prep: </span>
                {myRecipie?.readyInMinutes} MIN
              </h3>
              <h3>
                <span>Cook: </span>
                {myRecipie?.readyInMinutes} MIN
              </h3>
              <h3>
                <span>Yield: </span>
                {myRecipie?.servings} Servings
              </h3>
              <h3>
                <span>Level: </span>
                Easy
              </h3>
            </div>
          </article>
          <div className="receipie-image">
            <img src={myRecipie?.image} alt="recepie image" />
          </div>
        </section>
      </>
    );
  }
}

export default RecepieInfo;
