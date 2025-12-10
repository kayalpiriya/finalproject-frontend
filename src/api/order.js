import axios from "axios";

const API_URL = "https://finalproject-backend-7rqa.onrender.com/authorders";

export const createOrder = (data, token) =>
  axios.post(API_URL, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getAllOrders = (token) =>
  axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getOrderById = (id, token) =>
  axios.get(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteOrder = (id, token) =>
  axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
