// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <nav>
//       {/* Logo Left */}
//       <div className="logo" onClick={() => navigate("/")}>
//         <img src="src/assets/my logo.png" alt="Bakery Logo" />
//         <span>Mufflix Bakery</span>
//       </div>
// <div className="flex" >
     
//    {/* Links Right */}
//      {/* <div className="nav-links"  id="link"> */}
//      <div className="home"> 
//         <Link href="/">Home</Link>
//       </div>
//       <div className="detail">
//         <Link href="#">Detail</Link>
//       </div>
//       <div className="contact">
//         <Link onClick={() => navigate("/chat")}>Contact</Link>
//      </div>
//      {/* 🧑‍💼 Admin Button */}
//      <div className="admin">
//           <button onClick={() => navigate("/admin")}>Admin</button>
//         </div>

//       <div className="search-buy">
//         <input type="text" placeholder="Search..." />
//       </div>

//       <div className="profile">
//             <button onClick={() => navigate("/profile")}>👤</button>
//           </div>
//       <div>
//          {/* <button>🛒</button> */}
//          <Link href="#">🛒</Link>
//       </div>

//       <div className="signin">
//           <button onClick={() => navigate("/login")}>Sign In</button>
//       </div>
//          {/* If logged in → Show logout button */}
//          r<div>
//             <button
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//             </div>

// </div>

     
//     </nav>
//   )}

//   export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { ShoppingCart, User, Search } from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");

//   // ✅ get role from localStorage (login ஆகும்போது save பண்ணிக்கோங்க)
//   const role = localStorage.getItem("role"); // "admin" or "customer"

//   return (
//     <nav className="fixed w-full z-20 top-0 border-b border-gray-200 shadow-md" style={{backgroundColor:"#596E65"}}>
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 ">
//         {/* ✅ Logo */}
//         <Link to="/" className="flex items-center space-x-3">
//           <img
//             src="src/assets/my logo.png"
//             alt="Bakery Logo"
//             className="h-10 w-10 rounded-full"
//           />
//           <span className="text-white font-semibold text-xl tracking-wide">
//             Mufflix Bakery
//           </span>
//         </Link>

//         {/* ✅ Nav Links */}
//         <ul className="hidden md:flex space-x-8 text-white text-[16px] font-medium">
//           <li>
//             <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
//           </li>
//           <li>
//             <Link to="/details" className="hover:text-yellow-300 transition">Detail</Link>
//           </li>
//             {/* ⭐ NEW - ALL PRODUCTS */}
//   <li>
//     <Link to="/allproduct" className="hover:text-yellow-300 transition">All Products</Link>
//   </li>
//           <li>
//             <Link to="/chat" className="hover:text-yellow-300 transition">Contact</Link>
//           </li>

//           {/* ✅ Show Admin link only if role is admin */}
//           {role === "admin" && (
//             <li>
//               <Link to="/admin" className="hover:text-yellow-300 transition">Admin</Link>
//             </li>
//           )}
//         </ul>

//         {/* ✅ Search Bar */}
//         <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 shadow-inner w-56">
//           <Search className="text-gray-500 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="ml-2 w-full  text-gray-700 text-sm  "
//           />
//         </div>

//         {/* ✅ Icons + Login */}
//         <div className="flex items-baseline space-x-5">
//           <Link
//             to="/cart"
//             className="text-white hover:text-yellow-300 transition"
//             title="Cart"
//           >
//             <ShoppingCart />
//           </Link>

//           <Link
//             to="/profile"
//             className="text-white hover:text-yellow-300 transition"
//             title="Profile"
//           >
//             <User />
//           </Link>

//           <button
//             onClick={() => navigate("/login")}
//             className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-full text-sm px-4  transition"
//           >
//             Sign in
//           </button>

//            {/* If logged in → Show logout button */}
//            {token && (
//             <button
//               onClick={handleLogout}
//               className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-sm px-4 transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { ShoppingCart, User, Search } from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");

//   // Get login + role
//   const role = localStorage.getItem("role"); 
//   const token = localStorage.getItem("token"); // user logged in or not

