// import React from "react";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="bg-[#FFF8F3] text-[#4A4A4A]">
      
//       {/* ---------------------------------------------------- */}
//       {/* HERO SECTION */}
//       {/* ---------------------------------------------------- */}
    
//       <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
//         <img
//           src="/src/assets/bakery-hero.jpg"
//           className="w-full h-full object-cover opacity-80"
//           alt="Bakery"
//         />

//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold tracking-wide"
//         >
//           About Our Bakery
//         </motion.h1>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* STORY SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
//         <motion.img
//           src="/src/assets/bakery-about.jpg"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="rounded-2xl shadow-lg"
//         />

//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Fresh • Hygienic • Delicious
//           </h2>
//           <p className="leading-relaxed text-lg">
//             We started our bakery with a simple mission —  
//             <strong>to deliver hygienic, tasty and freshly baked treats</strong> 
//             that bring joy to every moment.  
//             From handcrafted cakes to soft breads, everything is made with love.
//           </p>

//           <p className="mt-4 text-lg">
//             Our team believes in quality and customer happiness.  
//             Every bite you take is prepared with care, cleanliness, and passion.
//           </p>
//         </motion.div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* WHY CHOOSE US */}
//       {/* ---------------------------------------------------- */}
//       <div className="bg-white py-20">
//         <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
//           Why Choose Us?
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
//           {[
//             {
//               title: "100% Hygienic",
//               desc: "We follow high-level cleanliness and safe preparation.",
//               icon: "🧼",
//             },
//             {
//               title: "Fresh Everyday",
//               desc: "All products are baked fresh daily with premium ingredients.",
//               icon: "🥐",
//             },
//             {
//               title: "Best Taste",
//               desc: "Perfect flavor, the right texture, and baked with love.",
//               icon: "🍰",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-[#FFF0E0] p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition"
//             >
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-lg">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* TEAM SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="py-20">
//         <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
//           Our Team
//         </h2>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
//           {[
//             { name: "Arun Kumar", role: "Head Chef", img: "/src/assets/team1.jpg" },
//             { name: "Priya Devi", role: "Cake Artist", img: "/src/assets/team2.jpg" },
//             { name: "Raghav", role: "Pastry Specialist", img: "/src/assets/team3.jpg" },
//           ].map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               className="text-center"
//             >
//               <img
//                 src={member.img}
//                 className="w-56 h-56 rounded-full mx-auto object-cover shadow-lg"
//               />
//               <h3 className="text-2xl font-bold mt-4">{member.name}</h3>
//               <p className="text-lg">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* ENDING SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="bg-[#FFD9C0] py-16 text-center">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-3xl md:text-4xl font-bold"
//         >
//           Made With Love, Served With Happiness ❤️
//         </motion.h2>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     // Changed bg-[#FFF8F3] to bg-orange-50 (Warm cream color)
//     // Changed text-[#4A4A4A] to text-gray-800 (Dark gray text)
//     <div className="bg-orange-50 text-gray-800 font-sans">
//       {/* ---------------------------------------------------- */}
//       {/* HERO SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
//         <img
//           src="/src/assets/bakery-hero.jpg"
//           className="w-full h-full object-cover"
//           alt="Bakery"
//         />
// <Navbar />
//         {/* Overlay: Ensure this has a visible color */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg"
//         >
//           About Our Bakery
//         </motion.h1>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* STORY SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
//         <motion.img
//           src="/src/assets/bakery-about.jpg"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="rounded-2xl shadow-xl w-full h-auto object-cover"
//           alt="About us"
//         />

//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600">
//             Fresh • Hygienic • Delicious
//           </h2>
//           <p className="leading-relaxed text-lg text-gray-700">
//             We started our bakery with a simple mission —  
//             <strong className="text-orange-700"> to deliver hygienic, tasty and freshly baked treats</strong> 
//             that bring joy to every moment.  
//             From handcrafted cakes to soft breads, everything is made with love.
//           </p>

