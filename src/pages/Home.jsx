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


// //important///
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
//     "https://images.unsplash.com/photo-1599785209707-3c7a4f5df77d?auto=format&fit=crop&w=400&q=80",
//     "https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=400&q=80",
//     "https://images.unsplash.com/photo-1603072023087-1bde0b981e63?auto=format&fit=crop&w=400&q=80",
//     "https://images.unsplash.com/photo-1603072033087-3d6f9b981e63?auto=format&fit=crop&w=400&q=80",
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
//         <section className="max-w-7xl mx-auto px-6 mt-12">
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
//         </section>

//         {/* Categories Section */}
//         <section className="max-w-7xl mx-auto px-6 mt-12 mb-20">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-lg shadow-sm p-4 text-center hover:scale-105 transform transition"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=400&q=80"
//                   alt={`cat-${i}`}
//                   className="h-28 mx-auto rounded-lg"
//                 />
//                 <p className="mt-2 font-medium">Category {i}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }




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

//   const saleItems = [
//     { img: "src/assets/sale1.png", bg: "#ffccd5" },
//     { img: "src/assets/sale2.png", bg: "#ffe5ec" },
//     { img: "src/assets/sale3.png", bg: "#ffb3c1" },
//   ];

//   const categories = [
//     { img: "src/assets/cake1.png", title: "Cakes" },
//     { img: "src/assets/macaroon.png", title: "Macaroons" },
//     { img: "src/assets/cup.png", title: "Cup Cakes" },
//     { img: "src/assets/donut.png", title: "Donuts" },
//   ];

//   const socialIcons = [
//     { img: "src/assets/facebook.png", link: "#" },
//     { img: "src/assets/instagram.png", link: "#" },
//     { img: "src/assets/twitter.png", link: "#" },
//   ];

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

//               {/* Typing Effect Title */}
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

//             {/* Floating Particles */}
//             {[...Array(12)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-3 h-3 rounded-full bg-white/50"
//                 initial={{ y: -50, x: Math.random() * 800 }}
//                 animate={{ y: [ -50, 350 ], opacity: [0, 0.7, 0], rotate: Math.random() * 360 }}
//                 transition={{ duration: 5 + Math.random() * 4, repeat: Infinity, delay: i * 0.4 }}
//               />
//             ))}

//             {/* Floating Cakes */}
//             {[...Array(5)].map((_, i) => (
//               <motion.img
//                 key={i}
//                 src="src/assets/cake1.png"
//                 className="absolute w-10 h-10"
//                 style={{ left: `${Math.random() * 80}%` }}
//                 initial={{ y: -50, opacity: 0 }}
//                 animate={{ y: 200 + scrollY * 0.1, opacity: 1, rotate: [0, 360] }}
//                 transition={{ duration: 8 + Math.random() * 3, repeat: Infinity, delay: i }}
//               />
//             ))}

//             {/* Mouse-follow sparkles */}
//             {[...Array(6)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-2 h-2 rounded-full bg-pink-300/70"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   x: mousePos.x + Math.random() * 20 - 10,
//                   y: mousePos.y + Math.random() * 20 - 10,
//                   opacity: [0, 1, 0],
//                   scale: [0.5, 1, 0.5],
//                 }}
//                 transition={{ duration: 0.6 + i * 0.1, repeat: Infinity }}
//               />
//             ))}

//           </div>
//         </section>

//         {/* SALE SECTION */}
//         <section className="max-w-7xl mx-auto px-6 py-10">
//           <h2 className="text-3xl font-extrabold text-rose-700 mb-6 tracking-wide">
//             Hot Deals 🔥
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//             {saleItems.map((item, i) => (
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
//             {categories.map((cat, i) => (
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