//   // 🔥 Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <nav
//       className="fixed w-full z-20 top-0 border-b border-gray-200 shadow-md"
//       style={{ backgroundColor: "#596E65" }}
//     >
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-3">
//           <img
//             src="src/assets/my logo.png"
//             alt="Bakery Logo"
//             className="h-10 w-10 rounded-full"
//           />
//           <span className="text-white font-semibold text-xl tracking-wide">
//             Mufflix Bakery
//           </span>
//         </Link>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-8 text-white text-[16px] font-medium">
//           <li>
//             <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
//           </li>
//           <li>
//             <Link to="/details" className="hover:text-yellow-300 transition">Detail</Link>
//           </li>
//           <li>
//             <Link to="/allproduct" className="hover:text-yellow-300 transition">All Products</Link>
//           </li>
//           <li>
//             <Link to="/chat" className="hover:text-yellow-300 transition">Contact</Link>
//           </li>

//           {/* Admin link only if role = admin */}
//           {role === "admin" && (
//             <li>
//               <Link to="/admin" className="hover:text-yellow-300 transition">Admin</Link>
//             </li>
//           )}
//         </ul>

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 shadow-inner w-56">
//           <Search className="text-gray-500 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="ml-2 w-full text-gray-700 text-sm"
//           />
//         </div>

//         {/* Icons + Login/Logout */}
//         <div className="flex items-baseline space-x-5">

//           <Link
//             to="/cart"
//             className="text-white hover:text-yellow-300 transition"
//             title="Cart"
//           >
//             <ShoppingCart />
//           </Link>

//           <Link
//             to="/profile"
//             className="text-white hover:text-yellow-300 transition"
//             title="Profile"
//           >
//             <User />
//           </Link>

//           {/* If NOT logged in → Show login button */}
//           {!token && (
//             <button
//               onClick={() => navigate("/login")}
//               className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-full text-sm px-4 transition"
//             >
//               Sign in
//             </button>
//           )}

//           {/* If logged in → Show logout button */}
//           {token && (
//             <button
//               onClick={handleLogout}
//               className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-sm px-4 transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import { Link, useNavigate } from "react-router-dom";
// import React from "react";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-yellow-100 shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
//           <span className="text-2xl font-bold text-yellow-700">🍰 Mufflix Bakery</span>
//         </div>

//         {/* Links */}
//         <div className="hidden md:flex space-x-6 items-center text-yellow-800 font-medium">
//           <Link to="/" className="hover:text-yellow-600 transition">Home</Link>
//           <Link to="/allproduct" className="hover:text-yellow-600 transition">All Products</Link>
//           <Link to="/detail" className="hover:text-yellow-600 transition">Detail</Link>
//           <Link to="/chat" className="hover:text-yellow-600 transition">Contact</Link>
//           <Link to="/admin" className="hover:text-yellow-600 transition">Admin</Link>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4">
//           <input type="text" placeholder="Search..." className="px-2 py-1 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
//           <button onClick={() => navigate("/profile")} className="text-xl bg-yellow-300 px-3 py-1 rounded-full hover:bg-yellow-400 transition">👤</button>
//           <Link to="/cart" className="text-yellow-800 hover:text-yellow-600 text-xl">🛒</Link>
//           <button onClick={handleLogout} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition">Logout</button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// function Navbar() {
//   const navigate = useNavigate();
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     setRole(localStorage.getItem("role"));
//     setToken(localStorage.getItem("token"));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     localStorage.removeItem("token");
//     setRole(null);
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-yellow-100 shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div
//           className="flex items-center cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <span className="text-2xl font-bold text-yellow-700">
//             🍰 Mufflix Bakery
//           </span>
//         </div>

//         {/* Links */}
//         <div className="hidden md:flex space-x-6 items-center text-yellow-800 font-medium">
//           <Link to="/" className="hover:text-yellow-600 transition">
//             Home
//           </Link>
//           <Link to="/allproduct" className="hover:text-yellow-600 transition">
//             All Products
//           </Link>
//           <Link to="/detail" className="hover:text-yellow-600 transition">
//             Detail
//           </Link>
//           <Link to="/chat" className="hover:text-yellow-600 transition">
//             Contact
//           </Link>
//           {role === "admin" && (
//             <Link to="/admin/dashboard" className="hover:text-yellow-600 transition">
//               Admin
//             </Link>
//           )}
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-2 py-1 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />

