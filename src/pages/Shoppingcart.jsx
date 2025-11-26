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

// // export default ShoppingCart;
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext.jsx";

// function ShoppingCart() {
//   const navigate = useNavigate();
//   const { cartItems, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice, placeOrder } =
//     useContext(CartContext);

//   const [address, setAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("Online Payment");

//   const handleProceedToPay = async () => {
//     if (!address) return alert("Enter delivery address!");
//     await placeOrder(paymentMethod, address);
//   };

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br>
//       <div className="max-w-6xl mx-auto my-12 p-4 grid md:grid-cols-3 gap-10">
//         {/* --- Cart Items --- */}
//         <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-6">
//           <h2 className="text-2xl font-bold text-yellow-700 mb-6">Shopping Cart</h2>
//           {cartItems.length === 0 && <p className="text-gray-500">Your cart is empty 🛒</p>}
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex flex-col md:flex-row justify-between items-center mb-4 border-b pb-4"
//             >
//               <div className="flex items-center gap-4">
//                 <img src={item.img || "/assets/default.jpg"} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
//                 <div>
//                   <h3 className="font-semibold text-lg">{item.title}</h3>
//                   <p className="text-gray-600">₹{item.price}</p>
//                   <p className="text-gray-400">Stock: {item.stock}</p>
//                 </div>
//               </div>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-2 mt-2 md:mt-0">
//                 <button
//                   onClick={() => updateQuantity(item._id, Math.max(item.quantity - 1, 1))}
//                   className="bg-gray-200 px-2 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item._id, Math.min(item.quantity + 1, item.stock))}
//                   className="bg-gray-200 px-2 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-500 font-bold ml-4 hover:text-red-700"
//                 >
//                   ❌
//                 </button>
//               </div>
//             </div>
//           ))}

//           {cartItems.length > 0 && (
//             <button
//               onClick={() => navigate("/allproduct")}
//               className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition"
//             >
//               Continue Shopping
//             </button>
//           )}
//         </div>

//         {/* --- Order Summary --- */}
//         <div className="bg-white shadow-lg rounded-xl p-6">
//           <h2 className="text-2xl font-bold text-yellow-700 mb-6">Order Summary</h2>
//           <div className="space-y-4">
//             <div>
//               <label className="block font-semibold mb-1">Delivery Address</label>
//               <input
//                 type="text"
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Payment Method</label>
//               <select
//                 value={paymentMethod}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
//               >
//                 <option value="Online Payment">Online Payment</option>
//                 <option value="Cash on Delivery">Cash on Delivery</option>
//               </select>
//             </div>

//             <div className="border-t border-gray-200 pt-4">
//               <p className="flex justify-between">
//                 <span>Items ({totalItems})</span>
//                 <span>₹{totalPrice}</span>
//               </p>
//               <p className="flex justify-between font-semibold mt-2">
//                 <span>Total</span>
//                 <span>₹{totalPrice}</span>
//               </p>
//             </div>

//             <button
//               onClick={handleProceedToPay}
//               className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition mt-4"
//             >
//               Proceed to Pay
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ShoppingCart;


// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag, FiMapPin, FiCreditCard } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext.jsx";

// function ShoppingCart() {
//   const navigate = useNavigate();
//   const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice, placeOrder } = useContext(CartContext);

