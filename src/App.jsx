import "./App.css";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Recipie from "./page/Recipie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipie/:id" element={<Recipie />} />
      </Routes>
    </>
  );
}

export default App;
