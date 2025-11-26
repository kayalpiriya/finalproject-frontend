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



//my home page //

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










// myyyy//



// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useInView,
// } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { getBlogs } from "../api/blogApi";
// import {
//   FiArrowRight,
//   FiArrowLeft,
//   FiShoppingBag,
//   FiStar,
//   FiHeart,
//   FiCoffee,
//   FiAward,
//   FiClock,
//   FiCheck,
//   FiX,
//   FiPercent,
// } from "react-icons/fi";

// // --- 1. THEME & STYLES ---
// const THEME = {
//   bg: "#F3E9DC",          // Warm Beige
//   glass: "rgba(255, 255, 255, 0.65)", // Glass Effect
//   glassBorder: "rgba(255, 255, 255, 0.6)",
//   primary: "#4A3B32",     // Dark Coffee
//   secondary: "#8D6E63",   // Milk Chocolate
//   accent: "#C08552",      // Terracotta / Crust
//   cream: "#FDFBF7",       // Off-white
//   white: "#FFFFFF",
// };

// const FONTS = {
//   serif: "'Playfair Display', serif",
//   sans: "'Mulish', sans-serif",
// };

// // --- 2. HELPER COMPONENTS ---

// // Magnetic Button
// const MagneticButton = ({ children, onClick, style, className }) => {
//   const ref = useRef(null);
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   const handleMouse = (e) => {
//     const { clientX, clientY } = e;
//     const rect = ref.current.getBoundingClientRect();
//     const x = (clientX - (rect.left + rect.width / 2)) * 0.1;
//     const y = (clientY - (rect.top + rect.height / 2)) * 0.1;
//     setPos({ x, y });
//   };

//   return (
//     <motion.button
//       ref={ref}
//       onMouseMove={handleMouse}
//       onMouseLeave={() => setPos({ x: 0, y: 0 })}
//       animate={{ x: pos.x, y: pos.y }}
//       transition={{ type: "spring", stiffness: 150, damping: 15 }}
//       className={className}
//       style={style}
//       onClick={onClick}
//     >
//       {children}
//     </motion.button>
//   );
// };

// // Scroll Reveal
// const Reveal = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ y: 40, opacity: 0 }}
//       animate={isInView ? { y: 0, opacity: 1 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25, 0.25, 0, 1] }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // Infinite Marquee
// const Marquee = () => (
//   <div className="overflow-hidden py-3 border-y border-[#4A3B32]/10" style={{ backgroundColor: THEME.primary, color: THEME.bg }}>
//     <motion.div 
//       className="flex whitespace-nowrap gap-12 text-sm font-bold uppercase tracking-[0.2em] items-center"
//       animate={{ x: [0, -1000] }}
//       transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
//     >
//       {[...Array(8)].map((_, i) => (
//         <span key={i} className="flex items-center gap-4 px-4">
//           Fresh Baked Daily <FiStar className="text-[#C08552]" /> 100% Organic Flour <FiStar className="text-[#C08552]" /> Handmade with Love
//         </span>
//       ))}
//     </motion.div>
//   </div>
// );

// // --- 3. MAIN COMPONENT ---

// export default function Home() {
//   const navigate = useNavigate();
//   const { scrollYProgress } = useScroll();
//   const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   // --- STATE ---
//   const [current, setCurrent] = useState(0);
//   const [blogs, setBlogs] = useState([]);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
  
//   // Logic State (Restored)
//   const [showAnnouncement, setShowAnnouncement] = useState(true);
//   const [quickViewProduct, setQuickViewProduct] = useState(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [isCartBumping, setIsCartBumping] = useState(false);
//   const [filter, setFilter] = useState("all"); // 'all', 'sweet', 'savory'
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   // --- DATA ---
//   const carouselItems = [
//     {
//       img: "/src/assets/cakee1.jpg",
//       title: "Artisan Chocolate",
//       subtitle: "Belgian Cocoa Symphony",
//       desc: "Handcrafted with 70% dark chocolate and fresh farm cream.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/vanilla_cupcake_featured_blog.webp",
//       title: "Vanilla Dream",
//       subtitle: "Soft, Fluffy & Divine",
//       desc: "Madagascan vanilla bean sponge with buttercream frosting.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/instagram-bakers-1.jpg",
//       title: "French Pastry",
//       subtitle: "Taste of Paris",
//       desc: "Authentic croissants and macarons baked fresh every morning.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     }
//   ];

//   // ADDED 'type' property for filtering logic
//   const sampleImgs = [
//     { img: "/src/assets/bun1.jpg", name: "Cinnamon Roll", price: "$3.99", tag: "Best Seller", rating: 4.9, type: "sweet" },
//     { img: "/src/assets/cakee1.jpg", name: "Royal Chocolate", price: "$29.99", tag: "Signature", rating: 5.0, type: "sweet" },
//     { img: "/src/assets/breadd.jpg", name: "Rustic Sourdough", price: "$5.99", tag: "Organic", rating: 4.8, type: "savory" },
//     { img: "/src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", name: "Berry Tart", price: "$6.99", tag: "Seasonal", rating: 4.7, type: "sweet" },
//     { img: "/src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp", name: "Mousse Cup", price: "$8.99", tag: "New", rating: 4.9, type: "sweet" }
//   ];

//   const categoryImgs = [
//     { img: "/src/assets/3ade0a9606bdae637a44959ebc866635.jpg", name: "Cakes", count: "45 Items" },
//     { img: "/src/assets/3f2f14e18d9a177618f503ec18673382.jpg", name: "Cookies", count: "32 Items" },
//     { img: "/src/assets/7c6f3076e545a9cc8faa2123d8788001.jpg", name: "Artisan Breads", count: "28 Items" },
//     { img: "/src/assets/9a7388e7ba8d216800a7abcc89ae5ff7.jpg", name: "French Pastries", count: "56 Items" },
//     { img: "/src/assets/81dfe1ad8f2767fe5b4d81652c7b1d15.jpg", name: "Desserts", count: "40 Items" }
//   ];

//   const testimonials = [
//     { name: "Sarah Johnson", role: "Food Blogger", text: "The most exquisite pastries I've ever tasted.", rating: 5 },
//     { name: "Michael Chen", role: "Chef", text: "Impressed by the attention to detail and quality.", rating: 5 },
//     { name: "Emma Williams", role: "Customer", text: "My go-to bakery for all special occasions.", rating: 5 }
//   ];

//   // --- EFFECTS ---
//   useEffect(() => {
//     const interval = setInterval(() => setCurrent((prev) => (prev + 1) % carouselItems.length), 6000);
//     const testimonialInterval = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 5000);
//     getBlogs().then((data) => setBlogs(data ? data.slice(0, 3) : []));
//     return () => { clearInterval(interval); clearInterval(testimonialInterval); };
//   }, []);

//   // --- LOGIC HANDLERS ---
//   const handlePrev = () => setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
//   const handleNext = () => setCurrent((prev) => (prev + 1) % carouselItems.length);

//   const addToCart = () => {
//     setCartCount(c => c + 1);
//     setIsCartBumping(true);
//     setTimeout(() => setIsCartBumping(false), 300);
//   };

//   const handleSubscribe = () => {
//     if(email) setSubscribed(true);
//   };

//   // Filter Logic
//   const filteredProducts = filter === "all" 
//     ? sampleImgs 
//     : sampleImgs.filter(img => img.type === filter);

//   return (
//     <div style={{ backgroundColor: THEME.bg, color: THEME.primary, fontFamily: FONTS.sans, overflowX: "hidden" }}>
      
//       {/* STYLES */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        
//         .font-serif { font-family: 'Playfair Display', serif; }
        
//         /* Glassmorphism Class */
//         .glass-card {
//           background: ${THEME.glass};
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           border: 1px solid ${THEME.glassBorder};
//           box-shadow: 0 15px 40px rgba(74, 59, 50, 0.08);
//         }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         ::selection { background: ${THEME.accent}; color: white; }
//       `}</style>

//       {/* 1. TOP ANNOUNCEMENT BAR */}
//       <AnimatePresence>
//         {showAnnouncement && (
//           <motion.div 
//             initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
//             className="bg-[#C08552] text-white text-xs md:text-sm font-bold relative z-[60]"
//           >
//             <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
//               <div className="flex items-center gap-2 mx-auto">
//                 <FiPercent /> <span>Get 20% off your first order with code: <strong>SWEET20</strong></span>
//               </div>
//               <button onClick={() => setShowAnnouncement(false)} className="hover:text-black/50 transition-colors"><FiX /></button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Navbar />

//       <main>
//         {/* 2. HERO SECTION */}
//         <section className="relative pt-24 pb-20 px-6 lg:px-12">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            
//             {/* Background Blobs */}
//             <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#C08552]/10 blur-[100px] pointer-events-none" />

//             {/* Left Content */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
//               className="relative z-10"
//             >
//               <div className="inline-block px-4 py-2 rounded-full border border-[#4A3B32]/10 bg-white/40 backdrop-blur-sm mb-6">
//                 <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: THEME.accent }}>Est. 2025 Bakery</span>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] mb-6" style={{ color: THEME.primary }}>
//                 {carouselItems[current].title}
//                 <br />
//                 <span style={{ color: THEME.accent, fontStyle: "italic" }}>{carouselItems[current].subtitle}</span>
//               </h1>
              
//               <p className="text-lg opacity-80 mb-8 max-w-md leading-relaxed">
//                 {carouselItems[current].desc}
//               </p>

//               <div className="flex gap-4 flex-wrap">
//                 <MagneticButton 
//                   onClick={() => navigate(carouselItems[current].btnShop)}
//                   className="px-10 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all hover:bg-[#C08552]"
//                   style={{ backgroundColor: THEME.primary }}
//                 >
//                   Order Now
//                 </MagneticButton>
//                 <MagneticButton 
//                   onClick={() => navigate(carouselItems[current].btnLearn)}
//                   className="px-10 py-4 rounded-full font-bold border border-[#4A3B32] hover:bg-[#4A3B32] hover:text-white transition-colors"
//                 >
//                    Explore Menu
//                 </MagneticButton>
//               </div>

//               <div className="mt-8 flex gap-6 text-sm font-semibold text-[#8D6E63]">
//                 <div className="flex items-center gap-2"><FiAward /> <span>Top Rated Bakery</span></div>
//                 <div className="flex items-center gap-2"><FiClock /> <span>Open 7AM – 8PM</span></div>
//               </div>
//             </motion.div>

//             {/* Right Carousel - FIXED SIZE */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative z-10"
             
//             >
//                <div className="glass-card p-3"  style={{borderRadius:"30px"}}>
//                  <div className=" aspect-[4/5] md:aspect-square lg:aspect-[4/5]  overflow-hidden bg-[#E5DCD0]" style={{height:"300px"}}>
//                     <AnimatePresence mode="wait">
//                       <motion.img 
//                         key={current}
//                         src={carouselItems[current].img} 
//                         initial={{ opacity: 0, scale: 1.1 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 w-full h-full object-cover"
//                         alt="Hero"
//                         style={{borderRadius:"30px"}}
//                       />
//                     </AnimatePresence>
                    
//                     {/* Controls */}
//                     <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-end text-white z-20">
//                        <div>
//                          <p className="font-bold text-lg">0{current + 1}</p>
//                          <p className="text-xs opacity-80 uppercase tracking-widest">Featured Product</p>
//                        </div>
//                        <div className="flex items-center gap-4">
//                           <button onClick={handlePrev} className="hover:text-[#C08552] transition-colors"><FiArrowLeft size={24} /></button>
//                           <div className="flex gap-2">
//                              {carouselItems.map((_, idx) => (
//                                <div key={idx} className={`h-1.5 rounded-full transition-all ${current === idx ? "w-8 bg-[#C08552]" : "w-2 bg-white/50"}`} />
//                              ))}
//                           </div>
//                           <button onClick={handleNext} className="hover:text-[#C08552] transition-colors"><FiArrowRight size={24} /></button>
//                        </div>
//                     </div>
//                  </div>
//                </div>
//             </motion.div>
//           </div>
//         </section>

//         <Marquee />

//         {/* 3. WEEKLY SPECIALS (Bento + Tabs) */}
//         <section className="py-20 px-6 max-w-7xl mx-auto">
//            <Reveal>
//              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
//                <div>
//                  <p className="font-bold uppercase tracking-[0.25em] text-xs mb-2" style={{ color: THEME.accent }}>Menu Highlights</p>
//                  <h2 className="text-4xl md:text-5xl font-serif" style={{ color: THEME.primary }}>Weekly Specials</h2>
//                </div>
               
//                {/* Filter Tabs */}
//                <div className="glass-card p-1.5 rounded-full flex gap-1">
//                   {["all", "sweet", "savory"].map(tab => (
//                     <button
//                       key={tab}
//                       onClick={() => setFilter(tab)}
//                       className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${filter === tab ? "bg-[#4A3B32] text-white shadow-md" : "hover:bg-[#4A3B32]/5 text-[#4A3B32]"}`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                </div>
//              </div>
//            </Reveal>

//            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
//               <AnimatePresence mode="popLayout">
//                 {filteredProducts.slice(0, 3).map((item, i) => (
//                   <motion.div 
//                      key={item.name}
//                      layout
//                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
//                      className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer ${i === 0 ? "md:col-span-2" : ""}`}
//                      onClick={() => setQuickViewProduct(item)}
//                   >
//                       <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/80 via-transparent to-transparent" />
                      
//                       <div className="absolute top-5 left-5 flex gap-2">
//                          {item.tag && (
//                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#4A3B32] uppercase tracking-wider shadow-sm">
//                              {item.tag}
//                            </span>
//                          )}
//                       </div>

//                       <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                         <div className="flex justify-between items-end">
//                           <div>
//                              <h3 className="text-2xl font-serif mb-1">{item.name}</h3>
//                              <p className="text-xl font-bold text-[#C08552]">{item.price}</p>
//                           </div>
//                           <button 
//                             onClick={(e) => { e.stopPropagation(); addToCart(); }}
//                             className="w-12 h-12 bg-white text-[#4A3B32] rounded-full flex items-center justify-center hover:bg-[#C08552] hover:text-white transition-colors shadow-lg"
//                           >
//                             <FiShoppingBag size={20} />
//                           </button>
//                         </div>
//                       </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//            </div>
           
//            <div className="text-center mt-12">
//               <button onClick={() => navigate("/allproduct")} className="inline-flex items-center gap-2 font-bold border-b-2 border-[#4A3B32] pb-1 hover:text-[#C08552] hover:border-[#C08552] transition-colors">
//                 View Full Menu <FiArrowRight />
//               </button>
//            </div>
//         </section>

//         {/* 4. PARALLAX STATS */}
//         <section className="py-32 relative overflow-hidden">
//            <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
//               <img src={sampleImgs[2].img} className="w-full h-[130%] object-cover opacity-90" alt="" />
//            </motion.div>
//            <div className="absolute inset-0 bg-[#4A3B32]/85 z-0"></div>

//            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-[#F3E9DC] text-center">
//               {[
//                 { icon: FiClock, val: "4am", label: "First Batch" },
//                 { icon: FiAward, val: "15+", label: "Years Baking" },
//                 { icon: FiHeart, val: "100%", label: "Hand Made" },
//                 { icon: FiCoffee, val: "50+", label: "Daily Varieties" }
//               ].map((stat, i) => (
//                 <div key={i}>
//                    <stat.icon className="text-4xl mx-auto mb-4 text-[#C08552]" />
//                    <h3 className="text-5xl font-serif font-bold mb-2">{stat.val}</h3>
//                    <p className="uppercase text-xs tracking-widest opacity-70">{stat.label}</p>
//                 </div>
//               ))}
//            </div>
//         </section>

//         {/* 5. HORIZONTAL CATEGORIES */}
//         <section className="py-24 bg-[#FDFBF7]">
//            <div className="max-w-7xl mx-auto px-6 mb-10">
//               <h2 className="text-4xl font-serif" style={{ color: THEME.primary }}>Explore Collections</h2>
//            </div>
//            <div className="flex overflow-x-auto gap-6 px-6 pb-12 hide-scrollbar snap-x">
//               {categoryImgs.map((cat, i) => (
//                 <motion.div 
//                   key={i}
//                   whileHover={{ y: -10 }}
//                   className="min-w-[280px] h-[420px] rounded-[2rem] overflow-hidden relative cursor-pointer group snap-center shadow-md"
//                   onClick={() => navigate("/allproduct")}
//                 >
//                    <img src={cat.img} className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500" alt="" />
//                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32] via-transparent to-transparent opacity-90" />
//                    <div className="absolute bottom-8 left-8 text-white">
//                       <p className="text-xs font-bold uppercase text-[#C08552] mb-2">{cat.count}</p>
//                       <h3 className="text-3xl font-serif italic">{cat.name}</h3>
//                    </div>
//                 </motion.div>
//               ))}
//            </div>
//         </section>

//         {/* 6. JOURNAL & TESTIMONIALS */}
//         <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
//            <div>
//               <div className="flex justify-between items-baseline mb-8">
//                 <h2 className="text-4xl font-serif" style={{ color: THEME.primary }}>The Journal</h2>
//                 <button onClick={() => navigate("/blogs")} className="underline decoration-[#C08552] font-bold text-sm hover:text-[#C08552] transition-colors">View All Stories</button>
//               </div>
//               <div className="space-y-5">
//                  {blogs.map((blog, i) => (
//                    <div 
//                      key={i}
//                      className="glass-card p-4 rounded-[2rem] flex gap-5 cursor-pointer hover:bg-white transition-colors group"
//                      onClick={() => navigate(`/blogs/${blog._id}`)}
//                    >
//                       <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0">
//                          <img src={blog.image || "/src/assets/cakee1.jpg"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
//                       </div>
//                       <div className="flex flex-col justify-center">
//                          <span className="text-xs font-bold text-[#C08552] uppercase mb-1">Latest Post</span>
//                          <h3 className="text-xl font-serif leading-tight mb-2">{blog.title}</h3>
//                          <div className="flex items-center gap-2 text-xs font-bold opacity-60">
//                             Read More <FiArrowRight />
//                          </div>
//                       </div>
//                    </div>
//                  ))}
//               </div>
//            </div>
           
//            <div className="bg-[#4A3B32] text-[#F3E9DC] rounded-[3rem] p-12 flex flex-col justify-center text-center relative overflow-hidden">
//               <FiCoffee className="text-9xl absolute -top-6 -right-4 text-white opacity-5" />
//               <div className="relative z-10">
//                  <div className="flex justify-center gap-1 text-[#C08552] mb-6">
//                     {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
//                  </div>
//                  <AnimatePresence mode="wait">
//                     <motion.p 
//                        key={activeTestimonial}
//                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//                        className="text-2xl md:text-3xl font-serif italic mb-8 leading-snug"
//                     >
//                        "{testimonials[activeTestimonial].text}"
//                     </motion.p>
//                  </AnimatePresence>
//                  <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
//                  <p className="text-xs opacity-60 uppercase tracking-[0.2em]">{testimonials[activeTestimonial].role}</p>
//               </div>
//            </div>
//         </section>

//         {/* 7. NEWSLETTER */}
//         <section className="relative pt-24 pb-32 bg-[#FDFBF7] text-center">
//            <div className="max-w-3xl mx-auto px-6">
//               <h2 className="text-5xl font-serif mb-6" style={{ color: THEME.primary }}>Join the Club</h2>
//               <p className="text-lg opacity-70 mb-10">
//                  Get a free cookie on your birthday and weekly specials delivered straight to your inbox.
//               </p>
              
//               {!subscribed ? (
//                 <div className="glass-card p-2 rounded-full flex flex-col sm:flex-row max-w-lg mx-auto shadow-lg">
//                    <input 
//                      type="email" 
//                      placeholder="Enter your email address" 
//                      value={email}
//                      onChange={(e) => setEmail(e.target.value)}
//                      className="flex-1 bg-transparent px-6 py-3 outline-none text-[#4A3B32]"
//                    />
//                    <button 
//                      onClick={handleSubscribe}
//                      className="px-8 py-3 rounded-full text-white font-bold hover:scale-95 transition-transform mt-2 sm:mt-0 shadow-md"
//                      style={{ backgroundColor: THEME.accent }}
//                    >
//                      Subscribe
//                    </button>
//                 </div>
//               ) : (
//                 <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#4A7C59]/10 text-[#4A7C59] px-8 py-4 rounded-full inline-flex items-center gap-2 font-bold">
//                    <FiCheck /> You're on the list! Check your inbox.
//                 </motion.div>
//               )}
//            </div>
//         </section>
//       </main>

//       {/* --- OVERLAYS --- */}

//       {/* Sticky Cart Button */}
//       <AnimatePresence>
//         {cartCount > 0 && (
//           <motion.button
//             initial={{ y: 100, opacity: 0 }} 
//             animate={{ y: 0, opacity: 1, scale: isCartBumping ? 1.1 : 1 }} 
//             exit={{ y: 100, opacity: 0 }}
//             onClick={() => navigate("/allproduct")}
//             className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-full text-white font-bold shadow-2xl flex items-center gap-3 hover:bg-[#3d2f28] transition-colors"
//             style={{ backgroundColor: THEME.primary }}
//           >
//             <FiShoppingBag size={20} />
//             <span>{cartCount} Items</span>
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* Quick View Modal */}
//       <AnimatePresence>
//         {quickViewProduct && (
//           <motion.div 
//             className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center px-4 backdrop-blur-sm"
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => setQuickViewProduct(null)}
//           >
//             <motion.div 
//               className="bg-[#FDFBF7] rounded-[2.5rem] max-w-4xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 relative shadow-2xl"
//               initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//                <button onClick={() => setQuickViewProduct(null)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-20 hover:bg-gray-100 transition-colors"><FiX size={20} /></button>
               