//   const [address, setAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("Online Payment");
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleProceedToPay = async () => {
//     if (!address) return alert("Please enter your delivery address to continue.");
    
//     setIsProcessing(true);
//     // Simulate a small delay for the "processing" feel
//     setTimeout(async () => {
//       await placeOrder(paymentMethod, address);
//       setIsProcessing(false);
//     }, 1500);
//   };

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className="min-h-screen bg-[#FFF8EC] font-sans text-[#6A4E3B]">
//       <Navbar />
      
//       <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
//         <div className="mb-10">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6A4E3B]" style={{ fontFamily: "'Playfair Display', serif" }}>
//             Your Basket
//           </h1>
//           <p className="text-[#8C7B6F] mt-2">
//             {totalItems} {totalItems === 1 ? "item" : "items"} selected for checkout
//           </p>
//         </div>

//         {cartItems.length === 0 ? (
//           /* --- Empty State --- */
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] shadow-sm border border-[#E8C7BE]/30"
//           >
//             <div className="bg-[#FFF8EC] p-6 rounded-full mb-6">
//               <FiShoppingBag className="w-12 h-12 text-[#D6A85B]" />
//             </div>
//             <h2 className="text-2xl font-serif font-bold mb-2">Your basket is empty</h2>
//             <p className="text-gray-500 mb-8">Looks like you haven't made your choice yet.</p>
//             <button
//               onClick={() => navigate("/allproduct")}
//               className="bg-[#6A4E3B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#563e2d] transition-all shadow-lg flex items-center gap-2"
//             >
//               Browse Menu <FiArrowRight />
//             </button>
//           </motion.div>
//         ) : (
//           <div className="grid lg:grid-cols-3 gap-10">
            
//             {/* --- Left Column: Cart Items --- */}
//             <div className="lg:col-span-2">
//               <motion.div 
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="show"
//                 className="space-y-6"
//               >
//                 {cartItems.map((item) => (
//                   <motion.div
//                     key={item._id}
//                     variants={itemVariants}
//                     className="group bg-white p-5 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(106,78,59,0.1)] transition-all border border-transparent hover:border-[#E8C7BE]/50 flex flex-col sm:flex-row items-center gap-6"
//                   >
//                     {/* Product Image */}
//                     <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-2xl bg-[#F9F9F9]">
//                       <img 
//                         src={item.img || "/assets/default.jpg"} 
//                         alt={item.title} 
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Details */}
//                     <div className="flex-grow text-center sm:text-left">
//                       <h3 className="font-serif text-xl font-bold text-[#6A4E3B] mb-1">
//                         {item.title}
//                       </h3>
//                       <p className="text-[#D6A85B] font-bold text-lg mb-1">₹{item.price}</p>
//                       {item.stock < 5 && (
//                         <p className="text-xs text-red-400 font-medium">Only {item.stock} left in stock</p>
//                       )}
//                     </div>

//                     {/* Controls */}
//                     <div className="flex flex-col items-center gap-4 sm:items-end">
//                       {/* Quantity Pill */}
//                       <div className="flex items-center bg-[#FFF8EC] rounded-full border border-[#E8C7BE] p-1">
//                         <button
//                           onClick={() => updateQuantity(item._id, Math.max(item.quantity - 1, 1))}
//                           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#D6A85B] hover:text-white transition-colors text-[#6A4E3B]"
//                         >
//                           <FiMinus size={14} />
//                         </button>
//                         <span className="w-8 text-center font-bold text-[#6A4E3B]">{item.quantity}</span>
//                         <button
//                           onClick={() => updateQuantity(item._id, Math.min(item.quantity + 1, item.stock))}
//                           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#D6A85B] hover:text-white transition-colors text-[#6A4E3B]"
//                         >
//                           <FiPlus size={14} />
//                         </button>
//                       </div>

//                       {/* Remove Button */}
//                       <button
//                         onClick={() => removeFromCart(item._id)}
//                         className="text-black-400 hover:text-red-500 transition-colors flex items-center gap-1 text-xs font-medium uppercase tracking-wide "
//                       >
//                         <FiTrash2 /> Remove
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <button
//                 onClick={() => navigate("/allproduct")}
//                 className="mt-8 text-[#D6A85B] font-bold hover:text-[#6A4E3B] transition-colors flex items-center gap-2"
//               >
//                 <FiArrowRight className="rotate-180" /> Continue Shopping
//               </button>
//             </div>

//             {/* --- Right Column: Order Summary --- */}
//             <div className="lg:col-span-1">
//               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-[#E8C7BE]/30 sticky top-28">
//                 <h2 className="text-2xl font-serif font-bold text-[#6A4E3B] mb-6 border-b border-[#E8C7BE] pb-4">
//                   Order Summary
//                 </h2>

//                 <div className="space-y-6">
//                   {/* Address Input */}
//                   <div className="group">
//                     <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
//                       <FiMapPin /> Delivery Address
//                     </label>
//                     <textarea
//                       placeholder="Enter your full address here..."
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D6A85B] transition-all resize-none h-24"
//                     />
//                   </div>