//           <p className="mt-4 text-lg text-gray-700">
//             Our team believes in quality and customer happiness.  
//             Every bite you take is prepared with care, cleanliness, and passion.
//           </p>
//         </motion.div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* WHY CHOOSE US */}
//       {/* ---------------------------------------------------- */}
//       <div className="bg-white py-20">
//         <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
//           Why Choose Us?
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
//           {[
//             {
//               title: "100% Hygienic",
//               desc: "We follow high-level cleanliness and safe preparation.",
//               icon: "🧼",
//             },
//             {
//               title: "Fresh Everyday",
//               desc: "All products are baked fresh daily with premium ingredients.",
//               icon: "🥐",
//             },
//             {
//               title: "Best Taste",
//               desc: "Perfect flavor, the right texture, and baked with love.",
//               icon: "🍰",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               // Changed bg-[#FFF0E0] to bg-orange-100
//               className="bg-orange-100 p-8 rounded-2xl shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
//             >
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="text-2xl font-semibold mb-2 text-orange-800">{item.title}</h3>
//               <p className="text-gray-700 text-lg">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* TEAM SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="py-20 bg-orange-50">
//         <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
//           Our Team
//         </h2>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
//           {[
//             { name: "Arun Kumar", role: "Head Chef", img: "/src/assets/team1.jpg" },
//             { name: "Priya Devi", role: "Cake Artist", img: "/src/assets/team2.jpg" },
//             { name: "Raghav", role: "Pastry Specialist", img: "/src/assets/team3.jpg" },
//           ].map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md"
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-48 h-48 rounded-full mx-auto object-cover shadow-md border-4 border-orange-100"
//               />
//               <h3 className="text-2xl font-bold mt-4 text-gray-800">{member.name}</h3>
//               <p className="text-lg text-orange-600 font-medium">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* ENDING SECTION */}
//       {/* ---------------------------------------------------- */}
//       {/* Changed bg-[#FFD9C0] to bg-orange-300 */}
//       <div className="bg-orange-300 py-16 text-center">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-3xl md:text-4xl font-bold text-white drop-shadow-md"
//         >
//           Made With Love, Served With Happiness ❤️
//         </motion.h2>
//       </div>
//     </div>
//   );
// }






// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ChefHat, Croissant, Wheat, Star, Heart, Award, Sparkles } from "lucide-react";

// // --- Reusable Animation Component ---
// const FadeIn = ({ children, delay = 0, className = "" }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 0.8, delay, ease: "easeOut" }}
//     className={className}
//   >
//     {children}
//   </motion.div>
// );

// export default function About() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   return (
//     <>
    
//     <div className="bg-stone-50 text-stone-800 font-sans selection:bg-orange-200 overflow-hidden">
//       {/* Inject Google Fonts for that Premium 2025 Look */}
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');`}
//       </style>
      
//       {/* ---------------------------------------------------- */}
//       {/* HERO SECTION (Parallax & Modern Typography) */}
//       {/* ---------------------------------------------------- */}
//       <div ref={containerRef} className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
//         <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
//           <img
//             // Replace with your local image: src="/src/assets/bakery-hero.jpg"
//             src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
//             className="w-full h-full object-cover brightness-75 scale-110"
//             alt="Artisan Bread"
//           />
//         </motion.div>
        
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-50/90 z-10"></div>

//         <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="inline-block mb-4 px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm tracking-widest uppercase"
//           >
//             Est. 2024 • Artisan Bakery
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-8xl font-serif text-white font-medium leading-tight drop-shadow-xl"
//           >
//             Baking the world <br />
//             <span className="italic text-orange-200">a better place.</span>
//           </motion.h1>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* SCROLLING MARQUEE (Trendy) */}
//       {/* ---------------------------------------------------- */}
//       <div className="bg-orange-600 py-4 overflow-hidden whitespace-nowrap relative z-20 -mt-1">
//         <motion.div 
//           className="flex gap-10 text-white font-bold uppercase tracking-wider text-lg items-center"
//           animate={{ x: [0, -1000] }}
//           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         >
//           {[...Array(10)].map((_, i) => (
//             <React.Fragment key={i}>
//               <span>Freshly Baked</span>
//               <Sparkles size={16} />
//               <span>100% Organic</span>
//               <Sparkles size={16} />
//               <span>Made with Love</span>
//               <Sparkles size={16} />
//             </React.Fragment>
//           ))}
//         </motion.div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* STORY SECTION (Asymmetrical Layout) */}
//       {/* ---------------------------------------------------- */}
//       <div className="max-w-7xl mx-auto py-24 px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-300 rounded-3xl z-0"></div>
//             <img
//               // Replace with: src="/src/assets/bakery-about.jpg"
//               src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
//               className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
//               alt="Our Kitchen"
//             />
//             <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
//               <p className="text-4xl font-serif text-orange-600 font-bold">50k+</p>
//               <p className="text-stone-500 text-sm uppercase tracking-wide">Happy Customers</p>
//             </div>
//           </motion.div>

//           <FadeIn className="space-y-8">
//             <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
//               We don't just bake. <br/>
//               <span className="text-orange-600 decoration-stone-300 underline decoration-2 underline-offset-8">We craft memories.</span>
//             </h2>
//             <p className="text-lg text-stone-600 leading-relaxed font-light">
//               Founded in a small kitchen with a big dream, our bakery represents the perfect blend of 
//               traditional techniques and modern flavors. We believe that a croissant isn't just a pastry; 
//               it's a moment of pause in a busy day.
//             </p>
//             <div className="flex gap-4 pt-4">
//               <div className="flex items-center gap-3">
//                 <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Wheat size={24} /></div>
//                 <span className="font-semibold text-stone-700">Organic Flour</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Heart size={24} /></div>
//                 <span className="font-semibold text-stone-700">Handmade</span>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* BENTO GRID (2025 Design Trend) */}
//       {/* ---------------------------------------------------- */}
//       <div className="bg-stone-900 py-24 text-stone-100 rounded-t-[3rem] relative overflow-hidden">
//         {/* Background Noise Texture */}
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <FadeIn>
//             <h2 className="text-center text-4xl md:text-5xl font-serif mb-16">
//               Why we are different
//             </h2>
//           </FadeIn>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
//             {/* Large Box */}
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="md:col-span-2 md:row-span-2 bg-stone-800/50 rounded-3xl p-10 border border-stone-700 backdrop-blur-sm flex flex-col justify-between group relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-orange-500/30"></div>
//               <div>
//                 <div className="bg-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white">
//                   <ChefHat size={32} />
//                 </div>
//                 <h3 className="text-3xl font-serif mb-4">Master Chefs</h3>
//                 <p className="text-stone-400 text-lg max-w-md">
//                   Our kitchen is led by award-winning chefs who treat every dough like a canvas. 
//                   Precision, patience, and passion are the main ingredients.
//                 </p>
//               </div>
//               <img 
//                  // Replace with: src="/src/assets/baker-hands.jpg"
//                 src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2000&auto=format&fit=crop"
//                 className="w-full h-48 object-cover rounded-2xl mt-6 opacity-80 group-hover:opacity-100 transition-opacity"
//                 alt="Chef Hands"
//               />
//             </motion.div>

