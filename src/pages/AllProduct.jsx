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









// my old page //


// /important///
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

//   const colors = {
//     background: "#FFFFF",
//     card: "#FFFFFF",
//     cardShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     cardShadowHover: "0 12px 24px rgba(0,0,0,0.2)", // 🎀 improved
//     title: "#D2691E",
//     price: "#FF6F61",
//     stock: "#6B7280",
//     buttonPrimary: "#FF6F61",
//     buttonPrimaryHover: "#FF8578",
//     buttonSecondary: "#FFD8C2",
//     buttonSecondaryText: "#D2691E",
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 min-h-screen" style={{ backgroundColor: colors.background }}>
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <h2 className="text-3xl font-bold mb-6 text-center animate-fadeInUp" style={{ color: colors.title }}>
//             All Products
//           </h2>

//           {/* SEARCH BAR */}
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

//           {/* PRODUCT CARDS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {filteredProducts.map((p, index) => (
//               <div
//                 key={p._id}
//                 className="rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 card-animate"
//                 style={{
//                   backgroundColor: colors.card,
//                   boxShadow: colors.cardShadow,
//                   animationDelay: `${index * 100}ms`,
//                 }}
//               >

//                 {/* FIXED IMAGE AREA */}
//                 <div className="w-full h-56 md:h-60 lg:h-64 overflow-hidden relative bg-gray-100 flex items-center justify-center">
//                   <img
//                     src={p.img || "src/assets/default.jpg"}
//                     alt={p.name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
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
//                       Add 
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

//         {/* QUICK VIEW MODAL */}
//         {modalOpen && selectedProduct && (
//           <div className="fixed inset-0 bg-black bg-opacity-60 flex items-end md:items-center justify-center z-50">
//             <div className="bg-white rounded-2xl shadow-2xl w-full md:w-2/3 lg:w-1/2 relative transform transition-transform duration-500"
//               style={{ backgroundColor: colors.card }}>
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
//           animation: fadeInUp 0.7s ease forwards;
//         }

//         .card-animate:hover {
//           box-shadow: ${colors.cardShadowHover};
//         }
//       `}
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
// import "../styles/allProduct.css"

// function AllProduct() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const searchRef = useRef(null);

//   // --- YOUR ORIGINAL STATE ---
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
  
//   // Loading state
//   const [isLoading, setIsLoading] = useState(true);

//   // --- DATA FETCHING ---
//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => {
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//         setTimeout(() => setIsLoading(false), 1200);
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false);
//       });
//   }, []);

//   // --- SEARCH LOGIC ---
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

