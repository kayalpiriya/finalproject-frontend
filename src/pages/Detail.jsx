// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Detail.css";


// function Detail() {
//   const [activeTab, setActiveTab] = useState("specialties");

//   return (
//     <>
//       <Navbar />
//       <div className="detail-page">
//         <div className="glass-card">
//           {/* Image */}
//           <div className="glass-image">
//             <img
//               src="https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=800&q=80"
//               alt="Bakery"
//             />
//           </div>

//           {/* Content */}
//           <div className="glass-content">
//             <h1>Mufflix Bakery</h1>
//             <p className="description">
//               Freshly baked cakes, cupcakes, muffins, and pastries every day.  
//               Love and quality in every bite!
//             </p>

//             {/* Tabs */}
//             <div className="tabs">
//               <button
//                 className={activeTab === "specialties" ? "active" : ""}
//                 onClick={() => setActiveTab("specialties")}
//               >
//                 🍰 Specialties
//               </button>
//               <button
//                 className={activeTab === "hours" ? "active" : ""}
//                 onClick={() => setActiveTab("hours")}
//               >
//                 ⏰ Hours
//               </button>
//               <button
//                 className={activeTab === "location" ? "active" : ""}
//                 onClick={() => setActiveTab("location")}
//               >
//                 📍 Location
//               </button>
//             </div>

//             {/* Tab Content */}
//             <div className="tab-content">
//               {activeTab === "specialties" && (
//                 <ul>
//                   <li>Chocolate Fudge Cake</li>
//                   <li>Vanilla Cupcakes</li>
//                   <li>Custom Birthday Cakes</li>
//                   <li>Assorted Pastries</li>
//                 </ul>
//               )}

//               {activeTab === "hours" && (
//                 <div>
//                   <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
//                   <p>Sun: 9:00 AM - 6:00 PM</p>
//                 </div>
//               )}

//               {activeTab === "location" && (
//                 <div>
//                   <p>123 Bakery Street</p>
//                   <p>Colombo, Sri Lanka</p>
//                 </div>
//               )}
//             </div>

//             <button className="order-btn">Order Now 🛒</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Detail;



// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Detail() {
//   const [activeTab, setActiveTab] = useState("specialties");

//   const specialties = [
//     { name: "Chocolate Fudge Cake" },
//     { name: "Vanilla Cupcakes" },
//     { name: "Custom Birthday Cakes" },
//     { name: "Assorted Pastries" },
//   ];

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br><br></br>
//       <div className="detail-page">
//         <div className="detail-card">
//           {/* Left Image */}
//           <div className="detail-image">
//             <img
//               src="https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=800&q=80"
//               alt="Bakery"
//             />
//           </div>

//           {/* Right Content */}
//           <div className="detail-content">
//             <h1>Mufflix Bakery</h1>
//             <p className="description">
//               Freshly baked cakes, cupcakes, muffins, and pastries every day. Love and quality in every bite!
//             </p>

//             {/* Tabs */}
//             <div className="tabs">
//               <button
//                 className={activeTab === "specialties" ? "active" : ""}
//                 onClick={() => setActiveTab("specialties")}
//               >
//                 Specialties
//               </button>
//               <button
//                 className={activeTab === "hours" ? "active" : ""}
//                 onClick={() => setActiveTab("hours")}
//               >
//                 Hours
//               </button>
//               <button
//                 className={activeTab === "location" ? "active" : ""}
//                 onClick={() => setActiveTab("location")}
//               >
//                 Location
//               </button>
//             </div>

