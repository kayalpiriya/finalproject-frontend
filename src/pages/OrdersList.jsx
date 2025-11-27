// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // function OrdersList() {
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     axios.get("/orders")  // backend route
// //       .then(res => setOrders(res.data))
// //       .catch(err => console.error(err));
// //   }, []);

// //   return (
// //     <div>
// //       {orders.map(order => (
// //         <div key={order._id}>
// //           <h3>Order by: {order.user}</h3>
// //           <p>Total: ₹{order.total}</p>
// //           <p>Status: {order.status}</p>
// //           {order.products.map(p => (
// //             <div key={p.product}>{p.quantity} x {p.product.name}</div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default OrdersList;


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // // import "./OrdersList.css";

// // function OrdersList() {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const role = localStorage.getItem("role");


// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/orders");
// //         setOrders(res.data);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Failed to fetch orders:", err);
// //         setError("Failed to load orders");
// //         setLoading(false);
// //       }
// //     };
// //     fetchOrders();
// //   }, []);

// //   if (loading) return <p>Loading orders...</p>;
// //   if (error) return <p style={{ color: "red" }}>{error}</p>;

// //   return (
// //     <div className="orders-list-container">
// //       <h2>Orders</h2>
// //       {orders.length === 0 ? (
// //         <p>No orders found.</p>
// //       ) : (
// //         orders.map((order) => (
// //           <div key={order._id} className="order-card">
// //             <h4>Order by: {order.user}</h4>
// //             <p>Total: ₹{order.total}</p>
// //             <p>Status: {order.status}</p>
// //             <div>
// //               {order.products.map((p) => (
// //                 <p key={p.product._id}>
// //                   {p.quantity} x {p.product.name} @ ₹{p.price}
// //                 </p>
// //               ))}
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default OrdersList;


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // function OrdersList() {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const navigate = useNavigate();
// //   const role = localStorage.getItem("role"); // "admin" or "user"

// //   useEffect(() => {
// //     // Only admin can access
// //     if (role !== "admin") {
// //       navigate("/"); // redirect non-admin users to homepage
// //       return;
// //     }

// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/orders", {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         });
// //         setOrders(res.data);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Failed to fetch orders:", err);
// //         setError("Failed to load orders");
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [role, navigate]);

// //   if (loading)
// //     return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading orders...</p>;
// //   if (error)
// //     return <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>{error}</p>;

// //   return (
// //     <div className="orders-list-container">
// //       <h2>Orders</h2>
// //       {orders.length === 0 ? (
// //         <p>No orders found.</p>
// //       ) : (
// //         orders.map((order) => (
// //           <div key={order._id} className="order-card">
// //             {/* <h4>Order by: {order.user?.name || order.user}</h4> */}
// //             <h4>Order by: {order.user?.name || "Unknown"}</h4>

// //             <p>Total: ₹{order.total || 0}</p>
// //             <p>Status: {order.status || "Pending"}</p>
// //             <p>Address: {order.address || "-"}</p>
// //             <div>
// //               {order.products.map((p) => (
// //                 <p key={p.product?._id || Math.random()}>
// //                   {p.quantity} x {p.product.name} @ ₹{p.price} = ₹{p.quantity * p.price}
// //                 </p>
// //               ))}
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default OrdersList;


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // // Error Boundary
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }
// //   static getDerivedStateFromError() {
// //     return { hasError: true };
// //   }
// //   render() {
// //     if (this.state.hasError) return <h2>Something went wrong in OrdersList.</h2>;
// //     return this.props.children;
// //   }
// // }

// // function OrdersList() {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const navigate = useNavigate();
// //   const role = localStorage.getItem("role"); // "admin" or "user"

// //   useEffect(() => {
// //     // Only admin can access
// //     if (role !== "admin") {
// //       navigate("/"); // redirect non-admin users to homepage
// //       return;
// //     }

// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/orders", {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         });
// //         setOrders(res.data);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Failed to fetch orders:", err);
// //         setError("Failed to load orders");
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [role, navigate]);

// //   if (loading)
// //     return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading orders...</p>;
// //   if (error)
// //     return <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>{error}</p>;

