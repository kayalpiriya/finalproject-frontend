// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext.jsx";

// function ShoppingCart() {
//   const navigate = useNavigate();
//   const {
//     cartItems,
//     updateQuantity,
//     removeFromCart,
//     clearCart,
//     totalItems,
//     totalPrice,
//     placeOrder,
//   } = useContext(CartContext);

//   const [address, setAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("Online Payment");
//   const [shippingFee, setShippingFee] = useState(0);

//   // const handleProceedToPay = () => {
//   //   if (cartItems.length === 0) return alert("Cart is empty!");
//   //   if (!address) return alert("Enter delivery address!");

//   //   // You can pass address/payment method to backend if needed
//   //   placeOrder(paymentMethod);
//   // };

//   // const handleProceedToPay = async () => {
//   //   if (!address) return alert("Enter delivery address!");
  
//   //   // ✅ Await the order creation
//   //   const orderData = await placeOrder(paymentMethod, address);
  
//   //   if (!orderData) return; // stop if order creation failed
  
//   //   // ✅ Navigate to Stripe checkout with orderData
//   //   navigate("/checkout", { state: { orderData } });
//   // };

//   const handleProceedToPay = async () => {
//     if (!address) return alert("Enter delivery address!");
  
//     const token = localStorage.getItem("token");
  
//     try {
//       // 1️⃣ Create order in backend
//       const orderData = await placeOrder(paymentMethod, address);
//       if (!orderData) return; // stop if order creation failed
  
//       // 2️⃣ Call /payments to create Stripe session
//       const resPayment = await axios.post(
//         "http://localhost:5000/payments",
//         { orderId: orderData._id, amount: orderData.total },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
  
//       // 3️⃣ Redirect user to Stripe checkout page
//       window.location.href = resPayment.data.url;
  
//     } catch (err) {
//       console.error("Payment initiation error:", err);
//       alert("Payment initiation failed!");
//     }
//   };
  
  

//   return (
//     <>
//       <Navbar />
//       <div className="main-content">
//         <div className="cart-container">
//           {/* --- LEFT SIDE --- */}
//           <div className="cart-left">
//             <h2 className="cart-title">Shopping Cart</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((p) => (
//                 <div key={p._id} className="cart-item">
//                   <div className="item-info">
//                     {/* <img src={p.img} alt={p.title} /> */}
//                     <img src={p.img || "/assets/default.jpg"} alt={p.name} />

//                     <div>
//                       <p className="item-title">{p.title}</p>
//                       <p className="item-price">₹{p.price}</p>
//                       <p>Stock: {p.stock}</p>
//                     </div>
//                   </div>

//                   {/* Quantity Controls */}
//                   <div className="qty-controls">
//                     <button
//                       onClick={() =>
//                         updateQuantity(p._id, Math.max(p.quantity - 1, 1))
//                       }
//                     >
//                       -
//                     </button>
//                     <span>{p.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           p._id,
//                           Math.min(p.quantity + 1, p.stock)
//                         )
//                       }
//                     >
//                       +
//                     </button>
//                   </div>

//                   <button
//                     className="delete-btn"
//                     onClick={() => removeFromCart(p._id)}
//                   >
//                     ❌
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="empty-msg">No products in cart 🛒</p>
//             )}

//             <button
//               className="continue-btn"
//               onClick={() => navigate("/AllProduct")}
//               style={{
//                 marginTop: "10px",
//                 padding: "10px 20px",
//                 backgroundColor: "#FDB581",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 width: "250px",
//               }}
//             >
//               Continue Shopping
//             </button>
//           </div>

//           {/* --- RIGHT SIDE --- */}
//           <div className="cart-right">
//             <h3>Order Summary</h3>
//             <div className="order-box">
//               <p>
//                 <strong>Delivery Address</strong>
//               </p>
//               <input
//                 type="text"
//                 placeholder="Enter delivery address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />

//               <p>
//                 <strong>Payment Method</strong>
//               </p>
//               <div className="payment-methods">
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Online Payment"
//                     checked={paymentMethod === "Online Payment"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />{" "}
//                   Online Payment
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Cash on Delivery"
//                     checked={paymentMethod === "Cash on Delivery"}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />{" "}
//                   Cash on Delivery
//                 </label>
//               </div>

//               <div className="price-details">
//                 <p>
//                   <span>Items:</span>
//                   <span>{totalItems}</span>
//                 </p>
//                 <p>
//                   <span>Subtotal:</span>
//                   <span>₹{totalPrice}</span>
//                 </p>
//                 <p>
//                   <span>Shipping Fee:</span>
//                   <span>₹{shippingFee}</span>
//                 </p>
//                 <div className="total-line">
//                   <p>
//                     <strong>Total</strong>
//                     <strong>₹{totalPrice + shippingFee}</strong>
//                   </p>
//                 </div>
//               </div>

//               <button className="pay-btn" onClick={handleProceedToPay}>
//                 Proceed to Pay
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <Footer />
//     </>
//   );
// }

// export default ShoppingCart;
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext.jsx";

function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice, placeOrder } =
    useContext(CartContext);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");

  const handleProceedToPay = async () => {
    if (!address) return alert("Enter delivery address!");
    await placeOrder(paymentMethod, address);
  };

  return (
    <>
      <Navbar />
      <br></br><br></br>
      <div className="max-w-6xl mx-auto my-12 p-4 grid md:grid-cols-3 gap-10">
        {/* --- Cart Items --- */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-6">Shopping Cart</h2>
          {cartItems.length === 0 && <p className="text-gray-500">Your cart is empty 🛒</p>}
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row justify-between items-center mb-4 border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.img || "/assets/default.jpg"} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                  <p className="text-gray-400">Stock: {item.stock}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <button
                  onClick={() => updateQuantity(item._id, Math.max(item.quantity - 1, 1))}
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, Math.min(item.quantity + 1, item.stock))}
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 font-bold ml-4 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}

          {cartItems.length > 0 && (
            <button
              onClick={() => navigate("/allproduct")}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Continue Shopping
            </button>
          )}
        </div>

        {/* --- Order Summary --- */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Delivery Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option value="Online Payment">Online Payment</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="flex justify-between">
                <span>Items ({totalItems})</span>
                <span>₹{totalPrice}</span>
              </p>
              <p className="flex justify-between font-semibold mt-2">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </p>
            </div>

            <button
              onClick={handleProceedToPay}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition mt-4"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShoppingCart;
