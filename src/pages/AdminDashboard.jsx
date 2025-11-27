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

// // export default AdminDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminAddProduct from "./AdminAddProduct";
// import ProductList from "./ProductList";
// import OrdersList from "./OrdersList";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { ShoppingCart, Box, List, Menu } from "lucide-react";

// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("add");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const navigate = useNavigate();
//   const role = localStorage.getItem("role");

//   // ✅ Admin guard
//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       navigate("/");
//     }
//   }, [role, navigate]);

//   // ✅ Fetch counts for badges
//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const productsRes = await fetch("http://localhost:5000/products");
//         const ordersRes = await fetch("http://localhost:5000/orders");
//         const productsData = await productsRes.json();
//         const ordersData = await ordersRes.json();
//         setProductsCount(productsData.length);
//         setOrdersCount(ordersData.length);
//       } catch (err) {
//         console.error("Failed to fetch counts:", err);
//       }
//     };
//     fetchCounts();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br><br></br>
//       <div className="admin-container">
//         {/* Sidebar */}
//         <div className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
//           <div className="sidebar-header">
//             <h2>🍰 Admin Panel</h2>
//             <Menu
//               size={20}
//               className="collapse-icon"
//               onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             />
//           </div>

//           <ul>
//             <li
//               className={activePage === "add" ? "active" : ""}
//               onClick={() => setActivePage("add")}
//             >
//               <Box size={18} /> <span>Add Product</span>
//             </li>
//             <li
//               className={activePage === "list" ? "active" : ""}
//               onClick={() => setActivePage("list")}
//             >
//               <List size={18} /> <span>Product List</span>
//               {productsCount > 0 && <span className="badge">{productsCount}</span>}
//             </li>
//             <li
//               className={activePage === "orders" ? "active" : ""}
//               onClick={() => setActivePage("orders")}
//             >
//               <ShoppingCart size={18} /> <span>Orders List</span>
//               {ordersCount > 0 && <span className="badge">{ordersCount}</span>}
//             </li>
//           </ul>
//         </div>

//         {/* Content */}
//         <div className="content">
//           {activePage === "add" && <AdminAddProduct />}
//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersList />}
//         </div>
//       </div>
//       <br></br><br></br><br></br>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminAddProduct from "./AdminAddProduct";
// import ProductList from "./ProductList";
// import OrdersListWithBoundary from "./OrdersList";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { ShoppingCart, Box, List, Settings, Menu } from "lucide-react";

// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("add");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const navigate = useNavigate();
//   const role = localStorage.getItem("role");

//   // Admin guard
//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       navigate("/");
//     }
//   }, [role, navigate]);

//   // Fetch badges counts
//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const productsRes = await fetch("http://localhost:5000/products");
//         const ordersRes = await fetch("http://localhost:5000/orders");
//         const productsData = await productsRes.json();
//         const ordersData = await ordersRes.json();
//         setProductsCount(productsData.length);
//         setOrdersCount(ordersData.length);
//       } catch (err) {
//         console.error("Failed to fetch counts:", err);
//       }
//     };
//     fetchCounts();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br><br></br>
//       <div className="flex min-h-screen bg-gray-200">
//         {/* Sidebar */}
//         <aside
//           className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black w-64 transition-all duration-300 ${
//             sidebarCollapsed ? "w-20" : "w-64"
//           } shadow-lg`}
//         >
//           <div className="flex items-center justify-between p-4 border-b border-yellow-300">
//             {!sidebarCollapsed && <h2 className="text-xl font-bold">🍰 Admin Panel</h2>}
//             <Menu
//               size={24}
//               className="cursor-pointer hover:text-gray-200"
//               onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             />
//           </div>

//           <ul className="mt-4">
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "add" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("add")}
//             >
//               <Box size={20} />
//               {!sidebarCollapsed && <span>Add Product</span>}
//             </li>

//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "list" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("list")}
//             >
//               <div className="flex items-center gap-3">
//                 <List size={20} />
//                 {!sidebarCollapsed && <span>Product List</span>}
//               </div>
//               {!sidebarCollapsed && productsCount > 0 && (
//                 <span className="bg-black text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {productsCount}
//                 </span>
//               )}
//             </li>

//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("orders")}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingCart size={20} />
//                 {!sidebarCollapsed && <span>Orders List</span>}
//               </div>
//               {!sidebarCollapsed && ordersCount > 0 && (
//                 <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {ordersCount}
//                 </span>
//               )}
//             </li>

//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("settings")}
//             >
//               <Settings size={20} />
//               {!sidebarCollapsed && <span>Settings</span>}
//             </li>
//           </ul>
//         </aside>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           {activePage === "add" && <AdminAddProduct />}
//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersListWithBoundary />}
//           {activePage === "settings" && (
//             <div className="bg-white shadow-lg p-6 rounded-lg">
//               <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
//               <p className="text-gray-600">Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminAddProduct from "./AdminAddProduct";
// import ProductList from "./ProductList";
// import OrdersListWithBoundary from "./OrdersList";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { ShoppingCart, Box, List, Settings, Menu } from "lucide-react";

// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("add");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const navigate = useNavigate();
//   const role = localStorage.getItem("role");

//   // Admin guard
//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       navigate("/login");
//     }
//   }, [role, navigate]);

//   // Fetch badges counts
//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const productsRes = await fetch("http://localhost:5000/products");
//         const ordersRes = await fetch("http://localhost:5000/orders");
//         const productsData = await productsRes.json();
//         const ordersData = await ordersRes.json();
//         setProductsCount(productsData.length);
//         setOrdersCount(ordersData.length);
//       } catch (err) {
//         console.error("Failed to fetch counts:", err);
//       }
//     };
//     fetchCounts();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen bg-gray-100 pt-16">
//         {/* Sidebar */}
//         <aside
//           className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black transition-all duration-300 ${
//             sidebarCollapsed ? "w-20" : "w-64"
//           } shadow-lg min-h-screen`}
//         >
//           <div className="flex items-center justify-between p-4 border-b border-yellow-300">
//             {!sidebarCollapsed && (
//               <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>
//             )}
//             <Menu
//               size={24}
//               className="cursor-pointer hover:text-gray-200"
//               onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             />
//           </div>

//           <ul className="mt-4">
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "add" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("add")}
//             >
//               <Box size={20} />
//               {!sidebarCollapsed && <span>Add Product</span>}
//             </li>

//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "list" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("list")}
//             >
//               <div className="flex items-center gap-3">
//                 <List size={20} />
//                 {!sidebarCollapsed && <span>Product List</span>}
//               </div>
//               {!sidebarCollapsed && productsCount > 0 && (
//                 <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {productsCount}
//                 </span>
//               )}
//             </li>

//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("orders")}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingCart size={20} />
//                 {!sidebarCollapsed && <span>Orders List</span>}
//               </div>
//               {!sidebarCollapsed && ordersCount > 0 && (
//                 <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {ordersCount}
//                 </span>
//               )}
//             </li>

