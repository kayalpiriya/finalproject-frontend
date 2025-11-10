import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { CartContext } from "../pages/CartContext.jsx";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  // 🔹 Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Add to cart and navigate to product page
  const handleAddClick = (product) => {
    const token = localStorage.getItem("token");
    if (token) {
      addToCart({
        ...product,
        price:
          typeof product.price === "string"
            ? Number(product.price.replace(/[Rs,]/g, ""))
            : product.price,
      });
      navigate(`/product/${product._id}`, { state: product });
      console.log("Navigated to single product page");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {/* --- Hero Section --- */}
        <section className="hero">
          <div className="hero-card hero-text">
            <h1>Freshly Baked Goodness <br />Every Day</h1>
            <p>Discover our delicious range of cakes,<br /> pastries, and cookies made with love.</p>
            <button onClick={() => navigate("/shoppingcart")}>Shop Now</button>
          </div>
          <div className="hero-card hero-image">
            <img src="src/assets/download.png" alt="Bakery Product" />
          </div>
        </section>

        {/* --- Sale Section --- */}
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

        {/* --- Categories Section --- */}
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

        {/* --- Just For You Section --- */}
        <section className="justforyou-section">
          <h2>Just For You</h2>
          <div className="justforyou-cards">
            {products.length > 0 ? (
              products.map((p) => (
                <div key={p._id} className="product-card">
                  <img src={p.img || "src/assets/default.jpg"} alt={p.title} />
                  <p>{p.name}</p>
                  <p>₹{p.price}</p>
                  <p>Stock: {p.stock}</p>
                  <button className="add" onClick={() => handleAddClick(p)}>
                    Add
                  </button>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
