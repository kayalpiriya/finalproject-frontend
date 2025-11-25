// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser({ name, email, password });
//       alert("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration failed:", err.response?.data || err.message);
//       alert("Registration failed!");
//     }
//   };

//   return (
//     <div>
//       <h2>Register 🍰</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         /><br />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         /><br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /><br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import "./Register.css"; // Ungal CSS file path

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser({ name, email, password });
//       alert("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration failed:", err.response?.data || err.message);
//       alert("Registration failed!");
//     }
//   };

//   return (
//     <main>
//       <div className="main-content">
//         <div className="container">

//           {/* Left Side: Sign in prompt */}
//           <div className="signin-section">
//             <h2>Welcome Back</h2>
//             <p>
//             Enter your personal details to use all of
//             <br /> site features
//             </p>
//             <button
//               className="signin-btn"
//               onClick={() => navigate("/login")}
//             >
//               Sign in
//             </button>
//           </div>

//           {/* Right Side: Sign up form */}
//           <div className="signup-section">
//             <h2>Create Account</h2>

//             <div className="social-login">
//               {/* <button className="google">G</button>
//               <button className="facebook">f</button> */}
//               <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" /></a>
//               {/* <a href="#"><img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google" /></a> */}
//  {/* Google Login Button */}
//  <a href="http://localhost:5000/auth/google">
//                 <img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" />
//               </a>
//             </div>

//             <p>Or use your email for registration</p>

//             <form onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button type="submit" className="signup-btn">
//                 Sign up
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }

// export default Register;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import { toast } from "react-toastify";
// import "./Register.css";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser({ name, email, password });
//       toast.success("🎉 Registration successful!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error("❌ Registration failed! Try again.");
//     }
//   };

//   return (
//     <main>
//       <div className="main-content">
//         <div className="container">
//           <div className="signin-section">
//             <h2>Welcome Back</h2>
//             <p>
//               Enter your personal details to use all of
//               <br /> site features
//             </p>
//             <button className="signin-btn" onClick={() => navigate("/login")}>
//               Sign in
//             </button>
//           </div>

//           <div className="signup-section">
//             <h2>Create Account</h2>

//             <div className="social-login">
//               <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" /></a>
//               <a href="http://localhost:5000/auth/google">
//                 <img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" />
//               </a>
//             </div>

//             <p>Or use your email for registration</p>

//             <form onSubmit={handleRegister}>
//               <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//               <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//               <button type="submit" className="signup-btn">Sign up</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Register;
// 


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({}); // 🔥 Validation errors
//   const navigate = useNavigate();

//   // 🔥 VALIDATION FUNCTION
//   const validateForm = () => {
//     let temp = {};

//     if (!name.trim()) temp.name = "Name is required";
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";

//     if (!password.trim()) temp.password = "Password is required";
//     else if (password.length < 6)
//       temp.password = "Password must be at least 6 characters";

//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return; // ❌ Stop if errors

//     try {
//       await registerUser({ name, email, password });
//       toast.success("🎉 Registration successful!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error("❌ Registration failed! Try again.");
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

//       <main className="main-content">
//         <div className="container">
//           <div className="signin-section">
//             <h2>Welcome Back</h2>
//             <p>Enter your personal details to use all site features</p>
//             <button className="signin-btn" onClick={() => navigate("/login")}>
//               Sign in
//             </button>
//           </div>

//           <div className="signup-section">
//             <h2>Create Account</h2>

//             <div className="social-login">
//               <a href="#">
//                 <img
//                   src="src/assets/facebook-logo-blue-circle_705838-12823.jpg"
//                   alt="Facebook"
//                 />
//               </a>

//               <a href="http://localhost:5000/auth/google">
//                 <img
//                   src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png"
//                   alt="Google Login"
//                 />
//               </a>
//             </div>

//             <p>Or use your email for registration</p>

//             <form onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               {errors.name && <p className="error">{errors.name}</p>}

//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <p className="error">{errors.email}</p>}

//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {errors.password && <p className="error">{errors.password}</p>}

//               <button type="submit" className="signup-btn">
//                 Sign up
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Register;


// my // 

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let temp = {};
//     if (!name.trim()) temp.name = "Name is required";
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
//     if (!password.trim()) temp.password = "Password is required";
//     else if (password.length < 6) temp.password = "Password must be at least 6 characters";
//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     try {
//       await registerUser({ name, email, password });
//       toast.success("🎉 Registration successful!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error("❌ Registration failed! Try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
//         <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex overflow-hidden">
          
