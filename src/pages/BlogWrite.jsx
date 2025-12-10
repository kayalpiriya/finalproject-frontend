// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function BlogWrite() {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:5000/api/blogs",
//         { title, summary, content, image },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // make sure admin token is sent
//           },
//         }
//       );
//       alert("Blog created successfully!");
//       // Redirect to Admin Dashboard Blogs tab
//       navigate("/admin"); // or use a query param if you handle active tab
//     } catch (error) {
//       console.error(error);
//       alert("Error creating blog");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br><br></br><br></br>
//       <div className="max-w-3xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6">Write New Blog</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border px-3 py-2 rounded-md"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Summary"
//             value={summary}
//             onChange={(e) => setSummary(e.target.value)}
//             className="w-full border px-3 py-2 rounded-md"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full border px-3 py-2 rounded-md"
//           />
//           <textarea
//             placeholder="Content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full border px-3 py-2 rounded-md h-48"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
//           >
//             Publish
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { FiImage, FiType, FiAlignLeft, FiPenTool, FiArrowLeft } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function BlogWrite() {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post(
//         "http://localhost:5000/api/blogs",
//         { title, summary, content, image },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       // Simulate a small delay for better UX feeling
//       setTimeout(() => {
//         alert("✨ Blog published successfully!");
//         navigate("/admin");
//       }, 500);
//     } catch (error) {
//       console.error(error);
//       alert("Error creating blog. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FFF8EC] flex flex-col font-sans text-[#6A4E3B]">
//       <Navbar />
// <br></br><br></br><br></br>
//       {/* Main Content Wrapper */}
//       <main className="flex-grow flex items-center justify-center py-28 px-4 sm:px-6">
        
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-4xl"
//         >
//           {/* Header Section */}
//           <div className="mb-8 flex items-center justify-between">
//             <div>
//               <h1 className="text-4xl font-serif font-bold text-[#6A4E3B]" style={{ fontFamily: "'Playfair Display', serif" }}>
//                 Compose Story
//               </h1>
//               <p className="text-[#8C7B6F] mt-2">Share your baking secrets with the world.</p>
//             </div>
//             <button 
//               onClick={() => navigate("/admin")}
//               className="hidden md:flex items-center gap-2 text-[#D6A85B] font-semibold hover:text-[#6A4E3B] transition-colors"
//             >
//               <FiArrowLeft /> Back to Dashboard
//             </button>
//           </div>

//           {/* Form Card */}
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E8C7BE]/30">
//             <div className="p-8 md:p-10">
//               <form onSubmit={handleSubmit} className="space-y-8">
                
//                 {/* Title Input */}
//                 <div className="relative group">
//                   <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
//                     Article Title
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FiType className="text-gray-400 group-focus-within:text-[#D6A85B]" />
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="e.g. The Secret to Fluffy Croissants"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all text-lg font-medium placeholder-gray-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Input */}
//                 <div className="relative group">
//                   <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
//                     Short Summary
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FiAlignLeft className="text-gray-400 group-focus-within:text-[#D6A85B]" />
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="A brief hook for your readers..."
//                       value={summary}
//                       onChange={(e) => setSummary(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all placeholder-gray-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Image URL & Preview */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="relative group">
//                     <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
//                       Cover Image URL
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiImage className="text-gray-400 group-focus-within:text-[#D6A85B]" />
//                       </div>
//                       <input
//                         type="text"
//                         placeholder="https://..."
//                         value={image}
//                         onChange={(e) => setImage(e.target.value)}
//                         className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all placeholder-gray-400"
//                       />
//                     </div>
//                     <p className="text-xs text-gray-400 mt-2">Paste a direct link to an image.</p>
//                   </div>

//                   {/* Live Image Preview */}
//                   <div className="h-32 md:h-full rounded-xl bg-[#F9F9F9] border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative">
//                     {image ? (
//                       <img 
//                         src={image} 
//                         alt="Preview" 
//                         className="w-full h-full object-cover"
//                         onError={(e) => {e.target.style.display='none'}} 
//                       />
//                     ) : (
//                       <span className="text-gray-400 text-sm flex items-center gap-2">
//                         <FiImage /> Image Preview
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Content Textarea */}
//                 <div className="relative group">
//                   <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
//                     Main Content
//                   </label>
//                   <div className="relative">
//                     <div className="absolute top-4 left-3 pointer-events-none">
//                       <FiPenTool className="text-gray-400 group-focus-within:text-[#D6A85B]" />
//                     </div>
//                     <textarea
//                       placeholder="Start writing your delicious story here..."
//                       value={content}
//                       onChange={(e) => setContent(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all h-64 resize-y placeholder-gray-400 leading-relaxed"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-end pt-4">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     type="submit"
//                     disabled={loading}
//                     className={`bg-[#6A4E3B] text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide shadow-lg hover:bg-[#563e2d] hover:shadow-xl transition-all flex items-center justify-center gap-2 w-full md:w-auto ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//                   >
//                     {loading ? "Publishing..." : "Publish Article"}
//                   </motion.button>
//                 </div>

