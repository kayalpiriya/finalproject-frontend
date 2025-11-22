// import React from "react";

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-container">
//         <div className="footer-about">
//           <h3>Mufflix Bakery</h3>
//           <p>Delicious cakes and pastries made with love. Visit us for fresh treats every day!</p>
//         </div>

//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="#">Detail</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="/login">Sign In</a></li>
//           </ul>
//         </div>

//         <div className="footer-contact">
//           <h4>Contact Us</h4>
//           <p>Email: kayal@mufflixbakery.com</p>
//           <p>Phone: +94 123 456 789</p>
//           <p>Address: 154 Bakery Street, Vaddakkachchi</p>
//         </div>
//       </div>

//       <div className="footer-social">
//         <h4>Follow Us</h4>
//         <div className="social-icons">
//           <a href="#"><img src="src/assets/facebook-logo-blue-circle_705838-12823.jpg" alt="Facebook" /></a>
//           <a href="#"><img src="src/assets/instagram-logo-icon_1273375-1177.jpg" alt="Instagram" /></a>
//           <a href="#"><img src="src/assets/circle-whatsapp-logotype-icon-social-media-app-network-application-popular-editorial-brand-vector-illustration_913857-391.jpg" alt="WhatsApp" /></a>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; 2025 Mufflix Bakery. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


// import React from "react";
// function Footer() {
//   return (
//     <footer className="bg-pink-50 mt-10 border-t border-pink-200">
//       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="text-xl font-bold text-pink-700">Mufflix Bakery</h3>
//           <p className="text-pink-500 mt-2">
//             Delicious cakes and pastries made with love. Visit us for fresh treats every day!
//           </p>
//         </div>
//         <div>
//           <h4 className="font-semibold text-pink-700">Quick Links</h4>
//           <ul className="mt-2 space-y-1 text-pink-500">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/detail">Detail</Link></li>
//             <li><Link to="/chat">Contact</Link></li>
//             <li><Link to="/login">Sign In</Link></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold text-pink-700">Contact Us</h4>
//           <p className="text-pink-500">Email: kayal@mufflixbakery.com</p>
//           <p className="text-pink-500">Phone: +94 123 456 789</p>
//           <p className="text-pink-500">Address: 154 Bakery Street, Vaddakkachchi</p>
//         </div>
//       </div>
//       <div className="bg-pink-100 py-4 text-center text-pink-600 font-medium">
//         &copy; 2025 Mufflix Bakery. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

//my//

// //important////
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-yellow-50 text-yellow-800 mt-10">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div>
//           <h3 className="text-3xl font-bold mb-4">🍰 Mufflix Bakery</h3>
//           <p className="text-yellow-700">
//             Delicious cakes and pastries made with love. Visit us for fresh treats every day!
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
//             <li><Link to="/detail" className="hover:text-yellow-500 transition">Detail</Link></li>
//             <li><Link to="/chat" className="hover:text-yellow-500 transition">Contact</Link></li>
//             <li><Link to="/login" className="hover:text-yellow-500 transition">Sign In</Link></li>
//           </ul>
//         </div>

//         {/* Contact & Social */}
//         <div>
//           <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
//           <p>Email: kayal@mufflixbakery.com</p>
//           <p>Phone: +94 123 456 789</p>
//           <p>Address: 154 Bakery Street, Vaddakkachchi</p>

//           <div className="flex space-x-4 mt-4">
//             <a href="#" target="_blank" rel="noreferrer">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
//                 alt="Facebook"
//                 className="h-8 w-8 hover:opacity-80 transition"
//               />
//             </a>
//             <a href="#" target="_blank" rel="noreferrer">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
//                 alt="Instagram"
//                 className="h-8 w-8 hover:opacity-80 transition"
//               />
//             </a>
//             <a href="#" target="_blank" rel="noreferrer">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//                 alt="WhatsApp"
//                 className="h-8 w-8 hover:opacity-80 transition"
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-yellow-100 text-center py-4 mt-6">
//         <p className="text-yellow-700 text-sm">&copy; 2025 Mufflix Bakery. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-yellow-100 to-yellow-200 text-yellow-900 mt-10 shadow-inner animate-fadeIn">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

//         {/* About Section */}
//         <div className="p-4 rounded-xl bg-white/40 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//           <h3 className="text-3xl font-extrabold mb-4 flex items-center gap-2">
//             🍰 Mufflix Bakery
//           </h3>
//           <p className="text-yellow-800 leading-relaxed">
//             Delicious cakes and pastries made with love.  
//             Visit us for fresh treats every day!
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="p-4 rounded-xl bg-white/40 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//           <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-3">
//             {[
//               { to: "/", label: "Home" },
//               { to: "/detail", label: "Detail" },
//               { to: "/chat", label: "Contact" },
//               { to: "/login", label: "Sign In" },
//             ].map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={item.to}
//                   className="relative inline-block pb-1 hover:text-yellow-600 transition font-medium
//                   after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-600
//                   after:transition-all after:duration-300 hover:after:w-full"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact & Social */}
//         <div className="p-4 rounded-xl bg-white/40 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//           <h4 className="text-2xl font-bold mb-4">Contact Us</h4>

