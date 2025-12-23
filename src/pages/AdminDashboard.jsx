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

// // src/pages/AdminDashboard.jsx
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
// // Added 'Legend' to the imports below
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Legend,
// } from "recharts";

// /* ===========================================================================
//    DESIGN SYSTEM & STYLES
//    =========================================================================== */
// const colors = {
//   primary: "rgb(214, 143, 143)", // Rose Pink
//   primaryLight: "rgba(214, 143, 143, 0.1)",
//   background: "#F4F7FE",
//   white: "#FFFFFF",
//   textHeader: "#2B3674",
//   textBody: "#A3AED0",
//   border: "#E0E5F2",
//   success: "#05CD99",
//   danger: "#EE5D50",
// };

// const styles = {
//   container: {
//     display: "flex",
//     minHeight: "100vh",
//     backgroundColor: colors.background,
//     fontFamily: "'DM Sans', sans-serif",
//     color: colors.textHeader,
//   },
//   sidebar: {
//     backgroundColor: colors.white,
//     transition: "all 0.3s ease",
//     borderRight: `1px solid ${colors.border}`,
//     display: "flex",
//     flexDirection: "column",
//     zIndex: 10,
//   },
//   sidebarContent: {
//     padding: "20px",
//   },
//   main: {
//     flex: 1,
//     padding: "30px",
//     overflowY: "auto",
//     height: "100vh",
//   },
//   card: {
//     backgroundColor: colors.white,
//     borderRadius: "20px",
//     padding: "20px",
//     boxShadow: "0px 18px 40px 0px rgba(112, 144, 176, 0.12)",
//     border: "none",
//     marginBottom: "24px",
//     animation: "fadeIn 0.5s ease-out",
//   },
//   title: {
//     fontSize: "22px",
//     fontWeight: "700",
//     color: colors.textHeader,
//     marginBottom: "20px",
//   },
//   statGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//     gap: "20px",
//     marginBottom: "20px",
//   },
//   statCard: {
//     backgroundColor: colors.white,
//     borderRadius: "20px",
//     padding: "20px",
//     display: "flex",
//     alignItems: "center",
//     boxShadow: "0px 18px 40px 0px rgba(112, 144, 176, 0.12)",
//     animation: "slideUp 0.5s ease-out",
//   },
//   statIconBox: {
//     width: "56px",
//     height: "56px",
//     borderRadius: "50%",
//     backgroundColor: colors.primaryLight,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: "15px",
//   },
//   tableContainer: {
//     overflowX: "auto",
//     borderRadius: "20px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     minWidth: "800px",
//   },
//   th: {
//     textAlign: "left",
//     padding: "15px 20px",
//     borderBottom: `1px solid ${colors.border}`,
//     color: colors.textBody,
//     fontSize: "12px",
//     fontWeight: "700",
//     textTransform: "uppercase",
//     letterSpacing: "0.5px",
//   },
//   td: {
//     padding: "16px 20px",
//     color: colors.textHeader,
//     fontSize: "14px",
//     fontWeight: "600",
//     borderBottom: "1px solid #F4F7FE",
//   },
//   badge: (isAdmin) => ({
//     padding: "6px 12px",
//     borderRadius: "8px",
//     fontSize: "12px",
//     fontWeight: "bold",
//     backgroundColor: isAdmin ? "rgba(5, 205, 153, 0.1)" : colors.primaryLight,
//     color: isAdmin ? colors.success : colors.primary,
//   }),
//   button: {
//     padding: "8px 16px",
//     borderRadius: "10px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: "500",
//     fontSize: "13px",
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     transition: "0.2s",
//   },
//   input: {
//     width: "100%",
//     padding: "12px 16px",
//     borderRadius: "16px",
//     border: `1px solid ${colors.border}`,
//     marginBottom: "15px",
//     outline: "none",
//     fontSize: "14px",
//     color: colors.textHeader,
//   },
//   modalOverlay: {
//     position: "fixed",
//     top: 0, left: 0, right: 0, bottom: 0,
//     backgroundColor: "rgba(0,0,0,0.4)",
//     backdropFilter: "blur(4px)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1000,
//     animation: "fadeIn 0.3s ease",
//   },
//   modalContent: {
//     backgroundColor: colors.white,
//     width: "500px",
//     maxWidth: "90%",
//     borderRadius: "24px",
//     padding: "30px",
//     boxShadow: "0px 20px 50px 0px rgba(0,0,0,0.2)",
//     animation: "scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//   },
// };

// /* ===========================================================================
//    GLOBAL ANIMATION STYLES
//    =========================================================================== */
// const GlobalStyles = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
//     body { margin: 0; padding: 0; background-color: #F4F7FE; }
//     ::-webkit-scrollbar { width: 6px; height: 6px; }
//     ::-webkit-scrollbar-track { background: transparent; }
//     ::-webkit-scrollbar-thumb { background: #A3AED0; border-radius: 3px; }
//     @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//     @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
//   `}</style>
// );

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

//   if (loading) return <p style={{ textAlign: "center", color: colors.textBody, marginTop: "50px" }}>Loading users...</p>;
//   if (error) return <p style={{ textAlign: "center", color: colors.danger, marginTop: "50px" }}>{error}</p>;

//   const totalUsers = users.length;
//   const totalAdmins = users.filter((u) => u.isAdmin).length;
//   const totalNormal = totalUsers - totalAdmins;

//   const StatBox = ({ label, count, color }) => (
//     <div style={styles.statCard}>
//       <div style={{ ...styles.statIconBox, backgroundColor: `${color}20` }}>
//         <Users size={24} color={color} />
//       </div>
//       <div>
//         <p style={{ margin: 0, fontSize: "14px", color: colors.textBody }}>{label}</p>
//         <h4 style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>{count}</h4>
//       </div>
//     </div>
//   );

//   return (
//     <div style={{ animation: "fadeIn 0.5s" }}>
//       <div style={styles.statGrid}>
//         <StatBox label="Total Users" count={totalUsers} color="rgb(214, 143, 143)" />
//         <StatBox label="Admins" count={totalAdmins} color={colors.success} />
//         <StatBox label="Normal Users" count={totalNormal} color="#4318FF" />
//       </div>

//       <div style={styles.card}>
//         <h2 style={styles.title}>User Registry</h2>
//         <div style={styles.tableContainer}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>#</th>
//                 <th style={styles.th}>Name</th>
//                 <th style={styles.th}>Email</th>
//                 <th style={styles.th}>Role</th>
//                 <th style={styles.th}>Created At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, idx) => (
//                 <tr key={user._id}>
//                   <td style={styles.td}>{idx + 1}</td>
//                   <td style={styles.td}>
//                      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
//                         <div style={{width:'30px', height:'30px', borderRadius:'50%', background: colors.border, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', color: colors.textBody}}>
//                             {user.name.charAt(0).toUpperCase()}
//                         </div>
//                         {user.name}
//                      </div>
//                   </td>
//                   <td style={styles.td}>{user.email}</td>
//                   <td style={styles.td}>
//                     <span style={styles.badge(user.isAdmin)}>
//                       {user.isAdmin ? "Admin" : "User"}
//                     </span>
//                   </td>
//                   <td style={styles.td}>{new Date(user.createdAt).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ===========================================================================
//    CHATS LIST
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

//   if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading chats...</p>;
//   if (error) return <p style={{ textAlign: "center", color: colors.danger }}>{error}</p>;

//   return (
//     <div style={styles.card}>
//       <h2 style={styles.title}>User & AI Chats</h2>
//       <div style={styles.tableContainer}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>#</th>
//               <th style={styles.th}>User</th>
//               <th style={styles.th}>Role</th>
//               <th style={styles.th}>Message</th>
//               <th style={styles.th}>Created At</th>
//               <th style={styles.th}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {chats.map((chat, idx) => (
//               <tr key={chat._id}>
//                 <td style={styles.td}>{idx + 1}</td>
//                 <td style={styles.td}>{chat.user}</td>
//                 <td style={styles.td}>
//                     <span style={{...styles.badge(false), backgroundColor: '#F4F7FE', color: colors.textBody}}>{chat.role}</span>
//                 </td>
//                 <td style={{ ...styles.td, maxWidth: "300px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
//                     {chat.message}
//                 </td>
//                 <td style={styles.td}>{new Date(chat.createdAt).toLocaleString()}</td>
//                 <td style={styles.td}>
//                   <button
//                     style={{ ...styles.button, backgroundColor: "#FFF5F5", color: colors.danger }}
//                     onClick={() => deleteChat(chat._id)}
//                   >
//                     <Trash2 size={14} /> Delete
//                   </button>
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
//    BLOGS LIST
//    =========================================================================== */
// function BlogsList() {
//   const [blogs, setBlogs] = useState([]);
//   const [editBlog, setEditBlog] = useState(null);

//   const [editTitle, setEditTitle] = useState("");
//   const [editSummary, setEditSummary] = useState("");
//   const [editContent, setEditContent] = useState("");
//   const [editImage, setEditImage] = useState("");

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

//   const openEditPopup = (blog) => {
//     setEditBlog(blog);
//     setEditTitle(blog.title || "");
//     setEditSummary(blog.summary || "");
//     setEditContent(blog.content || "");
//     setEditImage(blog.image || "");
//   };

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
//     <div style={{ animation: "fadeIn 0.5s" }}>
//       <h2 style={{ ...styles.title, fontSize: "30px", marginBottom: "30px" }}>Manage Blogs</h2>

//       <div style={styles.card}>
//         <div style={styles.tableContainer}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>Image</th>
//                 <th style={styles.th}>Title</th>
//                 <th style={styles.th}>Summary</th>
//                 <th style={styles.th}>Content</th>
//                 <th style={styles.th}>Created</th>
//                 <th style={styles.th}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {blogs.map((blog) => (
//                 <tr key={blog._id}>
//                   <td style={styles.td}>
//                     {blog.image ? (
//                       <img
//                         src={blog.image}
//                         alt={blog.title}
//                         style={{ width: "60px", height: "40px", objectFit: "cover", borderRadius: "6px" }}
//                       />
//                     ) : (
//                       <div style={{ width: "60px", height: "40px", backgroundColor: "#eee", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>No Img</div>
//                     )}
//                   </td>
//                   <td style={{ ...styles.td, fontWeight: "700" }}>{blog.title}</td>
//                   <td style={{ ...styles.td, maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{blog.summary}</td>
//                   <td style={{ ...styles.td, maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: colors.textBody }}>{blog.content}</td>
//                   <td style={styles.td}>{new Date(blog.createdAt).toLocaleDateString()}</td>
//                   <td style={styles.td}>
//                     <div style={{ display: "flex", gap: "10px" }}>
//                       <button
//                         style={{ ...styles.button, backgroundColor: "#EFF4FB", color: colors.textHeader }}
//                         onClick={() => openEditPopup(blog)}
//                       >
//                         <Edit size={14} /> Edit
//                       </button>
//                       <button
//                         style={{ ...styles.button, backgroundColor: "#FFF5F5", color: colors.danger }}
//                         onClick={() => handleDelete(blog._id)}
//                       >
//                         <Trash2 size={14} /> Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//               {blogs.length === 0 && (
//                 <tr>
//                   <td colSpan={6} style={{ textAlign: "center", padding: "30px", color: colors.textBody }}>
//                     No blogs found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* EDIT POPUP */}
//       {editBlog && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h2 style={{ ...styles.title, marginBottom: "25px" }}>Edit Blog</h2>

