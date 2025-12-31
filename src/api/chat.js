


// src/api/chatApi.js
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

export const getChats = () => axios.get(`${API_BASE}/chats`);
export const createChat = (sender, message) => axios.post(`${API_BASE}/chats`, { sender, message });
export const generateAIReply = (prompt) => axios.post(`${API_BASE}/ai/generate`, { prompt });