//   // --- CLICK OUTSIDE LOGIC ---
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (searchRef.current && !searchRef.current.contains(e.target)) {
//         setShowSuggestions(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // --- YOUR FUNCTIONS ---
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
//     <div className="bg-[#FFFDF5] min-h-screen font-sans text-[#264653] selection:bg-[#E76F51] selection:text-white overflow-hidden">
//       <Navbar />

//       {/* Background Texture */}
//       <div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
//       {/* Animated Blob */}
//       <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#FAE1DD] rounded-full blur-[100px] opacity-40 -z-10 animate-blob"></div>
//       <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-[#E9C46A]/30 rounded-full blur-[100px] opacity-40 -z-10 animate-blob animation-delay-2000"></div>

//       <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        
//         {/* Hero Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between mb-20 relative">
//           <div className="text-left animate-fadeInUp relative z-10">
//             <span className="font-serif italic text-[#E76F51] text-2xl mb-2 block">Artisanal & Organic</span>
//             <h2 className="text-6xl md:text-8xl font-serif font-black text-[#264653] leading-[0.9] mb-6">
//               Fresh from <br/> <span className="text-[#E76F51]">the Oven.</span>
//             </h2>
//             <p className="text-[#264653]/70 text-lg max-w-md font-medium">
//               Handcrafted pastries baked with love, flour, and passion.
//             </p>
//           </div>

//           {/* Rotating Badge */}
//           <div className="hidden md:flex absolute top-0 right-0 animate-spin-slow opacity-10 pointer-events-none">
//              <svg viewBox="0 0 200 200" width="300" height="300">
//                <defs>
//                  <path id="circle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
//                </defs>
//                <text fontSize="18" fill="#264653" fontWeight="bold" letterSpacing="3">
//                  <textPath xlinkHref="#circle">
//                    FRESHLY BAKED • ORGANIC INGREDIENTS • SWEET TREATS •
//                  </textPath>
//                </text>
//              </svg>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="flex justify-center mb-20 relative z-40" ref={searchRef}>
//           <div className="w-full max-w-xl relative group animate-fadeInUp" style={{animationDelay: '100ms'}}>
//             <div className="relative flex items-center bg-[#FFFDF5] rounded-full shadow-[inset_4px_4px_8px_#d9d7d0,inset_-4px_-4px_8px_#ffffff] p-3 border border-white/50">
//               <div className="pl-4 text-[#E76F51]">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Find your craving..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full px-4 py-2 bg-transparent text-[#264653] text-lg font-medium focus:outline-none placeholder-[#264653]/40 font-serif"
//               />
//             </div>

//             {/* Suggestions */}
//             {showSuggestions && filteredProducts.length > 0 && (
//               <div className="absolute top-full left-6 right-6 mt-3 bg-white rounded-2xl shadow-[10px_10px_30px_#d1d1d1,-10px_-10px_30px_#ffffff] overflow-hidden animate-slideDown z-50">
//                 {filteredProducts.slice(0, 5).map((p) => (
//                   <div
//                     key={p._id}
//                     className="px-5 py-4 hover:bg-[#FAE1DD] cursor-pointer flex items-center gap-4 transition-colors"
//                     onClick={() => { navigate(`/product/${p._id}`, { state: p }); setSearch(""); setShowSuggestions(false); }}
//                   >
//                     <img src={p.img || "src/assets/default.jpg"} className="w-12 h-12 rounded-full object-cover border-2 border-white" alt=""/>
//                     <span className="font-bold text-[#264653] font-serif text-lg">{p.name}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Product Grid */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {[1, 2, 3, 4].map((n) => (
//               <div key={n} className="bg-white rounded-[2rem] h-[28rem] p-4 shadow-xl animate-pulse flex flex-col items-center justify-center">
//                 <div className="w-32 h-32 bg-[#FAE1DD] rounded-full mb-4 animate-bounce"></div>
//                 <div className="h-4 bg-[#FAE1DD] rounded-full w-1/2 mb-2"></div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 perspective-1000">
//             {filteredProducts.map((p, index) => (
//               <div
//                 key={p._id}
//                 className="group relative bg-white rounded-[2rem] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(231,111,81,0.2)] cursor-pointer flex flex-col items-center text-center border border-[#FAE1DD]/30 animate-fadeInUp"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Image Area */}
//                 <div className="relative w-full h-60 mb-4 flex items-center justify-center">
//                    {/* Floating Ingredients */}
//                    <span className="absolute top-1/2 left-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-16 group-hover:-translate-y-16 delay-75">🍓</span>
//                    <span className="absolute top-1/2 left-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-16 group-hover:-translate-y-12 delay-100">🍫</span>
//                    <span className="absolute top-1/2 left-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-12 group-hover:translate-y-10 delay-150">🥛</span>

//                    <img
//                     src={p.img || "src/assets/default.jpg"}
//                     alt={p.name}
//                     className="w-48 h-48 object-cover rounded-full shadow-lg z-10 transition-transform duration-500 group-hover:scale-90 group-hover:rotate-3"
//                   />
                  
//                   {/* Steam Effect */}
//                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/40 blur-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-700 rounded-full"></div>

//                   {/* Quick View Button */}
//                   <button 
//                     onClick={(e) => { e.stopPropagation(); openModal(p); }}
//                     className="absolute bottom-0 bg-white/80 backdrop-blur border border-[#E76F51]/20 text-[#E76F51] px-4 py-2 rounded-full text-sm font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E76F51] hover:text-white z-20 translate-y-4 group-hover:translate-y-0"
//                   >
//                     Quick View
//                   </button>
//                 </div>

//                 {/* Card Info */}
//                 <div className="flex-1 w-full flex flex-col">
//                    <h3 className="text-xl font-serif font-bold text-[#264653] mb-1 group-hover:text-[#E76F51] transition-colors">
//                       {p.name}
//                    </h3>
//                    <div className="w-12 h-1 bg-[#E76F51]/20 mx-auto rounded-full mb-3"></div>
                   
//                    <p className="text-[#264653]/60 text-sm font-medium line-clamp-2 mb-4 font-sans">
//                      {p.description || "Baked fresh this morning with organic ingredients."}
//                    </p>
                   
//                    <div className="mt-auto flex items-center justify-between w-full px-2">
//                       <span className="text-2xl font-serif font-bold text-[#264653]">₹{p.price}</span>
//                       <button
//                         onClick={(e) => { e.stopPropagation(); handleAdd(p); }}
//                         className="w-10 h-10 rounded-full bg-[#264653] text-white flex items-center justify-center shadow-md hover:bg-[#E76F51] hover:scale-110 transition-all duration-300 active:scale-90"
//                       >
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
//                       </button>
//                    </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* 🔮 ENHANCED PRO POPUP MODAL */}
//         {modalOpen && selectedProduct && (
//           <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
            
//             {/* Backdrop with Blur */}
//             <div 
//               className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 animate-fadeIn"
//               onClick={closeModal}
//             ></div>

//             {/* Modal Container */}
//             <div className=" model relative w-full max-w-4xl  rounded-[2rem]  overflow-hidden animate-modalSlideUp">
              
//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/90 hover:bg-red-500 text-slate-600 hover:text-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:scale-110 flex items-center justify-center group"
//               >
//                 <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>

//               <div className="flex flex-col lg:flex-row min-h-[500px]">
                
//                 {/* Left: Image Section */}
//                 <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-[#FAE1DD] via-[#FFF5F3] to-[#FCE7E4] p-8 lg:p-12 flex items-center justify-center overflow-hidden">
                  
//                   {/* Decorative Circles */}
//                   <div className="absolute top-10 left-10 w-32 h-32 bg-[#E76F51]/10 rounded-full blur-2xl animate-pulse"></div>
//                   <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#264653]/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
                  
//                   {/* Floating Ingredients in Modal */}
//                   <span className="absolute top-16 left-16 text-4xl animate-float opacity-60">🍓</span>
//                   <span className="absolute bottom-20 right-20 text-3xl animate-float-delayed opacity-60">🍫</span>
//                   <span className="absolute top-1/2 right-12 text-2xl animate-float opacity-40">🥛</span>

//                   {/* Main Image */}
//                   <div className="relative z-10 animate-zoomIn">
//                     <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white/50 transition-transform duration-500 hover:scale-105 hover:rotate-3">
//                       <img
//                         src={selectedProduct.img || "src/assets/default.jpg"}
//                         alt={selectedProduct.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
                    
//                     {/* Price Badge */}
//                     <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#E76F51] text-white px-6 py-3 rounded-full shadow-lg font-bold text-xl animate-bounceIn">
//                       ₹{selectedProduct.price}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right: Content Section */}
//                 <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                  
//                   {/* Badge */}
//                   <div className="flex items-center gap-3 mb-4 animate-slideInRight" style={{animationDelay: '100ms'}}>
//                     <span className="px-4 py-2 bg-gradient-to-r from-[#E76F51] to-[#F4A261] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md">
//                       ✨ Signature Item
//                     </span>
//                     <span className="px-4 py-2 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">
//                       {selectedProduct.stock > 0 ? `${selectedProduct.stock} Left` : "Sold Out"}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h2 className="text-4xl lg:text-5xl font-serif font-black text-[#264653] mb-4 leading-tight animate-slideInRight" style={{animationDelay: '150ms'}}>
//                     {selectedProduct.name}
//                   </h2>

//                   {/* Divider */}
//                   <div className="w-20 h-1.5 bg-gradient-to-r from-[#E76F51] to-[#F4A261] rounded-full mb-6 animate-slideInRight" style={{animationDelay: '200ms'}}></div>

//                   {/* Description */}
//                   <p className="text-[#264653]/70 text-lg leading-relaxed mb-8 font-sans animate-slideInRight" style={{animationDelay: '250ms'}}>
//                     {selectedProduct.description || "Soft, fluffy, and baked to perfection. This artisanal creation is made with premium organic ingredients and pairs wonderfully with your morning coffee or afternoon tea."}
//                   </p>

//                   {/* Features */}
//                   <div className="flex flex-wrap gap-3 mb-8 animate-slideInRight" style={{animationDelay: '300ms'}}>
//                     <span className="flex items-center gap-2 px-4 py-2 bg-[#FAE1DD] text-[#264653] rounded-full text-sm font-medium">
//                       <span>🌿</span> Organic
//                     </span>
//                     <span className="flex items-center gap-2 px-4 py-2 bg-[#FAE1DD] text-[#264653] rounded-full text-sm font-medium">
//                       <span>🔥</span> Fresh Baked
//                     </span>
//                     <span className="flex items-center gap-2 px-4 py-2 bg-[#FAE1DD] text-[#264653] rounded-full text-sm font-medium">
//                       <span>❤️</span> Handmade
//                     </span>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex flex-col sm:flex-row gap-4 mt-auto animate-slideInRight" style={{animationDelay: '350ms'}}>
//                     <button
//                       onClick={() => handleAdd(selectedProduct)}
//                       className="flex-1 py-4 px-8 rounded-2xl bg-gradient-to-r from-[#264653] to-[#2A9D8F] text-white text-lg font-bold shadow-xl shadow-[#264653]/30 hover:shadow-2xl hover:shadow-[#264653]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
//                     >
//                       <span>Add to Cart</span>
//                       <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
//                       </svg>
//                     </button>
                    
//                     <button
//                       onClick={() => { handleAdd(selectedProduct); closeModal(); }}
//                       className="py-4 px-8 rounded-2xl bg-gradient-to-r from-[#E76F51] to-[#F4A261] text-white text-lg font-bold shadow-xl shadow-[#E76F51]/30 hover:shadow-2xl hover:shadow-[#E76F51]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
//                     >
//                       <span>Buy Now</span>
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//       </main>
//       <Footer />

//       {/* CSS Animations */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Quicksand:wght@400;500;700&display=swap');

//         .font-serif { font-family: 'Playfair Display', serif; }
//         .font-sans { font-family: 'Quicksand', sans-serif; }

//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob { animation: blob 10s infinite; }
//         .animation-delay-2000 { animation-delay: 2s; }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow { animation: spin-slow 20s linear infinite; }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }

//         @keyframes fadeIn { 
//           from { opacity: 0; } 
//           to { opacity: 1; } 
//         }
//         .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }

//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideDown { animation: slideDown 0.2s ease-out forwards; }

//         /* Modal Animations */
//         @keyframes modalSlideUp {
//           0% { opacity: 0; transform: translateY(100px) scale(0.9); }
//           100% { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         .animate-modalSlideUp { animation: modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

//         @keyframes zoomIn {
//           0% { opacity: 0; transform: scale(0.5); }
//           100% { opacity: 1; transform: scale(1); }
//         }
//         .animate-zoomIn { animation: zoomIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

//         @keyframes bounceIn {
//           0% { opacity: 0; transform: translateX(-50%) scale(0); }
//           50% { transform: translateX(-50%) scale(1.1); }
//           100% { opacity: 1; transform: translateX(-50%) scale(1); }
//         }
//         .animate-bounceIn { animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s forwards; opacity: 0; }

//         @keyframes slideInRight {
//           0% { opacity: 0; transform: translateX(30px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slideInRight { animation: slideInRight 0.5s ease-out forwards; opacity: 0; }

//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(5deg); }
//         }
//         .animate-float { animation: float 4s ease-in-out infinite; }

//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-12px) rotate(-5deg); }
//         }
//         .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; animation-delay: 1s; }
//       `}</style>
//     </div>
//   );
// }

// export default AllProduct;

// import React, { useEffect, useState, useContext, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiSearch, FiShoppingBag, FiEye, FiX, FiArrowRight, FiPackage } from "react-icons/fi";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext";

// function AllProduct() {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
  
//   // Data State
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null); // For Modal
//   const [search, setSearch] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
  
