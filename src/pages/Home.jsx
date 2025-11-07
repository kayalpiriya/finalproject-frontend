

import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Home.css"



function Home() {
  const navigate = useNavigate();


  // ✅ Check user login before going to Product page
  const handleAddClick = (product) => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/product" ,{ state: product });; // user logged in
    } else {
      navigate("/login"); // not logged in
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-card hero-text">
            <h1>
              Freshly Baked Goodness <br />Every Day
            </h1>
            <p>
              Discover our delicious range of cakes,<br /> pastries, and cookies made with love.
            </p>
            <button>Shop Now</button>
          </div>

          <div className="hero-card hero-image">
            <img src="src/assets/download.png" alt="Bakery Product" />
          </div>
        </section>

        {/* Sale Section */}
        <section className="sale-section">
          <div className="sale-box">
            <h2>Sale</h2>
            <div className="sale-container">
              <div className="sale-card"><img src="/images/sale1.png" alt="Sale 1" /></div>
              <div className="sale-card"><img src="/images/sale2.png" alt="Sale 2" /></div>
              <div className="sale-card"><img src="/images/sale3.png" alt="Sale 3" /></div>
              <div className="sale-card"><img src="/images/sale4.png" alt="Sale 4" /></div>
              <div className="sale-card"><img src="/images/sale5.png" alt="Sale 5" /></div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="categories-box">
            <h2>Categories</h2>
            <div className="categories-container">
              <div className="categories-card"><img src="/images/sale1.png" alt="Category 1" /></div>
              <div className="categories-card"><img src="/images/sale2.png" alt="Category 2" /></div>
              <div className="categories-card"><img src="/images/sale3.png" alt="Category 3" /></div>
              <div className="categories-card"><img src="/images/sale4.png" alt="Category 4" /></div>
              <div className="categories-card"><img src="/images/sale5.png" alt="Category 5" /></div>
            </div>
          </div>
        </section>

        {/* Just For You Section */}
        <section className="justforyou-section">
          <h2>Just For You</h2>
          <div className="justforyou-cards">
            <div className="card1">
            <img src="src/assets/cakee1.jpg" alt=" Cake 1" />
            <br></br>
              <p>Chocolate Cake</p>
              <br></br>
              <button
                className="add"
                onClick={() =>
                  handleAddClick({
                    img: "src/assets/cakee1.jpg",
                    title: "Chocolate Cake",
                    price: "₹499",
                  })
                }
              >
                Add
              </button>
            </div>
            <div className="card2">
              <img src="src/assets/breadd.jpg" alt="Cake 2" />
              <br></br>
              <p>Freshly bread</p>
              <br></br>
              <button
                className="add"
                onClick={() =>
                  handleAddClick({
                    img: "src/assets/breadd.jpg",
                    title: "Fresh Bread",
                    price: "₹199",
                  })
                }
              >
                Add
              </button>
            </div>
            <div className="card3">
              <img src="src/assets/bun1.jpg" alt="Cake 3" />
              <br></br>
              <p>Curry bun</p>
              <br></br>
              <button
                className="add"
                onClick={() =>
                  handleAddClick({
                    img: "src/assets/bun1.jpg",
                    title: "Curry Bun",
                    price: "₹299",
                  })
                }
              >
                Add
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;



