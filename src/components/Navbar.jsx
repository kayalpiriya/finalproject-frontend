// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

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
// </div>
     
//     </nav>


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
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, User, Search } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Get login + role
  const role = localStorage.getItem("role"); 
  const token = localStorage.getItem("token"); // user logged in or not

  // 🔥 Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav
      className="fixed w-full z-20 top-0 border-b border-gray-200 shadow-md"
      style={{ backgroundColor: "#596E65" }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="src/assets/my logo.png"
            alt="Bakery Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white font-semibold text-xl tracking-wide">
            Mufflix Bakery
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white text-[16px] font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/details" className="hover:text-yellow-300 transition">Detail</Link>
          </li>
          <li>
            <Link to="/allproduct" className="hover:text-yellow-300 transition">All Products</Link>
          </li>
          <li>
            <Link to="/chat" className="hover:text-yellow-300 transition">Contact</Link>
          </li>

          {/* Admin link only if role = admin */}
          {role === "admin" && (
            <li>
              <Link to="/admin" className="hover:text-yellow-300 transition">Admin</Link>
            </li>
          )}
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1 shadow-inner w-56">
          <Search className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full text-gray-700 text-sm"
          />
        </div>

        {/* Icons + Login/Logout */}
        <div className="flex items-baseline space-x-5">

          <Link
            to="/cart"
            className="text-white hover:text-yellow-300 transition"
            title="Cart"
          >
            <ShoppingCart />
          </Link>

          <Link
            to="/profile"
            className="text-white hover:text-yellow-300 transition"
            title="Profile"
          >
            <User />
          </Link>

          {/* If NOT logged in → Show login button */}
          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-full text-sm px-4 transition"
            >
              Sign in
            </button>
          )}

          {/* If logged in → Show logout button */}
          {token && (
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-sm px-4 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
