// // PaymentSuccess.jsx
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// export default function PaymentSuccess() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 3 seconds wait, then redirect to home
//     const timer = setTimeout(() => {
//       navigate("/"); // home page
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Payment Successful ✅</h2>
//       <p>Redirecting to Home...</p>
//     </div>
//   );
// }


// // PaymentSuccess.jsx
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function PaymentSuccess() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [orderData, setOrderData] = useState(null);
//   const [redirectTimer, setRedirectTimer] = useState(10); // 10 seconds countdown

//   // Get Stripe session ID from URL
//   const queryParams = new URLSearchParams(location.search);
//   const sessionId = queryParams.get("session_id");

//   // Fetch order/payment info from backend
//   useEffect(() => {
//     if (!sessionId) return;

//     const fetchOrder = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(
//           `http://localhost:5000/payments/session/${sessionId}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setOrderData(res.data);

//         // ✅ Automatically download invoice after fetching order
//         if (res.data?._id) {
//           const invoiceRes = await axios.get(
//             `http://localhost:5000/payments/invoice/${res.data._id}`,
//             { responseType: "blob", headers: { Authorization: `Bearer ${token}` } }
//           );

//           const file = new Blob([invoiceRes.data], { type: "application/pdf" });
//           const fileURL = URL.createObjectURL(file);
//           // Trigger download
//           const link = document.createElement("a");
//           link.href = fileURL;
//           link.download = `invoice-${res.data._id}.pdf`;
//           link.click();
//         }
//       } catch (err) {
//         console.error("Failed to fetch order or download invoice:", err);
//       }
//     };

//     fetchOrder();
//   }, [sessionId]);

//   // Redirect countdown
//   useEffect(() => {
//     if (redirectTimer <= 0) {
//       navigate("/"); // redirect to home
//     } else {
//       const timer = setTimeout(() => setRedirectTimer(redirectTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [redirectTimer, navigate]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Payment Successful ✅</h2>
//       <p>You will be redirected to Home in {redirectTimer} seconds...</p>
//     </div>
//   );
// }



// PaymentSuccess.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderData, setOrderData] = useState(null);
  const [redirectTimer, setRedirectTimer] = useState(10); // 10s countdown
  const [invoiceReady, setInvoiceReady] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState("");

  // Get Stripe session ID from URL
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:5000/payments/session/${sessionId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setOrderData(res.data);

        // Automatically download invoice
        if (res.data?._id) {
          const invoiceRes = await axios.get(
            `http://localhost:5000/payments/invoice/${res.data._id}`,
            { responseType: "blob", headers: { Authorization: `Bearer ${token}` } }
          );

          const file = new Blob([invoiceRes.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);

          // Trigger automatic download
          const link = document.createElement("a");
          link.href = fileURL;
          link.download = `invoice-${res.data._id}.pdf`;
          link.click();

          // Set backup download link
          setInvoiceUrl(fileURL);
          setInvoiceReady(true);
        }
      } catch (err) {
        console.error("Failed to fetch order or download invoice:", err);
      }
    };

    fetchOrder();
  }, [sessionId]);

  // Redirect countdown
  useEffect(() => {
    if (redirectTimer <= 0) {
      navigate("/"); // redirect to home
    } else {
      const timer = setTimeout(() => setRedirectTimer(redirectTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [redirectTimer, navigate]);

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
        Payment Successful ✅
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
        Thank you for your order {orderData?.customerName || ""}!
      </p>
      <p style={{ marginBottom: "20px" }}>
        You will be redirected to Home in <strong>{redirectTimer}</strong> seconds...
      </p>

      {invoiceReady && invoiceUrl && (
        <div>
          <p style={{ marginBottom: "10px" }}>Your invoice is ready:</p>
          <a
            href={invoiceUrl}
            download={`invoice-${orderData._id}.pdf`}
            style={{
              padding: "10px 20px",
              backgroundColor: "#F472B6",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EC4899")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F472B6")}
          >
            Download Invoice
          </a>
        </div>
      )}
    </div>
  );
}
