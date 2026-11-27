import './Services.css';

const services = [
  {
    number: '01',
    title: 'Personal Banking',
    description:
      'Simple banking for everyday life. Save money, manage your finances and access banking services that work around your needs.',
    link: 'Explore personal banking',
    icon: '👤',
    href: '#personal-banking',
  },
  {
    number: '02',
    title: 'Business Banking',
    description:
      'Practical financial solutions to help businesses manage cash flow, make payments and grow with confidence.',
    link: 'Explore business banking',
    icon: '▤',
    href: '#business-banking',
  },
  {
    number: '03',
    title: 'Loans & Financing',
    description:
      'Access financing designed to support your ambitions, whether you are growing a business or meeting personal needs.',
    link: 'Explore loan options',
    icon: '↗',
    href: '#loans',
  },
  {
    number: '04',
    title: 'Digital Banking',
    description:
      'Bank wherever you are. Enjoy convenient access to your accounts and everyday banking services through digital channels.',
    link: 'Explore digital banking',
    icon: '▣',
    href: '#digital-banking',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">

        {/* Section introduction */}
        <div className="services__intro">
          <p className="services__eyebrow">BANKING MADE FOR YOU</p>

          <h2>
            Banking that moves
            <br />
            with you.
          </h2>

          <p className="services__description">
            From everyday transactions to ambitious business plans,
            discover financial services designed to support every step
            of your journey.
          </p>
        </div>

        {/* Service cards */}
        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top">
                <span className="service-card__number">
                  {service.number}
                </span>

                <span className="service-card__icon" aria-hidden="true">
                  {service.icon}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href={service.href} className="service-card__link">
                {service.link}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;