//                <div className="h-64 md:h-full bg-[#E5DCD0]">
//                   <img src={quickViewProduct.img} className="w-full h-full object-cover" alt="" />
//                </div>
               
//                <div className="p-10 flex flex-col justify-center">
//                   <div className="inline-block px-4 py-1 bg-[#4A3B32]/10 text-[#4A3B32] text-xs font-bold uppercase rounded-full mb-6 w-fit">
//                      {quickViewProduct.tag || "Freshly Baked"}
//                   </div>
//                   <h2 className="text-4xl font-serif mb-3" style={{ color: THEME.primary }}>{quickViewProduct.name}</h2>
//                   <div className="flex items-center gap-2 mb-6">
//                      <p className="text-3xl font-bold" style={{ color: THEME.accent }}>{quickViewProduct.price}</p>
//                      <div className="h-4 w-[1px] bg-gray-300 mx-2"></div>
//                      <div className="flex text-[#C08552] text-sm">
//                         {[...Array(5)].map((_, i) => <FiStar key={i} className={i < Math.round(quickViewProduct.rating) ? "fill-current" : "text-gray-300"} />)}
//                      </div>
//                   </div>
                  
//                   <p className="opacity-70 mb-8 leading-relaxed">
//                      Crafted with our signature dough and premium ingredients. Soft, flavorful, and baked fresh this morning.
//                   </p>
                  