//           {token ? (
//             <>
//               <button
//                 onClick={() => navigate("/profile")}
//                 className="text-xl bg-yellow-300 px-3 py-1 rounded-full hover:bg-yellow-400 transition"
//               >
//                 👤
//               </button>
//               <Link
//                 to="/cart"
//                 className="text-yellow-800 hover:text-yellow-600 text-xl"
//               >
//                 🛒
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//             >
//               Sign In
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// function Navbar() {
//   const navigate = useNavigate();
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(null);

//   // Read from localStorage on mount
//   useEffect(() => {
//     const savedRole = localStorage.getItem("role");
//     const savedToken = localStorage.getItem("token");
//     setRole(savedRole);
//     setToken(savedToken);
//   }, []);

//   // Logout
//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     localStorage.removeItem("token");
//     setRole(null);
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-yellow-100 shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div
//           className="flex items-center cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <span className="text-2xl font-bold text-yellow-700">
//             🍰 Mufflix Bakery
//           </span>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-6 items-center text-yellow-800 font-medium">
//           <Link to="/" className="hover:text-yellow-600 transition">Home</Link>
//           <Link to="/allproduct" className="hover:text-yellow-600 transition">All Products</Link>
//           <Link to="/detail" className="hover:text-yellow-600 transition">Detail</Link>
//           <Link to="/chat" className="hover:text-yellow-600 transition">Contact</Link>
//           {role === "admin" && (
//             <Link to="/admin" className="hover:text-yellow-600 transition font-semibold">Admin</Link>
//           )}
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Search Box */}
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-3 py-1 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           />

//           {/* Profile Icon */}
//           <button
//             onClick={() => navigate("/profile")}
//             className="text-xl bg-yellow-300 px-3 py-1 rounded-full hover:bg-yellow-400 transition"
//           >
//             👤
//           </button>

//           {/* Cart Icon */}
//           <Link to="/cart" className="text-yellow-800 hover:text-yellow-600 text-xl">
//             🛒
//           </Link>

//           {/* Sign In / Logout */}
//           {token ? (
//             <button
//               onClick={handleLogout}
//               className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//             >
//               Sign In
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;






// ///imoprtant///
// import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import { Menu, X, ShoppingCart, User } from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const { totalItems } = useContext(CartContext);

//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     setRole(localStorage.getItem("role"));
//     setToken(localStorage.getItem("token"));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     localStorage.removeItem("token");
//     setRole(null);
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-yellow-100 fixed w-full shadow z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         {/* <div
//           className="text-2xl font-bold text-yellow-700 cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           🍰 Mufflix Bakery
//         </div> */}
//          {/* Logo */}
//          <Link to="/" className="flex items-center space-x-3">
//           <img
//             src="src/assets/my logo.png"
//             alt="Bakery Logo"
//             className="h-10 w-10 rounded-full"
//           />
//           <span className=" text-yellow-800 hover:text-yellow-600 transition
//           font-semibold text-xl tracking-wide">
//             Mufflix Bakery
//           </span>
//         </Link>
        

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 font-medium text-yellow-800">
//           <Link to="/" className="hover:text-yellow-600 transition">Home</Link>
//           <Link to="/allproduct" className="hover:text-yellow-600 transition">All Products</Link>
//           <Link to="/detail" className="hover:text-yellow-600 transition">Detail</Link>
//           <Link to="/chat" className="hover:text-yellow-600 transition">Contact</Link>
//           {role === "admin" && (
//             <Link to="/admin" className="hover:text-yellow-600 transition">Admin</Link>
//           )}
//         </div>

//         {/* Right icons */}
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-2 py-1 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 hidden md:block"
//           />

//           {token ? (
//             <>
//               <button
//                 onClick={() => navigate("/profile")}
//                 className="relative text-yellow-800 hover:text-yellow-600"
//               >
//                 <User size={24} />
//               </button>