//             {/* Small Box 1 */}
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="bg-orange-600 text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center"
//             >
//               <Croissant size={48} className="mb-4" />
//               <h3 className="text-xl font-bold mb-2">Fresh Daily</h3>
//               <p className="text-orange-100 text-sm">Baked at 4 AM every single morning.</p>
//             </motion.div>

//             {/* Small Box 2 */}
//             <motion.div 
//                whileHover={{ scale: 1.02 }}
//                className="bg-stone-100 text-stone-900 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
//             >
//                <Award size={40} className="mb-4 text-orange-600" />
//                <h3 className="text-xl font-bold mb-2">Zero Preservatives</h3>
//                <p className="text-stone-600 text-sm">Clean eating, purely natural ingredients.</p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* TEAM (Clean Cards) */}
//       {/* ---------------------------------------------------- */}
//       <div className="py-24 bg-stone-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <FadeIn className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif text-stone-800">The Artisans</h2>
//             <p className="mt-4 text-stone-500">Meet the hands behind the magic</p>
//           </FadeIn>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               { name: "Arun Kumar", role: "Head Chef", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop" },
//               { name: "Priya Devi", role: "Cake Artist", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=2087&auto=format&fit=crop" },
//               { name: "Raghav", role: "Pastry Specialist", img: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=1974&auto=format&fit=crop" },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.4, delay: i * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="overflow-hidden rounded-2xl shadow-md">
//                   <img
//                     src={member.img} // Replace with local image
//                     className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
//                     alt={member.name}
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-2xl font-serif">{member.name}</h3>
//                     <p className="text-orange-300 text-sm font-medium uppercase tracking-wider">{member.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* FOOTER CALL TO ACTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="py-20 bg-orange-50 text-center px-6">
//         <motion.div
//            initial={{ scale: 0.8, opacity: 0 }}
//            whileInView={{ scale: 1, opacity: 1 }}
//            transition={{ duration: 0.6 }}
//            className="max-w-3xl mx-auto border-2 border-dashed border-orange-300 p-10 rounded-[3rem]"
//         >
//           <Star className="w-12 h-12 text-orange-500 mx-auto mb-6" />
//           <h2 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6">
//             Taste the <span className="text-orange-600">Difference.</span>
//           </h2>
//           <button className="bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30">
//             Order Online Now
//           </button>
//         </motion.div>
//       </div>
//     </div>
//    </>);
// }



// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ChefHat, Croissant, Wheat, Star, Heart, Award, Sparkles } from "lucide-react";

// // --- IMPORT YOUR COMPONENTS HERE ---
// // Adjust the path "../components/" based on where your files are actually located
// import Navbar from "../components/Navbar"; 
// import Footer from "../components/Footer";

// // --- Reusable Animation Component ---
// const FadeIn = ({ children, delay = 0, className = "" }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 0.8, delay, ease: "easeOut" }}
//     className={className}
//   >
//     {children}
//   </motion.div>
// );

// export default function About() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Parallax effect for the background
//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   return (
//     <div className="bg-stone-50 text-stone-800 font-sans selection:bg-orange-200 min-h-screen flex flex-col">
      
//       {/* --- NAVBAR --- */}
//       {/* Ideally, your Navbar should have 'fixed top-0 z-50' classes to float over the hero */}
//       <Navbar />
//       <br></br><br></br><br></br><br></br><br></br>

//       {/* Inject Google Fonts */}
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');`}
//       </style>

//       {/* ---------------------------------------------------- */}
//       {/* HERO SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div ref={containerRef} className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
//         <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
//             className="w-full h-full object-cover brightness-75 scale-110"
//             alt="Artisan Bread"
//           />
//         </motion.div>
        
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-50/90 z-10"></div>

