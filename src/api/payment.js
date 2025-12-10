import axios from "axios";

const API = axios.create({ baseURL: "https://finalproject-backend-7rqa.onrender.com/payments" });

export const createPayment = (orderId, amount, method) =>
  API.post("/create", { orderId, amount, method });

export const getPayments = () => API.get("/");
