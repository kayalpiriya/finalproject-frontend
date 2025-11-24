import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCart from "./pages/Shoppingcart";
import StripeCheckout from "./pages/StripeCheckout";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentSuccess from "./pages/ PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import AllProduct from "./pages/AllProduct";   // ⭐ NEW IMPORT
// import Chatbot from "./pages/Chatbot.jsx";
import ProductReview from "./pages/ProductReview"; // <-- Import the review page
import FloatingChatbot from "./components/FloatingChatbot";
import BlogList from "./pages/BlogsList.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BlogWrite from "./pages/BlogWrite";



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
        {/* <Route path="/chat" element={<Chatbot />} /> */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/reviews" element={<ProductReview />} /> {/* <-- Added */}
        


        {/* ⭐ NEW ROUTE FOR ALL PRODUCTS */}
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/blogs" element={<BlogList />} />
  <Route path="/blogs/:id" element={<BlogDetail />} />
  <Route path="/admin/blogwrite" element={<BlogWrite />} />
  <Route path="/blogs/edit/:id" element={<BlogWrite />} /> {/* reuse write page for edit */}


      </Routes>
      <FloatingChatbot />
    </Router>
  );
}

export default App;
