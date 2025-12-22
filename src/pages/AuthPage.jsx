// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// function AuthPage({ mode }) {
//   // mode: "login" or "register"
//   const navigate = useNavigate();

//   // Form states
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   // Validation
//   const validateForm = () => {
//     let temp = {};
//     if (mode === "register" && !name.trim()) temp.name = "Name is required";
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
//     if (!password.trim()) temp.password = "Password is required";
//     else if (mode === "register" && password.length < 6)
//       temp.password = "Password must be at least 6 characters";

//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   // Handlers
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     try {
//       await axios.post("https://finalproject-backend-7rqa.onrender.com/authregister", { name, email, password });
//       toast.success("🎉 Registration successful!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error("❌ Registration failed! Try again.");
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     try {
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authlogin", { email, password });
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✅ Login successful!");
//       setTimeout(() => navigate("/"), 1500);
//     } catch (err) {
//       toast.error("❌ Login failed! Check your credentials.");
//     }
//   };

//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authforgot-password", { email: forgotEmail });
//       toast.success(res.data.message);
//       setOtpSent(true);
//     } catch (err) {
//       toast.error("❌ Failed to send OTP! Check your email.");
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authreset-password", {
//         email: forgotEmail,
//         otp,
//         password: newPassword,
//       });
//       toast.success(res.data.message);
//       setOtpSent(false);
//       setForgotPasswordMode(false);
//       setForgotEmail("");
//       setOtp("");
//       setNewPassword("");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "❌ Failed to reset password");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
//         <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex overflow-hidden">

//           {/* Left Side - Welcome */}
//           <div className="hidden md:flex flex-col justify-center items-center bg-purple-500 text-white w-1/2 p-10 space-y-6">
//             <h2 className="text-4xl font-bold">
//               {mode === "login" ? "Hello, Friend!" : "Welcome Back!"}
//             </h2>
//             <p className="text-lg text-purple-100">
//               {mode === "login"
//                 ? "Register with your personal details to use all site features"
//                 : "Enter your personal details to login"}
//             </p>
//             <button
//               onClick={() => navigate(mode === "login" ? "/register" : "/login")}
//               className="bg-white text-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
//             >
//               {mode === "login" ? "Sign Up" : "Sign In"}
//             </button>
//           </div>

//           {/* Right Side - Form */}
//           <div className="w-full md:w-1/2 p-10">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
//               {forgotPasswordMode ? "Reset Password" : mode === "login" ? "Sign In" : "Create Account"}
//             </h2>

//             <div className="flex justify-center md:justify-start space-x-4 mb-4">
//               <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" className="w-10 h-10 rounded-full hover:scale-105 transition"/></a>
//               <a href="#"><img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" className="w-10 h-10 rounded-full hover:scale-105 transition"/></a>
//             </div>

//             {!forgotPasswordMode ? (
//               <form className="space-y-4" onSubmit={mode === "login" ? handleLogin : handleRegister}>
//                 {mode === "register" && (
//                   <>
//                     <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
//                       className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
//                     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                   </>
//                 )}

//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//                 {mode === "login" && (
//                   <p className="text-blue-500 cursor-pointer hover:underline" onClick={() => setForgotPasswordMode(true)}>
//                     Forget Your Password? Reset here
//                   </p>
//                 )}

//                 <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
//                   {mode === "login" ? "Sign In" : "Sign Up"}
//                 </button>
//               </form>
//             ) : !otpSent ? (
//               <form className="space-y-4" onSubmit={handleSendOTP}>
//                 <input type="email" placeholder="Enter your email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
//                 <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">Send OTP</button>
//                 <p className="text-blue-500 cursor-pointer hover:underline" onClick={() => setForgotPasswordMode(false)}>Back to Login</p>
//               </form>
//             ) : (
//               <form className="space-y-4" onSubmit={handleResetPassword}>
//                 <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
//                 <input type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
//                 <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">Reset Password</button>
//               </form>
//             )}

//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default AuthPage;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { registerUser } from "../api/auth"; // Assuming this import exists
// import { motion } from "framer-motion";
// import { FiUser, FiMail, FiLock, FiArrowRight, FiFacebook, FiGithub, FiCheck } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function AuthPage() {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   // --- FORM STATES ---
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [regData, setRegData] = useState({ name: "", email: "", password: "" });
  
//   // --- THEME ---
//   const colors = {
//     primary: "#E76F51", // Terracotta
//     secondary: "#264653", // Deep Teal
//     bg: "#FDFCF8",
//     white: "#FFFFFF"
//   };

//   // --- HANDLERS ---
//   const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   const handleRegChange = (e) => setRegData({ ...regData, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authlogin", loginData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✨ Welcome back!");
//       setTimeout(() => navigate("/"), 800);
//     } catch (err) {
//       toast.error("Invalid credentials.");
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await registerUser(regData);
//       toast.success("🎉 Account created! Please login.");
//       setIsSignUpMode(false); // Slide back to login
//       setLoading(false);
//     } catch (err) {
//       toast.error("Registration failed.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />

//       {/* --- CSS FOR SLIDING ANIMATION --- */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');

//         /* --- ANIMATIONS --- */
//         .container {
//           position: relative;
//           overflow: hidden;
//           width: 1000px;
//           max-width: 100%;
//           min-height: 650px;
//           background-color: #fff;
//           border-radius: 30px;
//           box-shadow: 0 25px 50px rgba(0,0,0,0.1);
//         }

//         /* FORMS */
//         .form-container {
//           position: absolute;
//           top: 0;
//           height: 100%;
//           transition: all 0.6s ease-in-out;
//         }

//         .sign-in-container {
//           left: 0;
//           width: 50%;
//           z-index: 2;
//         }

//         .sign-up-container {
//           left: 0;
//           width: 50%;
//           opacity: 0;
//           z-index: 1;
//         }

//         /* ACTIVE STATE (Register Mode) */
//         .container.right-panel-active .sign-in-container {
//           transform: translateX(100%);
//         }

//         .container.right-panel-active .sign-up-container {
//           transform: translateX(100%);
//           opacity: 1;
//           z-index: 5;
//           animation: show 0.6s;
//         }

//         @keyframes show {
//           0%, 49.99% { opacity: 0; z-index: 1; }
//           50%, 100% { opacity: 1; z-index: 5; }
//         }

//         /* OVERLAY (The Sliding Image) */
//         .overlay-container {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           width: 50%;
//           height: 100%;
//           overflow: hidden;
//           transition: transform 0.6s ease-in-out;
//           z-index: 100;
//           border-top-right-radius: 30px;
//           border-bottom-right-radius: 30px;
//         }

//         .container.right-panel-active .overlay-container {
//           transform: translateX(-100%);
//           border-radius: 30px 0 0 30px;
//         }

//         .overlay {
//           background: #E76F51;
//           background: linear-gradient(to right, #E76F51, #264653);
//           background-repeat: no-repeat;
//           background-size: cover;
//           background-position: 0 0;
//           color: #ffffff;
//           position: relative;
//           left: -100%;
//           height: 100%;
//           width: 200%;
//           transform: translateX(0);
//           transition: transform 0.6s ease-in-out;
//         }

//         .container.right-panel-active .overlay {
//           transform: translateX(50%);
//         }

//         .overlay-panel {
//           position: absolute;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           padding: 0 40px;
//           text-align: center;
//           top: 0;
//           height: 100%;
//           width: 50%;
//           transform: translateX(0);
//           transition: transform 0.6s ease-in-out;
//         }

//         .overlay-left { transform: translateX(-20%); }
//         .container.right-panel-active .overlay-left { transform: translateX(0); }
        
//         .overlay-right { right: 0; transform: translateX(0); }
//         .container.right-panel-active .overlay-right { transform: translateX(20%); }

//         /* ELEMENTS */
//         .modern-input {
//           background-color: #F5F5F5;
//           border: 2px solid transparent;
//           padding: 15px 15px 15px 45px;
//           width: 100%;
//           border-radius: 12px;
//           margin-bottom: 15px;
//           font-size: 0.95rem;
//           outline: none;
//           transition: 0.3s;
//         }
//         .modern-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231,111,81,0.1); }
        
//         .btn-primary {
//           border-radius: 25px;
//           border: none;
//           background-color: ${colors.primary};
//           color: #ffffff;
//           font-size: 14px;
//           font-weight: bold;
//           padding: 15px 45px;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           transition: transform 80ms ease-in;
//           cursor: pointer;
//           margin-top: 10px;
//           box-shadow: 0 10px 20px rgba(231,111,81,0.3);
//         }
//         .btn-primary:active { transform: scale(0.95); }
        
//         .btn-ghost {
//           background-color: transparent;
//           border-color: #ffffff;
//           border: 2px solid white;
//           border-radius: 25px;
//           color: white;
//           padding: 12px 40px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         .btn-ghost:hover { background: white; color: ${colors.primary}; }

//         .social-btn {
//           border: 1px solid #DDDDDD;
//           border-radius: 50%;
//           display: inline-flex;
//           justify-content: center;
//           align-items: center;
//           margin: 0 5px;
//           height: 45px;
//           width: 45px;
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-3px); }

//         /* IMAGE BACKGROUND */
//         .bg-image {
//           position: absolute; inset: 0; z-index: -1;
//           background-image: url('src/assets/cakee1.jpg');
//           background-size: cover;
//           background-position: center;
//           opacity: 0.4;
//           mix-blend-mode: overlay;
//         }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        
//         {/* MAIN CONTAINER (The Magic Box) */}
//         <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

//           {/* --- SIGN UP FORM (Hidden initially, slides in from left) --- */}
//           <div className="form-container sign-up-container">
//             <form onSubmit={handleRegister} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Create Account</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your email for registration</span>
              
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiUser style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="text" name="name" placeholder="Name" className="modern-input" value={regData.name} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={regData.email} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={regData.password} onChange={handleRegChange} />
//               </div>

//               <button className="btn-primary" disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
//             </form>
//           </div>

