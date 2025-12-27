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



// // PaymentSuccess.jsx
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function PaymentSuccess() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [orderData, setOrderData] = useState(null);
//   const [redirectTimer, setRedirectTimer] = useState(10); // 10s countdown
//   const [invoiceReady, setInvoiceReady] = useState(false);
//   const [invoiceUrl, setInvoiceUrl] = useState("");

//   // Get Stripe session ID from URL
//   const queryParams = new URLSearchParams(location.search);
//   const sessionId = queryParams.get("session_id");

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

//         // Automatically download invoice
//         if (res.data?._id) {
//           const invoiceRes = await axios.get(
//             `http://localhost:5000/payments/invoice/${res.data._id}`,
//             { responseType: "blob", headers: { Authorization: `Bearer ${token}` } }
//           );

//           const file = new Blob([invoiceRes.data], { type: "application/pdf" });
//           const fileURL = URL.createObjectURL(file);

//           // Trigger automatic download
//           const link = document.createElement("a");
//           link.href = fileURL;
//           link.download = `invoice-${res.data._id}.pdf`;
//           link.click();

//           // Set backup download link
//           setInvoiceUrl(fileURL);
//           setInvoiceReady(true);
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
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "50px",
//         fontFamily: "'Poppins', sans-serif",
//         color: "#4B5563",
//       }}
//     >
//       <h2 style={{ color: "#F472B6", fontSize: "2rem", marginBottom: "20px" }}>
//         Payment Successful ✅
//       </h2>
//       <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
//         Thank you for your order {orderData?.customerName || ""}!
//       </p>
//       <p style={{ marginBottom: "20px" }}>
//         You will be redirected to Home in <strong>{redirectTimer}</strong> seconds...
//       </p>

//       {invoiceReady && invoiceUrl && (
//         <div>
//           <p style={{ marginBottom: "10px" }}>Your invoice is ready:</p>
//           <a
//             href={invoiceUrl}
//             download={`invoice-${orderData._id}.pdf`}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#F472B6",
//               color: "#fff",
//               borderRadius: "8px",
//               textDecoration: "none",
//               fontWeight: "bold",
//               transition: "0.3s",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EC4899")}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F472B6")}
//           >
//             Download Invoice
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }


// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function PaymentSuccess() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [orderData, setOrderData] = useState(null);
//   const [redirectTimer, setRedirectTimer] = useState(10); // 10s countdown
//   const [invoiceReady, setInvoiceReady] = useState(false);
//   const [invoiceUrl, setInvoiceUrl] = useState("");

//   // Get Stripe session ID from URL
//   const queryParams = new URLSearchParams(location.search);
//   const sessionId = queryParams.get("session_id");

//   useEffect(() => {
//     if (!sessionId) return;

//     const fetchOrder = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(
//           `https://finalproject-backend-7rqa.onrender.com/payments/session/${sessionId}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setOrderData(res.data);

//         // Automatically download invoice
//         if (res.data?._id) {
//           const invoiceRes = await axios.get(
//             `https://finalproject-backend-7rqa.onrender.com/payments/invoice/${res.data._id}`,
//             { responseType: "blob", headers: { Authorization: `Bearer ${token}` } }
//           );

//           const file = new Blob([invoiceRes.data], { type: "application/pdf" });
//           const fileURL = URL.createObjectURL(file);

//           // Trigger automatic download
//           const link = document.createElement("a");
//           link.href = fileURL;
//           link.download = `invoice-${res.data._id}.pdf`;
//           link.click();

//           // Set backup download link
//           setInvoiceUrl(fileURL);
//           setInvoiceReady(true);
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
//       if (orderData?.products?.length > 0) {
//         // Redirect to the first product's review section
//         const firstProductId = orderData.products[0].productId;
//         navigate(`/product/${firstProductId}#reviews`);
//       } else {
//         navigate("/allproduct"); // fallback
//       }
//     } else {
//       const timer = setTimeout(() => setRedirectTimer(redirectTimer - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [redirectTimer, navigate, orderData]);

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "50px",
//         fontFamily: "'Poppins', sans-serif",
//         color: "#4B5563",
//       }}
//     >
//       <h2 style={{ color: "#F472B6", fontSize: "2rem", marginBottom: "20px" }}>
//         Payment Successful ✅
//       </h2>
//       <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
//         Thank you for your order {orderData?.customerName || ""}!
//       </p>
//       <p style={{ marginBottom: "20px" }}>
//         You will be redirected to write a review in <strong>{redirectTimer}</strong> seconds...
//       </p>