//             {/* Tab Content */}
//             <div className="tab-content">
//               {activeTab === "specialties" && (
//                 <div className="specialties-grid">
//                   {specialties.map((item, index) => (
//                     <div key={index} className="specialty-card">
//                       {item.name}
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {activeTab === "hours" && (
//                 <div className="tab-text">
//                   <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
//                   <p>Sun: 9:00 AM - 6:00 PM</p>
//                 </div>
//               )}
//               {activeTab === "location" && (
//                 <div className="tab-text">
//                   <p>123 Bakery Street</p>
//                   <p>Colombo, Sri Lanka</p>
//                 </div>
//               )}
//             </div>

//             <button className="order-btn">Order Now 🛒</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Detail;



// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // ✅ Bakery Images
// // import bakeryImg from "../assets/bakery-hero.jpg";

// export default function Detail() {
//   const [activeTab, setActiveTab] = useState("specialties");
//   const specialties = ["Chocolate Fudge Cake", "Vanilla Cupcakes", "Custom Birthday Cakes", "Assorted Pastries"];

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:grid md:grid-cols-2 gap-8">
            
//             {/* Hero Image */}
//             <div className="relative h-80 md:h-auto">
//               <img
//                 src={bakeryImg}
//                 alt="bakery"
//                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>

//             {/* Info Section */}
//             <div className="p-8 flex flex-col justify-between">
//               <div>
//                 <h1 className="text-4xl font-extrabold text-pink-600 mb-4">Mufflix Bakery</h1>
//                 <p className="text-gray-700 mb-6">
//                   Freshly baked cakes, cupcakes, muffins, and pastries every day. Love and quality in every bite!
//                 </p>

//                 {/* Tabs */}
//                 <div className="flex gap-3 mb-6">
//                   <button
//                     className={`px-5 py-2 rounded-full transition ${
//                       activeTab === "specialties" ? "bg-pink-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                     onClick={() => setActiveTab("specialties")}
//                   >
//                     Specialties
//                   </button>
//                   <button
//                     className={`px-5 py-2 rounded-full transition ${
//                       activeTab === "hours" ? "bg-pink-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                     onClick={() => setActiveTab("hours")}
//                   >
//                     Hours
//                   </button>
//                   <button
//                     className={`px-5 py-2 rounded-full transition ${
//                       activeTab === "location" ? "bg-pink-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                     onClick={() => setActiveTab("location")}
//                   >
//                     Location
//                   </button>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="space-y-3">
//                   {activeTab === "specialties" && (
//                     <div className="grid grid-cols-2 gap-3">
//                       {specialties.map((item, i) => (
//                         <div key={i} className="bg-pink-50 text-pink-700 p-3 rounded-lg shadow-sm text-center font-medium">
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {activeTab === "hours" && (
//                     <div className="text-gray-700 space-y-1">
//                       <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
//                       <p>Sun: 9:00 AM - 6:00 PM</p>
//                     </div>
//                   )}

//                   {activeTab === "location" && (
//                     <div className="text-gray-700 space-y-1">
//                       <p>123 Bakery Street</p>
//                       <p>Colombo, Sri Lanka</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Order Button */}
//               <div className="mt-6">
//                 <button className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105">
//                   Order Now 🛒
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }


// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Detail() {
//   const [activeTab, setActiveTab] = useState("specialties");

//   const specialties = [
//     "Chocolate Fudge Cake",
//     "Vanilla Cupcakes",
//     "Custom Birthday Cakes",
//     "Assorted Pastries",
//   ];

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 bg-pink-50">
//         <div className="max-w-6xl mx-auto px-6 py-10">
//           <div className="bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
//             {/* Image Section */}
//             <div className="flex items-center justify-center">
//               <img
//                 src="https://images.unsplash.com/photo-1606755962770-ec9e3b43eb6f?auto=format&fit=crop&w=800&q=80"
//                 alt="bakery"
//                 className="rounded-2xl object-cover h-96 w-full shadow-md"
//               />
//             </div>

//             {/* Info Section */}
//             <div className="py-4 flex flex-col justify-between">
//               <div>
//                 <h1 className="text-3xl font-extrabold text-pink-700 mb-3">
//                   Mufflix Bakery
//                 </h1>
//                 <p className="text-gray-600 mb-6">
//                   Freshly baked cakes, cupcakes, muffins, and pastries every day.
//                   Love and quality in every bite!
//                 </p>

//                 {/* Tabs */}
//                 <div className="flex gap-3 mb-6">
//                   <button
//                     className={`px-4 py-2 rounded-md font-medium transition ${
//                       activeTab === "specialties"
//                         ? "bg-pink-600 text-white"
//                         : "bg-gray-100 text-gray-700"
//                     }`}
//                     onClick={() => setActiveTab("specialties")}
//                   >
//                     🍰 Specialties
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md font-medium transition ${
//                       activeTab === "hours"
//                         ? "bg-pink-600 text-white"
//                         : "bg-gray-100 text-gray-700"
//                     }`}
//                     onClick={() => setActiveTab("hours")}
//                   >
//                     ⏰ Hours
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md font-medium transition ${
//                       activeTab === "location"
//                         ? "bg-pink-600 text-white"
//                         : "bg-gray-100 text-gray-700"
//                     }`}
//                     onClick={() => setActiveTab("location")}
//                   >
//                     📍 Location
//                   </button>
//                 </div>

//                 {/* Tab Content */}
//                 <div>
//                   {activeTab === "specialties" && (
//                     <div className="grid grid-cols-2 gap-3">
//                       {specialties.map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-pink-50 rounded-md p-3 text-gray-700 shadow-sm hover:shadow-md transition"
//                         >
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                   {activeTab === "hours" && (
//                     <div className="text-gray-700 space-y-1">
//                       <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
//                       <p>Sun: 9:00 AM - 6:00 PM</p>
//                     </div>
//                   )}
//                   {activeTab === "location" && (
//                     <div className="text-gray-700 space-y-1">
//                       <p>123 Bakery Street</p>
//                       <p>Colombo, Sri Lanka</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Order Button */}
//               <div className="mt-6">
//                 <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
//                   Order Now 🛒
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }
