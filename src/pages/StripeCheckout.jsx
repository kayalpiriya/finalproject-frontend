// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./StripeCheckout.css";

// // Load Stripe using your publishable key
// const stripePromise = loadStripe("pk_test_51SPd7s63pC6Mm5AyVMWJVNwQF4QConX39iRX66jjWt3Lm2UsIWq0aqhRVPEnJDU56U22UZZOFeODOJZoYPZcb4tX00gMw2pquh");

// function CheckoutForm({ orderData }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       // 1️⃣ Create payment intent on backend
//       const token = localStorage.getItem("token");
//       const res = await axios.post(
//         "http://localhost:5000/payments",
//         {
//           amount: orderData.total,
//           method: "card",
//           orderId: orderData.orderId,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const clientSecret = res.data.clientSecret;

//       // 2️⃣ Confirm payment with Stripe
//       const cardElement = elements.getElement(CardElement);
//       const { paymentIntent, error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message);
//         setLoading(false);
//         return;
//       }

//       if (paymentIntent.status === "succeeded") {
//         setSuccess(true);
//         setLoading(false);

//         // 3️⃣ Optionally, redirect or clear cart
//         alert("Payment successful!");
//         navigate("/"); // redirect to home or orders page
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Payment failed. Try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="stripe-form" onSubmit={handleSubmit}>
//       <h2>Pay with Card</h2>
//       <CardElement className="card-input" />
//       {error && <p className="error">{error}</p>}
//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : `Pay ₹${orderData.total}`}
//       </button>
//       {success && <p className="success">Payment successful!</p>}
//     </form>
//   );
// }

// export default function StripeCheckout() {
//   const location = useLocation();
//   const orderData = location.state; // pass total, orderId, etc. from ShoppingCart

//   if (!orderData) {
//     return <p>No order data found.</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="checkout-container">
//         <Elements stripe={stripePromise}>
//           <CheckoutForm orderData={orderData} />
//         </Elements>
//       </div>
//       <Footer />
//     </>
//   );
// }


// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   useStripe,
//   useElements,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
// } from "@stripe/react-stripe-js";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";


// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// function CheckoutForm({ orderData }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const [cardName, setCardName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       // create payment intent on backend
//       const token = localStorage.getItem("token");
//     //   const res = await axios.post(
//     //     "http://localhost:5000/payments",
//     //     { amount: orderData.total, method: "card", orderId: orderData.orderId || null },
//     //     { headers: { Authorization: `Bearer ${token}` } }
//     //   );

//     //   // const clientSecret = res.data.clientSecret;
//     //   const stripeUrl = res.data.url;


//     //    // ✅ Add console log here
//     // // console.log("clientSecret:", clientSecret);
//     // window.location.href = stripeUrl;

//     const res = await axios.post(
//       "https://finalproject-backend-7rqa.onrender.com/payments",
//       {
//         orderId: orderData._id || orderData.orderId,
//         amount: orderData.total,
//       },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
    
//     // Redirect to Stripe checkout
//     window.location.href = res.data.url;
    

//       // Use CardNumberElement for confirming payment
//       const cardNumberElement = elements.getElement(CardNumberElement);
//       if (!stripe || !cardNumberElement) {
//         setError("Stripe not ready. Try again.");
//         setLoading(false);
//         return;
//       }

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardNumberElement,
//           billing_details: {
//             name: cardName || "Customer",
//           },
//         },
//       });

//       if (result.error) {
//         setError(result.error.message || "Payment failed");
//         setLoading(false);
//         return;
//       }

//       if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
//         setSuccess(true);
//         setLoading(false);

//         try{
//           const token = localStorage.getItem("token");
//           await axios.post(
//             "https://finalproject-backend-7rqa.onrender.com/payments/confirm",
//             { paymentId: orderData.paymentId }, // make sure you have paymentId from createPayment response
//             { headers: { Authorization: `Bearer ${token}` } }
//           );
//         } catch (err) {
//           console.error("Error confirming payment:", err);
//         }
        
//         // optionally create order here (if you didn't before)
//         alert("Payment successful!");
//         navigate("/");
//       } else {
//         setError("Payment not completed.");
//         setLoading(false);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Payment failed. Try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="stripe-form" onSubmit={handleSubmit}>
//       <h2>Pay with Card</h2>

//       <label>Name on card</label>
//       <input
//         type="text"
//         placeholder="John Doe"
//         value={cardName}
//         onChange={(e) => setCardName(e.target.value)}
//         required
//       />

