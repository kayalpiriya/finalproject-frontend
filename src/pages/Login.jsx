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

//   const API_URL = "https://finalproject-backend-7rqa.onrender.com/authlogin";

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
//         "https://finalproject-backend-7rqa.onrender.com/authforgot-password",
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
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authlogin", { email, password });
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
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authforgot-password", { email: forgotEmail });
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
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authreset-password", {
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
//         "https://finalproject-backend-7rqa.onrender.com/authlogin",
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
//         "https://finalproject-backend-7rqa.onrender.com/authforgot-password",
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
//         "https://finalproject-backend-7rqa.onrender.com/authreset-password",
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
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authlogin", { email, password });
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







// my page //

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLock, FiArrowRight, FiKey, FiArrowLeft, FiUser } from "react-icons/fi";
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

  // --- THEME COLORS ---
  const colors = {
    accent: "#E76F51",            // Modern Warm Terracotta
    accentSoft: "rgba(231, 111, 81, 0.08)", 
    textDark: "#264653",          // Deep Blue-Green
    textLight: "#78716C",         // Stone Grey
    bgWhite: "#FFFFFF",
    inputBg: "#FAFAF9"
  };

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
      const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authlogin", { email, password });
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
      const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authforgot-password", { email: forgotEmail });
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
      const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authreset-password", {
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
      toast.error(err.response?.data?.message || "❌ Failed to reset password");
    } finally {
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
      `}</style>

      <Navbar />

      {/* --- BACKGROUND DECORATION --- */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div className="animate-float" style={{ position: "absolute", top: "-5%", right: "-5%", width: "500px", height: "500px", backgroundColor: colors.accent, opacity: "0.05", filter: "blur(100px)", borderRadius: "50%" }}></div>
        <div className="animate-float" style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "600px", height: "600px", backgroundColor: "#F4A261", opacity: "0.05", filter: "blur(100px)", borderRadius: "50%", animationDelay: "2s" }}></div>
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
            flexDirection: "row", // Default Row
            minHeight: "650px"
          }}
          className="flex-col lg:flex-row" // Responsive flex direction via tailwind classes or media query
        >

          {/* --- LEFT: FORM SECTION (White) --- */}
          <div style={{ flex: "1.2", padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            
            <AnimatePresence mode="wait">
              {!forgotPasswordMode ? (
                /* LOGIN FORM */
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4 }}
                  style={{ maxWidth: "420px", margin: "0 auto", width: "100%" }}
                >
                  <div style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", margin: "0 0 10px 0", lineHeight: "1", color: colors.textDark }}>Welcome Back</h2>
                    <p style={{ color: colors.textLight, fontSize: "1.1rem" }}>Sign in to continue your sweet journey.</p>
                  </div>

                  <form onSubmit={handleLogin}>
                    <div className="input-group">
                      <div style={{position:'relative'}}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="modern-input"
                        />
                        <FiMail className="input-icon" />
                      </div>
                      {errors.email && <span style={{ color: "#EF4444", fontSize: "0.8rem", marginLeft: "10px", marginTop: "5px", display: "block" }}>{errors.email}</span>}
                    </div>

                    <div className="input-group">
                      <div style={{position:'relative'}}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="modern-input"
                        />
                        <FiLock className="input-icon" />
                      </div>
                      {errors.password && <span style={{ color: "#EF4444", fontSize: "0.8rem", marginLeft: "10px", marginTop: "5px", display: "block" }}>{errors.password}</span>}
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "30px" }}>
                      <button type="button" onClick={() => setForgotPasswordMode(true)} style={{ background: "none", border: "none", color: colors.accent, fontWeight: "600", cursor: "pointer", fontSize: "0.9rem" }}>
                        Forgot Password?
                      </button>
                    </div>

                    <button type="submit" className="btn-primary" disabled={loading}>
                      {loading ? "Signing In..." : "Sign In"}
                    </button>
                  </form>

                  <p style={{ marginTop: "30px", textAlign: "center", color: colors.textLight }}>
                    Don't have an account? <button onClick={() => navigate("/register")} style={{ color: colors.accent, fontWeight: "700", background: "none", border: "none", cursor: "pointer" }}>Sign Up</button>
                  </p>
                </motion.div>

              ) : (
                /* FORGOT PASSWORD FLOW */
                <motion.div
                  key="forgot"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  style={{ maxWidth: "420px", margin: "0 auto", width: "100%" }}
                >
                  <button 
                    onClick={() => { setForgotPasswordMode(false); setOtpSent(false); }}
                    style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "none", color: colors.textLight, fontWeight: "600", cursor: "pointer", marginBottom: "30px" }}
                  >
                    <FiArrowLeft /> Back to Login
                  </button>

                  <div style={{ marginBottom: "40px" }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: "0 0 10px 0", lineHeight: "1.1", color: colors.textDark }}>Reset Password</h2>
                    <p style={{ color: colors.textLight, fontSize: "1rem" }}>
                      {!otpSent ? "Enter your email to receive a code." : "Check your email for the OTP."}
                    </p>
                  </div>

                  {!otpSent ? (
                    <form onSubmit={handleSendOTP}>
                      <div className="input-group">
                        <div style={{position:'relative'}}>
                           <input type="email" placeholder="Email Address" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} className="modern-input" required />
                           <FiMail className="input-icon" />
                        </div>
                      </div>
                      <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? "Sending..." : "Send Code"} <FiArrowRight />
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleResetPassword}>
                      <div className="input-group">
                        <div style={{position:'relative'}}>
                           <input type="text" placeholder="Enter OTP Code" value={otp} onChange={(e) => setOtp(e.target.value)} className="modern-input" required />
                           <FiKey className="input-icon" />
                        </div>
                      </div>
                      <div className="input-group">
                        <div style={{position:'relative'}}>
                           <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="modern-input" required />
                           <FiLock className="input-icon" />
                        </div>
                      </div>
                      <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? "Updating..." : "Update Password"}
                      </button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- RIGHT: IMAGE / WELCOME SECTION (Colored) --- */}
          <div style={{ flex: "1", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
             
             {/* Background Image with Overlay */}
             <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <img src="src/assets/cakee1.jpg" alt="Bakery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, backgroundColor: colors.accent, opacity: "0.85", mixBlendMode: "multiply" }}></div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)" }}></div>
             </div>

             {/* Decorative Circles */}
             <div className="animate-float" style={{ position: "absolute", top: "-20%", left: "-20%", width: "400px", height: "400px", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "50%", zIndex: 1 }}></div>
             <div className="animate-float" style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "300px", height: "300px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "50%", zIndex: 1, animationDelay: "2s" }}></div>

             {/* Content */}
             <div style={{ position: "relative", zIndex: 10, color: "white", textAlign: "center", maxWidth: "400px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div style={{ width: "80px", height: "80px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 30px auto", backdropFilter: "blur(10px)" }}>
                    <FiUser size={35} color="white" />
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", margin: "0 0 20px 0", lineHeight: "1.1" }}>New Here?</h2>
                  <p style={{ fontSize: "1.1rem", opacity: "0.9", lineHeight: "1.6", marginBottom: "40px", fontWeight: "300" }}>
                    Join our community today and discover the finest artisanal pastries baked with passion and love.
                  </p>
                  <button 
                    onClick={() => navigate("/register")}
                    style={{ 
                      padding: "15px 40px", 
                      backgroundColor: "white", 
                      color: colors.accent, 
                      border: "none", 
                      borderRadius: "30px", 
                      fontSize: "1rem", 
                      fontWeight: "800", 
                      cursor: "pointer", 
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      transition: "transform 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  >
                    Create Account
                  </button>
                </motion.div>
             </div>
          </div>

        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMail, FiLock, FiArrowRight, FiArrowLeft, FiUser, FiCheck } from "react-icons/fi";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [forgotView, setForgotView] = useState(false); // Toggle for Forgot Password
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // --- CONFIGURATION ---
//   const colors = {
//     bg: "#FDFCF8",
//     primary: "#E76F51", // Spiced Coral
//     primaryDark: "#C8553D",
//     textMain: "#2A2A2A",
//     textLight: "#858585",
//     inputBg: "#F5F5F5",
//     white: "#FFFFFF"
//   };

//   // --- HANDLERS ---
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/authlogin", { email, password });
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       toast.success(`Welcome back, ${res.data.name || "Baker"}! 🥐`);
//       setTimeout(() => navigate("/"), 800);
//     } catch (err) {
//       toast.error("Invalid email or password.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
//       <Navbar />
      
//       {/* --- CSS STYLES FOR HOVER/FOCUS --- */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;800&display=swap');
        
//         /* Slow Zoom Effect for Image */
//         @keyframes zoomPan {
//           0% { transform: scale(1) translate(0,0); }
//           50% { transform: scale(1.1) translate(-10px, -5px); }
//           100% { transform: scale(1) translate(0,0); }
//         }
//         .ken-burns { animation: zoomPan 20s infinite ease-in-out; }

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
//         .primary-btn:active { transform: scale(0.98); }
        
//         .link-text:hover { color: ${colors.primary}; text-decoration: underline; }
//       `}</style>

