import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/shipment" });

export const createShipment = (orderId, userId, address) =>
  API.post("/create", { orderId, userId, address });

export const updateShipmentStatus = (id, data) =>
  API.put(`/update/${id}`, data);

export const getShipments = () => API.get("/");