//           {/* --- SIGN IN FORM (Visible initially) --- */}
//           <div className="form-container sign-in-container">
//             <form onSubmit={handleLogin} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Sign In</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your account</span>
              
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={loginData.email} onChange={handleLoginChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={loginData.password} onChange={handleLoginChange} />
//               </div>
              
//               <a href="#" style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "15px 0", fontWeight: "500" }}>Forgot your password?</a>
//               <button className="btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
//             </form>
//           </div>

//           {/* --- OVERLAY CONTAINER (The Moving Image Part) --- */}
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="bg-image"></div> {/* Image Background */}
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(231, 111, 81, 0.9), rgba(38, 70, 83, 0.8))" }}></div>

//               {/* LEFT PANEL TEXT (Visible when form is Register) */}
//               <div className="overlay-panel overlay-left">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Welcome Back!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>
//                   To keep connected with us please login with your personal info
//                 </p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
//               </div>

//               {/* RIGHT PANEL TEXT (Visible when form is Login) */}
//               <div className="overlay-panel overlay-right">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Hello, Friend!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>
//                   Enter your personal details and start your delicious journey with us
//                 </p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AuthPage;


// import { useState, useEffect } from "react"; // Added useEffect
// import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
// import axios from "axios";
// // import { registerUser } from "../api/auth"; // Ensure this path is correct or use axios directly below
// import { motion } from "framer-motion";
// import { FiUser, FiMail, FiLock, FiFacebook, FiGithub } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function AuthPage() {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation(); // Hook to read URL params
//   const [loading, setLoading] = useState(false);

//   // --- FORM STATES ---
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [regData, setRegData] = useState({ name: "", email: "", password: "" });
  
//   // --- THEME ---
//   const colors = {
//     primary: "#E76F51", // Terracotta
//     secondary: "#264653", // Deep Teal
//     bg: "#FDFCF8",
//     white: "#FFFFFF"
//   };

//   // --- 1. HANDLE GOOGLE LOGIN REDIRECT ---
//   const handleGoogleLogin = () => {
//     // Redirects browser to your Backend Google Auth Endpoint
//     window.open("https://finalproject-backend-7rqa.onrender.com/authgoogle", "_self");
//   };

//   // --- 2. HANDLE GOOGLE CALLBACK (Token Capture) ---
//   useEffect(() => {
//     // Parse the query string looking for ?token=...
//     const queryParams = new URLSearchParams(location.search);
//     const token = queryParams.get("token");

//     if (token) {
//       // Store token
//       localStorage.setItem("token", token);
      
//       // Optional: You might want to decode the token to get the role here
//       // or fetch the user profile immediately. For now, defaulting role to 'user'.
//       // Ideally, your backend could send ?token=...&role=...
//       localStorage.setItem("role", "user"); 

//       toast.success("✨ Google Login Successful!");
      
//       // Clean the URL (remove the token) so it doesn't look messy
//       window.history.replaceState({}, document.title, "/");
      
//       navigate("/allproduct");
//     }
//   }, [location, navigate]);

//   // --- HANDLERS ---
//   const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   const handleRegChange = (e) => setRegData({ ...regData, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authlogin", loginData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✨ Welcome back!");
//       setTimeout(() => navigate("/"), 800);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Invalid credentials.");
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // If you don't have the separate api/auth file, use axios directly:
//       await axios.post("https://finalproject-backend-7rqa.onrender.com/authregister", regData);
      
//       toast.success("🎉 Account created! Please login.");
//       setIsSignUpMode(false); // Slide back to login
//       setLoading(false);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Registration failed.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />

//       {/* --- CSS FOR SLIDING ANIMATION --- */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');

//         /* --- ANIMATIONS --- */
//         .container {
//           position: relative;
//           overflow: hidden;
//           width: 1000px;
//           max-width: 100%;
//           min-height: 650px;
//           background-color: #fff;
//           border-radius: 30px;
//           box-shadow: 0 25px 50px rgba(0,0,0,0.1);
//         }

//         /* FORMS */
//         .form-container {
//           position: absolute;
//           top: 0;
//           height: 100%;
//           transition: all 0.6s ease-in-out;
//         }

//         .sign-in-container {
//           left: 0;
//           width: 50%;
//           z-index: 2;
//         }

//         .sign-up-container {
//           left: 0;
//           width: 50%;
//           opacity: 0;
//           z-index: 1;
//         }

//         /* ACTIVE STATE (Register Mode) */
//         .container.right-panel-active .sign-in-container {
//           transform: translateX(100%);
//         }

//         .container.right-panel-active .sign-up-container {
//           transform: translateX(100%);
//           opacity: 1;
//           z-index: 5;
//           animation: show 0.6s;
//         }

//         @keyframes show {
//           0%, 49.99% { opacity: 0; z-index: 1; }
//           50%, 100% { opacity: 1; z-index: 5; }
//         }

//         /* OVERLAY (The Sliding Image) */
//         .overlay-container {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           width: 50%;
//           height: 100%;
//           overflow: hidden;
//           transition: transform 0.6s ease-in-out;
//           z-index: 100;
//           border-top-right-radius: 30px;
//           border-bottom-right-radius: 30px;
//         }

//         .container.right-panel-active .overlay-container {
//           transform: translateX(-100%);
//           border-radius: 30px 0 0 30px;
//         }

//         .overlay {
//           background: #E76F51;
//           background: linear-gradient(to right, #E76F51, #264653);
//           background-repeat: no-repeat;
//           background-size: cover;
//           background-position: 0 0;
//           color: #ffffff;
//           position: relative;
//           left: -100%;
//           height: 100%;
//           width: 200%;
//           transform: translateX(0);
//           transition: transform 0.6s ease-in-out;
//         }

//         .container.right-panel-active .overlay {
//           transform: translateX(50%);
//         }

//         .overlay-panel {
//           position: absolute;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           padding: 0 40px;
//           text-align: center;
//           top: 0;
//           height: 100%;
//           width: 50%;
//           transform: translateX(0);
//           transition: transform 0.6s ease-in-out;
//         }

//         .overlay-left { transform: translateX(-20%); }
//         .container.right-panel-active .overlay-left { transform: translateX(0); }
        
//         .overlay-right { right: 0; transform: translateX(0); }
//         .container.right-panel-active .overlay-right { transform: translateX(20%); }

//         /* ELEMENTS */
//         .modern-input {
//           background-color: #F5F5F5;
//           border: 2px solid transparent;
//           padding: 15px 15px 15px 45px;
//           width: 100%;
//           border-radius: 12px;
//           margin-bottom: 15px;
//           font-size: 0.95rem;
//           outline: none;
//           transition: 0.3s;
//         }
//         .modern-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231,111,81,0.1); }
        
//         .btn-primary {
//           border-radius: 25px;
//           border: none;
//           background-color: ${colors.primary};
//           color: #ffffff;
//           font-size: 14px;
//           font-weight: bold;
//           padding: 15px 45px;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           transition: transform 80ms ease-in;
//           cursor: pointer;
//           margin-top: 10px;
//           box-shadow: 0 10px 20px rgba(231,111,81,0.3);
//         }
//         .btn-primary:active { transform: scale(0.95); }
        
//         .btn-ghost {
//           background-color: transparent;
//           border-color: #ffffff;
//           border: 2px solid white;
//           border-radius: 25px;
//           color: white;
//           padding: 12px 40px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         .btn-ghost:hover { background: white; color: ${colors.primary}; }

//         .social-btn {
//           border: 1px solid #DDDDDD;
//           border-radius: 50%;
//           display: inline-flex;
//           justify-content: center;
//           align-items: center;
//           margin: 0 5px;
//           height: 45px;
//           width: 45px;
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-3px); }

//         /* IMAGE BACKGROUND */
//         .bg-image {
//           position: absolute; inset: 0; z-index: -1;
//           background-image: url('src/assets/cakee1.jpg');
//           background-size: cover;
//           background-position: center;
//           opacity: 0.4;
//           mix-blend-mode: overlay;
//         }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        
//         {/* MAIN CONTAINER */}
//         <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

//           {/* --- SIGN UP FORM --- */}
//           <div className="form-container sign-up-container">
//             <form onSubmit={handleRegister} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Create Account</h1>
//               <div style={{ margin: "20px 0" }}>
//                 {/* CONNECTED GOOGLE BUTTON */}
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your email for registration</span>
              
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiUser style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="text" name="name" placeholder="Name" className="modern-input" value={regData.name} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={regData.email} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={regData.password} onChange={handleRegChange} />
//               </div>

//               <button className="btn-primary" disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
//             </form>
//           </div>

//           {/* --- SIGN IN FORM --- */}
//           <div className="form-container sign-in-container">
//             <form onSubmit={handleLogin} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Sign In</h1>
//               <div style={{ margin: "20px 0" }}>
//                 {/* CONNECTED GOOGLE BUTTON */}
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your account</span>
              
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={loginData.email} onChange={handleLoginChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={loginData.password} onChange={handleLoginChange} />
//               </div>
              
//               <a href="#" style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "15px 0", fontWeight: "500" }}>Forgot your password?</a>
//               <button className="btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
//             </form>
//           </div>

//           {/* --- OVERLAY CONTAINER --- */}
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="bg-image"></div>
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(231, 111, 81, 0.9), rgba(38, 70, 83, 0.8))" }}></div>

//               {/* LEFT PANEL TEXT */}
//               <div className="overlay-panel overlay-left">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Welcome Back!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>
//                   To keep connected with us please login with your personal info
//                 </p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
//               </div>

//               {/* RIGHT PANEL TEXT */}
//               <div className="overlay-panel overlay-right">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Hello, Friend!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>
//                   Enter your personal details and start your delicious journey with us
//                 </p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AuthPage;



// import { useState, useEffect } from "react"; 
// import { useNavigate, useLocation } from "react-router-dom"; 
// import axios from "axios";
// import { FiUser, FiMail, FiLock, FiFacebook, FiGithub } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";


// function AuthPage() {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   const [loading, setLoading] = useState(false);

