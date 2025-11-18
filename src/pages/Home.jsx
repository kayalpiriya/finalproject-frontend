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



import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Carousel images with unique content
  const carouselItems = [
    {
      img: "src/assets/cakee1.jpg",
      title: "Chocolate Delight",
      desc: "Indulge in rich chocolate cakes made fresh daily.",
      btnShop: "/allproduct",
      btnLearn: "/detail"
    },
    {
      img: "src/assets/vanilla_cupcake_featured_blog.webp",
      title: "Vanilla Cupcake Heaven",
      desc: "Soft, fluffy, and perfectly sweet cupcakes for everyone.",
      btnShop: "/allproduct",
      btnLearn: "/detail"
    },
    {
      img: "src/assets/instagram-bakers-1.jpg",
      title: "Specialty Pastries",
      desc: "Artisan pastries baked with love and care.",
      btnShop: "/allproduct",
      btnLearn: "/detail"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sampleImgs = [
    "src/assets/bun1.jpg",
    "https://images.unsplash.com/photo-1599785209707-3c7a4f5df77d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1603072023087-1bde0b981e63?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1603072033087-3d6f9b981e63?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <>
      <Navbar />

      <main className="pt-24 bg-pink-50">
        {/* Hero Carousel */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="relative w-full h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
            {carouselItems.map((item, idx) => (
              <img
                key={idx}
                src={item.img}
                alt={`hero-${idx}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 bg-gradient-to-r from-pink-700/50 to-transparent text-white z-20 transition">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                {carouselItems[current].title}
              </h1>
              <p className="text-lg md:text-xl mb-6 drop-shadow-md">
                {carouselItems[current].desc}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate(carouselItems[current].btnShop)}
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition shadow-lg"
                >
                  Shop Now
                </button>
                <button
                  onClick={() => navigate(carouselItems[current].btnLearn)}
                  className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-pink-700 transition shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-pink-600" : "bg-pink-300"
                }`}
                onClick={() => setCurrent(idx)}
              ></button>
            ))}
          </div>
        </section>

        {/* Sale Section */}
        <section className="max-w-7xl mx-auto px-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sale</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sampleImgs.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-center hover:scale-105 transform transition"
              >
                <img src={s} alt={`sale-${i}`} className="h-28 object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-6 mt-12 mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-4 text-center hover:scale-105 transform transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=400&q=80"
                  alt={`cat-${i}`}
                  className="h-28 mx-auto rounded-lg"
                />
                <p className="mt-2 font-medium">Category {i}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
