// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Login.css"; // Ungal CSS file

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const navigate = useNavigate();

//   const API_URL = "http://localhost:5000/auth/login";

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(API_URL, { email, password });
//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");
//       navigate("/"); // Homepage or dashboard
//     } catch (err) {
//       console.error("Login failed:", err.response?.data || err.message);
//       alert("Login failed! Check your credentials.");
//     }
//   };

//   const handleSendOTP = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/auth/forgot-password",
//         { email: forgotEmail }
//       );
//       alert(res.data.message);
//       setForgotPasswordMode(false); // Back to login
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Failed to send OTP! Check your email.");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="main-content">
//         <div className="container">
//           {/* Left: Sign in form */}
//           <div className="login-section">
//             <h2>{forgotPasswordMode ? "Forgot Password" : "Sign In"}</h2>

//             <div className="social-login">
//               <button className="google">G</button>
//               <button className="facebook">f</button>
//             </div>

//             <p>Or use your email & password</p>

//             <form onSubmit={forgotPasswordMode ? handleSendOTP : handleLogin}>
//               {forgotPasswordMode ? (
//                 <>
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={forgotEmail}
//                     onChange={(e) => setForgotEmail(e.target.value)}
//                     required
//                   />
//                   <button type="submit" className="login-btn">
//                     Send OTP
//                   </button>
//                   <p
//                     style={{ cursor: "pointer", color: "blue" }}
//                     onClick={() => setForgotPasswordMode(false)}
//                   >
//                     Back to Login
//                   </p>
//                 </>
//               ) : (
//                 <>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <p
//                     className="forget"
//                     style={{ cursor: "pointer", color: "blue" }}
//                     onClick={() => setForgotPasswordMode(true)}
//                   >
//                     Forget Your Password ? Reset here
//                   </p>
//                   <button type="submit" className="login-btn">
//                     Sign in
//                   </button>
//                 </>
//               )}
//             </form>
//           </div>

//           {/* Right: Sign up prompt */}
//           <div className="sign-section">
//             <h2>Hello, Friend!</h2>
//             <p>
//               Register with your personal details to use
//               <br /> all of site features
//             </p>
//             <button className="sign-btn" onClick={() => navigate("/register")}>
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <Footer />
//     </>
//   );
// }

// export default Login;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const navigate = useNavigate();

//   // Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");
//       localStorage.setItem("role", res.data.role); // 👈 இங்க role save பண்ணுறோம்

//       navigate("/");
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Login failed! Check your credentials.");
//     }
//   };

//   // Send OTP
//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/auth/forgot-password", { email: forgotEmail });
//       alert(res.data.message);
//       setOtpSent(true); // OTP sent, now show OTP input + new password
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Failed to send OTP! Check your email.");
//     }
//   };

//   // Reset password
//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/auth/reset-password", {
//         email: forgotEmail,
//         otp,
//         password: newPassword,
//       });
//       alert(res.data.message);
//       // Reset states
//       setForgotPasswordMode(false);
//       setOtpSent(false);
//       setForgotEmail("");
//       setOtp("");
//       setNewPassword("");
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert(err.response?.data?.message || "Failed to reset password");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="main-content">
//         <div className="container">
//           <div className="login-section">
//             <h2>{forgotPasswordMode ? "Reset Password" : "Sign In"}</h2>


//             <div className="social-login">
//               {/* <button className="google">G</button>
//               <button className="facebook">f</button> */}
//               <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" /></a>
//               <a href="#"><img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google" /></a>

//             </div>

//             {!forgotPasswordMode ? (
//               <form onSubmit={handleLogin}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <p style={{ cursor: "pointer", color: "blue" }} onClick={() => setForgotPasswordMode(true)}>
//                   Forget Your Password? Reset here
//                 </p>
//                 <button type="submit" className="login-btn">Sign In</button>

