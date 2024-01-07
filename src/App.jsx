import { useDispatch } from "react-redux";
import "./App.css";
import { useGetRecepiesQuery } from "./api/recepieApi";
import Home from "./page/Home";
import { useEffect } from "react";
import { saveRecipies } from "./features/recepieSlice";

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
    </>
  );
}

export default App;