//         <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="inline-block mb-4 px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm tracking-widest uppercase"
//           >
//             Est. 2024 • Artisan Bakery
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-8xl font-serif text-white font-medium leading-tight drop-shadow-xl"
//           >
//             Baking the world <br />
//             <span className="italic text-orange-200">a better place.</span>
//           </motion.h1>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* SCROLLING MARQUEE */}
//       {/* ---------------------------------------------------- */}
//       <div className="bg-orange-600 py-4 overflow-hidden whitespace-nowrap relative z-20 -mt-1">
//         <motion.div 
//           className="flex gap-10 text-white font-bold uppercase tracking-wider text-lg items-center"
//           animate={{ x: [0, -1000] }}
//           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         >
//           {[...Array(10)].map((_, i) => (
//             <React.Fragment key={i}>
//               <span>Freshly Baked</span>
//               <Sparkles size={16} />
//               <span>100% Organic</span>
//               <Sparkles size={16} />
//               <span>Made with Love</span>
//               <Sparkles size={16} />
//             </React.Fragment>
//           ))}
//         </motion.div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* STORY SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="max-w-7xl mx-auto py-24 px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-300 rounded-3xl z-0"></div>
//             <img
//               src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
//               className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
//               alt="Our Kitchen"
//             />
//             <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
//               <p className="text-4xl font-serif text-orange-600 font-bold">50k+</p>
//               <p className="text-stone-500 text-sm uppercase tracking-wide">Happy Customers</p>
//             </div>
//           </motion.div>

//           <FadeIn className="space-y-8">
//             <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
//               We don't just bake. <br/>
//               <span className="text-orange-600 decoration-stone-300 underline decoration-2 underline-offset-8">We craft memories.</span>
//             </h2>
//             <p className="text-lg text-stone-600 leading-relaxed font-light">
//               Founded in a small kitchen with a big dream, our bakery represents the perfect blend of 
//               traditional techniques and modern flavors. We believe that a croissant isn't just a pastry; 
//               it's a moment of pause in a busy day.
//             </p>
//             <div className="flex gap-4 pt-4">
//               <div className="flex items-center gap-3">
//                 <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Wheat size={24} /></div>
//                 <span className="font-semibold text-stone-700">Organic Flour</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Heart size={24} /></div>
//                 <span className="font-semibold text-stone-700">Handmade</span>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* BENTO GRID (2025 Trend) */}
//       {/* ---------------------------------------------------- */}
//       <div className="bg-stone-900 py-24 text-stone-100 rounded-t-[3rem] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <FadeIn>
//             <h2 className="text-center text-4xl md:text-5xl font-serif mb-16">
//               Why we are different
//             </h2>
//           </FadeIn>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="md:col-span-2 md:row-span-2 bg-stone-800/50 rounded-3xl p-10 border border-stone-700 backdrop-blur-sm flex flex-col justify-between group relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-orange-500/30"></div>
//               <div>
//                 <div className="bg-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white">
//                   <ChefHat size={32} />
//                 </div>
//                 <h3 className="text-3xl font-serif mb-4">Master Chefs</h3>
//                 <p className="text-stone-400 text-lg max-w-md">
//                   Our kitchen is led by award-winning chefs who treat every dough like a canvas. 
//                   Precision, patience, and passion are the main ingredients.
//                 </p>
//               </div>
//               <img 
//                 src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2000&auto=format&fit=crop"
//                 className="w-full h-48 object-cover rounded-2xl mt-6 opacity-80 group-hover:opacity-100 transition-opacity"
//                 alt="Chef Hands"
//               />
//             </motion.div>

//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="bg-orange-600 text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center"
//             >
//               <Croissant size={48} className="mb-4" />
//               <h3 className="text-xl font-bold mb-2">Fresh Daily</h3>
//               <p className="text-orange-100 text-sm">Baked at 4 AM every single morning.</p>
//             </motion.div>

//             <motion.div 
//                whileHover={{ scale: 1.02 }}
//                className="bg-stone-100 text-stone-900 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
//             >
//                <Award size={40} className="mb-4 text-orange-600" />
//                <h3 className="text-xl font-bold mb-2">Zero Preservatives</h3>
//                <p className="text-stone-600 text-sm">Clean eating, purely natural ingredients.</p>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* TEAM SECTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="py-24 bg-stone-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <FadeIn className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif text-stone-800">The Artisans</h2>
//             <p className="mt-4 text-stone-500">Meet the hands behind the magic</p>
//           </FadeIn>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               { name: "Arun Kumar", role: "Head Chef", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop" },
//               { name: "Priya Devi", role: "Cake Artist", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=2087&auto=format&fit=crop" },
//               { name: "Raghav", role: "Pastry Specialist", img: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=1974&auto=format&fit=crop" },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.4, delay: i * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="overflow-hidden rounded-2xl shadow-md">
//                   <img
//                     src={member.img}
//                     className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
//                     alt={member.name}
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-2xl font-serif">{member.name}</h3>
//                     <p className="text-orange-300 text-sm font-medium uppercase tracking-wider">{member.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------------------------------- */}
//       {/* CALL TO ACTION */}
//       {/* ---------------------------------------------------- */}
//       <div className="py-20 bg-orange-50 text-center px-6">
//         <motion.div
//            initial={{ scale: 0.8, opacity: 0 }}
//            whileInView={{ scale: 1, opacity: 1 }}
//            transition={{ duration: 0.6 }}
//            className="max-w-3xl mx-auto border-2 border-dashed border-orange-300 p-10 rounded-[3rem]"
//         >
//           <Star className="w-12 h-12 text-orange-500 mx-auto mb-6" />
//           <h2 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6">
//             Taste the <span className="text-orange-600">Difference.</span>
//           </h2>
//           <button className="bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30">
//             Order Online Now
//           </button>
//         </motion.div>
//       </div>

