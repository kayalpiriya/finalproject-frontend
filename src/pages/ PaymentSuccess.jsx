
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderData, setOrderData] = useState(null);
  const [redirectTimer, setRedirectTimer] = useState(10);
  const [invoiceReady, setInvoiceReady] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState("");
  
  // Hover states for buttons
  const [invoiceHover, setInvoiceHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);

  // Get Stripe session ID
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://finalproject-backend-7rqa.onrender.com/payments/session/${sessionId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setOrderData(res.data);

        // Auto download invoice
        if (res.data?._id) {
          const invoiceRes = await axios.get(
            `https://finalproject-backend-7rqa.onrender.com/payments/invoice/${res.data._id}`,
            { responseType: "blob", headers: { Authorization: `Bearer ${token}` } }
          );
          const file = new Blob([invoiceRes.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          
          // Auto click
          const link = document.createElement("a");
          link.href = fileURL;
          link.download = `invoice-${res.data._id}.pdf`;
          link.click();

          setInvoiceUrl(fileURL);
          setInvoiceReady(true);
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchOrder();
  }, [sessionId]);

  // Timer
  useEffect(() => {
    if (redirectTimer <= 0) {
      if (orderData?.products?.length > 0) {
        navigate(`/product/${orderData.products[0].productId}#reviews`);
      } else {
        navigate("/allproduct");
      }
    } else {
      const timer = setTimeout(() => setRedirectTimer(redirectTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [redirectTimer, navigate, orderData]);

  // --- STYLES ---
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6",
      fontFamily: "'Poppins', sans-serif",
      padding: "20px",
      overflow: "hidden", // Prevent scrollbars from animations
    },
    card: {
      backgroundColor: "#fff",
      padding: "60px 40px",
      borderRadius: "30px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      textAlign: "center",
      maxWidth: "500px",
      width: "100%",
      position: "relative",
      animation: "slideUpFade 0.8s ease-out forwards",
      zIndex: 10,
    },
    // The wrapper for the Icon + Dust
    animationWrapper: {
      position: "relative",
      width: "100px",
      height: "100px",
      margin: "0 auto 30px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    iconCircle: {
      width: "90px",
      height: "90px",
      backgroundColor: "#ECFDF5", // Light green
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
      boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.2)",
      animation: "popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards",
    },
    checkIcon: {
      width: "50px",
      height: "50px",
      color: "#059669",
    },
    heading: {
      color: "#111827",
      fontSize: "2rem",
      fontWeight: "800",
      marginBottom: "10px",
    },
    paragraph: {
      color: "#6B7280",
      fontSize: "1rem",
      marginBottom: "30px",
      lineHeight: "1.5",
    },
    timerBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#F3F4F6",
      padding: "10px 20px",
      borderRadius: "50px",
      fontSize: "0.9rem",
      color: "#4B5563",
      marginBottom: "30px",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    primaryBtn: {
      display: "block",
      width: "100%",
      padding: "16px",
      backgroundColor: invoiceHover ? "#db2777" : "#F472B6",
      color: "#fff",
      borderRadius: "15px",
      fontWeight: "600",
      textDecoration: "none",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      transform: invoiceHover ? "translateY(-2px)" : "translateY(0)",
      boxShadow: invoiceHover ? "0 10px 20px rgba(244, 114, 182, 0.4)" : "none",
    },
    secondaryBtn: {
      display: "block",
      width: "100%",
      padding: "16px",
      backgroundColor: homeHover ? "#F3F4F6" : "transparent",
      color: "#4B5563",
      borderRadius: "15px",
      fontWeight: "600",
      textDecoration: "none",
      border: "2px solid #E5E7EB",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }
  };

  // Generate particles for the "Dust/Explosion" effect
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const angle = i * 30; // 360 deg / 12 particles
    const color = ["#F472B6", "#34D399", "#60A5FA", "#FBBF24"][i % 4]; // Multiple colors
    
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "8px",
          height: "8px",
          backgroundColor: color,
          borderRadius: "50%",
          // Rotate the container so the particle moves outward in that direction
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: `particleBurst 0.8s ease-out 0.4s forwards`,
            opacity: 0, // Start invisible
          }}
        />
      </div>
    );
  });

  return (
    <div style={styles.container}>
      {/* --- INLINE CSS ANIMATIONS --- */}
      <style>
        {`
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes particleBurst {
            0% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(70px) scale(0.5); opacity: 0; } 
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.card}>
        
        {/* Animation Wrapper: Icon + Dust */}
        <div style={styles.animationWrapper}>
          {/* The Green Success Circle */}
          <div style={styles.iconCircle}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={styles.checkIcon}>
              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 011.04-.207z" clipRule="evenodd" />
            </svg>
          </div>
          {/* The Dust Particles */}
          {particles}
        </div>

        <h2 style={styles.heading}>Payment Successful!</h2>
        <p style={styles.paragraph}>
          Thanks, {orderData?.customerName || "Customer"}! Your order has been placed.
          <br /> We sent an email with the details.
        </p>

        {/* Redirect Timer */}
        <div style={styles.timerBadge}>
          <div style={{
            width: "14px", height: "14px",
            border: "2px solid #D1D5DB", borderTopColor: "#F472B6",
            borderRadius: "50%", animation: "spin 1s linear infinite"
          }}></div>
          <span>Redirecting in <strong>{redirectTimer}s</strong></span>
        </div>

        {/* Action Buttons */}
        <div style={styles.buttonGroup}>
          
          {/* Button 1: Invoice (Primary) */}
          {invoiceReady && invoiceUrl ? (
            <a
              href={invoiceUrl}
              download={`invoice-${orderData?._id}.pdf`}
              style={styles.primaryBtn}
              onMouseEnter={() => setInvoiceHover(true)}
              onMouseLeave={() => setInvoiceHover(false)}
            >
              Download Invoice
            </a>
          ) : (
            <button style={{...styles.primaryBtn, opacity: 0.7, cursor: 'wait'}}>
              Preparing Invoice...
            </button>
          )}

          {/* Button 2: Back to Home (Secondary) */}
          <button
            onClick={() => navigate("/")}
            style={styles.secondaryBtn}
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
          >
            Back to Home Page
          </button>
          
        </div>
      </div>
    </div>
  );
}