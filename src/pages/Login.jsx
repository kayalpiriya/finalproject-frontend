


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



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed! Check your credentials.");
    }
  };

  // Send OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/forgot-password", { email: forgotEmail });
      alert(res.data.message);
      setOtpSent(true); // OTP sent, now show OTP input + new password
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to send OTP! Check your email.");
    }
  };

  // Reset password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/reset-password", {
        email: forgotEmail,
        otp,
        password: newPassword,
      });
      alert(res.data.message);
      // Reset states
      setForgotPasswordMode(false);
      setOtpSent(false);
      setForgotEmail("");
      setOtp("");
      setNewPassword("");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="login-section">
            <h2>{forgotPasswordMode ? "Reset Password" : "Sign In"}</h2>


            <div className="social-login">
              {/* <button className="google">G</button>
              <button className="facebook">f</button> */}
              <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" /></a>
              <a href="#"><img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google" /></a>

            </div>

            {!forgotPasswordMode ? (
              <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <p style={{ cursor: "pointer", color: "blue" }} onClick={() => setForgotPasswordMode(true)}>
                  Forget Your Password? Reset here
                </p>
                <button type="submit" className="login-btn">Sign In</button>

              </form>
            ) : !otpSent ? (
              <form onSubmit={handleSendOTP}>
                <input type="email" placeholder="Enter your email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} required />
                <button type="submit" className="login-btn">Send OTP</button>
                <p style={{ cursor: "pointer", color: "blue" }} onClick={() => setForgotPasswordMode(false)}>Back to Login</p>
              </form>
            ) : (
              <form onSubmit={handleResetPassword}>
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                <input type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <button type="submit" className="login-btn">Reset Password</button>
              </form>
            )}
          </div>

          <div className="sign-section">
            <h2>Hello, Friend!</h2>
            <p>Register with your personal details to use all of site features</p>
            <button className="sign-btn" onClick={() => navigate("/register")}>Sign up</button>
          </div>
        </div>
      </div>
      <br /><br />
      <Footer />
    </>
  );
}

export default Login;