//             <input style={styles.input} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Title" />
//             <input style={styles.input} value={editSummary} onChange={(e) => setEditSummary(e.target.value)} placeholder="Summary" />
//             <input style={styles.input} value={editImage} onChange={(e) => setEditImage(e.target.value)} placeholder="Image URL" />
//             <textarea
//               style={{ ...styles.input, height: "120px", resize: "none" }}
//               value={editContent}
//               onChange={(e) => setEditContent(e.target.value)}
//               placeholder="Content"
//             />

//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px", marginTop: "20px" }}>
//               <button
//                 style={{ ...styles.button, backgroundColor: colors.background, color: colors.textBody }}
//                 onClick={() => setEditBlog(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 style={{ ...styles.button, backgroundColor: colors.primary, color: colors.white }}
//                 onClick={handleUpdate}
//               >
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

//   const NavItem = ({ page, icon: Icon, label, count }) => {
//     const isActive = activePage === page;
//     return (
//       <li
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: sidebarCollapsed ? "center" : "space-between",
//           padding: "15px",
//           marginBottom: "8px",
//           borderRadius: "12px",
//           cursor: "pointer",
//           transition: "all 0.2s",
//           backgroundColor: isActive ? colors.primary : "transparent",
//           color: isActive ? colors.white : colors.textBody,
//           boxShadow: isActive ? `0px 10px 20px -5px ${colors.primary}80` : "none",
//         }}
//         onClick={() => setActivePage(page)}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <Icon size={20} />
//           {!sidebarCollapsed && <span style={{ fontWeight: "500" }}>{label}</span>}
//         </div>
//         {!sidebarCollapsed && count > 0 && (
//           <span
//             style={{
//               backgroundColor: isActive ? colors.white : colors.primaryLight,
//               color: isActive ? colors.primary : colors.primary,
//               padding: "2px 8px",
//               borderRadius: "10px",
//               fontSize: "11px",
//               fontWeight: "bold",
//             }}
//           >
//             {count}
//           </span>
//         )}
//       </li>
//     );
//   };

//   return (
//     <>
//       <GlobalStyles />
//       <Navbar />
//       <div style={{ ...styles.container, paddingTop: "64px" }}>
//         {/* Sidebar */}
//         <aside
//           style={{
//             ...styles.sidebar,
//             width: sidebarCollapsed ? "80px" : "290px",
//           }}
//         >
//           <div
//             style={{
//               padding: "30px",
//               borderBottom: `1px solid ${colors.border}`,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             {!sidebarCollapsed && (
//               <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "800", color: colors.textHeader }}>
//                 Admin<span style={{ color: colors.primary }}>Panel</span>
//               </h2>
//             )}
//             <Menu
//               size={24}
//               style={{ cursor: "pointer", color: colors.textBody }}
//               onClick={() => setSidebarCollapsed((s) => !s)}
//             />
//           </div>

//           <ul style={{ listStyle: "none", padding: "20px", margin: 0 }}>
//             <NavItem page="dashboard" icon={BarChart2} label="Dashboard" />
//             <NavItem page="list" icon={List} label="Product List" count={productsCount} />
//             <NavItem page="orders" icon={ShoppingCart} label="Orders List" count={ordersCount} />
//             <NavItem page="users" icon={Users} label="Users List" />
//             <NavItem page="chats" icon={Users} label="Chats" />
//             <NavItem page="blogs" icon={Edit} label="Blogs" />
//             <NavItem page="settings" icon={Settings} label="Settings" />
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <main style={styles.main}>
//           {activePage === "dashboard" && dashboardData && (
//             <div style={{ animation: "fadeIn 0.5s ease-out" }}>
//               <div style={styles.statGrid}>
//                 <div style={styles.statCard}>
//                   <div style={{ ...styles.statIconBox, backgroundColor: `${colors.primary}20` }}>
//                     <DollarSign size={28} color={colors.primary} />
//                   </div>
//                   <div>
//                     <p style={{ margin: 0, color: colors.textBody, fontSize: "14px" }}>Total Sales</p>
//                     <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>
//                       {dashboardData.totalSales ?? 0}
//                     </p>
//                   </div>
//                 </div>

//                 <div style={styles.statCard}>
//                   <div style={{ ...styles.statIconBox, backgroundColor: "rgba(5, 205, 153, 0.1)" }}>
//                     <DollarSign size={28} color={colors.success} />
//                   </div>
//                   <div>
//                     <p style={{ margin: 0, color: colors.textBody, fontSize: "14px" }}>Earnings</p>
//                     <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>
//                       ₹{dashboardData.totalEarnings ?? 0}
//                     </p>
//                   </div>
//                 </div>

//                 <div style={styles.statCard}>
//                   <div style={{ ...styles.statIconBox, backgroundColor: "rgba(67, 24, 255, 0.1)" }}>
//                     <Eye size={28} color="#4318FF" />
//                   </div>
//                   <div>
//                     <p style={{ margin: 0, color: colors.textBody, fontSize: "14px" }}>Page Views</p>
//                     <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: colors.textHeader }}>
//                       {dashboardData.totalViews ?? 0}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ ...styles.card, height: "400px" }}>
//                 <h2 style={{ ...styles.title, marginBottom: "30px" }}>Monthly Stats</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={dashboardData.monthlyData || []}>
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E5F2" />
//                     <XAxis
//                       dataKey="month"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#A3AED0", fontSize: 12 }}
//                       dy={10}
//                     />
//                     <YAxis
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#A3AED0", fontSize: 12 }}
//                     />
//                     <Tooltip
//                       cursor={{ fill: "transparent" }}
//                       contentStyle={{
//                         borderRadius: "12px",
//                         border: "none",
//                         boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
//                       }}
//                     />
//                     <Legend iconType="circle" wrapperStyle={{ paddingTop: "20px" }} />
//                     <Bar dataKey="sales" fill={colors.primary} radius={[10, 10, 0, 0]} barSize={20} />
//                     <Bar dataKey="earnings" fill={colors.success} radius={[10, 10, 0, 0]} barSize={20} />
//                     <Bar dataKey="views" fill="#4318FF" radius={[10, 10, 0, 0]} barSize={20} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}

//           {activePage === "list" && (
//             <div style={styles.card}><ProductList /></div>
//           )}
//           {activePage === "orders" && (
//             <div style={styles.card}><OrdersListWithBoundary /></div>
//           )}
//           {activePage === "users" && <UsersList />}
//           {activePage === "chats" && <ChatsList />}
//           {activePage === "blogs" && <BlogsList />}

//           {activePage === "settings" && (
//             <div style={{ ...styles.card, minHeight: "400px", display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
//               <Settings size={64} color={colors.border} style={{marginBottom:'20px'}}/>
//               <h2 style={{ ...styles.title, marginBottom: "10px" }}>Settings</h2>
//               <p style={{ color: colors.textBody }}>Admin settings will go here.</p>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;




// // src/pages/AdminDashboard.jsx
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
//   MessageSquare,
//   Bell,
//   Search,
//   TrendingUp,
//   Activity
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Area,
//   AreaChart
// } from "recharts";

// /* ===========================================================================
//    🎨 2025 NEO-SAAS STYLES
//    =========================================================================== */
// const THEME_COLOR = "rgb(214, 143, 143)"; // Rose Pink
// const THEME_LIGHT = "rgba(214, 143, 143, 0.15)"; // Light Rose
// const THEME_TEXT = "#2B3674"; // Deep Navy

// const styles = {
//   container: {
//     backgroundColor: "#FDF2F2",
//     minHeight: "100vh",
//     fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
//     color: THEME_TEXT,
//     display: "flex",
//   },
//   sidebar: {
//     backgroundColor: "#ffffff",
//     height: "100vh",
//     position: "fixed",
//     zIndex: 50,
//     transition: "0.3s ease",
//     borderTopRightRadius: "20px",
//     borderBottomRightRadius: "20px",
//     boxShadow: "14px 17px 40px 4px rgba(214, 143, 143, 0.08)",
//     padding: "25px",
//   },
//   navItem: (isActive) => ({
//     display: "flex",
//     alignItems: "center",
//     padding: "13px 20px",
//     marginBottom: "12px",
//     borderRadius: "12px",
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//     background: isActive 
//       ? `linear-gradient(90deg, ${THEME_COLOR} 0%, #e8b4b4 100%)` 
//       : "transparent",
//     color: isActive ? "#ffffff" : "#A3AED0",
//     fontWeight: isActive ? "700" : "500",
//     boxShadow: isActive ? `0px 10px 20px -5px rgba(214, 143, 143, 0.4)` : "none",
//     position: "relative",
//   }),
//   main: {
//     flex: 1,
//     padding: "30px",
//     transition: "margin-left 0.3s ease",
//     maxWidth: "100%",
//     overflowX: "hidden",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: "20px",
//     padding: "24px",
//     boxShadow: "0px 20px 50px 0px rgba(214, 143, 143, 0.05)", 
//     border: "none",
//     marginBottom: "24px",
//     position: "relative",
//     overflow: "hidden",
//   },
//   statGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//     gap: "24px",
//     marginBottom: "24px",
//   },
//   statIcon: {
//     width: "56px",
//     height: "56px",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: "18px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: "0 15px", 
//   },
//   th: {
//     textAlign: "left",
//     color: "#A3AED0",
//     fontSize: "12px",
//     fontWeight: "700",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     padding: "0 20px",
//     border: "none",
//   },
//   row: {
//     backgroundColor: "#ffffff",
//     boxShadow: "0px 3px 10px rgba(0,0,0,0.02)",
//     transition: "transform 0.2s ease",
//     cursor: "default",
//   },
//   td: {
//     padding: "20px",
//     fontSize: "14px",
//     fontWeight: "700",
//     color: THEME_TEXT,
//     borderTop: "1px solid #FDF2F2",
//     borderBottom: "1px solid #FDF2F2",
//   },
//   firstTd: {
//     borderTopLeftRadius: "15px",
//     borderBottomLeftRadius: "15px",
//     borderLeft: "1px solid #FDF2F2",
//   },
//   lastTd: {
//     borderTopRightRadius: "15px",
//     borderBottomRightRadius: "15px",
//     borderRight: "1px solid #FDF2F2",
//   },
//   input: {
//     backgroundColor: "#FDF2F2",
//     border: "none",
//     borderRadius: "30px",
//     padding: "12px 20px",
//     color: THEME_TEXT,
//     fontSize: "14px",
//     outline: "none",
//     width: "100%",
//     fontWeight: "500",
//   },
//   actionBtn: {
//     border: "none",
//     width: "36px",
//     height: "36px",
//     borderRadius: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     transition: "0.2s",
//   },
// };