import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const carouselItems = [
    {
      img: "https://previews.123rf.com/images/kowit1982/kowit19821609/kowit1982160900201/63891068-black-forest-cake.jpg",
      title: "Chocolate Delight",
      desc: "Indulge in rich chocolate cakes made with premium cocoa and love.",
    },
    {
      img: "https://static2.kapruka.com/product-image/width=276,quality=93,f=auto/shops/cakes/productImages/zoom/1735025993442_stawberry.jpg",
      title: "Strawberry Fantasy",
      desc: "Taste the freshness of strawberries blended into a perfect cake.",
    },
    {
      img: "src/assets/cakee1.jpg",
      title: "Pure Vanilla Magic",
      desc: "Classic vanilla cakes baked with perfection for every occasion.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [search, setSearch] = useState("");

  const saleItems = [
    { img: "src/assets/674079d70e634c7374e5380ff3f542aa.jpg", bg: "#ffccd5" },
    { img: "src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", bg: "#ffe5ec" },
    { img: "src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp", bg: "#ffb3c1" },
  ];

  const categories = [
    { img: "src/assets/cakee1.jpg", title: "Cakes" },
    { img: "src/assets/breadd.jpg", title: "Bread" },
    { img: "src/assets/vanilla_cupcake_featured_blog.webp", title: "Cup Cakes" },
    { img: "src/assets/bun1.jpg", title: "Curry Bun" },
  ];

  const socialIcons = [
    { img: "src/assets/facebook.png", link: "#" },
    { img: "src/assets/instagram.png", link: "#" },
    { img: "src/assets/twitter.png", link: "#" },
  ];

  // Filtered items for search
  const filteredSaleItems = saleItems.filter((item) =>
    item.img.toLowerCase().includes(search.toLowerCase())
  );
  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase())
  );

  // Carousel interval
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1)),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  // Typing effect for hero title
  useEffect(() => {
    setTypedTitle("");
    let i = 0;
    const title = carouselItems[current].title;
    const interval = setInterval(() => {
      if (i < title.length) {
        setTypedTitle((prev) => prev + title[i]);
        i++;
      } else clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [current]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for sparkles / floating cakes
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24"></div> {/* Space below navbar */}

      <main className="bg-gradient-to-b from-rose-50 to-pink-100/30 min-h-screen overflow-x-hidden relative">

        {/* HERO CAROUSEL */}
        <section className="max-w-7xl mx-auto px-6 py-12 relative">
          <div className="relative w-full h-96 md:h-[30rem] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(255,105,180,0.25)]">

            <AnimatePresence>
              {carouselItems.map((item, i) =>
                i === current && (
                  <motion.img
                    key={i}
                    src={item.img}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1, y: scrollY * 0.05 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )
              )}
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 
            bg-gradient-to-r from-rose-900/60 via-rose-700/40 to-transparent text-white z-20">

              <motion.h1
                key={typedTitle}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-xl"
              >
                {typedTitle}
              </motion.h1>

              <motion.p
                key={carouselItems[current].desc}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl max-w-xl drop-shadow-md"
              >
                {carouselItems[current].desc}
              </motion.p>

              <div className="mt-6 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,105,180,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-rose-600/90 text-white px-7 py-3 rounded-xl hover:bg-rose-700 shadow-lg hover:shadow-rose-300/40 transition-all duration-300"
                >
                  Shop Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,105,180,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/80 px-7 py-3 rounded-xl hover:bg-white hover:text-rose-700 shadow-lg hover:shadow-rose-300/40 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {carouselItems.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  whileHover={{ scale: 1.3 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === current ? "bg-rose-600 scale-125" : "bg-rose-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SEARCH BAR */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <input
              type="text"
              placeholder="Search cakes, macaroons, etc..."
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
          </motion.div>
        </section>

        {/* SALE SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-extrabold text-rose-700 mb-6 tracking-wide">
            Hot Deals 🔥
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {filteredSaleItems.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-6 flex justify-center items-center shadow-md hover:shadow-rose-200 transition-all"
                style={{ backgroundColor: item.bg }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <img src={item.img} className="h-28 object-contain drop-shadow-md" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-extrabold text-rose-700 mb-6 tracking-wide">
            Categories 🍰
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {filteredCategories.map((cat, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md p-5 text-center transition-all duration-300"
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                  boxShadow: "0 15px 25px rgba(255,105,180,0.3)",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="h-28 mx-auto rounded-xl shadow-lg"
                />
                <p className="mt-3 font-semibold text-gray-700 tracking-wide">{cat.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Social Icons */}
        <section className="max-w-7xl mx-auto px-6 py-10 flex justify-center gap-6">
          {socialIcons.map((icon, i) => (
            <motion.a
              key={i}
              href={icon.link}
              whileHover={{ scale: 1.2, rotate: 10, opacity: 0.8 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={icon.img} className="w-10 h-10" />
            </motion.a>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