// //   return (
// //     <div className="orders-list-container">
// //       <h2>Orders</h2>
// //       {orders.length === 0 ? (
// //         <p>No orders found.</p>
// //       ) : (
// //         orders.map((order) => (
// //           <div key={order._id} className="order-card">
// //             <h4>Order by: {order.user?.name || "Unknown User"}</h4>
// //             <p>Total: ₹{order.total || 0}</p>
// //             <p>Status: {order.status || "pending"}</p>
// //             <p>Address: {order.address || "-"}</p>
// //             <div>
// //               {order.products?.map((p) => (
// //                 <p key={p.product?._id || Math.random()}>
// //                   {p.quantity || 0} x {p.product?.name || "Unknown Product"} @ ₹{p.price || 0} = ₹{(p.quantity || 0) * (p.price || 0)}
// //                 </p>
// //               ))}
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // // Wrap with ErrorBoundary
// // export default function OrdersListWithBoundary() {
// //   return (
// //     <ErrorBoundary>
// //       <OrdersList />
// //     </ErrorBoundary>
// //   );
// // }

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // // ===== ERROR BOUNDARY =====
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }

// //   static getDerivedStateFromError() {
// //     return { hasError: true };
// //   }

// //   render() {
// //     if (this.state.hasError)
// //       return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Something went wrong in OrdersList.</h2>;
// //     return this.props.children;
// //   }
// // }

// // // ===== ORDERS LIST COMPONENT =====
// // function OrdersList() {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const navigate = useNavigate();
// //   const role = localStorage.getItem("role"); // "admin" or "user"

// //   useEffect(() => {
// //     // Only admin can access
// //     if (role !== "admin") {
// //       navigate("/"); // redirect non-admin users to homepage
// //       return;
// //     }

// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/orders", {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         });
// //         setOrders(res.data);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Failed to fetch orders:", err);
// //         setError("Failed to load orders");
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [role, navigate]);

// //   // ===== DELETE ORDER FUNCTION =====
// //   const handleDelete = async (orderId) => {
// //     if (!window.confirm("Are you sure you want to delete this order?")) return;

// //     try {
// //       await axios.delete(`http://localhost:5000/orders/${orderId}`, {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });

// //       // Remove deleted order from state
// //       setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
// //     } catch (err) {
// //       console.error("Failed to delete order:", err);
// //       alert("Failed to delete order. Please try again.");
// //     }
// //   };

// //   if (loading)
// //     return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading orders...</p>;

// //   if (error)
// //     return <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>{error}</p>;

// //   return (
// //     <div className="orders-list-container" style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
// //       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Orders</h2>
// //       {orders.length === 0 ? (
// //         <p style={{ textAlign: "center" }}>No orders found.</p>
// //       ) : (
// //         orders.map((order) => (
// //           <div
// //             key={order._id}
// //             className="order-card"
// //             style={{
// //               border: "1px solid #ddd",
// //               padding: "20px",
// //               borderRadius: "12px",
// //               marginBottom: "15px",
// //               boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
// //             }}
// //           >
// //             <h4>Order by: {order.user?.name || "Unknown User"}</h4>
// //             <p>Total: ₹{order.total || 0}</p>
// //             <p>Status: {order.status || "pending"}</p>
// //             <p>Address: {order.address || "-"}</p>
// //             <div style={{ marginTop: "10px" }}>
// //               {order.products?.map((p) => (
// //                 <p key={p.product?._id || Math.random()}>
// //                   {p.quantity || 0} x {p.product?.name || "Unknown Product"} @ ₹{p.price || 0} = ₹{(p.quantity || 0) * (p.price || 0)}
// //                 </p>
// //               ))}
// //             </div>

