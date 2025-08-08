import React from 'react';

export default function NavBar({ user, onProfileClick, onNavClick }) {
  return (
    <nav>
      <div className="nav__bar">
        <div className="logo">
          <a href="#" onClick={e => onNavClick(e, 'home')}>
            <img src="/assets/logo.png" alt="Twelve Hostel Logo" />
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <div className="line"></div>
        </div>
        <ul className="nav__links" id="nav-links">
          <li><a href="#home" onClick={e => onNavClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={e => onNavClick(e, 'about')}>About</a></li>
          <li><a href="#service" onClick={e => onNavClick(e, 'service')}>Facilities</a></li>
          <li><a href="#contact" onClick={e => onNavClick(e, 'contact')}>Contact</a></li>
          {user && (
            <li>
              <a href="#" onClick={onProfileClick}>
                {user.username}
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