// const StylesInjection = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
//     body { background-color: #FDF2F2; margin: 0; }
//     @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//     .hover-scale:hover { transform: scale(1.02); }
//     .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(214, 143, 143, 0.2) !important; }
//     .table-row:hover { transform: scale(1.01); background-color: #ffffff; box-shadow: 0px 10px 30px rgba(0,0,0,0.05) !important; z-index: 2; position: relative; }
//     ::-webkit-scrollbar { width: 6px; }
//     ::-webkit-scrollbar-track { background: transparent; }
//     ::-webkit-scrollbar-thumb { background: rgb(214, 143, 143); border-radius: 10px; }
//   `}</style>
// );

// /* ===========================================================================
//    USERS LIST COMPONENT
//    =========================================================================== */
// function UsersList({ searchTerm }) {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/users", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setUsers(res.data || []);
//         setLoading(false);
//       } catch (err) { setLoading(false); }
//     };
//     fetchUsers();
//   }, [token]);

//   // SAFE FILTERING: Using || "" to prevent crash
//   const filteredUsers = users.filter(user => {
//     const name = user.name || "";
//     const email = user.email || "";
//     const term = searchTerm.toLowerCase();
//     return name.toLowerCase().includes(term) || email.toLowerCase().includes(term);
//   });

//   if (loading) return <div style={{padding: '50px', textAlign: 'center', color: THEME_COLOR}}>Loading...</div>;

//   return (
//     <div style={{ animation: "slideUp 0.5s ease-out" }}>
//       <div style={styles.statGrid}>
//         {[
//           { label: 'Total Users', val: users.length, color: THEME_COLOR, bg: '#FDF2F2' },
//           { label: 'Admins', val: users.filter(u => u.isAdmin).length, color: '#05CD99', bg: 'rgba(5, 205, 153, 0.1)' },
//         ].map((s, i) => (
//           <div key={i} style={{...styles.card, display: 'flex', alignItems: 'center', padding: '20px'}} className="hover-lift">
//              <div style={{...styles.statIcon, backgroundColor: s.bg, color: s.color}}>
//                 <Users size={24} />
//              </div>
//              <div>
//                 <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {s.label} </p>
//                 <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {s.val} </h3>
//              </div>
//           </div>
//         ))}
//       </div>

//       <div style={styles.card}>
//         <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Registered Users ({filteredUsers.length})</h3>
//         <div style={{overflowX: 'auto'}}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 {['User Info', 'Email', 'Role', 'Join Date'].map((h,i) => <th key={i} style={styles.th}>{h}</th>)}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map(user => (
//                 <tr key={user._id} style={styles.row} className="table-row">
//                   <td style={{...styles.td, ...styles.firstTd}}>
//                     <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
//                       <div style={{width: '40px', height: '40px', borderRadius: '50%', background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
//                         {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
//                       </div>
//                       <span>{user.name}</span>
//                     </div>
//                   </td>
//                   <td style={{...styles.td, color: '#A3AED0'}}>{user.email}</td>
//                   <td style={styles.td}>
//                     <span style={{
//                       padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700',
//                       backgroundColor: user.isAdmin ? THEME_LIGHT : 'rgba(5, 205, 153, 0.1)',
//                       color: user.isAdmin ? THEME_COLOR : '#05CD99'
//                     }}>
//                       {user.isAdmin ? 'ADMIN' : 'CUSTOMER'}
//                     </span>
//                   </td>
//                   <td style={{...styles.td, ...styles.lastTd, color: '#A3AED0'}}>{new Date(user.createdAt).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ===========================================================================
//    CHATS COMPONENT (Fixed Crash + Added Details View)
//    =========================================================================== */
// function ChatsList({ searchTerm }) {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChats = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/chats", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setChats(res.data || []);
//         setLoading(false);
//       } catch (err) { setLoading(false); }
//     };
//     fetchChats();
//   }, [token]);

//   const deleteChat = async (id) => {
//     if(!window.confirm("Delete?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/chats/${id}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//       setChats(prev => prev.filter(c => c._id !== id));
//       if(selectedChat && selectedChat._id === id) setSelectedChat(null);
//     } catch (err) { alert("Error"); }
//   };

//   // SAFE FILTERING (Prevents "toLowerCase of undefined" crash)
//   const filteredChats = chats.filter(chat => {
//      const user = chat.user || "";
//      const msg = chat.message || "";
//      const term = searchTerm.toLowerCase();
//      return user.toLowerCase().includes(term) || msg.toLowerCase().includes(term);
//   });

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div style={{...styles.card, animation: "slideUp 0.6s ease-out"}}>
//       <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Support Inbox</h3>
//       <table style={styles.table}>
//         <thead>
//           <tr>{['User', 'Role', 'Message', 'Date', 'Actions'].map((h,i) => <th key={i} style={styles.th}>{h}</th>)}</tr>
//         </thead>
//         <tbody>
//           {filteredChats.map(chat => (
//             <tr key={chat._id} style={styles.row} className="table-row">
//               <td style={{...styles.td, ...styles.firstTd}}>{chat.user}</td>
//               <td style={styles.td}><span style={{fontSize:'12px', color: '#A3AED0', background: '#FDF2F2', padding: '4px 8px', borderRadius:'4px'}}>{chat.role}</span></td>
//               <td style={{...styles.td, maxWidth: '300px', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', color:'#A3AED0'}}>{chat.message}</td>
//               <td style={styles.td}>{new Date(chat.createdAt).toLocaleDateString()}</td>
//               <td style={{...styles.td, ...styles.lastTd, display: 'flex', gap: '10px'}}>
//                 <button onClick={() => setSelectedChat(chat)} style={{...styles.actionBtn, background: '#FDF2F2', color: THEME_COLOR}}>
//                   <Eye size={16} />
//                 </button>
//                 <button onClick={() => deleteChat(chat._id)} style={{...styles.actionBtn, background: '#FFF5F5', color: '#EE5D50'}}>
//                   <Trash2 size={16} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* CHAT DETAIL POPUP */}
//       {selectedChat && (
//         <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
//             <div style={{backgroundColor: 'white', width: '500px', borderRadius: '20px', padding: '24px', animation: 'fadeIn 0.3s'}}>
//                 <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px'}}>
//                     <h3 style={{margin: 0, color: THEME_TEXT}}>Message from {selectedChat.user}</h3>
//                     <button onClick={() => setSelectedChat(null)} style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px'}}>&times;</button>
//                 </div>
//                 <div style={{background: '#FDF2F2', padding: '15px', borderRadius: '12px', marginBottom: '20px'}}>
//                     <p style={{margin: 0, color: '#555', lineHeight: '1.6'}}>{selectedChat.message}</p>
//                 </div>
//                 <div style={{textAlign: 'right', color: '#A3AED0', fontSize: '12px'}}>
//                     Sent: {new Date(selectedChat.createdAt).toLocaleString()}
//                 </div>
//             </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ===========================================================================
//    BLOGS COMPONENT (With Search)
//    =========================================================================== */
// function BlogsList({ searchTerm }) {
//   const [blogs, setBlogs] = useState([]);
//   const [editBlog, setEditBlog] = useState(null);
//   // Form state
//   const [editTitle, setEditTitle] = useState("");
//   const [editSummary, setEditSummary] = useState("");
//   const [editContent, setEditContent] = useState("");
//   const [editImage, setEditImage] = useState("");

//   useEffect(() => {
//     const fetchBlogs = async () => { try { const res = await axios.get("http://localhost:5000/api/blogs"); setBlogs(res.data || []); } catch (e) {} };
//     fetchBlogs();
//   }, []);

//   const handleDelete = async (id) => { if(window.confirm("Delete?")) { try { await axios.delete(`http://localhost:5000/api/blogs/${id}`); setBlogs(prev => prev.filter(b => b._id !== id)); } catch (e) {} } };
//   const openEditPopup = (b) => { setEditBlog(b); setEditTitle(b.title); setEditSummary(b.summary); setEditContent(b.content); setEditImage(b.image); };
//   const handleUpdate = async () => {
//     if(!editBlog) return;
//     try {
//       await axios.put(`http://localhost:5000/api/blogs/${editBlog._id}`, { title: editTitle, summary: editSummary, content: editContent, image: editImage });
//       setEditBlog(null); const res = await axios.get("http://localhost:5000/api/blogs"); setBlogs(res.data || []);
//     } catch (e) {}
//   };

//   // SAFE FILTERING
//   const filteredBlogs = blogs.filter(blog => {
//     const title = blog.title || "";
//     return title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div style={{animation: "fadeIn 0.7s ease-out"}}>
//       <h3 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 25px 0', color: THEME_TEXT }}>Blog Management</h3>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
//         {filteredBlogs.map(blog => (
//           <div key={blog._id} style={{...styles.card, padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}} className="hover-lift">
//              <div style={{height: '160px', backgroundColor: '#E0E5F2', position: 'relative'}}>
//                 {blog.image && <img src={blog.image} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
//                 <div style={{position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '8px'}}>
//                    <button onClick={() => openEditPopup(blog)} style={{width: '32px', height: '32px', borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: THEME_COLOR}}><Edit size={14} /></button>
//                    <button onClick={() => handleDelete(blog._id)} style={{width: '32px', height: '32px', borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EE5D50'}}><Trash2 size={14} /></button>
//                 </div>
//              </div>
//              <div style={{padding: '24px', flex: 1}}>
//                 <p style={{fontSize: '12px', color: '#05CD99', fontWeight: '700', textTransform: 'uppercase', margin: '0 0 8px 0'}}>{new Date(blog.createdAt).toLocaleDateString()}</p>
//                 <h4 style={{margin: '0 0 10px 0', fontSize: '18px', lineHeight: '1.4'}}>{blog.title}</h4>
//                 <p style={{color: '#A3AED0', fontSize: '14px', lineHeight: '1.6'}}>{blog.summary}</p>
//              </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {editBlog && (
//         <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
//            <div style={{...styles.card, width: '500px', padding: '30px'}}>
//               <h3 style={{marginTop: 0}}>Edit Blog</h3>
//               <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
//                  <input value={editTitle} onChange={e => setEditTitle(e.target.value)} style={styles.input} placeholder="Title" />
//                  <input value={editSummary} onChange={e => setEditSummary(e.target.value)} style={styles.input} placeholder="Summary" />
//                  <input value={editImage} onChange={e => setEditImage(e.target.value)} style={styles.input} placeholder="Image URL" />
//                  <textarea value={editContent} onChange={e => setEditContent(e.target.value)} style={{...styles.input, borderRadius: '15px', minHeight: '100px'}} placeholder="Content" />
//                  <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '10px'}}>
//                     <button onClick={() => setEditBlog(null)} style={{padding: '12px 24px', borderRadius: '12px', border: 'none', background: '#FDF2F2', fontWeight: '600', cursor: 'pointer'}}>Cancel</button>
//                     <button onClick={handleUpdate} style={{padding: '12px 24px', borderRadius: '12px', border: 'none', background: THEME_COLOR, color: 'white', fontWeight: '600', cursor: 'pointer'}}>Update</button>
//                  </div>
//               </div>
//            </div>
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
  
//   // === SEARCH STATE ===
//   const [searchTerm, setSearchTerm] = useState("");

