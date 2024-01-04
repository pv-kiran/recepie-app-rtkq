/* eslint-disable react/prop-types */
function ServiceCard({ Icon, title }) {
  return (
    <article className="service-card">
      <button>
        <Icon color="#F48E28" className="service-icon"></Icon>
      </button>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione
        voluptatibus atque.
      </p>
    </article>
  );
}

export default ServiceCard;
