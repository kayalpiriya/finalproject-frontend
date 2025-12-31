

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Edit, Trash2, Plus } from "lucide-react";

function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalBlog, setModalBlog] = useState(null); // blog for edit or create
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/api/blogs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load blogs.");
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`https://finalproject-backend-7rqa.onrender.com/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(blogs.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete blog.");
    }
  };

  const saveBlog = async () => {
    try {
      if (modalBlog._id) {
        // Edit
        await axios.put(`https://finalproject-backend-7rqa.onrender.com/api/blogs/${modalBlog._id}`, modalBlog, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(blogs.map((b) => (b._id === modalBlog._id ? modalBlog : b)));
      } else {
        // Create
        const res = await axios.post("https://finalproject-backend-7rqa.onrender.com/api/blogs", modalBlog, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs([...blogs, res.data]);
      }
      setModalBlog(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save blog");
    }
  };

  if (loading) return <p className="text-center mt-12 text-gray-500">Loading blogs...</p>;
  if (error) return <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>;

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Manage Blogs</h2>
        <button
          className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          onClick={() => setModalBlog({ title: "", summary: "", image: "", content: "" })}
        >
          <Plus size={16} /> Add Blog
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
        <table className="min-w-full border-collapse">
          <thead className="bg-yellow-50 sticky top-0 text-gray-800">
            <tr>
              <th className="py-2 px-3 border-b">#</th>
              <th className="py-2 px-3 border-b">Title</th>
              <th className="py-2 px-3 border-b">Summary</th>
              <th className="py-2 px-3 border-b">Image</th>
              <th className="py-2 px-3 border-b">Content</th>
              <th className="py-2 px-3 border-b">Created At</th>
              <th className="py-2 px-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, idx) => (
              <tr
                key={blog._id}
                className={`transition-all duration-300 ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-yellow-50 hover:shadow-lg`}
              >
                <td className="py-2 px-3 border-b">{idx + 1}</td>
                <td className="py-2 px-3 border-b">{blog.title}</td>
                <td className="py-2 px-3 border-b truncate max-w-xs">{blog.summary}</td>
                <td className="py-2 px-3 border-b">
                  {blog.image && <img src={blog.image} alt="blog" className="w-20 h-12 object-cover rounded" />}
                </td>
                <td className="py-2 px-3 border-b truncate max-w-xs">{blog.content}</td>
                <td className="py-2 px-3 border-b">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="py-2 px-3 border-b flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
                    onClick={() => setModalBlog(blog)}
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center gap-1"
                    onClick={() => deleteBlog(blog._id)}
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Edit/Create */}
      {modalBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{modalBlog._id ? "Edit Blog" : "Create Blog"}</h2>
            <input
              type="text"
              placeholder="Title"
              value={modalBlog.title}
              onChange={(e) => setModalBlog({ ...modalBlog, title: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Summary"
              value={modalBlog.summary}
              onChange={(e) => setModalBlog({ ...modalBlog, summary: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={modalBlog.image}
              onChange={(e) => setModalBlog({ ...modalBlog, image: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-2"
            />
            <textarea
              placeholder="Content"
              value={modalBlog.content}
              onChange={(e) => setModalBlog({ ...modalBlog, content: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-2 h-32"
            />
            <div className="flex justify-end gap-2">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setModalBlog(null)}>
                Cancel
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={saveBlog}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogsList;