//   // --- FORM STATES ---
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [regData, setRegData] = useState({ name: "", email: "", password: "" });
  
//   // --- THEME ---
//   const colors = {
//     primary: "#E76F51", 
//     secondary: "#264653", 
//     bg: "#FDFCF8",
//     white: "#FFFFFF"
//   };

//   // ---------------------------------------------------------
//   // 🔒 1. "BOUNCER" LOGIC (Prevents going back to Login)
//   // ---------------------------------------------------------
//   useEffect(() => {
//     const token = localStorage.getItem("token");
    
//     // If token exists, the user is already logged in.
//     // If they press "Back" to get here, send them forward immediately.
//     if (token) {
//       navigate("/allproduct", { replace: true });
//     }
//   }, [navigate]);


//   // --- 2. HANDLE GOOGLE LOGIN REDIRECT ---
//   const handleGoogleLogin = () => {
//     window.open("https://finalproject-backend-7rqa.onrender.com/authgoogle", "_self");
//   };

//   // --- 3. HANDLE GOOGLE CALLBACK (Token Capture) ---
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const token = queryParams.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", "user"); 

//       toast.success("✨ Google Login Successful!");
      
//       // Clean URL
//       window.history.replaceState({}, document.title, "/");
      
//       // REDIRECT: Use replace to wipe history
//       navigate("/allproduct", { replace: true });
//     }
//   }, [location, navigate]);

//   // --- HANDLERS ---
//   const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   const handleRegChange = (e) => setRegData({ ...regData, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/auth/login", loginData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✨ Welcome back!");
      
//       // 🔒 REDIRECT: Using { replace: true } ensures 'Login' is removed from history
//       setTimeout(() => navigate("/allproduct", { replace: true }), 800);
      
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Invalid credentials.");
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post("https://finalproject-backend-7rqa.onrender.com/authregister", regData);
//       toast.success("🎉 Account created! Please login.");
//       setIsSignUpMode(false); 
//       setLoading(false);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Registration failed.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />

//       {/* --- STYLES --- */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');

//         .container {
//           position: relative;
//           overflow: hidden;
//           width: 1000px;
//           max-width: 100%;
//           min-height: 650px;
//           background-color: #fff;
//           border-radius: 30px;
//           box-shadow: 0 25px 50px rgba(0,0,0,0.1);
//         }

//         /* FORMS */
//         .form-container {
//           position: absolute;
//           top: 0;
//           height: 100%;
//           transition: all 0.6s ease-in-out;
//         }

//         .sign-in-container { left: 0; width: 50%; z-index: 2; }
//         .sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; }

//         .container.right-panel-active .sign-in-container { transform: translateX(100%); }
//         .container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; animation: show 0.6s; }

//         @keyframes show {
//           0%, 49.99% { opacity: 0; z-index: 1; }
//           50%, 100% { opacity: 1; z-index: 5; }
//         }

//         /* OVERLAY */
//         .overlay-container {
//           position: absolute; top: 0; left: 50%; width: 50%; height: 100%;
//           overflow: hidden; transition: transform 0.6s ease-in-out; z-index: 100;
//           border-top-right-radius: 30px; border-bottom-right-radius: 30px;
//         }
//         .container.right-panel-active .overlay-container { transform: translateX(-100%); border-radius: 30px 0 0 30px; }

//         .overlay {
//           background: #E76F51;
//           background: linear-gradient(to right, #E76F51, #264653);
//           background-repeat: no-repeat; background-size: cover; background-position: 0 0;
//           color: #ffffff; position: relative; left: -100%; height: 100%; width: 200%;
//           transform: translateX(0); transition: transform 0.6s ease-in-out;
//         }
//         .container.right-panel-active .overlay { transform: translateX(50%); }

//         .overlay-panel {
//           position: absolute; display: flex; align-items: center; justify-content: center;
//           flex-direction: column; padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%;
//           transform: translateX(0); transition: transform 0.6s ease-in-out;
//         }
//         .overlay-left { transform: translateX(-20%); }
//         .container.right-panel-active .overlay-left { transform: translateX(0); }
//         .overlay-right { right: 0; transform: translateX(0); }
//         .container.right-panel-active .overlay-right { transform: translateX(20%); }

//         /* ELEMENTS */
//         .modern-input {
//           background-color: #F5F5F5; border: 2px solid transparent; padding: 15px 15px 15px 45px;
//           width: 100%; border-radius: 12px; margin-bottom: 15px; font-size: 0.95rem; outline: none; transition: 0.3s;
//         }
//         .modern-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231,111,81,0.1); }
        
//         .btn-primary {
//           border-radius: 25px; border: none; background-color: ${colors.primary}; color: #ffffff;
//           font-size: 14px; font-weight: bold; padding: 15px 45px; letter-spacing: 1px; text-transform: uppercase;
//           transition: transform 80ms ease-in; cursor: pointer; margin-top: 10px;
//           box-shadow: 0 10px 20px rgba(231,111,81,0.3);
//         }
//         .btn-primary:active { transform: scale(0.95); }
        
//         .btn-ghost {
//           background-color: transparent; border-color: #ffffff; border: 2px solid white; border-radius: 25px;
//           color: white; padding: 12px 40px; font-weight: bold; cursor: pointer; transition: 0.3s;
//         }
//         .btn-ghost:hover { background: white; color: ${colors.primary}; }

//         .social-btn {
//           border: 1px solid #DDDDDD; border-radius: 50%; display: inline-flex; justify-content: center;
//           align-items: center; margin: 0 5px; height: 45px; width: 45px; cursor: pointer; transition: 0.3s;
//         }
//         .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-3px); }

//         .bg-image {
//           position: absolute; inset: 0; z-index: -1; background-image: url('src/assets/cakee1.jpg');
//           background-size: cover; background-position: center; opacity: 0.4; mix-blend-mode: overlay;
//         }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        
//         <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

//           {/* SIGN UP */}
//           <div className="form-container sign-up-container">
//             <form onSubmit={handleRegister} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Create Account</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your email for registration</span>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiUser style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="text" name="name" placeholder="Name" className="modern-input" value={regData.name} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={regData.email} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={regData.password} onChange={handleRegChange} />
//               </div>
//               <button className="btn-primary" disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
//             </form>
//           </div>

//           {/* SIGN IN */}
//           <div className="form-container sign-in-container">
//             <form onSubmit={handleLogin} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Sign In</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your account</span>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={loginData.email} onChange={handleLoginChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={loginData.password} onChange={handleLoginChange} />
//               </div>
//               <a href="#" style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "15px 0", fontWeight: "500" }}>Forgot your password?</a>
//               <button className="btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
//             </form>
//           </div>

//           {/* OVERLAY */}
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="bg-image"></div>
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(231, 111, 81, 0.9), rgba(38, 70, 83, 0.8))" }}></div>
//               <div className="overlay-panel overlay-left">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Welcome Back!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>To keep connected with us please login with your personal info</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Hello, Friend!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>Enter your personal details and start your delicious journey with us</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AuthPage;



// import { useState, useEffect } from "react"; 
// import { useNavigate, useLocation } from "react-router-dom"; 
// import axios from "axios";
// import { FiUser, FiMail, FiLock, FiFacebook, FiGithub } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // --- 1. IMPORT IMAGE CORRECTLY ---
// import cakeBg from "../assets/cakee1.jpg"; 

// // --- 2. DEFINE BASE URL (To avoid typo errors) ---
// const BASE_URL = "https://finalproject-backend-7rqa.onrender.com/auth";

// function AuthPage() {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   const [loading, setLoading] = useState(false);

//   // --- FORM STATES ---
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [regData, setRegData] = useState({ name: "", email: "", password: "" });
  
//   // --- THEME ---
//   const colors = {
//     primary: "#E76F51", 
//     secondary: "#264653", 
//     bg: "#FDFCF8",
//     white: "#FFFFFF"
//   };

//   // ---------------------------------------------------------
//   // 🔒 "BOUNCER" LOGIC
//   // ---------------------------------------------------------
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/allproduct", { replace: true });
//     }
//   }, [navigate]);

//   // --- 3. FIX GOOGLE LOGIN URL ---
//   const handleGoogleLogin = () => {
//     // Fixed: Added slash -> /auth/google
//     window.open(`${BASE_URL}/google`, "_self");
//   };

//   // --- HANDLE GOOGLE CALLBACK ---
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const token = queryParams.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", "user"); 

//       toast.success("✨ Google Login Successful!");
//       window.history.replaceState({}, document.title, "/");
//       navigate("/allproduct", { replace: true });
//     }
//   }, [location, navigate]);

//   // --- HANDLERS ---
//   const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   const handleRegChange = (e) => setRegData({ ...regData, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // Fixed: Using BASE_URL -> /auth/login
//       const res = await axios.post(`${BASE_URL}/login`, loginData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✨ Welcome back!");
//       setTimeout(() => navigate("/allproduct", { replace: true }), 800);
      
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Invalid credentials.");
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // Fixed: Using BASE_URL -> /auth/register (This fixes your 404 error)
//       await axios.post(`${BASE_URL}/register`, regData);
//       toast.success("🎉 Account created! Please login.");
//       setIsSignUpMode(false); 
//       setLoading(false);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Registration failed.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />

//       {/* --- STYLES --- */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');

//         .container {
//           position: relative;
//           overflow: hidden;
//           width: 1000px;
//           max-width: 100%;
//           min-height: 650px;
//           background-color: #fff;
//           border-radius: 30px;
//           box-shadow: 0 25px 50px rgba(0,0,0,0.1);
//         }

//         /* FORMS */
//         .form-container {
//           position: absolute;
//           top: 0;
//           height: 100%;
//           transition: all 0.6s ease-in-out;
//         }

//         .sign-in-container { left: 0; width: 50%; z-index: 2; }
//         .sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; }

//         .container.right-panel-active .sign-in-container { transform: translateX(100%); }
//         .container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; animation: show 0.6s; }

//         @keyframes show {
//           0%, 49.99% { opacity: 0; z-index: 1; }
//           50%, 100% { opacity: 1; z-index: 5; }
//         }

