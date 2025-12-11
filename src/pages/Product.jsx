// // import { useLocation, useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import "./Product.css";
// // import { useState } from "react";

// // function Product() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const product = location.state; // received product data

// //   // ✅ Cart state (temporary for frontend only)
// //   const [cart, setCart] = useState([]);

// //   // ✅ Handle Buy Now → directly go to cart page
// //   const handleBuyNow = () => {
// //     navigate("/shoppingcart", { state: { products: [product] } }); // 👈 send as array
// //   };

// //   // ✅ Handle Add to Cart → add product in local cart
// //   const handleAddToCart = () => {
// //     const updatedCart = [...cart, product];
// //     setCart(updatedCart);

// //     // navigate to cart page with multiple products
// //     navigate("/shoppingcart", { state: { products: updatedCart } });
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <div className="product-page">
// //         <div className="product-card">
// //           <img
// //             src={product?.img || "src/assets/default.jpg"}
// //             alt={product?.title || "Product"}
// //             className="product-img"
// //           />
// //         </div>

// //         <div className="list">
// //           <h3 className="product-title">{product?.title || "Unknown Product"}</h3>
// //           <p className="product-price">₹{product?.price || "N/A"}</p>

// //           <div className="buttons">
// //             <button className="buy-btn" onClick={handleBuyNow}>
// //               Buy Now
// //             </button>
// //             <button className="cart-btn" onClick={handleAddToCart}>
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default Product;



// // import { useLocation, useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import "./Product.css";
// // import { useContext } from "react";
// // import { CartContext } from "../pages/CartContext.jsx";

// // function Product() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { addToCart } = useContext(CartContext);
// //   const product = location.state; // product data from Home

// //   if (!product) return <p>Product not found!</p>;

// //   const handleAddToCart = () => {
// //     addToCart(product); // Add to global cart
// //     navigate("/shoppingcart"); // Go to cart page
// //   };

// //   const handleBuyNow = () => {
// //     addToCart(product); // Add to cart first
// //     navigate("/shoppingcart");
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="product-page">
// //         <div className="product-card">
// //           <img src={product.img || "src/assets/default.jpg"} alt={product.title} />
// //         </div>
// //         <div className="list">
// //           <h3>{product.title}</h3>
// //           <p>₹{product.price}</p>
// //           <p>Stock: {product.stock}</p>
// //           <div className="buttons">
// //             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
// //             <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Product;



// // import { useParams } from "react-router-dom";
// // import { useEffect, useState, useContext } from "react";
// // import { CartContext } from "../pages/CartContext.jsx";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import axios from "axios";

// // function Product() {
// //   const { id } = useParams();
// //   const { addToCart } = useContext(CartContext);
// //   const [product, setProduct] = useState(null);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:5000/products/${id}`);
// //         setProduct(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchProduct();
// //   }, [id]);

// //   if (!product) return <p>Loading product...</p>;

// //   const handleAddToCart = () => {
// //     addToCart(product);
// //   };

// //   const handleBuyNow = () => {
// //     addToCart(product);
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="product-page">
// //         <div className="product-card">
// //           <img src={product.img || "src/assets/default.jpg"} alt={product.title} />
// //         </div>
// //         <div className="list">
// //           <h3>{product.title}</h3>
// //           <p>₹{product.price}</p>
// //           <p>Stock: {product.stock}</p>
// //           <div className="buttons">
// //             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
// //             <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Product;



// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useContext } from "react";
// import { CartContext } from "../pages/CartContext.jsx";

// function Product() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const product = location.state; // Home.jsx la send pannina product

// //   if (!product) return <p>Product not found!</p>;

// // const GetSingleProduct =() =>  {
// // //  API get
// // }
//  // 🔹 Fetch single product from backend
//  useEffect(() => {
//   const getSingleProduct = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/products/${id}`);
//       setProduct(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching product:", err);
//       setLoading(false);
//     }
//   };
//   getSingleProduct();
// }, [id]);