//       {/* --- FOOTER --- */}
//       <Footer />
      
//     </div>
//   );
// }



// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { 
//   ArrowRight, Star, ChefHat, Wheat, Clock, 
//   ChevronDown, Minus, Plus, Instagram 
// } from "lucide-react";

// export default function About() {
//   const navigate = useNavigate();
//   const containerRef = useRef(null);

//   // --- COLOR PALETTE ---
//   const accentPink = "rgb(214, 143, 143)";
//   const darkText = "#1a1a1a";

//   // --- STATE: HOVER GALLERY ---
//   const [activeFeature, setActiveFeature] = useState(0);
//   const features = [
//     { id: 0, title: "The Sourcing", text: "We travel to 14 local farms every week. Our flour is stone-milled within 50 miles of the bakery.", img: "/src/assets/breadd.jpg" },
//     { id: 1, title: "The Process", text: "48-hour fermentation. No commercial yeast. Just flour, water, wild air, and patience.", img: "/src/assets/bun1.jpg" },
//     { id: 2, title: "The Finish", text: "Hand-laminated pastries with 84% butterfat butter for the perfect shatter.", img: "/src/assets/instagram-bakers-1.jpg" },
//   ];

//   // --- STATE: ACCORDION ---
//   const [openSection, setOpenSection] = useState(null);
//   const logic = [
//     { title: "Why Organic?", content: "Because flavor comes from soil health. Organic grain has 40% more mineral content and tastes nuttier." },
//     { title: "Why Sourdough?", content: "It's gut-healthy. The natural bacteria break down gluten, making our bread easier to digest and richer in flavor." },
//     { title: "Why Small Batch?", content: "Mass production kills soul. We bake in batches of 50 loaves to ensure every single one is perfect." },
//   ];

//   return (
//     <>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
          
//           body { margin: 0; background-color: #FAFAFA; color: #1a1a1a; font-family: 'Outfit', sans-serif; }
//           h1, h2, h3, .serif { font-family: 'Playfair Display', serif; }
          
//           .wrapper { max-width: 1300px; margin: 0 auto; padding: 0 30px; }

//           /* Grids */
//           .grid-hero { display: grid; gap: 50px; grid-template-columns: 1fr; }
//           .grid-interactive { display: grid; gap: 20px; grid-template-columns: 1fr; }
          
//           @media (min-width: 900px) {
//             .grid-hero { grid-template-columns: 1.5fr 1fr; align-items: center; }
//             .grid-interactive { grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
//           }

//           /* Utilities */
//           .text-outline {
//             -webkit-text-stroke: 1px #e0e0e0;
//             color: transparent;
//             transition: 0.3s;
//           }
//           .feature-item:hover .text-outline {
//             -webkit-text-stroke: 0px;
//             color: ${darkText};
//           }

//           .hide-scroll::-webkit-scrollbar { display: none; }
//         `}
//       </style>

//       <Navbar />

//       <main style={{ overflowX: "hidden" }}>

//         {/* 1. HERO: SPLIT TYPOGRAPHY */}
//         <section style={{ paddingTop: "140px", paddingBottom: "100px" }}>
//           <div className="wrapper grid-hero">
//             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
//                  <div style={{ width: "40px", height: "1px", background: accentPink }}></div>
//                  <span style={{ color: accentPink, fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase", fontSize: "13px" }}>Our Philosophy</span>
//                </div>
               
//                <h1 className="serif" style={{ fontSize: "clamp(4rem, 7vw, 7rem)", lineHeight: "0.95", margin: "0 0 40px 0" }}>
//                  Slow down. <br/> Eat <span style={{ color: accentPink, fontStyle: "italic" }}>better.</span>
//                </h1>
               
//                <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
//                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6", maxWidth: "400px", color: "#555" }}>
//                    In a world of instant gratification, we choose the long road. 48-hour fermentation, hand-rolled dough, and ingredients with a name and a face.
//                  </p>
                 
//                  {/* Circular Badge */}
//                  <motion.div 
//                    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
//                    style={{ width: "120px", height: "120px", borderRadius: "50%", border: `1px solid ${accentPink}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", flexShrink: 0 }}
//                  >
//                    <svg viewBox="0 0 100 100" width="100" height="100">
//                      <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
//                      <text fontSize="12" fill={darkText}>
//                        <textPath href="#curve">ESTABLISHED • 1998 • ARTISAN •</textPath>
//                      </text>
//                    </svg>
//                    <Wheat size={24} color={accentPink} style={{ position: "absolute" }} />
//                  </motion.div>
//                </div>
//             </motion.div>

