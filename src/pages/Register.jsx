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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
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
    try {
      await registerUser({ name, email, password });
      toast.success("🎉 Registration successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error("❌ Registration failed! Try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex overflow-hidden">
          
          {/* Left Side - Welcome Back */}
          <div className="hidden md:flex flex-col justify-center items-center bg-purple-500 text-white w-1/2 p-10 space-y-6">
            <h2 className="text-4xl font-bold">Welcome Back</h2>
            <p className="text-lg text-purple-100">Enter your personal details to use all site features</p>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
            >
              Sign In
            </button>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Create Account</h2>

            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#">
                <img
                  src="src/assets/facebook-logo-blue-circle_705838-12823.jpg"
                  alt="Facebook"
                  className="w-10 h-10 rounded-full hover:scale-105 transition"
                />
              </a>
              <a href="http://localhost:5000/auth/google">
                <img
                  src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png"
                  alt="Google Login"
                  className="w-10 h-10 rounded-full hover:scale-105 transition"
                />
              </a>
            </div>

            <p className="text-center md:text-left text-gray-500 mb-6">Or use your email for registration</p>

            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

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

              <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-center md:text-left text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-purple-500 font-semibold cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;


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