//                   <button 
//                     onClick={() => { addToCart(); setQuickViewProduct(null); }}
//                     className="w-full py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
//                     style={{ backgroundColor: THEME.primary }}
//                   >
//                      Add to Order
//                   </button>
//                </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Footer />
//     </div>
//   );
// }







// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useInView,
// } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { getBlogs } from "../api/blogApi";
// import {
//   FiArrowRight,
//   FiArrowLeft,
//   FiShoppingBag,
//   FiStar,
//   FiHeart,
//   FiCoffee,
//   FiAward,
//   FiClock,
//   FiCheck,
//   FiX,
//   FiPercent,
//   // FiQuote, // removed — not exported from react-icons/fi
// } from "react-icons/fi";
// import { FaQuoteLeft } from "react-icons/fa"; // replacement import

// // --- 1. THEME & STYLES ---
// const THEME = {
//   bg: "#F3E9DC",          // Warm Beige
//   glass: "rgba(255, 255, 255, 0.65)", // Glass Effect
//   glassBorder: "rgba(255, 255, 255, 0.6)",
//   primary: "#4A3B32",     // Dark Coffee
//   secondary: "#8D6E63",   // Milk Chocolate
//   accent: "#C08552",      // Terracotta / Crust
//   cream: "#FDFBF7",       // Off-white
//   white: "#FFFFFF",
// };

// const FONTS = {
//   serif: "'Playfair Display', serif",
//   sans: "'Mulish', sans-serif",
// };

// // --- 2. HELPER COMPONENTS ---

