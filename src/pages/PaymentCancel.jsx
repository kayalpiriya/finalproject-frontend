// PaymentCancel.jsx
import { useNavigate } from "react-router-dom";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Payment Cancelled ❌</h2>
      <button onClick={() => navigate("/ShoppingCart")}>Back to Cart</button>
    </div>
  );
}
