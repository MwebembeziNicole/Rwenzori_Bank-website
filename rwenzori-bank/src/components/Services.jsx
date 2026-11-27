import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">

        {/* Section Header */}
        <div className="services__header">
          <h2>What can we help you with?</h2>

          <Link to="/services" className="services__all-link">
            See all services <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="services__grid">

          {/* 1. Personal Banking */}
          <Link
            to="/personal-banking"
            className="service-card service-card--personal"
          >
            <div className="service-card__image personal__image">
              <img
                src="/images/credit.jpg"
                alt="Customer using banking services to manage personal finances."
              />
            </div>

            <div className="personal__content">
              <span className="service-card__arrow" aria-hidden="true">
                →
              </span>

              <h3>Personal Banking</h3>

              <p>
                Savings, current and school-fees accounts you can open
                with just your National ID.
              </p>

              <span className="personal__fact">
                Open from UGX 10,000
              </span>
            </div>
          </Link>

          {/* 2. Loans */}
          <Link
            to="/loans"
            className="service-card service-card--loans"
          >
            <span className="service-card__arrow" aria-hidden="true">
              →
            </span>

            <div className="loans__content">
              <span className="loans__highlight">48 hrs</span>

              <span className="loans__label">
                from application to loan decision
              </span>

              <h3>Loans</h3>

              <p>
                Personal, school-fees and farm loans with repayments
                that follow your harvest season.
              </p>
            </div>
          </Link>

          {/* 3. Business Banking */}
          <Link
            to="/business-banking"
            className="service-card service-card--business"
          >
            <span className="service-card__arrow" aria-hidden="true">
              →
            </span>

            <div className="business__content">
              <h3>Business Banking</h3>

              <p>
                Merchant codes, bulk payments and mobile money
                collections for shops, traders and SACCOs.
              </p>
            </div>

            <div className="business__image">
              <img
                src="/images/credit-card.jpg"
                alt="Bank card representing convenient business payment services."
              />
            </div>
          </Link>

          {/* 4. Digital Banking */}
          <Link
            to="/digital-banking"
            className="service-card service-card--digital"
          >
            <div className="digital__content">
              <span className="digital__highlight">*270#</span>

              <span className="digital__label">
                Bank without data — on any phone
              </span>

              <h3>Digital Banking</h3>

              <p>
                Check your balance, pay bills and send money by app,
                internet banking or USSD.
              </p>
            </div>

            <div className="digital__image">
              <img
                src="/images/manphone.jpg"
                alt="Customer using a mobile phone to access digital banking."
              />
            </div>

            <span className="service-card__arrow" aria-hidden="true">
              →
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Services;