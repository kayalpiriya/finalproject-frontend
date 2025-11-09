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

        <div className="signin">
          <button onClick={() => navigate("/login")}>Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
