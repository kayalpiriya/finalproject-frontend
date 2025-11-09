import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/chats" });

export const getChats = () => API.get("/");
export const createChat = (sender, message) => API.post("/", { sender, message });
