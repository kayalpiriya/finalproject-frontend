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
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

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

  if (loading) return <p className="text-center mt-12 text-gray-500">Loading users...</p>;
  if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  const totalUsers = users.length;
  const totalAdmins = users.filter((u) => u.isAdmin).length;
  const totalNormal = totalUsers - totalAdmins;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
          <Users size={28} className="text-yellow-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-xl font-bold">{totalUsers}</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
          <Users size={28} className="text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Admins</p>
            <p className="text-xl font-bold">{totalAdmins}</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
          <Users size={28} className="text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Normal Users</p>
            <p className="text-xl font-bold">{totalNormal}</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
        <table className="min-w-full border-collapse">
          <thead className="bg-yellow-50 sticky top-0 text-gray-800">
            <tr>
              <th className="py-2 px-3 border-b">#</th>
              <th className="py-2 px-3 border-b">Name</th>
              <th className="py-2 px-3 border-b">Email</th>
              <th className="py-2 px-3 border-b">Role</th>
              <th className="py-2 px-3 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={user._id}
                className={`transition-all duration-300 ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-yellow-50 hover:shadow-lg`}
              >
                <td className="py-2 px-3 border-b">{idx + 1}</td>
                <td className="py-2 px-3 border-b">{user.name}</td>
                <td className="py-2 px-3 border-b">{user.email}</td>
                <td className="py-2 px-3 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      user.isAdmin ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {user.isAdmin ? "Admin" : "User"}
                  </span>
                </td>
                <td className="py-2 px-3 border-b">
                  {new Date(user.createdAt).toLocaleDateString()}
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
   CHATS LIST
   (self-contained so AdminDashboard import won't fail)
   =========================================================================== */
function ChatsList() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/chats", {
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
      await axios.delete(`http://localhost:5000/api/chats/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setChats((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete chat.");
    }
  };

  if (loading) return <p className="text-center mt-12 text-gray-500">Loading chats...</p>;
  if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">User & AI Chats</h2>
      <table className="min-w-full border-collapse">
        <thead className="bg-yellow-50 sticky top-0 text-gray-800">
          <tr>
            <th className="py-2 px-3 border-b">#</th>
            <th className="py-2 px-3 border-b">User</th>
            <th className="py-2 px-3 border-b">Role</th>
            <th className="py-2 px-3 border-b">Message</th>
            <th className="py-2 px-3 border-b">Created At</th>
            <th className="py-2 px-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {chats.map((chat, idx) => (
            <tr
              key={chat._id}
              className={`transition-all duration-300 ${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-yellow-50 hover:shadow-lg`}
            >
              <td className="py-2 px-3 border-b">{idx + 1}</td>
              <td className="py-2 px-3 border-b">{chat.user}</td>
              <td className="py-2 px-3 border-b">{chat.role}</td>
              <td className="py-2 px-3 border-b">{chat.message}</td>
              <td className="py-2 px-3 border-b">{new Date(chat.createdAt).toLocaleString()}</td>
              <td className="py-2 px-3 border-b">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteChat(chat._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ===========================================================================
   BLOGS LIST (Manage Blogs: title, summary, image, content, createdAt, edit, delete)
   =========================================================================== */
function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  const [editTitle, setEditTitle] = useState("");
  const [editSummary, setEditSummary] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editImage, setEditImage] = useState("");

  // fetch blogs
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

  // delete blog
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

  // open edit
  const openEditPopup = (blog) => {
    setEditBlog(blog);
    setEditTitle(blog.title || "");
    setEditSummary(blog.summary || "");
    setEditContent(blog.content || "");
    setEditImage(blog.image || "");
  };

  // update
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
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Blogs</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Summary</th>
              <th className="px-4 py-3 text-left">Content</th>
              <th className="px-4 py-3 text-left">Created</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b">
                <td className="px-4 py-3">
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="w-20 h-16 object-cover rounded" />
                  ) : (
                    <div className="w-20 h-16 bg-gray-100 flex items-center justify-center rounded text-xs text-gray-500">No Image</div>
                  )}
                </td>

                <td className="px-4 py-3 font-medium">{blog.title}</td>
                <td className="px-4 py-3 max-w-xs truncate">{blog.summary}</td>
                <td className="px-4 py-3 max-w-xs text-sm truncate">{blog.content}</td>
                <td className="px-4 py-3">{new Date(blog.createdAt).toLocaleDateString()}</td>

                <td className="px-4 py-3 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-2"
                    onClick={() => openEditPopup(blog)}
                  >
                    <Edit size={14} /> Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-2"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* EDIT POPUP */}
      {editBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[560px] max-w-full">
            <h2 className="text-xl font-bold mb-4">Edit Blog</h2>

            <div className="space-y-3">
              <input
                className="w-full border px-3 py-2 rounded"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Title"
              />
              <input
                className="w-full border px-3 py-2 rounded"
                value={editSummary}
                onChange={(e) => setEditSummary(e.target.value)}
                placeholder="Summary"
              />
              <input
                className="w-full border px-3 py-2 rounded"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
                placeholder="Image URL"
              />
              <textarea
                className="w-full border px-3 py-2 rounded h-32"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="Content"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setEditBlog(null)}>
                Cancel
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleUpdate}>
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

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100 pt-16">
        {/* Sidebar */}
        <aside
          className={`bg-gradient-to-b from-yellow-400 to-yellow-600 text-black transition-all duration-300 ${
            sidebarCollapsed ? "w-20" : "w-64"
          } shadow-lg min-h-screen`}
        >
          <div className="flex items-center justify-between p-4 border-b border-yellow-300">
            {!sidebarCollapsed && <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>}
            <Menu
              size={24}
              className="cursor-pointer hover:text-gray-200"
              onClick={() => setSidebarCollapsed((s) => !s)}
            />
          </div>

          <ul className="mt-4">
            <li
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
                activePage === "dashboard" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("dashboard")}
            >
              <BarChart2 size={20} />
              {!sidebarCollapsed && <span>Dashboard</span>}
            </li>

            <li
              className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
                activePage === "list" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("list")}
            >
              <div className="flex items-center gap-3">
                <List size={20} />
                {!sidebarCollapsed && <span>Product List</span>}
              </div>
              {!sidebarCollapsed && productsCount > 0 && (
                <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">{productsCount}</span>
              )}
            </li>

            <li
              className={`flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
                activePage === "orders" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("orders")}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart size={20} />
                {!sidebarCollapsed && <span>Orders List</span>}
              </div>
              {!sidebarCollapsed && ordersCount > 0 && (
                <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">{ordersCount}</span>
              )}
            </li>

            <li
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
                activePage === "users" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("users")}
            >
              <Users size={20} />
              {!sidebarCollapsed && <span>Users List</span>}
            </li>

            <li
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
                activePage === "chats" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("chats")}
            >
              <Users size={20} />
              {!sidebarCollapsed && <span>Chats</span>}
            </li>

            <li
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
                activePage === "blogs" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("blogs")}
            >
              <Edit size={20} />
              {!sidebarCollapsed && <span>Blogs</span>}
            </li>

            <li
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-yellow-500 rounded-lg mx-2 my-1 ${
                activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("settings")}
            >
              <Settings size={20} />
              {!sidebarCollapsed && <span>Settings</span>}
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activePage === "dashboard" && dashboardData && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
                  <DollarSign size={28} className="text-yellow-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Total Sales</p>
                    <p className="text-xl font-bold">{dashboardData.totalSales ?? 0}</p>
                  </div>
                </div>

                <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
                  <DollarSign size={28} className="text-green-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Earnings</p>
                    <p className="text-xl font-bold">₹{dashboardData.totalEarnings ?? 0}</p>
                  </div>
                </div>

                <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
                  <Eye size={28} className="text-blue-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Page Views</p>
                    <p className="text-xl font-bold">{dashboardData.totalViews ?? 0}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-lg font-bold text-yellow-700 mb-4">Monthly Stats</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData.monthlyData || []}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#facc15" />
                    <Bar dataKey="earnings" fill="#16a34a" />
                    <Bar dataKey="views" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {activePage === "list" && <ProductList />}
          {activePage === "orders" && <OrdersListWithBoundary />}
          {activePage === "users" && <UsersList />}
          {activePage === "chats" && <ChatsList />}
          {activePage === "blogs" && <BlogsList />}

          {activePage === "settings" && (
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-700 mb-4">Settings</h2>
              <p className="text-gray-600">Admin settings will go here.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;
