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

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // ===== ERROR BOUNDARY =====
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError)
//       return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Something went wrong in OrdersList.</h2>;
//     return this.props.children;
//   }
// }

// // ===== ORDERS LIST COMPONENT =====
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

//   // ===== DELETE ORDER FUNCTION =====
//   const handleDelete = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/orders/${orderId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       // Remove deleted order from state
//       setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
//     } catch (err) {
//       console.error("Failed to delete order:", err);
//       alert("Failed to delete order. Please try again.");
//     }
//   };

//   if (loading)
//     return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading orders...</p>;

//   if (error)
//     return <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>{error}</p>;

//   return (
//     <div className="orders-list-container" style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Orders</h2>
//       {orders.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order._id}
//             className="order-card"
//             style={{
//               border: "1px solid #ddd",
//               padding: "20px",
//               borderRadius: "12px",
//               marginBottom: "15px",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
//             }}
//           >
//             <h4>Order by: {order.user?.name || "Unknown User"}</h4>
//             <p>Total: ₹{order.total || 0}</p>
//             <p>Status: {order.status || "pending"}</p>
//             <p>Address: {order.address || "-"}</p>
//             <div style={{ marginTop: "10px" }}>
//               {order.products?.map((p) => (
//                 <p key={p.product?._id || Math.random()}>
//                   {p.quantity || 0} x {p.product?.name || "Unknown Product"} @ ₹{p.price || 0} = ₹{(p.quantity || 0) * (p.price || 0)}
//                 </p>
//               ))}
//             </div>

//             {/* ===== DELETE BUTTON MOVED TO BOTTOM ===== */}
//             <div style={{ textAlign: "right", marginTop: "15px" }}>
//               <button
//                 onClick={() => handleDelete(order._id)}
//                 style={{
//                   backgroundColor: "#ff4d4f",
//                   color: "#fff",
//                   border: "none",
//                   padding: "8px",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   width:"100px"
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // ===== WRAP ORDERS LIST WITH ERROR BOUNDARY =====
// export default function OrdersListWithBoundary() {
//   return (
//     <ErrorBoundary>
//       <OrdersList />
//     </ErrorBoundary>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // ===== ERROR BOUNDARY =====
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError)
//       return (
//         <h2 className="text-center mt-12 text-red-600 text-xl">
//           Something went wrong in OrdersList.
//         </h2>
//       );
//     return this.props.children;
//   }
// }

// // ===== ORDERS LIST COMPONENT =====
// function OrdersList() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const role = localStorage.getItem("role"); // "admin" or "user"

//   useEffect(() => {
//     if (role !== "admin") {
//       navigate("/"); // redirect non-admin users
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

//   const handleDelete = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/orders/${orderId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));
//     } catch (err) {
//       console.error("Failed to delete order:", err);
//       alert("Failed to delete order. Please try again.");
//     }
//   };

//   if (loading)
//     return <p className="text-center mt-12 text-gray-500">Loading orders...</p>;
//   if (error)
//     return (
//       <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>
//     );

//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {orders.length === 0 ? (
//         <p className="text-center col-span-full text-gray-500">No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
//           >
//             <div>
//               <h3 className="text-lg font-bold text-yellow-700 mb-2">
//                 Order by: {order.user?.name || "Unknown User"}
//               </h3>
//               <p className="text-gray-600 mb-1">
//                 Total: <span className="font-semibold">₹{order.total || 0}</span>
//               </p>
//               <p className="text-gray-600 mb-1">
//                 Status:{" "}
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-bold ${
//                     order.status === "pending"
//                       ? "bg-yellow-200 text-yellow-800"
//                       : order.status === "completed"
//                       ? "bg-green-200 text-green-800"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {order.status || "pending"}
//                 </span>
//               </p>
//               <p className="text-gray-600 mb-2">Address: {order.address || "-"}</p>

//               <div className="space-y-1">
//                 {order.products?.map((p) => (
//                   <p key={p.product?._id || Math.random()} className="text-gray-700">
//                     {p.quantity} x {p.product?.name || "Unknown Product"} @ ₹{p.price} = ₹
//                     {(p.quantity || 0) * (p.price || 0)}
//                   </p>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-4 text-right">
//               <button
//                 onClick={() => handleDelete(order._id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // ===== WRAP ORDERS LIST WITH ERROR BOUNDARY =====
// export default function OrdersListWithBoundary() {
//   return (
//     <ErrorBoundary>
//       <OrdersList />
//     </ErrorBoundary>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

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
      return (
        <h2 className="text-center mt-12 text-red-600 text-xl">
          Something went wrong in OrdersList.
        </h2>
      );
    return this.props.children;
  }
}

// ===== ORDERS LIST =====
function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingStatusId, setEditingStatusId] = useState(null);
  const [statusValue, setStatusValue] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load orders");
        setLoading(false);
      }
    };
    fetchOrders();
  }, [token]);

  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      await axios.delete(`http://localhost:5000/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
    } catch (err) {
      console.error(err);
      alert("Failed to delete order. Please try again.");
    }
  };

  const handleStatusSave = async (orderId) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/orders/${orderId}`,
        { status: statusValue },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? res.data : o))
      );
      setEditingStatusId(null);
      setStatusValue("");
    } catch (err) {
      console.error(err);
      alert("Failed to update status. Try again.");
    }
  };

  if (loading)
    return <p className="text-center mt-12 text-gray-500">Loading orders...</p>;
  if (error)
    return (
      <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>
    );

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {orders.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">
          No orders found.
        </p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-yellow-700 mb-2">
                Order by: {order.user?.name || "Unknown User"}
              </h3>
              <p className="text-gray-600 mb-1">
                Total: <span className="font-semibold">₹{order.total || 0}</span>
              </p>
              <p className="text-gray-600 mb-1 flex items-center gap-2">
                Status:{" "}
                {editingStatusId === order._id ? (
                  <>
                    <select
                      className="border p-1 rounded text-sm"
                      value={statusValue}
                      onChange={(e) => setStatusValue(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="delivered">Delivered</option>
                    </select>
                    <button
                      onClick={() => handleStatusSave(order._id)}
                      className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingStatusId(null)}
                      className="bg-gray-400 text-white px-2 py-1 rounded text-xs"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        order.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : order.status === "completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {order.status || "pending"}
                    </span>
                    <button
                      onClick={() => {
                        setEditingStatusId(order._id);
                        setStatusValue(order.status || "pending");
                      }}
                      className="bg-blue-500 text-white px-2 py-1 rounded ml-2 text-xs"
                    >
                      Edit
                    </button>
                  </>
                )}
              </p>
              <p className="text-gray-600 mb-2">Address: {order.address || "-"}</p>

              <div className="space-y-1">
                {order.products?.map((p) => (
                  <p key={p.product?._id || Math.random()} className="text-gray-700">
                    {p.quantity} x {p.product?.name || "Unknown Product"} @ ₹{p.price} =
                    ₹{(p.quantity || 0) * (p.price || 0)}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={() => handleDelete(order._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
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

// ===== EXPORT WITH ERROR BOUNDARY =====
export default function OrdersListWithBoundary() {
  return (
    <ErrorBoundary>
      <OrdersList />
    </ErrorBoundary>
  );
}