//   // UI State
//   const [focusedSearch, setFocusedSearch] = useState(false);
//   const searchRef = useRef(null);

//   // Fetch Data
//   useEffect(() => {
//     axios.get("http://localhost:5000/products")
//       .then((res) => {
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // Search Logic
//   useEffect(() => {
//     if (search === "") {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((p) =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     }
//     setShowSuggestions(search !== "" && filteredProducts.length > 0);
//   }, [search, products]);

//   // Click Outside to close suggestions
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (searchRef.current && !searchRef.current.contains(e.target)) {
//         setShowSuggestions(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // --- LOGIC UPDATE HERE ---
//   const handleAdd = (p, e) => {
//     e.stopPropagation(); // Prevent opening the modal
//     addToCart(p); // 1. Add to Cart Context
//     navigate(`/product/${p._id}`, { state: p }); // 2. Navigate to Product Page
//   };

//   // --- THEME & STYLES (2025 Aesthetic) ---
//   const theme = {
//     bg: "#FDFCF8",           // Cream/Bone White
//     textMain: "#2D2424",     // Espresso
//     textSec: "#8A817C",      // Taupe
//     accent: "#E07A5F",       // Terracotta/Coral
//     accentDark: "#C66045",
//     cardBg: "#FFFFFF",
//     border: "#EAE0D5",
//   };

//   const s = {
//     page: {
//       backgroundColor: theme.bg,
//       minHeight: "100vh",
//       fontFamily: "'DM Sans', sans-serif",
//       color: theme.textMain,
//       paddingTop: "100px",
//       paddingBottom: "80px",
//     },
//     container: {
//       maxWidth: "1280px",
//       margin: "0 auto",
//       padding: "0 24px",
//     },
//     // Header Section
//     header: {
//       textAlign: "center",
//       marginBottom: "60px",
//     },
//     title: {
//       fontFamily: "'Playfair Display', serif",
//       fontSize: "3.5rem",
//       fontWeight: "700",
//       marginBottom: "10px",
//       letterSpacing: "-0.02em",
//     },
//     subtitle: {
//       color: theme.textSec,
//       fontSize: "1.1rem",
//     },
//     // Search Bar
//     searchContainer: {
//       position: "relative",
//       maxWidth: "600px",
//       margin: "40px auto 60px auto",
//       zIndex: 50,
//     },
//     inputWrapper: {
//       display: "flex",
//       alignItems: "center",
//       backgroundColor: "rgba(255,255,255,0.8)",
//       backdropFilter: "blur(12px)",
//       border: `1px solid ${focusedSearch ? theme.accent : theme.border}`,
//       borderRadius: "50px",
//       padding: "10px 10px 10px 25px",
//       boxShadow: focusedSearch 
//         ? `0 10px 30px -5px ${theme.accent}30` 
//         : "0 4px 20px -5px rgba(0,0,0,0.05)",
//       transition: "all 0.3s ease",
//     },
//     input: {
//       flex: 1,
//       border: "none",
//       background: "transparent",
//       fontSize: "1rem",
//       outline: "none",
//       color: theme.textMain,
//       paddingRight: "10px",
//     },
//     searchBtn: {
//       backgroundColor: theme.accent,
//       color: "white",
//       width: "45px",
//       height: "45px",
//       borderRadius: "50%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       border: "none",
//       cursor: "pointer",
//       boxShadow: "0 4px 12px rgba(224, 122, 95, 0.4)",
//     },
//     suggestionsBox: {
//       position: "absolute",
//       top: "110%",
//       left: "20px",
//       right: "20px",
//       backgroundColor: "white",
//       borderRadius: "20px",
//       boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//       overflow: "hidden",
//       zIndex: 100,
//     },
//     // Cards
//     card: {
//       backgroundColor: theme.cardBg,
//       borderRadius: "24px",
//       overflow: "hidden",
//       border: `1px solid ${theme.border}`,
//       cursor: "pointer",
//       position: "relative",
//     },
//     imgContainer: {
//       height: "280px",
//       overflow: "hidden",
//       position: "relative",
//       backgroundColor: "#F5F5F0",
//     },
//     img: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//       transition: "transform 0.6s ease",
//     },
//     cardContent: {
//       padding: "24px",
//     },
//     cardTitle: {
//       fontFamily: "'Playfair Display', serif",
//       fontSize: "1.4rem",
//       fontWeight: "700",
//       marginBottom: "5px",
//       whiteSpace: "nowrap",
//       overflow: "hidden",
//       textOverflow: "ellipsis",
//     },
//     priceRow: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "20px",
//     },
//     price: {
//       fontSize: "1.25rem",
//       fontWeight: "700",
//       color: theme.accent,
//     },
//     stockBadge: {
//       fontSize: "0.75rem",
//       backgroundColor: "#F3F4F6",
//       padding: "4px 10px",
//       borderRadius: "10px",
//       color: theme.textSec,
//     },
//     actionRow: {
//       display: "flex",
//       gap: "10px",
//     },
//     addBtn: {
//       flex: 1,
//       backgroundColor: theme.textMain,
//       color: "white",
//       border: "none",
//       padding: "12px",
//       borderRadius: "12px",
//       fontWeight: "bold",
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "8px",
//     },
//     viewBtn: {
//       width: "45px",
//       backgroundColor: "transparent",
//       border: `1px solid ${theme.border}`,
//       borderRadius: "12px",
//       color: theme.textMain,
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     // Modal
//     overlay: {
//       position: "fixed",
//       top: 0, left: 0, right: 0, bottom: 0,
//       backgroundColor: "rgba(0,0,0,0.4)",
//       backdropFilter: "blur(8px)",
//       zIndex: 1000,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "20px",
//     },
//     modal: {
//       backgroundColor: "white",
//       width: "100%",
//       maxWidth: "900px",
//       borderRadius: "30px",
//       overflow: "hidden",
//       boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
//       position: "relative",
//     }
//   };

//   // Animation Variants
//   const containerVar = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVar = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
//   };

//   return (
//     <>
//     <Navbar />
//     <div style={s.page}>
//       {/* CSS GRID FOR RESPONSIVENESS */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap');
        
//         .product-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//           gap: 40px;
//         }
        
//         .modal-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//         }

//         @media (max-width: 768px) {
//           .modal-grid { grid-template-columns: 1fr; }
//           .modal-img { height: 250px !important; }
//         }
//       `}</style>

     

//       <main style={s.container}>
        
//         {/* --- Header --- */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           style={s.header}
//         >
//           <h2 style={s.title}>Our Collection</h2>
//           <p style={s.subtitle}>Curated bakery delights baked fresh daily.</p>
//         </motion.div>

//         {/* --- Search Section --- */}
//         <div style={s.searchContainer} ref={searchRef}>
//           <div style={s.inputWrapper}>
//             <FiSearch size={20} color={theme.textSec} />
//             <input
//               style={s.input}
//               placeholder="Search for cakes, pastries..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onFocus={() => setFocusedSearch(true)}
//               onBlur={() => setFocusedSearch(false)}
//             />
//             <motion.button 
//               whileHover={{ scale: 1.1 }} 
//               whileTap={{ scale: 0.9 }}
//               style={s.searchBtn}
//             >
//               <FiArrowRight />
//             </motion.button>
//           </div>

//           <AnimatePresence>
//             {showSuggestions && (
//               <motion.div 
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 style={s.suggestionsBox}
//               >
//                 {filteredProducts.slice(0, 5).map((p) => (
//                   <div
//                     key={p._id}
//                     onClick={() => {
//                       navigate(`/product/${p._id}`, { state: p });
//                     }}
//                     style={{ padding: "15px 25px", cursor: "pointer", borderBottom: `1px solid ${theme.border}`, display: "flex", alignItems: "center", gap: "10px" }}
//                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#FAF9F6"}
//                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}
//                   >
//                     <img src={p.img} alt="" style={{ width: "30px", height: "30px", borderRadius: "6px", objectFit: "cover" }} />
//                     <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>{p.name}</span>
//                   </div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* --- Product Grid --- */}
//         <motion.div 
//           variants={containerVar}
//           initial="hidden"
//           animate="show"
//           className="product-grid"
//         >
//           {filteredProducts.map((p) => (
//             <motion.div
//               key={p._id}
//               variants={itemVar}
//               whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
//               style={s.card}
//               // Clicking the card itself opens Modal (Quick View)
//               onClick={() => setSelectedProduct(p)}
//             >
//               {/* Image */}
//               <div style={s.imgContainer}>
//                 <motion.img 
//                   src={p.img || "/assets/default.jpg"} 
//                   alt={p.name} 
//                   style={s.img}
//                   whileHover={{ scale: 1.1 }} 
//                 />
//                 <div style={{ position: "absolute", top: "15px", right: "15px" }}>
//                     {p.stock < 5 && (
//                       <span style={{ backgroundColor: "rgba(255,255,255,0.9)", padding: "5px 10px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: "bold", color: theme.accent, display: "flex", alignItems: "center", gap: "5px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
//                         <FiPackage /> Low Stock
//                       </span>
//                     )}
//                 </div>
//               </div>

//               {/* Content */}
//               <div style={s.cardContent}>
//                 <h3 style={s.cardTitle}>{p.name}</h3>
                
//                 <div style={s.priceRow}>
//                   <span style={s.price}>₹{p.price}</span>
//                   <span style={s.stockBadge}>{p.stock} left</span>
//                 </div>

//                 <div style={s.actionRow}>
//                   {/* ADD BUTTON: Adds to Cart & Redirects */}
//                   <motion.button
//                     whileHover={{ scale: 1.02, backgroundColor: theme.accent }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={(e) => handleAdd(p, e)}
//                     style={s.addBtn}
//                   >
//                     <FiShoppingBag /> Add & View
//                   </motion.button>
                  
//                   {/* VIEW BUTTON: Opens Modal */}
//                   <motion.button
//                     whileHover={{ scale: 1.05, borderColor: theme.textMain }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={(e) => { e.stopPropagation(); setSelectedProduct(p); }}
//                     style={s.viewBtn}
//                     title="Quick View"
//                   >
//                     <FiEye size={18} />
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </main>

//       {/* --- MODERN MODAL (Quick View) --- */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             style={s.overlay}
//             onClick={() => setSelectedProduct(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 50 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 50 }}
//               onClick={(e) => e.stopPropagation()}
//               style={s.modal}
//               className="modal-grid"
//             >
//               <div className="modal-img" style={{ height: "100%", backgroundColor: "#F0F0F0" }}>
//                 <img 
//                   src={selectedProduct.img || "/assets/default.jpg"} 
//                   alt={selectedProduct.name} 
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }} 
//                 />
//               </div>