//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("settings")}
//             >
//               <Settings size={20} />
//               {!sidebarCollapsed && <span>Settings</span>}
//             </li>
//           </ul>
//         </aside>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           {activePage === "add" && <AdminAddProduct />}
//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersListWithBoundary />}
//           {activePage === "settings" && (
//             <div className="bg-white shadow-lg p-6 rounded-lg">
//               <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
//               <p className="text-gray-600">Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductList from "../pages/ProductList.jsx";
// import OrdersListWithBoundary from "../pages/OrdersList.jsx"
// import {
//   ShoppingCart,
//   List,
//   Settings,
//   Menu,
//   DollarSign,
//   Eye,
//   BarChart2,
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";

// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   // Admin guard
//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       window.location.href = "/login";
//     }
//   }, [role]);

//   // Fetch dashboard + counts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dashRes = await axios.get("http://localhost:5000/admin/dashboard", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setDashboardData(dashRes.data);

//         const prodRes = await axios.get("http://localhost:5000/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProductsCount(prodRes.data.length);

//         const orderRes = await axios.get("http://localhost:5000/orders", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrdersCount(orderRes.data.length);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, [token]);

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen bg-gray-100 pt-16">
//         {/* Sidebar */}
//         <aside
//           className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black transition-all duration-300 ${
//             sidebarCollapsed ? "w-20" : "w-64"
//           } shadow-lg min-h-screen`}
//         >
//           <div className="flex items-center justify-between p-4 border-b border-yellow-300">
//             {!sidebarCollapsed && (
//               <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>
//             )}
//             <Menu
//               size={24}
//               className="cursor-pointer hover:text-gray-200"
//               onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             />
//           </div>

//           <ul className="mt-4">
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "dashboard" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("dashboard")}
//             >
//               <BarChart2 size={20} />
//               {!sidebarCollapsed && <span>Dashboard</span>}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "list" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("list")}
//             >
//               <div className="flex items-center gap-3">
//                 <List size={20} />
//                 {!sidebarCollapsed && <span>Product List</span>}
//               </div>
//               {!sidebarCollapsed && productsCount > 0 && (
//                 <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {productsCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("orders")}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingCart size={20} />
//                 {!sidebarCollapsed && <span>Orders List</span>}
//               </div>
//               {!sidebarCollapsed && ordersCount > 0 && (
//                 <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {ordersCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("settings")}
//             >
//               <Settings size={20} />
//               {!sidebarCollapsed && <span>Settings</span>}
//             </li>
//           </ul>
//         </aside>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           {/* ===== DASHBOARD PAGE ===== */}
//           {activePage === "dashboard" && dashboardData && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-yellow-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Total Sales</p>
//                     <p className="text-xl font-bold">{dashboardData.totalSales}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-green-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Earnings</p>
//                     <p className="text-xl font-bold">₹{dashboardData.totalEarnings}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <Eye size={28} className="text-blue-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Page Views</p>
//                     <p className="text-xl font-bold">{dashboardData.totalViews}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Graph */}
//               <div className="bg-white p-4 shadow rounded-lg">
//                 <h2 className="text-lg font-bold text-yellow-700 mb-4">Monthly Stats</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={dashboardData.monthlyData}>
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="sales" fill="#facc15" />
//                     <Bar dataKey="earnings" fill="#16a34a" />
//                     <Bar dataKey="views" fill="#3b82f6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </>
//           )}

//           {/* ===== PRODUCT LIST PAGE ===== */}
//           {activePage === "list" && <ProductList />}

//           {/* ===== ORDERS LIST PAGE ===== */}
//           {activePage === "orders" && <OrdersListWithBoundary />}

//           {/* ===== SETTINGS PAGE ===== */}
//           {activePage === "settings" && (
//             <div className="bg-white shadow-lg p-6 rounded-lg">
//               <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
//               <p className="text-gray-600">Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }








// //important//
// // export default AdminDashboard;   

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductList from "../pages/ProductList.jsx";
// import OrdersListWithBoundary from "../pages/OrdersList.jsx";
// import {
//   ShoppingCart,
//   List,
//   Settings,
//   Menu,
//   DollarSign,
//   Eye,
//   BarChart2,
//   Users,
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";

// // ===== USERS LIST COMPONENT =====
// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load users.");
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [token]);

//   if (loading)
//     return <p className="text-center mt-12 text-gray-500">Loading users...</p>;
//   if (error)
//     return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   // Count admins and normal users
//   const totalUsers = users.length;
//   const totalAdmins = users.filter((u) => u.isAdmin).length;
//   const totalNormal = totalUsers - totalAdmins;

//   return (
//     <div className="space-y-6">
//       {/* ===== SUMMARY CARDS ===== */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-yellow-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Total Users</p>
//             <p className="text-xl font-bold">{totalUsers}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-green-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Admins</p>
//             <p className="text-xl font-bold">{totalAdmins}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-blue-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Normal Users</p>
//             <p className="text-xl font-bold">{totalNormal}</p>
//           </div>
//         </div>
//       </div>

//       {/* ===== USERS TABLE ===== */}
//       <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//         <table className="min-w-full border-collapse">
//           <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//             <tr>
//               <th className="py-2 px-3 border-b">#</th>
//               <th className="py-2 px-3 border-b">Name</th>
//               <th className="py-2 px-3 border-b">Email</th>
//               <th className="py-2 px-3 border-b">Role</th>
//               <th className="py-2 px-3 border-b">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, idx) => (
//               <tr
//                 key={user._id}
//                 className={`transition-all duration-300 ${
//                   idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//                 } hover:bg-yellow-50 hover:shadow-lg`}
//               >
//                 <td className="py-2 px-3 border-b">{idx + 1}</td>
//                 <td className="py-2 px-3 border-b">{user.name}</td>
//                 <td className="py-2 px-3 border-b">{user.email}</td>
//                 <td className="py-2 px-3 border-b">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-bold ${
//                       user.isAdmin
//                         ? "bg-green-200 text-green-800"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {user.isAdmin ? "Admin" : "User"}
//                   </span>
//                 </td>
//                 <td className="py-2 px-3 border-b">
//                   {new Date(user.createdAt).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// // ===== MAIN ADMIN DASHBOARD =====
// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   // Admin guard
//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       window.location.href = "/login";
//     }
//   }, [role]);

//   // Fetch dashboard + counts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dashRes = await axios.get("http://localhost:5000/admin/dashboard", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setDashboardData(dashRes.data);

//         const prodRes = await axios.get("http://localhost:5000/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProductsCount(prodRes.data.length);

//         const orderRes = await axios.get("http://localhost:5000/orders", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrdersCount(orderRes.data.length);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, [token]);

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen bg-gray-100 pt-16">
//         {/* Sidebar */}
//         <aside
//           className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black transition-all duration-300 ${
//             sidebarCollapsed ? "w-20" : "w-64"
//           } shadow-lg min-h-screen`}
//         >
//           <div className="flex items-center justify-between p-4 border-b border-yellow-300">
//             {!sidebarCollapsed && (
//               <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>
//             )}
//             <Menu
//               size={24}
//               className="cursor-pointer hover:text-gray-200"
//               onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             />
//           </div>