//               <button
//                 onClick={() => navigate("/shoppingcart")}
//                 className="relative text-yellow-800 hover:text-yellow-600"
//               >
//                 <ShoppingCart size={24} />
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//             >
//               Sign In
//             </button>
//           )}

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-yellow-100 px-6 py-4 space-y-3">
//           <Link to="/" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Home</Link>
//           <Link to="/allproduct" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>All Products</Link>
//           <Link to="/detail" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Detail</Link>
//           <Link to="/chat" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Contact</Link>
//           {role === "admin" && (
//             <Link to="/admin" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Admin</Link>
//           )}
//           {token ? (
//             <>
//               <button
//                 onClick={() => { navigate("/profile"); setMobileOpen(false); }}
//                 className="flex items-center gap-2"
//               >
//                 <User size={20} /> Profile
//               </button>
//               <button
//                 onClick={() => { navigate("/shoppingcart"); setMobileOpen(false); }}
//                 className="flex items-center gap-2 relative"
//               >
//                 <ShoppingCart size={20} /> Cart
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition w-full text-left"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => { navigate("/login"); setMobileOpen(false); }}
//               className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition w-full text-left"
//             >
//               Sign In
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;



// /// Navbar.jsx
// import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import { Menu, X, ShoppingCart, User } from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const { totalItems } = useContext(CartContext);

//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     setRole(localStorage.getItem("role"));
//     setToken(localStorage.getItem("token"));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     localStorage.removeItem("token");
//     setRole(null);
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-yellow-100 fixed w-full shadow z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-3">
//           <img
//             src="src/assets/my logo.png"
//             alt="Bakery Logo"
//             className="h-10 w-10 rounded-full"
//           />
//           <span className="text-yellow-800 hover:text-yellow-600 transition font-semibold text-xl tracking-wide">
//             Mufflix Bakery
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 font-medium text-yellow-800">
//           <Link to="/" className="hover:text-yellow-600 transition">Home</Link>
//           <Link to="/allproduct" className="hover:text-yellow-600 transition">All Products</Link>
//           <Link to="/detail" className="hover:text-yellow-600 transition">Detail</Link>
//           <Link to="/chat" className="hover:text-yellow-600 transition">Contact</Link>
//           <Link to="/reviews" className="hover:text-yellow-600 transition">Customer Reviews</Link> {/* Added */}
//           {role === "admin" && (
//             <Link to="/admin" className="hover:text-yellow-600 transition">Admin</Link>
//           )}
//         </div>

//         {/* Right icons */}
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-2 py-1 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 hidden md:block"
//           />

//           {token ? (
//             <>
//               <button
//                 onClick={() => navigate("/profile")}
//                 className="relative text-yellow-800 hover:text-yellow-600"
//               >
//                 <User size={24} />
//               </button>

//               <button
//                 onClick={() => navigate("/shoppingcart")}
//                 className="relative text-yellow-800 hover:text-yellow-600"
//               >
//                 <ShoppingCart size={24} />
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
//             >
//               Sign In
//             </button>
//           )}

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-yellow-100 px-6 py-4 space-y-3">
//           <Link to="/" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Home</Link>
//           <Link to="/allproduct" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>All Products</Link>
//           <Link to="/detail" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Detail</Link>
//           <Link to="/chat" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Contact</Link>
//           <Link to="/reviews" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Customer Reviews</Link> {/* Added */}
//           {role === "admin" && (
//             <Link to="/admin" className="block hover:text-yellow-600 transition" onClick={() => setMobileOpen(false)}>Admin</Link>
//           )}
//           {token ? (
//             <>
//               <button
//                 onClick={() => { navigate("/profile"); setMobileOpen(false); }}
//                 className="flex items-center gap-2"
//               >
//                 <User size={20} /> Profile
//               </button>
//               <button
//                 onClick={() => { navigate("/shoppingcart"); setMobileOpen(false); }}
//                 className="flex items-center gap-2 relative"
//               >
//                 <ShoppingCart size={20} /> Cart
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition w-full text-left"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => { navigate("/login"); setMobileOpen(false); }}
//               className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition w-full text-left"
//             >
//               Sign In
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// /// Navbar.jsx
// import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import { Menu, X, ShoppingCart, User } from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const { totalItems } = useContext(CartContext);

