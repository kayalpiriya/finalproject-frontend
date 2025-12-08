

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white mt-10" style={{ backgroundColor: "#2B1B17" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-3xl py-8 font-bold mb-4">🍰 Mufflix Bakery</h3>
          <p className="text-gray-200">
            Delicious cakes and pastries made with love. Visit us for fresh treats every day!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl py-8 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-400 transition">Home</Link></li>
            <li><Link to="/detail" className="hover:text-gray-400 transition">Detail</Link></li>
            <li><Link to="/chat" className="hover:text-gray-400 transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-gray-400 transition">Sign In</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-2xl py-8 font-semibold mb-4">Contact Us</h4>
          <p>Email: kayal@mufflixbakery.com</p>
          <p>Phone: +94 123 456 789</p>
          <p>Address: 154 Bakery Street, Vaddakkachchi</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                alt="Facebook"
                className="h-8 w-8 hover:opacity-80 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
                className="h-8 w-8 hover:opacity-80 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-8 w-8 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 mt-6 text-gray-200" style={{ borderTop: "1px solid #4e5d55" }}>
        <p className="text-sm">&copy; 2025 Mufflix Bakery. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