//               </form>
//             ) : !otpSent ? (
//               <form onSubmit={handleSendOTP}>
//                 <input type="email" placeholder="Enter your email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} required />
//                 <button type="submit" className="login-btn">Send OTP</button>
//                 <p style={{ cursor: "pointer", color: "blue" }} onClick={() => setForgotPasswordMode(false)}>Back to Login</p>
//               </form>
//             ) : (
//               <form onSubmit={handleResetPassword}>
//                 <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
//                 <input type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
//                 <button type="submit" className="login-btn">Reset Password</button>
//               </form>
//             )}
//           </div>

//           <div className="sign-section">
//             <h2>Hello, Friend!</h2>
//             <p>Register with your personal details to use all of site features</p>
//             <button className="sign-btn" onClick={() => navigate("/register")}>Sign up</button>
//           </div>
//         </div>
//       </div>
//       <br /><br />
//       <Footer />
//     </>
//   );
// }

// export default Login;













// import React, { useState } from "react";
// import "./Login.css";

// function SignInSignUp() {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const toggleForm = () => setIsSignUp(!isSignUp);

//   return (
//     <div className="container">
//       <div className={`form-container ${isSignUp ? "sign-up-mode" : ""}`}>
//         {/* Sign In Form */}
//         <form className="form sign-in-form">
//           <h2>Sign In</h2>
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">Sign In</button>
//           <p>
//             Don't have an account?{" "}
//             <span onClick={toggleForm}>Create Account</span>
//           </p>
//         </form>

//         {/* Sign Up Form */}
//         <form className="form sign-up-form">
//           <h2>Create Account</h2>
//           <input type="text" placeholder="Full Name" required />
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">Sign Up</button>
//           <p>
//             Already have an account?{" "}
//             <span onClick={toggleForm}>Sign In</span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignInSignUp;
// 
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({}); // 🔥 Validation

//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const navigate = useNavigate();

//   // 🔥 LOGIN VALIDATION
//   const validateLogin = () => {
//     let temp = {};

//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email))
//       temp.email = "Invalid email format";

//     if (!password.trim()) temp.password = "Password is required";

//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   // LOGIN
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!validateLogin()) return;

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/auth/login",
//         { email, password }
//       );

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       toast.success("✅ Login successful!");
//       setTimeout(() => navigate("/"), 1500);
//     } catch (err) {
//       toast.error("❌ Login failed! Check your credentials.");
//     }
//   };

//   // SEND OTP
//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/auth/forgot-password",
//         { email: forgotEmail }
//       );
//       toast.success(res.data.message);
//       setOtpSent(true);
//     } catch (err) {
//       toast.error("❌ Failed to send OTP! Check your email.");
//     }
//   };

//   // RESET PASSWORD
//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/auth/reset-password",
//         {
//           email: forgotEmail,
//           otp,
//           password: newPassword,
//         }
//       );

//       toast.success(res.data.message);
//       setOtpSent(false);
//       setForgotPasswordMode(false);
//       setForgotEmail("");
//       setOtp("");
//       setNewPassword("");
//     } catch (err) {
//       toast.error(
//         err.response?.data?.message || "❌ Failed to reset password"
//       );
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="background-shapes">
//         <div className="shape shape1"></div>
//         <div className="shape shape2"></div>
//         <div className="shape shape3"></div>
//       </div>

//       <div className="main-content">
//         <div className="container">
//           <div className="login-section">
//             <h2>{forgotPasswordMode ? "Reset Password" : "Sign In"}</h2>

//             <div className="social-login">
//               <a href="#">
//                 <img
//                   src="src/assets/facebook-logo-blue-circle_705838-12823.jpg"
//                   alt="Facebook"
//                 />
//               </a>
//               <a href="#">
//                 <img
//                   src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png"
//                   alt="Google"
//                 />
//               </a>
//             </div>

//             {!forgotPasswordMode ? (
//               <form onSubmit={handleLogin}>
//                 {/* EMAIL */}
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {errors.email && <p className="error">{errors.email}</p>}