//           <ul className="mt-4">
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "dashboard" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("dashboard")}
//             >
//               <BarChart2 size={20} />
//               {!sidebarCollapsed && <span>Dashboard</span>}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "list" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("list")}
//             >
//               <div className="flex items-center gap-3">
//                 <List size={20} />
//                 {!sidebarCollapsed && <span>Product List</span>}
//               </div>
//               {!sidebarCollapsed && productsCount > 0 && (
//                 <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {productsCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("orders")}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingCart size={20} />
//                 {!sidebarCollapsed && <span>Orders List</span>}
//               </div>
//               {!sidebarCollapsed && ordersCount > 0 && (
//                 <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {ordersCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "users" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("users")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Users List</span>}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("settings")}
//             >
//               <Settings size={20} />
//               {!sidebarCollapsed && <span>Settings</span>}
//             </li>
//           </ul>
//         </aside>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           {activePage === "dashboard" && dashboardData && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-yellow-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Total Sales</p>
//                     <p className="text-xl font-bold">{dashboardData.totalSales}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-green-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Earnings</p>
//                     <p className="text-xl font-bold">₹{dashboardData.totalEarnings}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <Eye size={28} className="text-blue-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Page Views</p>
//                     <p className="text-xl font-bold">{dashboardData.totalViews}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-4 shadow rounded-lg">
//                 <h2 className="text-lg font-bold text-yellow-700 mb-4">Monthly Stats</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={dashboardData.monthlyData}>
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="sales" fill="#facc15" />
//                     <Bar dataKey="earnings" fill="#16a34a" />
//                     <Bar dataKey="views" fill="#3b82f6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </>
//           )}

//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersListWithBoundary />}
//           {activePage === "users" && <UsersList />}

//           {activePage === "settings" && (
//             <div className="bg-white shadow-lg p-6 rounded-lg">
//               <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
//               <p className="text-gray-600">Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;









// my //

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductList from "../pages/ProductList.jsx";
// import OrdersListWithBoundary from "../pages/OrdersList.jsx";
// import {
//   ShoppingCart,
//   List,
//   Settings,
//   Menu,
//   DollarSign,
//   Eye,
//   BarChart2,
//   Users,
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";

// // ===== USERS LIST COMPONENT =====
// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load users.");
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [token]);

//   if (loading)
//     return <p className="text-center mt-12 text-gray-500">Loading users...</p>;
//   if (error)
//     return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   const totalUsers = users.length;
//   const totalAdmins = users.filter((u) => u.isAdmin).length;
//   const totalNormal = totalUsers - totalAdmins;

//   return (
//     <div className="space-y-6">
//       {/* ===== SUMMARY CARDS ===== */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-yellow-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Total Users</p>
//             <p className="text-xl font-bold">{totalUsers}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-green-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Admins</p>
//             <p className="text-xl font-bold">{totalAdmins}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-blue-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Normal Users</p>
//             <p className="text-xl font-bold">{totalNormal}</p>
//           </div>
//         </div>
//       </div>

//       {/* ===== USERS TABLE ===== */}
//       <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//         <table className="min-w-full border-collapse">
//           <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//             <tr>
//               <th className="py-2 px-3 border-b">#</th>
//               <th className="py-2 px-3 border-b">Name</th>
//               <th className="py-2 px-3 border-b">Email</th>
//               <th className="py-2 px-3 border-b">Role</th>
//               <th className="py-2 px-3 border-b">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, idx) => (
//               <tr
//                 key={user._id}
//                 className={`transition-all duration-300 ${
//                   idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//                 } hover:bg-yellow-50 hover:shadow-lg`}
//               >
//                 <td className="py-2 px-3 border-b">{idx + 1}</td>
//                 <td className="py-2 px-3 border-b">{user.name}</td>
//                 <td className="py-2 px-3 border-b">{user.email}</td>
//                 <td className="py-2 px-3 border-b">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-bold ${
//                       user.isAdmin
//                         ? "bg-green-200 text-green-800"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {user.isAdmin ? "Admin" : "User"}
//                   </span>
//                 </td>
//                 <td className="py-2 px-3 border-b">
//                   {new Date(user.createdAt).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// // ===== CHATS LIST COMPONENT =====
// function ChatsList() {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChats = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/chats", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setChats(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load chats.");
//         setLoading(false);
//       }
//     };
//     fetchChats();
//   }, [token]);

//   const deleteChat = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this chat?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/chats/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setChats((prev) => prev.filter((chat) => chat._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete chat.");
//     }
//   };

//   if (loading) return <p className="text-center mt-12 text-gray-500">Loading chats...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   return (
//     <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//       <h2 className="text-xl font-bold mb-4">User & AI Chats</h2>
//       <table className="min-w-full border-collapse">
//         <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//           <tr>
//             <th className="py-2 px-3 border-b">#</th>
//             <th className="py-2 px-3 border-b">User</th>
//             <th className="py-2 px-3 border-b">Role</th>
//             <th className="py-2 px-3 border-b">Message</th>
//             <th className="py-2 px-3 border-b">Created At</th>
//             <th className="py-2 px-3 border-b">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {chats.map((chat, idx) => (
//             <tr
//               key={chat._id}
//               className={`transition-all duration-300 ${
//                 idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//               } hover:bg-yellow-50 hover:shadow-lg`}
//             >
//               <td className="py-2 px-3 border-b">{idx + 1}</td>
//               <td className="py-2 px-3 border-b">{chat.user}</td>
//               <td className="py-2 px-3 border-b">{chat.role}</td>
//               <td className="py-2 px-3 border-b">{chat.message}</td>
//               <td className="py-2 px-3 border-b">
//                 {new Date(chat.createdAt).toLocaleString()}
//               </td>
//               <td className="py-2 px-3 border-b">
//                 <button
//                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                   onClick={() => deleteChat(chat._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // ===== MAIN ADMIN DASHBOARD =====
// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       window.location.href = "/login";
//     }
//   }, [role]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dashRes = await axios.get("http://localhost:5000/admin/dashboard", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setDashboardData(dashRes.data);

//         const prodRes = await axios.get("http://localhost:5000/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProductsCount(prodRes.data.length);

//         const orderRes = await axios.get("http://localhost:5000/orders", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrdersCount(orderRes.data.length);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, [token]);

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen bg-gray-100 pt-16">
//         {/* Sidebar */}
//         <aside
//           className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black transition-all duration-300 ${
//             sidebarCollapsed ? "w-20" : "w-64"
//           } shadow-lg min-h-screen`}
//         >
//           <div className="flex items-center justify-between p-4 border-b border-yellow-300">
//             {!sidebarCollapsed && (
//               <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>
//             )}
//             <Menu
//               size={24}
//               className="cursor-pointer hover:text-gray-200"
//               onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             />
//           </div>

