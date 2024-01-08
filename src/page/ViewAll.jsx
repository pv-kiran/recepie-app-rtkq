import Breakfast from "../components/Breakfast";
import Footer from "../components/Footer";
import Ketogenic from "../components/Ketogenic";
import Navbar from "../components/Navbar";
import Vegatable from "../components/Vegatable";

function ViewAll() {
  return (
    <>
      <Navbar />
      <Vegatable />
      <Breakfast />
      <Ketogenic />
      <Footer />
    </>
  );
}

export default ViewAll;
