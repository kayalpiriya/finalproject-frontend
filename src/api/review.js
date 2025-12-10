// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/reviews" });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export const addReview = (productId, rating, comment) =>
//   API.post("/add", { productId, rating, comment });

// export const getReviewsByProduct = (productId) =>
//   API.get(`/product/${productId}`);


import axios from "axios";

// Base API instance
const API = axios.create({ baseURL: "https://finalproject-backend-7rqa.onrender.com/reviews" });

// Add token to headers if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// ✅ Admin: get all reviews
export const getAllReviews = () => API.get("/");

// User: add a new review
export const addReview = (productId, rating, comment) =>
  API.post("/add", { productId, rating, comment });

// User: get reviews for a specific product
export const getReviewsByProduct = (productId) =>
  API.get(`/product/${productId}`);

