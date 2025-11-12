// import React, { useState } from "react";
// import "./AdminDashboard.css";
// import AdminAddProduct from "./AdminAddProduct";
// // import AddProduct from "./AddProduct";
// import ProductList from "./ProductList";
// import OrdersList from "./OrdersList";

// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("add");

//   return (
//     <div className="admin-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2>🍰 Admin Panel</h2>
//         <ul>
//           <li
//             className={activePage === "add" ? "active" : ""}
//             onClick={() => setActivePage("add")}
//           >
//             📦 Add Product
//           </li>
//           <li
//             className={activePage === "list" ? "active" : ""}
//             onClick={() => setActivePage("list")}
//           >
//             🧁 Product List
//           </li>
//           <li
//             className={activePage === "orders" ? "active" : ""}
//             onClick={() => setActivePage("orders")}
//           >
//             🛍️ Orders List
//           </li>
//         </ul>
//       </div>

//       {/* Right Content */}
//       <div className="content">
//         {activePage === "add" && <AdminAddProduct />}
//         {activePage === "list" && <ProductList />}
//         {activePage === "orders" && <OrdersList />}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;


// import React, { useState } from "react";
// import "./AdminDashboard.css";
// import AdminAddProduct from "./AdminAddProduct";
// import ProductList from "./ProductList";
// import OrdersList from "./OrdersList";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("add");

//   return (
//     <>
//    <Navbar />
//    <br></br><br></br><br></br><br></br>
//     <div className="admin-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2>🍰 Admin Panel</h2>
//         <ul>
//           <li
//             className={activePage === "add" ? "active" : ""}
//             onClick={() => setActivePage("add")}
//           >
//             📦 Add Product
//           </li>
//           <li
//             className={activePage === "list" ? "active" : ""}
//             onClick={() => setActivePage("list")}
//           >
//             🧁 Product List
//           </li>
//           <li
//             className={activePage === "orders" ? "active" : ""}
//             onClick={() => setActivePage("orders")}
//           >
//             🛍️ Orders List
//           </li>
          
//         </ul>
//       </div>

//       {/* Right Content */}
//       <div className="content">
//         {activePage === "add" && <AdminAddProduct />}
//         {activePage === "list" && <ProductList />}
//         {activePage === "orders" && <OrdersList />}
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// }

// export default AdminDashboard;


// AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import AdminAddProduct from "./AdminAddProduct";
import ProductList from "./ProductList";
import OrdersList from "./OrdersList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("add");
  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // "admin" or "customer"

  // ✅ Guard: only admin can access
  useEffect(() => {
    if (role !== "admin") {
      alert("Admins only!");
      navigate("/"); // redirect non-admin users
    }
  }, [role, navigate]);

  return (
    <>
      <Navbar />
      <br /><br /><br /><br />

      <div className="admin-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>🍰 Admin Panel</h2>
          <ul>
            <li
              className={activePage === "add" ? "active" : ""}
              onClick={() => setActivePage("add")}
            >
              📦 Add Product
            </li>
            <li
              className={activePage === "list" ? "active" : ""}
              onClick={() => setActivePage("list")}
            >
              🧁 Product List
            </li>
            <li
              className={activePage === "orders" ? "active" : ""}
              onClick={() => setActivePage("orders")}
            >
              🛍️ Orders List
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="content">
          {activePage === "add" && <AdminAddProduct />}
          {activePage === "list" && <ProductList />}
          {activePage === "orders" && <OrdersList />}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminDashboard;