//           <p className="mb-1">Email: kayal@mufflixbakery.com</p>
//           <p className="mb-1">Phone: +94 123 456 789</p>
//           <p className="mb-3">Address: 154 Bakery Street, Vaddakkachchi</p>

//           {/* Social Icons */}
//           <div className="flex space-x-5 mt-4">
//             {[
//               {
//                 src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
//                 alt: "Facebook",
//               },
//               {
//                 src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
//                 alt: "Instagram",
//               },
//               {
//                 src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
//                 alt: "WhatsApp",
//               },
//             ].map((icon, i) => (
//               <a key={i} href="#" target="_blank" rel="noreferrer">
//                 <img
//                   src={icon.src}
//                   alt={icon.alt}
//                   className="h-9 w-9 transform transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:opacity-90"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-yellow-300/40 text-center py-4 mt-6 backdrop-blur-sm shadow-inner">
//         <p className="text-yellow-800 text-sm tracking-wide">
//           © 2025 Mufflix Bakery. All Rights Reserved.
//         </p>
//       </div>

//       {/* Fade Animation */}
//       <style>
//         {`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-in-out;
//         }
//       `}
//       </style>
//     </footer>
//   );
// }




// import React from "react";
// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-pink-600 text-white mt-20 pt-14 pb-6 rounded-t-3xl shadow-2xl">
      
//       {/* Main Footer Grid */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
//         {/* 1. Brand */}
//         <div>
//           <h2 className="text-3xl font-extrabold tracking-wide mb-3">🍰 SweetBite</h2>
//           <p className="text-white/90">
//             Freshly baked cakes, pastries, and desserts made with love.  
//             Bringing sweetness to your special moments! 💖
//           </p>
//         </div>

//         {/* 2. Quick Links */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-white/90">
//             <li className="hover:text-white cursor-pointer">Home</li>
//             <li className="hover:text-white cursor-pointer">All Products</li>
//             <li className="hover:text-white cursor-pointer">Categories</li>
//             <li className="hover:text-white cursor-pointer">Contact Us</li>
//           </ul>
//         </div>

//         {/* 3. Support */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Support</h3>
//           <ul className="space-y-2 text-white/90">
//             <li className="hover:text-white cursor-pointer">FAQs</li>
//             <li className="hover:text-white cursor-pointer">Order Tracking</li>
//             <li className="hover:text-white cursor-pointer">Privacy Policy</li>
//             <li className="hover:text-white cursor-pointer">Refund Policy</li>
//           </ul>
//         </div>

//         {/* 4. Contact */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Contact</h3>

//           <p className="flex items-center gap-2 mb-2">
//             <MapPin size={18} /> Jaffna, Sri Lanka
//           </p>

//           <p className="flex items-center gap-2 mb-2">
//             <Phone size={18} /> +94 77 123 4567
//           </p>

//           <p className="flex items-center gap-2 mb-4">
//             <Mail size={18} /> support@sweetbite.com
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">
//             <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer">
//               <Facebook size={20} />
//             </div>
//             <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer">
//               <Instagram size={20} />
//             </div>
//             <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer">
//               <Twitter size={20} />
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Line */}
//       <div className="text-center mt-10 border-t border-white/30 pt-4 text-white/90">
//         © {new Date().getFullYear()} SweetBite. All Rights Reserved.
//       </div>

//     </footer>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white mt-10" style={{ backgroundColor: "#596E65" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4">🍰 Mufflix Bakery</h3>
          <p className="text-gray-200">
            Delicious cakes and pastries made with love. Visit us for fresh treats every day!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-400 transition">Home</Link></li>
            <li><Link to="/detail" className="hover:text-gray-400 transition">Detail</Link></li>
            <li><Link to="/chat" className="hover:text-gray-400 transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-gray-400 transition">Sign In</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
          <p>Email: kayal@mufflixbakery.com</p>
          <p>Phone: +94 123 456 789</p>
          <p>Address: 154 Bakery Street, Vaddakkachchi</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                alt="Facebook"
                className="h-8 w-8 hover:opacity-80 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
                className="h-8 w-8 hover:opacity-80 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-8 w-8 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 mt-6 text-gray-200" style={{ borderTop: "1px solid #4e5d55" }}>
        <p className="text-sm">&copy; 2025 Mufflix Bakery. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
