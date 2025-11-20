// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext";

// function AllProduct() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleAdd = (p) => {
//     addToCart(p);
//     navigate(`/product/${p._id}`, { state: p });
//   };

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br>

//       <div className="products-page">
//         <h2>All Products</h2>

//         <div className="products-grid">
//           {products.map((p) => (
//             <div key={p._id} className="product-card-new">
//               <img src={p.img || "src/assets/default.jpg"} alt={p.name} />
//               <h3>{p.name}</h3>
//               <p className="price">₹{p.price}</p>
//               <p className="stock">Stock: {p.stock}</p>

//               <button onClick={() => handleAdd(p)}>Add</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default AllProduct;


// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext";

// function AllProduct() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null); // Quick view product
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleAdd = (p) => {
//     addToCart(p);
//     navigate(`/product/${p._id}`, { state: p });
//   };

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 bg-yellow-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <h2 className="text-3xl font-bold text-yellow-700 mb-8 text-center">
//             All Products
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {products.map((p) => (
//               <div
//                 key={p._id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
//               >
//                 <div className="h-60 w-full overflow-hidden">
//                   <img
//                     src={p.img || "src/assets/default.jpg"}
//                     alt={p.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-yellow-800">{p.name}</h3>
//                   <p className="text-yellow-700 font-bold mt-1">₹{p.price}</p>
//                   <p className="text-gray-500 text-sm mt-1">Stock: {p.stock}</p>
//                   <div className="mt-3 flex gap-2">
//                     <button
//                       onClick={() => handleAdd(p)}
//                       className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
//                     >
//                       Add to Cart
//                     </button>
//                     <button
//                       onClick={() => openModal(p)}
//                       className="flex-1 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg hover:bg-yellow-200 transition"
//                     >
//                       Quick View
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quick View Modal */}
//         {modalOpen && selectedProduct && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 shadow-lg relative">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-3 right-3 text-gray-500 text-2xl hover:text-gray-700 transition"
//               >
//                 &times;
//               </button>
//               <div className="grid grid-cols-1 md:grid-cols-2">
//                 <img
//                   src={selectedProduct.img || "src/assets/default.jpg"}
//                   alt={selectedProduct.name}
//                   className="w-full h-80 object-cover rounded-l-2xl"
//                 />
//                 <div className="p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold text-yellow-800">
//                       {selectedProduct.name}
//                     </h3>
//                     <p className="text-yellow-700 font-bold mt-2 text-xl">
//                       ₹{selectedProduct.price}
//                     </p>
//                     <p className="text-gray-500 mt-2">Stock: {selectedProduct.stock}</p>
//                     <p className="text-gray-600 mt-4">{selectedProduct.description || "Delicious bakery item!"}</p>
//                   </div>
//                   <button
//                     onClick={() => handleAdd(selectedProduct)}
//                     className="mt-6 w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default AllProduct;



// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext";

// function AllProduct() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleAdd = (p) => {
//     addToCart(p);
//     navigate(`/product/${p._id}`, { state: p });
//   };

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setModalOpen(false);
//   };

//   // ---------------- DESIGN COLORS ----------------
//   const colors = {
//     background: "#FFF6F0", // soft creamy background
//     card: "#FFFFFF", // white card
//     cardShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     cardShadowHover: "0 8px 20px rgba(0,0,0,0.2)",
//     title: "#D2691E", // chocolate brown
//     price: "#FF6F61", // soft coral
//     stock: "#6B7280", // gray
//     buttonPrimary: "#FF6F61", // soft coral
//     buttonPrimaryHover: "#FF8578", 
//     buttonSecondary: "#FFD8C2", // light peach
//     buttonSecondaryText: "#D2691E",
//   };
//   // ------------------------------------------------

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 min-h-screen" style={{ backgroundColor: colors.background }}>
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <h2
//             className="text-3xl font-bold mb-12 text-center animate-fadeInUp"
//             style={{ color: colors.title }}
//           >
//             All Products
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {products.map((p, index) => (
//               <div
//                 key={p._id}
//                 className="bg-white rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl card-animate"
//                 style={{ 
//                   backgroundColor: colors.card, 
//                   boxShadow: colors.cardShadow,
//                   animationDelay: `${index * 100}ms`
//                 }}
//               >
//                 <div className="h-60 w-full overflow-hidden relative rounded-t-2xl">
//                   <img
//                     src={p.img || "src/assets/default.jpg"}
//                     alt={p.name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-20 transition-opacity rounded-t-2xl"></div>
//                 </div>
//                 <div className="p-4 flex flex-col justify-between h-48">
//                   <div>
//                     <h3 className="text-lg font-semibold truncate" style={{ color: colors.title }}>
//                       {p.name}
//                     </h3>
//                     <p className="font-bold mt-1 text-lg" style={{ color: colors.price }}>
//                       ₹{p.price}
//                     </p>
//                     <p className="text-sm mt-1" style={{ color: colors.stock }}>
//                       Stock: {p.stock}
//                     </p>
//                   </div>
//                   <div className="mt-3 flex gap-2">
//                     <button
//                       onClick={() => handleAdd(p)}
//                       className="flex-1 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//                       style={{ backgroundColor: colors.buttonPrimary }}
//                       onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover)}
//                       onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimary)}
//                     >
//                       Add to Cart
//                     </button>
//                     <button
//                       onClick={() => openModal(p)}
//                       className="flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//                       style={{ backgroundColor: colors.buttonSecondary, color: colors.buttonSecondaryText }}
//                     >
//                       Quick View
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quick View Modal */}
//         {modalOpen && selectedProduct && (
//           <div className="fixed inset-0 bg-black bg-opacity-60 flex items-end md:items-center justify-center z-50">
//             <div
//               className="bg-white rounded-2xl shadow-2xl w-full md:w-2/3 lg:w-1/2 relative transform transition-transform duration-500"
//               style={{ backgroundColor: colors.card }}
//             >
//               <button
//                 onClick={closeModal}
//                 className="absolute top-3 right-3 text-gray-500 text-3xl hover:text-gray-700 transition"
//               >
//                 &times;
//               </button>
//               <div className="grid grid-cols-1 md:grid-cols-2">
//                 <img
//                   src={selectedProduct.img || "src/assets/default.jpg"}
//                   alt={selectedProduct.name}
//                   className="w-full h-80 object-cover rounded-t-2xl md:rounded-l-2xl transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold animate-fadeInUp" style={{ color: colors.title }}>
//                       {selectedProduct.name}
//                     </h3>
//                     <p className="font-bold mt-2 text-xl" style={{ color: colors.price }}>
//                       ₹{selectedProduct.price}
//                     </p>
//                     <p className="mt-2" style={{ color: colors.stock }}>
//                       Stock: {selectedProduct.stock}
//                     </p>
//                     <p className="mt-4 text-gray-600">
//                       {selectedProduct.description || "Delicious bakery item!"}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleAdd(selectedProduct)}
//                     className="mt-6 w-full px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//                     style={{ backgroundColor: colors.buttonPrimary }}
//                     onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover)}
//                     onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimary)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       <Footer />

//       {/* Animations */}
//       <style>
//         {`
//         @keyframes fadeInUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeInUp { animation: fadeInUp 0.6s ease forwards; }

//         .card-animate {
//           opacity: 0;
//           transform: translateY(20px);
//           animation: fadeInUp 0.6s forwards;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// export default AllProduct;






// import React, { useEffect, useState, useContext, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext";

// function AllProduct() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const searchRef = useRef(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => {
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // Filter products when search changes
//   useEffect(() => {
//     if (search === "") {
//       setFilteredProducts(products);
//       setShowSuggestions(false);
//     } else {
//       const filtered = products.filter((p) =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//       setShowSuggestions(true);
//     }
//   }, [search, products]);

//   // Close suggestions on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (searchRef.current && !searchRef.current.contains(e.target)) {
//         setShowSuggestions(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const handleAdd = (p) => {
//     addToCart(p);
//     navigate(`/product/${p._id}`, { state: p });
//   };

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setModalOpen(false);
//   };

//   // ---------------- DESIGN COLORS ----------------
//   const colors = {
//     background: "#FFF6F0",
//     card: "#FFFFFF",
//     cardShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     cardShadowHover: "0 8px 20px rgba(0,0,0,0.2)",
//     title: "#D2691E",
//     price: "#FF6F61",
//     stock: "#6B7280",
//     buttonPrimary: "#FF6F61",
//     buttonPrimaryHover: "#FF8578",
//     buttonSecondary: "#FFD8C2",
//     buttonSecondaryText: "#D2691E",
//   };
//   // ------------------------------------------------

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 min-h-screen" style={{ backgroundColor: colors.background }}>
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <h2
//             className="text-3xl font-bold mb-6 text-center animate-fadeInUp"
//             style={{ color: colors.title }}
//           >
//             All Products
//           </h2>

//           {/* SEARCH BAR WITH SUGGESTIONS */}
//           <div className="flex justify-center mb-8 relative" ref={searchRef}>
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full max-w-md px-4 py-3 rounded-l-xl border-2 border-rose-300 focus:outline-none focus:border-rose-500"
//             />
//             <button
//               onClick={() => {}}
//               className="bg-rose-600 text-white px-5 rounded-r-xl hover:bg-rose-700 transition-all"
//             >
//               Search
//             </button>

//             {showSuggestions && filteredProducts.length > 0 && (
//               <div className="absolute top-full left-0 w-full max-w-md bg-white shadow-lg rounded-b-xl z-50">
//                 {filteredProducts.slice(0, 5).map((p) => (
//                   <div
//                     key={p._id}
//                     className="px-4 py-2 cursor-pointer hover:bg-rose-50 transition"
//                     onClick={() => {
//                       navigate(`/product/${p._id}`, { state: p });
//                       setSearch("");
//                       setShowSuggestions(false);
//                     }}
//                   >
//                     {p.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {filteredProducts.map((p, index) => (
//               <div
//                 key={p._id}
//                 className="bg-white rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl card-animate"
//                 style={{ 
//                   backgroundColor: colors.card, 
//                   boxShadow: colors.cardShadow,
//                   animationDelay: `${index * 100}ms`
//                 }}
//               >
//                 <div className="h-60 w-full overflow-hidden relative rounded-t-2xl">
//                   <img
//                     src={p.img || "src/assets/default.jpg"}
//                     alt={p.name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-20 transition-opacity rounded-t-2xl"></div>
//                 </div>
//                 <div className="p-4 flex flex-col justify-between h-48">
//                   <div>
//                     <h3 className="text-lg font-semibold truncate" style={{ color: colors.title }}>
//                       {p.name}
//                     </h3>
//                     <p className="font-bold mt-1 text-lg" style={{ color: colors.price }}>
//                       ₹{p.price}
//                     </p>
//                     <p className="text-sm mt-1" style={{ color: colors.stock }}>
//                       Stock: {p.stock}
//                     </p>
//                   </div>
//                   <div className="mt-3 flex gap-2">
//                     <button
//                       onClick={() => handleAdd(p)}
//                       className="flex-1 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//                       style={{ backgroundColor: colors.buttonPrimary }}
//                       onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover)}
//                       onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimary)}
//                     >
//                       Add to Cart
//                     </button>
//                     <button
//                       onClick={() => openModal(p)}
//                       className="flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//                       style={{ backgroundColor: colors.buttonSecondary, color: colors.buttonSecondaryText }}
//                     >
//                       Quick View
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quick View Modal */}
//         {modalOpen && selectedProduct && (
//           <div className="fixed inset-0 bg-black bg-opacity-60 flex items-end md:items-center justify-center z-50">
//             <div
//               className="bg-white rounded-2xl shadow-2xl w-full md:w-2/3 lg:w-1/2 relative transform transition-transform duration-500"
//               style={{ backgroundColor: colors.card }}
//             >
//               <button
//                 onClick={closeModal}
//                 className="absolute top-3 right-3 text-gray-500 text-3xl hover:text-gray-700 transition"
//               >
//                 &times;
//               </button>
//               <div className="grid grid-cols-1 md:grid-cols-2">
//                 <img
//                   src={selectedProduct.img || "src/assets/default.jpg"}
//                   alt={selectedProduct.name}
//                   className="w-full h-80 object-cover rounded-t-2xl md:rounded-l-2xl transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold animate-fadeInUp" style={{ color: colors.title }}>
//                       {selectedProduct.name}
//                     </h3>
//                     <p className="font-bold mt-2 text-xl" style={{ color: colors.price }}>
//                       ₹{selectedProduct.price}
//                     </p>
//                     <p className="mt-2" style={{ color: colors.stock }}>
//                       Stock: {selectedProduct.stock}
//                     </p>
//                     <p className="mt-4 text-gray-600">
//                       {selectedProduct.description || "Delicious bakery item!"}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleAdd(selectedProduct)}
//                     className="mt-6 w-full px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//                     style={{ backgroundColor: colors.buttonPrimary }}
//                     onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover)}
//                     onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimary)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       <Footer />

//       {/* Animations */}
//       <style>
//         {`
//         @keyframes fadeInUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeInUp { animation: fadeInUp 0.6s ease forwards; }

//         .card-animate {
//           opacity: 0;
//           transform: translateY(20px);
//           animation: fadeInUp 0.6s forwards;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// export default AllProduct;













import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext";

function AllProduct() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredProducts(products);
      setShowSuggestions(false);
    } else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowSuggestions(true);
    }
  }, [search, products]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleAdd = (p) => {
    addToCart(p);
    navigate(`/product/${p._id}`, { state: p });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const colors = {
    background: "#FFF6F0",
    card: "#FFFFFF",
    cardShadow: "0 4px 12px rgba(0,0,0,0.1)",
    cardShadowHover: "0 12px 24px rgba(0,0,0,0.2)", // 🎀 improved
    title: "#D2691E",
    price: "#FF6F61",
    stock: "#6B7280",
    buttonPrimary: "#FF6F61",
    buttonPrimaryHover: "#FF8578",
    buttonSecondary: "#FFD8C2",
    buttonSecondaryText: "#D2691E",
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center animate-fadeInUp" style={{ color: colors.title }}>
            All Products
          </h2>

          {/* SEARCH BAR */}
          <div className="flex justify-center mb-8 relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-l-xl border-2 border-rose-300 focus:outline-none focus:border-rose-500"
            />
            <button
              onClick={() => {}}
              className="bg-rose-600 text-white px-5 rounded-r-xl hover:bg-rose-700 transition-all"
            >
              Search
            </button>

            {showSuggestions && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 w-full max-w-md bg-white shadow-lg rounded-b-xl z-50">
                {filteredProducts.slice(0, 5).map((p) => (
                  <div
                    key={p._id}
                    className="px-4 py-2 cursor-pointer hover:bg-rose-50 transition"
                    onClick={() => {
                      navigate(`/product/${p._id}`, { state: p });
                      setSearch("");
                      setShowSuggestions(false);
                    }}
                  >
                    {p.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p, index) => (
              <div
                key={p._id}
                className="rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 card-animate"
                style={{
                  backgroundColor: colors.card,
                  boxShadow: colors.cardShadow,
                  animationDelay: `${index * 100}ms`,
                }}
              >

                {/* FIXED IMAGE AREA */}
                <div className="w-full h-56 md:h-60 lg:h-64 overflow-hidden relative bg-gray-100 flex items-center justify-center">
                  <img
                    src={p.img || "src/assets/default.jpg"}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-4 flex flex-col justify-between h-48">
                  <div>
                    <h3 className="text-lg font-semibold truncate" style={{ color: colors.title }}>
                      {p.name}
                    </h3>
                    <p className="font-bold mt-1 text-lg" style={{ color: colors.price }}>
                      ₹{p.price}
                    </p>
                    <p className="text-sm mt-1" style={{ color: colors.stock }}>
                      Stock: {p.stock}
                    </p>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleAdd(p)}
                      className="flex-1 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                      style={{ backgroundColor: colors.buttonPrimary }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover)}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimary)}
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => openModal(p)}
                      className="flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                      style={{ backgroundColor: colors.buttonSecondary, color: colors.buttonSecondaryText }}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK VIEW MODAL */}
        {modalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-end md:items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full md:w-2/3 lg:w-1/2 relative transform transition-transform duration-500"
              style={{ backgroundColor: colors.card }}>
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 text-3xl hover:text-gray-700 transition"
              >
                &times;
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src={selectedProduct.img || "src/assets/default.jpg"}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-cover rounded-t-2xl md:rounded-l-2xl transition-transform duration-500 hover:scale-105"
                />

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold animate-fadeInUp" style={{ color: colors.title }}>
                      {selectedProduct.name}
                    </h3>
                    <p className="font-bold mt-2 text-xl" style={{ color: colors.price }}>
                      ₹{selectedProduct.price}
                    </p>
                    <p className="mt-2" style={{ color: colors.stock }}>
                      Stock: {selectedProduct.stock}
                    </p>
                    <p className="mt-4 text-gray-600">
                      {selectedProduct.description || "Delicious bakery item!"}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAdd(selectedProduct)}
                    className="mt-6 w-full px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                    style={{ backgroundColor: colors.buttonPrimary }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonPrimary)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Animations */}
      <style>
        {`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease forwards; }

        .card-animate {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.7s ease forwards;
        }

        .card-animate:hover {
          box-shadow: ${colors.cardShadowHover};
        }
      `}
      </style>
    </>
  );
}

export default AllProduct;
