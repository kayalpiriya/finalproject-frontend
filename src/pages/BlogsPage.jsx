// Public Blogs Page
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto mt-12 space-y-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600">{blog.summary}</p>
            {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded mt-2" />}
            <p className="mt-2">{blog.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
