import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Detail.css";


function Detail() {
  const [activeTab, setActiveTab] = useState("specialties");

  return (
    <>
      <Navbar />
      <div className="detail-page">
        <div className="glass-card">
          {/* Image */}
          <div className="glass-image">
            <img
              src="https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=800&q=80"
              alt="Bakery"
            />
          </div>

          {/* Content */}
          <div className="glass-content">
            <h1>Mufflix Bakery</h1>
            <p className="description">
              Freshly baked cakes, cupcakes, muffins, and pastries every day.  
              Love and quality in every bite!
            </p>

            {/* Tabs */}
            <div className="tabs">
              <button
                className={activeTab === "specialties" ? "active" : ""}
                onClick={() => setActiveTab("specialties")}
              >
                🍰 Specialties
              </button>
              <button
                className={activeTab === "hours" ? "active" : ""}
                onClick={() => setActiveTab("hours")}
              >
                ⏰ Hours
              </button>
              <button
                className={activeTab === "location" ? "active" : ""}
                onClick={() => setActiveTab("location")}
              >
                📍 Location
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "specialties" && (
                <ul>
                  <li>Chocolate Fudge Cake</li>
                  <li>Vanilla Cupcakes</li>
                  <li>Custom Birthday Cakes</li>
                  <li>Assorted Pastries</li>
                </ul>
              )}

              {activeTab === "hours" && (
                <div>
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p>Sun: 9:00 AM - 6:00 PM</p>
                </div>
              )}

              {activeTab === "location" && (
                <div>
                  <p>123 Bakery Street</p>
                  <p>Colombo, Sri Lanka</p>
                </div>
              )}
            </div>

            <button className="order-btn">Order Now 🛒</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
