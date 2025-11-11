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


import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./OrdersList.css";

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/orders");
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError("Failed to load orders");
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="orders-list-container">
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-card">
            <h4>Order by: {order.user}</h4>
            <p>Total: ₹{order.total}</p>
            <p>Status: {order.status}</p>
            <div>
              {order.products.map((p) => (
                <p key={p.product._id}>
                  {p.quantity} x {p.product.name} @ ₹{p.price}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrdersList;