//         /* OVERLAY */
//         .overlay-container {
//           position: absolute; top: 0; left: 50%; width: 50%; height: 100%;
//           overflow: hidden; transition: transform 0.6s ease-in-out; z-index: 100;
//           border-top-right-radius: 30px; border-bottom-right-radius: 30px;
//         }
//         .container.right-panel-active .overlay-container { transform: translateX(-100%); border-radius: 30px 0 0 30px; }

//         .overlay {
//           background: #E76F51;
//           background: linear-gradient(to right, #E76F51, #264653);
//           background-repeat: no-repeat; background-size: cover; background-position: 0 0;
//           color: #ffffff; position: relative; left: -100%; height: 100%; width: 200%;
//           transform: translateX(0); transition: transform 0.6s ease-in-out;
//         }
//         .container.right-panel-active .overlay { transform: translateX(50%); }

//         .overlay-panel {
//           position: absolute; display: flex; align-items: center; justify-content: center;
//           flex-direction: column; padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%;
//           transform: translateX(0); transition: transform 0.6s ease-in-out;
//         }
//         .overlay-left { transform: translateX(-20%); }
//         .container.right-panel-active .overlay-left { transform: translateX(0); }
//         .overlay-right { right: 0; transform: translateX(0); }
//         .container.right-panel-active .overlay-right { transform: translateX(20%); }

//         /* ELEMENTS */
//         .modern-input {
//           background-color: #F5F5F5; border: 2px solid transparent; padding: 15px 15px 15px 45px;
//           width: 100%; border-radius: 12px; margin-bottom: 15px; font-size: 0.95rem; outline: none; transition: 0.3s;
//         }
//         .modern-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231,111,81,0.1); }
        
//         .btn-primary {
//           border-radius: 25px; border: none; background-color: ${colors.primary}; color: #ffffff;
//           font-size: 14px; font-weight: bold; padding: 15px 45px; letter-spacing: 1px; text-transform: uppercase;
//           transition: transform 80ms ease-in; cursor: pointer; margin-top: 10px;
//           box-shadow: 0 10px 20px rgba(231,111,81,0.3);
//         }
//         .btn-primary:active { transform: scale(0.95); }
        
//         .btn-ghost {
//           background-color: transparent; border-color: #ffffff; border: 2px solid white; border-radius: 25px;
//           color: white; padding: 12px 40px; font-weight: bold; cursor: pointer; transition: 0.3s;
//         }
//         .btn-ghost:hover { background: white; color: ${colors.primary}; }

//         .social-btn {
//           border: 1px solid #DDDDDD; border-radius: 50%; display: inline-flex; justify-content: center;
//           align-items: center; margin: 0 5px; height: 45px; width: 45px; cursor: pointer; transition: 0.3s;
//         }
//         .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-3px); }

//         .bg-image {
//           position: absolute; inset: 0; z-index: -1; 
//           /* 4. USE IMPORTED IMAGE VARIABLE HERE */
//           background-image: url(${cakeBg});
//           background-size: cover; background-position: center; opacity: 0.4; mix-blend-mode: overlay;
//         }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        
//         <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

//           {/* SIGN UP */}
//           <div className="form-container sign-up-container">
//             <form onSubmit={handleRegister} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Create Account</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your email for registration</span>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiUser style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="text" name="name" placeholder="Name" className="modern-input" value={regData.name} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={regData.email} onChange={handleRegChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={regData.password} onChange={handleRegChange} />
//               </div>
//               <button className="btn-primary" disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
//             </form>
//           </div>

//           {/* SIGN IN */}
//           <div className="form-container sign-in-container">
//             <form onSubmit={handleLogin} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Sign In</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your account</span>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={loginData.email} onChange={handleLoginChange} />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={loginData.password} onChange={handleLoginChange} />
//               </div>
//               <a href="#" style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "15px 0", fontWeight: "500" }}>Forgot your password?</a>
//               <button className="btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
//             </form>
//           </div>

//           {/* OVERLAY */}
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="bg-image"></div>
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(231, 111, 81, 0.9), rgba(38, 70, 83, 0.8))" }}></div>
//               <div className="overlay-panel overlay-left">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Welcome Back!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>To keep connected with us please login with your personal info</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Hello, Friend!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>Enter your personal details and start your delicious journey with us</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AuthPage;



// import { useState, useEffect } from "react"; 
// import { useNavigate, useLocation } from "react-router-dom"; 
// import axios from "axios";
// import { FiUser, FiMail, FiLock, FiFacebook, FiGithub, FiArrowLeft, FiKey } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // Make sure this path matches where your image is located
// import cakeBg from "../assets/cakee1.jpg"; 

// // --- CONFIGURATION ---
// // If your backend routes are like "/authlogin", remove the "/auth" here and add it manually in the axios calls.
// // Standard convention is usually "/auth" prefix.
// const BASE_URL = "https://finalproject-backend-7rqa.onrender.com/auth";

// function AuthPage() {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);
  
//   // --- FORGOT PASSWORD STATES ---
//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
  
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   const [loading, setLoading] = useState(false);

//   // --- LOGIN / REGISTER FORM STATES ---
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [regData, setRegData] = useState({ name: "", email: "", password: "" });
  
//   // --- THEME COLORS ---
//   const colors = {
//     primary: "#E76F51", 
//     secondary: "#264653", 
//     bg: "#FDFCF8",
//     white: "#FFFFFF"
//   };

//   // --- CHECK LOGIN STATUS ---
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/allproduct", { replace: true });
//     }
//   }, [navigate]);

//   // --- GOOGLE LOGIN ---
//   const handleGoogleLogin = () => {
//     window.open(`${BASE_URL}/google`, "_self");
//   };

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const token = queryParams.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", "user"); 
//       toast.success("✨ Google Login Successful!");
//       window.history.replaceState({}, document.title, "/");
//       navigate("/allproduct", { replace: true });
//     }
//   }, [location, navigate]);

//   // --- INPUT HANDLERS ---
//   const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   const handleRegChange = (e) => setRegData({ ...regData, [e.target.name]: e.target.value });