//   const handleAddToCart = () => {
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   const handleBuyNow = () => {
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="product-page">
//         <div className="product-card">
//           <img src={product.img || "src/assets/default.jpg"} alt={product.title} />
//         </div>
//         <div className="list">
//           <h3>{product.title}</h3>
//           <p>₹{product.price}</p>
//           <p>Stock: {product.stock}</p>
//           <div className="buttons">
//             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
//             <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Product;


// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import axios from "axios";

// function Product() {
//   const { id } = useParams(); // get product ID from URL
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch single product from backend
//   useEffect(() => {
//     const getSingleProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setLoading(false);
//       }
//     };
//     getSingleProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   const handleBuyNow = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   if (loading) return <p>Loading product...</p>;
//   if (!product) return <p>Product not found!</p>;

//   return (
//     <>
//      <Navbar />
//       <div className="product-page">
//         <div className="product-card">
//           <img src={product.img || "src/assets/default.jpg"} alt={product.name} />
//         </div>
//         <div className="list">
//           <h3>{product.name}</h3>
//           <p>₹{product.price}</p>
//           <p>Stock: {product.stock}</p>
//           <p>{product.description}</p>
//           <div className="buttons">
//             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
//             <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Product;


// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import axios from "axios";

// function Product() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getSingleProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };
//     getSingleProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   if (loading) return <p className="text-center mt-20 text-xl">Loading product...</p>;
//   if (!product) return <p className="text-center mt-20 text-xl">Product not found!</p>;

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br><br></br>
//       <div className="max-w-6xl mx-auto my-12 p-4 grid md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div className="flex justify-center items-center bg-white shadow-lg rounded-xl p-6">
//           <img
//             src={product.img || "/assets/default.jpg"}
//             alt={product.name}
//             className="rounded-xl max-h-96 object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-4xl font-bold text-yellow-700 mb-4">{product.name}</h1>
//             <p className="text-xl font-semibold text-gray-800 mb-2">₹{product.price}</p>
//             <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
//             <p className="text-gray-700 mb-6">{product.description}</p>
//           </div>

//           <div className="flex flex-col md:flex-row gap-4">
//             <button
//               onClick={handleAddToCart}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={handleAddToCart}
//               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Product;















// // Product.jsx
// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext.jsx";
// import { AuthContext } from "../contexts/AuthContext.jsx";

// // Chat-style Review Component
// function ProductReview({ productId }) {
//   const { user, token } = useContext(AuthContext) || {};
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [error, setError] = useState("");

//   // Fetch reviews
//   useEffect(() => {
//     if (!productId) return;
//     const fetchReviews = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/reviews/${productId}`
//         );
//         setReviews(Array.isArray(res.data) ? res.data : []);
//       } catch (err) {
//         console.error(err);
//         setReviews([]);
//       }
//     };
//     fetchReviews();
//   }, [productId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) {
//       setError("Please log in to submit a review.");
//       return;
//     }
//     if (!rating || !comment) {
//       setError("Please provide rating and comment.");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/reviews",
//         { productId, rating, comment },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setReviews([res.data.review, ...reviews]);
//       setRating(0);
//       setComment("");
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Failed to submit review.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
//       <h3 className="text-2xl font-bold mb-4 text-center text-yellow-700">
//         Customer Reviews
//       </h3>

//       {/* Review Form */}
//       {user ? (
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-3 mb-6"
//         >
//           <div className="flex items-center gap-2 text-xl">
//             <span>Rating:</span>
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 className={`cursor-pointer ${
//                   star <= rating ? "text-yellow-400" : "text-gray-300"
//                 }`}
//                 onClick={() => setRating(star)}
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//           <textarea
//             placeholder="Write your review..."
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             className="border border-gray-300 rounded-md p-2 resize-none min-h-[80px]"
//           />
//           <button
//             type="submit"
//             className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
//           >
//             Submit Review
//           </button>
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//         </form>
//       ) : (
//         <p className="text-center text-gray-500">
//           Please log in to write a review.
//         </p>
//       )}

//       {/* Reviews List */}
//       <div className="flex flex-col gap-4">
//         {reviews.length === 0 && (
//           <p className="text-gray-500 text-center">No reviews yet.</p>
//         )}
//         {reviews.map((rev) => (
//           <div key={rev._id} className="p-3 rounded-lg bg-yellow-50 shadow">
//             <div className="flex justify-between items-center mb-1">
//               <h4 className="font-semibold text-lg">
//                 {rev.user?.name || "User"}
//               </h4>
//               <div className="text-yellow-400">
//                 {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
//               </div>
//             </div>
//             <p className="text-gray-700">{rev.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Product() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };
//     getProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;
//   if (!product) return <p className="text-center mt-20 text-xl">Product not found!</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-6xl mx-auto my-12 p-4 grid md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div className="flex justify-center items-center bg-white shadow-lg rounded-xl p-6">
//           <img
//             src={product.img || "/assets/default.jpg"}
//             alt={product.name}
//             className="rounded-xl max-h-96 object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-4xl font-bold text-yellow-700 mb-4">{product.name}</h1>
//             <p className="text-xl font-semibold text-gray-800 mb-2">₹{product.price}</p>
//             <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
//             <p className="text-gray-700 mb-6">{product.description}</p>
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <button
//               onClick={handleAddToCart}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={() => navigate("/checkout")}
//               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       {product && <ProductReview productId={product._id} />}

//       <Footer />
//     </>
//   );
// }

// export default Product;

// // Product.jsx
// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext.jsx";
// import { AuthContext } from "../contexts/AuthContext.jsx";

// // --- Sub-components for Icons (to keep main code clean) ---
// const StarIcon = ({ filled, onClick, className }) => (
//   <svg
//     onClick={onClick}
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill={filled ? "currentColor" : "none"}
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={`w-6 h-6 transition-colors duration-200 ${className}`}
//   >
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//   </svg>
// );

// const CartIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//     <circle cx="9" cy="21" r="1" />
//     <circle cx="20" cy="21" r="1" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
//   </svg>
// );

// const CreditCardIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//     <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
//     <line x1="1" y1="10" x2="23" y2="10" />
//   </svg>
// );

// // --- Components ---

// function ProductReview({ productId }) {
//   const { user, token } = useContext(AuthContext) || {};
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [error, setError] = useState("");
//   const [hoverRating, setHoverRating] = useState(0); // New state for star hover effect

//   useEffect(() => {
//     if (!productId) return;
//     const fetchReviews = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/reviews/${productId}`);
//         setReviews(Array.isArray(res.data) ? res.data : []);
//       } catch (err) {
//         console.error(err);
//         setReviews([]);
//       }
//     };
//     fetchReviews();
//   }, [productId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) {
//       setError("Please log in to submit a review.");
//       return;
//     }
//     if (!rating || !comment) {
//       setError("Please provide rating and comment.");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/reviews",
//         { productId, rating, comment },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setReviews([res.data.review, ...reviews]);
//       setRating(0);
//       setComment("");
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Failed to submit review.");
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto my-16 px-4">
//       <div className="border-t border-gray-200 mb-12"></div>
      
//       <div className="grid md:grid-cols-3 gap-10">
//         {/* Left Column: Summary & Form */}
//         <div className="md:col-span-1">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h3>
//           <p className="text-gray-500 mb-6 text-sm">Share your thoughts with other customers.</p>

//           {user ? (
//             <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
//                 <div className="flex gap-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <StarIcon
//                       key={star}
//                       className={`cursor-pointer ${
//                         star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                       filled={star <= (hoverRating || rating)}
//                       onClick={() => setRating(star)}
//                       // Simple hover logic can be added via onMouseEnter/Leave if desired
//                     />
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
//                 <textarea
//                   placeholder="What did you like or dislike?"
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none min-h-[100px] text-sm transition-shadow"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-800 transition active:scale-95"
//               >
//                 Submit Review
//               </button>
//               {error && <p className="text-red-500 text-xs mt-3 text-center">{error}</p>}
//             </form>
//           ) : (
//             <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl text-center">
//               <p className="text-yellow-800 text-sm font-medium">Please log in to write a review.</p>
//             </div>
//           )}
//         </div>

//         {/* Right Column: Review List */}
//         <div className="md:col-span-2 space-y-6">
//           {reviews.length === 0 && (
//             <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
//               <p className="text-gray-400 font-medium">No reviews yet. Be the first!</p>
//             </div>
//           )}

//           {reviews.map((rev) => {
//             const initial = rev.user?.name ? rev.user.name.charAt(0).toUpperCase() : "U";
//             return (
//               <div key={rev._id} className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                 <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
//                   {initial}
//                 </div>
//                 <div className="flex-grow">
//                   <div className="flex justify-between items-start mb-2">
//                     <div>
//                       <h4 className="font-bold text-gray-900">{rev.user?.name || "User"}</h4>
//                       <div className="flex text-yellow-400 text-sm mt-1">
//                         {[...Array(5)].map((_, i) => (
//                           <span key={i}>{i < rev.rating ? "★" : <span className="text-gray-300">★</span>}</span>
//                         ))}
//                       </div>
//                     </div>
//                     <span className="text-xs text-gray-400">Verified Buyer</span>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed">{rev.comment}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Product() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };
//     getProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
//     </div>
//   );
  
//   if (!product) return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-gray-500">
//       <h2 className="text-2xl font-bold">Product not found</h2>
//       <button onClick={() => navigate("/")} className="mt-4 text-yellow-600 underline">Go Home</button>
//     </div>
//   );

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <Navbar />
      
//       <div className="max-w-6xl mx-auto pt-10 pb-10 px-4 sm:px-6 lg:px-8">
//         {/* Breadcrumb styled placeholder */}
//         <div className="text-sm text-gray-400 mb-8">
//           <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/')}>Home</span> / 
//           <span className="text-gray-800 font-medium ml-1">{product.name}</span>
//         </div>

//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
            
//             {/* Product Image Section */}
//             <div className="p-8 lg:p-12 flex items-center justify-center bg-gray-100">
//               <div className="relative group w-full max-w-md">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
//                 <img
//                   src={product.img || "/assets/default.jpg"}
//                   alt={product.name}
//                   className="relative w-full h-auto object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Product Details Section */}
//             <div className="p-8 lg:p-12 flex flex-col justify-center">
//               <div className="mb-2">
//                  <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                     {product.stock > 0 ? "In Stock" : "Out of Stock"}
//                  </span>
//               </div>
              
//               <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
//                 {product.name}
//               </h1>

//               <div className="flex items-baseline mb-6">
//                 <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
//                 <span className="ml-2 text-sm text-gray-500">inclusive of all taxes</span>
//               </div>

//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 {product.description}
//               </p>

//               {/* Controls */}
//               <div className="flex flex-col sm:flex-row gap-4 mt-auto">
//                 <button
//                   onClick={handleAddToCart}
//                   disabled={product.stock <= 0}
//                   className={`flex-1 flex items-center justify-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition transform active:scale-95 ${
//                     product.stock > 0 
//                     ? "bg-yellow-500 hover:bg-yellow-600 text-white shadow-yellow-500/30" 
//                     : "bg-gray-300 cursor-not-allowed text-gray-500"
//                   }`}
//                 >
//                   <CartIcon />
//                   Add to Cart
//                 </button>
                
//                 <button
//                   onClick={() => product.stock > 0 && navigate("/checkout")}
//                   disabled={product.stock <= 0}
//                   className={`flex-1 flex items-center justify-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition transform active:scale-95 ${
//                     product.stock > 0
//                     ? "bg-gray-900 hover:bg-gray-800 text-white shadow-gray-900/30"
//                     : "bg-gray-300 cursor-not-allowed text-gray-500"
//                   }`}
//                 >
//                   <CreditCardIcon />
//                   Buy Now
//                 </button>
//               </div>

//               <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
//                 <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
//                 <span>Secure checkout</span>
//                 <span className="mx-2">•</span>
//                 <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
//                 <span>{product.stock} Units left</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       {product && <ProductReview productId={product._id} />}

//       <Footer />
//     </div>
//   );
// }

// export default Product;



// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CartContext } from "../pages/CartContext.jsx";
// import { AuthContext } from "../contexts/AuthContext.jsx";

// // --- ICONS ---
// const StarIcon = ({ filled, onClick, className }) => (
//   <svg
//     onClick={onClick}
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill={filled ? "currentColor" : "none"}
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={`w-5 h-5 transition-all duration-200 ${className}`}
//   >
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//   </svg>
// );

// const CartIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//   </svg>
// );

// // --- REVIEW SECTION COMPONENT ---
// function ProductReview({ productId }) {
//   const { user, token } = useContext(AuthContext) || {};
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!productId) return;
//     const fetchReviews = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/reviews/${productId}`);
//         setReviews(Array.isArray(res.data) ? res.data : []);
//       } catch (err) {
//         console.error(err);
//         setReviews([]);
//       }
//     };
//     fetchReviews();
//   }, [productId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) return setError("Please log in to submit a review.");
//     if (!rating || !comment) return setError("Please provide rating and comment.");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/reviews",
//         { productId, rating, comment },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setReviews([res.data.review, ...reviews]);
//       setRating(0);
//       setComment("");
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to submit review.");
//     }
//   };

