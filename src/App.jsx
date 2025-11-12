import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Orders from "./pages/Order.jsx";
import Home from "./pages/Home";
import Product from "./pages/Product.jsx";
import ShoppingCart from "./pages/Shoppingcart"; // ✅ Added
import StripeCheckout from "./pages/StripeCheckout";
import ChatBox from "./pages/ChatBox";
// import AdminAddProduct from "./pages/AdminAddProduct.jsx";  // 🔹 Admin import pannuthu
import AdminDashboard from "./pages/AdminDashboard.jsx";
import PaymentSuccess from "./pages/ PaymentSuccess.jsx";
import PaymentCancel from "./pages/PaymentCancel.jsx";
import Profile from "./pages/Profile.jsx";
import Detail from "./pages/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/product/:id" element={<Product />} />

        <Route path="/shoppingcart" element={<ShoppingCart />} /> {/* ✅ New Route */}
        <Route path="/checkout" element={<StripeCheckout />} />
        <Route path="/chat" element={<ChatBox />} />
        {/* <Route path="/addproduct" element={<AdminAddProduct />} />  🔹 Admin route */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
        <Route path="/profile" element={<Profile />} />  {/* ✅ Profile route */}
        <Route path="/details" element={<Detail />} />


      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