//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     setRole(localStorage.getItem("role"));
//     setToken(localStorage.getItem("token"));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     localStorage.removeItem("token");
//     setRole(null);
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav
//     className="fixed w-full shadow z-50"
//     style={{
//       backgroundColor: "#596E65", // Updated navbar color
//     }}
//   >
//     <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//       {/* Logo */}
//       <Link to="/" className="flex items-center space-x-3">
//         <img
//           src="src/assets/my logo.png"
//           alt="Bakery Logo"
//           className="h-10 w-10 rounded-full"
//         />
//         <span className="text-white hover:text-gray-300 transition font-semibold text-xl tracking-wide">
//           Mufflix Bakery
//         </span>
//       </Link>
  
//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center space-x-6 font-medium text-white">
//         <Link to="/" className="hover:text-gray-300 transition">Home</Link>
//         <Link to="/allproduct" className="hover:text-gray-300 transition">All Products</Link>
//         <Link to="/detail" className="hover:text-gray-300 transition">Detail</Link>
//         {/* <Link to="/chat" className="hover:text-gray-300 transition">Contact</Link> */}
//         <Link to="/reviews" className="hover:text-gray-300 transition">Customer Reviews</Link>
//         {role === "admin" && (
//           <Link to="/admin" className="hover:text-gray-300 transition">Admin</Link>
//         )}
//       </div>
  
//       {/* Right icons */}
//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="px-2 py-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 hidden md:block"
//         />
  
//         {token ? (
//           <>
//             <button
//               onClick={() => navigate("/profile")}
//               className="relative text-white hover:text-gray-300"
//             >
//               <User size={24} />
//             </button>
  
//             <button
//               onClick={() => navigate("/shoppingcart")}
//               className="relative text-white hover:text-gray-300"
//             >
//               <ShoppingCart size={24} />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </button>
  
//             <button
//               onClick={handleLogout}
//               className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition btn-add"
//           >
//             Sign In
//           </button>
//         )}
  
//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
//           {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//     </div>
  
//     {/* Mobile Menu */}
//     {mobileOpen && (
//       <div className="md:hidden px-6 py-4 space-y-3" style={{ backgroundColor: "#596E65" }}>
//         <Link to="/" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Home</Link>
//         <Link to="/allproduct" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">All Products</Link>
//         <Link to="/detail" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Detail</Link>
//         <Link to="/chat" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Contact</Link>
//         <Link to="/reviews" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Customer Reviews</Link>
//         {role === "admin" && (
//           <Link to="/admin" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Admin</Link>
//         )}
  
//         {token ? (
//           <>
//             <button
//               onClick={() => { navigate("/profile"); setMobileOpen(false); }}
//               className="flex items-center gap-2 text-white hover:text-gray-300 w-full"
//             >
//               <User size={20} /> Profile
//             </button>
  
//             <button
//               onClick={() => { navigate("/shoppingcart"); setMobileOpen(false); }}
//               className="flex items-center gap-2 relative text-white hover:text-gray-300 w-full"
//             >
//               <ShoppingCart size={20} /> Cart
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </button>
  
//             <button
//               onClick={handleLogout}
//               className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition w-full text-left"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => { navigate("/login"); setMobileOpen(false); }}
//             className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition w-full text-left"
//           >
//             Sign In
//           </button>
//         )}
//       </div>
//     )}
//   </nav>
  
//   );
// }

// export default Navbar;


// /// Navbar.jsx
// import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import { Menu, X, ShoppingCart, User } from "lucide-react";

// function Navbar() {
//   const navigate = useNavigate();
//   const { totalItems } = useContext(CartContext);

//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     setRole(localStorage.getItem("role"));
//     setToken(localStorage.getItem("token"));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("role");
//     localStorage.removeItem("token");
//     setRole(null);
//     setToken(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="fixed w-full shadow z-50" style={{ backgroundColor: "#2B1B17" }}>
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-3">
//           <img
//             src="src/assets/my logo.png"
//             alt="Bakery Logo"
//             className="h-10 w-10 rounded-full"
//           />
//           <span className="text-white hover:text-gray-300 transition font-semibold text-xl tracking-wide">
//             Mufflix Bakery
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 font-medium text-white">
//           <Link to="/" className="hover:text-gray-300 transition">Home</Link>
//           <Link to="/allproduct" className="hover:text-gray-300 transition">All Products</Link>
//           <Link to="/About" className="hover:text-gray-300 transition">About</Link>
//           {/* <Link to="/reviews" className="hover:text-gray-300 transition">Customer Reviews</Link> */}
//           {role === "admin" && (
//             <Link to="/admin/blogwrite" className="hover:text-gray-300 transition">
//               Write Blog
//             </Link>
//           )}
//           {role === "admin" && (
//             <Link to="/admin" className="hover:text-gray-300 transition">Admin</Link>
//           )}
//         </div>