//   return (
//     <div className="mt-24">
//       <h3 className="text-3xl font-serif text-[#6A4E3B] mb-8 border-b border-[#E8C7BE] pb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
//         Connoisseur Reviews
//       </h3>
      
//       <div className="grid md:grid-cols-12 gap-10">
//         {/* Form Section */}
//         <div className="md:col-span-4">
//           <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(106,78,59,0.1)] border border-[#E8C7BE]/30 sticky top-24">
//             <h4 className="text-xl font-bold text-[#6A4E3B] mb-2">Write a Review</h4>
//             <p className="text-sm text-[#8C7B6F] mb-6">How was your experience with this delicacy?</p>

//             {user ? (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-2">Rating</label>
//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <div 
//                         key={star} 
//                         onMouseEnter={() => setHoverRating(star)}
//                         onMouseLeave={() => setHoverRating(0)}
//                       >
//                         <StarIcon
//                           className={`cursor-pointer transform transition-transform hover:scale-110 ${
//                             star <= (hoverRating || rating) ? "text-[#D6A85B] fill-[#D6A85B]" : "text-gray-300"
//                           }`}
//                           filled={star <= (hoverRating || rating)}
//                           onClick={() => setRating(star)}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-2">Review</label>
//                   <textarea
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     placeholder="Tell us about the taste, texture..."
//                     className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#D6A85B] transition-all text-sm min-h-[120px]"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#6A4E3B] text-white font-bold py-3 px-4 rounded-full hover:bg-[#563e2d] transition-all shadow-lg"
//                 >
//                   Post Review
//                 </button>
//                 {error && <p className="text-red-500 text-xs text-center">{error}</p>}
//               </form>
//             ) : (
//               <div className="bg-[#FFF8EC] border border-[#D6A85B] p-4 rounded-xl text-center">
//                 <p className="text-[#6A4E3B] text-sm">Please log in to share your thoughts.</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* List Section */}
//         <div className="md:col-span-8 space-y-6">
//           {reviews.length === 0 && (
//             <div className="flex flex-col items-center justify-center h-48 bg-white/50 rounded-2xl border border-dashed border-[#E8C7BE]">
//               <p className="text-[#8C7B6F]">No reviews yet. Be the first to taste and tell!</p>
//             </div>
//           )}