//           {/* Left Side - Welcome Back */}
//           <div className="hidden md:flex flex-col justify-center items-center bg-purple-500 text-white w-1/2 p-10 space-y-6">
//             <h2 className="text-4xl font-bold">Welcome Back</h2>
//             <p className="text-lg text-purple-100">Enter your personal details to use all site features</p>
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-white text-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
//             >
//               Sign In
//             </button>
//           </div>

//           {/* Right Side - Sign Up Form */}
//           <div className="w-full md:w-1/2 p-10">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Create Account</h2>

//             <div className="flex justify-center md:justify-start space-x-4 mb-4">
//               <a href="#">
//                 <img
//                   src="src/assets/facebook-logo-blue-circle_705838-12823.jpg"
//                   alt="Facebook"
//                   className="w-10 h-10 rounded-full hover:scale-105 transition"
//                 />
//               </a>
//               <a href="http://localhost:5000/auth/google">
//                 <img
//                   src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png"
//                   alt="Google Login"
//                   className="w-10 h-10 rounded-full hover:scale-105 transition"
//                 />
//               </a>
//             </div>

//             <p className="text-center md:text-left text-gray-500 mb-6">Or use your email for registration</p>

//             <form className="space-y-4" onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
//               />
//               {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//               <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
//                 Sign Up
//               </button>
//             </form>

//             <p className="mt-4 text-center md:text-left text-gray-500">
//               Already have an account?{" "}
//               <span
//                 onClick={() => navigate("/login")}
//                 className="text-purple-500 font-semibold cursor-pointer hover:underline"
//               >
//                 Sign In
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Register;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let temp = {};
//     if (!name.trim()) temp.name = "Name is required";
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
//     if (!password.trim()) temp.password = "Password is required";
//     else if (password.length < 6) temp.password = "Password must be at least 6 characters";
//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     try {
//       await registerUser({ name, email, password });
//       toast.success("🎉 Registration successful!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error("❌ Registration failed! Try again.");
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
//             <p className="text-lg text-purple-200 text-center">Already have an account? Sign in here.</p>
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-bold hover:bg-purple-100 transition"
//             >
//               Sign In
//             </button>
//           </div>

//           {/* Right Panel - Sign Up */}
//           <div className="w-full md:w-1/2 p-10">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
//               Create Account
//             </h2>

//             <div className="flex justify-center md:justify-start space-x-4 mb-6">
//               <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" className="w-10 h-10 rounded-full hover:scale-110 transition" /></a>
//               <a href="http://localhost:5000/auth/google"><img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" className="w-10 h-10 rounded-full hover:scale-110 transition" /></a>
//             </div>

//             <form className="space-y-4" onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition"
//               />
//               {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//               <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Register;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../api/auth";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let temp = {};
//     if (!name.trim()) temp.name = "Name is required";
//     if (!email.trim()) temp.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
//     if (!password.trim()) temp.password = "Password is required";
//     else if (password.length < 6) temp.password = "Password must be at least 6 characters";
//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     try {
//       await registerUser({ name, email, password });
//       toast.success("🎉 Registration successful!");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       toast.error("❌ Registration failed! Try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
// <br></br><br></br><br></br><br></br><br></br>
//       {/* NEW CLEAN BACKGROUND */}
//       <div className="min-h-screen flex items-center justify-center bg-minimal-bg p-4">
//         <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl flex overflow-hidden">
          
//           {/* Left Side - Welcome Back (NEW STYLE) */}
//           <div className="hidden md:flex flex-col justify-center items-center bg-minimal-panel text-minimal-text w-1/2 p-10 space-y-6">
//             <h2 className="text-4xl font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
//               Welcome Back
//             </h2>
//             <p className="text-lg text-minimal-muted text-center">
//               Enter your personal details to use all site features
//             </p>
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-minimal-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
//             >
//               Sign In
//             </button>
//           </div>

//           {/* Right Side - Sign Up Form (NEW STYLE) */}
//           <div className="w-full md:w-1/2 p-10">
//             <h2 className="text-3xl font-bold text-minimal-text mb-6 text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
//               Create Account
//             </h2>