// // Magnetic Button
// const MagneticButton = ({ children, onClick, style, className }) => {
//   const ref = useRef(null);
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   const handleMouse = (e) => {
//     const { clientX, clientY } = e;
//     const rect = ref.current.getBoundingClientRect();
//     const x = (clientX - (rect.left + rect.width / 2)) * 0.1;
//     const y = (clientY - (rect.top + rect.height / 2)) * 0.1;
//     setPos({ x, y });
//   };

//   return (
//     <motion.button
//       ref={ref}
//       onMouseMove={handleMouse}
//       onMouseLeave={() => setPos({ x: 0, y: 0 })}
//       animate={{ x: pos.x, y: pos.y }}
//       transition={{ type: "spring", stiffness: 150, damping: 15 }}
//       className={className}
//       style={style}
//       onClick={onClick}
//     >
//       {children}
//     </motion.button>
//   );
// };

// // Scroll Reveal
// const Reveal = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ y: 40, opacity: 0 }}
//       animate={isInView ? { y: 0, opacity: 1 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25, 0.25, 0, 1] }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // Infinite Marquee
// const Marquee = () => (
//   <div className="overflow-hidden py-3 border-y border-[#4A3B32]/10" style={{ backgroundColor: THEME.primary, color: THEME.bg }}>
//     <motion.div 
//       className="flex whitespace-nowrap gap-12 text-sm font-bold uppercase tracking-[0.2em] items-center"
//       animate={{ x: [0, -1000] }}
//       transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
//     >
//       {[...Array(8)].map((_, i) => (
//         <span key={i} className="flex items-center gap-4 px-4">
//           Fresh Baked Daily <FiStar className="text-[#C08552]" /> 100% Organic Flour <FiStar className="text-[#C08552]" /> Handmade with Love
//         </span>
//       ))}
//     </motion.div>
//   </div>
// );

// // --- 3. MAIN COMPONENT ---

// export default function Home() {
//   const navigate = useNavigate();
//   const { scrollYProgress } = useScroll();
//   const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   // --- STATE ---
//   const [current, setCurrent] = useState(0);
//   const [blogs, setBlogs] = useState([]);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
  
//   // Logic State (Restored)
//   const [showAnnouncement, setShowAnnouncement] = useState(true);
//   const [quickViewProduct, setQuickViewProduct] = useState(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [isCartBumping, setIsCartBumping] = useState(false);
//   const [filter, setFilter] = useState("all"); // 'all', 'sweet', 'savory'
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   // Animation Variants for Journal Section
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { type: "spring", stiffness: 50 } 
//     }
//   };

//   // --- DATA ---
//   const carouselItems = [
//     {
//       img: "/src/assets/cakee1.jpg",
//       title: "Artisan Chocolate",
//       subtitle: "Belgian Cocoa Symphony",
//       desc: "Handcrafted with 70% dark chocolate and fresh farm cream.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/vanilla_cupcake_featured_blog.webp",
//       title: "Vanilla Dream",
//       subtitle: "Soft, Fluffy & Divine",
//       desc: "Madagascan vanilla bean sponge with buttercream frosting.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     },
//     {
//       img: "/src/assets/instagram-bakers-1.jpg",
//       title: "French Pastry",
//       subtitle: "Taste of Paris",
//       desc: "Authentic croissants and macarons baked fresh every morning.",
//       btnShop: "/allproduct",
//       btnLearn: "/detail"
//     }
//   ];

//   // ADDED 'type' property for filtering logic
//   const sampleImgs = [
//     { img: "/src/assets/bun1.jpg", name: "Cinnamon Roll", price: "$3.99", tag: "Best Seller", rating: 4.9, type: "sweet" },
//     { img: "/src/assets/cakee1.jpg", name: "Royal Chocolate", price: "$29.99", tag: "Signature", rating: 5.0, type: "sweet" },
//     { img: "/src/assets/breadd.jpg", name: "Rustic Sourdough", price: "$5.99", tag: "Organic", rating: 4.8, type: "savory" },
//     { img: "/src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", name: "Berry Tart", price: "$6.99", tag: "Seasonal", rating: 4.7, type: "sweet" },
//     { img: "/src/assets/cream-drop-chocolate-cake-1-kg-eggless_1.webp", name: "Mousse Cup", price: "$8.99", tag: "New", rating: 4.9, type: "sweet" }
//   ];

//   const categoryImgs = [
//     { img: "/src/assets/3ade0a9606bdae637a44959ebc866635.jpg", name: "Cakes", count: "45 Items" },
//     { img: "/src/assets/3f2f14e18d9a177618f503ec18673382.jpg", name: "Cookies", count: "32 Items" },
//     { img: "/src/assets/7c6f3076e545a9cc8faa2123d8788001.jpg", name: "Artisan Breads", count: "28 Items" },
//     { img: "/src/assets/9a7388e7ba8d216800a7abcc89ae5ff7.jpg", name: "French Pastries", count: "56 Items" },
//     { img: "/src/assets/81dfe1ad8f2767fe5b4d81652c7b1d15.jpg", name: "Desserts", count: "40 Items" }
//   ];

//   const testimonials = [
//     { name: "Sarah Johnson", role: "Food Blogger", text: "The most exquisite pastries I've ever tasted.", rating: 5 },
//     { name: "Michael Chen", role: "Chef", text: "Impressed by the attention to detail and quality.", rating: 5 },
//     { name: "Emma Williams", role: "Customer", text: "My go-to bakery for all special occasions.", rating: 5 }
//   ];

//   // --- EFFECTS ---
//   useEffect(() => {
//     const interval = setInterval(() => setCurrent((prev) => (prev + 1) % carouselItems.length), 6000);
//     const testimonialInterval = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 5000);
//     getBlogs().then((data) => setBlogs(data ? data.slice(0, 3) : []));
//     return () => { clearInterval(interval); clearInterval(testimonialInterval); };
//   }, []);

//   // --- LOGIC HANDLERS ---
//   const handlePrev = () => setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
//   const handleNext = () => setCurrent((prev) => (prev + 1) % carouselItems.length);

//   const addToCart = () => {
//     setCartCount(c => c + 1);
//     setIsCartBumping(true);
//     setTimeout(() => setIsCartBumping(false), 300);
//   };

//   const handleSubscribe = () => {
//     if(email) setSubscribed(true);
//   };

//   // Filter Logic
//   const filteredProducts = filter === "all" 
//     ? sampleImgs 
//     : sampleImgs.filter(img => img.type === filter);

//   return (
//     <div style={{ backgroundColor: THEME.bg, color: THEME.primary, fontFamily: FONTS.sans, overflowX: "hidden" }}>
      
//       {/* STYLES */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        
//         .font-serif { font-family: 'Playfair Display', serif; }
        
//         /* Glassmorphism Class */
//         .glass-card {
//           background: ${THEME.glass};
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           border: 1px solid ${THEME.glassBorder};
//           box-shadow: 0 15px 40px rgba(74, 59, 50, 0.08);
//         }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         ::selection { background: ${THEME.accent}; color: white; }
//       `}</style>

//       {/* 1. TOP ANNOUNCEMENT BAR */}
//       <AnimatePresence>
//         {showAnnouncement && (
//           <motion.div 
//             initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
//             className="bg-[#C08552] text-white text-xs md:text-sm font-bold relative z-[60]"
//           >
//             <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
//               <div className="flex items-center gap-2 mx-auto">
//                 <FiPercent /> <span>Get 20% off your first order with code: <strong>SWEET20</strong></span>
//               </div>
//               <button onClick={() => setShowAnnouncement(false)} className="hover:text-black/50 transition-colors"><FiX /></button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Navbar />

//       <main>
//         {/* 2. HERO SECTION */}
//         <section className="relative pt-24 pb-20 px-6 lg:px-12">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            
//             {/* Background Blobs */}
//             <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#C08552]/10 blur-[100px] pointer-events-none" />

//             {/* Left Content */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
//               className="relative z-10"
//             >
//               <div className="inline-block px-4 py-2 rounded-full border border-[#4A3B32]/10 bg-white/40 backdrop-blur-sm mb-6">
//                 <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: THEME.accent }}>Est. 2025 Bakery</span>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] mb-6" style={{ color: THEME.primary }}>
//                 {carouselItems[current].title}
//                 <br />
//                 <span style={{ color: THEME.accent, fontStyle: "italic" }}>{carouselItems[current].subtitle}</span>
//               </h1>
              
//               <p className="text-lg opacity-80 mb-8 max-w-md leading-relaxed">
//                 {carouselItems[current].desc}
//               </p>

//               <div className="flex gap-4 flex-wrap">
//                 <MagneticButton 
//                   onClick={() => navigate(carouselItems[current].btnShop)}
//                   className="px-10 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all hover:bg-[#C08552]"
//                   style={{ backgroundColor: THEME.primary }}
//                 >
//                   Order Now
//                 </MagneticButton>
//                 <MagneticButton 
//                   onClick={() => navigate(carouselItems[current].btnLearn)}
//                   className="px-10 py-4 rounded-full font-bold border border-[#4A3B32] hover:bg-[#4A3B32] hover:text-white transition-colors"
//                 >
//                    Explore Menu
//                 </MagneticButton>
//               </div>

//               <div className="mt-8 flex gap-6 text-sm font-semibold text-[#8D6E63]">
//                 <div className="flex items-center gap-2"><FiAward /> <span>Top Rated Bakery</span></div>
//                 <div className="flex items-center gap-2"><FiClock /> <span>Open 7AM – 8PM</span></div>
//               </div>
//             </motion.div>

//             {/* Right Carousel - FIXED SIZE */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative z-10"
             
//             >
//                <div className="glass-card p-3"  style={{borderRadius:"30px"}}>
//                  <div className=" aspect-[4/5] md:aspect-square lg:aspect-[4/5]  overflow-hidden bg-[#E5DCD0]" style={{height:"300px"}}>
//                     <AnimatePresence mode="wait">
//                       <motion.img 
//                         key={current}
//                         src={carouselItems[current].img} 
//                         initial={{ opacity: 0, scale: 1.1 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 w-full h-full object-cover"
//                         alt="Hero"
//                         style={{borderRadius:"30px"}}
//                       />
//                     </AnimatePresence>
                    
//                     {/* Controls */}
//                     <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-end text-white z-20">
//                        <div>
//                          <p className="font-bold text-lg">0{current + 1}</p>
//                          <p className="text-xs opacity-80 uppercase tracking-widest">Featured Product</p>
//                        </div>
//                        <div className="flex items-center gap-4">
//                           <button onClick={handlePrev} className="hover:text-[#C08552] transition-colors"><FiArrowLeft size={24} /></button>
//                           <div className="flex gap-2">
//                              {carouselItems.map((_, idx) => (
//                                <div key={idx} className={`h-1.5 rounded-full transition-all ${current === idx ? "w-8 bg-[#C08552]" : "w-2 bg-white/50"}`} />
//                              ))}
//                           </div>
//                           <button onClick={handleNext} className="hover:text-[#C08552] transition-colors"><FiArrowRight size={24} /></button>
//                        </div>
//                     </div>
//                  </div>
//                </div>
//             </motion.div>
//           </div>
//         </section>

//         <Marquee />

//         {/* 3. WEEKLY SPECIALS (Bento + Tabs) */}
//         <section className="py-20 px-6 max-w-7xl mx-auto">
//            <Reveal>
//              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
//                <div>
//                  <p className="font-bold uppercase tracking-[0.25em] text-xs mb-2" style={{ color: THEME.accent }}>Menu Highlights</p>
//                  <h2 className="text-4xl md:text-5xl font-serif" style={{ color: THEME.primary }}>Weekly Specials</h2>
//                </div>
               
//                {/* Filter Tabs */}
//                <div className="glass-card p-1.5 rounded-full flex gap-1">
//                   {["all", "sweet", "savory"].map(tab => (
//                     <button
//                       key={tab}
//                       onClick={() => setFilter(tab)}
//                       className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${filter === tab ? "bg-[#4A3B32] text-white shadow-md" : "hover:bg-[#4A3B32]/5 text-[#4A3B32]"}`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                </div>
//              </div>
//            </Reveal>

//            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
//               <AnimatePresence mode="popLayout">
//                 {filteredProducts.slice(0, 3).map((item, i) => (
//                   <motion.div 
//                      key={item.name}
//                      layout
//                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
//                      className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer ${i === 0 ? "md:col-span-2" : ""}`}
//                      onClick={() => setQuickViewProduct(item)}
//                   >
//                       <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/80 via-transparent to-transparent" />
                      
//                       <div className="absolute top-5 left-5 flex gap-2">
//                          {item.tag && (
//                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#4A3B32] uppercase tracking-wider shadow-sm">
//                              {item.tag}
//                            </span>
//                          )}
//                       </div>

//                       <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                         <div className="flex justify-between items-end">
//                           <div>
//                              <h3 className="text-2xl font-serif mb-1">{item.name}</h3>
//                              <p className="text-xl font-bold text-[#C08552]">{item.price}</p>
//                           </div>
//                           <button 
//                             onClick={(e) => { e.stopPropagation(); addToCart(); }}
//                             className="w-12 h-12 bg-white text-[#4A3B32] rounded-full flex items-center justify-center hover:bg-[#C08552] hover:text-white transition-colors shadow-lg"
//                           >
//                             <FiShoppingBag size={20} />
//                           </button>
//                         </div>
//                       </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//            </div>
           
//            <div className="text-center mt-12">
//               <button onClick={() => navigate("/allproduct")} className="inline-flex items-center gap-2 font-bold border-b-2 border-[#4A3B32] pb-1 hover:text-[#C08552] hover:border-[#C08552] transition-colors">
//                 View Full Menu <FiArrowRight />
//               </button>
//            </div>
//         </section>

//         {/* 4. PARALLAX STATS */}
//         <section className="py-32 relative overflow-hidden">
//            <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
//               <img src={sampleImgs[2].img} className="w-full h-[130%] object-cover opacity-90" alt="" />
//            </motion.div>
//            <div className="absolute inset-0 bg-[#4A3B32]/85 z-0"></div>

//            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-[#F3E9DC] text-center">
//               {[
//                 { icon: FiClock, val: "4am", label: "First Batch" },
//                 { icon: FiAward, val: "15+", label: "Years Baking" },
//                 { icon: FiHeart, val: "100%", label: "Hand Made" },
//                 { icon: FiCoffee, val: "50+", label: "Daily Varieties" }
//               ].map((stat, i) => (
//                 <div key={i}>
//                    <stat.icon className="text-4xl mx-auto mb-4 text-[#C08552]" />
//                    <h3 className="text-5xl font-serif font-bold mb-2">{stat.val}</h3>
//                    <p className="uppercase text-xs tracking-widest opacity-70">{stat.label}</p>
//                 </div>
//               ))}
//            </div>
//         </section>



//         {/* 5. HORIZONTAL CATEGORIES */}
//         <section className="py-24 bg-[#FDFBF7]">
//            <div className="max-w-7xl mx-auto px-6 mb-10">
//               <h2 className="text-4xl font-serif" style={{ color: THEME.primary }}>Explore Collections</h2>
//            </div>
//            <div className="flex overflow-x-auto gap-6 px-6 pb-12 hide-scrollbar snap-x">
//               {categoryImgs.map((cat, i) => (
//                 <motion.div 
//                   key={i}
//                   whileHover={{ y: -10 }}
//                   className="min-w-[280px] h-[420px] rounded-[2rem] overflow-hidden relative cursor-pointer group snap-center shadow-md"
//                   onClick={() => navigate("/allproduct")}
//                 >
//                    <img src={cat.img} className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500" alt="" />
//                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32] via-transparent to-transparent opacity-90" />
//                    <div className="absolute bottom-8 left-8 text-white">
//                       <p className="text-xs font-bold uppercase text-[#C08552] mb-2">{cat.count}</p>
//                       <h3 className="text-3xl font-serif italic">{cat.name}</h3>
//                    </div>
//                 </motion.div>
//               ))}
//            </div>
//         </section>

//         {/* 6. NEW JOURNAL & TESTIMONIALS SECTION (Redesigned) */}
//         <section className="py-24 px-6 bg-[#FAF9F6] overflow-hidden">
//            <div className="max-w-7xl mx-auto">
             
//              {/* Section Header */}
//              <motion.div 
//                initial={{ opacity: 0, y: -20 }}
//                whileInView={{ opacity: 1, y: 0 }}
//                viewport={{ once: true }}
//                className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
//              >
//                <div>
//                  <span className="text-[#C08552] font-bold tracking-widest text-xs uppercase mb-2 block">
//                    Community & Stories
//                  </span>
//                  <h2 className="text-5xl md:text-6xl font-serif" style={{ color: THEME.primary }}>
//                    The Daily Roast
//                  </h2>
//                </div>
//                <button 
//                  onClick={() => navigate("/blogs")} 
//                  className="group flex items-center gap-2 text-[#4A3B32] font-bold border-b-2 border-[#C08552] pb-1 hover:text-[#C08552] transition-all"
//                >
//                  Read All Stories
//                  <motion.span 
//                    className="inline-block"
//                    transition={{ type: "spring", stiffness: 300 }}
//                    group-hover={{ x: 5 }}
//                  >
//                    <FiArrowRight />
//                  </motion.span>
//                </button>
//              </motion.div>

//              {/* Layout: 1/3 Testimonial (Sticky) + 2/3 Journal Grid */}
//              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
               
//                {/* LEFT: Testimonials (Sticky & Tall) */}
//                <motion.div 
//                  className="lg:col-span-4 lg:sticky lg:top-8 h-full lg:h-[600px]"
//                  initial={{ x: -50, opacity: 0 }}
//                  whileInView={{ x: 0, opacity: 1 }}
//                  viewport={{ once: true }}
//                >
//                  <div className="bg-[#4A3B32] rounded-[2.5rem] p-10 h-full relative overflow-hidden shadow-2xl flex flex-col justify-between text-[#F3E9DC]">
                   
//                    {/* Decorative Background Element */}
//                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C08552] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                   
//                    <div>
//                      <FaQuoteLeft className="text-6xl text-[#C08552] opacity-50 mb-8" />
//                      <div className="flex gap-1 mb-6 text-[#C08552]">
//                         {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" />)}
//                      </div>
                     
//                      <div className="h-48"> 
//                        <AnimatePresence mode="wait">
//                          <motion.p 
//                            key={activeTestimonial}
//                            initial={{ opacity: 0, x: 20 }}
//                            animate={{ opacity: 1, x: 0 }}
//                            exit={{ opacity: 0, x: -20 }}
//                            transition={{ duration: 0.4 }}
//                            className="text-2xl font-serif italic leading-normal"
//                          >
//                            "{testimonials[activeTestimonial].text}"
//                          </motion.p>
//                        </AnimatePresence>
//                      </div>
//                    </div>

//                    <div className="relative z-10 border-t border-[#ffffff20] pt-6 mt-4 flex items-center justify-between">
//                       <div>
//                          <AnimatePresence mode="wait">
//                            <motion.p 
//                              key={activeTestimonial}
//                              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//                              className="font-bold text-xl text-white"
//                            >
//                              {testimonials[activeTestimonial].name}
//                            </motion.p>
//                          </AnimatePresence>
//                          <p className="text-xs text-[#C08552] uppercase tracking-widest font-bold mt-1">
//                            {testimonials[activeTestimonial].role || "Loyal Customer"}
//                          </p>
//                       </div>
//                       <FiCoffee className="text-4xl text-[#ffffff10]" />
//                    </div>
//                  </div>
//                </motion.div>

//                {/* RIGHT: Journal Entries (Wide Cards) */}
//                <motion.div 
//                  className="lg:col-span-8 space-y-6"
//                  variants={containerVariants}
//                  initial="hidden"
//                  whileInView="visible"
//                  viewport={{ once: true }}
//                >
//                   {blogs.slice(0, 3).map((blog, i) => (
//                     <motion.div 
//                       key={i}
//                       variants={itemVariants}
//                       className="group relative bg-white rounded-[2rem] p-4 pr-8 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-transparent hover:border-[#C08552]/20"
//                       onClick={() => navigate(`/blogs/${blog._id}`)}
//                     >
//                        {/* Image Section */}
//                        <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0 relative">
//                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
//                           <img 
//                              src={blog.image || "/src/assets/cakee1.jpg"} 
//                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
//                              alt={blog.title} 
//                           />
//                           <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#4A3B32] z-20">
//                              New
//                           </div>
//                        </div>

//                        {/* Content Section */}
//                        <div className="flex-1 py-2">
//                           <div className="flex items-center gap-3 text-xs font-bold text-[#C08552] mb-3">
//                              <span className="uppercase tracking-widest">Journal</span>
//                              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
//                              <span>5 Min Read</span>
//                           </div>
                          
//                           <h3 className="text-2xl md:text-3xl font-serif text-[#4A3B32] mb-3 leading-tight group-hover:text-[#C08552] transition-colors">
//                              {blog.title}
//                           </h3>
                          
//                           <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
//                              {blog.excerpt || "Discover the story behind our latest creation, made with passion and the finest ingredients..."}
//                           </p>

//                           <div className="flex items-center text-sm font-bold text-[#4A3B32] group-hover:translate-x-2 transition-transform duration-300">
//                              Read Full Story <FiArrowRight className="ml-2" />
//                           </div>
//                        </div>
//                     </motion.div>
//                   ))}
//                </motion.div>

//              </div>
//            </div>
//         </section>

//         {/* 7. NEWSLETTER */}
//         <section className="relative pt-24 pb-32 bg-[#FDFBF7] text-center">
//            <div className="max-w-3xl mx-auto px-6">
//               <h2 className="text-5xl font-serif mb-6" style={{ color: THEME.primary }}>Join the Club</h2>
//               <p className="text-lg opacity-70 mb-10">
//                  Get a free cookie on your birthday and weekly specials delivered straight to your inbox.
//               </p>
              
//               {!subscribed ? (
//                 <div className="glass-card p-2 rounded-full flex flex-col sm:flex-row max-w-lg mx-auto shadow-lg">
//                    <input 
//                      type="email" 
//                      placeholder="Enter your email address" 
//                      value={email}
//                      onChange={(e) => setEmail(e.target.value)}
//                      className="flex-1 bg-transparent px-6 py-3 outline-none text-[#4A3B32]"
//                    />
//                    <button 
//                      onClick={handleSubscribe}
//                      className="px-8 py-3 rounded-full text-white font-bold hover:scale-95 transition-transform mt-2 sm:mt-0 shadow-md"
//                      style={{ backgroundColor: THEME.accent }}
//                    >
//                      Subscribe
//                    </button>
//                 </div>
//               ) : (
//                 <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#4A7C59]/10 text-[#4A7C59] px-8 py-4 rounded-full inline-flex items-center gap-2 font-bold">
//                    <FiCheck /> You're on the list! Check your inbox.
//                 </motion.div>
//               )}
//            </div>
//         </section>
//       </main>

//       {/* --- OVERLAYS --- */}

//       {/* Sticky Cart Button */}
//       <AnimatePresence>
//         {cartCount > 0 && (
//           <motion.button
//             initial={{ y: 100, opacity: 0 }} 
//             animate={{ y: 0, opacity: 1, scale: isCartBumping ? 1.1 : 1 }} 
//             exit={{ y: 100, opacity: 0 }}
//             onClick={() => navigate("/allproduct")}
//             className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-full text-white font-bold shadow-2xl flex items-center gap-3 hover:bg-[#3d2f28] transition-colors"
//             style={{ backgroundColor: THEME.primary }}
//           >
//             <FiShoppingBag size={20} />
//             <span>{cartCount} Items</span>
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* Quick View Modal */}
//       <AnimatePresence>
//         {quickViewProduct && (
//           <motion.div 
//             className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center px-4 backdrop-blur-sm"
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => setQuickViewProduct(null)}
//           >
//             <motion.div 
//               className="bg-[#FDFBF7] rounded-[2.5rem] max-w-4xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 relative shadow-2xl"
//               initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//                <button onClick={() => setQuickViewProduct(null)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-20 hover:bg-gray-100 transition-colors"><FiX size={20} /></button>
               
