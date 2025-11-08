import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./StripeCheckout.css";

// Load Stripe using your publishable key
const stripePromise = loadStripe("pk_test_51SPd7s63pC6Mm5AyVMWJVNwQF4QConX39iRX66jjWt3Lm2UsIWq0aqhRVPEnJDU56U22UZZOFeODOJZoYPZcb4tX00gMw2pquh");

function CheckoutForm({ orderData }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1️⃣ Create payment intent on backend
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/payments",
        {
          amount: orderData.total,
          method: "card",
          orderId: orderData.orderId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const clientSecret = res.data.clientSecret;

      // 2️⃣ Confirm payment with Stripe
      const cardElement = elements.getElement(CardElement);
      const { paymentIntent, error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        setSuccess(true);
        setLoading(false);

        // 3️⃣ Optionally, redirect or clear cart
        alert("Payment successful!");
        navigate("/"); // redirect to home or orders page
      }
    } catch (err) {
      console.error(err);
      setError("Payment failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <form className="stripe-form" onSubmit={handleSubmit}>
      <h2>Pay with Card</h2>
      <CardElement className="card-input" />
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : `Pay ₹${orderData.total}`}
      </button>
      {success && <p className="success">Payment successful!</p>}
    </form>
  );
}

export default function StripeCheckout() {
  const location = useLocation();
  const orderData = location.state; // pass total, orderId, etc. from ShoppingCart

  if (!orderData) {
    return <p>No order data found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <Elements stripe={stripePromise}>
          <CheckoutForm orderData={orderData} />
        </Elements>
      </div>
      <Footer />
    </>
  );
}
