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


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

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
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      toast.success("✅ Login successful!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error("❌ Login failed! Check your credentials.");
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/forgot-password", { email: forgotEmail });
      toast.success(res.data.message);
      setOtpSent(true);
    } catch (err) {
      toast.error("❌ Failed to send OTP! Check your email.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/reset-password", {
        email: forgotEmail,
        otp,
        password: newPassword,
      });
      toast.success(res.data.message);
      setOtpSent(false);
      setForgotPasswordMode(false);
      setForgotEmail("");
      setOtp("");
      setNewPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Failed to reset password");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex overflow-hidden">

          {/* Left Side - Welcome/Register */}
          <div className="hidden md:flex flex-col justify-center items-center bg-purple-500 text-white w-1/2 p-10 space-y-6">
            <h2 className="text-4xl font-bold">Hello, Friend!</h2>
            <p className="text-lg text-purple-100">Register with your personal details to use all site features</p>
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
              {forgotPasswordMode ? "Reset Password" : "Sign In"}
            </h2>

            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#">
                <img
                  src="src/assets/facebook-logo-blue-circle_705838-12823.jpg"
                  alt="Facebook"
                  className="w-10 h-10 rounded-full hover:scale-105 transition"
                />
              </a>
              <a href="#">
                <img
                  src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png"
                  alt="Google Login"
                  className="w-10 h-10 rounded-full hover:scale-105 transition"
                />
              </a>
            </div>

            {!forgotPasswordMode ? (
              <form className="space-y-4" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                <p
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setForgotPasswordMode(true)}
                >
                  Forget Your Password? Reset here
                </p>

                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
                  Sign In
                </button>
              </form>
            ) : !otpSent ? (
              <form className="space-y-4" onSubmit={handleSendOTP}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
                  Send OTP
                </button>
                <p
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setForgotPasswordMode(false)}
                >
                  Back to Login
                </p>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleResetPassword}>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
                <input
                  type="password"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
                />
                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
                  Reset Password
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;


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
