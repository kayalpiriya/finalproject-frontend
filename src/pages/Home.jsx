// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";
// import { CartContext } from "../pages/CartContext.jsx";
// import "./Home.css";

// function Home() {
//   // const navigate = useNavigate();
//   // const { addToCart } = useContext(CartContext);
//   // const [products, setProducts] = useState([]);

//   // // 🔹 Fetch products from backend
//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     try {
//   //       const res = await axios.get("http://localhost:5000/products");
//   //       setProducts(res.data);
//   //     } catch (err) {
//   //       console.error("Error fetching products:", err);
//   //     }
//   //   };
//   //   fetchProducts();
//   // }, []);

//   // // ✅ Add to cart and navigate to product page
//   // const handleAddClick = (product) => {
//   //   const token = localStorage.getItem("token");
//   //   if (token) {
//   //     addToCart({
//   //       ...product,
//   //       price:
//   //         typeof product.price === "string"
//   //           ? Number(product.price.replace(/[Rs,]/g, ""))
//   //           : product.price,
//   //     });
//   //     navigate(`/product/${product._id}`, { state: product });
//   //     console.log("Navigated to single product page");
//   //   } else {
//   //     navigate("/login");
//   //   }
//   // };

//   return (
//     <>
//       <Navbar />

//       <main>
//         {/* --- Hero Section --- */}
//         <section className="hero">
//           <div className="hero-card hero-text">
//             <h1>Freshly Baked Goodness <br />Every Day</h1>
//             <p>Discover our delicious range of cakes,<br /> pastries, and cookies made with love.</p>
//             <button onClick={() => navigate("/shoppingcart")}>Shop Now</button>
//           </div>
//           <div className="hero-card hero-image">
//             <img src="src/assets/download.png" alt="Bakery Product" />
//           </div>
//         </section>

//         {/* --- Sale Section --- */}
//         <section className="sale-section">
//           <div className="sale-box">
//             <h2>Sale</h2>
//             <div className="sale-container">
//               <div className="sale-card"><img src="/images/sale1.png" alt="Sale 1" /></div>
//               <div className="sale-card"><img src="/images/sale2.png" alt="Sale 2" /></div>
//               <div className="sale-card"><img src="/images/sale3.png" alt="Sale 3" /></div>
//               <div className="sale-card"><img src="/images/sale4.png" alt="Sale 4" /></div>
//               <div className="sale-card"><img src="/images/sale5.png" alt="Sale 5" /></div>
//             </div>
//           </div>
//         </section>

//         {/* --- Categories Section --- */}
//         <section className="categories-section">
//           <div className="categories-box">
//             <h2>Categories</h2>
//             <div className="categories-container">
//               <div className="categories-card"><img src="/images/sale1.png" alt="Category 1" /></div>
//               <div className="categories-card"><img src="/images/sale2.png" alt="Category 2" /></div>
//               <div className="categories-card"><img src="/images/sale3.png" alt="Category 3" /></div>
//               <div className="categories-card"><img src="/images/sale4.png" alt="Category 4" /></div>
//               <div className="categories-card"><img src="/images/sale5.png" alt="Category 5" /></div>
//             </div>
//           </div>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Home;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Navbar />

//       <main>
//         {/* --- Hero Section --- */}
//         <section className="hero">
//           <div className="hero-card hero-text">
//             <h1>Freshly Baked Goodness <br />Every Day</h1>
//             <p>
//               Discover our delicious range of cakes,<br /> pastries, and
//               cookies made with love.
//             </p>
//             <button onClick={() => navigate("/shoppingcart")}>Shop Now</button>
//           </div>
//           <div className="hero-card hero-image">
//             <img src="src/assets/download.png" alt="Bakery Product" />
//           </div>
//         </section>

//         {/* --- Sale Section --- */}
//         <section className="sale-section">
//           <div className="sale-box">
//             <h2>Sale</h2>
//             <div className="sale-container">
//               {["/images/sale1.png","/images/sale2.png","/images/sale3.png","/images/sale4.png","/images/sale5.png"].map((img, idx) => (
//                 <div key={idx} className="sale-card">
//                   <img src={img} alt={`Sale ${idx + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <br></br><br></br>

