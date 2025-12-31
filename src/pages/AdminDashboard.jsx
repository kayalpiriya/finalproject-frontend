

// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../pages/ProductList.jsx";
import OrdersListWithBoundary from "../pages/OrdersList.jsx";
import {
  ShoppingCart,
  List,
  Settings,
  Menu,
  DollarSign,
  Eye,
  BarChart2,
  Users,
  Edit,
  Trash2,
  MessageSquare,
  Bell,
  Search,
  TrendingUp,
  Activity,
  Plus, 
  X,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart
} from "recharts";

/* ===========================================================================
   🎨 2025 NEO-SAAS STYLES
   =========================================================================== */
const THEME_COLOR = "rgb(214, 143, 143)"; // Rose Pink
const THEME_LIGHT = "rgba(214, 143, 143, 0.15)"; // Light Rose
const THEME_TEXT = "#2B3674"; // Deep Navy

const styles = {
  container: {
    backgroundColor: "#FDF2F2",
    minHeight: "100vh",
    fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
    color: THEME_TEXT,
    display: "flex",
  },
  sidebar: {
    backgroundColor: "#ffffff",
    height: "100vh",
    position: "fixed",
    zIndex: 50,
    transition: "0.3s ease",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    boxShadow: "14px 17px 40px 4px rgba(214, 143, 143, 0.08)",
    padding: "25px",
  },
  navItem: (isActive) => ({
    display: "flex",
    alignItems: "center",
    padding: "13px 20px",
    marginBottom: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    background: isActive 
      ? `linear-gradient(90deg, ${THEME_COLOR} 0%, #e8b4b4 100%)` 
      : "transparent",
    color: isActive ? "#ffffff" : "#A3AED0",
    fontWeight: isActive ? "700" : "500",
    boxShadow: isActive ? `0px 10px 20px -5px rgba(214, 143, 143, 0.4)` : "none",
    position: "relative",
  }),
  main: {
    flex: 1,
    padding: "30px",
    transition: "margin-left 0.3s ease",
    maxWidth: "100%",
    overflowX: "hidden",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0px 20px 50px 0px rgba(214, 143, 143, 0.05)", 
    border: "none",
    marginBottom: "24px",
    position: "relative",
    overflow: "hidden",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginBottom: "24px",
  },
  statIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "18px",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 15px", 
  },
  th: {
    textAlign: "left",
    color: "#A3AED0",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    padding: "0 20px",
    border: "none",
  },
  row: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.02)",
    transition: "transform 0.2s ease",
    cursor: "default",
  },
  td: {
    padding: "20px",
    fontSize: "14px",
    fontWeight: "700",
    color: THEME_TEXT,
    borderTop: "1px solid #FDF2F2",
    borderBottom: "1px solid #FDF2F2",
  },
  firstTd: {
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderLeft: "1px solid #FDF2F2",
  },
  lastTd: {
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    borderRight: "1px solid #FDF2F2",
  },
  input: {
    backgroundColor: "#FDF2F2",
    border: "none",
    borderRadius: "15px",
    padding: "12px 20px",
    color: THEME_TEXT,
    fontSize: "14px",
    outline: "none",
    width: "100%",
    fontWeight: "500",
  },
  actionBtn: {
    border: "none",
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.2s",
  },
  // --- PAGINATION STYLES ---
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: '10px',
  },
  pageBtn: (isActive) => ({
    width: '35px',
    height: '35px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: isActive ? THEME_COLOR : '#FFF',
    color: isActive ? '#FFF' : THEME_TEXT,
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: isActive ? '0 4px 10px rgba(214, 143, 143, 0.4)' : '0 2px 5px rgba(0,0,0,0.05)',
    transition: '0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
};

const StylesInjection = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
    body { background-color: #FDF2F2; margin: 0; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .hover-scale:hover { transform: scale(1.02); }
    .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(214, 143, 143, 0.2) !important; }
    .table-row:hover { transform: scale(1.01); background-color: #ffffff; box-shadow: 0px 10px 30px rgba(0,0,0,0.05) !important; z-index: 2; position: relative; }
    .page-btn:hover { background-color: #FDF2F2; color: ${THEME_COLOR}; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgb(214, 143, 143); border-radius: 10px; }
  `}</style>
);

/* ===========================================================================
   🧩 PAGINATION COMPONENT
   =========================================================================== */
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <div style={styles.paginationContainer}>
      <button 
        onClick={() => paginate(currentPage - 1)} 
        disabled={currentPage === 1}
        style={{...styles.pageBtn(false), opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'default' : 'pointer'}}
      >
        <ChevronLeft size={18} />
      </button>
      
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          style={styles.pageBtn(currentPage === number)}
          className={currentPage !== number ? "page-btn" : ""}
        >
          {number}
        </button>
      ))}

      <button 
        onClick={() => paginate(currentPage + 1)} 
        disabled={currentPage === totalPages}
        style={{...styles.pageBtn(false), opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'default' : 'pointer'}}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

/* ===========================================================================
   USERS LIST COMPONENT (WITH PAGINATION)
   =========================================================================== */
function UsersList({ searchTerm }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Show 5 users per page

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/users", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setUsers(res.data || []);
        setLoading(false);
      } catch (err) { setLoading(false); }
    };
    fetchUsers();
  }, [token]);

  // Reset to page 1 when searching
  useEffect(() => { setCurrentPage(1); }, [searchTerm]);

  const filteredUsers = users.filter(user => {
    const name = user.name || "";
    const email = user.email || "";
    const term = searchTerm.toLowerCase();
    return name.toLowerCase().includes(term) || email.toLowerCase().includes(term);
  });

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div style={{padding: '50px', textAlign: 'center', color: THEME_COLOR}}>Loading...</div>;

  return (
    <div style={{ animation: "slideUp 0.5s ease-out" }}>
      <div style={styles.statGrid}>
        {[
          { label: 'Total Users', val: users.length, color: THEME_COLOR, bg: '#FDF2F2' },
          { label: 'Admins', val: users.filter(u => u.isAdmin).length, color: '#05CD99', bg: 'rgba(5, 205, 153, 0.1)' },
        ].map((s, i) => (
          <div key={i} style={{...styles.card, display: 'flex', alignItems: 'center', padding: '20px'}} className="hover-lift">
             <div style={{...styles.statIcon, backgroundColor: s.bg, color: s.color}}>
                <Users size={24} />
             </div>
             <div>
                <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {s.label} </p>
                <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {s.val} </h3>
             </div>
          </div>
        ))}
      </div>

      <div style={styles.card}>
        <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Registered Users ({filteredUsers.length})</h3>
        <div style={{overflowX: 'auto'}}>
          <table style={styles.table}>
            <thead>
              <tr>
                {['User Info', 'Email', 'Role', 'Join Date'].map((h,i) => <th key={i} style={styles.th}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user._id} style={styles.row} className="table-row">
                  <td style={{...styles.td, ...styles.firstTd}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <div style={{width: '40px', height: '40px', borderRadius: '50%', background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td style={{...styles.td, color: '#A3AED0'}}>{user.email}</td>
                  <td style={styles.td}>
                    <span style={{
                      padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700',
                      backgroundColor: user.isAdmin ? THEME_LIGHT : 'rgba(5, 205, 153, 0.1)',
                      color: user.isAdmin ? THEME_COLOR : '#05CD99'
                    }}>
                      {user.isAdmin ? 'ADMIN' : 'CUSTOMER'}
                    </span>
                  </td>
                  <td style={{...styles.td, ...styles.lastTd, color: '#A3AED0'}}>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION CONTROLS */}
        <Pagination 
            itemsPerPage={itemsPerPage} 
            totalItems={filteredUsers.length} 
            paginate={paginate} 
            currentPage={currentPage} 
        />
      </div>
    </div>
  );
}


/* ===========================================================================
   BLOGS COMPONENT (WITH PAGINATION)
   =========================================================================== */
function BlogsList({ searchTerm }) {
  const [blogs, setBlogs] = useState([]);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // 6 blogs per page (grid layout)

  // --- MODAL STATE ---
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // --- FORM STATE ---
  const [formTitle, setFormTitle] = useState("");
  const [formSummary, setFormSummary] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formImage, setFormImage] = useState("");

  // --- FETCH BLOGS ---
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/api/blogs");
      setBlogs(res.data || []);
    } catch (e) {
      console.error("Error fetching blogs", e);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);
  useEffect(() => { setCurrentPage(1); }, [searchTerm]); // Reset page on search

  // Handlers
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`https://finalproject-backend-7rqa.onrender.com/api/blogs/${id}`);
        setBlogs((prev) => prev.filter((b) => b._id !== id));
      } catch (e) { alert("Failed to delete"); }
    }
  };

  const openCreateModal = () => {
    setIsEditing(false); setCurrentId(null); setFormTitle(""); setFormSummary(""); setFormContent(""); setFormImage(""); setShowModal(true);
  };

  const openEditModal = (blog) => {
    setIsEditing(true); setCurrentId(blog._id); setFormTitle(blog.title); setFormSummary(blog.summary); setFormContent(blog.content); setFormImage(blog.image); setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!formTitle || !formContent) return alert("Title and Content are required");
    const payload = { title: formTitle, summary: formSummary, content: formContent, image: formImage };
    try {
      const token = localStorage.getItem("token");
      const config = { headers: token ? { Authorization: `Bearer ${token}` } : {} };
      if (isEditing) {
        await axios.put(`https://finalproject-backend-7rqa.onrender.com/api/blogs/${currentId}`, payload, config);
        alert("Blog Updated!");
      } else {
        await axios.post("https://finalproject-backend-7rqa.onrender.com/api/blogs", payload, config);
        alert("Blog Created!");
      }
      setShowModal(false); fetchBlogs();
    } catch (e) { console.error(e); alert("Operation failed"); }
  };

  // Filter and Paginate
  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.title || "";
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ animation: "fadeIn 0.7s ease-out" }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
        <h3 style={{ fontSize: "24px", fontWeight: "800", margin: 0, color: THEME_TEXT }}>
          Blog Management ({filteredBlogs.length})
        </h3>
        <button
          onClick={openCreateModal}
          className="hover-lift"
          style={{
            backgroundColor: THEME_COLOR, color: "white", border: "none", padding: "10px 20px", borderRadius: "12px",
            fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", boxShadow: "0 4px 12px rgba(214, 143, 143, 0.3)"
          }}
        >
          <Plus size={18} /> Add New Blog
        </button>
      </div>

      {/* Blog Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
        {currentBlogs.map((blog) => (
          <div
            key={blog._id}
            style={{ ...styles.card, padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}
            className="hover-lift"
          >
            <div style={{ height: "160px", backgroundColor: "#E0E5F2", position: "relative" }}>
              {blog.image ? (
                <img src={blog.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'#999'}}>No Image</div>
              )}
              <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
                <button onClick={() => openEditModal(blog)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "white", border: "none", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: THEME_COLOR }}>
                  <Edit size={14} />
                </button>
                <button onClick={() => handleDelete(blog._id)} style={{ width: "32px", height: "32px", borderRadius: "50%", background: "white", border: "none", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EE5D50" }}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <div style={{ padding: "24px", flex: 1 }}>
              <p style={{ fontSize: "12px", color: "#05CD99", fontWeight: "700", textTransform: "uppercase", margin: "0 0 8px 0" }}>
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", lineHeight: "1.4" }}>{blog.title}</h4>
              <p style={{ color: "#A3AED0", fontSize: "14px", lineHeight: "1.6", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {blog.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={filteredBlogs.length} 
        paginate={paginate} 
        currentPage={currentPage} 
      />

      {/* === UNIFIED MODAL (POPUP) === */}
      {showModal && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(5px)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
          }}
        >
          <div style={{ ...styles.card, width: "600px", padding: "30px", maxHeight: "90vh", overflowY: "auto", animation: "fadeIn 0.3s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ margin: 0, color: THEME_TEXT }}>{isEditing ? "Edit Blog" : "Create New Blog"}</h2>
              <button onClick={() => setShowModal(false)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                <X size={24} color="#A3AED0" />
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>TITLE</label>
                <input value={formTitle} onChange={(e) => setFormTitle(e.target.value)} style={styles.input} placeholder="Enter catchy title..." />
              </div>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>SUMMARY</label>
                <input value={formSummary} onChange={(e) => setFormSummary(e.target.value)} style={styles.input} placeholder="Short description..." />
              </div>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>IMAGE URL</label>
                <input value={formImage} onChange={(e) => setFormImage(e.target.value)} style={styles.input} placeholder="https://..." />
              </div>
              <div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'bold', color:'#A3AED0', marginBottom:'5px'}}>CONTENT</label>
                <textarea 
                  value={formContent} onChange={(e) => setFormContent(e.target.value)} 
                  style={{ ...styles.input, borderRadius: "15px", minHeight: "150px", fontFamily: 'inherit' }} 
                  placeholder="Write your story here..." 
                />
              </div>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "10px" }}>
                <button onClick={() => setShowModal(false)} style={{ padding: "12px 24px", borderRadius: "12px", border: "none", background: "#FDF2F2", fontWeight: "600", cursor: "pointer", color: THEME_TEXT }}>Cancel</button>
                <button onClick={handleSubmit} style={{ padding: "12px 24px", borderRadius: "12px", border: "none", background: THEME_COLOR, color: "white", fontWeight: "600", cursor: "pointer", boxShadow: `0 4px 12px rgba(214, 143, 143, 0.4)` }}>{isEditing ? "Update Blog" : "Publish Blog"}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===========================================================================
   MAIN ADMIN DASHBOARD
   =========================================================================== */
