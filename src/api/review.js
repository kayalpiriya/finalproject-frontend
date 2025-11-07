import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/review" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const addReview = (productId, rating, comment) =>
  API.post("/add", { productId, rating, comment });

export const getReviewsByProduct = (productId) =>
  API.get(`/product/${productId}`);
