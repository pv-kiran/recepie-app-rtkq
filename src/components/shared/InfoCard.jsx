/* eslint-disable react/prop-types */
function InfoCard({ Icon, title, content }) {
  return (
    <article className="info-card">
      <Icon color="#F48E28" className="icon-info"></Icon>
      <h2>{content}</h2>
      <h3>{title}</h3>
    </article>
  );
}

export default InfoCard;
