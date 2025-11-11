import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      {/* Logo Left */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src="src/assets/my logo.png" alt="Bakery Logo" />
        <span>Mufflix Bakery</span>
      </div>

      {/* Search Center */}
      <div className="search-buy">
        <input type="text" placeholder="Search..." />
        {/* <button>🛒</button> */}
        <a href="#">🛒</a>
      </div>

      {/* Links Right */}
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#">Detail</a>
       
<div className="contact">
<a onClick={() => navigate("/chat")}>Contact</a>
</div>

  {/* 🧑‍💼 Admin Button */}
  <div className="admin">
          <button onClick={() => navigate("/admin")}>Admin</button>
        </div>

        <div className="signin">
          <button onClick={() => navigate("/login")}>Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const navigate = useNavigate();

//   // ✅ Optional: check if user is logged in
//   const token = localStorage.getItem("token"); // JWT from login

//   return (
//     <nav>
//       {/* Logo Left */}
//       <div className="logo" onClick={() => navigate("/")}>
//         <img src="src/assets/my logo.png" alt="Bakery Logo" />
//         <span>Mufflix Bakery</span>
//       </div>

//       {/* Search Center */}
//       <div className="search-buy">
//         <input type="text" placeholder="Search..." />
//         <a href="#">🛒</a>
//       </div>

//       {/* Links Right */}
//       <div className="nav-links">
//         <a href="/">Home</a>
//         <a href="#">Detail</a>
       
//         <div className="contact">
//           <a onClick={() => navigate("/chat")}>Contact</a>
//         </div>

//         {/* 🧑‍💼 Admin Button */}
//         <div className="admin">
//           <button onClick={() => navigate("/admin")}>Admin</button>
//         </div>

//         {/* 👤 User Profile */}
//         {token && (
//           <div className="profile">
//             <button onClick={() => navigate("/profile")}>👤</button>
//           </div>
//         )}

//         {/* Sign In */}
//         {!token && (
//           <div className="signin">
//             <button onClick={() => navigate("/login")}>Sign In</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token"); // login check

//   return (
//     <nav>
//       {/* 🔹 Logo + Profile Left */}
//       <div className="logo-section">
//         <div className="logo" onClick={() => navigate("/")}>
//           <img src="src/assets/my logo.png" alt="Bakery Logo" />
//           <span>Mufflix Bakery</span>
//         </div>

//         {/* 👤 Profile icon near logo */}
//         {token && (
//           <div className="profile-icon" onClick={() => navigate("/profile")}>
//             👤
//           </div>
//         )}
//       </div>

//       {/* 🔹 Search Center */}
//       <div className="search-buy">
//         <input type="text" placeholder="Search..." />
//         <a href="#">🛒</a>
//       </div>

//       {/* 🔹 Links Right */}
//       <div className="nav-links">
//         <a href="/">Home</a>
//         <a href="#">Detail</a>

//         <div className="contact">
//           <a onClick={() => navigate("/chat")}>Contact</a>
//         </div>

//         <div className="admin">
//           <button onClick={() => navigate("/admin")}>Admin</button>
//         </div>

//         {!token && (
//           <div className="signin">
//             <button onClick={() => navigate("/login")}>Sign In</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