//             {/* Hero Image with Reveal */}
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
//               style={{ position: "relative", height: "600px", borderRadius: "200px 200px 0 0", overflow: "hidden" }}
//             >
//               <img src="/src/assets/cakee1.jpg" alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//               <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", height: "150px", background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}></div>
//             </motion.div>
//           </div>
//         </section>

//         {/* 2. INTERACTIVE GALLERY (Hover to Change) */}
//         <section style={{ padding: "100px 0", background: "#FFF5F5" }}> 
//           <div className="wrapper grid-interactive">
            
//             {/* Left: List */}
//             <div>
//               <h2 className="serif" style={{ fontSize: "3rem", marginBottom: "50px" }}>The Method.</h2>
//               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//                 {features.map((feature, index) => (
//                   <div 
//                     key={index}
//                     onMouseEnter={() => setActiveFeature(index)}
//                     className="feature-item"
//                     style={{ cursor: "pointer", paddingLeft: "20px", borderLeft: activeFeature === index ? `3px solid ${accentPink}` : "3px solid #ddd", transition: "0.3s" }}
//                   >
//                     <h3 
//                       className="serif" 
//                       style={{ 
//                         fontSize: "3rem", margin: "0", transition: "0.3s",
//                         color: activeFeature === index ? darkText : "transparent",
//                         WebkitTextStroke: activeFeature === index ? "0px" : "1px #ccc"
//                       }}
//                     >
//                       {feature.title}
//                     </h3>
//                     <AnimatePresence>
//                       {activeFeature === index && (
//                         <motion.p 
//                           initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
//                           style={{ margin: "10px 0 0 0", color: "#666", maxWidth: "400px", lineHeight: "1.6" }}
//                         >
//                           {feature.text}
//                         </motion.p>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right: Dynamic Image */}
//             <div style={{ height: "500px", borderRadius: "30px", overflow: "hidden", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
//               <AnimatePresence mode="wait">
//                 <motion.img 
//                   key={activeFeature}
//                   src={features[activeFeature].img}
//                   initial={{ scale: 1.1, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </AnimatePresence>
              
//               <div style={{ position: "absolute", bottom: "20px", right: "20px", background: "white", padding: "10px 20px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", fontWeight: "bold" }}>
//                 <div style={{ width: "8px", height: "8px", background: accentPink, borderRadius: "50%" }}></div>
//                 Step 0{activeFeature + 1}
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* 3. HORIZONTAL DRAGGABLE TIMELINE */}
//         <section style={{ padding: "100px 0" }}>
//           <div className="wrapper">
//             <div style={{ textAlign: "center", marginBottom: "60px" }}>
//               <span style={{ color: accentPink, fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>History</span>
//               <h2 className="serif" style={{ fontSize: "3.5rem", marginTop: "10px" }}>From 1998 to Now</h2>
//             </div>

//             <div className="hide-scroll" style={{ display: "flex", gap: "40px", overflowX: "auto", paddingBottom: "20px", cursor: "grab" }}>
//                {[
//                  { year: "1998", title: "The Garage", desc: "Started with one oven." },
//                  { year: "2004", title: "First Shop", desc: "Opened on Main St." },
//                  { year: "2012", title: "Paris Award", desc: "Won Best Croissant." },
//                  { year: "2019", title: "Organic", desc: "100% Organic shift." },
//                  { year: "2025", title: "The Future", desc: "New flagship store." },
//                ].map((item, i) => (
//                  <motion.div 
//                    key={i}
//                    whileHover={{ scale: 1.05 }}
//                    style={{ minWidth: "280px", height: "350px", background: i % 2 === 0 ? "#1a1a1a" : accentPink, color: "white", padding: "40px", borderRadius: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
//                  >
//                     <span style={{ fontSize: "4rem", fontWeight: "bold", opacity: 0.3, fontFamily: "'Playfair Display'" }}>{item.year}</span>
//                     <div>
//                       <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{item.title}</h3>
//                       <p style={{ opacity: 0.8 }}>{item.desc}</p>
//                     </div>
//                  </motion.div>
//                ))}
//             </div>
//           </div>
//         </section>

//         {/* 4. FUNCTIONAL ACCORDION (Baker's Logic) */}
//         <section style={{ padding: "100px 0", background: "#FAFAFA" }}>
//           <div className="wrapper" style={{ maxWidth: "800px" }}>
//              <h2 className="serif" style={{ fontSize: "3rem", textAlign: "center", marginBottom: "60px" }}>Baker's Logic</h2>
             