//           <ul className="mt-4">
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "dashboard" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("dashboard")}
//             >
//               <BarChart2 size={20} />
//               {!sidebarCollapsed && <span>Dashboard</span>}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "list" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("list")}
//             >
//               <div className="flex items-center gap-3">
//                 <List size={20} />
//                 {!sidebarCollapsed && <span>Product List</span>}
//               </div>
//               {!sidebarCollapsed && productsCount > 0 && (
//                 <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {productsCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("orders")}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingCart size={20} />
//                 {!sidebarCollapsed && <span>Orders List</span>}
//               </div>
//               {!sidebarCollapsed && ordersCount > 0 && (
//                 <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {ordersCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "users" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("users")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Users List</span>}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "chats" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("chats")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Chats</span>}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("settings")}
//             >
//               <Settings size={20} />
//               {!sidebarCollapsed && <span>Settings</span>}
//             </li>
//           </ul>
//         </aside>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           {activePage === "dashboard" && dashboardData && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-yellow-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Total Sales</p>
//                     <p className="text-xl font-bold">{dashboardData.totalSales}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-green-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Earnings</p>
//                     <p className="text-xl font-bold">₹{dashboardData.totalEarnings}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <Eye size={28} className="text-blue-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Page Views</p>
//                     <p className="text-xl font-bold">{dashboardData.totalViews}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-4 shadow rounded-lg">
//                 <h2 className="text-lg font-bold text-yellow-700 mb-4">Monthly Stats</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={dashboardData.monthlyData}>
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="sales" fill="#facc15" />
//                     <Bar dataKey="earnings" fill="#16a34a" />
//                     <Bar dataKey="views" fill="#3b82f6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </>
//           )}

//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersListWithBoundary />}
//           {activePage === "users" && <UsersList />}
//           {activePage === "chats" && <ChatsList />}

//           {activePage === "settings" && (
//             <div className="bg-white shadow-lg p-6 rounded-lg">
//               <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
//               <p className="text-gray-600">Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductList from "../pages/ProductList.jsx";
// import OrdersListWithBoundary from "../pages/OrdersList.jsx";
// import {
//   ShoppingCart,
//   List,
//   Settings,
//   Menu,
//   DollarSign,
//   Eye,
//   BarChart2,
//   Users,
//   Edit,
//   Trash2,
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";

// // ===== USERS LIST COMPONENT =====
// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load users.");
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [token]);

//   if (loading)
//     return <p className="text-center mt-12 text-gray-500">Loading users...</p>;
//   if (error)
//     return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   const totalUsers = users.length;
//   const totalAdmins = users.filter((u) => u.isAdmin).length;
//   const totalNormal = totalUsers - totalAdmins;

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-yellow-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Total Users</p>
//             <p className="text-xl font-bold">{totalUsers}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-green-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Admins</p>
//             <p className="text-xl font-bold">{totalAdmins}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-blue-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Normal Users</p>
//             <p className="text-xl font-bold">{totalNormal}</p>
//           </div>
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//         <table className="min-w-full border-collapse">
//           <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//             <tr>
//               <th className="py-2 px-3 border-b">#</th>
//               <th className="py-2 px-3 border-b">Name</th>
//               <th className="py-2 px-3 border-b">Email</th>
//               <th className="py-2 px-3 border-b">Role</th>
//               <th className="py-2 px-3 border-b">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, idx) => (
//               <tr
//                 key={user._id}
//                 className={`transition-all duration-300 ${
//                   idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//                 } hover:bg-yellow-50 hover:shadow-lg`}
//               >
//                 <td className="py-2 px-3 border-b">{idx + 1}</td>
//                 <td className="py-2 px-3 border-b">{user.name}</td>
//                 <td className="py-2 px-3 border-b">{user.email}</td>
//                 <td className="py-2 px-3 border-b">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-bold ${
//                       user.isAdmin
//                         ? "bg-green-200 text-green-800"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {user.isAdmin ? "Admin" : "User"}
//                   </span>
//                 </td>
//                 <td className="py-2 px-3 border-b">
//                   {new Date(user.createdAt).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// // ===== BLOGS LIST COMPONENT =====
// function BlogsList() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/blogs", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setBlogs(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load blogs.");
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, [token]);

//   const deleteBlog = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this blog?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBlogs((prev) => prev.filter((blog) => blog._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete blog.");
//     }
//   };

//   if (loading) return <p className="text-center mt-12 text-gray-500">Loading blogs...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   return (
//     <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//       <h2 className="text-xl font-bold mb-4">Manage Blogs</h2>
//       <table className="min-w-full border-collapse">
//         <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//           <tr>
//             <th className="py-2 px-3 border-b">#</th>
//             <th className="py-2 px-3 border-b">Title</th>
//             <th className="py-2 px-3 border-b">Summary</th>
//             <th className="py-2 px-3 border-b">Created At</th>
//             <th className="py-2 px-3 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map((blog, idx) => (
//             <tr
//               key={blog._id}
//               className={`transition-all duration-300 ${
//                 idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//               } hover:bg-yellow-50 hover:shadow-lg`}
//             >
//               <td className="py-2 px-3 border-b">{idx + 1}</td>
//               <td className="py-2 px-3 border-b">{blog.title}</td>
//               <td className="py-2 px-3 border-b truncate max-w-xs">{blog.summary}</td>
//               <td className="py-2 px-3 border-b">
//                 {new Date(blog.createdAt).toLocaleDateString()}
//               </td>
//               <td className="py-2 px-3 border-b flex gap-2">
//                 <button
//                   className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
//                   onClick={() => window.location.href = `/admin/blogs/edit/${blog._id}`}
//                 >
//                   <Edit size={16} /> Edit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center gap-1"
//                   onClick={() => deleteBlog(blog._id)}
//                 >
//                   <Trash2 size={16} /> Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // ===== MAIN ADMIN DASHBOARD =====
// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       window.location.href = "/login";
//     }
//   }, [role]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dashRes = await axios.get("http://localhost:5000/admin/dashboard", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setDashboardData(dashRes.data);

//         const prodRes = await axios.get("http://localhost:5000/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProductsCount(prodRes.data.length);

//         const orderRes = await axios.get("http://localhost:5000/orders", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrdersCount(orderRes.data.length);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, [token]);

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen bg-gray-100 pt-16">
//         {/* Sidebar */}
//         <aside
//           className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black transition-all duration-300 ${
//             sidebarCollapsed ? "w-20" : "w-64"
//           } shadow-lg min-h-screen`}
//         >
//           <div className="flex items-center justify-between p-4 border-b border-yellow-300">
//             {!sidebarCollapsed && (
//               <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>
//             )}
//             <Menu
//               size={24}
//               className="cursor-pointer hover:text-gray-200"
//               onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             />
//           </div>

//           <ul className="mt-4">
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "dashboard" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("dashboard")}
//             >
//               <BarChart2 size={20} />
//               {!sidebarCollapsed && <span>Dashboard</span>}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "list" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("list")}
//             >
//               <div className="flex items-center gap-3">
//                 <List size={20} />
//                 {!sidebarCollapsed && <span>Product List</span>}
//               </div>
//               {!sidebarCollapsed && productsCount > 0 && (
//                 <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {productsCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("orders")}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingCart size={20} />
//                 {!sidebarCollapsed && <span>Orders List</span>}
//               </div>
//               {!sidebarCollapsed && ordersCount > 0 && (
//                 <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
//                   {ordersCount}
//                 </span>
//               )}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "users" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("users")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Users List</span>}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "blogs" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("blogs")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Blogs</span>}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "chats" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("chats")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Chats</span>}
//             </li>
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("settings")}
//             >
//               <Settings size={20} />
//               {!sidebarCollapsed && <span>Settings</span>}
//             </li>
//           </ul>
//         </aside>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           {activePage === "dashboard" && dashboardData && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-yellow-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Total Sales</p>
//                     <p className="text-xl font-bold">{dashboardData.totalSales}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-green-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Earnings</p>
//                     <p className="text-xl font-bold">₹{dashboardData.totalEarnings}</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <Eye size={28} className="text-blue-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Page Views</p>
//                     <p className="text-xl font-bold">{dashboardData.totalViews}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-4 shadow rounded-lg">
//                 <h2 className="text-lg font-bold text-yellow-700 mb-4">Monthly Stats</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={dashboardData.monthlyData}>
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="sales" fill="#facc15" />
//                     <Bar dataKey="earnings" fill="#16a34a" />
//                     <Bar dataKey="views" fill="#3b82f6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </>
//           )}

