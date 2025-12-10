import axios from "axios";

const API_URL = "https://finalproject-frontend-om9jm7iv9-kayalpiriyas-projects.vercel.app/auth";

export const getAllUsers = () => axios.get(API_URL); // ✅ add this
export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
export const getUserProfile = (token) =>
  axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });


