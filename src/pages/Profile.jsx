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



import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", avatar: null });
  const token = localStorage.getItem("token");

  // Fetch profile on load
  useEffect(() => {
    if (!token) {
      console.log("No token found, redirecting to login...");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setFormData({ name: res.data.name, email: res.data.email, avatar: null });
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, [token]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle update submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      if (formData.avatar) data.append("avatar", formData.avatar);

      const res = await axios.put("http://localhost:5000/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setUser(res.data.user); // update profile state
      setIsEditing(false);
    } catch (err) {
      console.error("❌ Error updating profile:", err);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <img
            src={user.avatar || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-img"
          />
          {!isEditing ? (
            <>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            </>
          ) : (
            <form className="edit-form" onSubmit={handleUpdate}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input type="file" name="avatar" onChange={handleChange} />
              <div className="edit-buttons">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
