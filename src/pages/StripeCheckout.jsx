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


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StripeCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state?.orderData || location.state;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!orderData) {
    return (
        <>
            <Navbar />
            <div style={{ padding: "50px", textAlign: "center" }}>
                <h2>No order data found</h2>
                <button onClick={() => navigate("/cart")}>Go to Cart</button>
            </div>
            <Footer />
        </>
    );
  }

  const handlePayment = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User not authenticated. Please login.");
        setLoading(false);
        return;
      }

      const res = await axios.post(
        "https://finalproject-backend-7rqa.onrender.com/payments",
        {
          orderId: orderData._id || orderData.orderId,
          amount: orderData.total,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        setError("Failed to generate payment link.");
        setLoading(false);
      }

    } catch (err) {
      console.error(err);
      // Show the specific error message from Backend (e.g., "Amount too low")
      const msg = err.response?.data?.message || "Payment processing failed";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <br /><br />
      <div className="checkout-container" style={{ 
          maxWidth: "500px", margin: "0 auto", padding: "30px", 
          textAlign: "center", border: "1px solid #ddd", borderRadius: "8px" 
      }}>
        <h2>Order Summary</h2>
        <p>Order ID: {orderData._id || orderData.orderId}</p>
        
        {/* Fixed Placeholder Image Error */}
        <img 
            src="https://placehold.co/150" 
            alt="Secure Payment" 
            style={{ margin: "20px 0", borderRadius: "8px" }}
        />

        <h1 style={{ color: "#2ecc71" }}>LKR {orderData.total}</h1>

        {error && (
            <div style={{ 
                color: "red", backgroundColor: "#ffe6e6", 
                padding: "10px", margin: "15px 0", borderRadius: "5px" 
            }}>
                {error}
            </div>
        )}

        <button 
            onClick={handlePayment} 
            disabled={loading}
            style={{
                backgroundColor: "#635bff", color: "white", padding: "12px 24px",
                fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%"
            }}
        >
          {loading ? "Redirecting to Stripe..." : "Pay Now"}
        </button>
      </div>
      <br /><br />
      <Footer />
    </>
  );
}