// //             {/* ===== DELETE BUTTON MOVED TO BOTTOM ===== */}
// //             <div style={{ textAlign: "right", marginTop: "15px" }}>
// //               <button
// //                 onClick={() => handleDelete(order._id)}
// //                 style={{
// //                   backgroundColor: "#ff4d4f",
// //                   color: "#fff",
// //                   border: "none",
// //                   padding: "8px",
// //                   borderRadius: "6px",
// //                   cursor: "pointer",
// //                   width:"100px"
// //                 }}
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // // ===== WRAP ORDERS LIST WITH ERROR BOUNDARY =====
// // export default function OrdersListWithBoundary() {
// //   return (
// //     <ErrorBoundary>
// //       <OrdersList />
// //     </ErrorBoundary>
// //   );
// // }


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // // ===== ERROR BOUNDARY =====
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }

// //   static getDerivedStateFromError() {
// //     return { hasError: true };
// //   }

// //   render() {
// //     if (this.state.hasError)
// //       return (
// //         <h2 className="text-center mt-12 text-red-600 text-xl">
// //           Something went wrong in OrdersList.
// //         </h2>
// //       );
// //     return this.props.children;
// //   }
// // }

// // // ===== ORDERS LIST COMPONENT =====
// // function OrdersList() {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const navigate = useNavigate();
// //   const role = localStorage.getItem("role"); // "admin" or "user"

// //   useEffect(() => {
// //     if (role !== "admin") {
// //       navigate("/"); // redirect non-admin users
// //       return;
// //     }

// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/orders", {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         });
// //         setOrders(res.data);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Failed to fetch orders:", err);
// //         setError("Failed to load orders");
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [role, navigate]);

// //   const handleDelete = async (orderId) => {
// //     if (!window.confirm("Are you sure you want to delete this order?")) return;

// //     try {
// //       await axios.delete(`http://localhost:5000/orders/${orderId}`, {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });
// //       setOrders((prev) => prev.filter((o) => o._id !== orderId));
// //     } catch (err) {
// //       console.error("Failed to delete order:", err);
// //       alert("Failed to delete order. Please try again.");
// //     }
// //   };

// //   if (loading)
// //     return <p className="text-center mt-12 text-gray-500">Loading orders...</p>;
// //   if (error)
// //     return (
// //       <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>
// //     );

// //   return (
// //     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //       {orders.length === 0 ? (
// //         <p className="text-center col-span-full text-gray-500">No orders found.</p>
// //       ) : (
// //         orders.map((order) => (
// //           <div
// //             key={order._id}
// //             className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
// //           >
// //             <div>
// //               <h3 className="text-lg font-bold text-yellow-700 mb-2">
// //                 Order by: {order.user?.name || "Unknown User"}
// //               </h3>
// //               <p className="text-gray-600 mb-1">
// //                 Total: <span className="font-semibold">₹{order.total || 0}</span>
// //               </p>
// //               <p className="text-gray-600 mb-1">
// //                 Status:{" "}
// //                 <span
// //                   className={`px-2 py-1 rounded-full text-xs font-bold ${
// //                     order.status === "pending"
// //                       ? "bg-yellow-200 text-yellow-800"
// //                       : order.status === "completed"
// //                       ? "bg-green-200 text-green-800"
// //                       : "bg-gray-200 text-gray-700"
// //                   }`}
// //                 >
// //                   {order.status || "pending"}
// //                 </span>
// //               </p>
// //               <p className="text-gray-600 mb-2">Address: {order.address || "-"}</p>

// //               <div className="space-y-1">
// //                 {order.products?.map((p) => (
// //                   <p key={p.product?._id || Math.random()} className="text-gray-700">
// //                     {p.quantity} x {p.product?.name || "Unknown Product"} @ ₹{p.price} = ₹
// //                     {(p.quantity || 0) * (p.price || 0)}
// //                   </p>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="mt-4 text-right">
// //               <button
// //                 onClick={() => handleDelete(order._id)}
// //                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // // ===== WRAP ORDERS LIST WITH ERROR BOUNDARY =====
// // export default function OrdersListWithBoundary() {
// //   return (
// //     <ErrorBoundary>
// //       <OrdersList />
// //     </ErrorBoundary>
// //   );
// // }


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // // ===== ERROR BOUNDARY =====
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }
// //   static getDerivedStateFromError() {
// //     return { hasError: true };
// //   }
// //   render() {
// //     if (this.state.hasError)
// //       return (
// //         <h2 className="text-center mt-12 text-red-600 text-xl">
// //           Something went wrong in OrdersList.
// //         </h2>
// //       );
// //     return this.props.children;
// //   }
// // }

