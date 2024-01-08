import "./App.css";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Recipie from "./page/Recipie";
import ViewAll from "./page/ViewAll";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipie/:id" element={<Recipie />} />
        <Route path="/recipie/all" element={<ViewAll />}></Route>
      </Routes>
    </>
  );
}

export default App;
