// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function OrdersList() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios.get("/orders")  // backend route
//       .then(res => setOrders(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       {orders.map(order => (
//         <div key={order._id}>
//           <h3>Order by: {order.user}</h3>
//           <p>Total: ₹{order.total}</p>
//           <p>Status: {order.status}</p>
//           {order.products.map(p => (
//             <div key={p.product}>{p.quantity} x {p.product.name}</div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default OrdersList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import "./OrdersList.css";

// function OrdersList() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const role = localStorage.getItem("role");


//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/orders");
//         setOrders(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch orders:", err);
//         setError("Failed to load orders");
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   if (loading) return <p>Loading orders...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="orders-list-container">
//       <h2>Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order._id} className="order-card">
//             <h4>Order by: {order.user}</h4>
//             <p>Total: ₹{order.total}</p>
//             <p>Status: {order.status}</p>
//             <div>
//               {order.products.map((p) => (
//                 <p key={p.product._id}>
//                   {p.quantity} x {p.product.name} @ ₹{p.price}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default OrdersList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function OrdersList() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const role = localStorage.getItem("role"); // "admin" or "user"

//   useEffect(() => {
//     // Only admin can access
//     if (role !== "admin") {
//       navigate("/"); // redirect non-admin users to homepage
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/orders", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setOrders(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch orders:", err);
//         setError("Failed to load orders");
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [role, navigate]);

//   if (loading)
//     return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading orders...</p>;
//   if (error)
//     return <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>{error}</p>;

//   return (
//     <div className="orders-list-container">
//       <h2>Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order._id} className="order-card">
//             {/* <h4>Order by: {order.user?.name || order.user}</h4> */}
//             <h4>Order by: {order.user?.name || "Unknown"}</h4>

//             <p>Total: ₹{order.total || 0}</p>
//             <p>Status: {order.status || "Pending"}</p>
//             <p>Address: {order.address || "-"}</p>
//             <div>
//               {order.products.map((p) => (
//                 <p key={p.product?._id || Math.random()}>
//                   {p.quantity} x {p.product.name} @ ₹{p.price} = ₹{p.quantity * p.price}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default OrdersList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Error Boundary
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }
//   render() {
//     if (this.state.hasError) return <h2>Something went wrong in OrdersList.</h2>;
//     return this.props.children;
//   }
// }

// function OrdersList() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const role = localStorage.getItem("role"); // "admin" or "user"

//   useEffect(() => {
//     // Only admin can access
//     if (role !== "admin") {
//       navigate("/"); // redirect non-admin users to homepage
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/orders", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setOrders(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch orders:", err);
//         setError("Failed to load orders");
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [role, navigate]);

//   if (loading)
//     return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading orders...</p>;
//   if (error)
//     return <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>{error}</p>;

//   return (
//     <div className="orders-list-container">
//       <h2>Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order._id} className="order-card">
//             <h4>Order by: {order.user?.name || "Unknown User"}</h4>
//             <p>Total: ₹{order.total || 0}</p>
//             <p>Status: {order.status || "pending"}</p>
//             <p>Address: {order.address || "-"}</p>
//             <div>
//               {order.products?.map((p) => (
//                 <p key={p.product?._id || Math.random()}>
//                   {p.quantity || 0} x {p.product?.name || "Unknown Product"} @ ₹{p.price || 0} = ₹{(p.quantity || 0) * (p.price || 0)}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // Wrap with ErrorBoundary
// export default function OrdersListWithBoundary() {
//   return (
//     <ErrorBoundary>
//       <OrdersList />
//     </ErrorBoundary>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ===== ERROR BOUNDARY =====
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError)
      return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Something went wrong in OrdersList.</h2>;
    return this.props.children;
  }
}

// ===== ORDERS LIST COMPONENT =====
function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // "admin" or "user"

  useEffect(() => {
    // Only admin can access
    if (role !== "admin") {
      navigate("/"); // redirect non-admin users to homepage
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError("Failed to load orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [role, navigate]);

  // ===== DELETE ORDER FUNCTION =====
  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await axios.delete(`http://localhost:5000/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Remove deleted order from state
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Failed to delete order:", err);
      alert("Failed to delete order. Please try again.");
    }
  };

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading orders...</p>;

  if (error)
    return <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>{error}</p>;

  return (
    <div className="orders-list-container" style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Orders</h2>
      {orders.length === 0 ? (
        <p style={{ textAlign: "center" }}>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="order-card"
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h4>Order by: {order.user?.name || "Unknown User"}</h4>
            <p>Total: ₹{order.total || 0}</p>
            <p>Status: {order.status || "pending"}</p>
            <p>Address: {order.address || "-"}</p>
            <div style={{ marginTop: "10px" }}>
              {order.products?.map((p) => (
                <p key={p.product?._id || Math.random()}>
                  {p.quantity || 0} x {p.product?.name || "Unknown Product"} @ ₹{p.price || 0} = ₹{(p.quantity || 0) * (p.price || 0)}
                </p>
              ))}
            </div>

            {/* ===== DELETE BUTTON MOVED TO BOTTOM ===== */}
            <div style={{ textAlign: "right", marginTop: "15px" }}>
              <button
                onClick={() => handleDelete(order._id)}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  padding: "8px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width:"100px"
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// ===== WRAP ORDERS LIST WITH ERROR BOUNDARY =====
export default function OrdersListWithBoundary() {
  return (
    <ErrorBoundary>
      <OrdersList />
    </ErrorBoundary>
  );
}