//         {/* --- Categories Section --- */}
//         <section className="categories-section">
//           <div className="categories-box">
//             <h2>Categories</h2>
//             <div className="categories-container">
//               {["/images/sale1.png","/images/sale2.png","/images/sale3.png","/images/sale4.png","/images/sale5.png"].map((img, idx) => (
//                 <div key={idx} className="categories-card">
//                   <img src={img} alt={`Category ${idx + 1}`} />
//                   <p>Category {idx + 1}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
// <br></br><br></br><br></br>
//       <Footer />
//     </>
//   );
// }

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Home() {
//   const navigate = useNavigate();

//   const saleImages = [
//     "/images/sale1.png",
//     "/images/sale2.png",
//     "/images/sale3.png",
//     "/images/sale4.png",
//     "/images/sale5.png",
//   ];

//   const categoriesImages = [
//     "/images/sale1.png",
//     "/images/sale2.png",
//     "/images/sale3.png",
//     "/images/sale4.png",
//     "/images/sale5.png",
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="bg-[#4B2E2E] text-[#FDF6E3]">
//         {/* Hero Section */}
//         <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto p-6 md:p-12">
//           <div className="hero-text flex-1 mb-8 md:mb-0">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FFDAB9]">
//               Freshly Baked Goodness <br />
//               Every Day
//             </h1>
//             <p className="text-lg md:text-xl mb-6 text-[#FFE4C4]">
//               Discover our delicious range of cakes, pastries, and cookies made with love.
//             </p>
//             <button
//               onClick={() => navigate("/shoppingcart")}
//               className="bg-[#FF6B81] hover:bg-[#FF5566] text-white px-6 py-3 rounded-lg font-semibold"
//             >
//               Shop Now
//             </button>
//           </div>
//           <div className="hero-image flex-1">
//             <img
//               src="/assets/download.png"
//               alt="Bakery Product"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </section>

//         {/* Sale Section */}
//         <section className="max-w-7xl mx-auto p-6 md:p-12">
//           <h2 className="text-3xl font-bold mb-6 text-[#FFDAB9]">Sale</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//             {saleImages.map((img, idx) => (
//               <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition">
//                 <img src={img} alt={`Sale ${idx + 1}`} className="w-full h-full object-cover"/>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Categories Section */}
//         <section className="max-w-7xl mx-auto p-6 md:p-12">
//           <h2 className="text-3xl font-bold mb-6 text-[#FFDAB9]">Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//             {categoriesImages.map((img, idx) => (
//               <div key={idx} className="flex flex-col items-center bg-[#5C3A3A] p-4 rounded-lg shadow-lg hover:scale-105 transform transition">
//                 <img src={img} alt={`Category ${idx + 1}`} className="w-full h-32 object-cover mb-2 rounded-lg"/>
//                 <p className="text-[#FFE4C4] font-medium">Category {idx + 1}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   // Carousel images with unique content
//   const carouselItems = [
//     {
//       img: "src/assets/cakee1.jpg",
//       title: "Chocolate Delight",
//       desc: "Indulge in rich chocolate cakes made fresh daily.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "src/assets/vanilla_cupcake_featured_blog.webp",
//       title: "Vanilla Cupcake Heaven",
//       desc: "Soft, fluffy, and perfectly sweet cupcakes for everyone.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "src/assets/instagram-bakers-1.jpg",
//       title: "Specialty Pastries",
//       desc: "Artisan pastries baked with love and care.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     }
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % carouselItems.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const sampleImgs = [
//     "src/assets/bun1.jpg",
//     "src/assets/cakee1.jpg",
//     "src/assets/breadd.jpg",
//     "src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg",
//     "src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp"
//   ];

//   const categoryImgs = [
//     "src/assets/3ade0a9606bdae637a44959ebc866635.jpg",
//     "src/assets/3f2f14e18d9a177618f503ec18673382.jpg",
//     "src/assets/7c6f3076e545a9cc8faa2123d8788001.jpg",
//     "src/assets/9a7388e7ba8d216800a7abcc89ae5ff7.jpg",
//     "src/assets/81dfe1ad8f2767fe5b4d81652c7b1d15.jpg"
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="pt-24 bg-pink-50">
//         {/* Hero Carousel */}
//         <section className="max-w-7xl mx-auto px-6 py-12">
//           <div className="relative w-full h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
//             {carouselItems.map((item, idx) => (
//               <img
//                 key={idx}
//                 src={item.img}
//                 alt={`hero-${idx}`}
//                 className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                   idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
//                 }`}
//               />
//             ))}

//             {/* Overlay */}
//             <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 bg-gradient-to-r from-pink-700/50 to-transparent text-white z-20 transition">
//               <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
//                 {carouselItems[current].title}
//               </h1>
//               <p className="text-lg md:text-xl mb-6 drop-shadow-md">
//                 {carouselItems[current].desc}
//               </p>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => navigate(carouselItems[current].btnShop)}
//                   className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition shadow-lg"
//                 >
//                   Shop Now
//                 </button>
//                 <button
//                   onClick={() => navigate(carouselItems[current].btnLearn)}
//                   className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-pink-700 transition shadow-lg"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Carousel Indicators */}
//           <div className="flex justify-center mt-4 gap-2">
//             {carouselItems.map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`w-3 h-3 rounded-full ${
//                   idx === current ? "bg-pink-600" : "bg-pink-300"
//                 }`}
//                 onClick={() => setCurrent(idx)}
//               ></button>
//             ))}
//           </div>
//         </section>

//         {/* Sale Section */}
//         {/* <section className="max-w-7xl mx-auto px-6 mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Sale</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             {sampleImgs.map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-center hover:scale-105 transform transition"
//               >
//                 <img src={s} alt={`sale-${i}`} className="h-28 object-contain" />
//               </div>
//             ))}
//           </div>
//         </section> */}
// <section className="max-w-7xl mx-auto px-6 mt-12">
//   <h2 className="text-2xl font-bold text-gray-800 mb-4">Sale</h2>
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//     {sampleImgs.map((s, i) => (
//       <div
//         key={i}
//         className="relative rounded-lg overflow-hidden shadow-lg group hover:scale-105 transform transition-all duration-300"
//         style={{ minHeight: "220px" }}
//       >
//         {/* Image with zoom on hover */}
//         <img
//           src={s}
//           alt={`sale-${i}`}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
//         {/* Hover Label */}
//         <span className="absolute bottom-12 right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           50% Off
//         </span>
//         {/* Button bottom-right */}
//         <button
//           onClick={() => navigate("/allproduct")}
//           className="absolute bottom-3 right-3 bg-pink-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         >
//           Shop Now
//         </button>
//       </div>
//     ))}
//   </div>
// </section>
//         {/* Categories Section */}
//         {/* <section className="max-w-7xl mx-auto px-6 mt-12 mb-20">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             {categoryImgs.map((img, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-center hover:scale-105 transform transition"
//               >
//                 <img src={img} alt={`category-${i}`} className="h-28 object-contain" />
//               </div>
//             ))}
//           </div>
//         </section> */}
//       <section className="max-w-7xl mx-auto px-6 mt-12 mb-20">
//   <h2 className="text-6xl font-bold text-gray-800 mb-4">Categories</h2>
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//     {categoryImgs.map((img, i) => (
//       <div
//         key={i}
//         className="bg-white rounded-lg shadow-lg overflow-hidden relative flex flex-col hover:scale-105 transform transition-all duration-300"
//         style={{ minHeight: "220px" }}
//       >
//         {/* Image fills card */}
//         <img
//           src={img}
//           alt={`category-${i}`}
//           className="w-full h-full object-cover"
//         />
//         {/* Button at bottom-right */}
//         <button
//           onClick={() => navigate("/allproduct")}
//           className="absolute bottom-3 right-3 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
//         >
//           View Products
//         </button>
//       </div>
//     ))}
//   </div>
// </section>
//       </main>

//       <Footer />
//     </>
//   );
// }



// hari//

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Home() {
//   const navigate = useNavigate();

//   const carouselItems = [
//     {
//       img: "https://previews.123rf.com/images/kowit1982/kowit19821609/kowit1982160900201/63891068-black-forest-cake.jpg",
//       title: "Chocolate Delight",
//       desc: "Indulge in rich chocolate cakes made with premium cocoa and love.",
//     },
//     {
//       img: "https://static2.kapruka.com/product-image/width=276,quality=93,f=auto/shops/cakes/productImages/zoom/1735025993442_stawberry.jpg",
//       title: "Strawberry Fantasy",
//       desc: "Taste the freshness of strawberries blended into a perfect cake.",
//     },
//     {
//       img: "src/assets/cakee1.jpg",
//       title: "Pure Vanilla Magic",
//       desc: "Classic vanilla cakes baked with perfection for every occasion.",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [typedTitle, setTypedTitle] = useState("");
//   const [scrollY, setScrollY] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [search, setSearch] = useState("");

//   const saleItems = [
//     { img: "src/assets/674079d70e634c7374e5380ff3f542aa.jpg", bg: "#ffccd5" },
//     { img: "src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", bg: "#ffe5ec" },
//     { img: "src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp", bg: "#ffb3c1" },
//   ];

//   const categories = [
//     { img: "src/assets/cakee1.jpg", title: "Cakes" },
//     { img: "src/assets/breadd.jpg", title: "Bread" },
//     { img: "src/assets/vanilla_cupcake_featured_blog.webp", title: "Cup Cakes" },
//     { img: "src/assets/bun1.jpg", title: "Curry Bun" },
//   ];

//   const socialIcons = [
//     { img: "src/assets/facebook.png", link: "#" },
//     { img: "src/assets/instagram.png", link: "#" },
//     { img: "src/assets/twitter.png", link: "#" },
//   ];

//   // Filtered items for search
//   const filteredSaleItems = saleItems.filter((item) =>
//     item.img.toLowerCase().includes(search.toLowerCase())
//   );
//   const filteredCategories = categories.filter((cat) =>
//     cat.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // Carousel interval
//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1)),
//       3500
//     );
//     return () => clearInterval(interval);
//   }, []);

//   // Typing effect for hero title
//   useEffect(() => {
//     setTypedTitle("");
//     let i = 0;
//     const title = carouselItems[current].title;
//     const interval = setInterval(() => {
//       if (i < title.length) {
//         setTypedTitle((prev) => prev + title[i]);
//         i++;
//       } else clearInterval(interval);
//     }, 100);
//     return () => clearInterval(interval);
//   }, [current]);

//   // Scroll tracking
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Mouse tracking for sparkles / floating cakes
//   useEffect(() => {
//     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="pt-24"></div> {/* Space below navbar */}

//       <main className="bg-gradient-to-b from-rose-50 to-pink-100/30 min-h-screen overflow-x-hidden relative">

//         {/* HERO CAROUSEL */}
//         <section className="max-w-7xl mx-auto px-6 py-12 relative">
//           <div className="relative w-full h-96 md:h-[30rem] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(255,105,180,0.25)]">

//             <AnimatePresence>
//               {carouselItems.map((item, i) =>
//                 i === current && (
//                   <motion.img
//                     key={i}
//                     src={item.img}
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1, y: scrollY * 0.05 }}
//                     exit={{ opacity: 0, scale: 1.05 }}
//                     transition={{ duration: 0.8 }}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                 )
//               )}
//             </AnimatePresence>

//             <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 
//             bg-gradient-to-r from-rose-900/60 via-rose-700/40 to-transparent text-white z-20">

//               <motion.h1
//                 key={typedTitle}
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-xl"
//               >
//                 {typedTitle}
//               </motion.h1>

//               <motion.p
//                 key={carouselItems[current].desc}
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="text-lg md:text-xl max-w-xl drop-shadow-md"
//               >
//                 {carouselItems[current].desc}
//               </motion.p>

//               <div className="mt-6 flex gap-4">
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,105,180,0.4)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-rose-600/90 text-white px-7 py-3 rounded-xl hover:bg-rose-700 shadow-lg hover:shadow-rose-300/40 transition-all duration-300"
//                 >
//                   Shop Now
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,105,180,0.2)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="border border-white/80 px-7 py-3 rounded-xl hover:bg-white hover:text-rose-700 shadow-lg hover:shadow-rose-300/40 transition-all duration-300"
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </div>