//               <div style={{ padding: "40px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//                 <button 
//                   onClick={() => setSelectedProduct(null)}
//                   style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", cursor: "pointer", padding: "5px" }}
//                 >
//                   <FiX size={24} color="#999" />
//                 </button>

//                 <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: "0 0 10px 0", lineHeight: 1.1 }}>
//                   {selectedProduct.name}
//                 </h2>
//                 <p style={{ fontSize: "1.5rem", color: theme.accent, fontWeight: "bold", marginBottom: "20px" }}>
//                   ₹{selectedProduct.price}
//                 </p>

//                 <p style={{ color: theme.textSec, lineHeight: "1.6", marginBottom: "30px" }}>
//                   {selectedProduct.description || "Freshly baked with premium ingredients. Perfect for any occasion, this delight offers a balance of sweetness and texture that melts in your mouth."}
//                 </p>

//                 <div style={{ display: "flex", gap: "15px", marginTop: "auto" }}>
//                   <motion.button
//                     whileHover={{ scale: 1.02, backgroundColor: "#3E3430" }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={(e) => { handleAdd(selectedProduct, e); setSelectedProduct(null); }}
//                     style={{ ...s.addBtn, padding: "16px", fontSize: "1rem" }}
//                   >
//                     Add to Cart & Go to Page
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

      
//     </div>
//     <Footer />
//     </>);
// }