// // // ===== ORDERS LIST =====
// // function OrdersList() {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [editingStatusId, setEditingStatusId] = useState(null);
// //   const [statusValue, setStatusValue] = useState("");

// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/orders", {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setOrders(res.data);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error(err);
// //         setError("Failed to load orders");
// //         setLoading(false);
// //       }
// //     };
// //     fetchOrders();
// //   }, [token]);

// //   const handleDelete = async (orderId) => {
// //     if (!window.confirm("Are you sure you want to delete this order?")) return;
// //     try {
// //       await axios.delete(`http://localhost:5000/orders/${orderId}`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setOrders((prev) => prev.filter((o) => o._id !== orderId));
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to delete order. Please try again.");
// //     }
// //   };

// //   const handleStatusSave = async (orderId) => {
// //     try {
// //       const res = await axios.put(
// //         `http://localhost:5000/orders/${orderId}`,
// //         { status: statusValue },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       setOrders((prev) =>
// //         prev.map((o) => (o._id === orderId ? res.data : o))
// //       );
// //       setEditingStatusId(null);
// //       setStatusValue("");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to update status. Try again.");
// //     }
// //   };

// //   if (loading)
// //     return <p className="text-center mt-12 text-gray-500">Loading orders...</p>;
// //   if (error)
// //     return (
// //       <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>
// //     );

// //   return (
// //     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //       {orders.length === 0 ? (
// //         <p className="text-center col-span-full text-gray-500">
// //           No orders found.
// //         </p>
// //       ) : (
// //         orders.map((order) => (
// //           <div
// //             key={order._id}
// //             className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
// //           >
// //             <div>
// //               <h3 className="text-lg font-bold text-yellow-700 mb-2">
// //                 Order by: {order.user?.name || "Unknown User"}
// //               </h3>
// //               <p className="text-gray-600 mb-1">
// //                 Total: <span className="font-semibold">₹{order.total || 0}</span>
// //               </p>
// //               <p className="text-gray-600 mb-1 flex items-center gap-2">
// //                 Status:{" "}
// //                 {editingStatusId === order._id ? (
// //                   <>
// //                     <select
// //                       className="border p-1 rounded text-sm"
// //                       value={statusValue}
// //                       onChange={(e) => setStatusValue(e.target.value)}
// //                     >
// //                       <option value="pending">Pending</option>
// //                       <option value="completed">Completed</option>
// //                       <option value="delivered">Delivered</option>
// //                     </select>
// //                     <button
// //                       onClick={() => handleStatusSave(order._id)}
// //                       className="bg-green-600 text-white px-2 py-1 rounded text-xs"
// //                     >
// //                       Save
// //                     </button>
// //                     <button
// //                       onClick={() => setEditingStatusId(null)}
// //                       className="bg-gray-400 text-white px-2 py-1 rounded text-xs"
// //                     >
// //                       Cancel
// //                     </button>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <span
// //                       className={`px-2 py-1 rounded-full text-xs font-bold ${
// //                         order.status === "pending"
// //                           ? "bg-yellow-200 text-yellow-800"
// //                           : order.status === "completed"
// //                           ? "bg-green-200 text-green-800"
// //                           : "bg-gray-200 text-gray-700"
// //                       }`}
// //                     >
// //                       {order.status || "pending"}
// //                     </span>
// //                     <button
// //                       onClick={() => {
// //                         setEditingStatusId(order._id);
// //                         setStatusValue(order.status || "pending");
// //                       }}
// //                       className="bg-blue-500 text-white px-2 py-1 rounded ml-2 text-xs"
// //                     >
// //                       Edit
// //                     </button>
// //                   </>
// //                 )}
// //               </p>
// //               <p className="text-gray-600 mb-2">Address: {order.address || "-"}</p>

