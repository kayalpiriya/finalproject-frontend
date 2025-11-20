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


import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/CartContext.jsx";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    getSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    navigate("/shoppingcart");
  };

  if (loading) return <p className="text-center mt-20 text-xl">Loading product...</p>;
  if (!product) return <p className="text-center mt-20 text-xl">Product not found!</p>;

  return (
    <>
      <Navbar />
      <br></br><br></br><br></br>
      <div className="max-w-6xl mx-auto my-12 p-4 grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center items-center bg-white shadow-lg rounded-xl p-6">
          <img
            src={product.img || "/assets/default.jpg"}
            alt={product.name}
            className="rounded-xl max-h-96 object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-yellow-700 mb-4">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-800 mb-2">₹{product.price}</p>
            <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

















// // src/pages/Product.jsx
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useContext, useEffect, useRef, useState } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import axios from "axios";

// export default function Product() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showToast, setShowToast] = useState(false);
//   const imgRef = useRef(null);

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

//   // Keep your function behavior unchanged (only UI triggers toast here)
//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product); // <-- unchanged logic
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 1600);
//     // navigate stays same (delayed slightly so toast is visible)
//     setTimeout(() => navigate("/shoppingcart"), 700);
//   };

//   if (loading)
//     return (
//       <p className="text-center mt-20 text-xl text-yellow-700 animate-pulse">
//         Loading product...
//       </p>
//     );

//   if (!product)
//     return (
//       <p className="text-center mt-20 text-xl text-red-500">Product not found!</p>
//     );

//   return (
//     <>
//       <Navbar />

//       {/* Toast */}
//       <div className="fixed top-6 right-6 z-50 pointer-events-none">
//         {showToast && (
//           <div className="transform transition-all duration-300 ease-out pointer-events-auto">
//             <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
//               Added to cart!
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Floating bubbles (background) */}
//       <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
//         {Array.from({ length: 12 }).map((_, i) => {
//           const size = 20 + Math.round(Math.random() * 40);
//           const left = Math.round(Math.random() * 100);
//           const delay = (Math.random() * 6).toFixed(2);
//           const dur = (6 + Math.random() * 8).toFixed(2);
//           const opacity = (0.15 + Math.random() * 0.35).toFixed(2);
//           return (
//             <span
//               key={i}
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 left: `${left}%`,
//                 bottom: `-40px`,
//                 opacity,
//                 animationDelay: `${delay}s`,
//                 animationDuration: `${dur}s`,
//               }}
//               className="absolute rounded-full bg-white/60 blur-sm animate-bubble"
//             />
//           );
//         })}
//       </div>

//       <main className="pt-28 pb-20">
//         <div className="max-w-6xl mx-auto px-6">

//           {/* Page Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-700">
//               {product.name}
//             </h1>
//             <p className="text-sm text-gray-500 mt-1">Premium bakery item — baked fresh daily</p>
//           </div>

//           {/* NEW LAYOUT: left image column, right info column */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//             {/* IMAGE COLUMN */}
//             <div className="flex justify-center">
//               <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-yellow-100 bg-white">
//                 {/* IMAGE SIZE matches AllProduct: h-56 md:h-60 lg:h-64 */}
//                 <img
//                   ref={imgRef}
//                   src={product.img || "src/assets/default.jpg"}
//                   alt={product.name}
//                   className="w-full h-56 md:h-60 lg:h-64 object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>

//               {/* small sticky quick-actions on left of image (mobile hidden) */}
//             </div>

//             {/* INFO COLUMN */}
//             <div className="space-y-6">
//               <div>
//                 <div className="flex items-center justify-between">
//                   <div className="text-3xl md:text-4xl font-bold text-green-700">₹{product.price}</div>
//                   <div className="text-sm text-gray-600">Stock: <span className="font-semibold text-gray-800">{product.stock}</span></div>
//                 </div>

//                 <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

//                 {/* small metadata */}
//                 <div className="mt-4 flex gap-3 text-sm">
//                   <div className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700">Handmade</div>
//                   <div className="px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-700">Fresh</div>
//                 </div>
//               </div>

//               {/* Quantity + Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
//                 <div className="flex items-center bg-white border rounded-lg px-3 py-2 shadow-inner">
//                   <span className="text-gray-600 mr-3">Qty</span>
//                   {/* kept simple (you can expand to change qty later) */}
//                   <div className="w-16 text-center font-semibold">1</div>
//                 </div>

//                 <div className="flex gap-3 w-full sm:w-auto">
//                   <button
//                     onClick={handleAddToCart}
//                     className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition shadow-lg transform hover:-translate-y-1"
//                   >
//                     Add to Cart
//                   </button>

//                   <button
//                     onClick={() => { addToCart(product); navigate("/checkout"); }}
//                     className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition shadow"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>

//               {/* Ingredients card */}
//               <div className="bg-white p-4 rounded-xl border border-yellow-100 shadow">
//                 <h3 className="font-semibold text-yellow-700 mb-2">Ingredients</h3>
//                 <ul className="list-disc pl-5 text-sm text-gray-700">
//                   <li>Premium Fresh Flour</li>
//                   <li>Organic Sugar</li>
//                   <li>Pure Butter</li>
//                   <li>Fresh Cream</li>
//                 </ul>
//               </div>

//               {/* Reviews card */}
//               <div className="bg-white p-4 rounded-xl border border-yellow-100 shadow">
//                 <h3 className="font-semibold text-yellow-700 mb-2">Customer Reviews</h3>
//                 <div className="space-y-3">
//                   <div className="text-sm">
//                     <div className="font-semibold">Nisha <span className="text-yellow-400 ml-2">★★★★★</span></div>
//                     <div className="text-gray-600">Super fresh and tasty! Looks exactly like the photo.</div>
//                   </div>
//                   <div className="text-sm">
//                     <div className="font-semibold">Arun <span className="text-yellow-400 ml-2">★★★★☆</span></div>
//                     <div className="text-gray-600">Very soft and delicious. Worth the price!</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RELATED PRODUCTS */}
//           <section className="mt-12">
//             <h3 className="text-2xl font-bold text-yellow-700 mb-4">Related Products</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {[1, 2, 3].map((n) => (
//                 <div key={n} className="bg-white rounded-2xl shadow p-4 border border-yellow-100 hover:shadow-lg transition transform hover:-translate-y-1">
//                   <div className="h-40 w-full bg-yellow-50 rounded-lg mb-3 flex items-center justify-center text-yellow-400">Image</div>
//                   <div className="font-semibold">Sample Product {n}</div>
//                   <div className="text-green-600 mt-1">₹299</div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </main>

//       <Footer />

//       {/* Styles (pure CSS animations) */}
//       <style>{`
//         /* bubble animation */
//         @keyframes bubble-up {
//           0% { transform: translateY(0) scale(1); opacity: 0.6; }
//           50% { opacity: 0.9; }
//           100% { transform: translateY(-700px) scale(1.3); opacity: 0; }
//         }
//         .animate-bubble {
//           animation-name: bubble-up;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }

//         /* subtle float entrance for main card */
//         .main-card-enter {
//           transform: translateY(10px);
//           opacity: 0;
//         }
//         .main-card-enter-active {
//           transform: translateY(0);
//           opacity: 1;
//           transition: all 400ms ease;
//         }
//       `}</style>
//     </>
//   );
// }