//           {reviews.map((rev) => (
//             <motion.div 
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               key={rev._id} 
//               className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex gap-5"
//             >
//               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D6A85B] text-white flex items-center justify-center font-serif font-bold text-xl">
//                 {rev.user?.name?.charAt(0).toUpperCase() || "G"}
//               </div>
//               <div>
//                 <div className="flex items-center gap-3 mb-1">
//                   <h4 className="font-bold text-[#6A4E3B]">{rev.user?.name || "Guest"}</h4>
//                   <div className="flex text-[#D6A85B] text-xs">
//                     {[...Array(5)].map((_, i) => (
//                       <StarIcon key={i} className="w-3 h-3" filled={i < rev.rating} />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">{rev.comment}</p>
//                 <span className="text-xs text-gray-400 mt-2 block">{new Date(rev.createdAt).toLocaleDateString()}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- MAIN PRODUCT COMPONENT ---
// function Product() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart"); // Optional: Remove this if you want them to stay on page
//   };

//   if (loading) return (
//     <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D6A85B]"></div>
//     </div>
//   );

//   if (!product) return (
//     <div className="min-h-screen bg-[#FFF8EC] flex flex-col items-center justify-center text-[#6A4E3B]">
//       <h2 className="text-3xl font-serif mb-4">Delicacy Not Found</h2>
//       <button onClick={() => navigate("/")} className="text-[#D6A85B] hover:underline">Return to Bakery</button>
//     </div>
//   );

