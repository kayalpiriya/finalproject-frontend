// // PaymentCancel.jsx
// import { useNavigate } from "react-router-dom";

// export default function PaymentCancel() {
//   const navigate = useNavigate();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Payment Cancelled ❌</h2>
//       <button onClick={() => navigate("/ShoppingCart")}>Back to Cart</button>
//     </div>
//   );
// }


// PaymentCancel.jsx
import { useNavigate } from "react-router-dom";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "'Poppins', sans-serif",
        color: "#4B5563",
      }}
    >
      <h2 style={{ color: "#F472B6", fontSize: "2rem", marginBottom: "20px" }}>
        Payment Cancelled ❌
      </h2>
      <p style={{ marginBottom: "20px" }}>
        Your payment was not completed. You can try again from your cart.
      </p>
      <button
        onClick={() => navigate("/ShoppingCart")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#F472B6",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EC4899")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F472B6")}
      >
        Back to Cart
      </button>
    </div>
  );
}

