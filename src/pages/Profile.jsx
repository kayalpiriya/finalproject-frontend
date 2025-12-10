// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Profile.css";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const userId = localStorage.getItem("token"); // login/signup time store panna userId

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/profile/${userId}`);
//         setUser(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };
//     fetchProfile();
//   }, [userId]);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="profile-container">
//         <div className="profile-card">
//           <img
//             src={user.profilePic || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="profile-img"
//           />
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//           <button className="edit-btn">Edit Profile</button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Profile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Profile.css";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) {
//       console.log("No token found, redirecting to login...");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };
//     fetchProfile();
//   }, [token]);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="profile-container">
//         <div className="profile-card">
//           <img
//             src={user.avatar || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="profile-img"
//           />
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//           <button className="edit-btn">Edit Profile</button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Profile;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
//   const token = localStorage.getItem("token");

//   // Fetch profile on load
//   useEffect(() => {
//     if (!token) {
//       console.log("No token found, redirecting to login...");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);
//         setFormData({ name: res.data.name, email: res.data.email, avatar: null });
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };
//     fetchProfile();
//   }, [token]);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "avatar") {
//       setFormData({ ...formData, avatar: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Handle update submit
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       if (formData.avatar) data.append("avatar", formData.avatar);

//       const res = await axios.put("http://localhost:5000/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setUser(res.data.user); // update profile state
//       setIsEditing(false);
//     } catch (err) {
//       console.error("❌ Error updating profile:", err);
//     }
//   };

//   if (!user) return <div>Loading...</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="profile-container">
//         <div className="profile-card">
//           <img
//             src={user.avatar || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="profile-img"
//           />
//           {!isEditing ? (
//             <>
//               <h2>{user.name}</h2>
//               <p>{user.email}</p>
//               <button className="edit-btn" onClick={() => setIsEditing(true)}>
//                 Edit Profile
//               </button>
//             </>
//           ) : (
//             <form className="edit-form" onSubmit={handleUpdate}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 required
//               />
//               <input type="file" name="avatar" onChange={handleChange} />
//               <div className="edit-buttons">
//                 <button type="submit" className="save-btn">
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Profile;


//my//


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) return;
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);
//         setFormData({ name: res.data.name, email: res.data.email, avatar: null });
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };
//     fetchProfile();
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "avatar") setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       if (formData.avatar) data.append("avatar", formData.avatar);

//       const res = await axios.put("http://localhost:5000/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setUser(res.data.user);
//       setIsEditing(false);
//     } catch (err) {
//       console.error("❌ Error updating profile:", err);
//     }
//   };

//   if (!user) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <br></br><br></br><br></br><br></br>
//       <main className="flex-1 flex justify-center items-start" style={{marginTop:"100px",marginBottom:"105px"}}>
//         <div className="bg-gradient-to-r from-pink-200 via-yellow-100 to-yellow-50 shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col items-center relative">
//           <img
//             src={user.avatar || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-yellow-400"
//           />

//           {!isEditing ? (
//             <>
//               <h2 className="text-2xl font-bold mb-1 text-yellow-700">{user.name}</h2>
//               <p className="text-gray-600 mb-4">{user.email}</p>
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="bg-yellow-500 text-white px-6 py-2 rounded-xl hover:bg-yellow-600 transition"
//               >
//                 Edit Profile
//               </button>
//             </>
//           ) : (
//             <form className="w-full flex flex-col gap-4 mt-2" onSubmit={handleUpdate}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//                 className="p-3 border rounded-lg focus:outline-yellow-400 w-full shadow-sm"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 required
//                 className="p-3 border rounded-lg focus:outline-yellow-400 w-full shadow-sm"
//               />
//               <input type="file" name="avatar" onChange={handleChange} className="w-full" />
//               <div className="flex justify-between gap-4 mt-2">
//                 <button
//                   type="submit"
//                   className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition flex-1"
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-400 transition flex-1"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Profile;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
//   const token = localStorage.getItem("token");

//   // useEffect(() => {
//   //   if (!token) return;
//   //   const fetchProfile = async () => {
//   //     try {
//   //       const res = await axios.get("http://localhost:5000/profile", {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       });
//   //       setUser(res.data);
//   //       setFormData({ name: res.data.name, email: res.data.email, avatar: null });
//   //     } catch (err) {
//   //       console.error("❌ Error fetching profile:", err);
//   //     }
//   //   };
//   //   fetchProfile();
//   // }, [token]);

//   useEffect(() => {
//     if (!token) return;
  
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
  
//         setUser(res.data);
//         setFormData({
//           name: res.data.name,
//           email: res.data.email,
//           avatar: null
//         });
  
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };
  
//     fetchProfile();
//   }, [token]);
  

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "avatar") setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       if (formData.avatar) data.append("avatar", formData.avatar);

//       const res = await axios.put("http://localhost:5000/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setUser(res.data.user);
//       setIsEditing(false);
//     } catch (err) {
//       console.error("❌ Error updating profile:", err);
//     }
//   };

//   if (!user) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <br></br><br></br><br></br><br></br>
//       <main className="flex-1 flex justify-center items-start" style={{marginTop:"100px",marginBottom:"105px"}}>
//         {/* BAKERY COLORS ONLY */}
//         <div className="bg-gradient-to-br from-bakery-bg-light to-bakery-bg-warm shadow-xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center relative border border-bakery-accent/30">
          
//           <img
//             src={user.avatar || "https://via.placeholder.com/150"}
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover mb-4 border-6 border-bakery-accent shadow-2xl"
//           />

//           {!isEditing ? (
//             <>
//               <h2 className="text-3xl font-bold mb-2 text-bakery-dark">{user.name}</h2>
//               <p className="text-lg text-bakery-medium mb-6 bg-white/60 px-4 py-2 rounded-xl">{user.email}</p>
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="bg-bakery-accent text-bakery-dark px-8 py-3 rounded-xl font-bold hover:bg-amber-500 transition-all shadow-lg hover:shadow-xl"
//               >
//                 Edit Profile
//               </button>
//             </>
//           ) : (
//             <form className="w-full flex flex-col gap-4 mt-2" onSubmit={handleUpdate}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//                 className="p-4 border-2 border-bakery-bg-light rounded-xl focus:ring-2 focus:ring-bakery-accent focus:border-bakery-accent w-full shadow-sm"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 required
//                 className="p-4 border-2 border-bakery-bg-light rounded-xl focus:ring-2 focus:ring-bakery-accent focus:border-bakery-accent w-full shadow-sm"
//               />
//               <input type="file" name="avatar" onChange={handleChange} className="p-3 border-2 border-bakery-bg-light rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-bakery-accent file:text-white hover:file:bg-amber-500 file:transition-all w-full text-sm" />
//               <div className="flex justify-between gap-4">
//                 <button
//                   type="submit"
//                   className="bg-bakery-accent text-bakery-dark px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 transition-all shadow-lg hover:shadow-xl flex-1"
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="bg-white border-2 border-bakery-dark/30 text-bakery-dark px-6 py-3 rounded-xl font-semibold hover:bg-bakery-bg-light hover:border-bakery-accent transition-all shadow-sm hover:shadow-md flex-1"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Profile;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUser(res.data);
//         setFormData({
//           name: res.data.name,
//           email: res.data.email,
//           avatar: null,
//         });
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "avatar") {
//       setFormData({ ...formData, avatar: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       if (formData.avatar) data.append("avatar", formData.avatar);

//       const res = await axios.put("http://localhost:5000/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setUser(res.data.user);
//       setIsEditing(false);
//     } catch (err) {
//       console.error("❌ Error updating:", err);
//     }
//   };

//   if (!user) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <br></br><br></br><br></br><br></br>
//       <main className="flex-1 flex justify-center items-center py-20">

//         <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">

//           <img
//             src={user.avatar}
//             onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-amber-500"
//           />

//           {!isEditing ? (
//             <>
//               <h2 className="text-2xl font-bold text-center">{user.name}</h2>
//               <p className="text-center text-gray-600">{user.email}</p>

//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="mt-6 w-full bg-amber-500 text-black py-3 rounded-xl font-bold"
//               >
//                 Edit Profile
//               </button>
//             </>
//           ) : (
//             <form onSubmit={handleUpdate} className="mt-4 flex flex-col gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg"
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="p-3 border rounded-lg"
//                 required
//               />

//               <input type="file" name="avatar" onChange={handleChange} />

//               <div className="flex gap-4">
//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 text-white py-3 rounded-xl font-bold"
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="w-full bg-gray-300 py-3 rounded-xl font-bold"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}

//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Profile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiUser, FiMail, FiCamera, FiEdit2, FiSave, FiX, FiLogOut } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
  
//   const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
//   const [preview, setPreview] = useState(null); // For showing selected image immediately

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUser(res.data);
//         setFormData({
//           name: res.data.name,
//           email: res.data.email,
//           avatar: null,
//         });
//         setLoading(false);
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "avatar" && files[0]) {
//       const file = files[0];
//       setFormData({ ...formData, avatar: file });
//       setPreview(URL.createObjectURL(file)); // Create a temporary URL for preview
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       if (formData.avatar) data.append("avatar", formData.avatar);

//       const res = await axios.put("http://localhost:5000/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setUser(res.data.user);
//       setIsEditing(false);
//       setSaving(false);
//     } catch (err) {
//       console.error("❌ Error updating:", err);
//       setSaving(false);
//     }
//   };

//   if (loading) return (
//     <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D6A85B]"></div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col min-h-screen bg-[#FFF8EC] font-sans text-[#6A4E3B]">
//       <Navbar />
//       <br></br><br></br><br></br><br></br><br></br>
//       <main className="flex-1 flex flex-col justify-center items-center py-32 px-4">
        
//         {/* Main Card */}
//         <motion.div 
//           layout
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
//           className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-[0_20px_50px_rgba(106,78,59,0.15)] overflow-hidden border border-[#E8C7BE]/40 relative"
//         >
//           {/* Decorative Top Banner */}
//           <div className="h-32 bg-gradient-to-r from-[#6A4E3B] to-[#8C7B6F]"></div>

//           <div className="px-8 pb-10 relative">
            
//             {/* Avatar Section (Overlapping the banner) */}
//             <div className="relative -mt-16 mb-6 flex justify-center">
//                <div className="relative group">
//                   <div className="w-32 h-32 rounded-full p-1.5 bg-white shadow-lg">
//                     <img
//                       src={preview || user?.avatar || "https://via.placeholder.com/150"}
//                       onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
//                       alt="Profile"
//                       className="w-full h-full rounded-full object-cover border-2 border-[#E8C7BE]"
//                     />
//                   </div>
                  
//                   {/* Camera Icon (Only show in Edit Mode) */}
//                   {isEditing && (
//                     <label className="absolute bottom-2 right-2 bg-[#D6A85B] text-white p-2.5 rounded-full cursor-pointer shadow-md hover:bg-[#c49648] transition-all transform hover:scale-110">
//                       <FiCamera size={18} />
//                       <input 
//                         type="file" 
//                         name="avatar" 
//                         accept="image/*" 
//                         onChange={handleChange} 
//                         className="hidden" 
//                       />
//                     </label>
//                   )}
//                </div>
//             </div>

//             {/* Content Switcher */}
//             <AnimatePresence mode="wait">
//               {!isEditing ? (
//                 /* --- VIEW MODE --- */
//                 <motion.div
//                   key="view"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 20 }}
//                   className="text-center space-y-2"
//                 >
//                   <h2 className="text-3xl font-serif font-bold text-[#6A4E3B]" style={{ fontFamily: "'Playfair Display', serif" }}>
//                     {user?.name}
//                   </h2>
//                   <p className="text-[#8C7B6F] font-medium flex items-center justify-center gap-2">
//                     <FiMail className="text-[#D6A85B]" /> {user?.email}
//                   </p>
                  
//                   <div className="py-6">
//                     <span className="inline-block bg-[#FFF8EC] text-[#D6A85B] text-xs font-bold px-4 py-1.5 rounded-full border border-[#D6A85B]/30 uppercase tracking-wider">
//                       Premium Member
//                     </span>
//                   </div>

//                   <div className="pt-4">
//                     <button
//                       onClick={() => setIsEditing(true)}
//                       className="w-full bg-[#6A4E3B] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#6A4E3B]/20 hover:bg-[#563e2d] transition-all flex items-center justify-center gap-2"
//                     >
//                       <FiEdit2 /> Edit Profile
//                     </button>
//                   </div>
//                 </motion.div>
//               ) : (
//                 /* --- EDIT MODE --- */
//                 <motion.form
//                   key="edit"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   onSubmit={handleUpdate}
//                   className="space-y-5"
//                 >
//                   <div className="text-center mb-6">
//                     <h3 className="text-xl font-serif font-bold text-[#6A4E3B]">Update Details</h3>
//                   </div>

//                   {/* Name Input */}
//                   <div className="group">
//                     <label className="block text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-1 ml-1">Full Name</label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiUser className="text-gray-400 group-focus-within:text-[#D6A85B]" />
//                       </div>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] transition-all"
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Email Input */}
//                   <div className="group">
//                     <label className="block text-xs font-bold uppercase tracking-wider text-[#D6A85B] mb-1 ml-1">Email Address</label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiMail className="text-gray-400 group-focus-within:text-[#D6A85B]" />
//                       </div>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full pl-10 pr-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D6A85B] transition-all"
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-3 pt-4">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setIsEditing(false);
//                         setPreview(null); // Reset preview on cancel
//                       }}
//                       className="flex-1 py-3 rounded-xl font-bold border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
//                     >
//                       <FiX /> Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       disabled={saving}
//                       className={`flex-1 py-3 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 ${
//                         saving ? "bg-[#D6A85B]/70 cursor-wait" : "bg-[#D6A85B] hover:bg-[#c49648]"
//                       }`}
//                     >
//                       {saving ? "Saving..." : <><FiSave /> Save Changes</>}
//                     </button>
//                   </div>
//                 </motion.form>
//               )}
//             </AnimatePresence>

//             {/* Logout (Optional extra functionality) */}
//             {!isEditing && (
//               <div className="mt-6 pt-6 border-t border-gray-100 text-center">
//                  <button className="text-sm text-red-400 hover:text-red-600 font-semibold flex items-center justify-center gap-2 mx-auto transition-colors">
//                     <FiLogOut /> Sign Out
//                  </button>
//               </div>
//             )}
            
//           </div>
//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Profile;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiUser, FiMail, FiCamera, FiEdit3, FiCheck, FiX, FiLogOut } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
//   const [previewImage, setPreviewImage] = useState(null);
//   const token = localStorage.getItem("token");

//   // --- THEME CONFIG ---
//   const colors = {
//     bg: "#FDFCF8",
//     primary: "#E76F51", // Terracotta
//     secondary: "#264653", // Deep Teal
//     glass: "rgba(255, 255, 255, 0.7)",
//     textMain: "#2A2A2A",
//     textLight: "#858585",
//   };

//   useEffect(() => {
//     if (!token) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUser(res.data);
//         setFormData({
//           name: res.data.name,
//           email: res.data.email,
//           avatar: null,
//         });
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "avatar") {
//       const file = files[0];
//       setFormData({ ...formData, avatar: file });
//       // Create a local preview URL immediately for better UX
//       setPreviewImage(URL.createObjectURL(file));
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       if (formData.avatar) data.append("avatar", formData.avatar);

//       const res = await axios.put("http://localhost:5000/profile", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setUser(res.data.user);
//       setIsEditing(false);
//       setPreviewImage(null);
//     } catch (err) {
//       console.error("❌ Error updating:", err);
//     }
//   };

//   if (!user) return (
//     <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colors.bg }}>
//       <div className="loader"></div> {/* You can add a spinner here */}
//       Loading...
//     </div>
//   );

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
//       <Navbar />

//       {/* --- INLINE CSS & ANIMATIONS --- */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap');

//         @keyframes float {
//           0% { transform: translate(0, 0) rotate(0deg); }
//           33% { transform: translate(30px, -50px) rotate(10deg); }
//           66% { transform: translate(-20px, 20px) rotate(-5deg); }
//           100% { transform: translate(0, 0) rotate(0deg); }
//         }
//         .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; animation: float 15s infinite ease-in-out; z-index: 0; }
        
//         .custom-input {
//           width: 100%; padding: 15px 15px 15px 45px; background: #FFF; border: 1px solid #E0E0E0;
//           border-radius: 15px; font-size: 1rem; transition: 0.3s; outline: none; color: ${colors.textMain};
//         }
//         .custom-input:focus { border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231, 111, 81, 0.1); }
        
//         .icon-pos { position: absolute; top: 50%; transform: translateY(-50%); left: 15px; color: #A0A0A0; font-size: 1.2rem; }
//       `}</style>

//       {/* --- BACKGROUND BLOBS --- */}
//       <div className="blob" style={{ width: "500px", height: "500px", backgroundColor: "#F4A261", top: "-10%", right: "-10%" }}></div>
//       <div className="blob" style={{ width: "400px", height: "400px", backgroundColor: "#E76F51", bottom: "-10%", left: "-10%", animationDelay: "2s" }}></div>

//       {/* --- MAIN CONTENT --- */}
//       <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "120px 20px 60px 20px", position: "relative", zIndex: 1 }}>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, type: "spring" }}
//           style={{ 
//             width: "100%", maxWidth: "500px", 
//             background: colors.glass, 
//             backdropFilter: "blur(20px)", 
//             borderRadius: "40px", 
//             padding: "50px 40px",
//             boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
//             border: "1px solid rgba(255,255,255,0.5)"
//           }}
//         >
//           {/* --- HEADER / AVATAR --- */}
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
//             <div style={{ position: "relative" }}>
//               <motion.div 
//                 whileHover={{ scale: 1.05 }}
//                 style={{ 
//                   width: "140px", height: "140px", borderRadius: "50%", 
//                   border: `4px solid ${colors.primary}`, padding: "4px",
//                   background: "white", overflow: "hidden", position: "relative"
//                 }}
//               >
//                 <img
//                   src={previewImage || user.avatar || "https://via.placeholder.com/150"}
//                   onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
//                   alt="Profile"
//                   style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
//                 />
                
//                 {/* Camera Overlay when Editing */}
//                 {isEditing && (
//                   <label style={{ 
//                     position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", 
//                     display: "flex", alignItems: "center", justifyContent: "center", 
//                     cursor: "pointer", borderRadius: "50%" 
//                   }}>
//                     <FiCamera color="white" size={30} />
//                     <input type="file" name="avatar" onChange={handleChange} style={{ display: "none" }} />
//                   </label>
//                 )}
//               </motion.div>
              
//               {!isEditing && (
//                 <div style={{ 
//                   position: "absolute", bottom: "5px", right: "5px", 
//                   background: colors.secondary, color: "white", 
//                   borderRadius: "50%", width: "35px", height: "35px", 
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   border: "3px solid white"
//                 }}>
//                   <FiUser size={16} />
//                 </div>
//               )}
//             </div>

//             {!isEditing && (
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", margin: 0, color: colors.textMain }}>{user.name}</h2>
//                 <p style={{ color: colors.textLight, margin: "5px 0 0 0" }}>{user.email}</p>
//                 <span style={{ display: "inline-block", marginTop: "10px", padding: "5px 15px", background: "rgba(231, 111, 81, 0.1)", color: colors.primary, borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold" }}>
//                   Gold Member
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* --- CONTENT SWITCHER --- */}
//           <AnimatePresence mode="wait">
//             {!isEditing ? (
//               // --- VIEW MODE ---
//               <motion.div
//                 key="view"
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                 style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//               >
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   style={{
//                     width: "100%", padding: "18px", borderRadius: "20px",
//                     background: colors.primary, color: "white", border: "none",
//                     fontSize: "1rem", fontWeight: "bold", cursor: "pointer",
//                     display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
//                     boxShadow: "0 10px 20px rgba(231, 111, 81, 0.3)", transition: "0.3s"
//                   }}
//                   onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
//                   onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
//                 >
//                   <FiEdit3 /> Edit Profile
//                 </button>

//                 <button
//                   style={{
//                     width: "100%", padding: "18px", borderRadius: "20px",
//                     background: "white", color: "#EF4444", border: "1px solid #EF4444",
//                     fontSize: "1rem", fontWeight: "bold", cursor: "pointer",
//                     display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
//                     transition: "0.3s"
//                   }}
//                   onMouseEnter={(e) => e.target.style.background = "#FFF5F5"}
//                   onMouseLeave={(e) => e.target.style.background = "white"}
//                 >
//                   <FiLogOut /> Sign Out
//                 </button>
//               </motion.div>
//             ) : (
//               // --- EDIT MODE ---
//               <motion.form
//                 key="edit"
//                 initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
//                 onSubmit={handleUpdate}
//                 style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//               >
//                 <div style={{ position: "relative" }}>
//                   <FiUser className="icon-pos" />
//                   <input type="text" name="name" value={formData.name} onChange={handleChange} className="custom-input" placeholder="Full Name" required />
//                 </div>

//                 <div style={{ position: "relative" }}>
//                   <FiMail className="icon-pos" />
//                   <input type="email" name="email" value={formData.email} onChange={handleChange} className="custom-input" placeholder="Email Address" required />
//                 </div>

//                 <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
//                   <button
//                     type="button"
//                     onClick={() => { setIsEditing(false); setPreviewImage(null); }}
//                     style={{
//                       flex: 1, padding: "15px", borderRadius: "18px",
//                       background: "#F3F4F6", color: colors.textMain, border: "none",
//                       fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px"
//                     }}
//                   >
//                     <FiX size={18} /> Cancel
//                   </button>
                  
//                   <button
//                     type="submit"
//                     style={{
//                       flex: 1, padding: "15px", borderRadius: "18px",
//                       background: colors.secondary, color: "white", border: "none",
//                       fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
//                       boxShadow: "0 10px 20px rgba(38, 70, 83, 0.2)"
//                     }}
//                   >
//                     <FiCheck size={18} /> Save
//                   </button>
//                 </div>
//               </motion.form>
//             )}
//           </AnimatePresence>

//         </motion.div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Profile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiUser, FiMail, FiCamera, FiEdit3, FiCheck, FiX, FiLogOut } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
//   const [previewImage, setPreviewImage] = useState(null);
  
//   // CONFIGURATION
//   const SERVER_URL = "http://localhost:5000"; 
//   const token = localStorage.getItem("token");

//   // --- THEME CONFIG ---
//   const colors = {
//     bg: "#FDFCF8",
//     primary: "#E76F51",
//     secondary: "#264653",
//     glass: "rgba(255, 255, 255, 0.7)",
//     textMain: "#2A2A2A",
//     textLight: "#858585",
//   };

//   useEffect(() => {
//     if (!token) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`${SERVER_URL}/profile`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUser(res.data);
//         setFormData({
//           name: res.data.name,
//           email: res.data.email,
//           avatar: null,
//         });
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "avatar") {
//       const file = files[0];
//       setFormData({ ...formData, avatar: file });
//       setPreviewImage(URL.createObjectURL(file));
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       if (formData.avatar) data.append("avatar", formData.avatar);

//       const res = await axios.put(`${SERVER_URL}/profile`, data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Update the user state with the response from server
//       setUser(res.data.user); 
//       setIsEditing(false);
//       setPreviewImage(null); // Clear local preview so we use the server image
//     } catch (err) {
//       console.error("❌ Error updating:", err);
//     }
//   };

//   // --- HELPER TO GET IMAGE URL ---
//   const getProfileImage = () => {
//     // 1. If user is editing and picked a new file, show that
//     if (previewImage) return previewImage;

//     // 2. If user has an avatar from DB
//     if (user && user.avatar) {
//       // If the avatar path already starts with http, use it as is (e.g. Google auth image)
//       if (user.avatar.startsWith("http")) {
//         return user.avatar;
//       }
//       // Otherwise, prepend the localhost server URL
//       // Adjust logic to handle slash consistency
//       const cleanPath = user.avatar.startsWith("/") ? user.avatar : `/${user.avatar}`;
//       return `${SERVER_URL}${cleanPath}`;
//     }

//     // 3. Fallback placeholder
//     return "https://via.placeholder.com/150";
//   };

//   if (!user) return (
//     <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: colors.bg }}>
//       Loading...
//     </div>
//   );

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
//       <Navbar />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600;700&display=swap');
//         @keyframes float {
//           0% { transform: translate(0, 0) rotate(0deg); }
//           33% { transform: translate(30px, -50px) rotate(10deg); }
//           66% { transform: translate(-20px, 20px) rotate(-5deg); }
//           100% { transform: translate(0, 0) rotate(0deg); }
//         }
//         .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; animation: float 15s infinite ease-in-out; z-index: 0; }
//         .custom-input {
//           width: 100%; padding: 15px 15px 15px 45px; background: #FFF; border: 1px solid #E0E0E0;
//           border-radius: 15px; font-size: 1rem; transition: 0.3s; outline: none; color: ${colors.textMain};
//         }
//         .custom-input:focus { border-color: ${colors.primary}; box-shadow: 0 5px 15px rgba(231, 111, 81, 0.1); }
//         .icon-pos { position: absolute; top: 50%; transform: translateY(-50%); left: 15px; color: #A0A0A0; font-size: 1.2rem; }
//       `}</style>

//       <div className="blob" style={{ width: "500px", height: "500px", backgroundColor: "#F4A261", top: "-10%", right: "-10%" }}></div>
//       <div className="blob" style={{ width: "400px", height: "400px", backgroundColor: "#E76F51", bottom: "-10%", left: "-10%", animationDelay: "2s" }}></div>

//       <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "120px 20px 60px 20px", position: "relative", zIndex: 1 }}>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, type: "spring" }}
//           style={{ 
//             width: "100%", maxWidth: "500px", 
//             background: colors.glass, 
//             backdropFilter: "blur(20px)", 
//             borderRadius: "40px", 
//             padding: "50px 40px",
//             boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
//             border: "1px solid rgba(255,255,255,0.5)"
//           }}
//         >
//           {/* --- HEADER / AVATAR --- */}
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
//             <div style={{ position: "relative" }}>
//               <motion.div 
//                 whileHover={{ scale: 1.05 }}
//                 style={{ 
//                   width: "140px", height: "140px", borderRadius: "50%", 
//                   border: `4px solid ${colors.primary}`, padding: "4px",
//                   background: "white", overflow: "hidden", position: "relative"
//                 }}
//               >
//                 {/* --- UPDATED IMAGE TAG IS HERE --- */}
//                 <img
//                   src={getProfileImage()}
//                   onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
//                   alt="Profile"
//                   style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
//                 />
                
//                 {isEditing && (
//                   <label style={{ 
//                     position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", 
//                     display: "flex", alignItems: "center", justifyContent: "center", 
//                     cursor: "pointer", borderRadius: "50%" 
//                   }}>
//                     <FiCamera color="white" size={30} />
//                     <input type="file" name="avatar" onChange={handleChange} style={{ display: "none" }} />
//                   </label>
//                 )}
//               </motion.div>
              
//               {!isEditing && (
//                 <div style={{ 
//                   position: "absolute", bottom: "5px", right: "5px", 
//                   background: colors.secondary, color: "white", 
//                   borderRadius: "50%", width: "35px", height: "35px", 
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   border: "3px solid white"
//                 }}>
//                   <FiUser size={16} />
//                 </div>
//               )}
//             </div>

//             {!isEditing && (
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", margin: 0, color: colors.textMain }}>{user.name}</h2>
//                 <p style={{ color: colors.textLight, margin: "5px 0 0 0" }}>{user.email}</p>
//               </div>
//             )}
//           </div>

//           <AnimatePresence mode="wait">
//             {!isEditing ? (
//               <motion.div
//                 key="view"
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                 style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//               >
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   style={{
//                     width: "100%", padding: "18px", borderRadius: "20px",
//                     background: colors.primary, color: "white", border: "none",
//                     fontSize: "1rem", fontWeight: "bold", cursor: "pointer",
//                     display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
//                     boxShadow: "0 10px 20px rgba(231, 111, 81, 0.3)", transition: "0.3s"
//                   }}
//                 >
//                   <FiEdit3 /> Edit Profile
//                 </button>

//                 <button
//                   style={{
//                     width: "100%", padding: "18px", borderRadius: "20px",
//                     background: "white", color: "#EF4444", border: "1px solid #EF4444",
//                     fontSize: "1rem", fontWeight: "bold", cursor: "pointer",
//                     display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
//                     transition: "0.3s"
//                   }}
//                 >
//                   <FiLogOut /> Sign Out
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.form
//                 key="edit"
//                 initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
//                 onSubmit={handleUpdate}
//                 style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//               >
//                 <div style={{ position: "relative" }}>
//                   <FiUser className="icon-pos" />
//                   <input type="text" name="name" value={formData.name} onChange={handleChange} className="custom-input" placeholder="Full Name" required />
//                 </div>

//                 <div style={{ position: "relative" }}>
//                   <FiMail className="icon-pos" />
//                   <input type="email" name="email" value={formData.email} onChange={handleChange} className="custom-input" placeholder="Email Address" required />
//                 </div>

//                 <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
//                   <button
//                     type="button"
//                     onClick={() => { setIsEditing(false); setPreviewImage(null); }}
//                     style={{
//                       flex: 1, padding: "15px", borderRadius: "18px",
//                       background: "#F3F4F6", color: colors.textMain, border: "none",
//                       fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px"
//                     }}
//                   >
//                     <FiX size={18} /> Cancel
//                   </button>
                  
//                   <button
//                     type="submit"
//                     style={{
//                       flex: 1, padding: "15px", borderRadius: "18px",
//                       background: colors.secondary, color: "white", border: "none",
//                       fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
//                       boxShadow: "0 10px 20px rgba(38, 70, 83, 0.2)"
//                     }}
//                   >
//                     <FiCheck size={18} /> Save
//                   </button>
//                 </div>
//               </motion.form>
//             )}
//           </AnimatePresence>

//         </motion.div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Profile;

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