//       <label>Card number</label>
//       <div className="stripe-element-wrapper">
//         <CardNumberElement options={{ showIcon: true }} />
//       </div>

//       <div className="row">
//         <div className="half">
//           <label>Expiry</label>
//           <div className="stripe-element-wrapper">
//             <CardExpiryElement />
//           </div>
//         </div>
//         <div className="half">
//           <label>CVV</label>
//           <div className="stripe-element-wrapper">
//             <CardCvcElement />
//           </div>
//         </div>
//       </div>

//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">Payment successful!</p>}

//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : `Pay ₹${orderData.total}`}
//       </button>
//     </form>
//   );
// }

// export default function StripeCheckout() {
//   const location = useLocation();
//   const orderData = location.state?.orderData || location.state; // accept either shape

//   if (!orderData) return <p>No order data found.</p>;

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br>
//       <div className="checkout-container">
//         <Elements stripe={stripePromise}>
//           <CheckoutForm orderData={orderData} />
//         </Elements>
//       </div>
//       <Footer />
//     </>
//   );
// }


// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// function CheckoutForm({ orderData }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const [cardName, setCardName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const token = localStorage.getItem("token");

//       // 🔥 Create Checkout session (LKR handled in backend)
//       const res = await axios.post(
//         "https://finalproject-backend-7rqa.onrender.com/payments",
//         {
//           orderId: orderData._id || orderData.orderId,
//           amount: orderData.total,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       // Redirect to Stripe checkout
//       window.location.href = res.data.url;

//     } catch (err) {
//       console.error(err);
//       setError("Payment failed. Try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="stripe-form" onSubmit={handleSubmit}>
//       <h2>Pay with Card</h2>

//       <label>Name on card</label>
//       <input
//         type="text"
//         placeholder="John Doe"
//         value={cardName}
//         onChange={(e) => setCardName(e.target.value)}
//         required
//       />

//       {/* UI Elements hidden because Stripe Checkout is used */}
//       <div className="stripe-element-wrapper">
//         <CardNumberElement options={{ showIcon: true }} />
//       </div>

//       <div className="row">
//         <div className="half">
//           <label>Expiry</label>
//           <div className="stripe-element-wrapper">
//             <CardExpiryElement />
//           </div>
//         </div>
//         <div className="half">
//           <label>CVV</label>
//           <div className="stripe-element-wrapper">
//             <CardCvcElement />
//           </div>
//         </div>
//       </div>

//       {error && <p className="error">{error}</p>}

//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : `Pay LKR ${orderData.total}`}
//       </button>
//     </form>
//   );
// }

// export default function StripeCheckout() {
//   const location = useLocation();
//   const orderData = location.state?.orderData || location.state;

//   if (!orderData) return <p>No order data found.</p>;

//   return (
//     <>
//       <Navbar />
//       <br /><br />
//       <div className="checkout-container">
//         <Elements stripe={stripePromise}>
//           <CheckoutForm orderData={orderData} />
//         </Elements>
//       </div>
//       <Footer />
//     </>
//   );
// }



import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, LogIn, Lock, UserPlus, ShieldCheck, ShoppingBag 
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Make sure your key is correct
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const accentPink = "rgb(214, 143, 143)";
const darkText = "#1C1917";

