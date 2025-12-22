// import React, { useEffect, useState } from "react";
// import axios from "axios";


// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await axios.get(
//           "https://finalproject-backend-7rqa.onrender.com/orders/my-orders",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setOrders(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>My Orders</h2>

//       {orders.length === 0 && <p>No orders found</p>}

//       {orders.map((order) => (
//         <div
//           key={order._id}
//           style={{
//             border: "1px solid #ddd",
//             padding: "15px",
//             marginBottom: "15px",
//             borderRadius: "8px",
//           }}
//         >
//           <p><b>Order ID:</b> {order._id}</p>
//           <p><b>Total:</b> LKR {order.total}</p>
//           <p><b>Address:</b> {order.address}</p>

//           <p>
//             <b>Status:</b>{" "}
//             {order.status === "pending" && "⏳ Pending"}
//             {order.status === "completed" && "👨‍🍳 Preparing"}
//             {/* {order.status === "out_for_delivery" && "🚚 Out for Delivery"} */}
//             {order.status === "delivered" && "✅ Delivered"}
//           </p>

//           <hr />

//           <b>Items:</b>
//           {order.products.map((item, index) => (
//             <p key={index}>
//               {item.quantity} × {item.product.name}
//             </p>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyOrders;


import React, { useEffect, useState } from "react";
import axios from "axios";

// --- Import Navbar and Footer ---
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
      {/* Navbar */}
      <Navbar />

      <div style={{ padding: "20px", minHeight: "80vh" }}>
        <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

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

            <hr className="my-2" />

            <b>Items:</b>
            {order.products.map((item, index) => (
              <p key={index}>
                {item.quantity} × {item.product.name}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MyOrders;