//                   {/* Payment Method */}
//                   <div>
//                     <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
//                       <FiCreditCard /> Payment Method
//                     </label>
//                     <div className="relative">
//                       <select
//                         value={paymentMethod}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D6A85B] appearance-none"
//                       >
//                         <option value="Online Payment">Online Payment (Secure)</option>
//                         <option value="Cash on Delivery">Cash on Delivery</option>
//                       </select>
//                       <div className="absolute right-3 top-3.5 pointer-events-none text-gray-400">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Totals */}
//                   <div className="bg-[#FFF8EC] p-4 rounded-xl space-y-2 mt-4">
//                     <div className="flex justify-between text-sm text-[#8C7B6F]">
//                       <span>Subtotal ({totalItems} items)</span>
//                       <span>₹{totalPrice}</span>
//                     </div>
//                     <div className="flex justify-between text-sm text-[#8C7B6F]">
//                       <span>Shipping</span>
//                       <span className="text-green-600 font-medium">Free</span>
//                     </div>
//                     <div className="flex justify-between items-center pt-3 border-t border-[#E8C7BE]/50 mt-2">
//                       <span className="font-serif font-bold text-xl text-[#6A4E3B]">Total</span>
//                       <span className="font-serif font-bold text-2xl text-[#D6A85B]">₹{totalPrice}</span>
//                     </div>
//                   </div>

//                   {/* Checkout Button */}
//                   <button
//                     onClick={handleProceedToPay}
//                     disabled={isProcessing}
//                     className={`w-full bg-[#6A4E3B] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#563e2d] hover:shadow-[#6A4E3B]/30 transition-all transform active:scale-98 flex items-center justify-center gap-2 ${
//                       isProcessing ? "opacity-75 cursor-wait" : ""
//                     }`}
//                   >
//                     {isProcessing ? (
//                       <>Processing...</>
//                     ) : (
//                       <>Checkout <FiArrowRight /></>
//                     )}
//                   </button>
                  
//                   <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
//                     Secure Encrypted Transaction
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default ShoppingCart;






import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiTrash2, FiMinus, FiPlus, FiArrowRight, 
  FiShoppingBag, FiMapPin, FiCreditCard, FiShield, FiPackage 
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext.jsx";

