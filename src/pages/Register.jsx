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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { toast } from "react-toastify";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      toast.success("🎉 Registration successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error("❌ Registration failed! Try again.");
    }
  };

  return (
    <main>
      <div className="main-content">
        <div className="container">
          <div className="signin-section">
            <h2>Welcome Back</h2>
            <p>
              Enter your personal details to use all of
              <br /> site features
            </p>
            <button className="signin-btn" onClick={() => navigate("/login")}>
              Sign in
            </button>
          </div>

          <div className="signup-section">
            <h2>Create Account</h2>

            <div className="social-login">
              <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" /></a>
              <a href="http://localhost:5000/auth/google">
                <img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" />
              </a>
            </div>

            <p>Or use your email for registration</p>

            <form onSubmit={handleRegister}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" className="signup-btn">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