//   const [dashboardData, setDashboardData] = useState(null);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (role !== "admin") { alert("Admins only!"); window.location.href = "/login"; }
//   }, [role]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dashRes = await axios.get("http://localhost:5000/admin/dashboard", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setDashboardData(dashRes.data || { monthlyData: [] });
//         const prodRes = await axios.get("http://localhost:5000/products", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setProductsCount(Array.isArray(prodRes.data) ? prodRes.data.length : 0);
//         const orderRes = await axios.get("http://localhost:5000/orders", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setOrdersCount(Array.isArray(orderRes.data) ? orderRes.data.length : 0);
//       } catch (err) { console.error(err); }
//     };
//     fetchData();
//   }, [token]);

//   const NavItem = ({ page, icon: Icon, label, count }) => {
//     const isActive = activePage === page;
//     return (
//       <li
//         onClick={() => {
//             setActivePage(page);
//             setSearchTerm(""); // Reset search when changing pages
//         }}
//         style={styles.navItem(isActive)}
//         className="hover-scale"
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <Icon size={20} />
//           {!sidebarCollapsed && <span>{label}</span>}
//         </div>
//         {!sidebarCollapsed && count > 0 && (
//           <span style={{ 
//             marginLeft: 'auto', 
//             background: isActive ? 'rgba(255,255,255,0.2)' : '#FDF2F2', 
//             color: isActive ? '#ffffff' : THEME_TEXT, 
//             padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '800' 
//           }}>
//             {count}
//           </span>
//         )}
//       </li>
//     );
//   };

//   return (
//     <>
//       <StylesInjection />
//       <Navbar />
//       <div style={{...styles.container, paddingTop: '64px'}}>
        
//         {/* SIDEBAR */}
//         <aside style={{
//             ...styles.sidebar, 
//             width: sidebarCollapsed ? "80px" : "280px",
//             padding: "20px"
//         }}>
//           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px'}}>
//             {!sidebarCollapsed && (
//                 <h2 style={{margin: 0, fontSize: '24px', fontWeight: '800', color: THEME_TEXT, textTransform: 'uppercase'}}>
//                     Admin<span style={{color: THEME_COLOR}}>Panel.</span>
//                 </h2>
//             )}
//             <Menu size={24} style={{color: '#A3AED0', cursor: 'pointer'}} onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
//           </div>

//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             <NavItem page="dashboard" icon={BarChart2} label="Dashboard" />
//             <NavItem page="list" icon={List} label="Products" count={productsCount} />
//             <NavItem page="orders" icon={ShoppingCart} label="Orders" count={ordersCount} />
//             <NavItem page="users" icon={Users} label="Customers" />
//             <NavItem page="chats" icon={MessageSquare} label="Chats" />
//             <NavItem page="blogs" icon={Edit} label="Blogs" />
//             <NavItem page="settings" icon={Settings} label="Settings" />
//           </ul>
//         </aside>

//         {/* MAIN */}
//         <main style={{
//             ...styles.main, 
//             marginLeft: sidebarCollapsed ? "100px" : "310px"
//         }}>
//           {/* Header */}
//           <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', animation: 'fadeIn 0.8s'}}>
//              <div>
//                 <p style={{margin: 0, fontSize: '14px', color: '#707EAE', fontWeight: '500'}}>Pages / {activePage.charAt(0).toUpperCase() + activePage.slice(1)}</p>
//                 <h1 style={{margin: '5px 0 0', fontSize: '34px', fontWeight: '700', color: THEME_TEXT}}>Main Dashboard</h1>
//              </div>
//              <div style={{...styles.card, padding: '10px', borderRadius: '30px', marginBottom: 0, display: 'flex', alignItems: 'center', gap: '15px'}}>
//                  {/* === SEARCH BAR === */}
//                  <div style={{background: '#FDF2F2', padding: '10px 16px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', width: '250px'}}>
//                     <Search size={16} color={THEME_COLOR} />
//                     <input 
//                         placeholder="Search..." 
//                         style={{border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', width: '100%', color: THEME_TEXT}} 
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                  </div>
//                  <Bell size={20} color="#A3AED0" style={{cursor: 'pointer'}} />
//                  <div style={{width: '40px', height: '40px', borderRadius: '50%', background: THEME_COLOR, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>AP</div>
//              </div>
//           </div>

//           {/* DASHBOARD CONTENT */}
//           {activePage === "dashboard" && dashboardData && (
//             <div style={{animation: "fadeIn 0.5s ease-out"}}>
//               {/* Top Stats */}
//               <div style={styles.statGrid}>
//                 {[
//                     { title: 'Earnings', val: `₹${dashboardData.totalEarnings}`, icon: DollarSign, color: THEME_COLOR },
//                     { title: 'Total Sales', val: dashboardData.totalSales, icon: ShoppingCart, color: '#05CD99' },
//                     { title: 'Activity', val: dashboardData.totalViews, icon: Activity, color: '#FFB547' },
//                 ].map((item, i) => (
//                     <div key={i} style={styles.card} className="hover-lift">
//                         <div style={{display: 'flex', alignItems: 'center'}}>
//                             <div style={{...styles.statIcon, backgroundColor: `${item.color}20`, color: item.color}}>
//                                 <item.icon size={28} />
//                             </div>
//                             <div>
//                                 <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {item.title} </p>
//                                 <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {item.val} </h3>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//               </div>

//               {/* Charts Area */}
//               <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px'}}>
                
//                 {/* Main Bar Chart */}
//                 <div style={{...styles.card, minHeight: '400px'}}>
//                     <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
//                         <h3 style={{margin: 0, fontSize: '22px', fontWeight: '700', color: THEME_TEXT}}>Revenue Stream</h3>
//                         <div style={{background: '#FDF2F2', padding: '8px', borderRadius: '10px'}}><BarChart2 size={20} color={THEME_COLOR} /></div>
//                     </div>
//                     <ResponsiveContainer width="100%" height={300}>
//                         <AreaChart data={dashboardData.monthlyData || []}>
//                             <defs>
//                                 <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor={THEME_COLOR} stopOpacity={0.3}/>
//                                     <stop offset="95%" stopColor={THEME_COLOR} stopOpacity={0}/>
//                                 </linearGradient>
//                             </defs>
//                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E5F2" />
//                             <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} dy={10} />
//                             <YAxis axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} />
//                             <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
//                             <Area type="monotone" dataKey="sales" stroke={THEME_COLOR} strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 </div>

//                 {/* Side Panel (Mockup) */}
//                 <div style={{...styles.card, background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
//                     <div style={{width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
//                         <TrendingUp size={40} color="white" />
//                     </div>
//                     <h3 style={{margin: '0 0 10px 0', fontSize: '22px'}}>Your Growth</h3>
//                     <p style={{margin: 0, opacity: 0.8, fontSize: '14px'}}>Sales are up 35% this month.</p>
//                     <button style={{marginTop: '20px', padding: '12px 24px', background: 'white', color: THEME_COLOR, border: 'none', borderRadius: '20px', fontWeight: '700', cursor: 'pointer'}}>View Report</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* LIST COMPONENTS WITH SEARCH FILTERING */}
//           {activePage === "list" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><ProductList /></div>}
//           {activePage === "orders" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><OrdersListWithBoundary /></div>}
          
//           {/* Pass searchTerm props for filtering */}
//           {activePage === "users" && <UsersList searchTerm={searchTerm} />}
//           {activePage === "chats" && <ChatsList searchTerm={searchTerm} />}
//           {activePage === "blogs" && <BlogsList searchTerm={searchTerm} />}

//           {activePage === "settings" && (
//              <div style={{...styles.card, minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//                 <Settings size={64} color="#E0E5F2" />
//                 <h3 style={{color: THEME_TEXT, marginTop: '20px'}}>Settings Configuration</h3>
//              </div>
//           )}

//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;

// // src/pages/AdminDashboard.jsx
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
//   MessageSquare,
//   Bell,
//   Search,
//   TrendingUp,
//   Activity,
//   Plus, // Added
//   X     // Added
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Area,
//   AreaChart
// } from "recharts";

// /* ===========================================================================
//    🎨 2025 NEO-SAAS STYLES
//    =========================================================================== */
// const THEME_COLOR = "rgb(214, 143, 143)"; // Rose Pink
// const THEME_LIGHT = "rgba(214, 143, 143, 0.15)"; // Light Rose
// const THEME_TEXT = "#2B3674"; // Deep Navy

// const styles = {
//   container: {
//     backgroundColor: "#FDF2F2",
//     minHeight: "100vh",
//     fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
//     color: THEME_TEXT,
//     display: "flex",
//   },
//   sidebar: {
//     backgroundColor: "#ffffff",
//     height: "100vh",
//     position: "fixed",
//     zIndex: 50,
//     transition: "0.3s ease",
//     borderTopRightRadius: "20px",
//     borderBottomRightRadius: "20px",
//     boxShadow: "14px 17px 40px 4px rgba(214, 143, 143, 0.08)",
//     padding: "25px",
//   },
//   navItem: (isActive) => ({
//     display: "flex",
//     alignItems: "center",
//     padding: "13px 20px",
//     marginBottom: "12px",
//     borderRadius: "12px",
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//     background: isActive 
//       ? `linear-gradient(90deg, ${THEME_COLOR} 0%, #e8b4b4 100%)` 
//       : "transparent",
//     color: isActive ? "#ffffff" : "#A3AED0",
//     fontWeight: isActive ? "700" : "500",
//     boxShadow: isActive ? `0px 10px 20px -5px rgba(214, 143, 143, 0.4)` : "none",
//     position: "relative",
//   }),
//   main: {
//     flex: 1,
//     padding: "30px",
//     transition: "margin-left 0.3s ease",
//     maxWidth: "100%",
//     overflowX: "hidden",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: "20px",
//     padding: "24px",
//     boxShadow: "0px 20px 50px 0px rgba(214, 143, 143, 0.05)", 
//     border: "none",
//     marginBottom: "24px",
//     position: "relative",
//     overflow: "hidden",
//   },
//   statGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//     gap: "24px",
//     marginBottom: "24px",
//   },
//   statIcon: {
//     width: "56px",
//     height: "56px",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: "18px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: "0 15px", 
//   },
//   th: {
//     textAlign: "left",
//     color: "#A3AED0",
//     fontSize: "12px",
//     fontWeight: "700",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     padding: "0 20px",
//     border: "none",
//   },
//   row: {
//     backgroundColor: "#ffffff",
//     boxShadow: "0px 3px 10px rgba(0,0,0,0.02)",
//     transition: "transform 0.2s ease",
//     cursor: "default",
//   },
//   td: {
//     padding: "20px",
//     fontSize: "14px",
//     fontWeight: "700",
//     color: THEME_TEXT,
//     borderTop: "1px solid #FDF2F2",
//     borderBottom: "1px solid #FDF2F2",
//   },
//   firstTd: {
//     borderTopLeftRadius: "15px",
//     borderBottomLeftRadius: "15px",
//     borderLeft: "1px solid #FDF2F2",
//   },
//   lastTd: {
//     borderTopRightRadius: "15px",
//     borderBottomRightRadius: "15px",
//     borderRight: "1px solid #FDF2F2",
//   },
//   input: {
//     backgroundColor: "#FDF2F2",
//     border: "none",
//     borderRadius: "15px",
//     padding: "12px 20px",
//     color: THEME_TEXT,
//     fontSize: "14px",
//     outline: "none",
//     width: "100%",
//     fontWeight: "500",
//   },
//   actionBtn: {
//     border: "none",
//     width: "36px",
//     height: "36px",
//     borderRadius: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     transition: "0.2s",
//   },
// };

