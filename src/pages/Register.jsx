

// my page //

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowRight, FiFacebook, FiGithub, FiArrowLeft } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // --- THEME COLORS ---
  const colors = {
    accent: "#E76F51",            // Modern Warm Terracotta
    accentSoft: "rgba(231, 111, 81, 0.08)", 
    textDark: "#264653",          // Deep Blue-Green
    textLight: "#78716C",         // Stone Grey
    bgWhite: "#FFFFFF",
    inputBg: "#FAFAF9"
  };

  const validateForm = () => {
    let temp = {};
    if (!name.trim()) temp.name = "Name is required";
    if (!email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
    if (!password.trim()) temp.password = "Password is required";
    else if (password.length < 6) temp.password = "Password must be at least 6 characters";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    
    try {
      await registerUser({ name, email, password });
      toast.success("🎉 Welcome to the family! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error("❌ Registration failed! Email might be taken.");
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: colors.bgWhite, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: colors.textDark, position: "relative", overflowX: "hidden" }}>
      
      {/* --- INLINE CSS & ANIMATIONS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        /* Input Styles */
        .modern-input {
          width: 100%;
          padding: 18px 20px 18px 55px;
          background-color: ${colors.inputBg};
          border: 2px solid transparent;
          border-radius: 16px;
          font-size: 1rem;
          color: ${colors.textDark};
          transition: all 0.3s ease;
          outline: none;
        }
        .modern-input:focus {
          background-color: #fff;
          border-color: ${colors.accent};
          box-shadow: 0 8px 20px rgba(231, 111, 81, 0.1);
        }
        .input-group { position: relative; margin-bottom: 20px; }
        .input-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 20px;
          color: #A8A29E;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }
        .modern-input:focus + .input-icon { color: ${colors.accent}; }

        /* Button Styles */
        .btn-primary {
          width: 100%;
          padding: 18px;
          background-color: ${colors.accent};
          color: white;
          border: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(231, 111, 81, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(231, 111, 81, 0.35);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* Social Buttons */
        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          border-color: ${colors.accent};
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
      `}</style>

      <Navbar />

      {/* --- BACKGROUND DECORATION --- */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div className="animate-float" style={{ position: "absolute", top: "-5%", left: "-5%", width: "500px", height: "500px", backgroundColor: colors.accent, opacity: "0.05", filter: "blur(100px)", borderRadius: "50%" }}></div>
        <div className="animate-float" style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "600px", height: "600px", backgroundColor: "#F4A261", opacity: "0.05", filter: "blur(100px)", borderRadius: "50%", animationDelay: "2s" }}></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px 40px 20px", position: "relative", zIndex: 1 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          style={{ 
            backgroundColor: "white",
            width: "100%",
            maxWidth: "1100px",
            borderRadius: "40px",
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row", 
            minHeight: "700px"
          }}
          className="flex-col-reverse lg:flex-row" // Responsive layout
        >

          {/* --- LEFT: IMAGE / SIGN IN SECTION (Colored) --- */}
          <div style={{ flex: "1", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px", minHeight: "300px" }}>
             
             {/* Background Image with Overlay */}
             <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <img src="src/assets/cakee1.jpg" alt="Pastries" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, backgroundColor: colors.accent, opacity: "0.85", mixBlendMode: "multiply" }}></div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)" }}></div>
             </div>

             {/* Decorative Circles */}
             <div className="animate-float" style={{ position: "absolute", top: "-20%", right: "-20%", width: "400px", height: "400px", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "50%", zIndex: 1 }}></div>
             <div className="animate-float" style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "300px", height: "300px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "50%", zIndex: 1, animationDelay: "2s" }}></div>

             {/* Content */}
             <div style={{ position: "relative", zIndex: 10, color: "white", textAlign: "center", maxWidth: "350px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div style={{ width: "80px", height: "80px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 30px auto", backdropFilter: "blur(10px)" }}>
                    <FiUser size={35} color="white" />
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", margin: "0 0 20px 0", lineHeight: "1.1" }}>Welcome Back</h2>
                  <p style={{ fontSize: "1.1rem", opacity: "0.9", lineHeight: "1.6", marginBottom: "40px", fontWeight: "300" }}>
                    Already part of our community? Sign in to access your account.
                  </p>
                  <button 
                    onClick={() => navigate("/login")}
                    style={{ 
                      padding: "15px 40px", 
                      backgroundColor: "transparent", 
                      color: "white", 
                      border: "2px solid white", 
                      borderRadius: "30px", 
                      fontSize: "1rem", 
                      fontWeight: "700", 
                      cursor: "pointer", 
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => { e.target.style.background = "white"; e.target.style.color = colors.accent; }}
                    onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "white"; }}
                  >
                    Sign In
                  </button>
                </motion.div>
             </div>
          </div>

          {/* --- RIGHT: REGISTER FORM SECTION (White) --- */}
          <div style={{ flex: "1.2", padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }}
            >
              <div style={{ marginBottom: "30px", textAlign: "left" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", margin: "0 0 10px 0", lineHeight: "1", color: colors.textDark }}>Create Account</h2>
                <p style={{ color: colors.textLight, fontSize: "1.1rem" }}>Join us for exclusive treats & rewards.</p>
              </div>

              {/* Social Login */}
              <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
                <button className="social-btn"><FcGoogle size={24} /></button>
                <button className="social-btn"><FiFacebook size={24} color="#1877F2" /></button>
                <button className="social-btn"><FiGithub size={24} color="#333" /></button>
              </div>

              <div style={{ position: "relative", textAlign: "center", marginBottom: "30px" }}>
                <div style={{ height: "1px", background: "#E5E7EB", width: "100%", position: "absolute", top: "50%" }}></div>
                <span style={{ background: "white", padding: "0 15px", color: "#9CA3AF", fontSize: "0.85rem", position: "relative", fontWeight: "500" }}>OR USE EMAIL</span>
              </div>

              <form onSubmit={handleRegister}>
                {/* Name */}
                <div className="input-group">
                  <div style={{position:'relative'}}>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="modern-input" />
                    <FiUser className="input-icon" />
                  </div>
                  {errors.name && <span style={{ color: "#EF4444", fontSize: "0.8rem", marginLeft: "10px", marginTop: "5px", display: "block" }}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="input-group">
                  <div style={{position:'relative'}}>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="modern-input" />
                    <FiMail className="input-icon" />
                  </div>
                  {errors.email && <span style={{ color: "#EF4444", fontSize: "0.8rem", marginLeft: "10px", marginTop: "5px", display: "block" }}>{errors.email}</span>}
                </div>

                {/* Password */}
                <div className="input-group">
                  <div style={{position:'relative'}}>
                    <input type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} className="modern-input" />
                    <FiLock className="input-icon" />
                  </div>
                  {errors.password && <span style={{ color: "#EF4444", fontSize: "0.8rem", marginLeft: "10px", marginTop: "5px", display: "block" }}>{errors.password}</span>}
                </div>

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Creating..." : "Sign Up"} <FiArrowRight />
                </button>
              </form>

              <p style={{ marginTop: "30px", textAlign: "center", color: colors.textLight }}>
                Already have an account? <button onClick={() => navigate("/login")} style={{ color: colors.accent, fontWeight: "700", background: "none", border: "none", cursor: "pointer" }}>Sign In</button>
              </p>
            </motion.div>

          </div>

        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { FiUser, FiMail, FiLock, FiArrowRight, FiFacebook, FiGithub, FiCheck } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // --- CONFIGURATION ---
//   const colors = {
//     bg: "#FDFCF8",
//     primary: "#E76F51",
//     primaryDark: "#C8553D",
//     textMain: "#2A2A2A",
//     textLight: "#858585",
//     inputBg: "#F5F5F5",
//     white: "#FFFFFF"
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await registerUser({ name, email, password });
//       toast.success("🎉 Account created successfully!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error("Registration failed.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />
      
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');
        
//         /* Slow Zoom Effect */
//         @keyframes zoomPanReverse {
//           0% { transform: scale(1) translate(0,0); }
//           50% { transform: scale(1.1) translate(10px, 5px); }
//           100% { transform: scale(1) translate(0,0); }
//         }
//         .ken-burns { animation: zoomPanReverse 25s infinite ease-in-out; }

//         .custom-input {
//           width: 100%; padding: 18px 20px 18px 50px; background: ${colors.inputBg};
//           border: 2px solid transparent; border-radius: 18px; font-size: 1rem; outline: none; transition: all 0.3s ease;
//         }
//         .custom-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 8px 20px rgba(231,111,81,0.15); }
        
//         .primary-btn {
//           width: 100%; padding: 18px; background: ${colors.primary}; color: white; border: none;
//           border-radius: 18px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: all 0.3s ease;
//           box-shadow: 0 10px 25px rgba(231,111,81,0.3); display: flex; justify-content: center; alignItems: center; gap: 10px;
//         }
//         .primary-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(231,111,81,0.4); background: ${colors.primaryDark}; }
        
//         .social-btn {
//            width: 60px; height: 60px; border-radius: 50%; border: 2px solid #F0F0F0; background: white;
//            display: flex; align-items: center; justify-content: center; font-size: 1.4rem; cursor: pointer;
//            transition: all 0.3s ease;
//         }
//         .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px 60px 20px" }}>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           style={{ 
//             width: "100%", maxWidth: "1100px", backgroundColor: colors.white, borderRadius: "40px",
//             boxShadow: "0 40px 80px -20px rgba(0,0,0,0.08)", overflow: "hidden", display: "flex", 
//             flexDirection: "row", minHeight: "720px", border: "1px solid rgba(0,0,0,0.02)"
//           }}
//           className="flex-col-reverse lg:flex-row" // Responsive fix
//         >

//           {/* --- LEFT: FORM SECTION --- */}
//           <div style={{ flex: 1.2, padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
             
//              <motion.div 
//                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
//                style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }}
//              >
//                 <div style={{ marginBottom: "30px" }}>
//                   <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: colors.textMain, margin: 0, lineHeight: 1 }}>Join Us</h1>
//                   <p style={{ color: colors.textLight, marginTop: "10px" }}>Start your delicious journey today.</p>
//                 </div>

//                 {/* Socials */}
//                 <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
//                    <button className="social-btn"><FcGoogle /></button>
//                    <button className="social-btn"><FiFacebook color="#1877F2" /></button>
//                    <button className="social-btn"><FiGithub color="#333" /></button>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px" }}>
//                    <div style={{ height: "1px", flex: 1, backgroundColor: "#F0F0F0" }}></div>
//                    <span style={{ fontSize: "12px", fontWeight: "bold", color: "#CCC", letterSpacing: "1px" }}>OR VIA EMAIL</span>
//                    <div style={{ height: "1px", flex: 1, backgroundColor: "#F0F0F0" }}></div>
//                 </div>

//                 <form onSubmit={handleRegister}>
//                   <div style={{ marginBottom: "20px", position: "relative" }}>
//                      <FiUser style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20px", color: "#A0A0A0", fontSize: "1.2rem" }} />
//                      <input type="text" placeholder="Full Name" className="custom-input" value={name} onChange={e => setName(e.target.value)} />
//                   </div>

//                   <div style={{ marginBottom: "20px", position: "relative" }}>
//                      <FiMail style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20px", color: "#A0A0A0", fontSize: "1.2rem" }} />
//                      <input type="email" placeholder="Email Address" className="custom-input" value={email} onChange={e => setEmail(e.target.value)} />
//                   </div>

//                   <div style={{ marginBottom: "30px", position: "relative" }}>
//                      <FiLock style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20px", color: "#A0A0A0", fontSize: "1.2rem" }} />
//                      <input type="password" placeholder="Create Password" className="custom-input" value={password} onChange={e => setPassword(e.target.value)} />
//                   </div>

//                   <button type="submit" className="primary-btn" disabled={loading}>
//                     {loading ? "Creating Account..." : "Get Started"} <FiArrowRight />
//                   </button>
//                 </form>

//                 <p style={{ textAlign: "center", marginTop: "30px", color: colors.textLight }}>
//                    Already a member? <button onClick={() => navigate("/login")} style={{ color: colors.primary, fontWeight: "bold", background: "none", border: "none", cursor: "pointer" }}>Sign In</button>
//                 </p>
//              </motion.div>
//           </div>

//           {/* --- RIGHT: VISUAL SECTION --- */}
//           <div style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px" }}>
//              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
//                <div className="ken-burns" style={{ width: "100%", height: "100%", backgroundImage: "url('src/assets/cakee1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
//                {/* Gradient Overlay */}
//                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5), rgba(231,111,81,0.9))" }}></div>
//              </div>

//              <div style={{ position: "relative", zIndex: 10, color: "white", textAlign: "center" }}>
//                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
//                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", lineHeight: 1, marginBottom: "20px" }}>Join the<br/>Community.</h2>
                   
//                    {/* Testimonial / Feature List */}
//                    <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
//                       {["Exclusive Recipes", "Free Delivery", "Events"].map((tag, i) => (
//                         <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(5px)", padding: "8px 16px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)", fontSize: "0.9rem" }}>
//                            <FiCheck color="white" /> {tag}
//                         </div>
//                       ))}
//                    </div>
//                 </motion.div>
//              </div>
//           </div>

//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Register;