//                <div className="h-64 md:h-full bg-[#E5DCD0]">
//                   <img src={quickViewProduct.img} className="w-full h-full object-cover" alt="" />
//                </div>
               
//                <div className="p-10 flex flex-col justify-center">
//                   <div className="inline-block px-4 py-1 bg-[#4A3B32]/10 text-[#4A3B32] text-xs font-bold uppercase rounded-full mb-6 w-fit">
//                      {quickViewProduct.tag || "Freshly Baked"}
//                   </div>
//                   <h2 className="text-4xl font-serif mb-3" style={{ color: THEME.primary }}>{quickViewProduct.name}</h2>
//                   <div className="flex items-center gap-2 mb-6">
//                      <p className="text-3xl font-bold" style={{ color: THEME.accent }}>{quickViewProduct.price}</p>
//                      <div className="h-4 w-[1px] bg-gray-300 mx-2"></div>
//                      <div className="flex text-[#C08552] text-sm">
//                         {[...Array(5)].map((_, i) => <FiStar key={i} className={i < Math.round(quickViewProduct.rating) ? "fill-current" : "text-gray-300"} />)}
//                      </div>
//                   </div>
                  
//                   <p className="opacity-70 mb-8 leading-relaxed">
//                      Crafted with our signature dough and premium ingredients. Soft, flavorful, and baked fresh this morning.
//                   </p>
                  
//                   <button 
//                     onClick={() => { addToCart(); setQuickViewProduct(null); }}
//                     className="w-full py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
//                     style={{ backgroundColor: THEME.primary }}
//                   >
//                      Add to Order
//                   </button>
//                </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Footer />
//     </div>
//   );
// }



// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { getBlogs } from "../api/blogApi";
// import { 
//   ArrowRight, ShoppingBag, Star, Search, ArrowUpNarrowWide, 
//   ArrowDownNarrowWide, ChevronLeft, ChevronRight, Clock, Zap 
// } from "lucide-react";

// export default function Home() {
//   const navigate = useNavigate();
//   const [blogs, setBlogs] = useState([]);
  
//   // --- CAROUSEL STATE ---
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // --- FILTER STATE ---
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("default");

//   // --- TIMER STATE ---
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   // --- DATA ---
//   const heroSlides = [
//     {
//       id: 1,
//       img: "/src/assets/cakee1.jpg",
//       title: "Velvet Indulgence",
//       subtitle: "Signature Collection",
//       desc: "Rich Belgian chocolate layers with artisan ganache."
//     },
//     {
//       id: 2,
//       img: "/src/assets/vanilla_cupcake_featured_blog.webp",
//       title: "Vanilla Clouds",
//       subtitle: "Freshly Baked",
//       desc: "Soft, airy textures meeting the perfect buttercream."
//     },
//     {
//       id: 3,
//       img: "/src/assets/instagram-bakers-1.jpg",
//       title: "Parisian Morning",
//       subtitle: "Authentic Pastry",
//       desc: "Butter croissants baked to golden perfection daily."
//     }
//   ];

