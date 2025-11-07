import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/payments" });

export const createPayment = (orderId, amount, method) =>
  API.post("/create", { orderId, amount, method });

export const getPayments = () => API.get("/");
