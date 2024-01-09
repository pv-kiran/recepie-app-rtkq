/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function ViewButton({ text }) {
  const navigate = useNavigate();
  return (
    <button
      className="btn-order"
      onClick={() => {
        navigate(`/recipie/all`);
      }}>
      {text}
    </button>
  );
}

export default ViewButton;
