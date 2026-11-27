import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">

      <div className="hero__content">

        {/* Left: Hero Text */}
        <div className="hero__text">

          <p className="hero__locations">
            Kasese · Fort Portal · Kampala
          </p>

          <h1 id="hero-heading" className="hero__heading">
            Reach higher.
            <br />
            Bank closer.
          </h1>

          <p className="hero__description">
            From the slopes of the Rwenzori to every corner of Uganda,
            we help farmers, traders and families save, borrow and send
            money, right from their phones.
          </p>

          {/* Call to Action */}
          <div className="hero__actions">

            <a href="#open-account" className="hero__primary-btn">
              Open an Account
            </a>

            <a href="#services" className="hero__secondary-link">
              Explore our services
              <span aria-hidden="true">→</span>
            </a>

          </div>

          {/* Banking Statistics */}
          <div className="hero__stats" aria-label="Bank statistics">

            <div className="hero__stat">
              <strong>120,000+</strong>
              <span>Customers</span>
            </div>

            <div className="hero__stat">
              <strong>14</strong>
              <span>Branches</span>
            </div>

            <div className="hero__stat">
              <strong>24/7</strong>
              <span>Support</span>
            </div>

          </div>

        </div>

        {/* Right: Hero Photograph */}
        <div className="hero__visual">

          <img
            src="/images/coffe.jpg"
            alt="A Ugandan farmer wearing a straw hat and yellow shirt,
            holding a mobile phone and a basket in a green crop field."
            className="hero__image"
          />

        </div>

      </div>

      {/* Layered Mountain Ridge Divider */}
      <div className="hero__mountains" aria-hidden="true">

        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Back Mountain Layer */}
          <path
            d="M0 100 L150 65 L260 100 L390 35 L520 95
            L650 50 L790 105 L930 35 L1070 100
            L1200 45 L1330 95 L1440 55 L1440 150 L0 150 Z"
            fill="#3F5B3A"
            opacity="0.35"
          />

          {/* Middle Mountain Layer */}
          <path
            d="M0 115 L180 75 L310 115 L450 65 L590 110
            L750 55 L900 115 L1050 65 L1190 110
            L1330 75 L1440 105 L1440 150 L0 150 Z"
            fill="#3F5B3A"
          />

          {/* Front Mountain Layer */}
          <path
            d="M0 130 L180 100 L350 130 L500 90
            L680 130 L830 95 L1000 130 L1150 95
            L1300 125 L1440 105 L1440 150 L0 150 Z"
            fill="#0E2747"
          />

        </svg>

      </div>

    </section>
  );
}

export default Hero;