import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogDetail() {
  const { id } = useParams(); // get blog id from route
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // admin or user

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlog(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load blog.");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, token]);

  const deleteBlog = async () => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Blog deleted!");
      navigate("/blogs"); // go back to blogs list
    } catch (err) {
      console.error(err);
      alert("Failed to delete blog.");
    }
  };

  if (loading) return <p className="text-center mt-12 text-gray-500">Loading blog...</p>;
  if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-500 mb-4">{blog.summary}</p>
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded mb-4" />
        )}
        <p className="text-gray-700 mb-6">{blog.content}</p>

        <div className="flex gap-4">
          <button
            className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
            onClick={() => navigate("/")}
          >
            Back to Blogs
          </button>

          {role === "admin" && (
            <>
              <button
                className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
                onClick={() => navigate(`/blogs/edit/${id}`)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                onClick={deleteBlog}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