//   // --- SUBMIT: LOGIN ---
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(`${BASE_URL}/login`, loginData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✨ Welcome back!");
//       setTimeout(() => navigate("/allproduct", { replace: true }), 800);
//     } catch (err) {
//       console.error("Login Error:", err.response); // Check console for details
//       toast.error(err.response?.data?.message || "Invalid credentials.");
//       setLoading(false);
//     }
//   };

//   // --- SUBMIT: REGISTER ---
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post(`${BASE_URL}/register`, regData);
//       toast.success("🎉 Account created! Please login.");
//       setIsSignUpMode(false); 
//       setLoading(false);
//     } catch (err) {
//       console.error("Register Error:", err.response);
//       toast.error(err.response?.data?.message || "Registration failed.");
//       setLoading(false);
//     }
//   };

//   // // --- SUBMIT: SEND OTP (Forgot Password) ---
//   // const handleSendOTP = async (e) => {
//   //   e.preventDefault();
//   //   if (!forgotEmail) return toast.warning("Please enter your email.");
//   //   setLoading(true);
//   //   try {
//   //     // Endpoint: /auth/forgot-password
//   //     const res = await axios.post(`${BASE_URL}/forgot-password`, { email: forgotEmail });
//   //     toast.success(res.data.message || "OTP sent to your email!");
//   //     setOtpSent(true);
//   //   } catch (err) {
//   //     console.error("Forgot Password Error:", err.response);
//   //     // This will show exactly why the 400 error happened (e.g., "User not found")
//   //     toast.error(err.response?.data?.message || "❌ Failed to send OTP. Check email.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


//     // --- SUBMIT: SEND OTP (Forgot Password) ---
//     const handleSendOTP = async (e) => {
//       e.preventDefault();
//       if (!forgotEmail) return toast.warning("Please enter your email.");
      
//       setLoading(true);
//       // Show a specific toast for the "Cold Start" delay
//       const loadingToast = toast.loading("Waking up the server & sending email (this may take up to 2 mins)...");
  
//       try {
//         // Added 'timeout: 60000' (60 seconds) to wait for Render to wake up
//         const res = await axios.post(
//           `${BASE_URL}/forgot-password`, 
//           { email: forgotEmail },
//           { timeout: 30000 } 
//         );
        
//         toast.dismiss(loadingToast); // Remove loading message
//         toast.success(res.data.message || "OTP sent to your email!");
//         setOtpSent(true);
//       } catch (err) {
//         toast.dismiss(loadingToast);
//         console.error("Forgot Password Error:", err);
        
//         // Handle Timeout specifically
//         if (err.code === 'ECONNABORTED') {
//           toast.error("Server took too long to wake up. Please try again now!");
//         } else {
//           toast.error(err.response?.data?.message || "❌ Connection failed.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//   // --- SUBMIT: RESET PASSWORD ---
//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     if (!otp || !newPassword) return toast.warning("Please fill all fields.");
//     setLoading(true);
//     try {
//       // Endpoint: /auth/reset-password
//       const res = await axios.post(`${BASE_URL}/reset-password`, {
//         email: forgotEmail,
//         otp,
//         password: newPassword,
//       });
//       toast.success("🎉 Password reset successfully! Please login.");
//       // Reset state to login mode
//       setOtpSent(false);
//       setForgotPasswordMode(false);
//       setForgotEmail("");
//       setOtp("");
//       setNewPassword("");
//     } catch (err) {
//       console.error("Reset Error:", err.response);
//       toast.error(err.response?.data?.message || "❌ Failed to reset password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');

//         .container {
//           position: relative;
//           overflow: hidden;
//           width: 1000px;
//           max-width: 100%;
//           min-height: 650px;
//           background-color: #fff;
//           border-radius: 30px;
//           box-shadow: 0 25px 50px rgba(0,0,0,0.1);
//         }

//         .form-container {
//           position: absolute;
//           top: 0;
//           height: 100%;
//           transition: all 0.6s ease-in-out;
//         }

//         .sign-in-container { left: 0; width: 50%; z-index: 2; }
//         .sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; }

//         .container.right-panel-active .sign-in-container { transform: translateX(100%); }
//         .container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; animation: show 0.6s; }

//         @keyframes show {
//           0%, 49.99% { opacity: 0; z-index: 1; }
//           50%, 100% { opacity: 1; z-index: 5; }
//         }

//         .overlay-container {
//           position: absolute; top: 0; left: 50%; width: 50%; height: 100%;
//           overflow: hidden; transition: transform 0.6s ease-in-out; z-index: 100;
//           border-top-right-radius: 30px; border-bottom-right-radius: 30px;
//         }
//         .container.right-panel-active .overlay-container { transform: translateX(-100%); border-radius: 30px 0 0 30px; }

//         .overlay {
//           background: #E76F51;
//           background: linear-gradient(to right, #E76F51, #264653);
//           background-repeat: no-repeat; background-size: cover; background-position: 0 0;
//           color: #ffffff; position: relative; left: -100%; height: 100%; width: 200%;
//           transform: translateX(0); transition: transform 0.6s ease-in-out;
//         }
//         .container.right-panel-active .overlay { transform: translateX(50%); }

//         .overlay-panel {
//           position: absolute; display: flex; align-items: center; justify-content: center;
//           flex-direction: column; padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%;
//           transform: translateX(0); transition: transform 0.6s ease-in-out;
//         }
//         .overlay-left { transform: translateX(-20%); }
//         .container.right-panel-active .overlay-left { transform: translateX(0); }
//         .overlay-right { right: 0; transform: translateX(0); }
//         .container.right-panel-active .overlay-right { transform: translateX(20%); }

//         .modern-input {
//           background-color: #F5F5F5; border: 2px solid transparent; padding: 15px 15px 15px 45px;
//           width: 100%; border-radius: 12px; margin-bottom: 15px; font-size: 0.95rem; outline: none; transition: 0.3s;
//         }
//         .modern-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231,111,81,0.1); }
        
//         .btn-primary {
//           border-radius: 25px; border: none; background-color: ${colors.primary}; color: #ffffff;
//           font-size: 14px; font-weight: bold; padding: 15px 45px; letter-spacing: 1px; text-transform: uppercase;
//           transition: transform 80ms ease-in; cursor: pointer; margin-top: 10px;
//           box-shadow: 0 10px 20px rgba(231,111,81,0.3);
//         }
//         .btn-primary:active { transform: scale(0.95); }
        
//         .btn-ghost {
//           background-color: transparent; border-color: #ffffff; border: 2px solid white; border-radius: 25px;
//           color: white; padding: 12px 40px; font-weight: bold; cursor: pointer; transition: 0.3s;
//         }
//         .btn-ghost:hover { background: white; color: ${colors.primary}; }

//         .social-btn {
//           border: 1px solid #DDDDDD; border-radius: 50%; display: inline-flex; justify-content: center;
//           align-items: center; margin: 0 5px; height: 45px; width: 45px; cursor: pointer; transition: 0.3s;
//         }
//         .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-3px); }

//         .bg-image {
//           position: absolute; inset: 0; z-index: -1; 
//           background-image: url(${cakeBg});
//           background-size: cover; background-position: center; opacity: 0.4; mix-blend-mode: overlay;
//         }

//         .fade-in { animation: fadeIn 0.5s ease-in; }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        
//         <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

//           {/* SIGN UP FORM */}
//           <div className="form-container sign-up-container">
//             <form onSubmit={handleRegister} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Create Account</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your email for registration</span>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiUser style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="text" name="name" placeholder="Name" className="modern-input" value={regData.name} onChange={handleRegChange} required />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="email" name="email" placeholder="Email" className="modern-input" value={regData.email} onChange={handleRegChange} required />
//               </div>
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className="modern-input" value={regData.password} onChange={handleRegChange} required />
//               </div>
//               <button className="btn-primary" disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
//             </form>
//           </div>

//           {/* SIGN IN / FORGOT PASSWORD CONTAINER */}
//           <div className="form-container sign-in-container">
            
//             {/* TOGGLE 1: NORMAL LOGIN */}
//             {!forgotPasswordMode ? (
//               <form onSubmit={handleLogin} className="fade-in" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Sign In</h1>
//                 <div style={{ margin: "20px 0" }}>
//                   <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                   <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                   <button type="button" className="social-btn"><FiGithub size={20} /></button>
//                 </div>
//                 <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your account</span>
//                 <div style={{ width: "100%", position: "relative" }}>
//                   <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                   <input type="email" name="email" placeholder="Email" className="modern-input" value={loginData.email} onChange={handleLoginChange} required />
//                 </div>
//                 <div style={{ width: "100%", position: "relative" }}>
//                   <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                   <input type="password" name="password" placeholder="Password" className="modern-input" value={loginData.password} onChange={handleLoginChange} required />
//                 </div>
                
//                 {/* BUTTON TO SWITCH TO FORGOT PASSWORD MODE */}
//                 <span 
//                   onClick={() => setForgotPasswordMode(true)}
//                   style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "15px 0", fontWeight: "500", cursor: "pointer" }}
//                 >
//                   Forgot your password?
//                 </span>

//                 <button className="btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
//               </form>
//             ) : (
              
//               /* TOGGLE 2: FORGOT PASSWORD / RESET */
//               <div className="fade-in" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
                
//                 <button 
//                   onClick={() => { setForgotPasswordMode(false); setOtpSent(false); }}
//                   style={{ background: "none", border: "none", color: "#888", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", alignSelf: "flex-start", marginBottom: "20px" }}
//                 >
//                   <FiArrowLeft /> Back
//                 </button>

//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", margin: "0 0 10px 0", color: colors.secondary }}>Reset Password</h1>
//                 <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px", textAlign: "center" }}>
//                    {!otpSent ? "Enter your email to receive a code." : "Check your email for the OTP."}
//                 </p>

//                 {!otpSent ? (
//                   /* STEP 1: SEND EMAIL */
//                   <form onSubmit={handleSendOTP} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                     <div style={{ width: "100%", position: "relative" }}>
//                       <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                       <input type="email" placeholder="Email Address" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} className="modern-input" required />
//                     </div>
//                     <button type="submit" className="btn-primary" disabled={loading}>
//                       {loading ? "Sending..." : "Send Code"}
//                     </button>
//                   </form>
//                 ) : (
//                   /* STEP 2: VERIFY OTP & NEW PASSWORD */
//                   <form onSubmit={handleResetPassword} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                     <div style={{ width: "100%", position: "relative" }}>
//                       <FiKey style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                       <input type="text" placeholder="OTP Code" value={otp} onChange={(e) => setOtp(e.target.value)} className="modern-input" required />
//                     </div>
//                     <div style={{ width: "100%", position: "relative" }}>
//                       <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                       <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="modern-input" required />
//                     </div>
//                     <button type="submit" className="btn-primary" disabled={loading}>
//                       {loading ? "Updating..." : "Update Password"}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* OVERLAY SECTION */}
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="bg-image"></div>
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(231, 111, 81, 0.9), rgba(38, 70, 83, 0.8))" }}></div>
//               <div className="overlay-panel overlay-left">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Welcome Back!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>To keep connected with us please login with your personal info</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Hello, Friend!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>Enter your personal details and start your delicious journey with us</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AuthPage;



// import { useState, useEffect } from "react"; 
// import { useNavigate, useLocation } from "react-router-dom"; 
// import axios from "axios";
// import { FiUser, FiMail, FiLock, FiFacebook, FiGithub, FiArrowLeft, FiKey, FiAlertCircle } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // Make sure this path matches where your image is located
// import cakeBg from "../assets/cakee1.jpg"; 

// const BASE_URL = "https://finalproject-backend-7rqa.onrender.com/auth";

// function AuthPage() {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);
  
//   // --- FORGOT PASSWORD STATES ---
//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
  
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   const [loading, setLoading] = useState(false);

//   // --- FORM DATA STATES ---
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [regData, setRegData] = useState({ name: "", email: "", password: "" });

//   // --- VALIDATION ERROR STATE ---
//   const [errors, setErrors] = useState({});
  
//   // --- THEME COLORS ---
//   const colors = {
//     primary: "#E76F51", 
//     secondary: "#264653", 
//     bg: "#FDFCF8",
//     white: "#FFFFFF",
//     error: "#e74c3c" // Added error color
//   };

//   // --- CHECK LOGIN STATUS ---
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/allproduct", { replace: true });
//     }
//   }, [navigate]);

//   // --- CLEAR ERRORS ON MODE SWITCH ---
//   useEffect(() => {
//     setErrors({});
//     setLoginData({ email: "", password: "" });
//     setRegData({ name: "", email: "", password: "" });
//   }, [isSignUpMode, forgotPasswordMode]);

//   // --- VALIDATION HELPERS ---
//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validateForm = (type) => {
//     const newErrors = {};

//     if (type === "register") {
//       if (!regData.name.trim()) newErrors.name = "Name is required.";
//       if (!regData.email.trim()) {
//         newErrors.email = "Email is required.";
//       } else if (!validateEmail(regData.email)) {
//         newErrors.email = "Invalid email format.";
//       }
//       if (!regData.password) {
//         newErrors.password = "Password is required.";
//       } else if (regData.password.length < 6) {
//         newErrors.password = "Password must be at least 6 characters.";
//       }
//     } 
    
//     else if (type === "login") {
//       if (!loginData.email.trim()) {
//         newErrors.loginEmail = "Email is required.";
//       } else if (!validateEmail(loginData.email)) {
//         newErrors.loginEmail = "Invalid email format.";
//       }
//       if (!loginData.password) {
//         newErrors.loginPassword = "Password is required.";
//       }
//     }

//     else if (type === "forgot-email") {
//       if (!forgotEmail.trim()) {
//         newErrors.forgotEmail = "Email is required.";
//       } else if (!validateEmail(forgotEmail)) {
//         newErrors.forgotEmail = "Invalid email format.";
//       }
//     }

