import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

function AuthPage({ mode }) {
  // mode: "login" or "register"
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Validation
  const validateForm = () => {
    let temp = {};
    if (mode === "register" && !name.trim()) temp.name = "Name is required";
    if (!email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) temp.email = "Invalid email format";
    if (!password.trim()) temp.password = "Password is required";
    else if (mode === "register" && password.length < 6)
      temp.password = "Password must be at least 6 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Handlers
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await axios.post("http://localhost:5000/auth/register", { name, email, password });
      toast.success("🎉 Registration successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error("❌ Registration failed! Try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
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

          {/* Left Side - Welcome */}
          <div className="hidden md:flex flex-col justify-center items-center bg-purple-500 text-white w-1/2 p-10 space-y-6">
            <h2 className="text-4xl font-bold">
              {mode === "login" ? "Hello, Friend!" : "Welcome Back!"}
            </h2>
            <p className="text-lg text-purple-100">
              {mode === "login"
                ? "Register with your personal details to use all site features"
                : "Enter your personal details to login"}
            </p>
            <button
              onClick={() => navigate(mode === "login" ? "/register" : "/login")}
              className="bg-white text-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
            >
              {mode === "login" ? "Sign Up" : "Sign In"}
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
              {forgotPasswordMode ? "Reset Password" : mode === "login" ? "Sign In" : "Create Account"}
            </h2>

            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" className="w-10 h-10 rounded-full hover:scale-105 transition"/></a>
              <a href="#"><img src="src/assets/97a0b7ac-13bb-4f59-986e-8c3e960435fd-cover.png" alt="Google Login" className="w-10 h-10 rounded-full hover:scale-105 transition"/></a>
            </div>

            {!forgotPasswordMode ? (
              <form className="space-y-4" onSubmit={mode === "login" ? handleLogin : handleRegister}>
                {mode === "register" && (
                  <>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </>
                )}

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                {mode === "login" && (
                  <p className="text-blue-500 cursor-pointer hover:underline" onClick={() => setForgotPasswordMode(true)}>
                    Forget Your Password? Reset here
                  </p>
                )}

                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">
                  {mode === "login" ? "Sign In" : "Sign Up"}
                </button>
              </form>
            ) : !otpSent ? (
              <form className="space-y-4" onSubmit={handleSendOTP}>
                <input type="email" placeholder="Enter your email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">Send OTP</button>
                <p className="text-blue-500 cursor-pointer hover:underline" onClick={() => setForgotPasswordMode(false)}>Back to Login</p>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleResetPassword}>
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
                <input type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition"/>
                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition">Reset Password</button>
              </form>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AuthPage;
