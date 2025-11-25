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


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiImage, FiType, FiAlignLeft, FiPenTool, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5000/api/blogs",
        { title, summary, content, image },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // Simulate a small delay for better UX feeling
      setTimeout(() => {
        alert("✨ Blog published successfully!");
        navigate("/admin");
      }, 500);
    } catch (error) {
      console.error(error);
      alert("Error creating blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC] flex flex-col font-sans text-[#6A4E3B]">
      <Navbar />
<br></br><br></br><br></br>
      {/* Main Content Wrapper */}
      <main className="flex-grow flex items-center justify-center py-28 px-4 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          {/* Header Section */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[#6A4E3B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Compose Story
              </h1>
              <p className="text-[#8C7B6F] mt-2">Share your baking secrets with the world.</p>
            </div>
            <button 
              onClick={() => navigate("/admin")}
              className="hidden md:flex items-center gap-2 text-[#D6A85B] font-semibold hover:text-[#6A4E3B] transition-colors"
            >
              <FiArrowLeft /> Back to Dashboard
            </button>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E8C7BE]/30">
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Title Input */}
                <div className="relative group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
                    Article Title
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiType className="text-gray-400 group-focus-within:text-[#D6A85B]" />
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. The Secret to Fluffy Croissants"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all text-lg font-medium placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Summary Input */}
                <div className="relative group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
                    Short Summary
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiAlignLeft className="text-gray-400 group-focus-within:text-[#D6A85B]" />
                    </div>
                    <input
                      type="text"
                      placeholder="A brief hook for your readers..."
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Image URL & Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
                      Cover Image URL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiImage className="text-gray-400 group-focus-within:text-[#D6A85B]" />
                      </div>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all placeholder-gray-400"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Paste a direct link to an image.</p>
                  </div>

                  {/* Live Image Preview */}
                  <div className="h-32 md:h-full rounded-xl bg-[#F9F9F9] border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative">
                    {image ? (
                      <img 
                        src={image} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                        onError={(e) => {e.target.style.display='none'}} 
                      />
                    ) : (
                      <span className="text-gray-400 text-sm flex items-center gap-2">
                        <FiImage /> Image Preview
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Textarea */}
                <div className="relative group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-[#D6A85B] mb-2">
                    Main Content
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-3 pointer-events-none">
                      <FiPenTool className="text-gray-400 group-focus-within:text-[#D6A85B]" />
                    </div>
                    <textarea
                      placeholder="Start writing your delicious story here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] focus:bg-white transition-all h-64 resize-y placeholder-gray-400 leading-relaxed"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className={`bg-[#6A4E3B] text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide shadow-lg hover:bg-[#563e2d] hover:shadow-xl transition-all flex items-center justify-center gap-2 w-full md:w-auto ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {loading ? "Publishing..." : "Publish Article"}
                  </motion.button>
                </div>

              </form>
            </div>
            
            {/* Decorative Bottom Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#6A4E3B] via-[#D6A85B] to-[#6A4E3B]"></div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}