//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersListWithBoundary />}
//           {activePage === "users" && <UsersList />}
//           {activePage === "chats" && <ChatsList />}
//           {activePage === "blogs" && <BlogsList />}

//           {activePage === "settings" && (
//             <div className="bg-white shadow-lg p-6 rounded-lg">
//               <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
//               <p className="text-gray-600">Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;



// src/pages/AdminDashboard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductList from "../pages/ProductList.jsx";
// import OrdersListWithBoundary from "../pages/OrdersList.jsx";
// import {
//   ShoppingCart,
//   List,
//   Settings,
//   Menu,
//   DollarSign,
//   Eye,
//   BarChart2,
//   Users,
//   Edit,
//   Trash2,
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";

// /* ===========================================================================
//    USERS LIST
//    =========================================================================== */
// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/users", {
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         });
//         setUsers(res.data || []);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load users.");
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [token]);

//   if (loading) return <p className="text-center mt-12 text-gray-500">Loading users...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   const totalUsers = users.length;
//   const totalAdmins = users.filter((u) => u.isAdmin).length;
//   const totalNormal = totalUsers - totalAdmins;

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-yellow-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Total Users</p>
//             <p className="text-xl font-bold">{totalUsers}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-green-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Admins</p>
//             <p className="text-xl font-bold">{totalAdmins}</p>
//           </div>
//         </div>
//         <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//           <Users size={28} className="text-blue-600" />
//           <div>
//             <p className="text-gray-500 text-sm">Normal Users</p>
//             <p className="text-xl font-bold">{totalNormal}</p>
//           </div>
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//         <table className="min-w-full border-collapse">
//           <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//             <tr>
//               <th className="py-2 px-3 border-b">#</th>
//               <th className="py-2 px-3 border-b">Name</th>
//               <th className="py-2 px-3 border-b">Email</th>
//               <th className="py-2 px-3 border-b">Role</th>
//               <th className="py-2 px-3 border-b">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, idx) => (
//               <tr
//                 key={user._id}
//                 className={`transition-all duration-300 ${
//                   idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//                 } hover:bg-yellow-50 hover:shadow-lg`}
//               >
//                 <td className="py-2 px-3 border-b">{idx + 1}</td>
//                 <td className="py-2 px-3 border-b">{user.name}</td>
//                 <td className="py-2 px-3 border-b">{user.email}</td>
//                 <td className="py-2 px-3 border-b">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-bold ${
//                       user.isAdmin ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {user.isAdmin ? "Admin" : "User"}
//                   </span>
//                 </td>
//                 <td className="py-2 px-3 border-b">
//                   {new Date(user.createdAt).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// /* ===========================================================================
//    CHATS LIST
//    (self-contained so AdminDashboard import won't fail)
//    =========================================================================== */
// function ChatsList() {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChats = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/chats", {
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         });
//         setChats(res.data || []);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load chats.");
//         setLoading(false);
//       }
//     };
//     fetchChats();
//   }, [token]);

//   const deleteChat = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this chat?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/chats/${id}`, {
//         headers: token ? { Authorization: `Bearer ${token}` } : {},
//       });
//       setChats((prev) => prev.filter((c) => c._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete chat.");
//     }
//   };

//   if (loading) return <p className="text-center mt-12 text-gray-500">Loading chats...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   return (
//     <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//       <h2 className="text-xl font-bold mb-4">User & AI Chats</h2>
//       <table className="min-w-full border-collapse">
//         <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//           <tr>
//             <th className="py-2 px-3 border-b">#</th>
//             <th className="py-2 px-3 border-b">User</th>
//             <th className="py-2 px-3 border-b">Role</th>
//             <th className="py-2 px-3 border-b">Message</th>
//             <th className="py-2 px-3 border-b">Created At</th>
//             <th className="py-2 px-3 border-b">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {chats.map((chat, idx) => (
//             <tr
//               key={chat._id}
//               className={`transition-all duration-300 ${
//                 idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//               } hover:bg-yellow-50 hover:shadow-lg`}
//             >
//               <td className="py-2 px-3 border-b">{idx + 1}</td>
//               <td className="py-2 px-3 border-b">{chat.user}</td>
//               <td className="py-2 px-3 border-b">{chat.role}</td>
//               <td className="py-2 px-3 border-b">{chat.message}</td>
//               <td className="py-2 px-3 border-b">{new Date(chat.createdAt).toLocaleString()}</td>
//               <td className="py-2 px-3 border-b">
//                 <button
//                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                   onClick={() => deleteChat(chat._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// /* ===========================================================================
//    BLOGS LIST (Manage Blogs: title, summary, image, content, createdAt, edit, delete)
//    =========================================================================== */
// function BlogsList() {
//   const [blogs, setBlogs] = useState([]);
//   const [editBlog, setEditBlog] = useState(null);

//   const [editTitle, setEditTitle] = useState("");
//   const [editSummary, setEditSummary] = useState("");
//   const [editContent, setEditContent] = useState("");
//   const [editImage, setEditImage] = useState("");

//   // fetch blogs
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/blogs");
//       setBlogs(res.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // delete blog
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this blog?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/blogs/${id}`);
//       setBlogs((prev) => prev.filter((b) => b._id !== id));
//     } catch (error) {
//       console.error(error);
//       alert("Failed to delete blog.");
//     }
//   };

//   // open edit
//   const openEditPopup = (blog) => {
//     setEditBlog(blog);
//     setEditTitle(blog.title || "");
//     setEditSummary(blog.summary || "");
//     setEditContent(blog.content || "");
//     setEditImage(blog.image || "");
//   };

//   // update
//   const handleUpdate = async () => {
//     if (!editBlog) return;
//     try {
//       await axios.put(`http://localhost:5000/api/blogs/${editBlog._id}`, {
//         title: editTitle,
//         summary: editSummary,
//         content: editContent,
//         image: editImage,
//       });
//       alert("Blog Updated Successfully!");
//       setEditBlog(null);
//       fetchBlogs();
//     } catch (error) {
//       console.error(error);
//       alert("Error updating blog");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6">Manage Blogs</h2>

