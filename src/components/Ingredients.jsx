import { useSelector } from "react-redux";

function Ingredients() {
  const { myRecipie } = useSelector((state) => state?.recepie);
  console.log(myRecipie);
  return <div>Ingredients</div>;
}

export default Ingredients;
