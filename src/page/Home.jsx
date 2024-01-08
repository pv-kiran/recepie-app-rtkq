import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import NewLetter from "../components/NewLetter";
import Popular from "../components/Popular";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useGetRecepiesQuery } from "../api/recepieApi";
import { useEffect } from "react";
import { saveRecipies } from "../features/recepieSlice";

function Home() {
  const dispatch = useDispatch();
  const { isLoading, data, isSuccess } = useGetRecepiesQuery();
  useEffect(() => {
    if (isSuccess) {
      const { recipes } = data;
      dispatch(saveRecipies(recipes));
    }
  }, [isSuccess]);
  return isLoading ? (
    <h1>Loading ....!!</h1>
  ) : (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Info></Info>
      <Popular></Popular>
      <Services></Services>
      <Workflow></Workflow>
      <Testimonial></Testimonial>
      <NewLetter></NewLetter>
      <Footer></Footer>
    </>
  );
}

export default Home;