//       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px 60px 20px" }}>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           style={{ 
//             width: "100%", maxWidth: "1100px", backgroundColor: colors.white, borderRadius: "40px",
//             boxShadow: "0 40px 80px -20px rgba(0,0,0,0.08)", overflow: "hidden", display: "flex", 
//             flexDirection: "row", minHeight: "680px", border: "1px solid rgba(0,0,0,0.02)"
//           }}
//           className="login-container flex-col lg:flex-row" // Requires Tailwind for responsive flex-col, or use media query
//         >

//           {/* --- LEFT: VISUAL SECTION --- */}
//           <div style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px" }}>
//              {/* Image Background */}
//              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
//                <div className="ken-burns" style={{ width: "100%", height: "100%", backgroundImage: "url('src/assets/cakee1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
//                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(231,111,81,0.3), transparent)" }}></div>
//              </div>

//              {/* Text Overlay */}
//              <div style={{ position: "relative", zIndex: 10, color: "white" }}>
//                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
//                   <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", lineHeight: 1, marginBottom: "15px" }}>Baked with<br/>Passion.</h2>
//                   <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "30px", fontWeight: 300 }}>Experience the art of modern baking. Log in to manage your orders and favorites.</p>
                  
//                   {/* Glass Card */}
//                   <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", padding: "20px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.2)" }}>
//                      <p style={{ fontSize: "0.9rem", margin: 0 }}>✨ <strong>Pro Tip:</strong> Members get free delivery on Fridays!</p>
//                   </div>
//                 </motion.div>
//              </div>
//           </div>

