// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function BlogDetail() {
//   const { id } = useParams(); // get blog id from route
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role"); // admin or user

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/blogs/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setBlog(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load blog.");
//         setLoading(false);
//       }
//     };
//     fetchBlog();
//   }, [id, token]);

//   const deleteBlog = async () => {
//     if (!window.confirm("Are you sure you want to delete this blog?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Blog deleted!");
//       navigate("/blogs"); // go back to blogs list
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete blog.");
//     }
//   };

//   if (loading) return <p className="text-center mt-12 text-gray-500">Loading blog...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
//         <p className="text-gray-500 mb-4">{blog.summary}</p>
//         {blog.image && (
//           <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded mb-4" />
//         )}
//         <p className="text-gray-700 mb-6">{blog.content}</p>

//         <div className="flex gap-4">
//           <button
//             className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
//             onClick={() => navigate("/")}
//           >
//             Back to Blogs
//           </button>

//           {role === "admin" && (
//             <>
//               <button
//                 className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
//                 onClick={() => navigate(`/blogs/edit/${id}`)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
//                 onClick={deleteBlog}
//               >
//                 Delete
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiArrowLeft, FiEdit2, FiTrash2, FiCalendar, FiUser, FiClock } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Scroll Progress Animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlog(res.data);
        // Simulate a slight delay for the skeleton animation to show (optional)
        setTimeout(() => setLoading(false), 800);
      } catch (err) {
        console.error(err);
        setError("We couldn't find the story you were looking for.");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, token]);

  const deleteBlog = async () => {
    if (!window.confirm("Are you sure you want to delete this story? This cannot be undone.")) return;
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/blogs");
    } catch (err) {
      alert("Failed to delete blog.");
    }
  };

  // --- THEME CONFIGURATION ---
  const theme = {
    bg: "#FDFCF8",           // Cream/Bone
    textMain: "#2D2424",     // Dark Espresso
    textBody: "#4A403A",     // Soft Brown
    accent: "#D4A373",       // Muted Gold
    accentHover: "#C59260",
    cardBg: "#FFFFFF",
    border: "#EAE0D5",
    danger: "#E63946",
  };

  const s = {
    page: {
      backgroundColor: theme.bg,
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
      color: theme.textMain,
      paddingTop: "100px",
      position: "relative",
    },
    progressBar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "5px",
      background: theme.accent,
      transformOrigin: "0%",
      zIndex: 9999,
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0 24px 100px 24px",
    },
    backBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "transparent",
      border: "none",
      color: theme.accent,
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      marginBottom: "30px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    header: {
      textAlign: "center",
      marginBottom: "50px",
    },
    category: {
      color: theme.accent,
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontSize: "0.85rem",
      fontWeight: "bold",
      marginBottom: "15px",
      display: "block",
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "3.5rem",
      fontWeight: "700",
      lineHeight: "1.1",
      marginBottom: "25px",
      color: theme.textMain,
    },
    metaRow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      color: "#999",
      fontSize: "0.9rem",
      borderTop: `1px solid ${theme.border}`,
      borderBottom: `1px solid ${theme.border}`,
      padding: "15px 0",
      width: "fit-content",
      margin: "0 auto",
    },
    metaItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    imageContainer: {
      width: "100%",
      height: "500px",
      borderRadius: "20px",
      overflow: "hidden",
      marginBottom: "60px",
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
      backgroundColor: "#EAE0D5", // Placeholder color
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    content: {
      fontSize: "1.25rem",
      lineHeight: "1.8",
      color: theme.textBody,
      whiteSpace: "pre-line", // Preserves paragraph breaks from DB
      fontFamily: "'DM Sans', sans-serif",
    },
    dropCap: {
      float: "left",
      fontSize: "5rem",
      lineHeight: "0.8",
      paddingTop: "4px",
      paddingRight: "8px",
      paddingLeft: "3px",
      fontFamily: "'Playfair Display', serif",
      color: theme.accent,
    },
    adminPanel: {
      marginTop: "80px",
      padding: "30px",
      backgroundColor: "#FFFFFF",
      border: `1px solid ${theme.border}`,
      borderRadius: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
    },
    actionBtn: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      borderRadius: "50px",
      border: "none",
      fontSize: "0.9rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    },
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "150px",
      gap: "20px",
    },
  };

  // Skeleton Component for Loading
  const Skeleton = ({ width, height }) => (
    <motion.div 
      animate={{ opacity: [0.5, 1, 0.5] }} 
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ width, height, backgroundColor: "#E0E0E0", borderRadius: "8px" }} 
    />
  );

  if (loading) return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>
        <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
          <Skeleton width="100%" height="500px" />
          <Skeleton width="80%" height="60px" />
          <Skeleton width="100%" height="20px" />
          <Skeleton width="100%" height="20px" />
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div style={{ ...s.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem" }}>Story Not Found</h2>
        <p style={{ color: "#888", margin: "20px 0" }}>{error}</p>
        <button onClick={() => navigate("/blogs")} style={{...s.actionBtn, backgroundColor: theme.textMain, color: "white"}}>Go Back</button>
      </div>
    </div>
  );

  return (
    <>
    <Navbar />
    <div style={s.page}>
      {/* Scroll Progress Bar */}
      <motion.div style={{ ...s.progressBar, scaleX }} />
      
      {/* Fonts & Mobile Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@400;700;900&display=swap');
        
        ::selection { background: ${theme.accent}; color: white; }
        
        @media (max-width: 768px) {
          .blog-title { font-size: 2.5rem !important; }
          .blog-image { height: 300px !important; }
          .meta-row { flex-direction: column; gap: 10px !important; width: 100% !important; }
          .admin-panel { flex-direction: column; gap: 15px; text-align: center; }
        }
      `}</style>

      

      <motion.div 
        style={s.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate("/")}
          style={s.backBtn}
        >
          <FiArrowLeft /> Back to Journal
        </motion.button>

        {/* Header Section */}
        <header style={s.header}>
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={s.category}
          >
            Bakery & Lifestyle
          </motion.span>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={s.title}
            className="blog-title"
          >
            {blog.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={s.metaRow}
            className="meta-row"
          >
            <span style={s.metaItem}><FiCalendar /> {new Date().toLocaleDateString()}</span>
            <span style={s.metaItem}><FiUser /> Admin</span>
            <span style={s.metaItem}><FiClock /> 5 min read</span>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          style={s.imageContainer}
          className="blog-image"
        >
          {blog.image && (
            <motion.img 
              src={blog.image} 
              alt={blog.title} 
              style={s.img} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 10, ease: "linear" }} // Slow subtle zoom
            />
          )}
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p style={s.content}>
            {/* Pseudo Drop Cap Logic: Wrap first letter if needed, or just display content */}
            <span style={s.dropCap}>{blog.content.charAt(0)}</span>
            {blog.content.substring(1)}
          </p>
        </motion.div>

        {/* Admin Actions Panel */}
        {role === "admin" && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={s.adminPanel}
            className="admin-panel"
          >
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", margin: 0 }}>Admin Controls</h4>
              <p style={{ color: "#999", fontSize: "0.85rem", margin: "5px 0 0 0" }}>Manage this post</p>
            </div>
            
            <div style={{ display: "flex", gap: "15px" }}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#eef2ff" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/blogs/edit/${id}`)}
                style={{ ...s.actionBtn, backgroundColor: "white", color: "#4F46E5", border: "1px solid #4F46E5" }}
              >
                <FiEdit2 /> Edit Post
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff1f2" }}
                whileTap={{ scale: 0.95 }}
                onClick={deleteBlog}
                style={{ ...s.actionBtn, backgroundColor: "white", color: theme.danger, border: `1px solid ${theme.danger}` }}
              >
                <FiTrash2 /> Delete
              </motion.button>
            </div>
          </motion.div>
        )}

      </motion.div>
     
    </div>
     <Footer />
     </>);
}