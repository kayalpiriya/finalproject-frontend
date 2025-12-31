
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentCancel() {
  const navigate = useNavigate();
  
  // Hover states
  const [cartHover, setCartHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);

  // --- STYLES ---
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9fafb", // Light gray bg
      fontFamily: "'Poppins', sans-serif",
      padding: "20px",
      overflow: "hidden",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "60px 40px",
      borderRadius: "30px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      maxWidth: "480px",
      width: "100%",
      position: "relative",
      animation: "slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", // Smooth slide up
    },
    iconWrapper: {
      position: "relative",
      width: "100px",
      height: "100px",
      margin: "0 auto 30px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    // The Red Circle
    iconCircle: {
      width: "90px",
      height: "90px",
      backgroundColor: "#FEF2F2", // Very light red
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
      // Shake animation triggers on load
      animation: "shake 0.8s cubic-bezier(.36,.07,.19,.97) both 0.3s",
    },
    // The Ripple Effect behind the circle
    ripple: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "2px solid #FEE2E2",
      animation: "rippleEffect 2s infinite",
      zIndex: 1,
    },
    icon: {
      width: "45px",
      height: "45px",
      color: "#EF4444", // Red color
    },
    heading: {
      color: "#1F2937",
      fontSize: "2rem",
      fontWeight: "800",
      marginBottom: "15px",
    },
    subText: {
      color: "#6B7280",
      fontSize: "1rem",
      lineHeight: "1.6",
      marginBottom: "40px",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    primaryBtn: {
      width: "100%",
      padding: "16px",
      backgroundColor: cartHover ? "#BE123C" : "#E11D48", // Rose Red
      color: "#fff",
      border: "none",
      borderRadius: "15px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: cartHover 
        ? "0 10px 20px rgba(225, 29, 72, 0.4)" 
        : "0 4px 6px rgba(225, 29, 72, 0.2)",
      transform: cartHover ? "translateY(-2px)" : "translateY(0)",
    },
    secondaryBtn: {
      width: "100%",
      padding: "16px",
      backgroundColor: homeHover ? "#F3F4F6" : "transparent",
      color: "#4B5563",
      border: "2px solid #E5E7EB",
      borderRadius: "15px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }
  };

  return (
    <div style={styles.container}>
      {/* --- INLINE KEYFRAMES --- */}
      <style>
        {`
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
          }
          @keyframes rippleEffect {
            0% { width: 90px; height: 90px; opacity: 0.8; }
            100% { width: 160px; height: 160px; opacity: 0; }
          }
        `}
      </style>

      <div style={styles.card}>
        
        {/* Animated Icon */}
        <div style={styles.iconWrapper}>
          <div style={styles.ripple}></div>
          <div style={styles.iconCircle}>
            {/* X Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              style={styles.icon}
            >
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <h2 style={styles.heading}>Payment Cancelled</h2>
        <p style={styles.subText}>
          Looks like you cancelled the payment process. <br />
          Don't worry, no funds were deducted.
        </p>

        <div style={styles.buttonGroup}>
          {/* Back to Cart Button */}
          <button
            onClick={() => navigate("/ShoppingCart")}
            style={styles.primaryBtn}
            onMouseEnter={() => setCartHover(true)}
            onMouseLeave={() => setCartHover(false)}
          >
            Return to Cart & Try Again
          </button>

          {/* Back to Home Button */}
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