// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./PaymentPage.css";

// // ✅ Publishable key (NOT secret)
// const stripePromise = loadStripe("pk_test_51SPd7s63pC6Mm5AyVMWJVNwQF4QConX39iRX66jjWt3Lm2UsIWq0aqhRVPEnJDU56U22UZZOFeODOJZoYPZcb4tX00gMw2pquh"); 

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       // Example — replace with your real order details
//       const orderId = "67a4b8cfe5d2a...";
//       const amount = 599; // ₹599 = 599 INR
//       const method = "card";

//       // ✅ Call backend to create payment
//       const res = await axios.post("http://localhost:5000/payments/create", {
//         orderId,
//         amount,
//         method,
//       });

//       const { clientSecret } = res.data;

//       // ✅ Confirm payment on frontend
//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (result.error) {
//         setMessage(result.error.message);
//       } else if (result.paymentIntent.status === "succeeded") {
//         setMessage("🎉 Payment successful!");
//       }
//     } catch (err) {
//       setMessage("Payment failed. Try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handlePayment} className="payment-form">
//       <h2>💳 Complete Your Payment</h2>
//       <CardElement className="card-element" />
//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//       {message && <p className="message">{message}</p>}
//     </form>
//   );
// }

// export default function PaymentPage() {
//   return (
//     <>
//       <Navbar />
//       <div className="payment-container">
//         <Elements stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       </div>
//       <Footer />
//     </>
//   );
// }
