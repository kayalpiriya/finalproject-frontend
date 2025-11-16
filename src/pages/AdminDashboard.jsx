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


// // AdminDashboard.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css";
// import AdminAddProduct from "./AdminAddProduct";
// import ProductList from "./ProductList";
// import OrdersList from "./OrdersList";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("add");
//   const navigate = useNavigate();
//   const role = localStorage.getItem("role"); // "admin" or "customer"

//   // ✅ Guard: only admin can access
//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       navigate("/"); // redirect non-admin users
//     }
//   }, [role, navigate]);

//   return (
//     <>
//       <Navbar />
//       <br /><br /><br /><br />

//       <div className="admin-container">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <h2>🍰 Admin Panel</h2>
//           <ul>
//             <li
//               className={activePage === "add" ? "active" : ""}
//               onClick={() => setActivePage("add")}
//             >
//               📦 Add Product
//             </li>
//             <li
//               className={activePage === "list" ? "active" : ""}
//               onClick={() => setActivePage("list")}
//             >
//               🧁 Product List
//             </li>
//             <li
//               className={activePage === "orders" ? "active" : ""}
//               onClick={() => setActivePage("orders")}
//             >
//               🛍️ Orders List
//             </li>
//           </ul>
//         </div>

//         {/* Right Content */}
//         <div className="content">
//           {activePage === "add" && <AdminAddProduct />}
//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersList />}
//         </div>
//       </div>
// <br></br><br></br><br></br>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminAddProduct from "./AdminAddProduct";
import ProductList from "./ProductList";
import OrdersList from "./OrdersList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart, Box, List, Menu } from "lucide-react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("add");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // ✅ Admin guard
  useEffect(() => {
    if (role !== "admin") {
      alert("Admins only!");
      navigate("/");
    }
  }, [role, navigate]);

  // ✅ Fetch counts for badges
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = localStorage.getItem("token");
        const productsRes = await fetch("http://localhost:5000/products");
        const ordersRes = await fetch("http://localhost:5000/orders");
        const productsData = await productsRes.json();
        const ordersData = await ordersRes.json();
        setProductsCount(productsData.length);
        setOrdersCount(ordersData.length);
      } catch (err) {
        console.error("Failed to fetch counts:", err);
      }
    };
    fetchCounts();
  }, []);

  return (
    <>
      <Navbar />
      <br></br><br></br><br></br>
      <div className="admin-container">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
          <div className="sidebar-header">
            <h2>🍰 Admin Panel</h2>
            <Menu
              size={20}
              className="collapse-icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
          </div>

          <ul>
            <li
              className={activePage === "add" ? "active" : ""}
              onClick={() => setActivePage("add")}
            >
              <Box size={18} /> <span>Add Product</span>
            </li>
            <li
              className={activePage === "list" ? "active" : ""}
              onClick={() => setActivePage("list")}
            >
              <List size={18} /> <span>Product List</span>
              {productsCount > 0 && <span className="badge">{productsCount}</span>}
            </li>
            <li
              className={activePage === "orders" ? "active" : ""}
              onClick={() => setActivePage("orders")}
            >
              <ShoppingCart size={18} /> <span>Orders List</span>
              {ordersCount > 0 && <span className="badge">{ordersCount}</span>}
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="content">
          {activePage === "add" && <AdminAddProduct />}
          {activePage === "list" && <ProductList />}
          {activePage === "orders" && <OrdersList />}
        </div>
      </div>
      <br></br><br></br><br></br>
      <Footer />
    </>
  );
}

export default AdminDashboard;
