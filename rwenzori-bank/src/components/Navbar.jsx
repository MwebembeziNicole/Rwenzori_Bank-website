import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar__container" aria-label="Main navigation">

        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="Rwenzori Commercial Bank home">
          <img
            src="/images/logo.png"
            alt="Rwenzori Commercial Bank"
          />
        </a>

        {/* Desktop navigation links */}
        <div className="navbar__links">
          <a href="#" className="navbar__link">Home</a>
          <a href="#personal-banking" className="navbar__link">
            Personal Banking
          </a>
          <a href="#business-banking" className="navbar__link">
            Business Banking
          </a>
          <a href="#loans" className="navbar__link">Loans</a>
          <a href="#about" className="navbar__link">About Us</a>
          <a href="#contact" className="navbar__link">Contact</a>
        </div>

        {/* Desktop Internet Banking button */}
        <a href="#internet-banking" className="navbar__internet-banking">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Internet Banking
        </a>

        {/* Mobile hamburger button */}
        <button
          className="navbar__menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation menu */}
      <div
        id="mobile-navigation"
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
      >
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#personal-banking" onClick={closeMenu}>Personal Banking</a>
        <a href="#business-banking" onClick={closeMenu}>Business Banking</a>
        <a href="#loans" onClick={closeMenu}>Loans</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <a
          href="#internet-banking"
          className="navbar__mobile-banking"
          onClick={closeMenu}
        >
          Internet Banking
        </a>
      </div>
    </header>
  );
}

export default Navbar;