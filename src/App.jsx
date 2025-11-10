import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Orders from "./pages/Order.jsx";
import Home from "./pages/Home";
import Product from "./pages/Product.jsx";
import ShoppingCart from "./pages/Shoppingcart"; // ✅ Added
import StripeCheckout from "./pages/StripeCheckout";
import ChatBox from "./pages/ChatBox";



// ✅ Import admin pages (create them next)
// import AdminDashboard from "./pages/Admin/Dashboard.jsx";
// import AdminProducts from "./pages/Admin/Products.jsx";
// import AdminOrders from "./pages/Admin/ Orders.jsx"; // ✅ Case match & no space
// import AdminUsers from "./pages/Admin/Users.jsx";
// import AdminReviews from "./pages/Admin/Reviews.jsx";
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


 {/* Admin Routes */}
 {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/reviews" element={<AdminReviews />} /> */}

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

