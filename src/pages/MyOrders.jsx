
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://finalproject-backend-7rqa.onrender.com/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px", minHeight: "80vh" }}>
        <h2>My Orders</h2>

        {orders.length === 0 && <p>No orders found</p>}

        {orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <p><b>Order ID:</b> {order._id}</p>
            <p><b>Total:</b> LKR {order.total}</p>
            <p><b>Address:</b> {order.address}</p>

            <p>
              <b>Status:</b>{" "}
              {order.status === "pending" && "⏳ Pending"}
              {order.status === "completed" && "👨‍🍳 Preparing"}
              {order.status === "delivered" && "✅ Delivered"}
            </p>

            <hr />

            <b>Items:</b>
            {order.products.map((item, index) => (
              <p key={index}>
                {item.quantity} × {item.product.name}
              </p>
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