//   return (
//     <div className="bg-[#FFF8EC] min-h-screen font-sans text-[#6A4E3B]">
//       <Navbar />
      
//       <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
//         {/* Breadcrumbs */}
//         <nav className="text-sm text-[#8C7B6F] mb-10 flex items-center gap-2">
//           <span className="cursor-pointer hover:text-[#D6A85B] transition-colors" onClick={() => navigate('/')}>Home</span> 
//           <span className="text-[#D6A85B]">•</span>
//           <span className="cursor-pointer hover:text-[#D6A85B] transition-colors" onClick={() => navigate('/allproduct')}>Menu</span>
//           <span className="text-[#D6A85B]">•</span>
//           <span className="font-semibold text-[#6A4E3B]">{product.name}</span>
//         </nav>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
//           {/* LEFT: Image Section (Sticky) */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="h-fit"
//           >
//             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white aspect-square group">
//               {/* Stock Tag */}
//               <div className="absolute top-6 left-6 z-10">
//                 {product.stock > 0 ? (
//                   <span className="bg-white/90 backdrop-blur-md text-[#6A4E3B] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center">
//                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> In Stock
//                   </span>
//                 ) : (
//                   <span className="bg-[#6A4E3B] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
//                     Sold Out
//                   </span>
//                 )}
//               </div>

