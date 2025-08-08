import React from 'react';

function Footer({ onNavClick }) {
  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#home" onClick={e => onNavClick(e, 'home')}>
              <img src="/assets/logo.png" alt="Twelve Hostel Logo" />
            </a>
          </div>
          <p className="section__description">
            At Twelve Hostel, we help students find the perfect room for their campus journey. 
            Enjoy comfort, security, and a vibrant student life – all in one place!
          </p>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><a href="#" onClick={e => onNavClick(e, 'home')}>Book a Room</a></li>
            <li><a href="#" onClick={e => onNavClick(e, 'room-grid')}>Room Types & Fees</a></li>
            <li><a href="#" onClick={e => onNavClick(e, 'service')}>Facilities</a></li>
            <li><a href="#" onClick={e => onNavClick(e, 'faq')}>FAQs</a></li>
            <li><a href="#" onClick={e => onNavClick(e, 'contact')}>Student Support</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR FACILITIES</h4>
          <ul className="footer__links">
            <li><a href="#" onClick={e => onNavClick(e, 'service')}>Wi-Fi & Study Areas</a></li>
            <li><a href="#" onClick={e => onNavClick(e, 'service')}>Laundry Services</a></li>
            <li><a href="#" onClick={e => onNavClick(e, 'service')}>Cafeteria</a></li>
            <li><a href="#" onClick={e => onNavClick(e, 'service')}>Security & CCTV</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li><a href="mailto:contact@twelvehostel.com">contact@twelvehostel.com</a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook.png" alt="facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram.png" alt="instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/youtube.png" alt="youtube" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/twitter.png" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2025 Twelve Hostel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;