//           {/* --- RIGHT: FORM SECTION --- */}
//           <div style={{ flex: 1.2, padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
             
//              <AnimatePresence mode="wait">
//                {!forgotView ? (
//                  /* LOGIN FORM */
//                  <motion.div 
//                    key="login"
//                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
//                    style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }}
//                  >
//                     <div style={{ marginBottom: "40px" }}>
//                       <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: colors.textMain, margin: 0 }}>Welcome Back</h1>
//                       <p style={{ color: colors.textLight, marginTop: "10px" }}>Please enter your details.</p>
//                     </div>

//                     <form onSubmit={handleLogin}>
//                       <div style={{ marginBottom: "20px", position: "relative" }}>
//                          <FiMail style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20px", color: "#A0A0A0", fontSize: "1.2rem" }} />
//                          <input type="email" placeholder="Email Address" className="custom-input" value={email} onChange={e => setEmail(e.target.value)} />
//                       </div>

//                       <div style={{ marginBottom: "20px", position: "relative" }}>
//                          <FiLock style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20px", color: "#A0A0A0", fontSize: "1.2rem" }} />
//                          <input type="password" placeholder="Password" className="custom-input" value={password} onChange={e => setPassword(e.target.value)} />
//                       </div>

//                       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "30px" }}>
//                          <button type="button" onClick={() => setForgotView(true)} className="link-text" style={{ background: "none", border: "none", color: colors.textLight, cursor: "pointer", fontSize: "0.9rem", fontWeight: 500 }}>Forgot Password?</button>
//                       </div>

//                       <button type="submit" className="primary-btn" disabled={loading}>
//                         {loading ? "Signing In..." : "Sign In"} <FiArrowRight />
//                       </button>
//                     </form>

//                     <p style={{ textAlign: "center", marginTop: "40px", color: colors.textLight }}>
//                        Don't have an account? <button onClick={() => navigate("/register")} style={{ color: colors.primary, fontWeight: "bold", background: "none", border: "none", cursor: "pointer" }}>Sign Up</button>
//                     </p>
//                  </motion.div>
//                ) : (
//                  /* FORGOT PASSWORD VIEW */
//                  <motion.div 
//                    key="forgot"
//                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
//                    style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }}
//                  >
//                     <button onClick={() => setForgotView(false)} style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: "5px", color: colors.textLight, cursor: "pointer", marginBottom: "30px", fontWeight: "bold" }}><FiArrowLeft /> Back</button>
                    
//                     <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: colors.textMain, marginBottom: "15px" }}>Reset Password</h2>
//                     <p style={{ color: colors.textLight, marginBottom: "30px" }}>Enter your email and we'll send you a reset link.</p>
                    
//                     <div style={{ marginBottom: "20px", position: "relative" }}>
//                        <FiMail style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20px", color: "#A0A0A0", fontSize: "1.2rem" }} />
//                        <input type="email" placeholder="Email Address" className="custom-input" />
//                     </div>

//                     <button type="button" className="primary-btn">Send Reset Link</button>
//                  </motion.div>
//                )}
//              </AnimatePresence>

//           </div>
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Login;