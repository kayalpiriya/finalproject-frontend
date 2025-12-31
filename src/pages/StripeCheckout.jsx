
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

      console.log("Sending Payment Request...");

      const res = await axios.post(
        "https://finalproject-backend-7rqa.onrender.com/payments",
        {
          orderId: orderData._id || orderData.orderId,
          amount: orderData.total,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Redirect to Stripe
      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        setError("Backend responded, but no payment URL was provided.");
        setLoading(false);
      }

    } catch (err) {
      console.error("Payment Error:", err);
      
      // Extract the error message safely
      let errorMessage = "Payment failed. Please try again.";
      
      if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx (e.g. 400 or 500)
          errorMessage = err.response.data.message || err.response.statusText;
      } else if (err.request) {
          // The request was made but no response was received
          errorMessage = "No response from server. Check your internet connection.";
      } else {
          errorMessage = err.message;
      }

      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <br /><br />
      <div className="checkout-container" style={{ 
          maxWidth: "500px", 
          margin: "0 auto", 
          padding: "30px", 
          textAlign: "center", 
          border: "1px solid #e0e0e0", 
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{color: "#333"}}>Order Summary</h2>
        <p style={{color: "#777"}}>Order Ref: {orderData._id || orderData.orderId}</p>
        
        <div style={{margin: "20px 0"}}>
             {/* Using a reliable placeholder service */}
            <img 
                src="https://placehold.co/100x100?text=Secure+Pay" 
                alt="Secure Payment" 
                style={{ borderRadius: "50%" }}
            />
        </div>

        <div style={{
            background: "#f8f9fa", 
            padding: "15px", 
            borderRadius: "8px", 
            marginBottom: "20px"
        }}>
            <h1 style={{ color: "#27ae60", margin: 0 }}>LKR {orderData.total}</h1>
        </div>

        {error && (
            <div style={{ 
                color: "#721c24", 
                backgroundColor: "#f8d7da", 
                border: "1px solid #f5c6cb",
                padding: "15px", 
                borderRadius: "5px", 
                marginBottom: "20px",
                fontSize: "14px",
                textAlign: "left"
            }}>
                <strong>Error:</strong> {error}
            </div>
        )}

        <button 
            onClick={handlePayment} 
            disabled={loading}
            style={{
                backgroundColor: "#635bff", 
                color: "white", 
                padding: "15px 0",
                fontSize: "16px", 
                fontWeight: "600",
                border: "none", 
                borderRadius: "6px", 
                cursor: loading ? "not-allowed" : "pointer", 
                width: "100%",
                transition: "background 0.3s"
            }}
        >
          {loading ? "Redirecting to Stripe..." : "Pay Now (Secure)"}
        </button>
      </div>
      <br /><br />
      <Footer />
    </>
  );
}