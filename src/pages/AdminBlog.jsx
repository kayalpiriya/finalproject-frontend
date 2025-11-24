import React, { useState, useEffect } from "react";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "../api/blogApi";

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", summary: "", content: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateBlog(editingId, form);
      setEditingId(null);
    } else {
      await createBlog(form);
    }
    setForm({ title: "", summary: "", content: "", image: "" });
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setForm(blog);
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Blog Panel</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input className="border p-2 w-full mb-2" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input className="border p-2 w-full mb-2" placeholder="Summary" value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })} />
        <input className="border p-2 w-full mb-2" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        <textarea className="border p-2 w-full mb-2" placeholder="Content" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingId ? "Update" : "Create"}</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map(blog => (
          <div key={blog._id} className="border p-2 rounded">
            <h2 className="font-semibold">{blog.title}</h2>
            <div className="mt-2 flex gap-2">
              <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => handleEdit(blog)}>Edit</button>
              <button className="bg-red-500 px-2 py-1 rounded" onClick={() => handleDelete(blog._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
