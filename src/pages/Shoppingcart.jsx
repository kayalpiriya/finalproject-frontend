
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Shoppingcart.css";

function ShoppingCart() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state?.products || []);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");
  const [shippingFee, setShippingFee] = useState(0);


  // 🔢 Update quantity
  const updateQuantity = (index, change) => {
    setCartItems((prev) => {
      const newCart = [...prev];
      const newQty = newCart[index].quantity + change;
      if (newQty <= 0) {
        newCart.splice(index, 1); // remove item if 0
      } else {
        newCart[index].quantity = newQty;
      }
      return newCart;
    });
  };

  // ❌ Remove product
  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };


  const subtotal = cartItems.reduce((sum, item) => {
    const rawPrice = item.price || item.product?.price || 0;
    const price = parseFloat(String(rawPrice).replace(/[₹,]/g, "")) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);

  const total = subtotal + (Number(shippingFee) || 0);




  // 🧾 Place Order
  const handleOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("⚠️ Please login first!");
        return;
      }

      if (cartItems.length === 0) {
        alert("🛒 Your cart is empty!");
        return;
      }

      const orderData = {
        products: cartItems.map((p) => ({
          productId: p._id,
          quantity: p.quantity,
        })),
        total,
        address,
        paymentMethod,
      };

      const res = await axios.post("http://localhost:5000/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 201) {
        alert("✅ Order placed successfully!");
        setCartItems([]); // clear cart
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
              cartItems.map((p, index) => (
                <div key={index} className="cart-item">
                  <div className="item-info">
                    <img src={p.img} alt={p.title} />
                    <div>
                      <p className="item-title">{p.title}</p>
                      <p className="item-price">₹{p.price}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                    <span>{p.quantity}</span>
                    <button onClick={() => updateQuantity(index, +1)}>+</button>
                  </div>

                  <button className="delete-btn" onClick={() => removeItem(index)}>❌</button>
                </div>
              ))
            ) : (
              <p className="empty-msg">No products in cart 🛒</p>
            )}
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
                  /> Online Payment
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={paymentMethod === "Cash on Delivery"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  /> Cash on Delivery
                </label>
              </div>

              <div className="price-details">
                <p><span>Items:</span><span>{cartItems.length}</span></p>
                <p><span>Subtotal:</span><span>₹{isNaN(subtotal) ? 0 : subtotal}</span></p>
                <p><span>Shipping Fee:</span><span>₹{isNaN(shippingFee) ? 0 : shippingFee}</span></p>
                <div className="total-line">
                  <p><strong>Total</strong><strong>₹{isNaN(total) ? 0 : total}</strong></p>
                </div>

              </div>

              <button className="pay-btn" onClick={handleOrder}>
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br>
      <Footer />


    </>
  );
}

export default ShoppingCart;


