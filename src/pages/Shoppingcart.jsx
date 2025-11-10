import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext.jsx";
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
    placeOrder,
  } = useContext(CartContext);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");
  const [shippingFee, setShippingFee] = useState(0);

  // const handleProceedToPay = () => {
  //   if (cartItems.length === 0) return alert("Cart is empty!");
  //   if (!address) return alert("Enter delivery address!");

  //   // You can pass address/payment method to backend if needed
  //   placeOrder(paymentMethod);
  // };

  const handleProceedToPay = async () => {
    if (!address) return alert("Enter delivery address!");
  
    // ✅ Await the order creation
    const orderData = await placeOrder(paymentMethod, address);
  
    if (!orderData) return; // stop if order creation failed
  
    // ✅ Navigate to Stripe checkout with orderData
    navigate("/checkout", { state: { orderData } });
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
                    {/* <img src={p.img} alt={p.title} /> */}
                    <img src={p.img || "/assets/default.jpg"} alt={p.name} />

                    <div>
                      <p className="item-title">{p.title}</p>
                      <p className="item-price">₹{p.price}</p>
                      <p>Stock: {p.stock}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="qty-controls">
                    <button
                      onClick={() =>
                        updateQuantity(p._id, Math.max(p.quantity - 1, 1))
                      }
                    >
                      -
                    </button>
                    <span>{p.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          p._id,
                          Math.min(p.quantity + 1, p.stock)
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => removeFromCart(p._id)}
                  >
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
              <p>
                <strong>Delivery Address</strong>
              </p>
              <input
                type="text"
                placeholder="Enter delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <p>
                <strong>Payment Method</strong>
              </p>
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

              <button className="pay-btn" onClick={handleProceedToPay}>
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