// const StylesInjection = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
//     body { background-color: #FDF2F2; margin: 0; }
//     @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//     .hover-scale:hover { transform: scale(1.02); }
//     .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(214, 143, 143, 0.2) !important; }
//     .table-row:hover { transform: scale(1.01); background-color: #ffffff; box-shadow: 0px 10px 30px rgba(0,0,0,0.05) !important; z-index: 2; position: relative; }
//     ::-webkit-scrollbar { width: 6px; }
//     ::-webkit-scrollbar-track { background: transparent; }
//     ::-webkit-scrollbar-thumb { background: rgb(214, 143, 143); border-radius: 10px; }
//   `}</style>
// );

// /* ===========================================================================
//    USERS LIST COMPONENT
//    =========================================================================== */
// function UsersList({ searchTerm }) {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/users", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setUsers(res.data || []);
//         setLoading(false);
//       } catch (err) { setLoading(false); }
//     };
//     fetchUsers();
//   }, [token]);

//   const filteredUsers = users.filter(user => {
//     const name = user.name || "";
//     const email = user.email || "";
//     const term = searchTerm.toLowerCase();
//     return name.toLowerCase().includes(term) || email.toLowerCase().includes(term);
//   });

//   if (loading) return <div style={{padding: '50px', textAlign: 'center', color: THEME_COLOR}}>Loading...</div>;

//   return (
//     <div style={{ animation: "slideUp 0.5s ease-out" }}>
//       <div style={styles.statGrid}>
//         {[
//           { label: 'Total Users', val: users.length, color: THEME_COLOR, bg: '#FDF2F2' },
//           { label: 'Admins', val: users.filter(u => u.isAdmin).length, color: '#05CD99', bg: 'rgba(5, 205, 153, 0.1)' },
//         ].map((s, i) => (
//           <div key={i} style={{...styles.card, display: 'flex', alignItems: 'center', padding: '20px'}} className="hover-lift">
//              <div style={{...styles.statIcon, backgroundColor: s.bg, color: s.color}}>
//                 <Users size={24} />
//              </div>
//              <div>
//                 <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {s.label} </p>
//                 <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {s.val} </h3>
//              </div>
//           </div>
//         ))}
//       </div>

//       <div style={styles.card}>
//         <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Registered Users ({filteredUsers.length})</h3>
//         <div style={{overflowX: 'auto'}}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 {['User Info', 'Email', 'Role', 'Join Date'].map((h,i) => <th key={i} style={styles.th}>{h}</th>)}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map(user => (
//                 <tr key={user._id} style={styles.row} className="table-row">
//                   <td style={{...styles.td, ...styles.firstTd}}>
//                     <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
//                       <div style={{width: '40px', height: '40px', borderRadius: '50%', background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
//                         {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
//                       </div>
//                       <span>{user.name}</span>
//                     </div>
//                   </td>
//                   <td style={{...styles.td, color: '#A3AED0'}}>{user.email}</td>
//                   <td style={styles.td}>
//                     <span style={{
//                       padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700',
//                       backgroundColor: user.isAdmin ? THEME_LIGHT : 'rgba(5, 205, 153, 0.1)',
//                       color: user.isAdmin ? THEME_COLOR : '#05CD99'
//                     }}>
//                       {user.isAdmin ? 'ADMIN' : 'CUSTOMER'}
//                     </span>
//                   </td>
//                   <td style={{...styles.td, ...styles.lastTd, color: '#A3AED0'}}>{new Date(user.createdAt).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ===========================================================================
//    CHATS COMPONENT 
//    =========================================================================== */
// function ChatsList({ searchTerm }) {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChats = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/chats", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setChats(res.data || []);
//         setLoading(false);
//       } catch (err) { setLoading(false); }
//     };
//     fetchChats();
//   }, [token]);

//   const deleteChat = async (id) => {
//     if(!window.confirm("Delete?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/chats/${id}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//       setChats(prev => prev.filter(c => c._id !== id));
//       if(selectedChat && selectedChat._id === id) setSelectedChat(null);
//     } catch (err) { alert("Error"); }
//   };

//   const filteredChats = chats.filter(chat => {
//      const user = chat.user || "";
//      const msg = chat.message || "";
//      const term = searchTerm.toLowerCase();
//      return user.toLowerCase().includes(term) || msg.toLowerCase().includes(term);
//   });

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div style={{...styles.card, animation: "slideUp 0.6s ease-out"}}>
//       <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Support Inbox</h3>
//       <table style={styles.table}>
//         <thead>
//           <tr>{['User', 'Role', 'Message', 'Date', 'Actions'].map((h,i) => <th key={i} style={styles.th}>{h}</th>)}</tr>
//         </thead>
//         <tbody>
//           {filteredChats.map(chat => (
//             <tr key={chat._id} style={styles.row} className="table-row">
//               <td style={{...styles.td, ...styles.firstTd}}>{chat.user}</td>
//               <td style={styles.td}><span style={{fontSize:'12px', color: '#A3AED0', background: '#FDF2F2', padding: '4px 8px', borderRadius:'4px'}}>{chat.role}</span></td>
//               <td style={{...styles.td, maxWidth: '300px', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', color:'#A3AED0'}}>{chat.message}</td>
//               <td style={styles.td}>{new Date(chat.createdAt).toLocaleDateString()}</td>
//               <td style={{...styles.td, ...styles.lastTd, display: 'flex', gap: '10px'}}>
//                 <button onClick={() => setSelectedChat(chat)} style={{...styles.actionBtn, background: '#FDF2F2', color: THEME_COLOR}}>
//                   <Eye size={16} />
//                 </button>
//                 <button onClick={() => deleteChat(chat._id)} style={{...styles.actionBtn, background: '#FFF5F5', color: '#EE5D50'}}>
//                   <Trash2 size={16} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedChat && (
//         <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
//             <div style={{backgroundColor: 'white', width: '500px', borderRadius: '20px', padding: '24px', animation: 'fadeIn 0.3s'}}>
//                 <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px'}}>
//                     <h3 style={{margin: 0, color: THEME_TEXT}}>Message from {selectedChat.user}</h3>
//                     <button onClick={() => setSelectedChat(null)} style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px'}}>&times;</button>
//                 </div>
//                 <div style={{background: '#FDF2F2', padding: '15px', borderRadius: '12px', marginBottom: '20px'}}>
//                     <p style={{margin: 0, color: '#555', lineHeight: '1.6'}}>{selectedChat.message}</p>
//                 </div>
//                 <div style={{textAlign: 'right', color: '#A3AED0', fontSize: '12px'}}>
//                     Sent: {new Date(selectedChat.createdAt).toLocaleString()}
//                 </div>
//             </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ===========================================================================
//    BLOGS COMPONENT (UPDATED: With Add/Edit Popup)
//    =========================================================================== */
// function BlogsList({ searchTerm }) {
//   const [blogs, setBlogs] = useState([]);
  
//   // --- MODAL STATE ---
//   const [showModal, setShowModal] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentId, setCurrentId] = useState(null);

//   // --- FORM STATE ---
//   const [formTitle, setFormTitle] = useState("");
//   const [formSummary, setFormSummary] = useState("");
//   const [formContent, setFormContent] = useState("");
//   const [formImage, setFormImage] = useState("");

//   // --- FETCH BLOGS ---
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/blogs");
//       setBlogs(res.data || []);
//     } catch (e) {
//       console.error("Error fetching blogs", e);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // --- HANDLERS ---

//   // 1. Delete Blog
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this blog?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/blogs/${id}`);
//         setBlogs((prev) => prev.filter((b) => b._id !== id));
//       } catch (e) {
//         alert("Failed to delete");
//       }
//     }
//   };

//   // 2. Open Create Modal
//   const openCreateModal = () => {
//     setIsEditing(false);
//     setCurrentId(null);
//     setFormTitle("");
//     setFormSummary("");
//     setFormContent("");
//     setFormImage("");
//     setShowModal(true);
//   };

//   // 3. Open Edit Modal
//   const openEditModal = (blog) => {
//     setIsEditing(true);
//     setCurrentId(blog._id);
//     setFormTitle(blog.title);
//     setFormSummary(blog.summary);
//     setFormContent(blog.content);
//     setFormImage(blog.image);
//     setShowModal(true);
//   };

//   // 4. Submit Form (Create or Update)
//   const handleSubmit = async () => {
//     if (!formTitle || !formContent) return alert("Title and Content are required");

//     const payload = {
//       title: formTitle,
//       summary: formSummary,
//       content: formContent,
//       image: formImage,
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const config = { headers: token ? { Authorization: `Bearer ${token}` } : {} };

//       if (isEditing) {
//         // UPDATE
//         await axios.put(`http://localhost:5000/api/blogs/${currentId}`, payload, config);
//         alert("Blog Updated!");
//       } else {
//         // CREATE
//         await axios.post("http://localhost:5000/api/blogs", payload, config);
//         alert("Blog Created!");
//       }
//       setShowModal(false);
//       fetchBlogs(); // Refresh List
//     } catch (e) {
//       console.error(e);
//       alert("Operation failed");
//     }
//   };

//   // Search Filter
//   const filteredBlogs = blogs.filter((blog) => {
//     const title = blog.title || "";
//     return title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div style={{ animation: "fadeIn 0.7s ease-out" }}>
      
//       {/* Header with Create Button */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
//         <h3 style={{ fontSize: "24px", fontWeight: "800", margin: 0, color: THEME_TEXT }}>
//           Blog Management
//         </h3>
//         <button
//           onClick={openCreateModal}
//           className="hover-lift"
//           style={{
//             backgroundColor: THEME_COLOR,
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "12px",
//             fontWeight: "bold",
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             cursor: "pointer",
//             boxShadow: "0 4px 12px rgba(214, 143, 143, 0.3)"
//           }}
//         >
//           <Plus size={18} /> Add New Blog
//         </button>
//       </div>

//       {/* Blog Grid */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
//         {filteredBlogs.map((blog) => (
//           <div
//             key={blog._id}
//             style={{ ...styles.card, padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}
//             className="hover-lift"
//           >
//             <div style={{ height: "160px", backgroundColor: "#E0E5F2", position: "relative" }}>
//               {blog.image ? (
//                 <img src={blog.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//               ) : (
//                 <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'#999'}}>No Image</div>
//               )}
//               <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
//                 <button
//                   onClick={() => openEditModal(blog)}
//                   style={{ width: "32px", height: "32px", borderRadius: "50%", background: "white", border: "none", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: THEME_COLOR }}
//                 >
//                   <Edit size={14} />
//                 </button>
//                 <button
//                   onClick={() => handleDelete(blog._id)}
//                   style={{ width: "32px", height: "32px", borderRadius: "50%", background: "white", border: "none", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EE5D50" }}
//                 >
//                   <Trash2 size={14} />
//                 </button>
//               </div>
//             </div>
//             <div style={{ padding: "24px", flex: 1 }}>
//               <p style={{ fontSize: "12px", color: "#05CD99", fontWeight: "700", textTransform: "uppercase", margin: "0 0 8px 0" }}>
//                 {new Date(blog.createdAt).toLocaleDateString()}
//               </p>
//               <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", lineHeight: "1.4" }}>{blog.title}</h4>
//               <p style={{ color: "#A3AED0", fontSize: "14px", lineHeight: "1.6", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
//                 {blog.summary}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* === UNIFIED MODAL (POPUP) === */}
//       {showModal && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.5)",
//             backdropFilter: "blur(5px)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               ...styles.card,
//               width: "600px",
//               padding: "30px",
//               maxHeight: "90vh",
//               overflowY: "auto",
//               animation: "fadeIn 0.3s",
//             }}
//           >
//             {/* Header */}
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//               <h2 style={{ margin: 0, color: THEME_TEXT }}>{isEditing ? "Edit Blog" : "Create New Blog"}</h2>
//               <button onClick={() => setShowModal(false)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
//                 <X size={24} color="#A3AED0" />
//               </button>
//             </div>