//             {/* Carousel Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
//               {carouselItems.map((_, idx) => (
//                 <motion.button
//                   key={idx}
//                   onClick={() => setCurrent(idx)}
//                   whileHover={{ scale: 1.3 }}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     idx === current ? "bg-rose-600 scale-125" : "bg-rose-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* SEARCH BAR */}
//         <section className="max-w-7xl mx-auto px-6 mb-12">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="flex justify-center"
//           >
//             <input
//               type="text"
//               placeholder="Search cakes, macaroons, etc..."
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
//           </motion.div>
//         </section>

//         {/* SALE SECTION */}
//         <section className="max-w-7xl mx-auto px-6 py-10">
//           <h2 className="text-3xl font-extrabold text-rose-700 mb-6 tracking-wide">
//             Hot Deals 🔥
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//             {filteredSaleItems.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="rounded-2xl p-6 flex justify-center items-center shadow-md hover:shadow-rose-200 transition-all"
//                 style={{ backgroundColor: item.bg }}
//                 whileHover={{ scale: 1.1, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <img src={item.img} className="h-28 object-contain drop-shadow-md" />
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CATEGORIES SECTION */}
//         <section className="max-w-7xl mx-auto px-6 py-10">
//           <h2 className="text-3xl font-extrabold text-rose-700 mb-6 tracking-wide">
//             Categories 🍰
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//             {filteredCategories.map((cat, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-2xl shadow-md p-5 text-center transition-all duration-300"
//                 whileHover={{
//                   scale: 1.08,
//                   rotate: 1,
//                   boxShadow: "0 15px 25px rgba(255,105,180,0.3)",
//                 }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <img
//                   src={cat.img}
//                   alt={cat.title}
//                   className="h-28 mx-auto rounded-xl shadow-lg"
//                 />
//                 <p className="mt-3 font-semibold text-gray-700 tracking-wide">{cat.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Footer Social Icons */}
//         <section className="max-w-7xl mx-auto px-6 py-10 flex justify-center gap-6">
//           {socialIcons.map((icon, i) => (
//             <motion.a
//               key={i}
//               href={icon.link}
//               whileHover={{ scale: 1.2, rotate: 10, opacity: 0.8 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: i * 0.1 }}
//             >
//               <img src={icon.img} className="w-10 h-10" />
//             </motion.a>
//           ))}
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const carouselItems = [
//     {
//       img: "/src/assets/cakee1.jpg",
//       title: "Artisan Chocolate Cake",
//       desc: "Handcrafted with Belgian chocolate and fresh cream, baked to perfection daily.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/vanilla_cupcake_featured_blog.webp",
//       title: "Vanilla Dream Cupcakes",
//       desc: "Soft vanilla cupcakes with buttercream frosting - a classic favorite.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/instagram-bakers-1.jpg",
//       title: "French Pastries Collection",
//       desc: "Authentic croissants, macarons, and éclairs made by our master bakers.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     }
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % carouselItems.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const sampleImgs = [
//     { img: "/src/assets/bun1.jpg", name: "Cinnamon Roll", price: "$3.99" },
//     { img: "/src/assets/cakee1.jpg", name: "Chocolate Cake", price: "$29.99" },
//     { img: "/src/assets/breadd.jpg", name: "Sourdough Bread", price: "$5.99" },
//     { img: "/src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", name: "Strawberry Tart", price: "$6.99" },
//     { img: "/src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp", name: "Chocolate Mousse", price: "$8.99" }
//   ];

//   const categoryImgs = [
//     { img: "/src/assets/3ade0a9606bdae637a44959ebc866635.jpg", name: "Cakes" },
//     { img: "/src/assets/3f2f14e18d9a177618f503ec18673382.jpg", name: "Cookies" },
//     { img: "/src/assets/7c6f3076e545a9cc8faa2123d8788001.jpg", name: "Breads" },
//     { img: "/src/assets/9a7388e7ba8d216800a7abcc89ae5ff7.jpg", name: "Pastries" },
//     { img: "/src/assets/81dfe1ad8f2767fe5b4d81652c7b1d15.jpg", name: "Desserts" }
//   ];

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const hoverEffect = {
//     scale: 1.03,
//     transition: { duration: 0.3 }
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 bg-gradient-to-b from-bakery-bg-light to-bakery-bg-warm min-h-screen">
        
//         {/* Hero Carousel */}
//         <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
//           <div className="relative w-full h-80 md:h-[36rem] rounded-[1.5rem] overflow-hidden shadow-2xl">
//             {carouselItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`absolute inset-0 transition-opacity duration-1000 ${
//                   idx === current ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/30" />
//               </div>
//             ))}

//             {/* Carousel Overlay */}
//             <motion.div
//               className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 text-white z-10"
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               transition={{ delay: 0.3 }}
//             >
//               <h1
//                 className="text-4xl md:text-6xl xl:text-7xl font-extrabold mb-4 leading-snug" 
//                 style={{ fontFamily: "'Playfair Display', serif" }}
//               >
//                 {carouselItems[current].title}
//               </h1>
//               <p
//                 className="text-lg md:text-xl mb-8 max-w-xl opacity-95 leading-relaxed"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 {carouselItems[current].desc}
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <motion.button
//                   onClick={() => navigate(carouselItems[current].btnShop)}
//                   className="bg-bakery-accent text-bakery-dark px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-amber-600 transition-all btn-add"
//                   whileHover={hoverEffect}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Shop Now
//                 </motion.button>
//                 <motion.button
//                   onClick={() => navigate(carouselItems[current].btnLearn)}
//                   className="bg-transparent border-2 border-bakery-light-accent text-bakery-light-accent px-8 py-3 rounded-full font-semibold text-lg hover:bg-bakery-light-accent/20 transition-all"
//                   whileHover={hoverEffect}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </motion.div>

//             {/* Carousel Indicators */}
//             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//               {carouselItems.map((_, idx) => (
//                 <button
//                   key={idx}
//                   className={`h-2 rounded-full transition-all ${
//                     idx === current
//                       ? "bg-bakery-light-accent w-8"
//                       : "bg-white/50 w-2 hover:bg-white/80"
//                   }`}
//                   onClick={() => setCurrent(idx)}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="max-w-7xl mx-auto px-4 py-16">
//           <motion.h2
//             className="text-4xl font-bold text-bakery-medium mb-12 text-center"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//           >
//             Today's Specials
//           </motion.h2>
// <br></br><br></br>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//             {sampleImgs.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-[1rem] shadow-lg overflow-hidden hover:shadow-xl transition-all "
//                 whileHover={hoverEffect}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <div className="h-48 w-full flex items-center justify-center bg-bakery-bg-warm/70">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="h-full w-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="font-bold text-lg text-bakery-dark mb-1 truncate">{item.name}</h3>
//                   <p className="text-bakery-accent text-base font-semibold mb-4">{item.price}</p>
//                   <button
//                     onClick={() => navigate("/allproduct")}
//                     className="w-full bg-bakery-light-accent text-bakery-medium py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors shadow-sm btn-add"
//                   >
//                     View
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Categories */}
//         <section className="max-w-7xl mx-auto px-4 py-16 bg-bakery-bg-warm/50">
//           <motion.h2
//             className="text-4xl font-bold text-bakery-medium mb-12 text-center"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//           >
//             Browse Categories
//           </motion.h2>
// <br></br><br></br>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {categoryImgs.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-[1rem] shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer  "
//                 whileHover={{ ...hoverEffect, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
//                 onClick={() => navigate("/allproduct")}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <div className="h-48 w-full flex items-center justify-center bg-bakery-bg-light">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="h-full w-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold text-lg text-bakery-medium">{item.name}</h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//       </main>

//       <br /><br /><br />
//       <Footer />
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { getBlogs } from "../api/blogApi";  // Blog API

// export default function Home() {
//   const navigate = useNavigate();

//   // --------------------------------------------
//   // Carousel Items
//   // --------------------------------------------
//   const carouselItems = [
//     {
//       img: "/src/assets/cakee1.jpg",
//       title: "Artisan Chocolate Cake",
//       desc: "Handcrafted with Belgian chocolate and fresh cream, baked to perfection daily.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/vanilla_cupcake_featured_blog.webp",
//       title: "Vanilla Dream Cupcakes",
//       desc: "Soft vanilla cupcakes with buttercream frosting - a classic favorite.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/instagram-bakers-1.jpg",
//       title: "French Pastries Collection",
//       desc: "Authentic croissants, macarons, and éclairs made by our master bakers.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     }
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % carouselItems.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // --------------------------------------------
//   // Featured Products
//   // --------------------------------------------
//   const sampleImgs = [
//     { img: "/src/assets/bun1.jpg", name: "Cinnamon Roll", price: "$3.99" },
//     { img: "/src/assets/cakee1.jpg", name: "Chocolate Cake", price: "$29.99" },
//     { img: "/src/assets/breadd.jpg", name: "Sourdough Bread", price: "$5.99" },
//     { img: "/src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", name: "Strawberry Tart", price: "$6.99" },
//     { img: "/src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp", name: "Chocolate Mousse", price: "$8.99" }
//   ];

//   // --------------------------------------------
//   // Categories
//   // --------------------------------------------
//   const categoryImgs = [
//     { img: "/src/assets/3ade0a9606bdae637a44959ebc866635.jpg", name: "Cakes" },
//     { img: "/src/assets/3f2f14e18d9a177618f503ec18673382.jpg", name: "Cookies" },
//     { img: "/src/assets/7c6f3076e545a9cc8faa2123d8788001.jpg", name: "Breads" },
//     { img: "/src/assets/9a7388e7ba8d216800a7abcc89ae5ff7.jpg", name: "Pastries" },
//     { img: "/src/assets/81dfe1ad8f2767fe5b4d81652c7b1d15.jpg", name: "Desserts" }
//   ];

//   // --------------------------------------------
//   // Blogs
//   // --------------------------------------------
//   const [blogs, setBlogs] = useState([]);
//   useEffect(() => {
//     getBlogs().then((data) => setBlogs(data.slice(0, 3))); // latest 3 blogs
//   }, []);

//   // --------------------------------------------
//   // Animations
//   // --------------------------------------------
//   const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
//   const hoverEffect = { scale: 1.03, transition: { duration: 0.3 } };

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 bg-gradient-to-b from-bakery-bg-light to-bakery-bg-warm min-h-screen">

//         {/* Hero Carousel */}
//         <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
//           <div className="relative w-full h-80 md:h-[36rem] rounded-[1.5rem] overflow-hidden shadow-2xl">
//             {carouselItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/30" />
//               </div>
//             ))}

//             {/* Carousel Overlay */}
//             <motion.div
//               className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 text-white z-10"
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               transition={{ delay: 0.3 }}
//             >
//               <h1
//                 className="text-4xl md:text-6xl xl:text-7xl font-extrabold mb-4 leading-snug" 
//                 style={{ fontFamily: "'Playfair Display', serif" }}
//               >
//                 {carouselItems[current].title}
//               </h1>
//               <p
//                 className="text-lg md:text-xl mb-8 max-w-xl opacity-95 leading-relaxed"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 {carouselItems[current].desc}
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <motion.button
//                   onClick={() => navigate(carouselItems[current].btnShop)}
//                   className="bg-bakery-accent text-bakery-dark px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-amber-600 transition-all btn-add"
//                   whileHover={hoverEffect}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Shop Now
//                 </motion.button>
//                 <motion.button
//                   onClick={() => navigate(carouselItems[current].btnLearn)}
//                   className="bg-transparent border-2 border-bakery-light-accent text-bakery-light-accent px-8 py-3 rounded-full font-semibold text-lg hover:bg-bakery-light-accent/20 transition-all"
//                   whileHover={hoverEffect}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </motion.div>

//             {/* Carousel Indicators */}
//             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//               {carouselItems.map((_, idx) => (
//                 <button
//                   key={idx}
//                   className={`h-2 rounded-full transition-all ${idx === current ? "bg-bakery-light-accent w-8" : "bg-white/50 w-2 hover:bg-white/80"}`}
//                   onClick={() => setCurrent(idx)}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="max-w-7xl mx-auto px-4 py-16">
//           <motion.h2
//             className="text-4xl font-bold text-bakery-medium mb-12 text-center"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//           >
//             Today's Specials
//           </motion.h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//             {sampleImgs.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-[1rem] shadow-lg overflow-hidden hover:shadow-xl transition-all "
//                 whileHover={hoverEffect}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <div className="h-48 w-full flex items-center justify-center bg-bakery-bg-warm/70">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="h-full w-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="font-bold text-lg text-bakery-dark mb-1 truncate">{item.name}</h3>
//                   <p className="text-bakery-accent text-base font-semibold mb-4">{item.price}</p>
//                   <button
//                     onClick={() => navigate("/allproduct")}
//                     className="w-full bg-bakery-light-accent text-bakery-medium py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors shadow-sm btn-add"
//                   >
//                     View
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Categories */}
//         <section className="max-w-7xl mx-auto px-4 py-16 bg-bakery-bg-warm/50">
//           <motion.h2
//             className="text-4xl font-bold text-bakery-medium mb-12 text-center"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//           >
//             Browse Categories
//           </motion.h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {categoryImgs.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-[1rem] shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
//                 whileHover={{ ...hoverEffect, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
//                 onClick={() => navigate("/allproduct")}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <div className="h-48 w-full flex items-center justify-center bg-bakery-bg-light">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="h-full w-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold text-lg text-bakery-medium">{item.name}</h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Latest Blogs */}
//         <section className="max-w-7xl mx-auto px-4 py-16 bg-bakery-bg-warm/50">
//           <motion.h2
//             className="text-4xl font-bold text-bakery-medium mb-12 text-center"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeIn}
//             viewport={{ once: true }}
//           >
//             Latest Blogs
//           </motion.h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {blogs.map((blog, i) => (
//               <motion.div
//                 key={blog._id}
//                 className="bg-white rounded-[1rem] shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
//                 whileHover={hoverEffect}
//                 onClick={() => navigate(`/blogs/${blog._id}`)}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 {blog.image && (
//                   <div className="h-48 w-full flex items-center justify-center bg-bakery-bg-warm/70">
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       className="h-full w-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                 )}
//                 <div className="p-4 text-center">
//                   <h3 className="font-bold text-lg text-bakery-dark mb-1 truncate">{blog.title}</h3>
//                   <p className="text-gray-600 text-sm mb-4 truncate">{blog.summary}</p>
//                   <button
//                     onClick={() => navigate(`/blogs/${blog._id}`)}
//                     className="w-full bg-bakery-light-accent text-bakery-medium py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors shadow-sm"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//       </main>
//       <br></br><br></br><br></br>
//       <Footer />
//     </>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { getBlogs } from "../api/blogApi";

// // --- DATA ---
// const features = [
//   { title: "Organic", icon: "🌿", color: "bg-green-100 text-green-800" },
//   { title: "Gluten Free Options", icon: "🌾", color: "bg-orange-100 text-orange-800" },
//   { title: "Same Day Delivery", icon: "🚚", color: "bg-blue-100 text-blue-800" },
// ];

// const products = [
//   { id: 1, name: "Raspberry Croissant", price: "$4.50", img: "/src/assets/instagram-bakers-1.jpg", tag: "New" },
//   { id: 2, name: "Belgian Truffle Cake", price: "$32.00", img: "/src/assets/cakee1.jpg", tag: "Best Seller" },
//   { id: 3, name: "Sourdough Loaf", price: "$6.00", img: "/src/assets/breadd.jpg", tag: "Vegan" },
//   { id: 4, name: "Vanilla Bean Cupcake", price: "$3.50", img: "/src/assets/vanilla_cupcake_featured_blog.webp", tag: null },
// ];

// const categories = [
//   { name: "Cakes", img: "/src/assets/3ade0a9606bdae637a44959ebc866635.jpg", color: "bg-[#FFD6E0]" }, // Soft Pink
//   { name: "Breads", img: "/src/assets/7c6f3076e545a9cc8faa2123d8788001.jpg", color: "bg-[#FFF1E6]" }, // Cream
//   { name: "Pastries", img: "/src/assets/9a7388e7ba8d216800a7abcc89ae5ff7.jpg", color: "bg-[#E2F0CB]" }, // Sage
//   { name: "Cookies", img: "/src/assets/3f2f14e18d9a177618f503ec18673382.jpg", color: "bg-[#D7E3FC]" }, // Soft Blue
// ];

// export default function Home() {
//   const navigate = useNavigate();
//   const [blogs, setBlogs] = useState([]);
//   const { scrollYProgress } = useScroll();
//   const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   useEffect(() => {
//     getBlogs().then((data) => {
//       if(data) setBlogs(data.slice(0, 3));
//     });
//   }, []);

//   return (
//     <div className="bg-[#FAFAFA] min-h-screen font-sans text-slate-900 overflow-x-hidden">
//       <Navbar />

//       {/* ---------------------------------------------
//           HERO SECTION: THE BENTO GRID (Trendy 2025)
//          --------------------------------------------- */}
//       <section className="pt-32 pb-12 px-4 md:px-8 max-w-[1440px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-12 md:grid-rows-[200px_200px_200px] gap-4">
          
//           {/* 1. Main Title Block (Big & Bold) */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="col-span-1 md:col-span-8 row-span-2 bg-[#FF8FAB] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
//           >
//             <img src="https://www.transparenttextures.com/patterns/cubes.png" className="absolute inset-0 opacity-10 mix-blend-multiply" alt="" />
//             <div className="relative z-10">
//               <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Est. 2025</span>
//               <h1 className="text-5xl md:text-7xl font-black text-[#590D22] leading-[0.9] mb-6">
//                 Baking the <br/> <span className="text-white italic font-serif">Impossible.</span>
//               </h1>
//               <div className="flex gap-4">
//                 <button onClick={() => navigate("/allproduct")} className="bg-[#590D22] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Order Now</button>
//                 <button onClick={() => navigate("/allproduct")} className="bg-white/30 backdrop-blur-md text-[#590D22] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">View Menu</button>
//               </div>
//             </div>
//             {/* Decorative Donut */}
//             <motion.img 
//               src="/src/assets/bun1.jpg" 
//               className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full object-cover border-8 border-white/30 shadow-2xl rotate-12"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             />
//           </motion.div>

//           {/* 2. Feature Image Block (Top Right) */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="col-span-1 md:col-span-4 row-span-2 relative rounded-[2.5rem] overflow-hidden group cursor-pointer"
//             onClick={() => navigate('/allproduct')}
//           >
//             <img src="/src/assets/cakee1.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hero" />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
//             <div className="absolute bottom-6 left-6 text-black">
//               <p className="text-sm font-bold uppercase">Featured</p>
//               <h3 className="text-2xl font-serif italic">The Belgian Truffle</h3>
//             </div>
//             <div className="absolute top-6 right-6 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">↗</div>
//           </motion.div>

//           {/* 3. Stats / Info Block (Bottom Left) */}

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="col-span-1 md:col-span-4 row-span-1 bg-[#FB6F92] rounded-[2.5rem] p-6 flex flex-col justify-center text-black text-center"
//           >
//             <h2 className="text-4xl font-black">50+</h2>
//             <p className="font-medium opacity-90">Daily Varieties</p>
//           </motion.div>

//           {/* 4. Marquee Block (Bottom Middle) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="col-span-1 md:col-span-8 row-span-1 bg-[#FFE5EC] rounded-[2.5rem] flex items-center overflow-hidden relative px-4"
//           >
//             <motion.div 
//               className="flex gap-8 whitespace-nowrap text-[#590D22] font-bold text-xl uppercase tracking-wider"
//               animate={{ x: ["0%", "-100%"] }}
//               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//             >
//               <span>🥐 Fresh Croissants</span><span>🧁 Sweet Cupcakes</span><span>🍞 Sourdough</span><span>🍩 Glazed Donuts</span>
//               <span>🥐 Fresh Croissants</span><span>🧁 Sweet Cupcakes</span><span>🍞 Sourdough</span><span>🍩 Glazed Donuts</span>
//             </motion.div>
//           </motion.div>

//         </div>
//       </section>

//       {/* ---------------------------------------------
//           CATEGORIES (Circular & Colorful)
//          --------------------------------------------- */}
//       <section className="py-16 px-4 max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-3xl font-black text-slate-800">What's Baking?</h2>
//           <a href="/allproduct" className="text-[#FB6F92] font-bold hover:underline">See All</a>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat, i) => (
//             <motion.div 
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className={`${cat.color} p-4 rounded-[2rem] flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-xl`}
//               onClick={() => navigate("/allproduct")}
//             >
//               <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
//                 <img src={cat.img} className="w-full h-full object-cover" alt={cat.name} />
//               </div>
//               <h3 className="font-bold text-xl text-slate-800">{cat.name}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------------------------------------
//           TRENDING SCROLL (Horizontal Cards)
//          --------------------------------------------- */}
//       <section className="py-20 bg-slate-900 text-black overflow-hidden relative">
//         {/* Background Blob */}
//         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="mb-12 max-w-lg">
//             <span className="text-[#FB6F92] font-bold tracking-widest uppercase">Favorites</span>
//             <h2 className="text-4xl md:text-6xl font-serif italic mt-2">Everyone's <br/> Obsession</h2>
//           </div>

//           <div className="flex overflow-x-auto gap-6 pb-8 snap-x scroll-smooth hide-scrollbar">
//             {products.map((item) => (
//               <motion.div 
//                 key={item.id}
//                 whileHover={{ y: -10 }}
//                 className="min-w-[280px] md:min-w-[320px] bg-white/10 backdrop-blur-md rounded-3xl p-4 snap-center border border-white/10 hover:border-[#FB6F92]/50 transition-colors"
//               >
//                 <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-slate-800">
//                   <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
//                   {item.tag && (
//                     <span className="absolute top-3 left-3 bg-[#FB6F92] text-black text-xs font-bold px-3 py-1 rounded-full">
//                       {item.tag}
//                     </span>
//                   )}
//                   <button 
//                     onClick={() => navigate("/allproduct")}
//                     className="absolute bottom-3 right-3 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-[#FB6F92] hover:text-black transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <h3 className="text-xl font-bold mb-1">{item.name}</h3>
//                 <p className="text-[#FB6F92] font-mono text-lg">{item.price}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------
//           FEATURED BLOG (Magazine Layout)
//          --------------------------------------------- */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-black text-slate-800 mb-12 text-center">The Baker's Journal</h2>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Main Large Blog */}
//           {blogs[0] && (
//             <motion.div 
//               whileHover={{ scale: 0.98 }}
//               className="relative rounded-[2.5rem] overflow-hidden h-[400px] lg:h-[500px] cursor-pointer"
//               onClick={() => navigate(`/blogs/${blogs[0]._id}`)}
//             >
//               <img src={blogs[0].image || "/src/assets/cakee1.jpg"} className="w-full h-full object-cover" alt="" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-black">
//                 <span className="bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md w-fit mb-3">Latest Story</span>
//                 <h3 className="text-3xl font-bold mb-2">{blogs[0].title}</h3>
//                 <p className="opacity-80 line-clamp-2">{blogs[0].summary}</p>
//               </div>
//             </motion.div>
//           )}

//           {/* Smaller Side Blogs */}
//           <div className="flex flex-col gap-6">
//             {blogs.slice(1, 3).map((blog) => (
//               <motion.div 
//                 key={blog._id}
//                 whileHover={{ x: 10 }}
//                 className="flex gap-6 items-center bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-lg border border-slate-100 cursor-pointer h-full"
//                 onClick={() => navigate(`/blogs/${blog._id}`)}
//               >
//                 <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
//                   <img src={blog.image || "/src/assets/default-blog.jpg"} className="w-full h-full object-cover" alt="" />
//                 </div>
//                 <div>
//                   <span className="text-[#FB6F92] text-xs font-bold uppercase">Tips & Tricks</span>
//                   <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">{blog.title}</h3>
//                   <span className="text-slate-400 text-sm underline decoration-2 decoration-[#FB6F92]">Read Article</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------
//           NEWSLETTER (Floating Pill)
//          --------------------------------------------- */}
//       <section className="pb-24 px-4">
//         <div className="max-w-4xl mx-auto bg-[#590D22] rounded-[3rem] p-10 text-center text-white relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-5xl font-serif italic mb-4">Don't miss a crumb.</h2>
//             <p className="mb-8 opacity-80">Join 10,000+ dessert lovers getting sweet deals.</p>
//             <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//               <input 
//                 type="email" 
//                 placeholder="Your email..." 
//                 className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20"
//               />
//               <button className="bg-[#FF8FAB] text-[#590D22] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* CSS Utilities */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,400;1,400;1,700&display=swap');
        
//         body { font-family: 'DM Sans', sans-serif; }
//         .font-serif { font-family: 'Playfair Display', serif; }
        
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </div>
//   );
// }\



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../api/blogApi";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi"; // You might need to install react-icons

export default function Home() {
  const navigate = useNavigate();

  // --------------------------------------------
  // CONFIGURATION & DATA
  // --------------------------------------------
  
  // Luxury Color Palette (For reference)
  // Cream: #FFF8EC | Coffee: #6A4E3B | Rose: #E8C7BE | Gold: #D6A85B

  const carouselItems = [
    {
      img: "/src/assets/cakee1.jpg",
      title: "Artisan Chocolate Cake",
      subtitle: "A Symphony of Belgian Cocoa",
      desc: "Handcrafted with 70% dark chocolate and fresh farm cream.",
      btnShop: "/allproduct",
      btnLearn: "/detail"
    },
    {
      img: "/src/assets/vanilla_cupcake_featured_blog.webp",
      title: "Vanilla Dream Cupcakes",
      subtitle: "Soft, Fluffy & Divine",
      desc: "Madagascan vanilla bean sponge with buttercream frosting.",
      btnShop: "/allproduct",
      btnLearn: "/detail"
    },
    {
      img: "/src/assets/instagram-bakers-1.jpg",
      title: "French Pastries",
      subtitle: "Taste of Paris",
      desc: "Authentic croissants and macarons baked fresh every morning.",
      btnShop: "/allproduct",
      btnLearn: "/detail"
    }
  ];

  const sampleImgs = [
    { img: "/src/assets/bun1.jpg", name: "Cinnamon Roll", price: "$3.99", tag: "Best Seller" },
    { img: "/src/assets/cakee1.jpg", name: "Royal Chocolate", price: "$29.99", tag: "Signature" },
    { img: "/src/assets/breadd.jpg", name: "Rustic Sourdough", price: "$5.99", tag: "Organic" },
    { img: "/src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", name: "Berry Tart", price: "$6.99", tag: "Seasonal" },
    { img: "/src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp", name: "Mousse Cup", price: "$8.99", tag: "New" }
  ];

  const categoryImgs = [
    { img: "/src/assets/3ade0a9606bdae637a44959ebc866635.jpg", name: "Cakes" },
    { img: "/src/assets/3f2f14e18d9a177618f503ec18673382.jpg", name: "Cookies" },
    { img: "/src/assets/7c6f3076e545a9cc8faa2123d8788001.jpg", name: "Artisan Breads" },
    { img: "/src/assets/9a7388e7ba8d216800a7abcc89ae5ff7.jpg", name: "French Pastries" },
    { img: "/src/assets/81dfe1ad8f2767fe5b4d81652c7b1d15.jpg", name: "Desserts" }
  ];

  const [current, setCurrent] = useState(0);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 6000);
    getBlogs().then((data) => setBlogs(data ? data.slice(0, 3) : []));
    return () => clearInterval(interval);
  }, []);

  // --------------------------------------------
  // ANIMATIONS
  // --------------------------------------------
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="font-sans text-[#6A4E3B] bg-[#FFF8EC] min-h-screen selection:bg-[#D6A85B] selection:text-white">
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={carouselItems[current].img}
                alt="Hero"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              key={`text-${current}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl text-white z-10"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-[#D6A85B]"></span>
                <span className="uppercase tracking-[0.2em] text-sm font-medium text-[#D6A85B]">
                  {carouselItems[current].subtitle}
                </span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {carouselItems[current].title}
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg font-light leading-relaxed"
              >
                {carouselItems[current].desc}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
                <button
                  onClick={() => navigate(carouselItems[current].btnShop)}
                  className="bg-[#D6A85B] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-[#c49648] transition-all shadow-lg shadow-[#D6A85B]/30 hover:scale-105 flex items-center gap-2"
                >
                  Shop Now <FiShoppingBag />
                </button>
                <button
                  onClick={() => navigate(carouselItems[current].btnLearn)}
                  className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-white hover:text-[#6A4E3B] transition-all"
                >
                  Discover More
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  idx === current ? "w-12 bg-[#D6A85B]" : "w-3 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* 2. TODAY'S SPECIALS */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D6A85B] uppercase tracking-widest text-sm font-bold">Fresh from the oven</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#6A4E3B] mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Today's Specials
            </h2>
            <div className="w-24 h-1 bg-[#E8C7BE] mx-auto mt-6 rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 "
          >
            {sampleImgs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(106,78,59,0.15)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-[#6A4E3B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="h-64 overflow-hidden bg-[#F5F0EB]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-[#6A4E3B] mb-2">{item.name}</h3>
                  <p className="text-[#D6A85B] font-bold text-lg">{item.price}</p>
                  <button 
                    onClick={() => navigate("/allproduct")}
                    className="mt-4 text-sm font-semibold text-[#6A4E3B] border-b border-[#E8C7BE] pb-1 hover:text-[#D6A85B] hover:border-[#D6A85B] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. CATEGORIES SECTION (Parallax/Modern Feel) */}
        <section className="py-24 bg-[#FDFBF7] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#6A4E3B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Collections
                </h2>
                <p className="text-[#8C7B6F] mt-3">Explore our wide range of handcrafted delights.</p>
              </div>
              <button 
                onClick={() => navigate("/allproduct")}
                className="hidden md:flex items-center gap-2 text-[#D6A85B] font-semibold hover:translate-x-2 transition-transform"
              >
                View All Categories <FiArrowRight />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categoryImgs.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  onClick={() => navigate("/allproduct")}
                  className="cursor-pointer group"
                >
                  {/* Arched Window Shape */}
                  <div className="relative h-80 rounded-t-full rounded-b-[10rem] overflow-hidden border-[6px] border-white shadow-xl">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6A4E3B]/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <h3 className="text-white font-serif text-2xl tracking-wide group-hover:text-[#D6A85B] transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. LATEST BLOGS */}
        <section className="py-24 px-6 max-w-7xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#6A4E3B]" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Baker's Journal
            </h2>
            <p className="text-[#8C7B6F] mt-4 max-w-2xl mx-auto">
              Tips, stories, and sweetness from our kitchen to yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.length > 0 ? blogs.map((blog, i) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/blogs/${blog._id}`)}
              >
                <div className="relative h-72 overflow-hidden rounded-xl mb-6">
                  <img
                    src={blog.image || "/src/assets/cakee1.jpg"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-center">
                    <span className="block text-xs text-gray-500 uppercase">New</span>
                    <span className="block font-bold text-[#6A4E3B]">Post</span>
                  </div>
                </div>
                
                <div className="pr-4">
                  <span className="text-[#D6A85B] text-sm font-bold uppercase tracking-wider ">Bakery News</span>
                  <h3 className="text-2xl font-serif text-[#6A4E3B] mt-2 mb-3 group-hover:text-[#D6A85B] transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-2 mb-4 font-light">
                    {blog.summary || "Discover the secrets behind our most loved pastries and the art of baking..."}
                  </p>
                  <div className="flex items-center gap-2 text-[#6A4E3B] font-semibold group-hover:gap-3 transition-all">
                    Read Article <FiArrowRight />
                  </div>
                </div>
              </motion.div>
            )) : (
              <p className="col-span-3 text-center text-gray-400">Loading stories...</p>
            )}
          </div>
        </section>

        {/* CTA Section (Optional Luxury Addition) */}
        <section className="py-15  bg-pink-700 text-[#FFF8EC] text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-serif mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Experience the Taste of Luxury
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Visit our store or order online to enjoy the finest baked goods in town.
            </p>
            <button 
               onClick={() => navigate("/allproduct")}
               className="bg-[#FFF8EC] text-[#6A4E3B] px-10 py-3 rounded-full font-bold hover:bg-[#D6A85B] hover:text-white transition-colors"
            >
              View Full Menu
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}