//               <img
//                 src={product.img || "/assets/default.jpg"}
//                 alt={product.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT: Details Section */}
//           <motion.div 
//              initial={{ opacity: 0, x: 20 }}
//              animate={{ opacity: 1, x: 0 }}
//              transition={{ duration: 0.6, delay: 0.2 }}
//              className="flex flex-col justify-center"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#6A4E3B] leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
//               {product.name}
//             </h1>

//             <div className="flex items-end gap-4 mb-8">
//               <span className="text-3xl font-medium text-[#D6A85B]">₹{product.price}</span>
//               <span className="text-sm text-[#8C7B6F] mb-1">per unit / inclusive of tax</span>
//             </div>

//             <div className="w-full h-[1px] bg-[#E8C7BE]/50 mb-8"></div>

//             <div className="mb-8">
//               <h3 className="text-sm font-bold uppercase tracking-widest text-[#6A4E3B] mb-3">Description</h3>
//               <p className="text-lg text-gray-600 leading-relaxed font-light">
//                 {product.description || "Handcrafted with the finest organic ingredients, this delight offers a symphony of flavors perfect for any occasion."}
//               </p>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-4">
//               <button
//                 onClick={handleAddToCart}
//                 disabled={product.stock <= 0}
//                 className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 ${
//                   product.stock > 0 
//                   ? "bg-[#D6A85B] text-black hover:bg-[#c49648] hover:shadow-[#D6A85B]/40 hover:-translate-y-1" 
//                   : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 <CartIcon /> Add to Bag
//               </button>
              
//               <button
//                 onClick={() => product.stock > 0 && navigate("/checkout")}
//                 disabled={product.stock <= 0}
//                 className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all border-2 flex items-center justify-center gap-3 ${
//                    product.stock > 0
//                    ? "border-[#6A4E3B] text-[#6A4E3B] hover:bg-[#6A4E3B] hover:text-white"
//                    : "border-gray-200 text-gray-300 cursor-not-allowed"
//                 }`}
//               >
//                 Buy Now
//               </button>
//             </div>