//              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                {logic.map((item, i) => (
//                  <div key={i} style={{ borderBottom: "1px solid #eee" }}>
//                    <button 
//                      onClick={() => setOpenSection(openSection === i ? null : i)}
//                      style={{ 
//                        width: "100%", padding: "30px 0", background: "transparent", border: "none", 
//                        display: "flex", justifyContent: "space-between", alignItems: "center", 
//                        cursor: "pointer", textAlign: "left"
//                      }}
//                    >
//                      <span style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", color: openSection === i ? accentPink : darkText, transition: "0.3s" }}>
//                        {item.title}
//                      </span>
//                      {openSection === i ? <Minus color={accentPink} /> : <Plus color="#ccc" />}
//                    </button>
//                    <AnimatePresence>
//                      {openSection === i && (
//                        <motion.div 
//                          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
//                          style={{ overflow: "hidden" }}
//                        >
//                          <p style={{ paddingBottom: "30px", color: "#666", lineHeight: "1.6", fontSize: "1.1rem" }}>{item.content}</p>
//                        </motion.div>
//                      )}
//                    </AnimatePresence>
//                  </div>
//                ))}
//              </div>
//           </div>
//         </section>

//         {/* 5. LARGE IMAGE PARALLAX BREAK */}
//         <section style={{ 
//           height: "500px", width: "100%", 
//           backgroundImage: "url('/src/assets/instagram-bakers-1.jpg')", 
//           backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center",
//           position: "relative", display: "flex", alignItems: "center", justifyContent: "center"
//         }}>
//            <div style={{ background: "white", padding: "50px 80px", textAlign: "center", maxWidth: "600px" }}>
//              <Star size={30} fill={accentPink} stroke="none" style={{ marginBottom: "20px" }} />
//              <h2 className="serif" style={{ fontSize: "2.5rem", margin: "0 0 10px 0" }}>"A Masterpiece."</h2>
//              <p style={{ color: "#888", fontStyle: "italic" }}>— New York Times Food</p>
//            </div>
//         </section>

//         {/* 6. FOOTER CTA */}
//         <section style={{ padding: "120px 0", textAlign: "center" }}>
//           <div className="wrapper">
//             <h2 className="serif" style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: "1", marginBottom: "40px" }}>
//               Smell the <span style={{ color: accentPink, textDecoration: "underline" }}>fresh</span> bread?
//             </h2>
//             <button 
//               onClick={() => navigate("/allproduct")}
//               style={{ 
//                 background: "#1a1a1a", color: "white", padding: "20px 60px", 
//                 borderRadius: "50px", fontSize: "1.2rem", border: "none", 
//                 cursor: "pointer", transition: "0.3s", fontWeight: "bold" 
//               }}
//               onMouseOver={(e) => e.currentTarget.style.background = accentPink}
//               onMouseOut={(e) => e.currentTarget.style.background = "#1a1a1a"}
//             >
//               View The Menu
//             </button>
//           </div>
//         </section>

