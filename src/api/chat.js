import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/chat" });

export const getChats = () => API.get("/");
export const createChat = (sender, message) => API.post("/", { sender, message });