//             {/* Trust Badges */}
//             <div className="mt-10 grid grid-cols-2 gap-4">
//                <div className="flex items-center text-sm text-[#8C7B6F]">
//                  <div className="p-2 bg-white rounded-full shadow-sm mr-3 text-[#D6A85B]"><CheckIcon /></div>
//                  <span>Freshly Baked Daily</span>
//                </div>
//                <div className="flex items-center text-sm text-[#8C7B6F]">
//                  <div className="p-2 bg-white rounded-full shadow-sm mr-3 text-[#D6A85B]"><CheckIcon /></div>
//                  <span>Premium Ingredients</span>
//                </div>
//             </div>

//           </motion.div>
//         </div>

//         {/* Reviews Section */}
//         <ProductReview productId={product._id} />
        
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Product;


import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";

// --- ICONS ---
const StarIcon = ({ filled, onClick, className }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 transition-all duration-200 ${className}`}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// --- REVIEW SECTION COMPONENT ---
function ProductReview({ productId }) {
  const { user, token } = useContext(AuthContext) || {};
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!productId) return;
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/reviews/${productId}`);
        setReviews(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
        setReviews([]);
      }
    };
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return setError("Please log in to submit a review.");
    if (!rating || !comment) return setError("Please provide rating and comment.");

    try {
      const res = await axios.post(
        "http://localhost:5000/reviews",
        { productId, rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReviews([res.data.review, ...reviews]);
      setRating(0);
      setComment("");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit review.");
    }
  };

  return (
    <div className="mt-24">
      <h3 className="text-3xl font-serif text-[#6A4E3B] mb-8 border-b border-[#E8C7BE] pb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Connoisseur Reviews
      </h3>
      
      <div className="grid md:grid-cols-12 gap-10">
        {/* Form Section */}
        <div className="md:col-span-4">
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(106,78,59,0.1)] border border-[#E8C7BE]/30 sticky top-24">
            <h4 className="text-xl font-bold text-[#6A4E3B] mb-2">Write a Review</h4>
            <p className="text-sm text-[#8C7B6F] mb-6">How was your experience with this delicacy?</p>

            {user ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div 
                        key={star} 
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      >
                        <StarIcon
                          className={`cursor-pointer transform transition-transform hover:scale-110 ${
                            star <= (hoverRating || rating) ? "text-[#D6A85B] fill-[#D6A85B]" : "text-gray-300"
                          }`}
                          filled={star <= (hoverRating || rating)}
                          onClick={() => setRating(star)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-2">Review</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us about the taste, texture..."
                    className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#D6A85B] transition-all text-sm min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6A4E3B] text-white font-bold py-3 px-4 rounded-full hover:bg-[#563e2d] transition-all shadow-lg"
                >
                  Post Review
                </button>
                {error && <p className="text-red-500 text-xs text-center">{error}</p>}
              </form>
            ) : (
              <div className="bg-[#FFF8EC] border border-[#D6A85B] p-4 rounded-xl text-center">
                <p className="text-[#6A4E3B] text-sm">Please log in to share your thoughts.</p>
              </div>
            )}
          </div>
        </div>

        {/* List Section */}
        <div className="md:col-span-8 space-y-6">
          {reviews.length === 0 && (
            <div className="flex flex-col items-center justify-center h-48 bg-white/50 rounded-2xl border border-dashed border-[#E8C7BE]">
              <p className="text-[#8C7B6F]">No reviews yet. Be the first to taste and tell!</p>
            </div>
          )}

          {reviews.map((rev) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={rev._id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D6A85B] text-white flex items-center justify-center font-serif font-bold text-xl">
                {rev.user?.name?.charAt(0).toUpperCase() || "G"}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-bold text-[#6A4E3B]">{rev.user?.name || "Guest"}</h4>
                  <div className="flex text-[#D6A85B] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3 h-3" filled={i < rev.rating} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{rev.comment}</p>
                <span className="text-xs text-gray-400 mt-2 block">{new Date(rev.createdAt).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- MAIN PRODUCT COMPONENT ---
function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // State for success message popup
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://finalproject-backend-7rqa.onrender.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  // Handle Add To Cart (Shows Popup)
  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    
    // Show success message
    setShowSuccessMsg(true);
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 3000);
  };

  // Handle Buy Now (Adds to cart & redirects to Shopping Cart)
  const handleBuyNow = () => {
    if (!product) return;
    if (product.stock > 0) {
      addToCart(product);
      navigate("/shoppingcart");
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D6A85B]"></div>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen bg-[#FFF8EC] flex flex-col items-center justify-center text-[#6A4E3B]">
      <h2 className="text-3xl font-serif mb-4">Delicacy Not Found</h2>
      <button onClick={() => navigate("/")} className="text-[#D6A85B] hover:underline">Return to Bakery</button>
    </div>
  );

  return (
    <div className="bg-[#FFF8EC] min-h-screen font-sans text-[#6A4E3B] relative">
      <Navbar />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-[#8C7B6F] mb-10 flex items-center gap-2">
          <span className="cursor-pointer hover:text-[#D6A85B] transition-colors" onClick={() => navigate('/')}>Home</span> 
          <span className="text-[#D6A85B]">•</span>
          <span className="cursor-pointer hover:text-[#D6A85B] transition-colors" onClick={() => navigate('/allproduct')}>Menu</span>
          <span className="text-[#D6A85B]">•</span>
          <span className="font-semibold text-[#6A4E3B]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT: Image Section (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-fit"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white aspect-square group">
              {/* Stock Tag */}
              <div className="absolute top-6 left-6 z-10">
                {product.stock > 0 ? (
                  <span className="bg-white/90 backdrop-blur-md text-[#6A4E3B] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center">
                     <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> In Stock
                  </span>
                ) : (
                  <span className="bg-[#6A4E3B] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Sold Out
                  </span>
                )}
              </div>

              <img
                src={product.img || "/assets/default.jpg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT: Details Section */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#6A4E3B] leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {product.name}
            </h1>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-3xl font-medium text-[#D6A85B]">LKR{product.price}</span>
              <span className="text-sm text-[#8C7B6F] mb-1">per unit / inclusive of tax</span>
            </div>

            <div className="w-full h-[1px] bg-[#E8C7BE]/50 mb-8"></div>

            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#6A4E3B] mb-3">Description</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {product.description || "Handcrafted with the finest organic ingredients, this delight offers a symphony of flavors perfect for any occasion."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 ${
                  product.stock > 0 
                  ? "bg-[#D6A85B] text-black hover:bg-[#c49648] hover:shadow-[#D6A85B]/40 hover:-translate-y-1" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <CartIcon /> Add to Bag
              </button>
              
              <button
                onClick={handleBuyNow}
                disabled={product.stock <= 0}
                className={`flex-1 py-4 px-8 rounded-full font-bold text-lg transition-all border-2 flex items-center justify-center gap-3 ${
                   product.stock > 0
                   ? "border-[#6A4E3B] text-[#6A4E3B] hover:bg-[#6A4E3B] hover:text-white"
                   : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-2 gap-4">
               <div className="flex items-center text-sm text-[#8C7B6F]">
                 <div className="p-2 bg-white rounded-full shadow-sm mr-3 text-[#D6A85B]"><CheckIcon /></div>
                 <span>Freshly Baked Daily</span>
               </div>
               <div className="flex items-center text-sm text-[#8C7B6F]">
                 <div className="p-2 bg-white rounded-full shadow-sm mr-3 text-[#D6A85B]"><CheckIcon /></div>
                 <span>Premium Ingredients</span>
               </div>
            </div>

          </motion.div>
        </div>

        {/* Reviews Section */}
        <ProductReview productId={product._id} />
        
      </main>

      {/* --- Success Notification (Toast) --- */}
      <AnimatePresence>
        {showSuccessMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 bg-white border border-[#D6A85B] shadow-[0_10px_40px_rgba(106,78,59,0.2)] rounded-xl p-4 flex items-center gap-4 max-w-sm"
          >
            <div className="bg-[#D6A85B] rounded-full p-2 text-white">
              <CheckIcon />
            </div>
            <div>
              <h5 className="font-bold text-[#6A4E3B] text-sm">Successfully Added!</h5>
              <p className="text-xs text-[#8C7B6F]">{product.name} is in your cart.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Product;