//       </main>
//       <Footer />
//     </>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Leaf, Award, Users, ArrowRight, Star, Coffee } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  // --- THEME COLORS ---
  const colors = {
    accent: "rgb(214, 143, 143)", // Your specific rose
    lightPink: "#FDF4F1",         // The light brown pink background
    textDark: "#44403C",          // Warm dark gray
    textLight: "#78716C",         // Muted gray
    white: "#FFFFFF",
    cream: "#FAFAF9"
  };

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div style={{ backgroundColor: colors.cream, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: colors.textDark, overflowX: "hidden" }}>
      
      {/* --- GLOBAL STYLES FOR FONTS & MEDIA QUERIES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        /* Blob Animation */
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -20px) rotate(5deg); }
          66% { transform: translate(-10px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-float { animation: float 10s infinite ease-in-out; }

        /* Responsive Grid Adjustments */
        @media (max-width: 768px) {
          .responsive-flex { flex-direction: column !important; }
          .responsive-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 3rem !important; }
        }
      `}</style>

      <Navbar />

      {/* 1. HERO SECTION */}
      <header style={{ position: "relative", paddingTop: "140px", paddingBottom: "80px", paddingLeft: "20px", paddingRight: "20px" }}>
        {/* Background Decor */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px", backgroundColor: colors.accent, opacity: "0.1", filter: "blur(100px)", borderRadius: "50%", zIndex: 0 }}></div>
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ textAlign: "center" }}
          >
            <motion.span variants={fadeInUp} style={{ display: "inline-block", padding: "8px 16px", borderRadius: "50px", backgroundColor: "rgba(214, 143, 143, 0.1)", color: colors.accent, fontWeight: "bold", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px" }}>
              Est. 2025 • Artisanal Bakery
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp} 
              className="hero-title"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", lineHeight: "1", fontWeight: "700", marginBottom: "20px" }}
            >
              We Bake <span style={{ fontStyle: "italic", color: colors.accent }}>Memories.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} style={{ fontSize: "1.25rem", color: colors.textLight, maxWidth: "600px", margin: "0 auto 60px auto", lineHeight: "1.6" }}>
              More than just flour and sugar. We craft moments of joy, one hand-rolled croissant and artisan loaf at a time.
            </motion.p>
          </motion.div>

          {/* Hero Image Collage */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ position: "relative", height: "500px", borderRadius: "40px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
          >
            <img src="/src/assets/instagram-bakers-1.jpg" alt="Bakery Interior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            
            {/* Floating Badge */}
            <div className="animate-float" style={{ position: "absolute", bottom: "40px", right: "40px", backgroundColor: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", padding: "25px", borderRadius: "20px", maxWidth: "250px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill={colors.accent} stroke="none" />)}
              </div>
              <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: "600", fontStyle: "italic" }}>"The attention to detail in every pastry is simply world-class."</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. OUR STORY SECTION (Light Brown Pink Background) */}
      <section style={{ backgroundColor: colors.lightPink, padding: "100px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="responsive-flex" style={{ display: "flex", alignItems: "center", gap: "60px" }}>
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1, position: "relative" }}
            >
              <div style={{ position: "relative", zIndex: 2, borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 40px rgba(214,143,143,0.2)" }}>
                <img src="/src/assets/breadd.jpg" alt="Kneading Dough" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              {/* Decorative Border Element */}
              <div style={{ position: "absolute", top: "20px", left: "-20px", width: "100%", height: "100%", border: `2px solid ${colors.accent}`, borderRadius: "30px", zIndex: 1 }}></div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1 }}
            >
              <h4 style={{ color: colors.accent, fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px" }}>Our Story</h4>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", lineHeight: "1.1", marginBottom: "25px" }}>
                From a Small Kitchen <br/> to Your <span style={{ color: colors.accent }}>Heart.</span>
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "20px" }}>
                It started with a simple sourdough starter and a dream in 2015. Our founder, Jane Doe, believed that bread shouldn't just be food—it should be an experience.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "40px" }}>
                Today, we maintain that same philosophy. No shortcuts, no preservatives, just time-honored techniques mixed with modern creativity. Every loaf that leaves our oven is a testament to patience and passion.
              </p>
              
              <div style={{ display: "flex", gap: "40px" }}>
                <div>
                  <h3 style={{ fontSize: "2.5rem", fontFamily: "'Playfair Display', serif", margin: 0 }}>15+</h3>
                  <span style={{ fontSize: "0.9rem", color: colors.textLight }}>Years Baking</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "2.5rem", fontFamily: "'Playfair Display', serif", margin: 0 }}>50k+</h3>
                  <span style={{ fontSize: "0.9rem", color: colors.textLight }}>Happy Customers</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. VALUES SECTION */}
      <section style={{ padding: "100px 20px", backgroundColor: colors.white }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", marginBottom: "15px" }}>The Secret Ingredients</h2>
            <p style={{ color: colors.textLight }}>What makes our bakery unlike any other.</p>
          </div>

          <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
            {[
              { icon: Leaf, title: "100% Organic", desc: "We source our grains and dairy from local certified organic farms." },
              { icon: Heart, title: "Handmade with Love", desc: "No machines can replicate the touch of a skilled artisan baker." },
              { icon: Coffee, title: "Baked Fresh Daily", desc: "We start baking at 3 AM so you get the freshest goods by sunrise." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                style={{ 
                  padding: "40px", 
                  borderRadius: "30px", 
                  backgroundColor: colors.cream, 
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
              >
                <div style={{ width: "70px", height: "70px", backgroundColor: colors.lightPink, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 25px auto" }}>
                  <item.icon size={30} color={colors.accent} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", marginBottom: "15px" }}>{item.title}</h3>
                <p style={{ color: colors.textLight, lineHeight: "1.6" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET THE TEAM (Circular Design) */}
      <section style={{ padding: "100px 20px", backgroundColor: colors.lightPink }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", marginBottom: "60px" }}>Meet the Makers</h2>
          
          <div className="responsive-flex" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
            {[
              { name: "Sarah Jenkins", role: "Head Baker", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
              { name: "David Rossi", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
              { name: "Elena Miles", role: "Cake Artist", img: "https://images.unsplash.com/photo-1605493666469-34b76d0f18f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{ textAlign: "center" }}
              >
                <div style={{ width: "220px", height: "220px", borderRadius: "50%", overflow: "hidden", marginBottom: "20px", border: "5px solid white", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", margin: "0 auto" }}>
                  <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", margin: "0 0 5px 0" }}>{member.name}</h3>
                <p style={{ color: colors.accent, fontWeight: "bold", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section style={{ padding: "100px 20px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            backgroundColor: colors.textDark, 
            borderRadius: "40px", 
            padding: "80px 40px", 
            textAlign: "center", 
            color: "white",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Background Blob */}
          <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "600px", height: "600px", backgroundColor: colors.accent, opacity: "0.2", filter: "blur(100px)", borderRadius: "50%" }}></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", marginBottom: "20px" }}>Craving something sweet?</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px auto" }}>
              Our ovens are warm and the shelves are stocked. Come taste the magic we've been talking about.
            </p>
            <motion.button 
              onClick={() => navigate("/allproduct")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                backgroundColor: colors.accent, 
                color: "white", 
                border: "none", 
                padding: "18px 40px", 
                borderRadius: "50px", 
                fontSize: "1.1rem", 
                fontWeight: "bold", 
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 10px 30px rgba(214,143,143, 0.4)"
              }}
            >
              Visit the Shop <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;