//   const allProducts = [
//     { id: 1, img: "/src/assets/bun1.jpg", name: "Cinnamon Roll", price: 4.50, rating: 4.8, tag: "Hot" },
//     { id: 2, img: "/src/assets/cakee1.jpg", name: "Royal Cake", price: 32.00, rating: 5.0, tag: "Luxury" },
//     { id: 3, img: "/src/assets/breadd.jpg", name: "Sourdough", price: 6.00, rating: 4.9, tag: "Organic" },
//     { id: 4, img: "/src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", name: "Berry Tart", price: 8.50, rating: 4.7, tag: "Fresh" },
//     { id: 5, img: "/src/assets/instagram-bakers-1.jpg", name: "Croissant", price: 5.00, rating: 4.9, tag: "French" },
//     { id: 6, img: "/src/assets/vanilla_cupcake_featured_blog.webp", name: "Cupcake", price: 3.50, rating: 4.6, tag: "Sweet" },
//   ];

//   const categories = [
//     { name: "Artisan Breads", img: "/src/assets/breadd.jpg", count: "12 Varieties" },
//     { name: "Celebration Cakes", img: "/src/assets/cakee1.jpg", count: "Custom Orders" },
//     { name: "Morning Pastry", img: "/src/assets/instagram-bakers-1.jpg", count: "Fresh Daily" },
//   ];

//   // --- EFFECTS ---
//   useEffect(() => {
//     // Carousel Timer
//     const slideTimer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 6000);

//     // Fetch Blogs
//     getBlogs().then((data) => setBlogs(data.slice(0, 3)));

//     // Offer Countdown Timer Logic (Set for 2 days from now)
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 2); 

//     const countdownTimer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance < 0) {
//         clearInterval(countdownTimer);
//       } else {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       }
//     }, 1000);

//     return () => {
//       clearInterval(slideTimer);
//       clearInterval(countdownTimer);
//     };
//   }, []);

//   const filteredProducts = useMemo(() => {
//     let result = allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     if (sortOrder === "low") result.sort((a, b) => a.price - b.price);
//     if (sortOrder === "high") result.sort((a, b) => b.price - a.price);
//     return result;
//   }, [searchTerm, sortOrder, allProducts]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

//   return (
//     <>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
          
//           body { margin: 0; background-color: #FAFAF9; color: #1C1917; font-family: 'DM Sans', sans-serif; }
//           h1, h2, h3 { font-family: 'Playfair Display', serif; }
          
//           .wrapper { max-width: 1300px; margin: 0 auto; padding: 0 20px; }
          
//           /* Grid Layouts */
//           .product-grid { display: grid; gap: 30px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
//           .cat-grid { display: grid; gap: 20px; grid-template-columns: 1fr; }
          
//           /* Blog Grid: Featured vs List */
//           .blog-container { display: grid; gap: 40px; grid-template-columns: 1fr; }

//           @media (min-width: 768px) {
//             .cat-grid { grid-template-columns: repeat(3, 1fr); }
//           }

//           @media (min-width: 1024px) {
//             .blog-container { grid-template-columns: 1.5fr 1fr; }
//           }

//           /* Utilities */
//           .glass { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.3); }
          
//           .timer-box { 
//             background: rgba(255,255,255,0.1); 
//             backdrop-filter: blur(5px); 
//             border-radius: 12px; 
//             padding: 15px; 
//             min-width: 70px; 
//             text-align: center; 
//           }
//         `}
//       </style>

//       <Navbar />
//       <br></br><br></br><br></br>

//       <main className="wrapper" style={{ paddingTop: "20px", paddingBottom: "100px" }}>
        
//         {/* 1. HERO CAROUSEL */}
//         <section style={{ position: "relative", height: "550px", borderRadius: "30px", overflow: "hidden", marginBottom: "60px", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, scale: 1.1 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1.2 }}
//               style={{ position: "absolute", inset: 0 }}
//             >
//               <img src={heroSlides[currentSlide].img} alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
//             </motion.div>
//           </AnimatePresence>

//           <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 60px", zIndex: 10 }}>
//             <div style={{ maxWidth: "550px", color: "white" }}>
//               <motion.div key={`txt-${currentSlide}`} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
//                 <span style={{ background: "#D97706", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
//                   {heroSlides[currentSlide].subtitle}
//                 </span>
//                 <h1 style={{ fontSize: "4rem", lineHeight: "1", margin: "20px 0" }}>{heroSlides[currentSlide].title}</h1>
//                 <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "30px", fontWeight: "300" }}>{heroSlides[currentSlide].desc}</p>
//                 <motion.button 
//                   whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate('/allproduct')}
//                   style={{ border: "1px solid white", background: "transparent", color: "white", padding: "15px 40px", borderRadius: "50px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}
//                 >
//                   View Collection
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
          
//           <div style={{ position: "absolute", bottom: "30px", right: "30px", display: "flex", gap: "10px", zIndex: 20 }}>
//             <button onClick={prevSlide} style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(5px)" }}><ChevronLeft /></button>
//             <button onClick={nextSlide} style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white", border: "none", color: "black", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronRight /></button>
//           </div>
//         </section>

//         {/* 2. SEARCH & FILTER */}
//         <div style={{ position: "sticky", top: "20px", zIndex: 100, marginBottom: "50px" }}>
//           <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass" style={{ borderRadius: "100px", padding: "10px 15px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, paddingLeft: "15px" }}>
//               <Search size={20} color="#888" />
//               <input type="text" placeholder="Find your cravings..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-bar" style={{ border: "none", background: "transparent", fontSize: "1rem", width: "100%", color: "#333", height: "40px" }} />
//             </div>
//             <div style={{ display: "flex", gap: "5px", paddingRight: "5px" }}>
//               <button onClick={() => setSortOrder("default")} style={{ padding: "10px 20px", borderRadius: "30px", border: "none", background: sortOrder === "default" ? "#1C1917" : "#F5F5F4", color: sortOrder === "default" ? "white" : "#666", fontWeight: "bold", cursor: "pointer", transition: "0.3s" }}>All</button>
//               <button onClick={() => setSortOrder("low")} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid #eee", background: sortOrder === "low" ? "#D97706" : "white", color: sortOrder === "low" ? "white" : "#666", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ArrowDownNarrowWide size={18}/></button>
//               <button onClick={() => setSortOrder("high")} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid #eee", background: sortOrder === "high" ? "#D97706" : "white", color: sortOrder === "high" ? "white" : "#666", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ArrowUpNarrowWide size={18}/></button>
//             </div>
//           </motion.div>
//         </div>

//         {/* 3. PRODUCT GRID */}
//         <section style={{ marginBottom: "100px" }}>
//           <motion.div className="product-grid" layout>
//             <AnimatePresence>
//               {filteredProducts.map((item) => (
//                 <motion.div layout key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} onClick={() => navigate("/allproduct")} style={{ cursor: "pointer" }}>
//                   <motion.div whileHover={{ y: -8 }} style={{ background: "white", borderRadius: "24px", padding: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
//                     <div style={{ height: "240px", borderRadius: "20px", overflow: "hidden", position: "relative", marginBottom: "15px" }}>
//                       <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                       <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(255,255,255,0.95)", padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase" }}>{item.tag}</div>
//                       <motion.button whileHover={{ scale: 1.1 }} style={{ position: "absolute", bottom: "12px", right: "12px", width: "40px", height: "40px", borderRadius: "50%", background: "#1C1917", color: "white", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ShoppingBag size={16} /></motion.button>
//                     </div>
//                     <div style={{ padding: "0 8px 5px" }}>
//                       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
//                         <h3 style={{ fontSize: "1.1rem", margin: 0, fontWeight: "700" }}>{item.name}</h3>
//                         <span style={{ fontSize: "0.9rem", fontWeight: "600", color: "#D97706" }}>${item.price.toFixed(2)}</span>
//                       </div>
//                       <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.85rem", color: "#888" }}><Star size={12} fill="#D97706" stroke="none"/> {item.rating} Rating</div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </section>

//         {/* 4. FLASH DEAL / TIMER SECTION (NEW) */}
//         <section style={{ marginBottom: "100px" }}>
//            <motion.div 
//              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//              style={{ 
//                background: "#1C1917", borderRadius: "30px", overflow: "hidden", 
//                display: "flex", flexWrap: "wrap", alignItems: "center"
//              }}
//            >
//              {/* Text Content */}
//              <div style={{ flex: "1 1 400px", padding: "60px", color: "white" }}>
//                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#D97706", marginBottom: "15px" }}>
//                  <Zap size={20} fill="#D97706" />
//                  <span style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>Deal of the Day</span>
//                </div>
               
//                <h2 style={{ fontSize: "3.5rem", lineHeight: "1.1", margin: "0 0 20px 0" }}>Chocolate Truffle <br/> Explosion Cake</h2>
//                <p style={{ color: "#A8A29E", fontSize: "1.1rem", marginBottom: "40px" }}>Get 40% OFF on our best-selling signature cake. Limited quantity available for this batch.</p>
               
//                {/* Timer Grid */}
//                <div style={{ display: "flex", gap: "15px", marginBottom: "40px" }}>
//                   <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.days}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Days</div></div>
//                   <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.hours}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Hrs</div></div>
//                   <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.minutes}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Mins</div></div>
//                   <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#D97706" }}>{timeLeft.seconds}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Secs</div></div>
//                </div>

//                <button onClick={() => navigate("/allproduct")} style={{ background: "#D97706", color: "white", border: "none", padding: "15px 35px", borderRadius: "50px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>Order Now - $24.99</button>
//              </div>

//              {/* Image Side */}
//              <div style={{ flex: "1 1 400px", height: "500px", position: "relative" }}>
//                 <img src="/src/assets/cakee1.jpg" alt="Deal" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                 {/* Badge */}
//                 <motion.div 
//                   animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}
//                   style={{ position: "absolute", top: "30px", right: "30px", width: "90px", height: "90px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1917", flexDirection: "column", fontWeight: "bold", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
//                 >
//                   <span style={{ fontSize: "1.5rem" }}>40%</span>
//                   <span style={{ fontSize: "0.8rem" }}>OFF</span>
//                 </motion.div>
//              </div>
//            </motion.div>
//         </section>

