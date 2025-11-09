import React, { useEffect, useState } from "react";

// ✅ Import the specific API calls from the separate files
import { getAllUsers } from "../../api/auth.js";
import { getAllProducts } from "../../api/product.js";
import { getAllOrders } from "../../api/order.js";
import { getPayments } from "../../api/payment.js";

function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await getAllUsers();
        const ordersRes = await getAllOrders();
        const productsRes = await getAllProducts();
        const paymentsRes = await getPayments();

        setUsersCount(usersRes.data.length);
        setOrdersCount(ordersRes.data.length);
        setProductsCount(productsRes.data.length);

        const totalRevenue = paymentsRes.data.reduce((sum, p) => sum + p.amount, 0);
        setRevenue(totalRevenue);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>🍰 Bakery Admin Dashboard</h1>
      {/* dashboard cards */}
    </div>
  );
}

export default Dashboard;
