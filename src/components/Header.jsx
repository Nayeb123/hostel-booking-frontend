import React from 'react';

const Header = ({ user, onLoginClick, onProfileClick, onHistoryClick, handleNavClick }) => {
  return (
    <header>
      <nav>
        <div className="nav__bar">
          <div className="nav__logo">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')}>
              <img src="/assets/logo.png" alt="Twelve Hostel Logo" />
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#service" onClick={(e) => handleNavClick(e, 'service')}>Facilities</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            {user ? (
              <>
                <li>
                  <a href="#" onClick={onHistoryClick}>Booking History</a>
                </li>
                <li>
                  <a href="#" onClick={onProfileClick}>
                    Welcome, {user.username}
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a href="#" onClick={onLoginClick}>Login / Register</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <div className="header__container">
        <p>Welcome to</p>
        <h1>Twelve Hostel</h1>
        <p>Your Home Away From Home</p>
        <div className="header__buttons">
          <button className="btn btn-primary" onClick={user ? onHistoryClick : onLoginClick}>
            {user ? 'View My Bookings' : 'Book Your Room'}
          </button>
          <button className="btn btn-secondary" onClick={(e) => handleNavClick(e, 'service')} id="discover-more-btn">
            Discover More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