//         {/* Right icons */}
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-2 py-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 hidden md:block"
//           />

//           {token ? (
//             <>
//               <button
//                 onClick={() => navigate("/profile")}
//                 className="relative text-white hover:text-gray-300"
//               >
//                 <User size={24} />
//               </button>

//               <button
//                 onClick={() => navigate("/shoppingcart")}
//                 className="relative text-white hover:text-gray-300"
//               >
//                 <ShoppingCart size={24} />
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition btn-add"
//             >
//               Sign In
//             </button>
//           )}

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden px-6 py-4 space-y-3" style={{ backgroundColor: "#596E65" }}>
//           <Link to="/" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Home</Link>
//           <Link to="/allproduct" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">All Products</Link>
//           <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">About</Link>
//           <Link to="/reviews" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Customer Reviews</Link>
//           {role === "admin" && (
//             <Link to="/admin/blogwrite" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">
//               Write Blog
//             </Link>
//           )}
//           {role === "admin" && (
//             <Link to="/admin" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Admin</Link>
//           )}

//           {token ? (
//             <>
//               <button
//                 onClick={() => { navigate("/profile"); setMobileOpen(false); }}
//                 className="flex items-center gap-2 text-white hover:text-gray-300 w-full"
//               >
//                 <User size={20} /> Profile
//               </button>

//               <button
//                 onClick={() => { navigate("/shoppingcart"); setMobileOpen(false); }}
//                 className="flex items-center gap-2 relative text-white hover:text-gray-300 w-full"
//               >
//                 <ShoppingCart size={20} /> Cart
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="bg-pink-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition w-full text-left"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => { navigate("/login"); setMobileOpen(false); }}
//               className="bg-pink-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition w-full text-left"
//             >
//               Sign In
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


/// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../pages/CartContext.jsx";
import { Menu, X, ShoppingCart, User } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const { totalItems } = useContext(CartContext);

  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    setRole(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="fixed w-full shadow z-50" style={{ backgroundColor: "#2B1B17" }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="src/assets/my logo.png"
            alt="Bakery Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white hover:text-gray-300 transition font-semibold text-xl tracking-wide">
            Mufflix Bakery
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-white">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/allproduct" className="hover:text-gray-300 transition">All Products</Link>
          <Link to="/About" className="hover:text-gray-300 transition">About</Link>
          {/* <Link to="/reviews" className="hover:text-gray-300 transition">Customer Reviews</Link> */}
          
          {role === "admin" && (
            <Link to="/admin" className="hover:text-gray-300 transition">Admin</Link>
          )}
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 hidden md:block"
          />

          {token ? (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="relative text-white hover:text-gray-300"
              >
                <User size={24} />
              </button>

              <button
                onClick={() => navigate("/shoppingcart")}
                className="relative text-white hover:text-gray-300"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={handleLogout}
                className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition btn-add"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 space-y-3" style={{ backgroundColor: "#596E65" }}>
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Home</Link>
          <Link to="/allproduct" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">All Products</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">About</Link>
          <Link to="/reviews" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Customer Reviews</Link>
          
          {role === "admin" && (
            <Link to="/admin" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300 transition">Admin</Link>
          )}

          {token ? (
            <>
              <button
                onClick={() => { navigate("/profile"); setMobileOpen(false); }}
                className="flex items-center gap-2 text-white hover:text-gray-300 w-full"
              >
                <User size={20} /> Profile
              </button>

              <button
                onClick={() => { navigate("/shoppingcart"); setMobileOpen(false); }}
                className="flex items-center gap-2 relative text-white hover:text-gray-300 w-full"
              >
                <ShoppingCart size={20} /> Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={handleLogout}
                className="bg-pink-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition w-full text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => { navigate("/login"); setMobileOpen(false); }}
              className="bg-pink-700 text-white px-3 py-1 rounded-md hover:bg-green-800 transition w-full text-left"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
