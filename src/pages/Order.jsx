import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  const API_URL = "https://finalproject-backend-7rqa.onrender.com/orders";

  const fetchOrders = async () => {
    if (!token) return alert("Please login first!");
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const deleteOrder = async (id) => {
    if (!token) return alert("Please login first!");
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchOrders();
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders 🍩</h2>
      <ul>
        {orders.map((o) => (
          <li key={o._id}>
            {o._id} | Total: ₹{o.total}{" "}
            <button onClick={() => deleteOrder(o._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
