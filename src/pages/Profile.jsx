

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiCamera, FiEdit3, FiCheck, FiX, FiLogOut } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
  const [previewImage, setPreviewImage] = useState(null);
  
  // ✅ CONFIGURATION
  const API_URL = "https://finalproject-backend-7rqa.onrender.com"; 
  const token = localStorage.getItem("token");

  const colors = {
    bg: "#FDFCF8",
    primary: "#E76F51",
    secondary: "#264653",
    glass: "rgba(255, 255, 255, 0.7)",
    textMain: "#2A2A2A",
    textLight: "#858585",
  };

  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API_URL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // ✅ Debugging: Check console to see what database returns
        console.log("Profile Data from DB:", res.data); 

        setUser(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          avatar: null,
        });
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      const file = files[0];
      setFormData({ ...formData, avatar: file });
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      if (formData.avatar) data.append("avatar", formData.avatar);

      const res = await axios.put(`${API_URL}/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setUser(res.data.user); 
      setIsEditing(false);
      setPreviewImage(null);
    } catch (err) {
      console.error("❌ Error updating:", err);
    }
  };

  // ✅ THE FIX: Smart Image Logic
  const getProfileImage = () => {
    // 1. If currently uploading, show preview
    if (previewImage) return previewImage;

    // 2. If no user or no avatar, show placeholder
    if (!user || !user.avatar) return "https://via.placeholder.com/150";

    // 3. If it is a Cloudinary URL (starts with http or https), use it directly
    if (user.avatar.startsWith("http")) {
      return user.avatar;
    }

    // 4. (Optional) If you still have old local images in DB, add localhost
    // Only needed if you have mixed data. 
    return `${API_URL}/${user.avatar}`;
  };

  if (!user) return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colors.bg }}>
      Loading...
    </div>
  );

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap');
        .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; z-index: 0; }
        .custom-input {
          width: 100%; padding: 15px 15px 15px 45px; background: #FFF; border: 1px solid #E0E0E0;
          border-radius: 15px; font-size: 1rem; outline: none; color: ${colors.textMain};
        }
        .icon-pos { position: absolute; top: 50%; transform: translateY(-50%); left: 15px; color: #A0A0A0; font-size: 1.2rem; }
      `}</style>

      <div className="blob" style={{ width: "500px", height: "500px", backgroundColor: "#F4A261", top: "-10%", right: "-10%" }}></div>
      <div className="blob" style={{ width: "400px", height: "400px", backgroundColor: "#E76F51", bottom: "-10%", left: "-10%" }}></div>

      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "120px 20px 60px 20px", position: "relative", zIndex: 1 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            width: "100%", maxWidth: "500px", 
            background: colors.glass, 
            backdropFilter: "blur(20px)", 
            borderRadius: "40px", 
            padding: "50px 40px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.5)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
            <div style={{ position: "relative" }}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                style={{ 
                  width: "140px", height: "140px", borderRadius: "50%", 
                  border: `4px solid ${colors.primary}`, padding: "4px",
                  background: "white", overflow: "hidden", position: "relative"
                }}
              >
                {/* ✅ IMAGE TAG USING THE SMART FUNCTION */}
                <img
                  src={getProfileImage()}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                />
                
                {isEditing && (
                  <label style={{ 
                    position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", 
                    display: "flex", alignItems: "center", justifyContent: "center", 
                    cursor: "pointer", borderRadius: "50%" 
                  }}>
                    <FiCamera color="white" size={30} />
                    <input type="file" name="avatar" onChange={handleChange} style={{ display: "none" }} />
                  </label>
                )}
              </motion.div>
            </div>

            {!isEditing && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", margin: 0, color: colors.textMain }}>{user.name}</h2>
                <p style={{ color: colors.textLight, margin: "5px 0 0 0" }}>{user.email}</p>
              </div>
            )}
          </div>

          {/* FORM SECTION */}
          <AnimatePresence mode="wait">
            {!isEditing ? (
              <motion.div
                key="view"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    width: "100%", padding: "18px", borderRadius: "20px",
                    background: colors.primary, color: "white", border: "none",
                    fontSize: "1rem", fontWeight: "bold", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    boxShadow: "0 10px 20px rgba(231, 111, 81, 0.3)"
                  }}
                >
                  <FiEdit3 /> Edit Profile
                </button>
                <button
                  style={{
                    width: "100%", padding: "18px", borderRadius: "20px",
                    background: "white", color: "#EF4444", border: "1px solid #EF4444",
                    fontSize: "1rem", fontWeight: "bold", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"
                  }}
                >
                  <FiLogOut /> Sign Out
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="edit"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleUpdate}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ position: "relative" }}>
                  <FiUser className="icon-pos" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="custom-input" placeholder="Full Name" required />
                </div>

                <div style={{ position: "relative" }}>
                  <FiMail className="icon-pos" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="custom-input" placeholder="Email Address" required />
                </div>

                <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                  <button
                    type="button"
                    onClick={() => { setIsEditing(false); setPreviewImage(null); }}
                    style={{
                      flex: 1, padding: "15px", borderRadius: "18px",
                      background: "#F3F4F6", color: colors.textMain, border: "none",
                      fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px"
                    }}
                  >
                    <FiX size={18} /> Cancel
                  </button>
                  
                  <button
                    type="submit"
                    style={{
                      flex: 1, padding: "15px", borderRadius: "18px",
                      background: colors.secondary, color: "white", border: "none",
                      fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                      boxShadow: "0 10px 20px rgba(38, 70, 83, 0.2)"
                    }}
                  >
                    <FiCheck size={18} /> Save
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;