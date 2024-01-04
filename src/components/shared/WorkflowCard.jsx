/* eslint-disable react/prop-types */
function WorkflowCard({ img, title }) {
  return (
    <article className="work-card">
      <img src={img} alt="one" />
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        soluta molestias eveniet blanditiis.
      </p>
    </article>
  );
}

export default WorkflowCard;
