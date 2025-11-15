import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCart from "./pages/Shoppingcart";
import StripeCheckout from "./pages/StripeCheckout";
import ChatBox from "./pages/ChatBox";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentSuccess from "./pages/ PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import AllProduct from "./pages/AllProduct";   // ⭐ NEW IMPORT



function App() {
  return (
    <Router>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<StripeCheckout />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details" element={<Detail />} />

        {/* ⭐ NEW ROUTE FOR ALL PRODUCTS */}
        <Route path="/allproduct" element={<AllProduct />} />

      </Routes>
    </Router>
  );
}

export default App;