// //               <div className="space-y-1">
// //                 {order.products?.map((p) => (
// //                   <p key={p.product?._id || Math.random()} className="text-gray-700">
// //                     {p.quantity} x {p.product?.name || "Unknown Product"} @ ₹{p.price} =
// //                     ₹{(p.quantity || 0) * (p.price || 0)}
// //                   </p>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="mt-4 text-right">
// //               <button
// //                 onClick={() => handleDelete(order._id)}
// //                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // // ===== EXPORT WITH ERROR BOUNDARY =====
// // export default function OrdersListWithBoundary() {
// //   return (
// //     <ErrorBoundary>
// //       <OrdersList />
// //     </ErrorBoundary>
// //   );
// // }




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

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

//   const getBadgeColor = (count) => {
//     if (count <= 3) return "bg-green-200 text-green-800";
//     if (count <= 7) return "bg-yellow-200 text-yellow-800";
//     return "bg-red-200 text-red-800";
//   };

//   const getStatusIcon = (status) => {
//     if (status === "pending") return "⏳";
//     if (status === "completed") return "✅";
//     if (status === "delivered") return "📦";
//     return "❔";
//   };

//   // ===== Summary Calculations =====
//   const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
//   const totalItems = orders.reduce(
//     (sum, o) => sum + (o.products?.reduce((pSum, p) => pSum + (p.quantity || 0), 0) || 0),
//     0
//   );
//   const avgOrderSize = orders.length ? (totalItems / orders.length).toFixed(1) : 0;

//   // ===== Prepare Chart Data =====
//   const revenueData = orders.map((o, idx) => ({ name: `O${idx + 1}`, value: o.total || 0 }));
//   const itemsData = orders.map((o, idx) => ({
//     name: `O${idx + 1}`,
//     value: o.products?.reduce((sum, p) => sum + (p.quantity || 0), 0) || 0
//   }));
//   const avgSizeData = orders.map((o, idx) => {
//     const totalItemsOrder = o.products?.reduce((sum, p) => sum + (p.quantity || 0), 0) || 0;
//     return { name: `O${idx + 1}`, value: totalItemsOrder };
//   });

//   if (loading)
//     return <p className="text-center mt-12 text-gray-500">Loading orders...</p>;
//   if (error)
//     return (
//       <p className="text-center mt-12 text-red-600 font-semibold">{error}</p>
//     );

//   return (
//     <div className="p-6 bg-cream-50 min-h-screen">
//       {/* ===== Header ===== */}
//       <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
//         Orders Dashboard
//       </h1>

//       {/* ===== Summary Cards with Charts ===== */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//         {/* Revenue Card */}
//         <div className="bg-yellow-50 rounded-xl shadow-md p-4 flex flex-col items-center">
//           <span className="text-gray-500 text-sm mb-1">Total Revenue</span>
//           <span className="text-xl font-bold text-yellow-700">₹{totalRevenue}</span>
//           <div className="w-full h-16 mt-2">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={revenueData}>
//                 <Bar dataKey="value" fill="#FBBF24" radius={[4,4,0,0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Total Items Card */}
//         <div className="bg-pink-50 rounded-xl shadow-md p-4 flex flex-col items-center">
//           <span className="text-gray-500 text-sm mb-1">Total Items</span>
//           <span className={`text-xl font-bold px-2 py-1 rounded-full ${getBadgeColor(totalItems)}`}>
//             {totalItems}
//           </span>
//           <div className="w-full h-16 mt-2">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={itemsData}>
//                 <Bar dataKey="value" fill="#F472B6" radius={[4,4,0,0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Average Order Size Card */}
//         <div className="bg-green-50 rounded-xl shadow-md p-4 flex flex-col items-center">
//           <span className="text-gray-500 text-sm mb-1">Average Order Size</span>
//           <span className={`text-xl font-bold px-2 py-1 rounded-full ${getBadgeColor(avgOrderSize)}`}>
//             {avgOrderSize}
//           </span>
//           <div className="w-full h-16 mt-2">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={avgSizeData}>
//                 <Line type="monotone" dataKey="value" stroke="#34D399" strokeWidth={2} dot={{ r: 2 }} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* ===== Orders Table ===== */}
//       <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
//         <table className="min-w-full border-collapse">
//           <thead className="bg-yellow-50 sticky top-0 text-gray-800">
//             <tr>
//               <th className="py-2 px-3 border-b">User</th>
//               <th className="py-2 px-3 border-b">Total</th>
//               <th className="py-2 px-3 border-b">Total Items</th>
//               <th className="py-2 px-3 border-b">Status</th>
//               <th className="py-2 px-3 border-b">Address</th>
//               <th className="py-2 px-3 border-b">Products</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, idx) => {
//               const totalItemsOrder = order.products?.reduce(
//                 (sum, p) => sum + (p.quantity || 0),
//                 0
//               );