function CheckoutForm({ orderData, onAuthCheck }) {
  const stripe = useStripe();
  const elements = useElements();
  
  const [cardName, setCardName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayClick = async (e) => {
    e.preventDefault(); // Stop form submission immediately

    console.log("Pay button clicked..."); // Debugging

    // 🔥 Step 1: Check Auth FIRST
    const isLogged = onAuthCheck();
    console.log("Is User Logged In?", isLogged);

    if (!isLogged) {
      console.log("User not logged in - Stopping payment to show modal");
      return; // Stop here if not logged in
    }

    // 🔥 Step 2: Proceed only if logged in
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://finalproject-backend-7rqa.onrender.com/payments",
        {
          orderId: orderData._id || orderData.orderId,
          amount: orderData.total,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      window.location.href = res.data.url;

    } catch (err) {
      console.error(err);
      setError("Payment failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <form className="stripe-form" onSubmit={handlePayClick}>
      <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Pay with Card</h2>

      <label>Name on card</label>
      <input
        type="text"
        placeholder="John Doe"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        required
        style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "15px", width: "100%" }}
      />

      <div className="stripe-element-wrapper" style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "15px", background: "white" }}>
        <CardNumberElement options={{ showIcon: true }} />
      </div>

      <div className="row" style={{ display: "flex", gap: "15px" }}>
        <div className="half" style={{ flex: 1 }}>
          <label>Expiry</label>
          <div className="stripe-element-wrapper" style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", background: "white" }}>
            <CardExpiryElement />
          </div>
        </div>
        <div className="half" style={{ flex: 1 }}>
          <label>CVV</label>
          <div className="stripe-element-wrapper" style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", background: "white" }}>
            <CardCvcElement />
          </div>
        </div>
      </div>

      {error && <p className="error" style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <button 
        type="submit" 
        disabled={!stripe || loading}
        style={{
            marginTop: "20px", width: "100%", padding: "15px",
            background: accentPink, color: "white", border: "none",
            borderRadius: "50px", fontSize: "16px", fontWeight: "bold",
            cursor: "pointer", opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? "Processing..." : `Pay LKR ${orderData.total}`}
      </button>
    </form>
  );
}

export default function StripeCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state?.orderData || location.state;

  // --- LOGIN MODAL STATE ---
  const [showLoginModal, setShowLoginModal] = useState(false);

  // --- CHECK AUTH FUNCTION ---
  const isAuthenticated = () => {
    // Check both local and session storage
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    // If token exists, return true (User is logged in)
    if (token || user) return true;
    
    // Otherwise return false
    return false;
  };

  // --- HANDLER PASSED TO CHILD ---
  const handleAuthCheck = () => {
    if (isAuthenticated()) {
      return true;
    } else {
      console.log("Opening Login Modal..."); // Debugging
      setShowLoginModal(true);
      return false;
    }
  };

  const closeLoginModal = () => setShowLoginModal(false);

  const handleGoToLogin = () => {
    localStorage.setItem('redirectAfterLogin', '/checkout');
    setShowLoginModal(false);
    setTimeout(() => navigate('/login'), 100);
  };

  const handleGoToRegister = () => {
    localStorage.setItem('redirectAfterLogin', '/checkout');
    setShowLoginModal(false);
    setTimeout(() => navigate('/register'), 100);
  };

  // --- STYLES ---
  const modalStyles = `
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px;
    }
    .modal-content {
      background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%);
      border-radius: 32px; padding: 50px 40px;
      max-width: 480px; width: 100%; text-align: center;
      position: relative; box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    .checkout-container {
        max-width: 600px; margin: 40px auto; padding: 30px;
        background: #f9f9f9; border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }
  `;

  if (!orderData) return <div style={{padding: "100px", textAlign:"center"}}>No order data found.</div>;

  return (
    <>
      <style>{modalStyles}</style>
      <Navbar />
      <br /><br /><br />
      
      {/* --- LOGIN MODAL START --- */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={closeLoginModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLoginModal}
                style={{
                  position: "absolute", top: "20px", right: "20px",
                  background: "#F5F5F4", border: "none", borderRadius: "50%",
                  width: "44px", height: "44px", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}
              >
                <X size={20} color="#666" />
              </button>

              {/* Icon */}
              <div
                style={{
                  width: "90px", height: "90px",
                  background: `linear-gradient(135deg, ${accentPink} 0%, #e8a4a4 100%)`,
                  borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 30px", boxShadow: `0 15px 35px ${accentPink}50`,
                }}
              >
                <Lock size={40} color="white" />
              </div>

              {/* Content */}
              <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: darkText }}>Login Required</h2>
              <p style={{ color: "#666", marginBottom: "30px" }}>Please login to complete your payment securely.</p>

              {/* Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <button
                  onClick={handleGoToLogin}
                  style={{
                    background: accentPink, color: "white", padding: "15px",
                    borderRadius: "50px", border: "none", fontSize: "1rem", fontWeight: "bold",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", cursor: "pointer"
                  }}
                >
                  <LogIn size={20} /> Login Now
                </button>

                <button
                  onClick={handleGoToRegister}
                  style={{
                    background: "white", color: darkText, padding: "15px",
                    borderRadius: "50px", border: "2px solid #eee", fontSize: "1rem", fontWeight: "bold",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", cursor: "pointer"
                  }}
                >
                  <UserPlus size={20} /> Create Account
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- LOGIN MODAL END --- */}

      <div className="checkout-container">
        <Elements stripe={stripePromise}>
          <CheckoutForm orderData={orderData} onAuthCheck={handleAuthCheck} />
        </Elements>
      </div>
      <Footer />
    </>
  );
}