//             <div className="flex justify-center md:justify-start space-x-4 mb-4">
//               <a href="#" className="p-2 border border-minimal-border rounded-lg hover:border-minimal-accent transition">
//                 <img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" className="w-6 h-6" />
//               </a>
//               <a href="http://localhost:5000/auth/google" className="p-2 border border-minimal-border rounded-lg hover:border-minimal-accent transition">
//                 <img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" className="w-6 h-6" />
//               </a>
//             </div>

//             <p className="text-center md:text-left text-minimal-muted mb-6">Or use your email for registration</p>

//             <form className="space-y-4" onSubmit={handleRegister}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-3 border border-minimal-border rounded-lg focus:ring-2 focus:ring-minimal-accent focus:border-minimal-accent outline-none transition"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border border-minimal-border rounded-lg focus:ring-2 focus:ring-minimal-accent focus:border-minimal-accent outline-none transition"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 border border-minimal-border rounded-lg focus:ring-2 focus:ring-minimal-accent focus:border-minimal-accent outline-none transition"
//               />
//               {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

//               <button 
//                 type="submit"
//                 className="w-full bg-minimal-accent text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all"
//               >
//                 Sign Up
//               </button>
//             </form>

//             <p className="mt-4 text-center md:text-left text-minimal-muted">
//               Already have an account?{" "}
//               <span
//                 onClick={() => navigate("/login")}
//                 className="text-minimal-accent font-semibold cursor-pointer hover:underline"
//               >
//                 Sign In
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Register;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowRight, FiFacebook, FiGithub } from "react-icons/fi";
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
          
          {/* --- LEFT SIDE: Welcome / Sign In (Coffee Background) --- */}
          <div className="w-full md:w-5/12 bg-[#6A4E3B] text-[#FFF8EC] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Decorative Background Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#D6A85B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D6A85B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Welcome Back
              </h2>
              <p className="text-lg opacity-80 mb-8 font-light leading-relaxed">
                To keep connected with us, please login with your personal info.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="border-2 border-[#FFF8EC] text-[#FFF8EC] px-8 py-3 rounded-full font-bold hover:bg-[#FFF8EC] hover:text-[#6A4E3B] transition-all"
              >
                Sign In
              </motion.button>
            </div>
          </div>

          {/* --- RIGHT SIDE: Register Form (White Background) --- */}
          <div className="w-full md:w-7/12 p-10 md:p-14 bg-white relative">
            <div className="max-w-md mx-auto">
              
              <div className="text-center md:text-left mb-10">
                <h2 className="text-4xl font-serif font-bold text-[#6A4E3B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Create Account
                </h2>
                <p className="text-[#8C7B6F]">Join our community of pastry lovers.</p>
              </div>

              {/* Social Login */}
              <div className="flex justify-center md:justify-start gap-4 mb-8">
                <motion.button whileHover={{ y: -3 }} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#D6A85B] hover:shadow-md transition-all">
                  <FcGoogle size={24} />
                </motion.button>
                <motion.button whileHover={{ y: -3 }} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1877F2] hover:border-[#1877F2] hover:shadow-md transition-all">
                  <FiFacebook size={24} />
                </motion.button>
                <motion.button whileHover={{ y: -3 }} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#333] hover:border-[#333] hover:shadow-md transition-all">
                  <FiGithub size={24} />
                </motion.button>
              </div>

              <div className="relative flex items-center justify-center mb-8">
                <div className="border-t border-gray-200 w-full"></div>
                <span className="bg-white px-3 text-xs text-gray-400 uppercase tracking-wider absolute">Or register with email</span>
              </div>

              {/* Form */}
              <form onSubmit={handleRegister} className="space-y-5">
                
                {/* Name Input */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400 group-focus-within:text-[#D6A85B] transition-colors" />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-[#F9F9F9] border border-transparent rounded-xl focus:bg-white focus:border-[#D6A85B] focus:ring-4 focus:ring-[#D6A85B]/10 outline-none transition-all placeholder-gray-400 font-medium"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
                </div>

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

                <motion.button 
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-[#6A4E3B] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#563e2d] hover:shadow-xl transition-all flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Creating Account..." : <><FiArrowRight /> Sign Up</>}
                </motion.button>

              </form>

              <p className="mt-8 text-center text-gray-500 text-sm">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-[#D6A85B] font-bold cursor-pointer hover:underline"
                >
                  Sign In
                </span>
              </p>

            </div>
          </div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default Register;