//               const displayProducts = order.products?.slice(0, 2);
//               const remainingCount = (order.products?.length || 0) - 2;

//               return (
//                 <tr
//                   key={order._id}
//                   className={`transition-all duration-300 ${
//                     idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//                   } hover:bg-yellow-50 hover:shadow-lg`}
//                 >
//                   <td className="py-2 px-3 border-b">{order.user?.name || "Unknown"}</td>
//                   <td className="py-2 px-3 border-b font-semibold">₹{order.total || 0}</td>
//                   <td className="py-2 px-3 border-b">
//                     <span className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(totalItemsOrder || 0)}`}>
//                       {totalItemsOrder || 0}
//                     </span>
//                   </td>
//                   <td className="py-2 px-3 border-b">
//                     {editingStatusId === order._id ? (
//                       <div className="flex gap-2 items-center">
//                         <select
//                           className="border rounded px-2 py-1 text-sm"
//                           value={statusValue}
//                           onChange={(e) => setStatusValue(e.target.value)}
//                         >
//                           <option value="pending">Pending</option>
//                           <option value="completed">Completed</option>
//                           <option value="delivered">Delivered</option>
//                         </select>
//                         <button
//                           onClick={() => handleStatusSave(order._id)}
//                           className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700 transition-colors"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setEditingStatusId(null)}
//                           className="bg-gray-400 text-white px-2 py-1 rounded text-xs hover:bg-gray-500 transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-2">
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-bold ${
//                             order.status === "pending"
//                               ? "bg-yellow-200 text-yellow-800"
//                               : order.status === "completed"
//                               ? "bg-green-200 text-green-800"
//                               : "bg-gray-200 text-gray-700"
//                           }`}
//                         >
//                           {getStatusIcon(order.status)} {order.status || "pending"}
//                         </span>
//                         <button
//                           onClick={() => {
//                             setEditingStatusId(order._id);
//                             setStatusValue(order.status || "pending");
//                           }}
//                           className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
//                         >
//                           Edit
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                   <td className="py-2 px-3 border-b">{order.address || "-"}</td>
//                   <td className="py-2 px-3 border-b space-y-1">
//                     {displayProducts?.map((p) => (
//                       <p key={p.product?._id || Math.random()} className="text-sm">
//                         {p.quantity} x {p.product?.name || "Unknown"} @ ₹{p.price} = ₹{(p.quantity || 0) * (p.price || 0)}
//                       </p>
//                     ))}
//                     {remainingCount > 0 && (
//                       <p className="text-xs text-gray-500">+{remainingCount} more</p>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}

//             {/* ===== SUMMARY ROW ===== */}
//             <tr className="bg-gray-100 font-bold">
//               <td className="py-2 px-3 border-t">Summary</td>
//               <td className="py-2 px-3 border-t">₹{totalRevenue}</td>
//               <td className="py-2 px-3 border-t">
//                 <span className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(totalItems)}`}>
//                   {totalItems}
//                 </span>
//               </td>
//               <td className="py-2 px-3 border-t">
//                 <span className={`px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(avgOrderSize)}`}>
//                   {avgOrderSize}
//                 </span>
//               </td>
//               <td className="py-2 px-3 border-t" colSpan={2}></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
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


//kayal

// src/pages/OrdersList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  Package, 
  Edit2, 
  Save, 
  X 
} from "lucide-react";

