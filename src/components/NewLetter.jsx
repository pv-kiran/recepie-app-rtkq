import burgerSandwitch from "../assets/burger_sandwitch.png";
function NewLetter() {
  return (
    <section className="section-newsletter">
      <div>
        <img src={burgerSandwitch} alt="" />
      </div>
      <article className="newsletter-info">
        <h1>Subscribe To Our News Letter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nihil doloribus animi ratione ea amet!
        </p>
        <div className="subscrption-container">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Type your email..."
          />
          <button className="btn-subscribe">Subscribe</button>
        </div>
      </article>
    </section>
  );
}

export default NewLetter;