//               </form>
//             </div>
            
//             {/* Decorative Bottom Bar */}
//             <div className="h-2 w-full bg-gradient-to-r from-[#6A4E3B] via-[#D6A85B] to-[#6A4E3B]"></div>
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiImage, FiType, FiAlignLeft, FiPenTool, FiArrowLeft, FiEye, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  
  // --- IMAGE FIX STATES ---
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- THEME COLORS ---
  const colors = {
    accent: "#E76F51",            // Warm Terracotta
    accentSoft: "rgba(231, 111, 81, 0.1)", 
    textDark: "#264653",          
    textLight: "#78716C",         
    bgWhite: "#FFFFFF",
  };

  // --- HANDLE IMAGE INPUT ---
  const handleImageChange = (e) => {
    setImage(e.target.value);
    setImageError(false); // Reset error whenever user types a new link
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://finalproject-backend-7rqa.onrender.com/api/blogs",
        { title, summary, content, image },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTimeout(() => {
        alert("✨ Blog published successfully!");
        navigate("/admin");
      }, 800);
    } catch (error) {
      console.error(error);
      alert("Error creating blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div style={{ backgroundColor: colors.bgWhite, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: colors.textDark, position: "relative", overflowX: "hidden" }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        
        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob { animation: floatBlob 20s infinite ease-in-out; }

        .modern-input-group { position: relative; transition: all 0.3s ease; }
        .modern-input-group:focus-within { transform: translateX(5px); }
        
        .custom-input {
          width: 100%;
          padding: 18px 20px 18px 50px;
          background-color: #FAFAF9; 
          border: 2px solid transparent;
          border-radius: 20px;
          font-size: 1rem;
          color: #264653;
          transition: all 0.3s ease;
          outline: none;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }
        .custom-input:focus {
          background-color: #FFFFFF;
          border-color: ${colors.accent};
          box-shadow: 0 10px 25px ${colors.accentSoft};
        }
        .input-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 20px;
          font-size: 1.2rem;
          color: #A8A29E;
          transition: color 0.3s ease;
        }
        .custom-input:focus + .input-icon,
        .modern-input-group:focus-within .input-icon {
          color: ${colors.accent};
        }
        
        .animated-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: ${colors.textLight};
          margin-bottom: 8px;
          margin-left: 10px;
          transition: color 0.3s ease;
        }
        .modern-input-group:focus-within .animated-label { color: ${colors.accent}; }
      `}</style>

      <Navbar />

      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div className="animate-blob" style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px", backgroundColor: colors.accent, opacity: "0.06", filter: "blur(90px)", borderRadius: "50%" }}></div>
        <div className="animate-blob" style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "500px", height: "500px", backgroundColor: "#F4A261", opacity: "0.08", filter: "blur(90px)", borderRadius: "50%", animationDelay: "5s" }}></div>
      </div>

      <div style={{ position: "relative", zIndex: 1, paddingTop: "120px", paddingBottom: "80px", paddingLeft: "20px", paddingRight: "20px", maxWidth: "1300px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px" }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: 50 }} transition={{ delay: 0.5, duration: 0.5 }} style={{ height: "3px", backgroundColor: colors.accent, borderRadius: "2px" }}></motion.div>
              <span style={{ color: colors.accent, fontWeight: "800", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "2px" }}>Content Creator</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", margin: 0, lineHeight: "1" }}>Write a Story</h1>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} whileHover={{ x: -5, color: colors.accent }} onClick={() => navigate("/admin")}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: "transparent", border: "none", fontSize: "1rem", fontWeight: "bold", color: colors.textLight, cursor: "pointer", transition: "color 0.3s" }}
          >
            <FiArrowLeft size={20} /> Dashboard
          </motion.button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "60px" }}>
          
          {/* LEFT: EDITOR FORM */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
              
              <motion.div variants={itemVariants} className="modern-input-group">
                <label className="animated-label">Headline</label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="An Engaging Title..." value={title} onChange={(e) => setTitle(e.target.value)} className="custom-input" style={{ fontSize: "1.3rem", fontWeight: "bold" }} required />
                  <FiType className="input-icon" />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="modern-input-group">
                <label className="animated-label">Subtitle / Hook</label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="A short, catchy summary..." value={summary} onChange={(e) => setSummary(e.target.value)} className="custom-input" required />
                  <FiAlignLeft className="input-icon" />
                </div>
              </motion.div>

              {/* --- IMAGE INPUT --- */}
              <motion.div variants={itemVariants} className="modern-input-group">
                <label className="animated-label">Cover Image Link</label>
                <div style={{ position: "relative" }}>
                  <input 
                    type="text" 
                    placeholder="https://example.com/image.jpg" 
                    value={image} 
                    onChange={handleImageChange} // Updated Handler
                    className="custom-input" 
                  />
                  <FiImage className="input-icon" />
                </div>
                <p style={{fontSize: "0.8rem", color: "#A8A29E", marginTop: "8px", marginLeft: "10px"}}>
                   Paste a direct link to a JPG or PNG file.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="modern-input-group">
                <label className="animated-label">Story Content</label>
                <div style={{ position: "relative" }}>
                  <textarea placeholder="Start typing your delicious story here..." value={content} onChange={(e) => setContent(e.target.value)} className="custom-input" style={{ minHeight: "400px", resize: "vertical", lineHeight: "1.8", paddingTop: "20px", borderRadius: "25px" }} required />
                  <FiPenTool className="input-icon" style={{ top: "30px", transform: "none" }} />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: `0 15px 35px ${colors.accentSoft}` }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading}
                  style={{ width: "100%", backgroundColor: colors.accent, color: "white", padding: "22px", borderRadius: "25px", fontSize: "1.2rem", fontWeight: "bold", border: "none", cursor: loading ? "not-allowed" : "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", boxShadow: `0 10px 20px ${colors.accentSoft}` }}
                >
                  {loading ? "Publishing..." : <>Publish Story <FiCheckCircle size={22} /></>}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* RIGHT: LIVE PREVIEW CARD */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "sticky", top: "120px" }}>
              
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", color: colors.textLight }}>
                  <div style={{ padding: "8px", backgroundColor: "#F5F5F4", borderRadius: "50%" }}><FiEye size={18} color={colors.accent} /></div>
                  <span style={{ textTransform: "uppercase", fontSize: "0.8rem", fontWeight: "800", letterSpacing: "1px" }}>Live Preview</span>
                </div>

                <div style={{ backgroundColor: "white", borderRadius: "30px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.03)" }}>
                  
                  {/* --- IMAGE PREVIEW SECTION --- */}
                  <div style={{ width: "100%", height: "220px", backgroundColor: "#F5F5F4", position: "relative", overflow: "hidden", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    
                    {/* Logic: If we have an image AND no error, show image. Otherwise show placeholder or error text */}
                    {image && !imageError ? (
                      <motion.img 
                        key={image} // Force remount if URL changes
                        initial={{ scale: 1.1 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.5 }}
                        src={image} 
                        alt="Preview" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        onError={() => setImageError(true)} 
                      />
                    ) : (
                      <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#D6D3D1", padding: "20px", textAlign: "center" }}>
                        {imageError ? (
                            <>
                                <FiAlertCircle size={40} style={{ marginBottom: "10px", color: "#EF4444" }} />
                                <span style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#EF4444" }}>Invalid Image Link</span>
                                <span style={{ fontSize: "0.75rem" }}>Please ensure URL ends in .jpg or .png</span>
                            </>
                        ) : (
                            <>
                                <FiImage size={40} style={{ marginBottom: "10px" }} />
                                <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>Image Preview</span>
                            </>
                        )}
                      </div>
                    )}
                    
                    {!imageError && (
                        <div style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(4px)", padding: "6px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "bold", color: colors.accent, textTransform: "uppercase", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                        Blog
                        </div>
                    )}
                  </div>

                  <div style={{ padding: "30px" }}>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                      <span style={{ fontSize: "0.8rem", color: colors.textLight }}>{new Date().toLocaleDateString()}</span>
                      <span style={{ fontSize: "0.8rem", color: colors.textLight }}>•</span>
                      <span style={{ fontSize: "0.8rem", color: colors.textLight }}>5 min read</span>
                    </div>
                    
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", margin: "0 0 15px 0", lineHeight: "1.2", color: title ? colors.textDark : "#E7E5E4", transition: "color 0.3s" }}>
                      {title || "Title Goes Here"}
                    </h3>
                    
                    <p style={{ fontSize: "1rem", color: summary ? "#57534E" : "#E7E5E4", lineHeight: "1.6", fontStyle: "italic", marginBottom: "25px", transition: "color 0.3s" }}>
                      {summary || "Your summary hook will appear here..."}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", opacity: 0.5 }}>
                      <div style={{ height: "6px", width: "100%", backgroundColor: content ? "#D6D3D1" : "#F5F5F4", borderRadius: "3px" }}></div>
                      <div style={{ height: "6px", width: "90%", backgroundColor: content ? "#D6D3D1" : "#F5F5F4", borderRadius: "3px" }}></div>
                      <div style={{ height: "6px", width: "95%", backgroundColor: content ? "#D6D3D1" : "#F5F5F4", borderRadius: "3px" }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}