//       <div className="overflow-x-auto shadow-lg rounded-lg">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200 text-gray-700">
//             <tr>
//               <th className="px-4 py-3 text-left">Image</th>
//               <th className="px-4 py-3 text-left">Title</th>
//               <th className="px-4 py-3 text-left">Summary</th>
//               <th className="px-4 py-3 text-left">Content</th>
//               <th className="px-4 py-3 text-left">Created</th>
//               <th className="px-4 py-3 text-left">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {blogs.map((blog) => (
//               <tr key={blog._id} className="border-b">
//                 <td className="px-4 py-3">
//                   {blog.image ? (
//                     <img src={blog.image} alt={blog.title} className="w-20 h-16 object-cover rounded" />
//                   ) : (
//                     <div className="w-20 h-16 bg-gray-100 flex items-center justify-center rounded text-xs text-gray-500">No Image</div>
//                   )}
//                 </td>

//                 <td className="px-4 py-3 font-medium">{blog.title}</td>
//                 <td className="px-4 py-3 max-w-xs truncate">{blog.summary}</td>
//                 <td className="px-4 py-3 max-w-xs text-sm truncate">{blog.content}</td>
//                 <td className="px-4 py-3">{new Date(blog.createdAt).toLocaleDateString()}</td>

//                 <td className="px-4 py-3 flex gap-2">
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-2"
//                     onClick={() => openEditPopup(blog)}
//                   >
//                     <Edit size={14} /> Edit
//                   </button>

//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-2"
//                     onClick={() => handleDelete(blog._id)}
//                   >
//                     <Trash2 size={14} /> Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {blogs.length === 0 && (
//               <tr>
//                 <td colSpan={6} className="text-center py-6 text-gray-500">
//                   No blogs found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* EDIT POPUP */}
//       {editBlog && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-xl w-[560px] max-w-full">
//             <h2 className="text-xl font-bold mb-4">Edit Blog</h2>

//             <div className="space-y-3">
//               <input
//                 className="w-full border px-3 py-2 rounded"
//                 value={editTitle}
//                 onChange={(e) => setEditTitle(e.target.value)}
//                 placeholder="Title"
//               />
//               <input
//                 className="w-full border px-3 py-2 rounded"
//                 value={editSummary}
//                 onChange={(e) => setEditSummary(e.target.value)}
//                 placeholder="Summary"
//               />
//               <input
//                 className="w-full border px-3 py-2 rounded"
//                 value={editImage}
//                 onChange={(e) => setEditImage(e.target.value)}
//                 placeholder="Image URL"
//               />
//               <textarea
//                 className="w-full border px-3 py-2 rounded h-32"
//                 value={editContent}
//                 onChange={(e) => setEditContent(e.target.value)}
//                 placeholder="Content"
//               />
//             </div>

//             <div className="flex justify-end gap-3 mt-4">
//               <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setEditBlog(null)}>
//                 Cancel
//               </button>
//               <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleUpdate}>
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ===========================================================================
//    MAIN ADMIN DASHBOARD
//    =========================================================================== */
// function AdminDashboard() {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (role !== "admin") {
//       alert("Admins only!");
//       window.location.href = "/login";
//     }
//   }, [role]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dashRes = await axios.get("http://localhost:5000/admin/dashboard", {
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         });
//         setDashboardData(dashRes.data || { monthlyData: [] });

//         const prodRes = await axios.get("http://localhost:5000/products", {
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         });
//         setProductsCount(Array.isArray(prodRes.data) ? prodRes.data.length : 0);

//         const orderRes = await axios.get("http://localhost:5000/orders", {
//           headers: token ? { Authorization: `Bearer ${token}` } : {},
//         });
//         setOrdersCount(Array.isArray(orderRes.data) ? orderRes.data.length : 0);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, [token]);

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen bg-gray-100 pt-16">
//         {/* Sidebar */}
//         <aside
//           className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black transition-all duration-300 ${
//             sidebarCollapsed ? "w-20" : "w-64"
//           } shadow-lg min-h-screen`}
//         >
//           <div className="flex items-center justify-between p-4 border-b border-yellow-300">
//             {!sidebarCollapsed && <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>}
//             <Menu
//               size={24}
//               className="cursor-pointer hover:text-gray-200"
//               onClick={() => setSidebarCollapsed((s) => !s)}
//             />
//           </div>

//           <ul className="mt-4">
//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "dashboard" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("dashboard")}
//             >
//               <BarChart2 size={20} />
//               {!sidebarCollapsed && <span>Dashboard</span>}
//             </li>

//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "list" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("list")}
//             >
//               <div className="flex items-center gap-3">
//                 <List size={20} />
//                 {!sidebarCollapsed && <span>Product List</span>}
//               </div>
//               {!sidebarCollapsed && productsCount > 0 && (
//                 <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">{productsCount}</span>
//               )}
//             </li>

//             <li
//               className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("orders")}
//             >
//               <div className="flex items-center gap-3">
//                 <ShoppingCart size={20} />
//                 {!sidebarCollapsed && <span>Orders List</span>}
//               </div>
//               {!sidebarCollapsed && ordersCount > 0 && (
//                 <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">{ordersCount}</span>
//               )}
//             </li>

//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "users" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("users")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Users List</span>}
//             </li>

//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "chats" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("chats")}
//             >
//               <Users size={20} />
//               {!sidebarCollapsed && <span>Chats</span>}
//             </li>

//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "blogs" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("blogs")}
//             >
//               <Edit size={20} />
//               {!sidebarCollapsed && <span>Blogs</span>}
//             </li>