//                 {/* PASSWORD */}
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {errors.password && (
//                   <p className="error">{errors.password}</p>
//                 )}

//                 <p
//                   style={{ cursor: "pointer", color: "blue" }}
//                   onClick={() => setForgotPasswordMode(true)}
//                 >
//                   Forget Your Password? Reset here
//                 </p>

//                 <button type="submit" className="login-btn">
//                   Sign In
//                 </button>
//               </form>
//             ) : !otpSent ? (
//               <form onSubmit={handleSendOTP}>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={forgotEmail}
//                   onChange={(e) => setForgotEmail(e.target.value)}
//                 />
//                 <button type="submit" className="login-btn">
//                   Send OTP
//                 </button>

//                 <p
//                   style={{ cursor: "pointer", color: "blue" }}
//                   onClick={() => setForgotPasswordMode(false)}
//                 >
//                   Back to Login
//                 </p>
//               </form>
//             ) : (
//               <form onSubmit={handleResetPassword}>
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter New Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <button type="submit" className="login-btn">
//                   Reset Password
//                 </button>
//               </form>
//             )}
//           </div>

//           <div className="sign-section">
//             <h2>Hello, Friend!</h2>
//             <p>Register with your personal details to use all site features</p>
//             <button className="sign-btn" onClick={() => navigate("/register")}>
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Login;



//my//

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const navigate = useNavigate();

//   const validateLogin = () => {
//     let temp = {};
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
//     if (!password.trim()) temp.password = "Password is required";
//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateLogin()) return;
//     try {
//       const res = await axios.post("http://localhost:5000/auth/login", { email, password });
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
//       const res = await axios.post("http://localhost:5000/auth/forgot-password", { email: forgotEmail });
//       toast.success(res.data.message);
//       setOtpSent(true);
//     } catch (err) {
//       toast.error("❌ Failed to send OTP! Check your email.");
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/auth/reset-password", {
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

//           {/* Left Side - Welcome/Register */}
//           <div className="hidden md:flex flex-col justify-center items-center bg-purple-500 text-white w-1/2 p-10 space-y-6">
//             <h2 className="text-4xl font-bold">Hello, Friend!</h2>
//             <p className="text-lg text-purple-100">Register with your personal details to use all site features</p>
//             <button
//               onClick={() => navigate("/register")}
//               className="bg-white text-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Right Side - Login Form */}
//           <div className="w-full md:w-1/2 p-10">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
//               {forgotPasswordMode ? "Reset Password" : "Sign In"}
//             </h2>

//             <div className="flex justify-center md:justify-start space-x-4 mb-4">
//               <a href="#">
//                 <img
//                   src="src/assets/facebook-logo-blue-circle_705838-12823.jpg"
//                   alt="Facebook"
//                   className="w-10 h-10 rounded-full hover:scale-105 transition"
//                 />
//               </a>
//               <a href="#">
//                 <img
//                   src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png"
//                   alt="Google Login"
//                   className="w-10 h-10 rounded-full hover:scale-105 transition"
//                 />
//               </a>
//             </div>

//             {!forgotPasswordMode ? (
//               <form className="space-y-4" onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//                 />
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//                 <p
//                   className="text-blue-500 cursor-pointer hover:underline"
//                   onClick={() => setForgotPasswordMode(true)}
//                 >
//                   Forget Your Password? Reset here
//                 </p>

//                 <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
//                   Sign In
//                 </button>
//               </form>
//             ) : !otpSent ? (
//               <form className="space-y-4" onSubmit={handleSendOTP}>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={forgotEmail}
//                   onChange={(e) => setForgotEmail(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//                 />
//                 <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
//                   Send OTP
//                 </button>
//                 <p
//                   className="text-blue-500 cursor-pointer hover:underline"
//                   onClick={() => setForgotPasswordMode(false)}
//                 >
//                   Back to Login
//                 </p>
//               </form>
//             ) : (
//               <form className="space-y-4" onSubmit={handleResetPassword}>
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter New Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//                 />
//                 <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
//                   Reset Password
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Login;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const navigate = useNavigate();

//   const validateLogin = () => {
//     let temp = {};
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
//     if (!password.trim()) temp.password = "Password is required";
//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateLogin()) return;
//     try {
//       const res = await axios.post("http://localhost:5000/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success("✅ Login successful!");

//       // Redirect based on role
//       setTimeout(() => {
//         if (res.data.role === "admin") navigate("/admin");
//         else navigate("/");
//       }, 1000);
//     } catch (err) {
//       toast.error("❌ Login failed! Check your credentials.");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 p-4">
//         <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex overflow-hidden">

//           {/* Left Panel */}
//           <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-purple-600 to-indigo-600 text-white w-1/2 p-10 space-y-6">
//             <h2 className="text-5xl font-bold">Welcome Back!</h2>
//             <p className="text-lg text-purple-200 text-center">Enter your details to log in and explore all features.</p>
//             <button
//               onClick={() => navigate("/register")}
//               className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-bold hover:bg-purple-100 transition"
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Right Panel - Login Form */}
//           <div className="w-full md:w-1/2 p-10">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
//               {forgotPasswordMode ? "Reset Password" : "Sign In"}
//             </h2>

//             <div className="flex justify-center md:justify-start space-x-4 mb-6">
//               <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" className="w-10 h-10 rounded-full hover:scale-110 transition" /></a>
//               <a href="#"><img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" className="w-10 h-10 rounded-full hover:scale-110 transition" /></a>
//             </div>

//             {!forgotPasswordMode ? (
//               <form className="space-y-4" onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
//                 />
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//                 <p
//                   className="text-pink-500 cursor-pointer hover:underline"
//                   onClick={() => setForgotPasswordMode(true)}
//                 >
//                   Forgot Password?
//                 </p>

//                 <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition">
//                   Sign In
//                 </button>
//               </form>
//             ) : (
//               <p className="text-center text-gray-600">Reset password form here...</p>
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Login;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const navigate = useNavigate();

//   const validateLogin = () => {
//     let temp = {};
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
//     if (!password.trim()) temp.password = "Password is required";
//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateLogin()) return;
//     try {
//       const res = await axios.post("http://localhost:5000/auth/login", { email, password });
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
//       const res = await axios.post("http://localhost:5000/auth/forgot-password", { email: forgotEmail });
//       toast.success(res.data.message);
//       setOtpSent(true);
//     } catch (err) {
//       toast.error("❌ Failed to send OTP! Check your email.");
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/auth/reset-password", {
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
//       <br></br><br></br><br></br><br></br><br></br>
//       <div className="h-32"></div>

//       {/* Attractive Background */}
//       <div className="min-h-screen flex items-center justify-center bg-cream p-4">
//         <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl flex overflow-hidden border border-brown">

//           {/* Left Side Panel */}
//           <div className="hidden md:flex flex-col justify-center items-center bg-panel text-brown w-1/2 p-10 space-y-6">
//             <h2 className="text-4xl font-bold">Hello, Friend! 👋</h2>
//             <p className="text-lg text-muted text-center">
//               Register with your personal details to access all features
//             </p>
//             <button
//               onClick={() => navigate("/register")}
//               className="bg-accent text-white px-6 py-3 rounded-lg font-semibold transition"
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Right Side Login Form */}
//           <div className="w-full md:w-1/2 p-10">
//             <h2 className="text-3xl font-bold text-brown mb-6 text-center md:text-left">
//               {forgotPasswordMode ? "Reset Password" : "Sign In"}
//             </h2>

