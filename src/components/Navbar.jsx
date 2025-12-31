
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../pages/CartContext.jsx";
import { Menu, X, ShoppingCart, User } from "lucide-react";

// --- IMPORTING LOGO ---
// உங்கள் assets folder-ல் 'my logo.png' இருப்பதை உறுதி செய்து கொள்ளுங்கள்
import logoImg from "../assets/my logo.png";

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
          {/* Using Imported Logo Variable Here */}
          <img
            src={logoImg}
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