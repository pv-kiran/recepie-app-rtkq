/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
function RecepieCard({ recepie, popular }) {
  return (
    <article className="recipie-card">
      <div>
        <img src={recepie?.image} alt="recepie image" />
      </div>
      <div className="card-conent">
        <h3>{recepie?.title.split(" ")?.slice(0, 2)?.join(" ")}</h3>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <BiSolidLike style={{ marginRight: ".25rem" }} />
          {recepie?.aggregateLikes}
        </h3>
      </div>
      {popular && (
        <div className="card-conent">
          <button className="btn-cart">View Details</button>
          <h3
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <FaDollarSign></FaDollarSign>
            {recepie?.pricePerServing}
          </h3>
        </div>
      )}

      {!popular && <IoArrowRedo className="view-btn"></IoArrowRedo>}
    </article>
  );
}

export default RecepieCard;
