import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Product.css";
import { useState } from "react";

function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state; // received product data

  // ✅ Cart state (temporary for frontend only)
  const [cart, setCart] = useState([]);

  // ✅ Handle Buy Now → directly go to cart page
  const handleBuyNow = () => {
    navigate("/shoppingcart", { state: { products: [product] } }); // 👈 send as array
  };

  // ✅ Handle Add to Cart → add product in local cart
  const handleAddToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    // navigate to cart page with multiple products
    navigate("/shoppingcart", { state: { products: updatedCart } });
  };

  return (
    <>
      <Navbar />

      <div className="product-page">
        <div className="product-card">
          <img
            src={product?.img || "src/assets/default.jpg"}
            alt={product?.title || "Product"}
            className="product-img"
          />
        </div>

        <div className="list">
          <h3 className="product-title">{product?.title || "Unknown Product"}</h3>
          <p className="product-price">₹{product?.price || "N/A"}</p>

          <div className="buttons">
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;

