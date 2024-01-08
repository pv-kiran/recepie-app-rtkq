import { useParams } from "react-router-dom";
import CookingStep from "../components/CookingStep";
import Ingredients from "../components/Ingredients";
import Navbar from "../components/Navbar";
import RecepieInfo from "../components/RecepieInfo";
import { useDispatch } from "react-redux";
import { useGetRecepieByIdQuery } from "../api/recepieApi";
import { useEffect } from "react";
import { saveRecipie } from "../features/recepieSlice";
import Footer from "./../components/Footer";
import Loading from "../components/shared/Loading";

function Recipie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, data: recipie } = useGetRecepieByIdQuery(id);
  useEffect(() => {
    dispatch(saveRecipie(recipie));
  }, [isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    return (
      <>
        <Navbar></Navbar>
        <RecepieInfo></RecepieInfo>
        <Ingredients></Ingredients>
        <CookingStep></CookingStep>
        <Footer></Footer>
      </>
    );
  }
}

export default Recipie;
