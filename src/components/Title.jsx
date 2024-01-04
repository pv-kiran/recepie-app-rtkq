/* eslint-disable react/prop-types */
function Title({ title, subtitle }) {
  return (
    <section className="section-title">
      <h3>{title}</h3>
      <h2>{subtitle}</h2>
    </section>
  );
}

export default Title;
