
import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, FiShoppingBag, FiEye, FiX, FiArrowRight, FiStar, FiHeart,
  FiChevronLeft, FiChevronRight, FiMic // <--- FIXED: Changed from FiMicrophone to FiMic
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext";

function AllProduct() {
  // =================================================================
  // 1. LOGIC
  // =================================================================
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  // Data State
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [focusedSearch, setFocusedSearch] = useState(false);
  
  // --- VOICE STATE ---
  const [isListening, setIsListening] = useState(false);

  // --- PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 

  const searchRef = useRef(null);

  // Fetch Data
  useEffect(() => {
    axios.get("https://finalproject-backend-7rqa.onrender.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Search Logic & Reset Pagination
  useEffect(() => {
    if (search === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); 
  }, [search, products]);

  // --- VOICE SEARCH FUNCTION ---
  const handleVoiceSearch = () => {
    // Check browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice search.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setFocusedSearch(true); // Highlight the bar visual
    };

    recognition.onend = () => {
      setIsListening(false);
      setFocusedSearch(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearch(transcript); // Automatically triggers the filter useEffect
    };

    recognition.start();
  };

  // --- PAGINATION CALCULATION ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Handler
  const handleAdd = (p, e) => {
    e.stopPropagation();
    addToCart(p);
    navigate(`/product/${p._id}`, { state: p });
  };

  // =================================================================
  // 2. STYLES & ANIMATIONS
  // =================================================================
  
  const theme = {
    bg: "#FAFAF9",           
    textMain: "#1C1917",     
    textSec: "#57534E",      
    accent: "#EA580C",       
    cardBg: "#FFFFFF",
    gold: "#F59E0B",
  };

  // Animation Variants
  const gridVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVars = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  const hoverRevealVars = {
    rest: { y: 20, opacity: 0 },
    hover: { 
      y: 0, opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const s = {
    page: {
      backgroundColor: theme.bg,
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
      color: theme.textMain,
      position: "relative",
      overflowX: "hidden",
    },
    container: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "120px 20px 100px 20px",
      position: "relative",
      zIndex: 2,
    },
    gradientBlur: {
      position: "absolute",
      width: "600px", height: "600px",
      borderRadius: "50%",
      filter: "blur(100px)",
      zIndex: 0,
      opacity: 0.6,
    },
    searchWrapper: {
      maxWidth: "600px",
      margin: "0 auto 60px auto",
      position: "relative",
    },
    searchBar: {
      display: "flex", alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.5)",
      borderRadius: "25px",
      padding: "15px 25px",
      boxShadow: focusedSearch 
        ? "0 20px 40px -10px rgba(234, 88, 12, 0.2)" 
        : "0 10px 25px -5px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
    },
    input: {
      flex: 1, border: "none", background: "transparent", outline: "none",
      fontSize: "1.1rem", color: theme.textMain, marginLeft: "15px"
    },
    card: {
      backgroundColor: theme.cardBg,
      borderRadius: "24px",
      overflow: "hidden",
      cursor: "pointer",
      position: "relative",
      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
      transition: "box-shadow 0.3s ease",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    imgContainer: {
      height: "320px",
      position: "relative",
      overflow: "hidden",
    },
    overlayButtons: {
      position: "absolute",
      bottom: "15px",
      left: "15px",
      right: "15px",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
    },
    actionBtn: {
      flex: 1,
      padding: "12px",
      borderRadius: "15px",
      border: "none",
      fontSize: "0.9rem",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      backdropFilter: "blur(5px)",
    },
    cardBody: {
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #F5F5F4",
    },
    modalOverlay: {
      position: "fixed", inset: 0, zIndex: 9999,
      backgroundColor: "rgba(28, 25, 23, 0.6)",
      backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"
    },
    modalContent: {
      backgroundColor: "white",
      width: "100%", maxWidth: "950px",
      borderRadius: "30px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)",
    },
    paginationWrapper: {
      display: "flex", justifyContent: "center", alignItems: "center",
      marginTop: "80px", gap: "10px"
    },
    pageBtn: {
      width: "45px", height: "45px",
      borderRadius: "12px",
      border: "none",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "1rem", fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease"
    }
  };

  return (
    <>
      <Navbar />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap');
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 35px;
        }
        
        @media (max-width: 800px) {
          .modal-flex { flex-direction: column !important; height: 90vh; overflow-y: auto; }
          .modal-img { height: 300px !important; }
        }
      `}</style>

      <div style={s.page}>
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity }}
          style={{ ...s.gradientBlur, top: "-10%", left: "-10%", background: "#FFE4E6" }} 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity }}
          style={{ ...s.gradientBlur, bottom: "10%", right: "-10%", background: "#FEF3C7" }} 
        />

        <div style={s.container}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", margin: 0, color: theme.textMain }}>
              Mufflix<span style={{ color: theme.accent, fontStyle: "italic" }}>Bakery</span>
            </h2>
            <p style={{ color: theme.textSec, fontSize: "1.1rem", marginTop: "10px" }}>
              Freshly baked with passion, served with love.
            </p>
          </motion.div>

          {/* --- SEARCH BAR WITH VOICE --- */}
          <div style={s.searchWrapper}>
            <div style={s.searchBar}>
              <FiSearch size={22} color={theme.accent} />
              
              <input
                style={s.input}
                placeholder={isListening ? "Listening..." : "Search for cakes, croissants..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setFocusedSearch(true)}
                onBlur={() => setFocusedSearch(false)}
              />

              {/* Microphone Button */}
              <motion.button
                onClick={handleVoiceSearch}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isListening ? { scale: [1, 1.2, 1], color: "#DC2626" } : { color: "#A8A29E" }}
                transition={isListening ? { repeat: Infinity, duration: 1.5 } : {}}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  marginLeft: "10px"
                }}
                title="Search by Voice"
              >
                {/* FIXED ICON USAGE HERE */}
                <FiMic size={20} />
              </motion.button>
            </div>
          </div>
          {/* --------------------------- */}

          <motion.div 
            className="product-grid"
            variants={gridVars}
            initial="hidden"
            animate="show"
            key={currentPage} 
          >
            {currentItems.length > 0 ? (
              currentItems.map((p) => (
                <motion.div
                  key={p._id}
                  variants={cardVars}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  onClick={() => setSelectedProduct(p)}
                  style={s.card}
                >
                  <div style={s.imgContainer}>
                    <motion.img 
                      src={p.img} 
                      alt={p.name}
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
                      transition={{ duration: 0.6 }}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    
                    <div style={{ position: "absolute", top: "15px", right: "15px", background: "rgba(255,255,255,0.9)", padding: "6px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                      <FiStar fill={theme.gold} stroke="none" /> 4.9
                    </div>

                    <motion.div 
                      variants={hoverRevealVars}
                      style={s.overlayButtons}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: theme.textMain, color: "white" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleAdd(p, e)}
                        style={{ ...s.actionBtn, backgroundColor: "white", color: theme.textMain }}
                      >
                        <FiShoppingBag /> Add
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: theme.accent, color: "white" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => { e.stopPropagation(); setSelectedProduct(p); }}
                        style={{ ...s.actionBtn, backgroundColor: "white", color: theme.textMain }}
                      >
                        <FiEye /> View
                      </motion.button>
                    </motion.div>
                  </div>

                  <div style={s.cardBody}>
                    <div style={{ overflow: "hidden" }}>
                      <h3 style={{ fontFamily: "'Playfair Display'", fontSize: "1.3rem", margin: "0 0 5px 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "180px" }}>{p.name}</h3>
                      <span style={{ fontSize: "0.85rem", color: theme.textSec }}>Freshly Baked</span>
                    </div>
                    <span style={{ fontSize: "1.3rem", fontWeight: "bold", color: theme.accent }}>LKR{p.price}</span>
                  </div>
                </motion.div>
              ))
            ) : (
              <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "50px", color: theme.textSec }}>
                <h3>No products found.</h3>
              </div>
            )}
          </motion.div>

          {filteredProducts.length > itemsPerPage && (
            <div style={s.paginationWrapper}>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#E7E5E4" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                style={{ 
                  ...s.pageBtn, 
                  backgroundColor: "white", 
                  color: currentPage === 1 ? "#D6D3D1" : theme.textMain,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer"
                }}
              >
                <FiChevronLeft size={20} />
              </motion.button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <motion.button
                  key={number}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePageChange(number)}
                  style={{
                    ...s.pageBtn,
                    backgroundColor: currentPage === number ? theme.accent : "white",
                    color: currentPage === number ? "white" : theme.textMain,
                    boxShadow: currentPage === number ? "0 10px 20px rgba(234, 88, 12, 0.3)" : s.pageBtn.boxShadow
                  }}
                >
                  {number}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#E7E5E4" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                style={{ 
                  ...s.pageBtn, 
                  backgroundColor: "white", 
                  color: currentPage === totalPages ? "#D6D3D1" : theme.textMain,
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer"
                }}
              >
                <FiChevronRight size={20} />
              </motion.button>
            </div>
          )}

        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={s.modalOverlay}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="modal-flex"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={s.modalContent}
            >
              <div className="modal-img" style={{ flex: 1, position: "relative" }}>
                <img src={selectedProduct.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
              </div>

              <div style={{ flex: 1.2, padding: "50px", display: "flex", flexDirection: "column", position: "relative" }}>
                <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "25px", right: "25px", border: "none", background: "transparent", cursor: "pointer" }}>
                   <FiX size={24} color="#999" />
                </button>

                <span style={{ color: theme.accent, fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.8rem" }}>Signature Selection</span>
                
                <h2 style={{ fontFamily: "'Playfair Display'", fontSize: "3rem", margin: "10px 0 20px 0", lineHeight: "1.1" }}>
                  {selectedProduct.name}
                </h2>
                
                <h3 style={{ fontSize: "2rem", margin: "0 0 30px 0", color: theme.textMain }}>
                  LKR{selectedProduct.price} <span style={{ fontSize: "1rem", color: "#999", fontWeight: "normal" }}>/ piece</span>
                </h3>

                <p style={{ color: theme.textSec, lineHeight: "1.8", fontSize: "1.05rem", marginBottom: "40px" }}>
                  {selectedProduct.description || "Hand-kneaded dough, fermented for 48 hours, and baked in our stone ovens. A perfect blend of crispy texture and soft, airy crumb."}
                </p>

                <div style={{ marginTop: "auto", display: "flex", gap: "15px" }}>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(234, 88, 12, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => { handleAdd(selectedProduct, e); setSelectedProduct(null); }}
                    style={{
                      flex: 1, background: theme.accent, color: "white", border: "none",
                      padding: "18px", borderRadius: "16px", fontSize: "1rem", fontWeight: "bold",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}
                  >
                    <FiShoppingBag /> Add to Cart
                  </motion.button>
                  
                  <motion.button
                     whileHover={{ scale: 1.02, backgroundColor: "#F5F5F4" }}
                     whileTap={{ scale: 0.98 }}
                     style={{
                       width: "60px", background: "white", border: "1px solid #E5E5E5",
                       borderRadius: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                     }}
                  >
                    <FiHeart size={22} color={theme.textMain} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default AllProduct;