//       {invoiceReady && invoiceUrl && (
//         <div>
//           <p style={{ marginBottom: "10px" }}>Your invoice is ready:</p>
//           <a
//             href={invoiceUrl}
//             download={`invoice-${orderData._id}.pdf`}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#F472B6",
//               color: "#fff",
//               borderRadius: "8px",
//               textDecoration: "none",
//               fontWeight: "bold",
//               transition: "0.3s",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EC4899")}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F472B6")}
//           >
//             Download Invoice
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }



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
  const [isHovered, setIsHovered] = useState(false); // For button hover effect

  // Get Stripe session ID from URL
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

        // Automatically download invoice
        if (res.data?._id) {
          const invoiceRes = await axios.get(
            `https://finalproject-backend-7rqa.onrender.com/payments/invoice/${res.data._id}`,
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
      if (orderData?.products?.length > 0) {
        // Redirect to the first product's review section
        const firstProductId = orderData.products[0].productId;
        navigate(`/product/${firstProductId}#reviews`);
      } else {
        navigate("/allproduct"); // fallback
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
      backgroundColor: "#f9fafb", // Very light gray background
      fontFamily: "'Poppins', sans-serif",
      padding: "20px",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "50px 40px",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)", // Soft, modern shadow
      textAlign: "center",
      maxWidth: "480px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
    iconWrapper: {
      width: "80px",
      height: "80px",
      backgroundColor: "#DCFCE7", // Light green bg
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 25px auto",
      animation: "popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    checkmark: {
      color: "#16A34A", // Success green
      fontSize: "40px",
    },
    heading: {
      color: "#1F2937", // Dark gray
      fontSize: "1.75rem",
      fontWeight: "700",
      marginBottom: "10px",
      letterSpacing: "-0.5px",
    },
    subText: {
      color: "#6B7280", // Medium gray
      fontSize: "1rem",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
    divider: {
      height: "1px",
      backgroundColor: "#F3F4F6",
      margin: "20px 0",
      width: "100%",
    },
    loaderContainer: {
      backgroundColor: "#F3F4F6",
      borderRadius: "12px",
      padding: "15px",
      marginBottom: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    loaderText: {
      fontSize: "0.9rem",
      color: "#4B5563",
      fontWeight: "500",
    },
    button: {
      display: "inline-block",
      width: "100%",
      padding: "14px 0",
      backgroundColor: isHovered ? "#db2777" : "#F472B6", // Pink to Darker Pink
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: "600",
      borderRadius: "12px",
      textDecoration: "none",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: isHovered
        ? "0 8px 15px rgba(244, 114, 182, 0.4)"
        : "0 4px 6px rgba(244, 114, 182, 0.2)",
      transform: isHovered ? "translateY(-2px)" : "translateY(0)",
    },
  };

  return (
    <div style={styles.container}>
      {/* Injecting keyframes for the pop animation */}
      <style>
        {`
          @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.card}>
        {/* Success Icon */}
        <div style={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "40px", height: "40px", color: "#16A34A" }}
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Text Content */}
        <h2 style={styles.heading}>Payment Successful!</h2>
        <p style={styles.subText}>
          Thank you for your purchase{orderData?.customerName ? `, ${orderData.customerName}` : ""}.
          <br />
          We have received your order.
        </p>

        {/* Redirect Timer Badge */}
        <div style={styles.loaderContainer}>
          <div
            style={{
              border: "3px solid #E5E7EB",
              borderTop: "3px solid #F472B6",
              borderRadius: "50%",
              width: "16px",
              height: "16px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <span style={styles.loaderText}>
            Redirecting to reviews in <strong>{redirectTimer}s</strong>
          </span>
        </div>

        {/* Invoice Button */}
        {invoiceReady && invoiceUrl && (
          <div>
            <div style={styles.divider}></div>
            <p style={{ fontSize: "0.85rem", color: "#9CA3AF", marginBottom: "15px" }}>
              Your invoice download started automatically.
            </p>
            <a
              href={invoiceUrl}
              download={`invoice-${orderData?._id}.pdf`}
              style={styles.button}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Download Invoice Again
            </a>
          </div>
        )}
      </div>
    </div>
  );
}