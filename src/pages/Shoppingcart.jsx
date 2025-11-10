import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext";
import "./Shoppingcart.css";

function ShoppingCart() {
  const navigate = useNavigate();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useContext(CartContext);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");
  const [shippingFee, setShippingFee] = useState(0);

  // ✅ Proceed to Stripe checkout
  const handleProceedToPay = () => {
    if (cartItems.length === 0) return alert("🛒 Your cart is empty!");
    if (!address) return alert("⚠️ Enter delivery address!");

    const orderData = {
      products: cartItems.map((p) => ({
        productId: p._id,
        title: p.title,
        quantity: p.quantity,
        price: p.price,
      })),
      total: totalPrice + shippingFee,
      address,
    };

    navigate("/checkout", { state: { orderData } });
  };

  // 🧾 Cash on Delivery order
  const handleOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("⚠️ Please login first!");
      if (cartItems.length === 0) return alert("🛒 Cart is empty!");

      const orderData = {
        products: cartItems.map((p) => ({
          productId: p._id,
          quantity: p.quantity,
        })),
        total: totalPrice + shippingFee,
        address,
        paymentMethod,
      };

      const res = await axios.post("http://localhost:5000/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 201) {
        alert("✅ Order placed successfully!");
        clearCart();
      } else {
        alert("⚠️ Something went wrong!");
      }
    } catch (err) {
      console.error("❌ Order error:", err);
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="cart-container">
          {/* --- LEFT SIDE --- */}
          <div className="cart-left">
            <h2 className="cart-title">Shopping Cart</h2>
            {cartItems.length > 0 ? (
              cartItems.map((p) => (
                <div key={p._id} className="cart-item">
                  <div className="item-info">
                    <img src={p.img} alt={p.title} />
                    <div>
                      <p className="item-title">{p.title}</p>
                      <p className="item-price">₹{p.price}</p>
                      <p>Stock: {p.stock}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(p._id, -1)}>-</button>
                    <span>{p.quantity}</span>
                    <button onClick={() => updateQuantity(p._id, 1)}>+</button>
                  </div>

                  <button className="delete-btn" onClick={() => removeFromCart(p._id)}>
                    ❌
                  </button>
                </div>
              ))
            ) : (
              <p className="empty-msg">No products in cart 🛒</p>
            )}

            <button
              className="continue-btn"
              onClick={() => navigate("/")}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#FDB581",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "250px",
              }}
            >
              Continue Shopping
            </button>
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="cart-right">
            <h3>Order Summary</h3>
            <div className="order-box">
              <p><strong>Delivery Address</strong></p>
              <input
                type="text"
                placeholder="Enter delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <p><strong>Payment Method</strong></p>
              <div className="payment-methods">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Online Payment"
                    checked={paymentMethod === "Online Payment"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  Online Payment
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={paymentMethod === "Cash on Delivery"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  Cash on Delivery
                </label>
              </div>

              <div className="price-details">
                <p>
                  <span>Items:</span>
                  <span>{totalItems}</span>
                </p>
                <p>
                  <span>Subtotal:</span>
                  <span>₹{totalPrice}</span>
                </p>
                <p>
                  <span>Shipping Fee:</span>
                  <span>₹{shippingFee}</span>
                </p>
                <div className="total-line">
                  <p>
                    <strong>Total</strong>
                    <strong>₹{totalPrice + shippingFee}</strong>
                  </p>
                </div>
              </div>

              <button
                className="pay-btn"
                onClick={paymentMethod === "Online Payment" ? handleProceedToPay : handleOrder}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default ShoppingCart;
