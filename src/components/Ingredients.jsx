import { useSelector } from "react-redux";
import Title from "./Title";
import { FaRegCheckSquare } from "react-icons/fa";
function Ingredients() {
  const { myRecipie } = useSelector((state) => state?.recepie);
  console.log(myRecipie?.extendedIngredients);
  return (
    <section className="section-ingrediants">
      <Title
        title={"Ingredients"}
        subtitle={`Essential items for making ${myRecipie?.title}`}></Title>
      <ul className="ingrediants-container">
        {myRecipie?.extendedIngredients?.map(({ id, original }) => {
          return (
            <li key={id}>
              <FaRegCheckSquare></FaRegCheckSquare>
              {original}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Ingredients;
