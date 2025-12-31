

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBlogs } from "../api/blogApi";
import { 
  ArrowRight, 
  ShoppingBag, 
  Star, 
  Search, 
  ArrowUpNarrowWide, 
  ArrowDownNarrowWide, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Clock,
  X, 
  LogIn, 
  Lock,
  UserPlus,
  ShieldCheck
} from "lucide-react";

// --- IMPORTING IMAGES ---
// உங்கள் assets folder-ல் இந்த பெயர்களில் படங்கள் இருப்பதை உறுதி செய்து கொள்ளுங்கள்
import cakeImg from "../assets/cakee1.jpg";
import cupcakeImg from "../assets/vanilla_cupcake_featured_blog.webp";
import bakerImg from "../assets/instagram-bakers-1.jpg";
import bunImg from "../assets/bun1.jpg";
import breadImg from "../assets/breadd.jpg";
import tartImg from "../assets/b3ad51c12c782d3998ea6979c4f7372a.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  
  // --- COLOR THEME ---
  const accentPink = "rgb(214, 143, 143)";
  const darkText = "#1C1917";

  // --- CAROUSEL STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // --- FILTER STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // --- TIMER STATE ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // --- LOGIN MODAL STATE ---
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [attemptedAction, setAttemptedAction] = useState(null);

  // --- CHECK IF USER IS LOGGED IN ---
  const isAuthenticated = useCallback(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const sessionToken = sessionStorage.getItem('token');
    return !!(token || user || sessionToken);
  }, []);

  // --- OPEN MODAL FUNCTION ---
  const openLoginModal = useCallback((actionType, actionName, actionId = null) => {
    setAttemptedAction({ type: actionType, name: actionName, id: actionId });
    setShowLoginModal(true);
  }, []);

  // --- CLOSE MODAL FUNCTION ---
  const closeLoginModal = useCallback(() => {
    setShowLoginModal(false);
    setTimeout(() => {
      setAttemptedAction(null);
    }, 300);
  }, []);

  // --- HANDLE PRODUCT CLICK ---
  const handleProductClick = useCallback((e, productId, productName) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAuthenticated()) {
      navigate('/allproduct');
    } else {
      openLoginModal('product', productName, productId);
    }
  }, [isAuthenticated, navigate, openLoginModal]);

  // --- HANDLE ADD TO CART ---
  const handleAddToCart = useCallback((e, product) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAuthenticated()) {
      navigate('/allproduct');
    } else {
      openLoginModal('cart', product.name);
    }
  }, [isAuthenticated, navigate, openLoginModal]);

  // --- HANDLE CATEGORY CLICK ---
  const handleCategoryClick = useCallback((e, categoryName) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAuthenticated()) {
      navigate('/allproduct');
    } else {
      openLoginModal('category', categoryName);
    }
  }, [isAuthenticated, navigate, openLoginModal]);

  // --- HANDLE VIEW COLLECTION ---
  const handleViewCollection = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAuthenticated()) {
      navigate('/allproduct');
    } else {
      openLoginModal('collection', 'View Collection');
    }
  }, [isAuthenticated, navigate, openLoginModal]);

  // --- HANDLE ORDER NOW (DEAL) ---
  const handleOrderDeal = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAuthenticated()) {
      navigate('/allproduct');
    } else {
      openLoginModal('deal', 'Chocolate Truffle Explosion Cake');
    }
  }, [isAuthenticated, navigate, openLoginModal]);

  // --- HANDLE READ STORY ---
  const handleReadStory = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAuthenticated()) {
      navigate('/about');
    } else {
      openLoginModal('story', 'Our Story');
    }
  }, [isAuthenticated, navigate, openLoginModal]);

  // --- HANDLE LOGIN REDIRECT ---
  const handleGoToLogin = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('redirectAfterLogin', '/allproduct');
    setShowLoginModal(false);
    setTimeout(() => {
      navigate('/login');
    }, 100);
  }, [navigate]);

  // --- HANDLE REGISTER REDIRECT ---
  const handleGoToRegister = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem('redirectAfterLogin', '/allproduct');
    setShowLoginModal(false);
    setTimeout(() => {
      navigate('/register');
    }, 100);
  }, [navigate]);

  // --- HANDLE BACKDROP CLICK ---
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      closeLoginModal();
    }
  }, [closeLoginModal]);

  // --- HANDLE MODAL CONTENT CLICK ---
  const handleModalContentClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  // --- GET MODAL MESSAGE ---
  const getModalMessage = useCallback(() => {
    if (!attemptedAction) return "Please login to continue browsing our delicious products.";
    
    switch (attemptedAction.type) {
      case 'cart':
        return `Please login to add "${attemptedAction.name}" to your cart and enjoy our delicious treats!`;
      case 'product':
        return `Please login to view details of "${attemptedAction.name}" and place your order.`;
      case 'category':
        return `Please login to explore our "${attemptedAction.name}" collection.`;
      case 'collection':
        return "Please login to view our exclusive collection of baked goods.";
      case 'deal':
        return `Please login to grab this amazing deal on "${attemptedAction.name}"!`;
      case 'story':
        return "Please login to read more about our story and journey.";
      default:
        return "Please login to continue browsing our delicious products.";
    }
  }, [attemptedAction]);

  // --- DATA (UPDATED WITH IMPORTED IMAGES) ---
  const heroSlides = [
    {
      id: 1,
      img: cakeImg, // Changed from string path
      title: "Velvet Rose",
      subtitle: "Signature Collection",
      desc: "Rich Belgian chocolate layers with artisan ganache."
    },
    {
      id: 2,
      img: cupcakeImg, // Changed from string path
      title: "Vanilla Clouds",
      subtitle: "Freshly Baked",
      desc: "Soft, airy textures meeting the perfect buttercream."
    },
    {
      id: 3,
      img: bakerImg, // Changed from string path
      title: "Parisian Morning",
      subtitle: "Authentic Pastry",
      desc: "Butter croissants baked to golden perfection daily."
    }
  ];

  const allProducts = [
    { id: 1, img: bunImg, name: "Cinnamon Roll", price: 4.50, rating: 4.8, tag: "Hot" },
    { id: 2, img: cakeImg, name: "Royal Cake", price: 32.00, rating: 5.0, tag: "Luxury" },
    { id: 3, img: breadImg, name: "Sourdough", price: 6.00, rating: 4.9, tag: "Organic" },
    { id: 4, img: tartImg, name: "Berry Tart", price: 8.50, rating: 4.7, tag: "Fresh" },
    { id: 5, img: bakerImg, name: "Croissant", price: 5.00, rating: 4.9, tag: "French" },
    { id: 6, img: cupcakeImg, name: "Cupcake", price: 3.50, rating: 4.6, tag: "Sweet" },
  ];

  const categories = [
    { name: " Breads", img: breadImg, count: "12 Varieties" },
    { name: "Celebration Cakes", img: cakeImg, count: "Custom Orders" },
    { name: "Morning Pastry", img: bakerImg, count: "Fresh Daily" },
  ];

  // --- EFFECTS ---
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    getBlogs()
      .then((data) => setBlogs(data.slice(0, 3)))
      .catch((err) => console.error("Error fetching blogs:", err));

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); 

    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdownTimer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => {
      clearInterval(slideTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showLoginModal) {
        closeLoginModal();
      }
    };

    if (showLoginModal) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [showLoginModal, closeLoginModal]);

  useEffect(() => {
    if (showLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLoginModal]);

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortOrder === "low") result.sort((a, b) => a.price - b.price);
    if (sortOrder === "high") result.sort((a, b) => b.price - a.price);
    return result;
  }, [searchTerm, sortOrder]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
          
          body { 
            margin: 0; 
            background-color: #FAFAF9; 
            color: #1C1917; 
            font-family: 'DM Sans', sans-serif; 
          }
          
          h1, h2, h3 { 
            font-family: 'Playfair Display', serif; 
          }
          
          .wrapper { 
            max-width: 1300px; 
            margin: 0 auto; 
            padding: 0 20px; 
          }
          
          .product-grid { 
            display: grid; 
            gap: 30px; 
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
          }
          
          .cat-grid { 
            display: grid; 
            gap: 20px; 
            grid-template-columns: 1fr; 
          }
          
          .blog-container { 
            display: grid; 
            gap: 40px; 
            grid-template-columns: 1fr; 
          }

          @media (min-width: 768px) {
            .cat-grid { 
              grid-template-columns: repeat(3, 1fr); 
            }
          }

          @media (min-width: 1024px) {
            .blog-container { 
              grid-template-columns: 1.5fr 1fr; 
            }
          }

          .glass { 
            background: rgba(255, 255, 255, 0.8); 
            backdrop-filter: blur(12px); 
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.3); 
          }
          
          .timer-box { 
            background: rgba(255,255,255,0.1); 
            backdrop-filter: blur(5px); 
            -webkit-backdrop-filter: blur(5px);
            border-radius: 12px; 
            padding: 15px; 
            min-width: 70px; 
            text-align: center; 
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .modal-content {
            background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%);
            border-radius: 32px;
            padding: 50px 40px;
            max-width: 480px;
            width: 100%;
            text-align: center;
            position: relative;
            box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.35);
            border: 1px solid rgba(255, 255, 255, 0.5);
          }

          input:focus, button:focus {
            outline: none;
          }
        `}
      </style>

      <Navbar />
      <br/><br/><br/>

      {/* LOGIN MODAL STARTS HERE (Same as before) */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-content"
              onClick={handleModalContentClick}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeLoginModal();
                }}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "#F5F5F4",
                  border: "none",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={20} color="#666" />
              </motion.button>

              {/* Lock Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                style={{
                  width: "90px",
                  height: "90px",
                  background: `linear-gradient(135deg, ${accentPink} 0%, #e8a4a4 100%)`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  boxShadow: `0 15px 35px ${accentPink}50`,
                }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Lock size={40} color="white" />
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: "2rem",
                  marginBottom: "15px",
                  color: darkText,
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: "600",
                }}
              >
                Login Required
              </motion.h2>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  color: "#666",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "35px",
                  padding: "0 10px",
                }}
              >
                {getModalMessage()}
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                style={{
                  background: "#F9FAFB",
                  borderRadius: "16px",
                  padding: "20px",
                  marginBottom: "30px",
                  textAlign: "left",
                }}
              >
                <p style={{ 
                  fontSize: "0.85rem", 
                  color: "#888", 
                  marginBottom: "12px", 
                  fontWeight: "600", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.5px",
                  margin: "0 0 12px 0"
                }}>
                  Why create an account?
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <ShoppingBag size={16} color={accentPink} />
                    <span style={{ fontSize: "0.9rem", color: "#555" }}>Easy ordering & checkout</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Star size={16} color={accentPink} />
                    <span style={{ fontSize: "0.9rem", color: "#555" }}>Exclusive member discounts</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <ShieldCheck size={16} color={accentPink} />
                    <span style={{ fontSize: "0.9rem", color: "#555" }}>Track your orders easily</span>
                  </div>
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoToLogin}
                  style={{
                    background: `linear-gradient(135deg, ${accentPink} 0%, #c27878 100%)`,
                    color: "white",
                    border: "none",
                    padding: "18px 30px",
                    borderRadius: "50px",
                    fontSize: "1.05rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: `0 10px 30px ${accentPink}40`,
                  }}
                >
                  <LogIn size={20} />
                  Login to Continue
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoToRegister}
                  style={{
                    background: "white",
                    color: darkText,
                    border: "2px solid #E5E5E5",
                    padding: "16px 30px",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <UserPlus size={18} />
                  Create New Account
                </motion.button>
              </motion.div>

              {/* Continue Browsing */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  marginTop: "28px",
                  marginBottom: "0",
                  fontSize: "0.95rem",
                  color: "#999",
                }}
              >
                or{" "}
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeLoginModal();
                  }}
                  style={{ 
                    color: accentPink, 
                    cursor: "pointer", 
                    fontWeight: "600",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  continue browsing
                </span>
              </motion.p>

              {/* Decorative Blurs */}
              <div style={{
                position: "absolute",
                top: "-50px",
                left: "-50px",
                width: "150px",
                height: "150px",
                background: accentPink,
                borderRadius: "50%",
                filter: "blur(80px)",
                opacity: 0.2,
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                width: "100px",
                height: "100px",
                background: accentPink,
                borderRadius: "50%",
                filter: "blur(60px)",
                opacity: 0.15,
                pointerEvents: "none",
              }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="wrapper" style={{ paddingTop: "20px", paddingBottom: "100px" }}>
        
        {/* 1. HERO CAROUSEL */}
        <section style={{ position: "relative", height: "550px", borderRadius: "30px", overflow: "hidden", marginBottom: "60px", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              style={{ position: "absolute", inset: 0 }}
            >
              {/* Using imported image variable here */}
              <img src={heroSlides[currentSlide].img} alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
            </motion.div>
          </AnimatePresence>

          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 60px", zIndex: 10 }}>
            <div style={{ maxWidth: "550px", color: "white" }}>
              <motion.div key={`txt-${currentSlide}`} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <span style={{ background: accentPink, padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", color: "white" }}>
                  {heroSlides[currentSlide].subtitle}
                </span>
                <h1 style={{ fontSize: "4rem", lineHeight: "1", margin: "20px 0" }}>{heroSlides[currentSlide].title}</h1>
                <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "30px", fontWeight: "300" }}>{heroSlides[currentSlide].desc}</p>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewCollection}
                  style={{ border: "1px solid white", background: "transparent", color: "white", padding: "15px 40px", borderRadius: "50px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}
                >
                  View Collection
                </motion.button>
              </motion.div>
            </div>
          </div>
          
          <div style={{ position: "absolute", bottom: "30px", right: "30px", display: "flex", gap: "10px", zIndex: 20 }}>
            <button onClick={prevSlide} style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(5px)" }}><ChevronLeft /></button>
            <button onClick={nextSlide} style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white", border: "none", color: "black", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronRight /></button>
          </div>

          <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 20 }}>
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: currentSlide === idx ? "30ypx" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background: currentSlide === idx ? accentPink : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </section>

        {/* 2. SEARCH & FILTER */}
        <div style={{ top: "20px", zIndex: 100, marginBottom: "50px" }}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass" style={{ borderRadius: "100px", padding: "10px 15px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, paddingLeft: "15px" }}>
              <Search size={20} color="#888" />
              <input type="text" placeholder="Find your cravings..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ border: "none", background: "transparent", fontSize: "1rem", width: "100%", color: "#333", height: "40px", outline: "none" }} />
            </div>
            <div style={{ display: "flex", gap: "5px", paddingRight: "5px" }}>
              <button onClick={() => setSortOrder("default")} style={{ padding: "10px 20px", borderRadius: "30px", border: "none", background: sortOrder === "default" ? "#1C1917" : "#F5F5F4", color: sortOrder === "default" ? "white" : "#666", fontWeight: "bold", cursor: "pointer", transition: "0.3s" }}>All</button>
              <button onClick={() => setSortOrder("low")} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid #eee", background: sortOrder === "low" ? accentPink : "white", color: sortOrder === "low" ? "white" : "#666", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ArrowDownNarrowWide size={18}/></button>
              <button onClick={() => setSortOrder("high")} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid #eee", background: sortOrder === "high" ? accentPink : "white", color: sortOrder === "high" ? "white" : "#666", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ArrowUpNarrowWide size={18}/></button>
            </div>
          </motion.div>
        </div>

        {/* 3. PRODUCT GRID */}
        <section style={{ marginBottom: "100px" }}>
          <motion.div className="product-grid" layout>
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <motion.div 
                    layout 
                    key={item.id} 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.9 }} 
                    transition={{ duration: 0.4 }} 
                    onClick={(e) => handleProductClick(e, item.id, item.name)} 
                    style={{ cursor: "pointer" }}
                  >
                    <motion.div whileHover={{ y: -8 }} style={{ background: "white", borderRadius: "24px", padding: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                      <div style={{ height: "240px", borderRadius: "20px", overflow: "hidden", position: "relative", marginBottom: "15px" }}>
                        {/* Using imported image variable here */}
                        <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: "12px", left: "12px", background: accentPink, color: "white", padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase" }}>{item.tag}</div>
                        <motion.button 
                          whileHover={{ scale: 1.1 }} 
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => handleAddToCart(e, item)}
                          style={{ position: "absolute", bottom: "12px", right: "12px", width: "40px", height: "40px", borderRadius: "50%", background: "#1C1917", color: "white", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                        >
                          <ShoppingBag size={16} />
                        </motion.button>
                      </div>
                      <div style={{ padding: "0 8px 5px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                          <h3 style={{ fontSize: "1.1rem", margin: 0, fontWeight: "700" }}>{item.name}</h3>
                          <span style={{ fontSize: "1.1rem", fontWeight: "700", color: accentPink }}>${item.price.toFixed(2)}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.85rem", color: "#888" }}>
                          <Star size={12} fill={accentPink} stroke="none"/> {item.rating} Rating
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ gridColumn: "1 / -1", textAlign: "center", padding: "60px 20px", color: "#888" }}>
                  <Search size={48} style={{ marginBottom: "20px", opacity: 0.5 }} />
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>No products found</h3>
                  <p>Try searching for something else</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 4. FLASH DEAL */}
        <section style={{ marginBottom: "100px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: "#1C1917", borderRadius: "30px", overflow: "hidden", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 400px", padding: "60px", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: accentPink, marginBottom: "15px" }}>
                <Zap size={20} fill={accentPink} stroke={accentPink} />
                <span style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>Deal of the Day</span>
              </div>
              
              <h2 style={{ fontSize: "3.5rem", lineHeight: "1.1", margin: "0 0 20px 0" }}>Chocolate Truffle <br/> Explosion Cake</h2>
              <p style={{ color: "#A8A29E", fontSize: "1.1rem", marginBottom: "40px" }}>Get 40% OFF on our best-selling signature cake. Limited quantity available for this batch.</p>
              
              <div style={{ display: "flex", gap: "15px", marginBottom: "40px" }}>
                <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.days}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Days</div></div>
                <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.hours}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Hrs</div></div>
                <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.minutes}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Mins</div></div>
                <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold", color: accentPink }}>{timeLeft.seconds}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Secs</div></div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleOrderDeal} style={{ background: accentPink, color: "white", border: "none", padding: "15px 35px", borderRadius: "50px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
                Order Now - $24.99
              </motion.button>
            </div>

            <div style={{ flex: "1 1 400px", height: "500px", position: "relative" }}>
              {/* Using imported image variable here */}
              <img src={cakeImg} alt="Deal" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ position: "absolute", top: "30px", right: "30px", width: "90px", height: "90px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1917", flexDirection: "column", fontWeight: "bold", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}>
                <span style={{ fontSize: "1.5rem" }}>40%</span>
                <span style={{ fontSize: "0.8rem", color: accentPink }}>OFF</span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 5. BAKED WITH PASSION */}
        <section style={{ marginBottom: "100px", padding: "0 10px" }}>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ background: "#1C1917", borderRadius: "40px", overflow: "hidden", position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", alignItems: "center" }}>
            <div style={{ position: "relative", height: "600px", overflow: "hidden" }}>
              {/* Using imported image variable here */}
              <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 1.5 }} src={bakerImg} alt="Baker" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,25,23,0.2), #1C1917)" }} />
              
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} style={{ position: "absolute", bottom: "50px", left: "40px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "20px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", maxWidth: "250px" }}>
                <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill={accentPink} stroke="none" />)}
                </div>
                <p style={{ color: "white", fontSize: "0.9rem", margin: 0, lineHeight: "1.5" }}>"The texture of their sourdough is simply unmatched."</p>
              </motion.div>
            </div>

            <div style={{ padding: "60px 40px", color: "white", position: "relative" }}>
              <div style={{ position: "absolute", top: "0", right: "0", width: "300px", height: "300px", background: accentPink, borderRadius: "50%", filter: "blur(120px)", opacity: 0.15, pointerEvents: "none" }} />

              <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                  <div style={{ width: "50px", height: "2px", background: accentPink }} />
                  <span style={{ textTransform: "uppercase", letterSpacing: "2px", color: accentPink, fontWeight: "bold" }}>Our Philosophy</span>
                </div>

                <h2 style={{ fontSize: "3.5rem", lineHeight: "1.1", marginBottom: "30px", fontFamily: "'Playfair Display', serif" }}>
                  Baked with <br/> 
                  <span style={{ color: "transparent", WebkitTextStroke: "1px white", fontStyle: "italic" }}>Pure</span> Passion.
                </h2>

                <p style={{ color: "#A8A29E", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "40px", maxWidth: "500px" }}>
                  We believe that time is an ingredient. From our 48-hour fermentation process to the hand-selection of grains, we never rush nature.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}><Clock size={20} color={accentPink} /></div>
                    <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Slow Fermented</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}><Zap size={20} color={accentPink} /></div>
                    <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Daily Fresh</span>
                  </div>
                </div>

                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleReadStory} style={{ background: accentPink, color: "white", padding: "18px 45px", borderRadius: "50px", border: "none", fontSize: "1rem", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", boxShadow: `0 10px 25px ${accentPink}40` }}>
                  Read Our Story <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 6. COLLECTIONS */}
        <section style={{ marginBottom: "100px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Our Collections</h2>
          <div className="cat-grid">
            {categories.map((cat, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} style={{ position: "relative", height: "350px", borderRadius: "24px", overflow: "hidden", cursor: "pointer" }} onClick={(e) => handleCategoryClick(e, cat.name)}>
                {/* Using imported image variable here */}
                <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} src={cat.img} alt={cat.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                <div style={{ position: "absolute", bottom: "30px", left: "30px", color: "white" }}>
                  <h3 style={{ fontSize: "2rem", margin: 0 }}>{cat.name}</h3>
                  <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>{cat.count}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. BLOGS */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2.5rem", margin: 0 }}>Culinary Stories</h2>
            <button onClick={() => navigate("/blogs")} style={{ background: "transparent", border: "none", color: accentPink, fontWeight: "bold", cursor: "pointer", fontSize: "1rem" }}>View Journal</button>
          </div>

          <div className="blog-container">
            {blogs.length > 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.01 }} style={{ position: "relative", height: "100%", minHeight: "400px", borderRadius: "30px", overflow: "hidden", cursor: "pointer" }} onClick={() => navigate(`/blogs/${blogs[0]._id}`)}>
                {/* Blog images come from API, so keeping as is */}
                <img src={blogs[0].image} alt={blogs[0].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "40px", left: "40px", right: "40px", color: "white" }}>
                  <span style={{ background: accentPink, padding: "5px 10px", borderRadius: "5px", fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase" }}>Featured</span>
                  <h3 style={{ fontSize: "2.5rem", margin: "15px 0", lineHeight: "1.1" }}>{blogs[0].title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "bold" }}>Read Full Story <ArrowRight size={16}/></div>
                </div>
              </motion.div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {blogs.slice(1, 3).map((blog, i) => (
                <motion.div key={blog._id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} whileHover={{ x: -5 }} style={{ display: "flex", gap: "20px", background: "white", padding: "15px", borderRadius: "20px", cursor: "pointer", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", flex: 1 }} onClick={() => navigate(`/blogs/${blog._id}`)}>
                  <div style={{ width: "140px", borderRadius: "15px", overflow: "hidden", flexShrink: 0 }}>
                    <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "#888", fontWeight: "bold", marginBottom: "5px" }}>{new Date().toLocaleDateString()}</span>
                    <h3 style={{ fontSize: "1.3rem", margin: "0 0 10px 0", lineHeight: "1.2" }}>{blog.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.9rem", color: accentPink, fontWeight: "bold" }}>Read <ArrowRight size={14}/></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}