//         {/* 5. PARALLAX BREAK */}
//         <section style={{ position: "relative", padding: "100px 0", marginBottom: "100px", borderRadius: "30px", overflow: "hidden", textAlign: "center", color: "white", backgroundImage: "url('/src/assets/instagram-bakers-1.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
//            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }}></div>
//            <div style={{ position: "relative", zIndex: 2 }}>
//               <h2 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>Baked with Passion</h2>
//               <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 30px auto", opacity: 0.9 }}>Every loaf, cake, and pastry is handcrafted using traditional techniques and organic ingredients.</p>
//               <button style={{ border: "2px solid white", background: "transparent", color: "white", padding: "12px 30px", borderRadius: "50px", fontWeight: "bold", cursor: "pointer" }}>Our Story</button>
//            </div>
//         </section>

//         {/* 6. COLLECTION GRID */}
//         <section style={{ marginBottom: "100px" }}>
//           <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Our Collections</h2>
//           <div className="cat-grid">
//             {categories.map((cat, i) => (
//               <motion.div key={i} whileHover={{ y: -10 }} style={{ position: "relative", height: "350px", borderRadius: "24px", overflow: "hidden", cursor: "pointer" }} onClick={() => navigate('/allproduct')}>
//                 <img src={cat.img} alt={cat.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} />
//                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}></div>
//                 <div style={{ position: "absolute", bottom: "30px", left: "30px", color: "white" }}>
//                   <h3 style={{ fontSize: "2rem", margin: 0 }}>{cat.name}</h3>
//                   <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>{cat.count}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* 7. REDESIGNED BLOG SECTION (Magazine Layout) */}
//         <section style={{ marginBottom: "80px" }}>
//            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
//              <h2 style={{ fontSize: "2.5rem", margin: 0 }}>Culinary Stories</h2>
//              <button onClick={() => navigate("/allproduct")} style={{ background: "transparent", border: "none", color: "#D97706", fontWeight: "bold", cursor: "pointer", fontSize: "1rem" }}>View Journal</button>
//            </div>

//            <div className="blog-container">
//              {/* Featured (First Item) - Large on Left */}
//              {blogs.length > 0 && (
//                <motion.div 
//                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
//                  whileHover={{ scale: 1.01 }}
//                  style={{ position: "relative", height: "100%", minHeight: "400px", borderRadius: "30px", overflow: "hidden", cursor: "pointer" }}
//                  onClick={() => navigate(`/blogs/${blogs[0]._id}`)}
//                >
//                  <img src={blogs[0].image} alt={blogs[0].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)" }}></div>
//                  <div style={{ position: "absolute", bottom: "40px", left: "40px", right: "40px", color: "white" }}>
//                    <span style={{ background: "#D97706", padding: "5px 10px", borderRadius: "5px", fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase" }}>Featured</span>
//                    <h3 style={{ fontSize: "2.5rem", margin: "15px 0", lineHeight: "1.1" }}>{blogs[0].title}</h3>
//                    <div style={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "bold" }}>Read Full Story <ArrowRight size={16}/></div>
//                  </div>
//                </motion.div>
//              )}

//              {/* List (Next 2 Items) - Stacked on Right */}
//              <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
//                {blogs.slice(1, 3).map((blog, i) => (
//                  <motion.div 
//                    key={blog._id}
//                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}
//                    whileHover={{ x: -5 }}
//                    style={{ display: "flex", gap: "20px", background: "white", padding: "15px", borderRadius: "20px", cursor: "pointer", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", flex: 1 }}
//                    onClick={() => navigate(`/blogs/${blog._id}`)}
//                  >
//                    <div style={{ width: "140px", borderRadius: "15px", overflow: "hidden", flexShrink: 0 }}>
//                      <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                    </div>
//                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
//                      <span style={{ fontSize: "0.8rem", color: "#888", fontWeight: "bold", marginBottom: "5px" }}>{new Date().toLocaleDateString()}</span>
//                      <h3 style={{ fontSize: "1.3rem", margin: "0 0 10px 0", lineHeight: "1.2" }}>{blog.title}</h3>
//                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.9rem", color: "#D97706", fontWeight: "bold" }}>Read <ArrowRight size={14}/></div>
//                    </div>
//                  </motion.div>
//                ))}
//              </div>
//            </div>
//         </section>

//       </main>
//       <Footer />
//     </>
//   );    
// }