//     else if (type === "reset-pass") {
//         if (!otp.trim()) newErrors.otp = "OTP is required.";
//         if (!newPassword) {
//             newErrors.newPassword = "Password is required.";
//         } else if (newPassword.length < 6) {
//             newErrors.newPassword = "Password must be at least 6 characters.";
//         }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Returns true if no errors
//   };

//   // --- GOOGLE LOGIN ---
//   const handleGoogleLogin = () => {
//     window.open(`${BASE_URL}/google`, "_self");
//   };

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const token = queryParams.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", "user"); 
//       toast.success("✨ Google Login Successful!");
//       window.history.replaceState({}, document.title, "/");
//       navigate("/allproduct", { replace: true });
//     }
//   }, [location, navigate]);

//   // --- INPUT HANDLERS ---
//   const handleLoginChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     // Optional: Clear error as user types
//     if (errors[e.target.name === 'email' ? 'loginEmail' : 'loginPassword']) {
//         setErrors({...errors, [e.target.name === 'email' ? 'loginEmail' : 'loginPassword']: null});
//     }
//   };

//   const handleRegChange = (e) => {
//     setRegData({ ...regData, [e.target.name]: e.target.value });
//     if (errors[e.target.name]) {
//         setErrors({...errors, [e.target.name]: null});
//     }
//   };

//   // --- SUBMIT: LOGIN ---
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateForm("login")) return; // Stop if validation fails

//     setLoading(true);
//     try {
//       const res = await axios.post(`${BASE_URL}/login`, loginData);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✨ Welcome back!");
//       setTimeout(() => navigate("/allproduct", { replace: true }), 800);
//     } catch (err) {
//       console.error("Login Error:", err.response);
//       toast.error(err.response?.data?.message || "Invalid credentials.");
//       setLoading(false);
//     }
//   };

//   // --- SUBMIT: REGISTER ---
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validateForm("register")) return; // Stop if validation fails

//     setLoading(true);
//     try {
//       await axios.post(`${BASE_URL}/register`, regData);
//       toast.success("🎉 Account created! Please login.");
//       setIsSignUpMode(false); 
//       setLoading(false);
//     } catch (err) {
//       console.error("Register Error:", err.response);
//       toast.error(err.response?.data?.message || "Registration failed.");
//       setLoading(false);
//     }
//   };

//   // --- SUBMIT: SEND OTP ---
//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     if (!validateForm("forgot-email")) return;

//     setLoading(true);
//     const loadingToast = toast.loading("Sending email (this may take a moment)...");

//     try {
//       const res = await axios.post(`${BASE_URL}/forgot-password`, { email: forgotEmail }, { timeout: 30000 });
//       toast.dismiss(loadingToast);
//       toast.success(res.data.message || "OTP sent to your email!");
//       setOtpSent(true);
//     } catch (err) {
//       toast.dismiss(loadingToast);
//       console.error("Forgot Password Error:", err);
//       if (err.code === 'ECONNABORTED') {
//         toast.error("Server took too long. Please try again.");
//       } else {
//         toast.error(err.response?.data?.message || "❌ Connection failed.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- SUBMIT: RESET PASSWORD ---
//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     if (!validateForm("reset-pass")) return;

//     setLoading(true);
//     try {
//       await axios.post(`${BASE_URL}/reset-password`, {
//         email: forgotEmail,
//         otp,
//         password: newPassword,
//       });
//       toast.success("🎉 Password reset successfully! Please login.");
//       setOtpSent(false);
//       setForgotPasswordMode(false);
//       setForgotEmail("");
//       setOtp("");
//       setNewPassword("");
//     } catch (err) {
//       console.error("Reset Error:", err.response);
//       toast.error(err.response?.data?.message || "❌ Failed to reset password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');

//         .container {
//           position: relative; overflow: hidden; width: 1000px; max-width: 100%; min-height: 650px;
//           background-color: #fff; border-radius: 30px; box-shadow: 0 25px 50px rgba(0,0,0,0.1);
//         }
//         .form-container {
//           position: absolute; top: 0; height: 100%; transition: all 0.6s ease-in-out;
//         }
//         .sign-in-container { left: 0; width: 50%; z-index: 2; }
//         .sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; }
//         .container.right-panel-active .sign-in-container { transform: translateX(100%); }
//         .container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; animation: show 0.6s; }

//         @keyframes show { 0%, 49.99% { opacity: 0; z-index: 1; } 50%, 100% { opacity: 1; z-index: 5; } }

//         .overlay-container {
//           position: absolute; top: 0; left: 50%; width: 50%; height: 100%; overflow: hidden;
//           transition: transform 0.6s ease-in-out; z-index: 100; border-top-right-radius: 30px; border-bottom-right-radius: 30px;
//         }
//         .container.right-panel-active .overlay-container { transform: translateX(-100%); border-radius: 30px 0 0 30px; }
//         .overlay {
//           background: linear-gradient(to right, #E76F51, #264653); background-repeat: no-repeat;
//           background-size: cover; background-position: 0 0; color: #ffffff; position: relative;
//           left: -100%; height: 100%; width: 200%; transform: translateX(0); transition: transform 0.6s ease-in-out;
//         }
//         .container.right-panel-active .overlay { transform: translateX(50%); }
//         .overlay-panel {
//           position: absolute; display: flex; align-items: center; justify-content: center; flex-direction: column;
//           padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%; transform: translateX(0);
//           transition: transform 0.6s ease-in-out;
//         }
//         .overlay-left { transform: translateX(-20%); }
//         .container.right-panel-active .overlay-left { transform: translateX(0); }
//         .overlay-right { right: 0; transform: translateX(0); }
//         .container.right-panel-active .overlay-right { transform: translateX(20%); }

//         .modern-input {
//           background-color: #F5F5F5; border: 2px solid transparent; padding: 15px 15px 15px 45px;
//           width: 100%; border-radius: 12px; margin-bottom: 5px; font-size: 0.95rem; outline: none; transition: 0.3s;
//         }
//         .modern-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231,111,81,0.1); }
//         .modern-input.error-border { border-color: ${colors.error}; background-color: #FFF5F5; }

//         .error-msg {
//           color: ${colors.error}; font-size: 11px; margin-bottom: 10px; width: 100%; text-align: left; padding-left: 10px; font-weight: 500; display: flex; align-items: center; gap: 4px;
//         }
        
//         .btn-primary {
//           border-radius: 25px; border: none; background-color: ${colors.primary}; color: #ffffff;
//           font-size: 14px; font-weight: bold; padding: 15px 45px; letter-spacing: 1px; text-transform: uppercase;
//           transition: transform 80ms ease-in; cursor: pointer; margin-top: 10px;
//           box-shadow: 0 10px 20px rgba(231,111,81,0.3);
//         }
//         .btn-primary:active { transform: scale(0.95); }
        
//         .btn-ghost {
//           background-color: transparent; border-color: #ffffff; border: 2px solid white; border-radius: 25px;
//           color: white; padding: 12px 40px; font-weight: bold; cursor: pointer; transition: 0.3s;
//         }
//         .btn-ghost:hover { background: white; color: ${colors.primary}; }
//         .social-btn {
//           border: 1px solid #DDDDDD; border-radius: 50%; display: inline-flex; justify-content: center;
//           align-items: center; margin: 0 5px; height: 45px; width: 45px; cursor: pointer; transition: 0.3s;
//         }
//         .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-3px); }
//         .bg-image {
//           position: absolute; inset: 0; z-index: -1; background-image: url(${cakeBg});
//           background-size: cover; background-position: center; opacity: 0.4; mix-blend-mode: overlay;
//         }
//         .fade-in { animation: fadeIn 0.5s ease-in; }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        
//         <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

//           {/* SIGN UP FORM */}
//           <div className="form-container sign-up-container">
//             <form onSubmit={handleRegister} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//               <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Create Account</h1>
//               <div style={{ margin: "20px 0" }}>
//                 <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                 <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                 <button type="button" className="social-btn"><FiGithub size={20} /></button>
//               </div>
//               <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your email for registration</span>
              
//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiUser style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="text" name="name" placeholder="Name" className={`modern-input ${errors.name ? 'error-border' : ''}`} value={regData.name} onChange={handleRegChange} />
//               </div>
//               {errors.name && <span className="error-msg"><FiAlertCircle /> {errors.name}</span>}

//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="text" name="email" placeholder="Email" className={`modern-input ${errors.email ? 'error-border' : ''}`} value={regData.email} onChange={handleRegChange} />
//               </div>
//               {errors.email && <span className="error-msg"><FiAlertCircle /> {errors.email}</span>}

//               <div style={{ width: "100%", position: "relative" }}>
//                 <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                 <input type="password" name="password" placeholder="Password" className={`modern-input ${errors.password ? 'error-border' : ''}`} value={regData.password} onChange={handleRegChange} />
//               </div>
//               {errors.password && <span className="error-msg"><FiAlertCircle /> {errors.password}</span>}

//               <button className="btn-primary" disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
//             </form>
//           </div>

//           {/* SIGN IN / FORGOT PASSWORD CONTAINER */}
//           <div className="form-container sign-in-container">
            
//             {/* TOGGLE 1: NORMAL LOGIN */}
//             {!forgotPasswordMode ? (
//               <form onSubmit={handleLogin} className="fade-in" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Sign In</h1>
//                 <div style={{ margin: "20px 0" }}>
//                   <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
//                   <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
//                   <button type="button" className="social-btn"><FiGithub size={20} /></button>
//                 </div>
//                 <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your account</span>
                
//                 <div style={{ width: "100%", position: "relative" }}>
//                   <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                   <input type="text" name="email" placeholder="Email" className={`modern-input ${errors.loginEmail ? 'error-border' : ''}`} value={loginData.email} onChange={handleLoginChange} />
//                 </div>
//                 {errors.loginEmail && <span className="error-msg"><FiAlertCircle /> {errors.loginEmail}</span>}

