import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogWrite() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/blogs",
        { title, summary, content, image },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // make sure admin token is sent
          },
        }
      );
      alert("Blog created successfully!");
      // Redirect to Admin Dashboard Blogs tab
      navigate("/admin"); // or use a query param if you handle active tab
    } catch (error) {
      console.error(error);
      alert("Error creating blog");
    }
  };

  return (
    <>
      <Navbar />
      <br></br><br></br><br></br><br></br>
      <div className="max-w-3xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Write New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded-md h-48"
            required
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
          >
            Publish
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
