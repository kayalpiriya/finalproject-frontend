import axios from "axios";

const API_URL = "http://localhost:5000/auth/products";

export const getAllProducts = () => axios.get(API_URL);

export const createProduct = (data, token) =>
  axios.post(API_URL, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteProduct = (id, token) =>
  axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
