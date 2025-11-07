import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <h3>Mufflix Bakery</h3>
          <p>Delicious cakes and pastries made with love. Visit us for fresh treats every day!</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Detail</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/login">Sign In</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: kayal@mufflixbakery.com</p>
          <p>Phone: +94 123 456 789</p>
          <p>Address: 154 Bakery Street, Vaddakkachchi</p>
        </div>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" /></a>
          <a href="#"><img src="src/assets/instagram-logo-icon_1273375-1177.jpg" alt="Instagram" /></a>
          <a href="#"><img src="src/assets/circle-whatsapp-logotype-icon-social-media-app-network-application-popular-editorial-brand-vector-illustration_913857-391.jpg" alt="WhatsApp" /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Mufflix Bakery. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

