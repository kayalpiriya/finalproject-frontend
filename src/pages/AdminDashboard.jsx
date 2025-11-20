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

// export default AdminDashboard;   

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

// ===== USERS LIST COMPONENT =====
function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load users.");
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  if (loading)
    return <p className="text-center mt-12 text-gray-500">Loading users...</p>;
  if (error)
    return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  // Count admins and normal users
  const totalUsers = users.length;
  const totalAdmins = users.filter((u) => u.isAdmin).length;
  const totalNormal = totalUsers - totalAdmins;

  return (
    <div className="space-y-6">
      {/* ===== SUMMARY CARDS ===== */}
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

      {/* ===== USERS TABLE ===== */}
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
                      user.isAdmin
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-200 text-gray-700"
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

// ===== MAIN ADMIN DASHBOARD =====
function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  // Admin guard
  useEffect(() => {
    if (role !== "admin") {
      alert("Admins only!");
      window.location.href = "/login";
    }
  }, [role]);

  // Fetch dashboard + counts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashRes = await axios.get("http://localhost:5000/admin/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDashboardData(dashRes.data);

        const prodRes = await axios.get("http://localhost:5000/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProductsCount(prodRes.data.length);

        const orderRes = await axios.get("http://localhost:5000/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrdersCount(orderRes.data.length);
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
            {!sidebarCollapsed && (
              <h2 className="text-xl font-bold text-black">🍰 Admin Panel</h2>
            )}
            <Menu
              size={24}
              className="cursor-pointer hover:text-gray-200"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
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
                <span className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold">
                  {productsCount}
                </span>
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
                <span className="bg-white text-yellow-600 px-2 py-0.5 rounded-full text-xs font-bold">
                  {ordersCount}
                </span>
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
                activePage === "settings" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("settings")}
            >
              <Settings size={20} />
              {!sidebarCollapsed && <span>Settings</span>}
            </li>
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6">
          {activePage === "dashboard" && dashboardData && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
                  <DollarSign size={28} className="text-yellow-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Total Sales</p>
                    <p className="text-xl font-bold">{dashboardData.totalSales}</p>
                  </div>
                </div>
                <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
                  <DollarSign size={28} className="text-green-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Earnings</p>
                    <p className="text-xl font-bold">₹{dashboardData.totalEarnings}</p>
                  </div>
                </div>
                <div className="bg-white p-4 shadow rounded-lg flex items-center gap-3">
                  <Eye size={28} className="text-blue-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Page Views</p>
                    <p className="text-xl font-bold">{dashboardData.totalViews}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-lg font-bold text-yellow-700 mb-4">Monthly Stats</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData.monthlyData}>
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