//             {!forgotPasswordMode ? (
//               <form className="space-y-4" onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 border border-brown rounded-lg bg-cream focus:ring-2 focus:ring-accent"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 border border-brown rounded-lg bg-cream focus:ring-2 focus:ring-accent"
//                 />
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//                 <p
//                   className="text-accent cursor-pointer hover:underline"
//                   onClick={() => setForgotPasswordMode(true)}
//                 >
//                   Forget your password?
//                 </p>

//                 <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold transition">
//                   Sign In
//                 </button>
//               </form>
//             ) : !otpSent ? (
//               <form className="space-y-4" onSubmit={handleSendOTP}>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={forgotEmail}
//                   onChange={(e) => setForgotEmail(e.target.value)}
//                   className="w-full p-3 border border-brown rounded-lg bg-cream focus:ring-2 focus:ring-accent"
//                 />
//                 <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold transition">
//                   Send OTP
//                 </button>

//                 <p
//                   className="text-accent cursor-pointer hover:underline"
//                   onClick={() => setForgotPasswordMode(false)}
//                 >
//                   Back to Login
//                 </p>
//               </form>
//             ) : (
//               <form className="space-y-4" onSubmit={handleResetPassword}>
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full p-3 border border-brown rounded-lg bg-cream focus:ring-2 focus:ring-accent"
//                 />