//                 <div style={{ width: "100%", position: "relative" }}>
//                   <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                   <input type="password" name="password" placeholder="Password" className={`modern-input ${errors.loginPassword ? 'error-border' : ''}`} value={loginData.password} onChange={handleLoginChange} />
//                 </div>
//                 {errors.loginPassword && <span className="error-msg"><FiAlertCircle /> {errors.loginPassword}</span>}
                
//                 <span onClick={() => setForgotPasswordMode(true)} style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "10px 0 15px 0", fontWeight: "500", cursor: "pointer" }}>
//                   Forgot your password?
//                 </span>

//                 <button className="btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
//               </form>
//             ) : (
              
//               /* TOGGLE 2: FORGOT PASSWORD / RESET */
//               <div className="fade-in" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
                
//                 <button onClick={() => { setForgotPasswordMode(false); setOtpSent(false); setErrors({}); }} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", alignSelf: "flex-start", marginBottom: "20px" }}>
//                   <FiArrowLeft /> Back
//                 </button>

//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", margin: "0 0 10px 0", color: colors.secondary }}>Reset Password</h1>
//                 <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px", textAlign: "center" }}>
//                    {!otpSent ? "Enter your email to receive a code." : "Check your email for the OTP."}
//                 </p>

//                 {!otpSent ? (
//                   /* STEP 1: SEND EMAIL */
//                   <form onSubmit={handleSendOTP} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                     <div style={{ width: "100%", position: "relative" }}>
//                       <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                       <input type="text" placeholder="Email Address" value={forgotEmail} onChange={(e) => {setForgotEmail(e.target.value); setErrors({...errors, forgotEmail: null});}} className={`modern-input ${errors.forgotEmail ? 'error-border' : ''}`} />
//                     </div>
//                     {errors.forgotEmail && <span className="error-msg"><FiAlertCircle /> {errors.forgotEmail}</span>}

//                     <button type="submit" className="btn-primary" disabled={loading}>
//                       {loading ? "Sending..." : "Send Code"}
//                     </button>
//                   </form>
//                 ) : (
//                   /* STEP 2: VERIFY OTP & NEW PASSWORD */
//                   <form onSubmit={handleResetPassword} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                     <div style={{ width: "100%", position: "relative" }}>
//                       <FiKey style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                       <input type="text" placeholder="OTP Code" value={otp} onChange={(e) => {setOtp(e.target.value); setErrors({...errors, otp: null});}} className={`modern-input ${errors.otp ? 'error-border' : ''}`} />
//                     </div>
//                     {errors.otp && <span className="error-msg"><FiAlertCircle /> {errors.otp}</span>}

//                     <div style={{ width: "100%", position: "relative" }}>
//                       <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
//                       <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => {setNewPassword(e.target.value); setErrors({...errors, newPassword: null});}} className={`modern-input ${errors.newPassword ? 'error-border' : ''}`} />
//                     </div>
//                     {errors.newPassword && <span className="error-msg"><FiAlertCircle /> {errors.newPassword}</span>}

//                     <button type="submit" className="btn-primary" disabled={loading}>
//                       {loading ? "Updating..." : "Update Password"}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* OVERLAY SECTION */}
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="bg-image"></div>
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(231, 111, 81, 0.9), rgba(38, 70, 83, 0.8))" }}></div>
//               <div className="overlay-panel overlay-left">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Welcome Back!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>To keep connected with us please login with your personal info</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Hello, Friend!</h1>
//                 <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>Enter your personal details and start your delicious journey with us</p>
//                 <button className="btn-ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AuthPage;


