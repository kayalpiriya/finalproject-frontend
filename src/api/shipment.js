import axios from "axios";

const API = axios.create({ baseURL: "https://finalproject-backend-7rqa.onrender.com/shipment" });

export const createShipment = (orderId, userId, address) =>
  API.post("/create", { orderId, userId, address });

export const updateShipmentStatus = (id, data) =>
  API.put(`/update/${id}`, data);

export const getShipments = () => API.get("/");