// ===== THEME CONFIG =====
const colors = {
  primary: "rgb(214, 143, 143)", // Rose Pink
  primaryLight: "rgba(214, 143, 143, 0.1)",
  background: "#F4F7FE",
  white: "#FFFFFF",
  textHeader: "#2B3674",
  textBody: "#A3AED0",
  border: "#E0E5F2",
  success: "#05CD99",
  warning: "#FFB547",
  danger: "#EE5D50",
};

const styles = {
  container: {
    fontFamily: "'DM Sans', sans-serif",
    color: colors.textHeader,
    animation: "fadeIn 0.5s ease-out",
  },
  header: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    color: colors.textHeader,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "24px",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0px 18px 40px 0px rgba(112, 144, 176, 0.12)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  statLabel: {
    fontSize: "14px",
    color: colors.textBody,
    marginBottom: "5px",
  },
  statValue: {
    fontSize: "28px",
    fontWeight: "700",
    color: colors.textHeader,
    marginBottom: "10px",
  },
  tableContainer: {
    backgroundColor: colors.white,
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0px 18px 40px 0px rgba(112, 144, 176, 0.12)",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "900px",
  },
  th: {
    textAlign: "left",
    padding: "16px",
    color: colors.textBody,
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    borderBottom: `1px solid ${colors.border}`,
  },
  td: {
    padding: "16px",
    fontSize: "14px",
    fontWeight: "600",
    color: colors.textHeader,
    borderBottom: "1px solid #F4F7FE",
    verticalAlign: "middle",
  },
  badge: (status) => {
    let bg = colors.background;
    let color = colors.textBody;
    if (status === "completed" || status === "delivered") {
      bg = "rgba(5, 205, 153, 0.1)";
      color = colors.success;
    } else if (status === "pending") {
      bg = "rgba(255, 181, 71, 0.1)";
      color = colors.warning;
    }
    return {
      padding: "6px 12px",
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: "bold",
      backgroundColor: bg,
      color: color,
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      textTransform: "capitalize",
    };
  },
  actionBtn: {
    padding: "6px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.2s",
    marginLeft: "8px",
  },
  select: {
    padding: "6px 10px",
    borderRadius: "8px",
    border: `1px solid ${colors.border}`,
    outline: "none",
    fontSize: "13px",
    color: colors.textHeader,
    backgroundColor: colors.background,
    marginRight: "8px",
  },
};

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
        <h2 style={{ textAlign: "center", marginTop: "50px", color: colors.danger }}>
          Something went wrong in OrdersList.
        </h2>
      );
    return this.props.children;
  }
}

// ===== ORDERS LIST COMPONENT =====
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
        setOrders(res.data || []);
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

  // ===== Summary Calculations =====
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalItems = orders.reduce(
    (sum, o) => sum + (o.products?.reduce((pSum, p) => pSum + (p.quantity || 0), 0) || 0),
    0
  );
  const avgOrderSize = orders.length ? (totalItems / orders.length).toFixed(1) : 0;

  // ===== Chart Data =====
  const revenueData = orders.slice(0, 10).map((o, idx) => ({ name: `Order ${idx + 1}`, value: o.total || 0 }));
  const itemsData = orders.slice(0, 10).map((o, idx) => ({
    name: `Order ${idx + 1}`,
    value: o.products?.reduce((sum, p) => sum + (p.quantity || 0), 0) || 0
  }));

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px", color: colors.textBody }}>Loading orders...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px", color: colors.danger }}>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Orders Overview</h1>

      {/* ===== Summary Cards ===== */}
      <div style={styles.grid}>
        {/* Revenue Card */}
        <div style={styles.card}>
          <div style={{display: 'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
             <div style={{padding:'10px', borderRadius:'50%', background: 'rgba(255, 181, 71, 0.1)'}}>
                <ShoppingBag size={20} color={colors.warning} />
             </div>
             <span style={styles.statLabel}>Total Revenue</span>
          </div>
          <span style={styles.statValue}>₹{totalRevenue}</span>
          <div style={{ width: "100%", height: "80px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{borderRadius:'8px', border:'none', boxShadow:'0px 5px 15px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey="value" fill={colors.warning} radius={[4, 4, 0, 0]} barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Total Items Card */}
        <div style={styles.card}>
           <div style={{display: 'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
             <div style={{padding:'10px', borderRadius:'50%', background: colors.primaryLight}}>
                <Package size={20} color={colors.primary} />
             </div>
             <span style={styles.statLabel}>Items Sold</span>
          </div>
          <span style={styles.statValue}>{totalItems}</span>
          <div style={{ width: "100%", height: "80px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={itemsData}>
                <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{borderRadius:'8px', border:'none', boxShadow:'0px 5px 15px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey="value" fill={colors.primary} radius={[4, 4, 0, 0]} barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Avg Order Size Card */}
        <div style={styles.card}>
          <div style={{display: 'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
             <div style={{padding:'10px', borderRadius:'50%', background: 'rgba(5, 205, 153, 0.1)'}}>
                <CheckCircle size={20} color={colors.success} />
             </div>
             <span style={styles.statLabel}>Avg. Order Size</span>
          </div>
          <span style={styles.statValue}>{avgOrderSize}</span>
          <div style={{ width: "100%", height: "80px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={itemsData}>
                <Tooltip 
                     cursor={{fill: 'transparent'}}
                     contentStyle={{borderRadius:'8px', border:'none', boxShadow:'0px 5px 15px rgba(0,0,0,0.1)'}}
                />
                <Line type="monotone" dataKey="value" stroke={colors.success} strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ===== Orders Table ===== */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Total Price</th>
              <th style={styles.th}>Items</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Address</th>
              <th style={styles.th}>Product Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => {
              const totalItemsOrder = order.products?.reduce((sum, p) => sum + (p.quantity || 0), 0);
              const displayProducts = order.products?.slice(0, 2);
              const remainingCount = (order.products?.length || 0) - 2;

              return (
                <tr key={order._id}>
                  <td style={styles.td}>
                     <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                        <div style={{width:'30px', height:'30px', borderRadius:'50%', backgroundColor: colors.background, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', fontSize:'12px'}}>
                           {order.user?.name?.charAt(0).toUpperCase() || "?"}
                        </div>
                        {order.user?.name || "Guest User"}
                     </div>
                  </td>
                  <td style={styles.td}>₹{order.total || 0}</td>
                  <td style={styles.td}>
                    <span style={{fontWeight:'bold', color: colors.textHeader}}>{totalItemsOrder || 0}</span>
                  </td>
                  <td style={styles.td}>
                    {editingStatusId === order._id ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <select
                          style={styles.select}
                          value={statusValue}
                          onChange={(e) => setStatusValue(e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="delivered">Delivered</option>
                        </select>
                        <button
                          onClick={() => handleStatusSave(order._id)}
                          style={{ ...styles.actionBtn, backgroundColor: colors.success, color: colors.white }}
                        >
                          <Save size={14} />
                        </button>
                        <button
                          onClick={() => setEditingStatusId(null)}
                          style={{ ...styles.actionBtn, backgroundColor: colors.background, color: colors.textBody }}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={styles.badge(order.status)}>
                          {order.status === "pending" && <Clock size={12} />}
                          {order.status === "completed" && <CheckCircle size={12} />}
                          {order.status === "delivered" && <Package size={12} />}
                          {order.status || "pending"}
                        </span>
                        <button
                          onClick={() => {
                            setEditingStatusId(order._id);
                            setStatusValue(order.status || "pending");
                          }}
                          style={{ ...styles.actionBtn, backgroundColor: "transparent", color: colors.textBody }}
                        >
                          <Edit2 size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                  <td style={{...styles.td, maxWidth: '200px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                      {order.address || "-"}
                  </td>
                  <td style={styles.td}>
                    {displayProducts?.map((p, i) => (
                      <div key={i} style={{ fontSize: "12px", color: colors.textBody, marginBottom: "2px" }}>
                        {p.quantity}x {p.product?.name || "Item"}
                      </div>
                    ))}
                    {remainingCount > 0 && (
                      <div style={{ fontSize: "11px", color: colors.primary, fontWeight:'bold' }}>+{remainingCount} more</div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ===== EXPORT =====
export default function OrdersListWithBoundary() {
  return (
    <ErrorBoundary>
      <OrdersList />
    </ErrorBoundary>
  );
}