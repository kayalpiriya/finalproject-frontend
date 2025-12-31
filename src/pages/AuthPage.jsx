 

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