function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice, placeOrder } = useContext(CartContext);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");
  const [isProcessing, setIsProcessing] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // For hover states using inline JS

  const handleProceedToPay = async () => {
    if (!address) return alert("Please enter your delivery address to continue.");
    
    setIsProcessing(true);
    setTimeout(async () => {
      await placeOrder(paymentMethod, address);
      setIsProcessing(false);
    }, 1500);
  };

  // --- STYLES OBJECT (Theme Definition) ---
  const theme = {
    bg: "#FAF9F6",         // Bone White
    cardBg: "#FFFFFF",     // Pure White
    textMain: "#2C2420",   // Dark Espresso
    textSec: "#8C7B6F",    // Taupe
    accent: "#D6A85B",     // Muted Gold
    border: "#E5E0D8",     // Light Stone
    success: "#4CAF50",
    danger: "#FF5252",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: theme.bg,
      color: theme.textMain,
      fontFamily: "'DM Sans', sans-serif", // Modern Sans
      position: "relative",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "140px 24px 80px 24px",
    },
    header: {
      marginBottom: "50px",
      borderBottom: `1px solid ${theme.border}`,
      paddingBottom: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "3.5rem",
      fontWeight: "700",
      color: theme.textMain,
      margin: "0 0 10px 0",
      lineHeight: "1.1",
    },
    subtitle: {
      color: theme.textSec,
      fontSize: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    badge: {
      backgroundColor: theme.accent,
      color: "#fff",
      padding: "2px 8px",
      borderRadius: "12px",
      fontSize: "0.8rem",
      fontWeight: "bold",
    },
    emptyState: {
      textAlign: "center",
      padding: "80px 20px",
      backgroundColor: theme.cardBg,
      borderRadius: "40px",
      border: `1px solid ${theme.border}`,
      boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
    },
    gridContainer: {
      display: "flex",
      flexWrap: "wrap", // Allows stacking on mobile
      gap: "40px",
    },
    leftColumn: {
      flex: "2",
      minWidth: "300px", // Ensures it doesn't get too small
    },
    rightColumn: {
      flex: "1",
      minWidth: "320px",
    },
    card: {
      backgroundColor: theme.cardBg,
      borderRadius: "30px",
      padding: "25px",
      marginBottom: "20px",
      border: `1px solid ${theme.border}`,
      boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      transition: "border-color 0.3s ease",
    },
    imgContainer: {
      width: "110px",
      height: "110px",
      borderRadius: "20px",
      overflow: "hidden",
      backgroundColor: "#F5F5F0",
      flexShrink: 0,
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    itemDetails: {
      flexGrow: 1,
    },
    itemTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.25rem",
      fontWeight: "700",
      margin: "0 0 5px 0",
    },
    itemPrice: {
      color: theme.accent,
      fontSize: "1.1rem",
      fontWeight: "700",
      margin: "0",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    stepper: {
      display: "flex",
      alignItems: "center",
      border: `1px solid ${theme.border}`,
      borderRadius: "50px",
      padding: "4px",
    },
    stepBtn: {
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: theme.textMain,
      borderRadius: "50%",
      transition: "background 0.2s",
    },
    qtyText: {
      width: "30px",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "0.9rem",
    },
    removeBtn: {
      background: "#FFF5F5",
      border: "none",
      color: theme.danger,
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    summaryCard: {
      backgroundColor: theme.cardBg,
      borderRadius: "30px",
      padding: "30px",
      border: `1px solid ${theme.border}`,
      boxShadow: "0 20px 50px -10px rgba(0,0,0,0.05)",
      position: "sticky",
      top: "120px", // Sticky effect
    },
    inputGroup: {
      marginBottom: "25px",
    },
    label: {
      display: "block",
      fontSize: "0.75rem",
      fontWeight: "800",
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: theme.textSec,
      marginBottom: "10px",
    },
    input: {
      width: "100%",
      padding: "16px",
      borderRadius: "16px",
      border: `1px solid ${theme.border}`,
      backgroundColor: theme.bg,
      fontSize: "0.95rem",
      fontFamily: "inherit",
      outline: "none",
      resize: "none",
      boxSizing: "border-box", // Crucial for padding
    },
    totalBox: {
      backgroundColor: theme.textMain,
      color: "#fff",
      borderRadius: "20px",
      padding: "25px",
      marginTop: "20px",
      position: "relative",
      overflow: "hidden",
    },
    totalRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      fontSize: "0.9rem",
      opacity: 0.8,
    },
    finalTotal: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginTop: "15px",
      paddingTop: "15px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
    },
    checkoutBtn: {
      width: "100%",
      marginTop: "25px",
      backgroundColor: theme.accent,
      color: "#fff",
      border: "none",
      padding: "18px",
      borderRadius: "16px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      boxShadow: `0 10px 20px ${theme.accent}40`,
    }
  };

  return (
    <div style={styles.page}>
      {/* Mobile Responsiveness CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #f1f1f1; }
          ::-webkit-scrollbar-thumb { background: #D6A85B; border-radius: 4px; }

          /* Responsive Media Query for Stacked Layout */
          @media (max-width: 968px) {
            .responsive-grid { flex-direction: column !important; }
            .cart-card-responsive { flex-direction: column; align-items: flex-start !important; }
            .cart-controls-responsive { width: 100%; justify-content: space-between; margin-top: 15px; }
            .main-title { font-size: 2.5rem !important; }
          }
        `}
      </style>

      <Navbar />
      
      <main style={styles.container}>
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.header}
        >
          <div>
            <h1 style={styles.title} className="main-title">Your Collection</h1>
            <p style={styles.subtitle}>
              <span style={styles.badge}>{totalItems}</span> 
              items ready for checkout
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5, color: theme.textMain }}
            onClick={() => navigate("/allproduct")}
            style={{ 
              background: "none", border: "none", color: theme.accent, 
              fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "1rem"
            }}
          >
             <FiArrowRight style={{ transform: "rotate(180deg)" }} /> Continue Shopping
          </motion.button>
        </motion.div>

        {/* EMPTY STATE */}
        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={styles.emptyState}
          >
            <div style={{ 
              width: "80px", height: "80px", background: "#FFF8EC", borderRadius: "50%", 
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" 
            }}>
              <FiShoppingBag size={35} color={theme.accent} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "10px" }}>Your cart is empty</h2>
            <p style={{ color: theme.textSec, marginBottom: "30px" }}>Looks like you haven't made your choice yet.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/allproduct")}
              style={{ 
                backgroundColor: theme.textMain, color: "#fff", padding: "15px 40px", 
                borderRadius: "50px", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "1rem" 
              }}
            >
              Browse Collection
            </motion.button>
          </motion.div>
        ) : (
          /* CART CONTENT */
          <div style={styles.gridContainer} className="responsive-grid">
            
            {/* LEFT COLUMN: ITEMS */}
            <div style={styles.leftColumn}>
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    whileHover={{ scale: 1.01, borderColor: theme.accent }}
                    layout
                    style={styles.card}
                    className="cart-card-responsive"
                  >
                    <div style={styles.imgContainer}>
                      <img src={item.img || "/assets/default.jpg"} alt={item.title} style={styles.img} />
                    </div>

                    <div style={styles.itemDetails}>
                      <h3 style={styles.itemTitle}>{item.title}</h3>
                      <p style={styles.itemPrice}>₹{item.price}</p>
                      {item.stock < 5 && (
                        <p style={{ color: theme.danger, fontSize: "0.75rem", marginTop: "5px", display: "flex", alignItems: "center", gap: "5px" }}>
                           <FiPackage /> Only {item.stock} left
                        </p>
                      )}
                    </div>

                    <div style={styles.controls} className="cart-controls-responsive">
                      <div style={styles.stepper}>
                        <button 
                          onClick={() => updateQuantity(item._id, Math.max(item.quantity - 1, 1))}
                          style={styles.stepBtn}
                          onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
                          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                        >
                          <FiMinus size={12} />
                        </button>
                        <span style={styles.qtyText}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item._id, Math.min(item.quantity + 1, item.stock))}
                          style={styles.stepBtn}
                          onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
                          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                        >
                          <FiPlus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item._id)}
                        style={styles.removeBtn}
                        title="Remove Item"
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#FFEAEA"; e.currentTarget.style.transform = "scale(1.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#FFF5F5"; e.currentTarget.style.transform = "scale(1)"; }}
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* RIGHT COLUMN: CHECKOUT */}
            <div style={styles.rightColumn}>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={styles.summaryCard}
              >
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "25px" }}>Checkout</h2>

                {/* Address */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}><FiMapPin /> Delivery Address</label>
                  <textarea
                    placeholder="Street, City, Zip Code..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={styles.input}
                    rows={3}
                    onFocus={(e) => e.target.style.borderColor = theme.accent}
                    onBlur={(e) => e.target.style.borderColor = theme.border}
                  />
                </div>

                {/* Payment */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}><FiCreditCard /> Payment Method</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{...styles.input, cursor: "pointer"}}
                    onFocus={(e) => e.target.style.borderColor = theme.accent}
                    onBlur={(e) => e.target.style.borderColor = theme.border}
                  >
                    <option value="Online Payment">Online Payment</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                  </select>
                </div>

                {/* Total Calculation */}
                <div style={styles.totalBox}>
                  {/* Decoration Blur */}
                  <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", filter: "blur(20px)" }}></div>
                  
                  <div style={styles.totalRow}>
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div style={styles.totalRow}>
                    <span>Shipping</span>
                    <span style={{ color: theme.accent }}>Free</span>
                  </div>
                  <div style={styles.finalTotal}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}>Total</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: "bold", color: theme.accent }}>₹{totalPrice}</span>
                  </div>
                </div>

                <motion.button
                  onClick={handleProceedToPay}
                  disabled={isProcessing}
                  whileHover={{ scale: 1.02, backgroundColor: "#C5984B" }}
                  whileTap={{ scale: 0.98 }}
                  style={{...styles.checkoutBtn, opacity: isProcessing ? 0.7 : 1}}
                >
                  {isProcessing ? "Processing..." : <>Pay Now <FiArrowRight /></>}
                </motion.button>
                
                <p style={{ textAlign: "center", color: "#ccc", fontSize: "0.7rem", marginTop: "15px", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  <FiShield color="#4CAF50" /> Secure Transaction
                </p>

              </motion.div>
            </div>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCart;