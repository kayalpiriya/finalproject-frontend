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


// import React, { useEffect, useState } from "react";
// import axios from "axios";

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

// // ===== ORDERS LIST =====
// function OrdersList() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingStatusId, setEditingStatusId] = useState(null);
//   const [statusValue, setStatusValue] = useState("");

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/orders", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrders(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load orders");
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, [token]);

//   const handleDelete = async (orderId) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/orders/${orderId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete order. Please try again.");
//     }
//   };

//   const handleStatusSave = async (orderId) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/orders/${orderId}`,
//         { status: statusValue },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setOrders((prev) =>
//         prev.map((o) => (o._id === orderId ? res.data : o))
//       );
//       setEditingStatusId(null);
//       setStatusValue("");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update status. Try again.");
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
//         <p className="text-center col-span-full text-gray-500">
//           No orders found.
//         </p>
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
//               <p className="text-gray-600 mb-1 flex items-center gap-2">
//                 Status:{" "}
//                 {editingStatusId === order._id ? (
//                   <>
//                     <select
//                       className="border p-1 rounded text-sm"
//                       value={statusValue}
//                       onChange={(e) => setStatusValue(e.target.value)}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="completed">Completed</option>
//                       <option value="delivered">Delivered</option>
//                     </select>
//                     <button
//                       onClick={() => handleStatusSave(order._id)}
//                       className="bg-green-600 text-white px-2 py-1 rounded text-xs"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={() => setEditingStatusId(null)}
//                       className="bg-gray-400 text-white px-2 py-1 rounded text-xs"
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-bold ${
//                         order.status === "pending"
//                           ? "bg-yellow-200 text-yellow-800"
//                           : order.status === "completed"
//                           ? "bg-green-200 text-green-800"
//                           : "bg-gray-200 text-gray-700"
//                       }`}
//                     >
//                       {order.status || "pending"}
//                     </span>
//                     <button
//                       onClick={() => {
//                         setEditingStatusId(order._id);
//                         setStatusValue(order.status || "pending");
//                       }}
//                       className="bg-blue-500 text-white px-2 py-1 rounded ml-2 text-xs"
//                     >
//                       Edit
//                     </button>
//                   </>
//                 )}
//               </p>
//               <p className="text-gray-600 mb-2">Address: {order.address || "-"}</p>

//               <div className="space-y-1">
//                 {order.products?.map((p) => (
//                   <p key={p.product?._id || Math.random()} className="text-gray-700">
//                     {p.quantity} x {p.product?.name || "Unknown Product"} @ ₹{p.price} =
//                     ₹{(p.quantity || 0) * (p.price || 0)}
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

// // ===== EXPORT WITH ERROR BOUNDARY =====
// export default function OrdersListWithBoundary() {
//   return (
//     <ErrorBoundary>
//       <OrdersList />
//     </ErrorBoundary>
//   );
// }




import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

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

  const getBadgeColor = (count) => {
    if (count <= 3) return "bg-green-200 text-green-800";
    if (count <= 7) return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };

  const getStatusIcon = (status) => {
    if (status === "pending") return "⏳";
    if (status === "completed") return "✅";
    if (status === "delivered") return "📦";
    return "❔";
  };

  // ===== Summary Calculations =====
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalItems = orders.reduce(
    (sum, o) => sum + (o.products?.reduce((pSum, p) => pSum + (p.quantity || 0), 0) || 0),
    0
  );
  const avgOrderSize = orders.length ? (totalItems / orders.length).toFixed(1) : 0;

  // ===== Prepare Chart Data =====
  const revenueData = orders.map((o, idx) => ({ name: `O${idx + 1}`, value: o.total || 0 }));
  const itemsData = orders.map((o, idx) => ({
    name: `O${idx + 1}`,
    value: o.products?.reduce((sum, p) => sum + (p.quantity || 0), 0) || 0
  }));
  const avgSizeData = orders.map((o, idx) => {
    const totalItemsOrder = o.products?.reduce((sum, p) => sum + (p.quantity || 0), 0) || 0;
    return { name: `O${idx + 1}`, value: totalItemsOrder };
  });

  if (loading)
    return <p className="text-center mt-12 text-gray-500">Loading orders...</p>;
  if (error)
    return (
      <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>
    );

  return (
    <div className="p-6 bg-cream-50 min-h-screen">
      {/* ===== Header ===== */}
      <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
        Orders Dashboard
      </h1>

      {/* ===== Summary Cards with Charts ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Revenue Card */}
        <div className="bg-yellow-50 rounded-xl shadow-md p-4 flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-1">Total Revenue</span>
          <span className="text-xl font-bold text-yellow-700">₹{totalRevenue}</span>
          <div className="w-full h-16 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <Bar dataKey="value" fill="#FBBF24" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Total Items Card */}
        <div className="bg-pink-50 rounded-xl shadow-md p-4 flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-1">Total Items</span>
          <span className={`text-xl font-bold px-2 py-1 rounded-full ${getBadgeColor(totalItems)}`}>
            {totalItems}
          </span>
          <div className="w-full h-16 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={itemsData}>
                <Bar dataKey="value" fill="#F472B6" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Average Order Size Card */}
        <div className="bg-green-50 rounded-xl shadow-md p-4 flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-1">Average Order Size</span>
          <span className={`text-xl font-bold px-2 py-1 rounded-full ${getBadgeColor(avgOrderSize)}`}>
            {avgOrderSize}
          </span>
          <div className="w-full h-16 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={avgSizeData}>
                <Line type="monotone" dataKey="value" stroke="#34D399" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ===== Orders Table ===== */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
        <table className="min-w-full border-collapse">
          <thead className="bg-yellow-50 sticky top-0 text-gray-800">
            <tr>
              <th className="py-2 px-3 border-b">User</th>
              <th className="py-2 px-3 border-b">Total</th>
              <th className="py-2 px-3 border-b">Total Items</th>
              <th className="py-2 px-3 border-b">Status</th>
              <th className="py-2 px-3 border-b">Address</th>
              <th className="py-2 px-3 border-b">Products</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => {
              const totalItemsOrder = order.products?.reduce(
                (sum, p) => sum + (p.quantity || 0),
                0
              );

              const displayProducts = order.products?.slice(0, 2);
              const remainingCount = (order.products?.length || 0) - 2;

              return (
                <tr
                  key={order._id}
                  className={`transition-all duration-300 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-yellow-50 hover:shadow-lg`}
                >
                  <td className="py-2 px-3 border-b">{order.user?.name || "Unknown"}</td>
                  <td className="py-2 px-3 border-b font-semibold">₹{order.total || 0}</td>
                  <td className="py-2 px-3 border-b">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(totalItemsOrder || 0)}`}>
                      {totalItemsOrder || 0}
                    </span>
                  </td>
                  <td className="py-2 px-3 border-b">
                    {editingStatusId === order._id ? (
                      <div className="flex gap-2 items-center">
                        <select
                          className="border rounded px-2 py-1 text-sm"
                          value={statusValue}
                          onChange={(e) => setStatusValue(e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="delivered">Delivered</option>
                        </select>
                        <button
                          onClick={() => handleStatusSave(order._id)}
                          className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingStatusId(null)}
                          className="bg-gray-400 text-white px-2 py-1 rounded text-xs hover:bg-gray-500 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-bold ${
                            order.status === "pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : order.status === "completed"
                              ? "bg-green-200 text-green-800"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {getStatusIcon(order.status)} {order.status || "pending"}
                        </span>
                        <button
                          onClick={() => {
                            setEditingStatusId(order._id);
                            setStatusValue(order.status || "pending");
                          }}
                          className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-3 border-b">{order.address || "-"}</td>
                  <td className="py-2 px-3 border-b space-y-1">
                    {displayProducts?.map((p) => (
                      <p key={p.product?._id || Math.random()} className="text-sm">
                        {p.quantity} x {p.product?.name || "Unknown"} @ ₹{p.price} = ₹{(p.quantity || 0) * (p.price || 0)}
                      </p>
                    ))}
                    {remainingCount > 0 && (
                      <p className="text-xs text-gray-500">+{remainingCount} more</p>
                    )}
                  </td>
                </tr>
              );
            })}

            {/* ===== SUMMARY ROW ===== */}
            <tr className="bg-gray-100 font-bold">
              <td className="py-2 px-3 border-t">Summary</td>
              <td className="py-2 px-3 border-t">₹{totalRevenue}</td>
              <td className="py-2 px-3 border-t">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(totalItems)}`}>
                  {totalItems}
                </span>
              </td>
              <td className="py-2 px-3 border-t">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(avgOrderSize)}`}>
                  {avgOrderSize}
                </span>
              </td>
              <td className="py-2 px-3 border-t" colSpan={2}></td>
            </tr>
          </tbody>
        </table>
      </div>
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
