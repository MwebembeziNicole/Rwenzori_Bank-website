import './WhyChooseUs.css';

const benefits = [
  {
    number: '01',
    title: 'Banking built around you',
    description:
      'From individuals and families to farmers and growing businesses, our banking solutions are designed around your everyday financial needs.',
  },
  {
    number: '02',
    title: 'Convenience wherever you are',
    description:
      'Access your money, make payments and manage your finances through convenient digital banking channels.',
  },
  {
    number: '03',
    title: 'Rooted in our communities',
    description:
      'We understand the people, businesses and communities that make Uganda grow, and we are committed to supporting their ambitions.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why-us" id="about">
      <div className="why-us__container">

        <div className="why-us__visual">
          <img
            src="/images/coffe.jpg"
            alt="A woman in a farming community using her mobile phone."
          />

          <div className="why-us__image-caption">
            <span>Closer to your ambitions.</span>
          </div>
        </div>

        <div className="why-us__content">
          <p className="why-us__eyebrow">THE RWENZORI DIFFERENCE</p>

          <h2>
            Banking that
            <br />
            understands
            <br />
            your journey.
          </h2>

          <p className="why-us__intro">
            We believe banking should do more than manage money.
            It should create opportunities, support communities
            and help people move forward.
          </p>

          <div className="why-us__benefits">
            {benefits.map((benefit) => (
              <article className="why-us__benefit" key={benefit.number}>
                <span className="why-us__number">
                  {benefit.number}
                </span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a href="#about" className="why-us__link">
            Discover our story <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;