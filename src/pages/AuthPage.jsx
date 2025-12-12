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


import { useState, useEffect } from "react"; 
import { useNavigate, useLocation } from "react-router-dom"; 
import axios from "axios";
import { FiUser, FiMail, FiLock, FiFacebook, FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// IMAGE
import cakeBg from "../assets/cakee1.jpg"; 

const BASE_URL = "https://finalproject-backend-7rqa.onrender.com/auth";

function AuthPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [forgotMode, setForgotMode] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // LOGIN / REGISTER STATES
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [regData, setRegData] = useState({ name: "", email: "", password: "" });

  // FORGOT PASSWORD STATES
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const colors = { primary: "#E76F51", secondary: "#264653", bg: "#FDFCF8" };

  // ------------------------ REDIRECT IF LOGGED IN ------------------------
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/allproduct", { replace: true });
  }, [navigate]);

  // ------------------------ GOOGLE LOGIN ------------------------
  const handleGoogleLogin = () => {
    window.open(`${BASE_URL}/google`, "_self");
  };
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", "user");
      toast.success("✨ Google Login Successful!");
      window.history.replaceState({}, document.title, "/");
      navigate("/allproduct", { replace: true });
    }
  }, [location, navigate]);

  // ------------------------ FORM HANDLERS ------------------------
  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleRegChange = (e) => setRegData({ ...regData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault(); setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/login`, loginData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      toast.success("✨ Welcome back!");
      setTimeout(() => navigate("/allproduct", { replace: true }), 800);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials.");
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); setLoading(true);
    try {
      await axios.post(`${BASE_URL}/register`, regData);
      toast.success("🎉 Account created! Please login.");
      setIsSignUpMode(false); setLoading(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
      setLoading(false);
    }
  };

  // ------------------------ FORGOT PASSWORD ------------------------
  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/forgot-password`, { email: forgotEmail });
      toast.success(res.data.message || "OTP sent!");
      setOtpSent(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP.");
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/reset-password`, { email: forgotEmail, otp, password: newPassword });
      toast.success(res.data.message || "Password updated!");
      setOtpSent(false); setForgotMode(false);
      setForgotEmail(""); setOtp(""); setNewPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reset password.");
    }
  };

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Navbar />

      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px" }}>
        <div className={`container ${isSignUpMode ? "right-panel-active" : ""}`}>

          {/* SIGN UP */}
          <div className="form-container sign-up-container">
            <form onSubmit={handleRegister}>
              <h1>Create Account</h1>
              <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle /></button>
              <button type="button" className="social-btn"><FiFacebook /></button>
              <button type="button" className="social-btn"><FiGithub /></button>
              <input type="text" name="name" placeholder="Name" value={regData.name} onChange={handleRegChange} />
              <input type="email" name="email" placeholder="Email" value={regData.email} onChange={handleRegChange} />
              <input type="password" name="password" placeholder="Password" value={regData.password} onChange={handleRegChange} />
              <button disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
            </form>
          </div>

          {/* SIGN IN */}
          <div className="form-container sign-in-container">
            {!forgotMode ? (
              <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <button type="button" onClick={handleGoogleLogin} className="social-btn"><FcGoogle /></button>
                <button type="button" className="social-btn"><FiFacebook /></button>
                <button type="button" className="social-btn"><FiGithub /></button>
                <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />
                <p style={{ cursor: "pointer", color: "#333" }} onClick={() => setForgotMode(true)}>Forgot your password?</p>
                <button disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
              </form>
            ) : !otpSent ? (
              <form onSubmit={handleSendOTP}>
                <h1>Forgot Password</h1>
                <input type="email" placeholder="Enter your email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} />
                <button>Send OTP</button>
                <p style={{ cursor: "pointer" }} onClick={() => setForgotMode(false)}>Back to login</p>
              </form>
            ) : (
              <form onSubmit={handleResetPassword}>
                <h1>Reset Password</h1>
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <button>Reset Password</button>
              </form>
            )}
          </div>

          {/* OVERLAY */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="bg-image"></div>
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button onClick={() => setIsSignUpMode(false)}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start your delicious journey with us</p>
                <button onClick={() => setIsSignUpMode(true)}>Sign Up</button>
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
