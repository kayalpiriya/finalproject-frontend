import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId"); // login/signup time store panna userId

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/profile/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <img
            src={user.profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-img"
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