//                 <input
//                   type="password"
//                   placeholder="Enter New Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full p-3 border border-brown rounded-lg bg-cream focus:ring-2 focus:ring-accent"
//                 />

//                 <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold transition">
//                   Reset Password
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
// <br></br><br></br><br></br><br></br>
//       <Footer />
//     </>
//   );
// }

// export default Login;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLock, FiArrowRight, FiKey, FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  
  // Forgot Password States
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // --- LOGIC HANDLERS ---

  const validateLogin = () => {
    let temp = {};
    if (!email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
    if (!password.trim()) temp.password = "Password is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      toast.success("✨ Welcome back!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error("❌ Invalid credentials. Please try again.");
      setLoading(false);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!forgotEmail) return toast.warning("Please enter your email first.");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/auth/forgot-password", { email: forgotEmail });
      toast.success(res.data.message);
      setOtpSent(true);
    } catch (err) {
      toast.error("❌ Could not send OTP. Check your email address.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!otp || !newPassword) return toast.warning("Please fill all fields.");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/auth/reset-password", {
        email: forgotEmail,
        otp,
        password: newPassword,
      });
      toast.success("🎉 Password reset successfully! Please login.");
      
      // Reset States
      setOtpSent(false);
      setForgotPasswordMode(false);
      setForgotEmail("");
      setOtp("");
      setNewPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  // --- RENDER ---

  return (
    <div className="min-h-screen bg-[#FFF8EC] font-sans text-[#6A4E3B] selection:bg-[#D6A85B] selection:text-white flex flex-col">
      <Navbar />
<br></br><br></br><br></br><br></br>
      <main className="flex-grow flex items-center justify-center py-28 px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(106,78,59,0.15)] overflow-hidden flex flex-col md:flex-row min-h-[600px]"
        >

          {/* --- RIGHT SIDE: Welcome / Sign Up (Coffee Background) --- 
              Note: Swapped sides compared to Register for visual variety 
          */}
          <div className="w-full md:w-5/12 bg-[#6A4E3B] text-[#FFF8EC] p-10 flex flex-col justify-center items-center text-center relative order-last md:order-first overflow-hidden">
            {/* Decorative Background Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#D6A85B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D6A85B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                New Here?
              </h2>
              <p className="text-lg opacity-80 mb-8 font-light leading-relaxed">
                Join us today and discover the finest artisanal pastries baked with love.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/register")}
                className="border-2 border-[#FFF8EC] text-[#FFF8EC] px-8 py-3 rounded-full font-bold hover:bg-[#FFF8EC] hover:text-[#6A4E3B] transition-all"
              >
                Create Account
              </motion.button>
            </div>
          </div>

          {/* --- LEFT SIDE: Login Form (White Background) --- */}
          <div className="w-full md:w-7/12 p-10 md:p-14 bg-white relative flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              
              <AnimatePresence mode="wait">
                {!forgotPasswordMode ? (
                  // --- LOGIN FORM ---
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center md:text-left mb-10">
                      <h2 className="text-4xl font-serif font-bold text-[#6A4E3B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Welcome Back
                      </h2>
                      <p className="text-[#8C7B6F]">Sign in to continue your delicious journey.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                      {/* Email Input */}
                      <div className="group">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiMail className="text-gray-400 group-focus-within:text-[#D6A85B] transition-colors" />
                          </div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 bg-[#F9F9F9] border border-transparent rounded-xl focus:bg-white focus:border-[#D6A85B] focus:ring-4 focus:ring-[#D6A85B]/10 outline-none transition-all placeholder-gray-400 font-medium"
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
                      </div>

                      {/* Password Input */}
                      <div className="group">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiLock className="text-gray-400 group-focus-within:text-[#D6A85B] transition-colors" />
                          </div>
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 bg-[#F9F9F9] border border-transparent rounded-xl focus:bg-white focus:border-[#D6A85B] focus:ring-4 focus:ring-[#D6A85B]/10 outline-none transition-all placeholder-gray-400 font-medium"
                          />
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password}</p>}
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setForgotPasswordMode(true)}
                          className="text-sm text-[#D6A85B] hover:text-[#6A4E3B] font-semibold transition-colors"
                        >
                          Forgot Password?
                        </button>
                      </div>

                      <motion.button 
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-[#6A4E3B] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#563e2d] hover:shadow-xl transition-all flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                      >
                        {loading ? "Signing in..." : "Sign In"}
                      </motion.button>
                    </form>
                  </motion.div>

                ) : (
                  // --- FORGOT PASSWORD FLOW ---
                  <motion.div
                    key="forgot"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center md:text-left mb-8">
                      <button 
                        onClick={() => {
                          setForgotPasswordMode(false);
                          setOtpSent(false);
                        }}
                        className="flex items-center text-sm text-gray-400 hover:text-[#6A4E3B] mb-4 transition-colors"
                      >
                        <FiArrowLeft className="mr-1" /> Back to Login
                      </button>
                      <h2 className="text-3xl font-serif font-bold text-[#6A4E3B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Reset Password
                      </h2>
                      <p className="text-[#8C7B6F]">
                        {!otpSent 
                          ? "Enter your email to receive a verification code." 
                          : "Enter the OTP sent to your email."}
                      </p>
                    </div>

                    {!otpSent ? (
                      <form onSubmit={handleSendOTP} className="space-y-6">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiMail className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 bg-[#F9F9F9] border border-transparent rounded-xl focus:bg-white focus:border-[#D6A85B] focus:ring-4 focus:ring-[#D6A85B]/10 outline-none transition-all font-medium"
                            required
                          />
                        </div>
                        <motion.button 
                          type="submit"
                          disabled={loading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-[#D6A85B] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#c49648] transition-all flex items-center justify-center gap-2"
                        >
                          {loading ? "Sending..." : <><FiArrowRight /> Send Code</>}
                        </motion.button>
                      </form>
                    ) : (
                      <form onSubmit={handleResetPassword} className="space-y-6">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiKey className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 bg-[#F9F9F9] border border-transparent rounded-xl focus:bg-white focus:border-[#D6A85B] focus:ring-4 focus:ring-[#D6A85B]/10 outline-none transition-all font-medium"
                            required
                          />
                        </div>

                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiLock className="text-gray-400" />
                          </div>
                          <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 bg-[#F9F9F9] border border-transparent rounded-xl focus:bg-white focus:border-[#D6A85B] focus:ring-4 focus:ring-[#D6A85B]/10 outline-none transition-all font-medium"
                            required
                          />
                        </div>

                        <motion.button 
                          type="submit"
                          disabled={loading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-[#D6A85B] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#c49648] transition-all"
                        >
                          {loading ? "Resetting..." : "Reset Password"}
                        </motion.button>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;