import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBlogs } from "../api/blogApi";
import { 
  ArrowRight, ShoppingBag, Star, Search, ArrowUpNarrowWide, 
  ArrowDownNarrowWide, ChevronLeft, ChevronRight, Zap, Clock 
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  
  // --- COLOR THEME ---
  const accentPink = "rgb(214, 143, 143)"; // Your specific rose color
  const darkText = "#1C1917";

  // --- CAROUSEL STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // --- FILTER STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // --- TIMER STATE ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // --- DATA ---
  const heroSlides = [
    {
      id: 1,
      img: "/src/assets/cakee1.jpg",
      title: "Velvet Rose",
      subtitle: "Signature Collection",
      desc: "Rich Belgian chocolate layers with artisan ganache."
    },
    {
      id: 2,
      img: "/src/assets/vanilla_cupcake_featured_blog.webp",
      title: "Vanilla Clouds",
      subtitle: "Freshly Baked",
      desc: "Soft, airy textures meeting the perfect buttercream."
    },
    {
      id: 3,
      img: "/src/assets/instagram-bakers-1.jpg",
      title: "Parisian Morning",
      subtitle: "Authentic Pastry",
      desc: "Butter croissants baked to golden perfection daily."
    }
  ];

  const allProducts = [
    { id: 1, img: "/src/assets/bun1.jpg", name: "Cinnamon Roll", price: 4.50, rating: 4.8, tag: "Hot" },
    { id: 2, img: "/src/assets/cakee1.jpg", name: "Royal Cake", price: 32.00, rating: 5.0, tag: "Luxury" },
    { id: 3, img: "/src/assets/breadd.jpg", name: "Sourdough", price: 6.00, rating: 4.9, tag: "Organic" },
    { id: 4, img: "/src/assets/b3ad51c12c782d3998ea6979c4f7372a.jpg", name: "Berry Tart", price: 8.50, rating: 4.7, tag: "Fresh" },
    { id: 5, img: "/src/assets/instagram-bakers-1.jpg", name: "Croissant", price: 5.00, rating: 4.9, tag: "French" },
    { id: 6, img: "/src/assets/vanilla_cupcake_featured_blog.webp", name: "Cupcake", price: 3.50, rating: 4.6, tag: "Sweet" },
  ];

  const categories = [
    { name: "Artisan Breads", img: "/src/assets/breadd.jpg", count: "12 Varieties" },
    { name: "Celebration Cakes", img: "/src/assets/cakee1.jpg", count: "Custom Orders" },
    { name: "Morning Pastry", img: "/src/assets/instagram-bakers-1.jpg", count: "Fresh Daily" },
  ];

  // --- EFFECTS ---
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    getBlogs().then((data) => setBlogs(data.slice(0, 3)));

    // Set timer for 2 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); 

    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdownTimer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => {
      clearInterval(slideTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (sortOrder === "low") result.sort((a, b) => a.price - b.price);
    if (sortOrder === "high") result.sort((a, b) => b.price - a.price);
    return result;
  }, [searchTerm, sortOrder, allProducts]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
          
          body { margin: 0; background-color: #FAFAF9; color: #1C1917; font-family: 'DM Sans', sans-serif; }
          h1, h2, h3 { font-family: 'Playfair Display', serif; }
          
          .wrapper { max-width: 1300px; margin: 0 auto; padding: 0 20px; }
          
          /* Grid Layouts */
          .product-grid { display: grid; gap: 30px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
          .cat-grid { display: grid; gap: 20px; grid-template-columns: 1fr; }
          .blog-container { display: grid; gap: 40px; grid-template-columns: 1fr; }

          @media (min-width: 768px) {
            .cat-grid { grid-template-columns: repeat(3, 1fr); }
          }

          @media (min-width: 1024px) {
            .blog-container { grid-template-columns: 1.5fr 1fr; }
          }

          /* Utilities */
          .glass { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.3); }
          
          .timer-box { 
            background: rgba(255,255,255,0.1); 
            backdrop-filter: blur(5px); 
            border-radius: 12px; 
            padding: 15px; 
            min-width: 70px; 
            text-align: center; 
          }
        `}
      </style>

      <Navbar />
      <br/><br/><br/>

      <main className="wrapper" style={{ paddingTop: "20px", paddingBottom: "100px" }}>
        
        {/* 1. HERO CAROUSEL */}
        <section style={{ position: "relative", height: "550px", borderRadius: "30px", overflow: "hidden", marginBottom: "60px", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              style={{ position: "absolute", inset: 0 }}
            >
              <img src={heroSlides[currentSlide].img} alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
            </motion.div>
          </AnimatePresence>

          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 60px", zIndex: 10 }}>
            <div style={{ maxWidth: "550px", color: "white" }}>
              <motion.div key={`txt-${currentSlide}`} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <span style={{ background: accentPink, padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", color: "white" }}>
                  {heroSlides[currentSlide].subtitle}
                </span>
                <h1 style={{ fontSize: "4rem", lineHeight: "1", margin: "20px 0" }}>{heroSlides[currentSlide].title}</h1>
                <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "30px", fontWeight: "300" }}>{heroSlides[currentSlide].desc}</p>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/allproduct')}
                  style={{ border: "1px solid white", background: "transparent", color: "white", padding: "15px 40px", borderRadius: "50px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}
                >
                  View Collection
                </motion.button>
              </motion.div>
            </div>
          </div>
          
          <div style={{ position: "absolute", bottom: "30px", right: "30px", display: "flex", gap: "10px", zIndex: 20 }}>
            <button onClick={prevSlide} style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(5px)" }}><ChevronLeft /></button>
            <button onClick={nextSlide} style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white", border: "none", color: "black", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronRight /></button>
          </div>
        </section>

        {/* 2. SEARCH & FILTER */}
        <div style={{ position: "sticky", top: "20px", zIndex: 100, marginBottom: "50px" }}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass" style={{ borderRadius: "100px", padding: "10px 15px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, paddingLeft: "15px" }}>
              <Search size={20} color="#888" />
              <input type="text" placeholder="Find your cravings..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-bar" style={{ border: "none", background: "transparent", fontSize: "1rem", width: "100%", color: "#333", height: "40px" }} />
            </div>
            <div style={{ display: "flex", gap: "5px", paddingRight: "5px" }}>
              <button onClick={() => setSortOrder("default")} style={{ padding: "10px 20px", borderRadius: "30px", border: "none", background: sortOrder === "default" ? "#1C1917" : "#F5F5F4", color: sortOrder === "default" ? "white" : "#666", fontWeight: "bold", cursor: "pointer", transition: "0.3s" }}>All</button>
              <button onClick={() => setSortOrder("low")} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid #eee", background: sortOrder === "low" ? accentPink : "white", color: sortOrder === "low" ? "white" : "#666", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ArrowDownNarrowWide size={18}/></button>
              <button onClick={() => setSortOrder("high")} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid #eee", background: sortOrder === "high" ? accentPink : "white", color: sortOrder === "high" ? "white" : "#666", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ArrowUpNarrowWide size={18}/></button>
            </div>
          </motion.div>
        </div>

        {/* 3. PRODUCT GRID */}
        <section style={{ marginBottom: "100px" }}>
          <motion.div className="product-grid" layout>
            <AnimatePresence>
              {filteredProducts.map((item) => (
                <motion.div layout key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} onClick={() => navigate("/allproduct")} style={{ cursor: "pointer" }}>
                  <motion.div whileHover={{ y: -8 }} style={{ background: "white", borderRadius: "24px", padding: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                    <div style={{ height: "240px", borderRadius: "20px", overflow: "hidden", position: "relative", marginBottom: "15px" }}>
                      <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute", top: "12px", left: "12px", background: accentPink, color: "white", padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase" }}>{item.tag}</div>
                      <motion.button whileHover={{ scale: 1.1 }} style={{ position: "absolute", bottom: "12px", right: "12px", width: "40px", height: "40px", borderRadius: "50%", background: "#1C1917", color: "white", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ShoppingBag size={16} /></motion.button>
                    </div>
                    <div style={{ padding: "0 8px 5px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                        <h3 style={{ fontSize: "1.1rem", margin: 0, fontWeight: "700" }}>{item.name}</h3>
                        <span style={{ fontSize: "1.1rem", fontWeight: "700", color: accentPink }}>${item.price.toFixed(2)}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.85rem", color: "#888" }}><Star size={12} fill={accentPink} stroke="none"/> {item.rating} Rating</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 4. FLASH DEAL / TIMER SECTION */}
        <section style={{ marginBottom: "100px" }}>
           <motion.div 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             style={{ 
               background: "#1C1917", borderRadius: "30px", overflow: "hidden", 
               display: "flex", flexWrap: "wrap", alignItems: "center"
             }}
           >
             <div style={{ flex: "1 1 400px", padding: "60px", color: "white" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "10px", color: accentPink, marginBottom: "15px" }}>
                 <Zap size={20} fill={accentPink} stroke={accentPink} />
                 <span style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>Deal of the Day</span>
               </div>
               
               <h2 style={{ fontSize: "3.5rem", lineHeight: "1.1", margin: "0 0 20px 0" }}>Chocolate Truffle <br/> Explosion Cake</h2>
               <p style={{ color: "#A8A29E", fontSize: "1.1rem", marginBottom: "40px" }}>Get 40% OFF on our best-selling signature cake. Limited quantity available for this batch.</p>
               
               <div style={{ display: "flex", gap: "15px", marginBottom: "40px" }}>
                  <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.days}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Days</div></div>
                  <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.hours}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Hrs</div></div>
                  <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{timeLeft.minutes}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Mins</div></div>
                  <div className="timer-box"><div style={{ fontSize: "1.5rem", fontWeight: "bold", color: accentPink }}>{timeLeft.seconds}</div><div style={{ fontSize: "0.8rem", color: "#A8A29E" }}>Secs</div></div>
               </div>

               <button onClick={() => navigate("/allproduct")} style={{ background: accentPink, color: "white", border: "none", padding: "15px 35px", borderRadius: "50px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>Order Now - $24.99</button>
             </div>

             <div style={{ flex: "1 1 400px", height: "500px", position: "relative" }}>
                <img src="/src/assets/cakee1.jpg" alt="Deal" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                  style={{ position: "absolute", top: "30px", right: "30px", width: "90px", height: "90px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C1917", flexDirection: "column", fontWeight: "bold", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>40%</span>
                  <span style={{ fontSize: "0.8rem", color: accentPink }}>OFF</span>
                </motion.div>
             </div>
           </motion.div>
        </section>

        {/* 5. NEW: BAKED WITH PASSION (Split Modern Layout) */}
        <section style={{ marginBottom: "100px", padding: "0 10px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: "#1C1917", 
              borderRadius: "40px", 
              overflow: "hidden", 
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              alignItems: "center"
            }}
          >
            {/* LEFT: VISUAL SIDE */}
            <div style={{ position: "relative", height: "600px", overflow: "hidden" }}>
               <motion.img 
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 1.5 }}
                 src="/src/assets/instagram-bakers-1.jpg" 
                 alt="Baker" 
                 style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} 
               />
               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,25,23,0.2), #1C1917)" }}></div>
               
               {/* Floating Badge */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 style={{ 
                   position: "absolute", bottom: "50px", left: "40px", 
                   background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)",
                   padding: "20px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)",
                   maxWidth: "250px"
                 }}
               >
                 <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
                   <Star size={16} fill={accentPink} stroke="none" />
                   <Star size={16} fill={accentPink} stroke="none" />
                   <Star size={16} fill={accentPink} stroke="none" />
                   <Star size={16} fill={accentPink} stroke="none" />
                   <Star size={16} fill={accentPink} stroke="none" />
                 </div>
                 <p style={{ color: "white", fontSize: "0.9rem", margin: 0, lineHeight: "1.5" }}>
                   "The texture of their sourdough is simply unmatched."
                 </p>
               </motion.div>
            </div>

            {/* RIGHT: CONTENT SIDE */}
            <div style={{ padding: "60px 40px", color: "white", position: "relative" }}>
               <div style={{ position: "absolute", top: "0", right: "0", width: "300px", height: "300px", background: accentPink, borderRadius: "50%", filter: "blur(120px)", opacity: 0.15, pointerEvents: "none" }}></div>

               <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                   <div style={{ width: "50px", height: "2px", background: accentPink }}></div>
                   <span style={{ textTransform: "uppercase", letterSpacing: "2px", color: accentPink, fontWeight: "bold" }}>Our Philosophy</span>
                 </div>

                 <h2 style={{ fontSize: "3.5rem", lineHeight: "1.1", marginBottom: "30px", fontFamily: "'Playfair Display', serif" }}>
                   Baked with <br/> 
                   <span style={{ color: "transparent", WebkitTextStroke: "1px white", fontStyle: "italic" }}>Pure</span> Passion.
                 </h2>

                 <p style={{ color: "#A8A29E", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "40px", maxWidth: "500px" }}>
                   We believe that time is an ingredient. From our 48-hour fermentation process to the hand-selection of grains, we never rush nature.
                 </p>

                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}><Clock size={20} color={accentPink} /></div>
                      <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Slow Fermented</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "50%" }}><Zap size={20} color={accentPink} /></div>
                      <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Daily Fresh</span>
                    </div>
                 </div>

                 <button 
                   onClick={() => navigate("/allproduct")}
                   style={{ 
                     background: accentPink, color: "white", padding: "18px 45px", 
                     borderRadius: "50px", border: "none", fontSize: "1rem", fontWeight: "bold", 
                     cursor: "pointer", display: "flex", alignItems: "center", gap: "10px",
                     boxShadow: `0 10px 25px ${accentPink}40`
                   }}
                 >
                   Read Our Story <ArrowRight size={18} />
                 </button>
               </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 6. COLLECTION GRID */}
        <section style={{ marginBottom: "100px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Our Collections</h2>
          <div className="cat-grid">
            {categories.map((cat, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} style={{ position: "relative", height: "350px", borderRadius: "24px", overflow: "hidden", cursor: "pointer" }} onClick={() => navigate('/allproduct')}>
                <img src={cat.img} alt={cat.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}></div>
                <div style={{ position: "absolute", bottom: "30px", left: "30px", color: "white" }}>
                  <h3 style={{ fontSize: "2rem", margin: 0 }}>{cat.name}</h3>
                  <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>{cat.count}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. BLOG SECTION */}
        <section style={{ marginBottom: "80px" }}>
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
             <h2 style={{ fontSize: "2.5rem", margin: 0 }}>Culinary Stories</h2>
             <button onClick={() => navigate("/allproduct")} style={{ background: "transparent", border: "none", color: accentPink, fontWeight: "bold", cursor: "pointer", fontSize: "1rem" }}>View Journal</button>
           </div>

           <div className="blog-container">
             {blogs.length > 0 && (
               <motion.div 
                 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                 whileHover={{ scale: 1.01 }}
                 style={{ position: "relative", height: "100%", minHeight: "400px", borderRadius: "30px", overflow: "hidden", cursor: "pointer" }}
                 onClick={() => navigate(`/blogs/${blogs[0]._id}`)}
               >
                 <img src={blogs[0].image} alt={blogs[0].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)" }}></div>
                 <div style={{ position: "absolute", bottom: "40px", left: "40px", right: "40px", color: "white" }}>
                   <span style={{ background: accentPink, padding: "5px 10px", borderRadius: "5px", fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase" }}>Featured</span>
                   <h3 style={{ fontSize: "2.5rem", margin: "15px 0", lineHeight: "1.1" }}>{blogs[0].title}</h3>
                   <div style={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "bold" }}>Read Full Story <ArrowRight size={16}/></div>
                 </div>
               </motion.div>
             )}

             <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
               {blogs.slice(1, 3).map((blog, i) => (
                 <motion.div 
                   key={blog._id}
                   initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}
                   whileHover={{ x: -5 }}
                   style={{ display: "flex", gap: "20px", background: "white", padding: "15px", borderRadius: "20px", cursor: "pointer", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", flex: 1 }}
                   onClick={() => navigate(`/blogs/${blog._id}`)}
                 >
                   <div style={{ width: "140px", borderRadius: "15px", overflow: "hidden", flexShrink: 0 }}>
                     <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                   </div>
                   <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                     <span style={{ fontSize: "0.8rem", color: "#888", fontWeight: "bold", marginBottom: "5px" }}>{new Date().toLocaleDateString()}</span>
                     <h3 style={{ fontSize: "1.3rem", margin: "0 0 10px 0", lineHeight: "1.2" }}>{blog.title}</h3>
                     <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.9rem", color: accentPink, fontWeight: "bold" }}>Read <ArrowRight size={14}/></div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );    
}