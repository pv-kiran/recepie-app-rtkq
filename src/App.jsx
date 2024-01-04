import { useDispatch } from "react-redux";
import "./App.css";
import { useGetRecepiesQuery } from "./api/recepieApi";
import Home from "./page/Home";
import { useEffect } from "react";
import { saveRecipies } from "./features/recepieSlice";
import Info from "./components/Info";
import Popular from "./components/Popular";
import Services from "./components/Services";
import Workflow from "./components/Workflow";

function App() {
  const dispatch = useDispatch();
  const { isLoading, data, isSuccess } = useGetRecepiesQuery();
  useEffect(() => {
    if (isSuccess) {
      const { recipes } = data;
      dispatch(saveRecipies(recipes));
    }
  }, [isSuccess]);

  return isLoading ? (
    <h2>Loading</h2>
  ) : (
    <>
      <Home></Home>
      <Info></Info>
      <Popular></Popular>
      <Services></Services>
      <Workflow></Workflow>
    </>
  );
}

export default App;
