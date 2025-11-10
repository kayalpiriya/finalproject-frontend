import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Orders from "./pages/Order.jsx";
import Home from "./pages/Home";
import Product from "./pages/Product.jsx";
import ShoppingCart from "./pages/Shoppingcart"; // ✅ Added
import StripeCheckout from "./pages/StripeCheckout";
import ChatBox from "./pages/ChatBox";
import AdminAddProduct from "./pages/AdminAddProduct.jsx";  // 🔹 Admin import pannuthu




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
        <Route path="/admin" element={<AdminAddProduct />} />  {/* 🔹 Admin route */}



      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

