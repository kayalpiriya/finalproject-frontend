

// src/pages/OrdersList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  BarChart, Bar, LineChart, Line, ResponsiveContainer, Tooltip 
} from "recharts";
import { 
  ShoppingBag, Clock, CheckCircle, Package, Edit2, Save, X, ChevronLeft, ChevronRight 
} from "lucide-react";

// ===== THEME CONFIG =====
const colors = {
  primary: "rgb(214, 143, 143)", 
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
  // --- PAGINATION STYLES ---
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: '10px',
  },
  pageBtn: (active) => ({
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: active ? colors.primary : colors.background,
    color: active ? colors.white : colors.textHeader,
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s'
  })
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
      return <h2 style={{ textAlign: "center", marginTop: "50px", color: colors.danger }}>Something went wrong in OrdersList.</h2>;
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
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/orders", {
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

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleStatusSave = async (orderId) => {
    try {
      const res = await axios.put(
        `https://finalproject-backend-7rqa.onrender.com/orders/${orderId}`,
        { status: statusValue },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders((prev) => prev.map((o) => (o._id === orderId ? res.data : o)));
      setEditingStatusId(null);
      setStatusValue("");
    } catch (err) {
      console.error(err);
      alert("Failed to update status. Try again.");
    }
  };

  // Summary Calculations (Based on ALL orders, not just current page)
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalItems = orders.reduce((sum, o) => sum + (o.products?.reduce((pSum, p) => pSum + (p.quantity || 0), 0) || 0), 0);
  const avgOrderSize = orders.length ? (totalItems / orders.length).toFixed(1) : 0;

  // Chart Data
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
        <div style={styles.card}>
          <div style={{display: 'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
             <div style={{padding:'10px', borderRadius:'50%', background: 'rgba(255, 181, 71, 0.1)'}}><ShoppingBag size={20} color={colors.warning} /></div>
             <span style={styles.statLabel}>Total Revenue</span>
          </div>
          <span style={styles.statValue}>LKR{totalRevenue}</span>
          <div style={{ width: "100%", height: "80px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}><Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius:'8px', border:'none', boxShadow:'0px 5px 15px rgba(0,0,0,0.1)'}} /><Bar dataKey="value" fill={colors.warning} radius={[4, 4, 0, 0]} barSize={15} /></BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={styles.card}>
           <div style={{display: 'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
             <div style={{padding:'10px', borderRadius:'50%', background: colors.primaryLight}}><Package size={20} color={colors.primary} /></div>
             <span style={styles.statLabel}>Items Sold</span>
          </div>
          <span style={styles.statValue}>{totalItems}</span>
          <div style={{ width: "100%", height: "80px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={itemsData}><Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius:'8px', border:'none', boxShadow:'0px 5px 15px rgba(0,0,0,0.1)'}} /><Bar dataKey="value" fill={colors.primary} radius={[4, 4, 0, 0]} barSize={15} /></BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={styles.card}>
          <div style={{display: 'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
             <div style={{padding:'10px', borderRadius:'50%', background: 'rgba(5, 205, 153, 0.1)'}}><CheckCircle size={20} color={colors.success} /></div>
             <span style={styles.statLabel}>Avg. Order Size</span>
          </div>
          <span style={styles.statValue}>{avgOrderSize}</span>
          <div style={{ width: "100%", height: "80px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={itemsData}><Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius:'8px', border:'none', boxShadow:'0px 5px 15px rgba(0,0,0,0.1)'}} /><Line type="monotone" dataKey="value" stroke={colors.success} strokeWidth={3} dot={false} /></LineChart>
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
            {currentOrders.map((order, idx) => {
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
                  <td style={styles.td}>LKR{order.total || 0}</td>
                  <td style={styles.td}>
                    <span style={{fontWeight:'bold', color: colors.textHeader}}>{totalItemsOrder || 0}</span>
                  </td>
                  <td style={styles.td}>
                    {editingStatusId === order._id ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <select style={styles.select} value={statusValue} onChange={(e) => setStatusValue(e.target.value)}>
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="delivered">Delivered</option>
                        </select>
                        <button onClick={() => handleStatusSave(order._id)} style={{ ...styles.actionBtn, backgroundColor: colors.success, color: colors.white }}><Save size={14} /></button>
                        <button onClick={() => setEditingStatusId(null)} style={{ ...styles.actionBtn, backgroundColor: colors.background, color: colors.textBody }}><X size={14} /></button>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={styles.badge(order.status)}>
                          {order.status === "pending" && <Clock size={12} />}
                          {order.status === "completed" && <CheckCircle size={12} />}
                          {order.status === "delivered" && <Package size={12} />}
                          {order.status || "pending"}
                        </span>
                        <button onClick={() => { setEditingStatusId(order._id); setStatusValue(order.status || "pending"); }} style={{ ...styles.actionBtn, backgroundColor: "transparent", color: colors.textBody }}><Edit2 size={14} /></button>
                      </div>
                    )}
                  </td>
                  <td style={{...styles.td, maxWidth: '200px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{order.address || "-"}</td>
                  <td style={styles.td}>
                    {displayProducts?.map((p, i) => (<div key={i} style={{ fontSize: "12px", color: colors.textBody, marginBottom: "2px" }}>{p.quantity}x {p.product?.name || "Item"}</div>))}
                    {remainingCount > 0 && <div style={{ fontSize: "11px", color: colors.primary, fontWeight:'bold' }}>+{remainingCount} more</div>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* --- PAGINATION CONTROLS --- */}
        {orders.length > 0 && (
          <div style={styles.paginationContainer}>
             <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} style={{...styles.pageBtn(false), opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'default' : 'pointer'}}><ChevronLeft size={16} /></button>
             
             {Array.from({ length: totalPages }, (_, i) => (
                <button key={i + 1} onClick={() => paginate(i + 1)} style={styles.pageBtn(currentPage === i + 1)}>{i + 1}</button>
             ))}

             <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} style={{...styles.pageBtn(false), opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'default' : 'pointer'}}><ChevronRight size={16} /></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OrdersListWithBoundary() {
  return (
    <ErrorBoundary>
      <OrdersList />
    </ErrorBoundary>
  );
}