import logo from "../assets/recepie-logo.png";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <img
        src={logo}
        alt="my_logo"
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Service</li>
        <li>Shop</li>
      </ul>
      <div className="search-container">
        <CiSearch></CiSearch>
        <input type="text" name="search" id="search" placeholder="Search" />
        <FaShoppingCart color="gray"></FaShoppingCart>
      </div>
    </nav>
  );
}

export default Navbar;