//             <li
//               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
//                 activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
//               }`}
//               onClick={() => setActivePage("settings")}
//             >
//               <Settings size={20} />
//               {!sidebarCollapsed && <span>Settings</span>}
//             </li>
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           {activePage === "dashboard" && dashboardData && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-yellow-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Total Sales</p>
//                     <p className="text-xl font-bold">{dashboardData.totalSales ?? 0}</p>
//                   </div>
//                 </div>

//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <DollarSign size={28} className="text-green-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Earnings</p>
//                     <p className="text-xl font-bold">₹{dashboardData.totalEarnings ?? 0}</p>
//                   </div>
//                 </div>

//                 <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
//                   <Eye size={28} className="text-blue-600" />
//                   <div>
//                     <p className="text-gray-500 text-sm">Page Views</p>
//                     <p className="text-xl font-bold">{dashboardData.totalViews ?? 0}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-4 shadow rounded-lg">
//                 <h2 className="text-lg font-bold text-yellow-700 mb-4">Monthly Stats</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={dashboardData.monthlyData || []}>
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="sales" fill="#facc15" />
//                     <Bar dataKey="earnings" fill="#16a34a" />
//                     <Bar dataKey="views" fill="#3b82f6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </>
//           )}

//           {activePage === "list" && <ProductList />}
//           {activePage === "orders" && <OrdersListWithBoundary />}
//           {activePage === "users" && <UsersList />}
//           {activePage === "chats" && <ChatsList />}
//           {activePage === "blogs" && <BlogsList />}

//           {activePage === "settings" && (
//             <div className="bg-white shadow-lg p-6 rounded-lg">
//               <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
//               <p className="text-gray-600">Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;

// kayal

// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../pages/ProductList.jsx";
import OrdersListWithBoundary from "../pages/OrdersList.jsx";
import {
  ShoppingCart,
  List,
  Settings,
  Menu,
  DollarSign,
  Eye,
  BarChart2,
  Users,
  Edit,
  Trash2,
} from "lucide-react";
// Added 'Legend' to the imports below
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

/* ===========================================================================
   DESIGN SYSTEM & STYLES
   =========================================================================== */
const colors = {
  primary: "rgb(214, 143, 143)", // Rose Pink
  primaryLight: "rgba(214, 143, 143, 0.1)",
  background: "#F4F7FE",
  white: "#FFFFFF",
  textHeader: "#2B3674",
  textBody: "#A3AED0",
  border: "#E0E5F2",
  success: "#05CD99",
  danger: "#EE5D50",
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: colors.background,
    fontFamily: "'DM Sans', sans-serif",
    color: colors.textHeader,
  },
  sidebar: {
    backgroundColor: colors.white,
    transition: "all 0.3s ease",
    borderRight: `1px solid ${colors.border}`,
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
  },
  sidebarContent: {
    padding: "20px",
  },
  main: {
    flex: 1,
    padding: "30px",
    overflowY: "auto",
    height: "100vh",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0px 18px 40px 0px rgba(112, 144, 176, 0.12)",
    border: "none",
    marginBottom: "24px",
    animation: "fadeIn 0.5s ease-out",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    color: colors.textHeader,
    marginBottom: "20px",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
  statCard: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 18px 40px 0px rgba(112, 144, 176, 0.12)",
    animation: "slideUp 0.5s ease-out",
  },
  statIconBox: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: colors.primaryLight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15px",
  },
  tableContainer: {
    overflowX: "auto",
    borderRadius: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "800px",
  },
  th: {
    textAlign: "left",
    padding: "15px 20px",
    borderBottom: `1px solid ${colors.border}`,
    color: colors.textBody,
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  td: {
    padding: "16px 20px",
    color: colors.textHeader,
    fontSize: "14px",
    fontWeight: "600",
    borderBottom: "1px solid #F4F7FE",
  },
  badge: (isAdmin) => ({
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: isAdmin ? "rgba(5, 205, 153, 0.1)" : colors.primaryLight,
    color: isAdmin ? colors.success : colors.primary,
  }),
  button: {
    padding: "8px 16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "0.2s",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "16px",
    border: `1px solid ${colors.border}`,
    marginBottom: "15px",
    outline: "none",
    fontSize: "14px",
    color: colors.textHeader,
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    animation: "fadeIn 0.3s ease",
  },
  modalContent: {
    backgroundColor: colors.white,
    width: "500px",
    maxWidth: "90%",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0px 20px 50px 0px rgba(0,0,0,0.2)",
    animation: "scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};

/* ===========================================================================
   GLOBAL ANIMATION STYLES
   =========================================================================== */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
    body { margin: 0; padding: 0; background-color: #F4F7FE; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #A3AED0; border-radius: 3px; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
  `}</style>
);

/* ===========================================================================
   USERS LIST
   =========================================================================== */
function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setUsers(res.data || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load users.");
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  if (loading) return <p style={{ textAlign: "center", color: colors.textBody, marginTop: "50px" }}>Loading users...</p>;
  if (error) return <p style={{ textAlign: "center", color: colors.danger, marginTop: "50px" }}>{error}</p>;

  const totalUsers = users.length;
  const totalAdmins = users.filter((u) => u.isAdmin).length;
  const totalNormal = totalUsers - totalAdmins;

  const StatBox = ({ label, count, color }) => (
    <div style={styles.statCard}>
      <div style={{ ...styles.statIconBox, backgroundColor: `${color}20` }}>
        <Users size={24} color={color} />
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "14px", color: colors.textBody }}>{label}</p>
        <h4 style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>{count}</h4>
      </div>
    </div>
  );

  return (
    <div style={{ animation: "fadeIn 0.5s" }}>
      <div style={styles.statGrid}>
        <StatBox label="Total Users" count={totalUsers} color="rgb(214, 143, 143)" />
        <StatBox label="Admins" count={totalAdmins} color={colors.success} />
        <StatBox label="Normal Users" count={totalNormal} color="#4318FF" />
      </div>

      <div style={styles.card}>
        <h2 style={styles.title}>User Registry</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td style={styles.td}>{idx + 1}</td>
                  <td style={styles.td}>
                     <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                        <div style={{width:'30px', height:'30px', borderRadius:'50%', background: colors.border, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', color: colors.textBody}}>
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        {user.name}
                     </div>
                  </td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>
                    <span style={styles.badge(user.isAdmin)}>
                      {user.isAdmin ? "Admin" : "User"}
                    </span>
                  </td>
                  <td style={styles.td}>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ===========================================================================
   CHATS LIST
   =========================================================================== */
function ChatsList() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/chats", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setChats(res.data || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load chats.");
        setLoading(false);
      }
    };
    fetchChats();
  }, [token]);

  const deleteChat = async (id) => {
    if (!window.confirm("Are you sure you want to delete this chat?")) return;
    try {
      await axios.delete(`http://localhost:5000/chats/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setChats((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete chat.");
    }
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading chats...</p>;
  if (error) return <p style={{ textAlign: "center", color: colors.danger }}>{error}</p>;

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>User & AI Chats</h2>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Message</th>
              <th style={styles.th}>Created At</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {chats.map((chat, idx) => (
              <tr key={chat._id}>
                <td style={styles.td}>{idx + 1}</td>
                <td style={styles.td}>{chat.user}</td>
                <td style={styles.td}>
                    <span style={{...styles.badge(false), backgroundColor: '#F4F7FE', color: colors.textBody}}>{chat.role}</span>
                </td>
                <td style={{ ...styles.td, maxWidth: "300px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {chat.message}
                </td>
                <td style={styles.td}>{new Date(chat.createdAt).toLocaleString()}</td>
                <td style={styles.td}>
                  <button
                    style={{ ...styles.button, backgroundColor: "#FFF5F5", color: colors.danger }}
                    onClick={() => deleteChat(chat._id)}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===========================================================================
   BLOGS LIST
   =========================================================================== */
function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  const [editTitle, setEditTitle] = useState("");
  const [editSummary, setEditSummary] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editImage, setEditImage] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog.");
    }
  };

  const openEditPopup = (blog) => {
    setEditBlog(blog);
    setEditTitle(blog.title || "");
    setEditSummary(blog.summary || "");
    setEditContent(blog.content || "");
    setEditImage(blog.image || "");
  };

  const handleUpdate = async () => {
    if (!editBlog) return;
    try {
      await axios.put(`http://localhost:5000/api/blogs/${editBlog._id}`, {
        title: editTitle,
        summary: editSummary,
        content: editContent,
        image: editImage,
      });
      alert("Blog Updated Successfully!");
      setEditBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error(error);
      alert("Error updating blog");
    }
  };

  return (
    <div style={{ animation: "fadeIn 0.5s" }}>
      <h2 style={{ ...styles.title, fontSize: "30px", marginBottom: "30px" }}>Manage Blogs</h2>

      <div style={styles.card}>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Image</th>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Summary</th>
                <th style={styles.th}>Content</th>
                <th style={styles.th}>Created</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td style={styles.td}>
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{ width: "60px", height: "40px", objectFit: "cover", borderRadius: "6px" }}
                      />
                    ) : (
                      <div style={{ width: "60px", height: "40px", backgroundColor: "#eee", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>No Img</div>
                    )}
                  </td>
                  <td style={{ ...styles.td, fontWeight: "700" }}>{blog.title}</td>
                  <td style={{ ...styles.td, maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{blog.summary}</td>
                  <td style={{ ...styles.td, maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: colors.textBody }}>{blog.content}</td>
                  <td style={styles.td}>{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td style={styles.td}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        style={{ ...styles.button, backgroundColor: "#EFF4FB", color: colors.textHeader }}
                        onClick={() => openEditPopup(blog)}
                      >
                        <Edit size={14} /> Edit
                      </button>
                      <button
                        style={{ ...styles.button, backgroundColor: "#FFF5F5", color: colors.danger }}
                        onClick={() => handleDelete(blog._id)}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "30px", color: colors.textBody }}>
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT POPUP */}
      {editBlog && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={{ ...styles.title, marginBottom: "25px" }}>Edit Blog</h2>

            <input style={styles.input} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Title" />
            <input style={styles.input} value={editSummary} onChange={(e) => setEditSummary(e.target.value)} placeholder="Summary" />
            <input style={styles.input} value={editImage} onChange={(e) => setEditImage(e.target.value)} placeholder="Image URL" />
            <textarea
              style={{ ...styles.input, height: "120px", resize: "none" }}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              placeholder="Content"
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px", marginTop: "20px" }}>
              <button
                style={{ ...styles.button, backgroundColor: colors.background, color: colors.textBody }}
                onClick={() => setEditBlog(null)}
              >
                Cancel
              </button>
              <button
                style={{ ...styles.button, backgroundColor: colors.primary, color: colors.white }}
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===========================================================================
   MAIN ADMIN DASHBOARD
   =========================================================================== */
function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (role !== "admin") {
      alert("Admins only!");
      window.location.href = "/login";
    }
  }, [role]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashRes = await axios.get("http://localhost:5000/admin/dashboard", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setDashboardData(dashRes.data || { monthlyData: [] });

        const prodRes = await axios.get("http://localhost:5000/products", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setProductsCount(Array.isArray(prodRes.data) ? prodRes.data.length : 0);

        const orderRes = await axios.get("http://localhost:5000/orders", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setOrdersCount(Array.isArray(orderRes.data) ? orderRes.data.length : 0);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [token]);

  const NavItem = ({ page, icon: Icon, label, count }) => {
    const isActive = activePage === page;
    return (
      <li
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: sidebarCollapsed ? "center" : "space-between",
          padding: "15px",
          marginBottom: "8px",
          borderRadius: "12px",
          cursor: "pointer",
          transition: "all 0.2s",
          backgroundColor: isActive ? colors.primary : "transparent",
          color: isActive ? colors.white : colors.textBody,
          boxShadow: isActive ? `0px 10px 20px -5px ${colors.primary}80` : "none",
        }}
        onClick={() => setActivePage(page)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Icon size={20} />
          {!sidebarCollapsed && <span style={{ fontWeight: "500" }}>{label}</span>}
        </div>
        {!sidebarCollapsed && count > 0 && (
          <span
            style={{
              backgroundColor: isActive ? colors.white : colors.primaryLight,
              color: isActive ? colors.primary : colors.primary,
              padding: "2px 8px",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            {count}
          </span>
        )}
      </li>
    );
  };

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <div style={{ ...styles.container, paddingTop: "64px" }}>
        {/* Sidebar */}
        <aside
          style={{
            ...styles.sidebar,
            width: sidebarCollapsed ? "80px" : "290px",
          }}
        >
          <div
            style={{
              padding: "30px",
              borderBottom: `1px solid ${colors.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {!sidebarCollapsed && (
              <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "800", color: colors.textHeader }}>
                Admin<span style={{ color: colors.primary }}>Panel</span>
              </h2>
            )}
            <Menu
              size={24}
              style={{ cursor: "pointer", color: colors.textBody }}
              onClick={() => setSidebarCollapsed((s) => !s)}
            />
          </div>

          <ul style={{ listStyle: "none", padding: "20px", margin: 0 }}>
            <NavItem page="dashboard" icon={BarChart2} label="Dashboard" />
            <NavItem page="list" icon={List} label="Product List" count={productsCount} />
            <NavItem page="orders" icon={ShoppingCart} label="Orders List" count={ordersCount} />
            <NavItem page="users" icon={Users} label="Users List" />
            <NavItem page="chats" icon={Users} label="Chats" />
            <NavItem page="blogs" icon={Edit} label="Blogs" />
            <NavItem page="settings" icon={Settings} label="Settings" />
          </ul>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          {activePage === "dashboard" && dashboardData && (
            <div style={{ animation: "fadeIn 0.5s ease-out" }}>
              <div style={styles.statGrid}>
                <div style={styles.statCard}>
                  <div style={{ ...styles.statIconBox, backgroundColor: `${colors.primary}20` }}>
                    <DollarSign size={28} color={colors.primary} />
                  </div>
                  <div>
                    <p style={{ margin: 0, color: colors.textBody, fontSize: "14px" }}>Total Sales</p>
                    <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>
                      {dashboardData.totalSales ?? 0}
                    </p>
                  </div>
                </div>

                <div style={styles.statCard}>
                  <div style={{ ...styles.statIconBox, backgroundColor: "rgba(5, 205, 153, 0.1)" }}>
                    <DollarSign size={28} color={colors.success} />
                  </div>
                  <div>
                    <p style={{ margin: 0, color: colors.textBody, fontSize: "14px" }}>Earnings</p>
                    <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>
                      ₹{dashboardData.totalEarnings ?? 0}
                    </p>
                  </div>
                </div>

                <div style={styles.statCard}>
                  <div style={{ ...styles.statIconBox, backgroundColor: "rgba(67, 24, 255, 0.1)" }}>
                    <Eye size={28} color="#4318FF" />
                  </div>
                  <div>
                    <p style={{ margin: 0, color: colors.textBody, fontSize: "14px" }}>Page Views</p>
                    <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>
                      {dashboardData.totalViews ?? 0}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ ...styles.card, height: "400px" }}>
                <h2 style={{ ...styles.title, marginBottom: "30px" }}>Monthly Stats</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData.monthlyData || []}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E5F2" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#A3AED0", fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#A3AED0", fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar dataKey="sales" fill={colors.primary} radius={[10, 10, 0, 0]} barSize={20} />
                    <Bar dataKey="earnings" fill={colors.success} radius={[10, 10, 0, 0]} barSize={20} />
                    <Bar dataKey="views" fill="#4318FF" radius={[10, 10, 0, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activePage === "list" && (
            <div style={styles.card}><ProductList /></div>
          )}
          {activePage === "orders" && (
            <div style={styles.card}><OrdersListWithBoundary /></div>
          )}
          {activePage === "users" && <UsersList />}
          {activePage === "chats" && <ChatsList />}
          {activePage === "blogs" && <BlogsList />}

          {activePage === "settings" && (
            <div style={{ ...styles.card, minHeight: "400px", display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
              <Settings size={64} color={colors.border} style={{marginBottom:'20px'}}/>
              <h2 style={{ ...styles.title, marginBottom: "10px" }}>Settings</h2>
              <p style={{ color: colors.textBody }}>Admin settings will go here.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;