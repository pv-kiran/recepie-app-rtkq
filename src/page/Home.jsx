import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import NewLetter from "../components/NewLetter";
import Popular from "../components/Popular";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";

function Home() {
  return (
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
