import axios from "axios";

const API = axios.create({ baseURL: "https://finalproject-backend-7rqa.onrender.com/cart" });

// include token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const addToCart = (productId, quantity = 1) =>
  API.post("/add", { productId, quantity });

export const getCart = () => API.get("/");

export const removeFromCart = (productId) =>
  API.post("/remove", { productId });

export const clearCart = () => API.delete("/clear");

export const getAllCarts = () => API.get("/all"); // admin
