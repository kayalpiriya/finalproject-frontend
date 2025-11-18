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


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminAddProduct from "./AdminAddProduct";
import ProductList from "./ProductList";
import OrdersListWithBoundary from "./OrdersList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart, Box, List, Settings, Menu } from "lucide-react";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("add");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // Admin guard
  useEffect(() => {
    if (role !== "admin") {
      alert("Admins only!");
      navigate("/login");
    }
  }, [role, navigate]);

  // Fetch badges counts
  useEffect(() => {
    const fetchCounts = async () => {
      try {
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
                activePage === "add" ? "bg-yellow-500 font-semibold" : ""
              }`}
              onClick={() => setActivePage("add")}
            >
              <Box size={20} />
              {!sidebarCollapsed && <span>Add Product</span>}
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
          {activePage === "add" && <AdminAddProduct />}
          {activePage === "list" && <ProductList />}
          {activePage === "orders" && <OrdersListWithBoundary />}
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