function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dashboardData, setDashboardData] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (role !== "admin") { alert("Admins only!"); window.location.href = "/login"; }
  }, [role]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashRes = await axios.get("https://finalproject-backend-7rqa.onrender.com/admin/dashboard", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setDashboardData(dashRes.data || { monthlyData: [] });
        const prodRes = await axios.get("https://finalproject-backend-7rqa.onrender.com/products", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setProductsCount(Array.isArray(prodRes.data) ? prodRes.data.length : 0);
        const orderRes = await axios.get("https://finalproject-backend-7rqa.onrender.com/orders", { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        setOrdersCount(Array.isArray(orderRes.data) ? orderRes.data.length : 0);
      } catch (err) { console.error(err); }
    };
    fetchData();
  }, [token]);

  const NavItem = ({ page, icon: Icon, label, count }) => {
    const isActive = activePage === page;
    return (
      <li
        onClick={() => {
            setActivePage(page);
            setSearchTerm(""); // Reset search
        }}
        style={styles.navItem(isActive)}
        className="hover-scale"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Icon size={20} />
          {!sidebarCollapsed && <span>{label}</span>}
        </div>
        {!sidebarCollapsed && count > 0 && (
          <span style={{ 
            marginLeft: 'auto', 
            background: isActive ? 'rgba(255,255,255,0.2)' : '#FDF2F2', 
            color: isActive ? '#ffffff' : THEME_TEXT, 
            padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '800' 
          }}>
            {count}
          </span>
        )}
      </li>
    );
  };

  return (
    <>
      <StylesInjection />
      <Navbar />
      <div style={{...styles.container, paddingTop: '64px'}}>
        
        {/* SIDEBAR */}
        <aside style={{
            ...styles.sidebar, 
            width: sidebarCollapsed ? "80px" : "280px",
            padding: "20px"
        }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px'}}>
            {!sidebarCollapsed && (
                <h2 style={{margin: 0, fontSize: '24px', fontWeight: '800', color: THEME_TEXT, textTransform: 'uppercase'}}>
                    Admin<span style={{color: THEME_COLOR}}>Panel.</span>
                </h2>
            )}
            <Menu size={24} style={{color: '#A3AED0', cursor: 'pointer'}} onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <NavItem page="dashboard" icon={BarChart2} label="Dashboard" />
            <NavItem page="list" icon={List} label="Products" count={productsCount} />
            <NavItem page="orders" icon={ShoppingCart} label="Orders" count={ordersCount} />
            <NavItem page="users" icon={Users} label="Customers" />
            {/* <NavItem page="chats" icon={MessageSquare} label="Chats" /> */}
            <NavItem page="blogs" icon={Edit} label="Blogs" />
            <NavItem page="settings" icon={Settings} label="Settings" />
          </ul>
        </aside>

        {/* MAIN */}
        <main style={{
            ...styles.main, 
            marginLeft: sidebarCollapsed ? "100px" : "310px"
        }}>
          {/* Header */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', animation: 'fadeIn 0.8s'}}>
             <div>
                <p style={{margin: 0, fontSize: '14px', color: '#707EAE', fontWeight: '500'}}>Pages / {activePage.charAt(0).toUpperCase() + activePage.slice(1)}</p>
                <h1 style={{margin: '5px 0 0', fontSize: '34px', fontWeight: '700', color: THEME_TEXT}}>Main Dashboard</h1>
             </div>
             <div style={{...styles.card, padding: '10px', borderRadius: '30px', marginBottom: 0, display: 'flex', alignItems: 'center', gap: '15px'}}>
                 {/* SEARCH */}
                 <div style={{background: '#FDF2F2', padding: '10px 16px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', width: '250px'}}>
                    <Search size={16} color={THEME_COLOR} />
                    <input 
                        placeholder="Search..." 
                        style={{border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', width: '100%', color: THEME_TEXT}} 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <Bell size={20} color="#A3AED0" style={{cursor: 'pointer'}} />
                 <div style={{width: '40px', height: '40px', borderRadius: '50%', background: THEME_COLOR, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>AP</div>
             </div>
          </div>

          {/* DASHBOARD CONTENT */}
          {activePage === "dashboard" && dashboardData && (
            <div style={{animation: "fadeIn 0.5s ease-out"}}>
              {/* Stats */}
              <div style={styles.statGrid}>
                {[
                    { title: 'Earnings', val: `LKR${dashboardData.totalEarnings}`, icon: DollarSign, color: THEME_COLOR },
                    { title: 'Total Sales', val: dashboardData.totalSales, icon: ShoppingCart, color: '#05CD99' },
                    { title: 'Activity', val: dashboardData.totalViews, icon: Activity, color: '#FFB547' },
                ].map((item, i) => (
                    <div key={i} style={styles.card} className="hover-lift">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{...styles.statIcon, backgroundColor: `${item.color}20`, color: item.color}}>
                                <item.icon size={28} />
                            </div>
                            <div>
                                <p style={{margin: 0, color: '#A3AED0', fontSize: '14px'}}> {item.title} </p>
                                <h3 style={{margin: 0, fontSize: '24px', fontWeight: '700', color: THEME_TEXT}}> {item.val} </h3>
                            </div>
                        </div>
                    </div>
                ))}
              </div>

              {/* Charts */}
              <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px'}}>
                <div style={{...styles.card, minHeight: '400px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
                        <h3 style={{margin: 0, fontSize: '22px', fontWeight: '700', color: THEME_TEXT}}>Revenue Stream</h3>
                        <div style={{background: '#FDF2F2', padding: '8px', borderRadius: '10px'}}><BarChart2 size={20} color={THEME_COLOR} /></div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={dashboardData.monthlyData || []}>
                            <defs>
                                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={THEME_COLOR} stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor={THEME_COLOR} stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E5F2" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#A3AED0', fontSize: 12}} />
                            <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                            <Area type="monotone" dataKey="sales" stroke={THEME_COLOR} strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div style={{...styles.card, background: `linear-gradient(135deg, #e8b4b4 0%, ${THEME_COLOR} 100%)`, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <div style={{width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <TrendingUp size={40} color="white" />
                    </div>
                    <h3 style={{margin: '0 0 10px 0', fontSize: '22px'}}>Your Growth</h3>
                    <p style={{margin: 0, opacity: 0.8, fontSize: '14px'}}>Sales are up 35% this month.</p>
                    <button style={{marginTop: '20px', padding: '12px 24px', background: 'white', color: THEME_COLOR, border: 'none', borderRadius: '20px', fontWeight: '700', cursor: 'pointer'}}>View Report</button>
                </div>
              </div>
            </div>
          )}

          {/* CONTENT SWITCHER */}
          {activePage === "list" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><ProductList /></div>}
          {activePage === "orders" && <div style={{...styles.card, padding: '0', overflow: 'hidden'}}><OrdersListWithBoundary /></div>}
          
          {/* PASS SEARCH TERM TO SUB COMPONENTS */}
          {activePage === "users" && <UsersList searchTerm={searchTerm} />}
          {/* {activePage === "chats" && <ChatsList searchTerm={searchTerm} />} */}
          {activePage === "blogs" && <BlogsList searchTerm={searchTerm} />}

          {activePage === "settings" && (
             <div style={{...styles.card, minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Settings size={64} color="#E0E5F2" />
                <h3 style={{color: THEME_TEXT, marginTop: '20px'}}>Settings Configuration</h3>
             </div>
          )}

        </main>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;