// PaymentSuccess.jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // 3 seconds wait, then redirect to home
    const timer = setTimeout(() => {
      navigate("/"); // home page
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Payment Successful ✅</h2>
      <p>Redirecting to Home...</p>
    </div>
  );
}
