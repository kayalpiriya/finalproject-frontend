


import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiTrash2, FiMinus, FiPlus, FiArrowRight, 
  FiShoppingBag, FiMapPin, FiCreditCard, FiShield, FiPackage 
} from "react-icons/fi";
// Imported icons for the Modal (Same as Home.js)
import { 
  X, LogIn, Lock, UserPlus, ShieldCheck, ShoppingBag as LucideBag, Star 
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext.jsx";

function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice, placeOrder } = useContext(CartContext);

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // --- LOGIN MODAL STATE ---
  const [showLoginModal, setShowLoginModal] = useState(false);

  // --- COLOR THEME FOR MODAL ---
  const accentPink = "rgb(214, 143, 143)";
  const darkText = "#1C1917";

  // --- AUTH CHECK FUNCTION ---
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!(token || user);
  };

  // --- MODAL HANDLERS ---
  const closeLoginModal = () => setShowLoginModal(false);

  const handleGoToLogin = () => {
    localStorage.setItem('redirectAfterLogin', '/cart'); // Redirect back to cart
    setShowLoginModal(false);
    setTimeout(() => navigate('/login'), 100);
  };

  const handleGoToRegister = () => {
    localStorage.setItem('redirectAfterLogin', '/cart');
    setShowLoginModal(false);
    setTimeout(() => navigate('/register'), 100);
  };

  // --- HANDLE PROCEED TO PAY ---
  const handleProceedToPay = async () => {
    // 1. 🔥 CHECK AUTH FIRST
    if (!isAuthenticated()) {
      setShowLoginModal(true);
      return;
    }

    // 2. CHECK ADDRESS
    if (!address) return alert("Please enter your delivery address to continue.");
    
    // 3. PROCEED
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
      fontFamily: "'DM Sans', sans-serif",
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
      flexWrap: "wrap",
      gap: "40px",
    },
    leftColumn: {
      flex: "2",
      minWidth: "300px",
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
      top: "120px",
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
      boxSizing: "border-box",
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

  // --- MODAL CSS ---
  const modalCss = `
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px;
    }
    .modal-content {
      background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%);
      border-radius: 32px; padding: 50px 40px;
      max-width: 480px; width: 100%; text-align: center;
      position: relative; box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
    
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #D6A85B; border-radius: 4px; }

    @media (max-width: 968px) {
      .responsive-grid { flex-direction: column !important; }
      .cart-card-responsive { flex-direction: column; align-items: flex-start !important; }
      .cart-controls-responsive { width: 100%; justify-content: space-between; margin-top: 15px; }
      .main-title { font-size: 2.5rem !important; }
    }
  `;

  return (
    <div style={styles.page}>
      <style>{modalCss}</style>

      <Navbar />
      
      {/* --- LOGIN MODAL START --- */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={closeLoginModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={closeLoginModal}
                style={{
                  position: "absolute", top: "20px", right: "20px",
                  background: "#F5F5F4", border: "none", borderRadius: "50%",
                  width: "44px", height: "44px", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}
              >
                <X size={20} color="#666" />
              </motion.button>

              {/* Lock Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                style={{
                  width: "90px", height: "90px",
                  background: `linear-gradient(135deg, ${accentPink} 0%, #e8a4a4 100%)`,
                  borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 30px", boxShadow: `0 15px 35px ${accentPink}50`,
                }}
              >
                <Lock size={40} color="white" />
              </motion.div>

              {/* Title */}
              <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: darkText, fontFamily: "'Playfair Display', serif" }}>
                Login Required
              </h2>

              {/* Message */}
              <p style={{ color: "#666", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "35px" }}>
                Please login securely to place your order and track delivery.
              </p>

              {/* Benefits Box */}
              <div style={{ background: "#F9FAFB", borderRadius: "16px", padding: "20px", marginBottom: "30px", textAlign: "left" }}>
                 <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <ShieldCheck size={16} color={accentPink} />
                    <span style={{ fontSize: "0.9rem", color: "#555" }}>Secure Transaction</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <LucideBag size={16} color={accentPink} />
                    <span style={{ fontSize: "0.9rem", color: "#555" }}>Track Your Order</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoToLogin}
                  style={{
                    background: `linear-gradient(135deg, ${accentPink} 0%, #c27878 100%)`,
                    color: "white", border: "none", padding: "18px 30px",
                    borderRadius: "50px", fontSize: "1.05rem", fontWeight: "bold",
                    cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "10px",
                    boxShadow: `0 10px 30px ${accentPink}40`,
                  }}
                >
                  <LogIn size={20} /> Login to Checkout
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoToRegister}
                  style={{
                    background: "white", color: darkText,
                    border: "2px solid #E5E5E5", padding: "16px 30px",
                    borderRadius: "50px", fontSize: "1rem", fontWeight: "600",
                    cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "10px",
                  }}
                >
                  <UserPlus size={18} /> Create Account
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- LOGIN MODAL END --- */}

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
                      <p style={styles.itemPrice}>LKR{item.price}</p>
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
                    <span>LKR{totalPrice}</span>
                  </div>
                  <div style={styles.totalRow}>
                    <span>Shipping</span>
                    <span style={{ color: theme.accent }}>Free</span>
                  </div>
                  <div style={styles.finalTotal}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}>Total</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: "bold", color: theme.accent }}>LKR{totalPrice}</span>
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