//             {/* Form Fields */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//               <div>
//                 <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>TITLE</label>
//                 <input value={formTitle} onChange={(e) => setFormTitle(e.target.value)} style={styles.input} placeholder="Enter catchy title..." />
//               </div>

//               <div>
//                 <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>SUMMARY</label>
//                 <input value={formSummary} onChange={(e) => setFormSummary(e.target.value)} style={styles.input} placeholder="Short description..." />
//               </div>

//               <div>
//                 <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>IMAGE URL</label>
//                 <input value={formImage} onChange={(e) => setFormImage(e.target.value)} style={styles.input} placeholder="https://..." />
//               </div>

//               <div>
//                 <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>CONTENT</label>
//                 <textarea 
//                   value={formContent} 
//                   onChange={(e) => setFormContent(e.target.value)} 
//                   style={{ ...styles.input, borderRadius: "15px", minHeight: "150px", fontFamily: 'inherit' }} 
//                   placeholder="Write your story here..." 
//                 />
//               </div>

//               {/* Buttons */}
//               <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "10px" }}>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   style={{
//                     padding: "12px 24px",
//                     borderRadius: "12px",
//                     border: "none",
//                     background: "#FDF2F2",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                     color: THEME_TEXT
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   style={{
//                     padding: "12px 24px",
//                     borderRadius: "12px",
//                     border: "none",
//                     background: THEME_COLOR,
//                     color: "white",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                     boxShadow: `0 4px 12px rgba(214, 143, 143, 0.4)`
//                   }}
//                 >
//                   {isEditing ? "Update Blog" : "Publish Blog"}
//                 </button>
//               </div>
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
//   const [searchTerm, setSearchTerm] = useState("");
//   const [dashboardData, setDashboardData] = useState(null);
//   const [productsCount, setProductsCount] = useState(0);
//   const [ordersCount, setOrdersCount] = useState(0);

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (role !== "admin") { alert("Admins only!"); window.location.href = "/login"; }
//   }, [role]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dashRes = await axios.get("http://localhost:5000/admin/dashboard", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setDashboardData(dashRes.data || { monthlyData: [] });
//         const prodRes = await axios.get("http://localhost:5000/products", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setProductsCount(Array.isArray(prodRes.data) ? prodRes.data.length : 0);
//         const orderRes = await axios.get("http://localhost:5000/orders", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
//         setOrdersCount(Array.isArray(orderRes.data) ? orderRes.data.length : 0);
//       } catch (err) { console.error(err); }
//     };
//     fetchData();
//   }, [token]);

//   const NavItem = ({ page, icon: Icon, label, count }) => {
//     const isActive = activePage === page;
//     return (
//       <li
//         onClick={() => {
//             setActivePage(page);
//             setSearchTerm(""); // Reset search
//         }}
//         style={styles.navItem(isActive)}
//         className="hover-scale"
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <Icon size={20} />
//           {!sidebarCollapsed && <span>{label}</span>}
//         </div>
//         {!sidebarCollapsed && count > 0 && (
//           <span style={{ 
//             marginLeft: 'auto', 
//             background: isActive ? 'rgba(255,255,255,0.2)' : '#FDF2F2', 
//             color: isActive ? '#ffffff' : THEME_TEXT, 
//             padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '800' 
//           }}>
//             {count}
//           </span>
//         )}
//       </li>
//     );
//   };

//   return (
//     <>
//       <StylesInjection />
//       <Navbar />
//       <div style={{...styles.container, paddingTop: '64px'}}>
        
//         {/* SIDEBAR */}
//         <aside style={{
//             ...styles.sidebar, 
//             width: sidebarCollapsed ? "80px" : "280px",
//             padding: "20px"
//         }}>
//           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px'}}>
//             {!sidebarCollapsed && (
//                 <h2 style={{margin: 0, fontSize: '24px', fontWeight: '800', color: THEME_TEXT, textTransform: 'uppercase'}}>
//                     Admin<span style={{color: THEME_COLOR}}>Panel.</span>
//                 </h2>
//             )}
//             <Menu size={24} style={{color: '#A3AED0', cursor: 'pointer'}} onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
//           </div>

//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             <NavItem page="dashboard" icon={BarChart2} label="Dashboard" />
//             <NavItem page="list" icon={List} label="Products" count={productsCount} />
//             <NavItem page="orders" icon={ShoppingCart} label="Orders" count={ordersCount} />
//             <NavItem page="users" icon={Users} label="Customers" />
//             <NavItem page="chats" icon={MessageSquare} label="Chats" />
//             <NavItem page="blogs" icon={Edit} label="Blogs" />
//             <NavItem page="settings" icon={Settings} label="Settings" />
//           </ul>
//         </aside>

//         {/* MAIN */}
//         <main style={{
//             ...styles.main, 
//             marginLeft: sidebarCollapsed ? "100px" : "310px"
//         }}>
//           {/* Header */}
//           <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', animation: 'fadeIn 0.8s'}}>
//              <div>
//                 <p style={{margin: 0, fontSize: '14px', color: '#707EAE', fontWeight: '500'}}>Pages / {activePage.charAt(0).toUpperCase() + activePage.slice(1)}</p>
//                 <h1 style={{margin: '5px 0 0', fontSize: '34px', fontWeight: '700', color: THEME_TEXT}}>Main Dashboard</h1>
//              </div>
//              <div style={{...styles.card, padding: '10px', borderRadius: '30px', marginBottom: 0, display: 'flex', alignItems: 'center', gap: '15px'}}>
//                  {/* SEARCH */}
//                  <div style={{background: '#FDF2F2', padding: '10px 16px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', width: '250px'}}>
//                     <Search size={16} color={THEME_COLOR} />
//                     <input 
//                         placeholder="Search..." 
//                         style={{border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', width: '100%', color: THEME_TEXT}} 
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                  </div>
//                  <Bell size={20} color="#A3AED0" style={{cursor: 'pointer'}} />
//                  <div style={{width: '40px', height: '40px', borderRadius: '50%', background: THEME_COLOR, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>AP</div>
//              </div>
//           </div>

//           {/* DASHBOARD CONTENT */}
//           {activePage === "dashboard" && dashboardData && (
//             <div style={{animation: "fadeIn 0.5s ease-out"}}>
//               {/* Stats */}
//               <div style={styles.statGrid}>
//                 {[
//                     { title: 'Earnings', val: `₹${dashboardData.totalEarnings}`, icon: DollarSign, color: THEME_COLOR },
//                     { title: 'Total Sales', val: dashboardData.totalSales, icon: ShoppingCart, color: '#05CD99' },
//                     { title: 'Activity', val: dashboardData.totalViews, icon: Activity, color: '#FFB547' },
//                 ].map((item, i) => (
//                     <div key={i} style={styles.card} className="hover-lift">
//                         <div style={{display: 'flex', alignItems: 'center'}}>
//                             <div style={{...styles.statIcon, backgroundColor: `${item.color}20`, color: item.color}}>
//                                 <item.icon size={28} />
//                             </div>
//                             <div>
//                                 <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {item.title} </p>
//                                 <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {item.val} </h3>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//               </div>

//               {/* Charts */}
//               <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px'}}>
//                 <div style={{...styles.card, minHeight: '400px'}}>
//                     <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
//                         <h3 style={{margin: 0, fontSize: '22px', fontWeight: '700', color: THEME_TEXT}}>Revenue Stream</h3>
//                         <div style={{background: '#FDF2F2', padding: '8px', borderRadius: '10px'}}><BarChart2 size={20} color={THEME_COLOR} /></div>
//                     </div>
//                     <ResponsiveContainer width="100%" height={300}>
//                         <AreaChart data={dashboardData.monthlyData || []}>
//                             <defs>
//                                 <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor={THEME_COLOR} stopOpacity={0.3}/>
//                                     <stop offset="95%" stopColor={THEME_COLOR} stopOpacity={0}/>
//                                 </linearGradient>
//                             </defs>
//                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E5F2" />
//                             <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} dy={10} />
//                             <YAxis axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} />
//                             <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
//                             <Area type="monotone" dataKey="sales" stroke={THEME_COLOR} strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 </div>
//                 <div style={{...styles.card, background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
//                     <div style={{width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
//                         <TrendingUp size={40} color="white" />
//                     </div>
//                     <h3 style={{margin: '0 0 10px 0', fontSize: '22px'}}>Your Growth</h3>
//                     <p style={{margin: 0, opacity: 0.8, fontSize: '14px'}}>Sales are up 35% this month.</p>
//                     <button style={{marginTop: '20px', padding: '12px 24px', background: 'white', color: THEME_COLOR, border: 'none', borderRadius: '20px', fontWeight: '700', cursor: 'pointer'}}>View Report</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* CONTENT SWITCHER */}
//           {activePage === "list" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><ProductList /></div>}
//           {activePage === "orders" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><OrdersListWithBoundary /></div>}
          
//           {activePage === "users" && <UsersList searchTerm={searchTerm} />}
//           {activePage === "chats" && <ChatsList searchTerm={searchTerm} />}
          
//           {/* UPDATED BLOGS LIST */}
//           {activePage === "blogs" && <BlogsList searchTerm={searchTerm} />}

//           {activePage === "settings" && (
//              <div style={{...styles.card, minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//                 <Settings size={64} color="#E0E5F2" />
//                 <h3 style={{color: THEME_TEXT, marginTop: '20px'}}>Settings Configuration</h3>
//              </div>
//           )}

//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AdminDashboard;


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
  MessageSquare,
  Bell,
  Search,
  TrendingUp,
  Activity,
  Plus, 
  X,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart
} from "recharts";

/* ===========================================================================
   🎨 2025 NEO-SAAS STYLES
   =========================================================================== */
const THEME_COLOR = "rgb(214, 143, 143)"; // Rose Pink
const THEME_LIGHT = "rgba(214, 143, 143, 0.15)"; // Light Rose
const THEME_TEXT = "#2B3674"; // Deep Navy

const styles = {
  container: {
    backgroundColor: "#FDF2F2",
    minHeight: "100vh",
    fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
    color: THEME_TEXT,
    display: "flex",
  },
  sidebar: {
    backgroundColor: "#ffffff",
    height: "100vh",
    position: "fixed",
    zIndex: 50,
    transition: "0.3s ease",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    boxShadow: "14px 17px 40px 4px rgba(214, 143, 143, 0.08)",
    padding: "25px",
  },
  navItem: (isActive) => ({
    display: "flex",
    alignItems: "center",
    padding: "13px 20px",
    marginBottom: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    background: isActive 
      ? `linear-gradient(90deg, ${THEME_COLOR} 0%, #e8b4b4 100%)` 
      : "transparent",
    color: isActive ? "#ffffff" : "#A3AED0",
    fontWeight: isActive ? "700" : "500",
    boxShadow: isActive ? `0px 10px 20px -5px rgba(214, 143, 143, 0.4)` : "none",
    position: "relative",
  }),
  main: {
    flex: 1,
    padding: "30px",
    transition: "margin-left 0.3s ease",
    maxWidth: "100%",
    overflowX: "hidden",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0px 20px 50px 0px rgba(214, 143, 143, 0.05)", 
    border: "none",
    marginBottom: "24px",
    position: "relative",
    overflow: "hidden",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginBottom: "24px",
  },
  statIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "18px",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 15px", 
  },
  th: {
    textAlign: "left",
    color: "#A3AED0",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    padding: "0 20px",
    border: "none",
  },
  row: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.02)",
    transition: "transform 0.2s ease",
    cursor: "default",
  },
  td: {
    padding: "20px",
    fontSize: "14px",
    fontWeight: "700",
    color: THEME_TEXT,
    borderTop: "1px solid #FDF2F2",
    borderBottom: "1px solid #FDF2F2",
  },
  firstTd: {
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderLeft: "1px solid #FDF2F2",
  },
  lastTd: {
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    borderRight: "1px solid #FDF2F2",
  },
  input: {
    backgroundColor: "#FDF2F2",
    border: "none",
    borderRadius: "15px",
    padding: "12px 20px",
    color: THEME_TEXT,
    fontSize: "14px",
    outline: "none",
    width: "100%",
    fontWeight: "500",
  },
  actionBtn: {
    border: "none",
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.2s",
  },
  // --- PAGINATION STYLES ---
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: '10px',
  },
  pageBtn: (isActive) => ({
    width: '35px',
    height: '35px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: isActive ? THEME_COLOR : '#FFF',
    color: isActive ? '#FFF' : THEME_TEXT,
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: isActive ? '0 4px 10px rgba(214, 143, 143, 0.4)' : '0 2px 5px rgba(0,0,0,0.05)',
    transition: '0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
};

const StylesInjection = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
    body { background-color: #FDF2F2; margin: 0; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .hover-scale:hover { transform: scale(1.02); }
    .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(214, 143, 143, 0.2) !important; }
    .table-row:hover { transform: scale(1.01); background-color: #ffffff; box-shadow: 0px 10px 30px rgba(0,0,0,0.05) !important; z-index: 2; position: relative; }
    .page-btn:hover { background-color: #FDF2F2; color: ${THEME_COLOR}; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgb(214, 143, 143); border-radius: 10px; }
  `}</style>
);

/* ===========================================================================
   🧩 PAGINATION COMPONENT
   =========================================================================== */
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <div style={styles.paginationContainer}>
      <button 
        onClick={() => paginate(currentPage - 1)} 
        disabled={currentPage === 1}
        style={{...styles.pageBtn(false), opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'default' : 'pointer'}}
      >
        <ChevronLeft size={18} />
      </button>
      
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          style={styles.pageBtn(currentPage === number)}
          className={currentPage !== number ? "page-btn" : ""}
        >
          {number}
        </button>
      ))}

      <button 
        onClick={() => paginate(currentPage + 1)} 
        disabled={currentPage === totalPages}
        style={{...styles.pageBtn(false), opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'default' : 'pointer'}}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

/* ===========================================================================
   USERS LIST COMPONENT (WITH PAGINATION)
   =========================================================================== */
function UsersList({ searchTerm }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Show 5 users per page

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/users", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setUsers(res.data || []);
        setLoading(false);
      } catch (err) { setLoading(false); }
    };
    fetchUsers();
  }, [token]);

  // Reset to page 1 when searching
  useEffect(() => { setCurrentPage(1); }, [searchTerm]);

  const filteredUsers = users.filter(user => {
    const name = user.name || "";
    const email = user.email || "";
    const term = searchTerm.toLowerCase();
    return name.toLowerCase().includes(term) || email.toLowerCase().includes(term);
  });

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div style={{padding: '50px', textAlign: 'center', color: THEME_COLOR}}>Loading...</div>;

  return (
    <div style={{ animation: "slideUp 0.5s ease-out" }}>
      <div style={styles.statGrid}>
        {[
          { label: 'Total Users', val: users.length, color: THEME_COLOR, bg: '#FDF2F2' },
          { label: 'Admins', val: users.filter(u => u.isAdmin).length, color: '#05CD99', bg: 'rgba(5, 205, 153, 0.1)' },
        ].map((s, i) => (
          <div key={i} style={{...styles.card, display: 'flex', alignItems: 'center', padding: '20px'}} className="hover-lift">
             <div style={{...styles.statIcon, backgroundColor: s.bg, color: s.color}}>
                <Users size={24} />
             </div>
             <div>
                <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {s.label} </p>
                <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {s.val} </h3>
             </div>
          </div>
        ))}
      </div>

      <div style={styles.card}>
        <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Registered Users ({filteredUsers.length})</h3>
        <div style={{overflowX: 'auto'}}>
          <table style={styles.table}>
            <thead>
              <tr>
                {['User Info', 'Email', 'Role', 'Join Date'].map((h,i) => <th key={i} style={styles.th}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user._id} style={styles.row} className="table-row">
                  <td style={{...styles.td, ...styles.firstTd}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <div style={{width: '40px', height: '40px', borderRadius: '50%', background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td style={{...styles.td, color: '#A3AED0'}}>{user.email}</td>
                  <td style={styles.td}>
                    <span style={{
                      padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700',
                      backgroundColor: user.isAdmin ? THEME_LIGHT : 'rgba(5, 205, 153, 0.1)',
                      color: user.isAdmin ? THEME_COLOR : '#05CD99'
                    }}>
                      {user.isAdmin ? 'ADMIN' : 'CUSTOMER'}
                    </span>
                  </td>
                  <td style={{...styles.td, ...styles.lastTd, color: '#A3AED0'}}>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION CONTROLS */}
        <Pagination 
            itemsPerPage={itemsPerPage} 
            totalItems={filteredUsers.length} 
            paginate={paginate} 
            currentPage={currentPage} 
        />
      </div>
    </div>
  );
}

/* ===========================================================================
   CHATS COMPONENT (WITH PAGINATION)
   =========================================================================== */
function ChatsList({ searchTerm }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/chats", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setChats(res.data || []);
        setLoading(false);
      } catch (err) { setLoading(false); }
    };
    fetchChats();
  }, [token]);

  // Reset pagination on search
  useEffect(() => { setCurrentPage(1); }, [searchTerm]);

  const deleteChat = async (id) => {
    if(!window.confirm("Delete?")) return;
    try {
      await axios.delete(`https://finalproject-backend-7rqa.onrender.com/chats/${id}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
      setChats(prev => prev.filter(c => c._id !== id));
      if(selectedChat && selectedChat._id === id) setSelectedChat(null);
    } catch (err) { alert("Error"); }
  };

  const filteredChats = chats.filter(chat => {
     const user = chat.user || "";
     const msg = chat.message || "";
     const term = searchTerm.toLowerCase();
     return user.toLowerCase().includes(term) || msg.toLowerCase().includes(term);
  });

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentChats = filteredChats.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{...styles.card, animation: "slideUp 0.6s ease-out"}}>
      <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Support Inbox ({filteredChats.length})</h3>
      <table style={styles.table}>
        <thead>
          <tr>{['User', 'Role', 'Message', 'Date', 'Actions'].map((h,i) => <th key={i} style={styles.th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {currentChats.map(chat => (
            <tr key={chat._id} style={styles.row} className="table-row">
              <td style={{...styles.td, ...styles.firstTd}}>{chat.user}</td>
              <td style={styles.td}><span style={{fontSize:'12px', color: '#A3AED0', background: '#FDF2F2', padding: '4px 8px', borderRadius:'4px'}}>{chat.role}</span></td>
              <td style={{...styles.td, maxWidth: '300px', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', color:'#A3AED0'}}>{chat.message}</td>
              <td style={styles.td}>{new Date(chat.createdAt).toLocaleDateString()}</td>
              <td style={{...styles.td, ...styles.lastTd, display: 'flex', gap: '10px'}}>
                <button onClick={() => setSelectedChat(chat)} style={{...styles.actionBtn, background: '#FDF2F2', color: THEME_COLOR}}>
                  <Eye size={16} />
                </button>
                <button onClick={() => deleteChat(chat._id)} style={{...styles.actionBtn, background: '#FFF5F5', color: '#EE5D50'}}>
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={filteredChats.length} 
        paginate={paginate} 
        currentPage={currentPage} 
      />

      {selectedChat && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
            <div style={{backgroundColor: 'white', width: '500px', borderRadius: '20px', padding: '24px', animation: 'fadeIn 0.3s'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px'}}>
                    <h3 style={{margin: 0, color: THEME_TEXT}}>Message from {selectedChat.user}</h3>
                    <button onClick={() => setSelectedChat(null)} style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px'}}>&times;</button>
                </div>
                <div style={{background: '#FDF2F2', padding: '15px', borderRadius: '12px', marginBottom: '20px'}}>
                    <p style={{margin: 0, color: '#555', lineHeight: '1.6'}}>{selectedChat.message}</p>
                </div>
                <div style={{textAlign: 'right', color: '#A3AED0', fontSize: '12px'}}>
                    Sent: {new Date(selectedChat.createdAt).toLocaleString()}
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

/* ===========================================================================
   BLOGS COMPONENT (WITH PAGINATION)
   =========================================================================== */
function BlogsList({ searchTerm }) {
  const [blogs, setBlogs] = useState([]);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // 6 blogs per page (grid layout)

  // --- MODAL STATE ---
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // --- FORM STATE ---
  const [formTitle, setFormTitle] = useState("");
  const [formSummary, setFormSummary] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formImage, setFormImage] = useState("");

  // --- FETCH BLOGS ---
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/api/blogs");
      setBlogs(res.data || []);
    } catch (e) {
      console.error("Error fetching blogs", e);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);
  useEffect(() => { setCurrentPage(1); }, [searchTerm]); // Reset page on search

  // Handlers
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`https://finalproject-backend-7rqa.onrender.com/api/blogs/${id}`);
        setBlogs((prev) => prev.filter((b) => b._id !== id));
      } catch (e) { alert("Failed to delete"); }
    }
  };

  const openCreateModal = () => {
    setIsEditing(false); setCurrentId(null); setFormTitle(""); setFormSummary(""); setFormContent(""); setFormImage(""); setShowModal(true);
  };

  const openEditModal = (blog) => {
    setIsEditing(true); setCurrentId(blog._id); setFormTitle(blog.title); setFormSummary(blog.summary); setFormContent(blog.content); setFormImage(blog.image); setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!formTitle || !formContent) return alert("Title and Content are required");
    const payload = { title: formTitle, summary: formSummary, content: formContent, image: formImage };
    try {
      const token = localStorage.getItem("token");
      const config = { headers: token ? { Authorization: `Bearer ${token}` } : {} };
      if (isEditing) {
        await axios.put(`https://finalproject-backend-7rqa.onrender.com/api/blogs/${currentId}`, payload, config);
        alert("Blog Updated!");
      } else {
        await axios.post("https://finalproject-backend-7rqa.onrender.com/api/blogs", payload, config);
        alert("Blog Created!");
      }
      setShowModal(false); fetchBlogs();
    } catch (e) { console.error(e); alert("Operation failed"); }
  };

  // Filter and Paginate
  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.title || "";
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ animation: "fadeIn 0.7s ease-out" }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
        <h3 style={{ fontSize: "24px", fontWeight: "800", margin: 0, color: THEME_TEXT }}>
          Blog Management ({filteredBlogs.length})
        </h3>
        <button
          onClick={openCreateModal}
          className="hover-lift"
          style={{
            backgroundColor: THEME_COLOR, color: "white", border: "none", padding: "10px 20px", borderRadius: "12px",
            fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", boxShadow: "0 4px 12px rgba(214, 143, 143, 0.3)"
          }}
        >
          <Plus size={18} /> Add New Blog
        </button>
      </div>

      {/* Blog Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
        {currentBlogs.map((blog) => (
          <div
            key={blog._id}
            style={{ ...styles.card, padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}
            className="hover-lift"
          >
            <div style={{ height: "160px", backgroundColor: "#E0E5F2", position: "relative" }}>
              {blog.image ? (
                <img src={blog.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'#999'}}>No Image</div>
              )}
              <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
                <button onClick={() => openEditModal(blog)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "white", border: "none", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: THEME_COLOR }}>
                  <Edit size={14} />
                </button>
                <button onClick={() => handleDelete(blog._id)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "white", border: "none", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EE5D50" }}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <div style={{ padding: "24px", flex: 1 }}>
              <p style={{ fontSize: "12px", color: "#05CD99", fontWeight: "700", textTransform: "uppercase", margin: "0 0 8px 0" }}>
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", lineHeight: "1.4" }}>{blog.title}</h4>
              <p style={{ color: "#A3AED0", fontSize: "14px", lineHeight: "1.6", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {blog.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={filteredBlogs.length} 
        paginate={paginate} 
        currentPage={currentPage} 
      />

      {/* === UNIFIED MODAL (POPUP) === */}
      {showModal && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(5px)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
          }}
        >
          <div style={{ ...styles.card, width: "600px", padding: "30px", maxHeight: "90vh", overflowY: "auto", animation: "fadeIn 0.3s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ margin: 0, color: THEME_TEXT }}>{isEditing ? "Edit Blog" : "Create New Blog"}</h2>
              <button onClick={() => setShowModal(false)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                <X size={24} color="#A3AED0" />
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>TITLE</label>
                <input value={formTitle} onChange={(e) => setFormTitle(e.target.value)} style={styles.input} placeholder="Enter catchy title..." />
              </div>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>SUMMARY</label>
                <input value={formSummary} onChange={(e) => setFormSummary(e.target.value)} style={styles.input} placeholder="Short description..." />
              </div>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>IMAGE URL</label>
                <input value={formImage} onChange={(e) => setFormImage(e.target.value)} style={styles.input} placeholder="https://..." />
              </div>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>CONTENT</label>
                <textarea 
                  value={formContent} onChange={(e) => setFormContent(e.target.value)} 
                  style={{ ...styles.input, borderRadius: "15px", minHeight: "150px", fontFamily: 'inherit' }} 
                  placeholder="Write your story here..." 
                />
              </div>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "10px" }}>
                <button onClick={() => setShowModal(false)} style={{ padding: "12px 24px", borderRadius: "12px", border: "none", background: "#FDF2F2", fontWeight: "600", cursor: "pointer", color: THEME_TEXT }}>Cancel</button>
                <button onClick={handleSubmit} style={{ padding: "12px 24px", borderRadius: "12px", border: "none", background: THEME_COLOR, color: "white", fontWeight: "600", cursor: "pointer", boxShadow: `0 4px 12px rgba(214, 143, 143, 0.4)` }}>{isEditing ? "Update Blog" : "Publish Blog"}</button>
              </div>
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
  const [searchTerm, setSearchTerm] = useState("");
  const [dashboardData, setDashboardData] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (role !== "admin") { alert("Admins only!"); window.location.href = "/login"; }
  }, [role]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashRes = await axios.get("https://finalproject-backend-7rqa.onrender.com/admin/dashboard", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setDashboardData(dashRes.data || { monthlyData: [] });
        const prodRes = await axios.get("https://finalproject-backend-7rqa.onrender.com/products", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setProductsCount(Array.isArray(prodRes.data) ? prodRes.data.length : 0);
        const orderRes = await axios.get("https://finalproject-backend-7rqa.onrender.com/orders", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setOrdersCount(Array.isArray(orderRes.data) ? orderRes.data.length : 0);
      } catch (err) { console.error(err); }
    };
    fetchData();
  }, [token]);

  const NavItem = ({ page, icon: Icon, label, count }) => {
    const isActive = activePage === page;
    return (
      <li
        onClick={() => {
            setActivePage(page);
            setSearchTerm(""); // Reset search
        }}
        style={styles.navItem(isActive)}
        className="hover-scale"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Icon size={20} />
          {!sidebarCollapsed && <span>{label}</span>}
        </div>
        {!sidebarCollapsed && count > 0 && (
          <span style={{ 
            marginLeft: 'auto', 
            background: isActive ? 'rgba(255,255,255,0.2)' : '#FDF2F2', 
            color: isActive ? '#ffffff' : THEME_TEXT, 
            padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '800' 
          }}>
            {count}
          </span>
        )}
      </li>
    );
  };

  return (
    <>
      <StylesInjection />
      <Navbar />
      <div style={{...styles.container, paddingTop: '64px'}}>
        
        {/* SIDEBAR */}
        <aside style={{
            ...styles.sidebar, 
            width: sidebarCollapsed ? "80px" : "280px",
            padding: "20px"
        }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px'}}>
            {!sidebarCollapsed && (
                <h2 style={{margin: 0, fontSize: '24px', fontWeight: '800', color: THEME_TEXT, textTransform: 'uppercase'}}>
                    Admin<span style={{color: THEME_COLOR}}>Panel.</span>
                </h2>
            )}
            <Menu size={24} style={{color: '#A3AED0', cursor: 'pointer'}} onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NavItem page="dashboard" icon={BarChart2} label="Dashboard" />
            <NavItem page="list" icon={List} label="Products" count={productsCount} />
            <NavItem page="orders" icon={ShoppingCart} label="Orders" count={ordersCount} />
            <NavItem page="users" icon={Users} label="Customers" />
            <NavItem page="chats" icon={MessageSquare} label="Chats" />
            <NavItem page="blogs" icon={Edit} label="Blogs" />
            <NavItem page="settings" icon={Settings} label="Settings" />
          </ul>
        </aside>

        {/* MAIN */}
        <main style={{
            ...styles.main, 
            marginLeft: sidebarCollapsed ? "100px" : "310px"
        }}>
          {/* Header */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', animation: 'fadeIn 0.8s'}}>
             <div>
                <p style={{margin: 0, fontSize: '14px', color: '#707EAE', fontWeight: '500'}}>Pages / {activePage.charAt(0).toUpperCase() + activePage.slice(1)}</p>
                <h1 style={{margin: '5px 0 0', fontSize: '34px', fontWeight: '700', color: THEME_TEXT}}>Main Dashboard</h1>
             </div>
             <div style={{...styles.card, padding: '10px', borderRadius: '30px', marginBottom: 0, display: 'flex', alignItems: 'center', gap: '15px'}}>
                 {/* SEARCH */}
                 <div style={{background: '#FDF2F2', padding: '10px 16px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', width: '250px'}}>
                    <Search size={16} color={THEME_COLOR} />
                    <input 
                        placeholder="Search..." 
                        style={{border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', width: '100%', color: THEME_TEXT}} 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <Bell size={20} color="#A3AED0" style={{cursor: 'pointer'}} />
                 <div style={{width: '40px', height: '40px', borderRadius: '50%', background: THEME_COLOR, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>AP</div>
             </div>
          </div>

          {/* DASHBOARD CONTENT */}
          {activePage === "dashboard" && dashboardData && (
            <div style={{animation: "fadeIn 0.5s ease-out"}}>
              {/* Stats */}
              <div style={styles.statGrid}>
                {[
                    { title: 'Earnings', val: `LKR${dashboardData.totalEarnings}`, icon: DollarSign, color: THEME_COLOR },
                    { title: 'Total Sales', val: dashboardData.totalSales, icon: ShoppingCart, color: '#05CD99' },
                    { title: 'Activity', val: dashboardData.totalViews, icon: Activity, color: '#FFB547' },
                ].map((item, i) => (
                    <div key={i} style={styles.card} className="hover-lift">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{...styles.statIcon, backgroundColor: `${item.color}20`, color: item.color}}>
                                <item.icon size={28} />
                            </div>
                            <div>
                                <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {item.title} </p>
                                <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {item.val} </h3>
                            </div>
                        </div>
                    </div>
                ))}
              </div>

              {/* Charts */}
              <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px'}}>
                <div style={{...styles.card, minHeight: '400px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
                        <h3 style={{margin: 0, fontSize: '22px', fontWeight: '700', color: THEME_TEXT}}>Revenue Stream</h3>
                        <div style={{background: '#FDF2F2', padding: '8px', borderRadius: '10px'}}><BarChart2 size={20} color={THEME_COLOR} /></div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={dashboardData.monthlyData || []}>
                            <defs>
                                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={THEME_COLOR} stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor={THEME_COLOR} stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E5F2" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} />
                            <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                            <Area type="monotone" dataKey="sales" stroke={THEME_COLOR} strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div style={{...styles.card, background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <div style={{width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <TrendingUp size={40} color="white" />
                    </div>
                    <h3 style={{margin: '0 0 10px 0', fontSize: '22px'}}>Your Growth</h3>
                    <p style={{margin: 0, opacity: 0.8, fontSize: '14px'}}>Sales are up 35% this month.</p>
                    <button style={{marginTop: '20px', padding: '12px 24px', background: 'white', color: THEME_COLOR, border: 'none', borderRadius: '20px', fontWeight: '700', cursor: 'pointer'}}>View Report</button>
                </div>
              </div>
            </div>
          )}

          {/* CONTENT SWITCHER */}
          {activePage === "list" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><ProductList /></div>}
          {activePage === "orders" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><OrdersListWithBoundary /></div>}
          
          {/* PASS SEARCH TERM TO SUB COMPONENTS */}
          {activePage === "users" && <UsersList searchTerm={searchTerm} />}
          {/* {activePage === "chats" && <ChatsList searchTerm={searchTerm} />} */}
          {activePage === "blogs" && <BlogsList searchTerm={searchTerm} />}

          {activePage === "settings" && (
             <div style={{...styles.card, minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Settings size={64} color="#E0E5F2" />
                <h3 style={{color: THEME_TEXT, marginTop: '20px'}}>Settings Configuration</h3>
             </div>
          )}

        </main>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;