import { useState, useEffect } from "react"; 
import { useNavigate, useLocation } from "react-router-dom"; 
import axios from "axios";
// Added FiEye and FiEyeOff to imports
import { FiUser, FiMail, FiLock, FiFacebook, FiGithub, FiArrowLeft, FiKey, FiAlertCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Make sure this path matches where your image is located
import cakeBg from "../assets/cakee1.jpg"; 

const BASE_URL = "https://finalproject-backend-7rqa.onrender.com/auth";

function AuthPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  
  // --- PASSWORD VISIBILITY STATES (NEW) ---
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [showRegPass, setShowRegPass] = useState(false);
  const [showResetPass, setShowResetPass] = useState(false);

  // --- FORGOT PASSWORD STATES ---
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation(); 
  const [loading, setLoading] = useState(false);

  // --- FORM DATA STATES ---
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [regData, setRegData] = useState({ name: "", email: "", password: "" });

  // --- VALIDATION ERROR STATE ---
  const [errors, setErrors] = useState({});
  
  // --- THEME COLORS ---
  const colors = {
    primary: "#E76F51", 
    secondary: "#264653", 
    bg: "#FDFCF8",
    white: "#FFFFFF",
    error: "#e74c3c" 
  };

  // --- CHECK LOGIN STATUS ---
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/allproduct", { replace: true });
    }
  }, [navigate]);

  // --- CLEAR ERRORS & PASS VISIBILITY ON MODE SWITCH ---
  useEffect(() => {
    setErrors({});
    setLoginData({ email: "", password: "" });
    setRegData({ name: "", email: "", password: "" });
    setShowLoginPass(false);
    setShowRegPass(false);
    setShowResetPass(false);
  }, [isSignUpMode, forgotPasswordMode]);

  // --- VALIDATION HELPERS ---
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = (type) => {
    const newErrors = {};

    if (type === "register") {
      if (!regData.name.trim()) newErrors.name = "Name is required.";
      if (!regData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!validateEmail(regData.email)) {
        newErrors.email = "Invalid email format.";
      }
      if (!regData.password) {
        newErrors.password = "Password is required.";
      } else if (regData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
      }
    } 
    
    else if (type === "login") {
      if (!loginData.email.trim()) {
        newErrors.loginEmail = "Email is required.";
      } else if (!validateEmail(loginData.email)) {
        newErrors.loginEmail = "Invalid email format.";
      }
      if (!loginData.password) {
        newErrors.loginPassword = "Password is required.";
      }
    }

    else if (type === "forgot-email") {
      if (!forgotEmail.trim()) {
        newErrors.forgotEmail = "Email is required.";
      } else if (!validateEmail(forgotEmail)) {
        newErrors.forgotEmail = "Invalid email format.";
      }
    }

    else if (type === "reset-pass") {
        if (!otp.trim()) newErrors.otp = "OTP is required.";
        if (!newPassword) {
            newErrors.newPassword = "Password is required.";
        } else if (newPassword.length < 6) {
            newErrors.newPassword = "Password must be at least 6 characters.";
        }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  // --- GOOGLE LOGIN ---
  const handleGoogleLogin = () => {
    window.open(`${BASE_URL}/google`, "_self");
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", "user"); 
      toast.success("✨ Google Login Successful!");
      window.history.replaceState({}, document.title, "/");
      navigate("/allproduct", { replace: true });
    }
  }, [location, navigate]);

  // --- INPUT HANDLERS ---
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    if (errors[e.target.name === 'email' ? 'loginEmail' : 'loginPassword']) {
        setErrors({...errors, [e.target.name === 'email' ? 'loginEmail' : 'loginPassword']: null});
    }
  };

  const handleRegChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
        setErrors({...errors, [e.target.name]: null});
    }
  };

  // --- SUBMIT FUNCTIONS (Login, Register, OTP, Reset) ---
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm("login")) return; 
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/login`, loginData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      toast.success("✨ Welcome back!");
      setTimeout(() => navigate("/allproduct", { replace: true }), 800);
    } catch (err) {
      console.error("Login Error:", err.response);
      toast.error(err.response?.data?.message || "Invalid credentials.");
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm("register")) return; 
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/register`, regData);
      toast.success("🎉 Account created! Please login.");
      setIsSignUpMode(false); 
      setLoading(false);
    } catch (err) {
      console.error("Register Error:", err.response);
      toast.error(err.response?.data?.message || "Registration failed.");
      setLoading(false);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!validateForm("forgot-email")) return;
    setLoading(true);
    const loadingToast = toast.loading("Sending email (this may take a moment)...");
    try {
      const res = await axios.post(`${BASE_URL}/forgot-password`, { email: forgotEmail }, { timeout: 30000 });
      toast.dismiss(loadingToast);
      toast.success(res.data.message || "OTP sent to your email!");
      setOtpSent(true);
    } catch (err) {
      toast.dismiss(loadingToast);
      console.error("Forgot Password Error:", err);
      if (err.code === 'ECONNABORTED') {
        toast.error("Server took too long. Please try again.");
      } else {
        toast.error(err.response?.data?.message || "❌ Connection failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!validateForm("reset-pass")) return;
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/reset-password`, {
        email: forgotEmail,
        otp,
        password: newPassword,
      });
      toast.success("🎉 Password reset successfully! Please login.");
      setOtpSent(false);
      setForgotPasswordMode(false);
      setForgotEmail("");
      setOtp("");
      setNewPassword("");
    } catch (err) {
      console.error("Reset Error:", err.response);
      toast.error(err.response?.data?.message || "❌ Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');

        .container {
          position: relative; overflow: hidden; width: 1000px; max-width: 100%; min-height: 650px;
          background-color: #fff; border-radius: 30px; box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }
        .form-container {
          position: absolute; top: 0; height: 100%; transition: all 0.6s ease-in-out;
        }
        .sign-in-container { left: 0; width: 50%; z-index: 2; }
        .sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; }
        .container.right-panel-active .sign-in-container { transform: translateX(100%); }
        .container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; animation: show 0.6s; }

        @keyframes show { 0%, 49.99% { opacity: 0; z-index: 1; } 50%, 100% { opacity: 1; z-index: 5; } }

        .overlay-container {
          position: absolute; top: 0; left: 50%; width: 50%; height: 100%; overflow: hidden;
          transition: transform 0.6s ease-in-out; z-index: 100; border-top-right-radius: 30px; border-bottom-right-radius: 30px;
        }
        .container.right-panel-active .overlay-container { transform: translateX(-100%); border-radius: 30px 0 0 30px; }
        .overlay {
          background: linear-gradient(to right, #E76F51, #264653); background-repeat: no-repeat;
          background-size: cover; background-position: 0 0; color: #ffffff; position: relative;
          left: -100%; height: 100%; width: 200%; transform: translateX(0); transition: transform 0.6s ease-in-out;
        }
        .container.right-panel-active .overlay { transform: translateX(50%); }
        .overlay-panel {
          position: absolute; display: flex; align-items: center; justify-content: center; flex-direction: column;
          padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%; transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }
        .overlay-left { transform: translateX(-20%); }
        .container.right-panel-active .overlay-left { transform: translateX(0); }
        .overlay-right { right: 0; transform: translateX(0); }
        .container.right-panel-active .overlay-right { transform: translateX(20%); }

        .modern-input {
          background-color: #F5F5F5; border: 2px solid transparent; 
          /* Updated padding right to 40px to accommodate the eye icon */
          padding: 15px 40px 15px 45px;
          width: 100%; border-radius: 12px; margin-bottom: 5px; font-size: 0.95rem; outline: none; transition: 0.3s;
        }
        .modern-input:focus { background: white; border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231,111,81,0.1); }
        .modern-input.error-border { border-color: ${colors.error}; background-color: #FFF5F5; }

        .error-msg {
          color: ${colors.error}; font-size: 11px; margin-bottom: 10px; width: 100%; text-align: left; padding-left: 10px; font-weight: 500; display: flex; align-items: center; gap: 4px;
        }
        
        .btn-primary {
          border-radius: 25px; border: none; background-color: ${colors.primary}; color: #ffffff;
          font-size: 14px; font-weight: bold; padding: 15px 45px; letter-spacing: 1px; text-transform: uppercase;
          transition: transform 80ms ease-in; cursor: pointer; margin-top: 10px;
          box-shadow: 0 10px 20px rgba(231,111,81,0.3);
        }
        .btn-primary:active { transform: scale(0.95); }
        
        .btn-ghost {
          background-color: transparent; border-color: #ffffff; border: 2px solid white; border-radius: 25px;
          color: white; padding: 12px 40px; font-weight: bold; cursor: pointer; transition: 0.3s;
        }
        .btn-ghost:hover { background: white; color: ${colors.primary}; }
        .social-btn {
          border: 1px solid #DDDDDD; border-radius: 50%; display: inline-flex; justify-content: center;
          align-items: center; margin: 0 5px; height: 45px; width: 45px; cursor: pointer; transition: 0.3s;
        }
        .social-btn:hover { border-color: ${colors.primary}; transform: translateY(-3px); }
        .bg-image {
          position: absolute; inset: 0; z-index: -1; background-image: url(${cakeBg});
          background-size: cover; background-position: center; opacity: 0.4; mix-blend-mode: overlay;
        }
        .fade-in { animation: fadeIn 0.5s ease-in; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        /* Eye Icon Style */
        .eye-icon {
          position: absolute; top: 18px; right: 15px; color: #888; cursor: pointer; z-index: 10;
        }
        .eye-icon:hover { color: ${colors.primary}; }
      `}</style>

      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        
        <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

          {/* SIGN UP FORM */}
          <div className="form-container sign-up-container">
            <form onSubmit={handleRegister} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Create Account</h1>
              <div style={{ margin: "20px 0" }}>
                <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
                <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
                <button type="button" className="social-btn"><FiGithub size={20} /></button>
              </div>
              <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your email for registration</span>
              
              <div style={{ width: "100%", position: "relative" }}>
                <FiUser style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                <input type="text" name="name" placeholder="Name" className={`modern-input ${errors.name ? 'error-border' : ''}`} value={regData.name} onChange={handleRegChange} />
              </div>
              {errors.name && <span className="error-msg"><FiAlertCircle /> {errors.name}</span>}

              <div style={{ width: "100%", position: "relative" }}>
                <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                <input type="text" name="email" placeholder="Email" className={`modern-input ${errors.email ? 'error-border' : ''}`} value={regData.email} onChange={handleRegChange} />
              </div>
              {errors.email && <span className="error-msg"><FiAlertCircle /> {errors.email}</span>}

              {/* REGISTER PASSWORD INPUT WITH EYE ICON */}
              <div style={{ width: "100%", position: "relative" }}>
                <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                <input 
                  type={showRegPass ? "text" : "password"} 
                  name="password" 
                  placeholder="Password" 
                  className={`modern-input ${errors.password ? 'error-border' : ''}`} 
                  value={regData.password} 
                  onChange={handleRegChange} 
                />
                <span className="eye-icon" onClick={() => setShowRegPass(!showRegPass)}>
                  {showRegPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </span>
              </div>
              {errors.password && <span className="error-msg"><FiAlertCircle /> {errors.password}</span>}

              <button className="btn-primary" disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
            </form>
          </div>

          {/* SIGN IN / FORGOT PASSWORD CONTAINER */}
          <div className="form-container sign-in-container">
            
            {/* TOGGLE 1: NORMAL LOGIN */}
            {!forgotPasswordMode ? (
              <form onSubmit={handleLogin} className="fade-in" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, color: colors.secondary }}>Sign In</h1>
                <div style={{ margin: "20px 0" }}>
                  <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle size={20} /></button>
                  <button type="button" className="social-btn"><FiFacebook size={20} color="#1877F2" /></button>
                  <button type="button" className="social-btn"><FiGithub size={20} /></button>
                </div>
                <span style={{ fontSize: "12px", marginBottom: "15px", color: "#888" }}>or use your account</span>
                
                <div style={{ width: "100%", position: "relative" }}>
                  <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                  <input type="text" name="email" placeholder="Email" className={`modern-input ${errors.loginEmail ? 'error-border' : ''}`} value={loginData.email} onChange={handleLoginChange} />
                </div>
                {errors.loginEmail && <span className="error-msg"><FiAlertCircle /> {errors.loginEmail}</span>}

                {/* LOGIN PASSWORD INPUT WITH EYE ICON */}
                <div style={{ width: "100%", position: "relative" }}>
                  <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                  <input 
                    type={showLoginPass ? "text" : "password"} 
                    name="password" 
                    placeholder="Password" 
                    className={`modern-input ${errors.loginPassword ? 'error-border' : ''}`} 
                    value={loginData.password} 
                    onChange={handleLoginChange} 
                  />
                  <span className="eye-icon" onClick={() => setShowLoginPass(!showLoginPass)}>
                    {showLoginPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </span>
                </div>
                {errors.loginPassword && <span className="error-msg"><FiAlertCircle /> {errors.loginPassword}</span>}
                
                <span onClick={() => setForgotPasswordMode(true)} style={{ color: "#333", fontSize: "14px", textDecoration: "none", margin: "10px 0 15px 0", fontWeight: "500", cursor: "pointer" }}>
                  Forgot your password?
                </span>

                <button className="btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
              </form>
            ) : (
              
              /* TOGGLE 2: FORGOT PASSWORD / RESET */
              <div className="fade-in" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 50px", backgroundColor: "white" }}>
                
                <button onClick={() => { setForgotPasswordMode(false); setOtpSent(false); setErrors({}); }} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", alignSelf: "flex-start", marginBottom: "20px" }}>
                  <FiArrowLeft /> Back
                </button>

                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", margin: "0 0 10px 0", color: colors.secondary }}>Reset Password</h1>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px", textAlign: "center" }}>
                   {!otpSent ? "Enter your email to receive a code." : "Check your email for the OTP."}
                </p>

                {!otpSent ? (
                  /* STEP 1: SEND EMAIL */
                  <form onSubmit={handleSendOTP} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "100%", position: "relative" }}>
                      <FiMail style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                      <input type="text" placeholder="Email Address" value={forgotEmail} onChange={(e) => {setForgotEmail(e.target.value); setErrors({...errors, forgotEmail: null});}} className={`modern-input ${errors.forgotEmail ? 'error-border' : ''}`} />
                    </div>
                    {errors.forgotEmail && <span className="error-msg"><FiAlertCircle /> {errors.forgotEmail}</span>}

                    <button type="submit" className="btn-primary" disabled={loading}>
                      {loading ? "Sending..." : "Send Code"}
                    </button>
                  </form>
                ) : (
                  /* STEP 2: VERIFY OTP & NEW PASSWORD */
                  <form onSubmit={handleResetPassword} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: "100%", position: "relative" }}>
                      <FiKey style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                      <input type="text" placeholder="OTP Code" value={otp} onChange={(e) => {setOtp(e.target.value); setErrors({...errors, otp: null});}} className={`modern-input ${errors.otp ? 'error-border' : ''}`} />
                    </div>
                    {errors.otp && <span className="error-msg"><FiAlertCircle /> {errors.otp}</span>}

                    {/* NEW PASSWORD INPUT WITH EYE ICON */}
                    <div style={{ width: "100%", position: "relative" }}>
                      <FiLock style={{ position: "absolute", top: "18px", left: "15px", color: "#bbb" }} />
                      <input 
                        type={showResetPass ? "text" : "password"} 
                        placeholder="New Password" 
                        value={newPassword} 
                        onChange={(e) => {setNewPassword(e.target.value); setErrors({...errors, newPassword: null});}} 
                        className={`modern-input ${errors.newPassword ? 'error-border' : ''}`} 
                      />
                      <span className="eye-icon" onClick={() => setShowResetPass(!showResetPass)}>
                        {showResetPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                      </span>
                    </div>
                    {errors.newPassword && <span className="error-msg"><FiAlertCircle /> {errors.newPassword}</span>}

                    <button type="submit" className="btn-primary" disabled={loading}>
                      {loading ? "Updating..." : "Update Password"}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* OVERLAY SECTION */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="bg-image"></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(231, 111, 81, 0.9), rgba(38, 70, 83, 0.8))" }}></div>
              <div className="overlay-panel overlay-left">
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Welcome Back!</h1>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>To keep connected with us please login with your personal info</p>
                <button className="btn-ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>Hello, Friend!</h1>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>Enter your personal details and start your delicious journey with us</p>
                <button className="btn-ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AuthPage;