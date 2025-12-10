import axios from "axios";

const API = axios.create({ baseURL: "https://finalproject-backend-7rqa.onrender.com/api" });

// Fetch all blogs
export const getBlogs = async () => {
  try {
    const res = await API.get("/blogs");
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Fetch single blog by id
export const getBlogById = async (id) => {
  try {
    const res = await API.get(`/blogs/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