// export default AllProduct;




import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, FiShoppingBag, FiEye, FiX, FiArrowRight, FiStar, FiHeart 
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext";

const BASE_URL = import.meta.env.VITE_API_URL;

function AllProduct() {
  // =================================================================
  // 1. LOGIC (UNCHANGED)
  // =================================================================
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  // Data State
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [focusedSearch, setFocusedSearch] = useState(false);
  
  const searchRef = useRef(null);

  // Fetch Data
  useEffect(() => {
    axios.get(`${BASE_URL}/products`)
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Search Logic
  useEffect(() => {
    if (search === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, products]);

  // Handler
  const handleAdd = (p, e) => {
    e.stopPropagation();
    addToCart(p);
    navigate(`/product/${p._id}`, { state: p });
  };

  // =================================================================
  // 2. NEW STYLES & ANIMATIONS (2025 THEME)
  // =================================================================
  
  const theme = {
    bg: "#FAFAF9",           // Warm Stone
    textMain: "#1C1917",     // Dark Charcoal
    textSec: "#57534E",      // Muted Earth
    accent: "#EA580C",       // Burnt Orange / Terracotta
    cardBg: "#FFFFFF",
    gold: "#F59E0B",
  };

  // Animation Variants
  const gridVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVars = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  const hoverRevealVars = {
    rest: { y: 20, opacity: 0 },
    hover: { 
      y: 0, opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const s = {
    page: {
      backgroundColor: theme.bg,
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
      color: theme.textMain,
      position: "relative",
      overflowX: "hidden",
    },
    container: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "120px 20px 100px 20px",
      position: "relative",
      zIndex: 2,
    },
    // Background Decoration
    gradientBlur: {
      position: "absolute",
      width: "600px", height: "600px",
      borderRadius: "50%",
      filter: "blur(100px)",
      zIndex: 0,
      opacity: 0.6,
    },
    // Search Area
    searchWrapper: {
      maxWidth: "600px",
      margin: "0 auto 60px auto",
      position: "relative",
    },
    searchBar: {
      display: "flex", alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.5)",
      borderRadius: "25px",
      padding: "15px 25px",
      boxShadow: focusedSearch 
        ? "0 20px 40px -10px rgba(234, 88, 12, 0.2)" 
        : "0 10px 25px -5px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
    },
    input: {
      flex: 1, border: "none", background: "transparent", outline: "none",
      fontSize: "1.1rem", color: theme.textMain, marginLeft: "15px"
    },
    // Card
    card: {
      backgroundColor: theme.cardBg,
      borderRadius: "24px",
      overflow: "hidden",
      cursor: "pointer",
      position: "relative",
      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
      transition: "box-shadow 0.3s ease",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    imgContainer: {
      height: "320px",
      position: "relative",
      overflow: "hidden",
    },
    overlayButtons: {
      position: "absolute",
      bottom: "15px",
      left: "15px",
      right: "15px",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
    },
    actionBtn: {
      flex: 1,
      padding: "12px",
      borderRadius: "15px",
      border: "none",
      fontSize: "0.9rem",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      backdropFilter: "blur(5px)",
    },
    cardBody: {
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #F5F5F4",
    },
    // Modal
    modalOverlay: {
      position: "fixed", inset: 0, zIndex: 9999,
      backgroundColor: "rgba(28, 25, 23, 0.6)",
      backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"
    },
    modalContent: {
      backgroundColor: "white",
      width: "100%", maxWidth: "950px",
      borderRadius: "30px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)",
    }
  };

  return (
    <>
      <Navbar />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap');
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 35px;
        }
        
        @media (max-width: 800px) {
          .modal-flex { flex-direction: column !important; height: 90vh; overflow-y: auto; }
          .modal-img { height: 300px !important; }
        }
      `}</style>

      <div style={s.page}>
        {/* Animated Blobs Background */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity }}
          style={{ ...s.gradientBlur, top: "-10%", left: "-10%", background: "#FFE4E6" }} 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity }}
          style={{ ...s.gradientBlur, bottom: "10%", right: "-10%", background: "#FEF3C7" }} 
        />

        <div style={s.container}>
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", margin: 0, color: theme.textMain }}>
              Artisan <span style={{ color: theme.accent, fontStyle: "italic" }}>Bakery</span>
            </h2>
            <p style={{ color: theme.textSec, fontSize: "1.1rem", marginTop: "10px" }}>
              Freshly baked with passion, served with love.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div style={s.searchWrapper}>
            <div style={s.searchBar}>
              <FiSearch size={22} color={theme.accent} />
              <input
                style={s.input}
                placeholder="Search for cakes, croissants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setFocusedSearch(true)}
                onBlur={() => setFocusedSearch(false)}
              />
            </div>
          </div>

          {/* Product Grid */}
          <motion.div 
            className="product-grid"
            variants={gridVars}
            initial="hidden"
            animate="show"
          >
            {filteredProducts.map((p) => (
              <motion.div
                key={p._id}
                variants={cardVars}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onClick={() => setSelectedProduct(p)}
                style={s.card}
              >
                {/* Image Area */}
                <div style={s.imgContainer}>
                  <motion.img 
                    src={p.img} 
                    alt={p.name}
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
                    transition={{ duration: 0.6 }}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  
                  {/* Top Right Tag */}
                  <div style={{ position: "absolute", top: "15px", right: "15px", background: "rgba(255,255,255,0.9)", padding: "6px 10px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                    <FiStar fill={theme.gold} stroke="none" /> 4.9
                  </div>

                  {/* HOVER REVEAL BUTTONS */}
                  <motion.div 
                    variants={hoverRevealVars}
                    style={s.overlayButtons}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: theme.textMain, color: "white" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleAdd(p, e)}
                      style={{ ...s.actionBtn, backgroundColor: "white", color: theme.textMain }}
                    >
                      <FiShoppingBag /> Add
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: theme.accent, color: "white" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(p); }}
                      style={{ ...s.actionBtn, backgroundColor: "white", color: theme.textMain }}
                    >
                      <FiEye /> View
                    </motion.button>
                  </motion.div>
                </div>

                {/* Card Text */}
                <div style={s.cardBody}>
                  <div style={{ overflow: "hidden" }}>
                    <h3 style={{ fontFamily: "'Playfair Display'", fontSize: "1.3rem", margin: "0 0 5px 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "180px" }}>{p.name}</h3>
                    <span style={{ fontSize: "0.85rem", color: theme.textSec }}>Freshly Baked</span>
                  </div>
                  <span style={{ fontSize: "1.3rem", fontWeight: "bold", color: theme.accent }}>LKR{p.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Modal - Smooth Entrance */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={s.modalOverlay}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="modal-flex"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={s.modalContent}
            >
              {/* Left Image */}
              <div className="modal-img" style={{ flex: 1, position: "relative" }}>
                <img src={selectedProduct.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
              </div>

              {/* Right Content */}
              <div style={{ flex: 1.2, padding: "50px", display: "flex", flexDirection: "column", position: "relative" }}>
                <button onClick={() => setSelectedProduct(null)} style={{ position: "absolute", top: "25px", right: "25px", border: "none", background: "transparent", cursor: "pointer" }}>
                   <FiX size={24} color="#999" />
                </button>

                <span style={{ color: theme.accent, fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.8rem" }}>Signature Selection</span>
                
                <h2 style={{ fontFamily: "'Playfair Display'", fontSize: "3rem", margin: "10px 0 20px 0", lineHeight: "1.1" }}>
                  {selectedProduct.name}
                </h2>
                
                <h3 style={{ fontSize: "2rem", margin: "0 0 30px 0", color: theme.textMain }}>
                  LKR{selectedProduct.price} <span style={{ fontSize: "1rem", color: "#999", fontWeight: "normal" }}>/ piece</span>
                </h3>

                <p style={{ color: theme.textSec, lineHeight: "1.8", fontSize: "1.05rem", marginBottom: "40px" }}>
                  {selectedProduct.description || "Hand-kneaded dough, fermented for 48 hours, and baked in our stone ovens. A perfect blend of crispy texture and soft, airy crumb."}
                </p>

                <div style={{ marginTop: "auto", display: "flex", gap: "15px" }}>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(234, 88, 12, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => { handleAdd(selectedProduct, e); setSelectedProduct(null); }}
                    style={{
                      flex: 1, background: theme.accent, color: "white", border: "none",
                      padding: "18px", borderRadius: "16px", fontSize: "1rem", fontWeight: "bold",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}
                  >
                    <FiShoppingBag /> Add to Cart
                  </motion.button>
                  
                  <motion.button
                     whileHover={{ scale: 1.02, backgroundColor: "#F5F5F4" }}
                     whileTap={{ scale: 0.98 }}
                     style={{
                       width: "60px", background: "white", border: "1px solid #E5E5E5",
                       borderRadius: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                     }}
                  >
                    <FiHeart size={22} color={theme.textMain} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default AllProduct;