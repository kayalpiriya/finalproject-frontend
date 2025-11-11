// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]); // initialize as empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("/products"); // your backend route
//         setProducts(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//         setError("Failed to load products. Try again later.");
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Delete product
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`/products/${id}`);
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product");
//     }
//   };

//   // Placeholder for edit functionality
//   const handleEdit = (product) => {
//     alert(`Edit product: ${product.name}\nImplement edit modal or page`);
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="product-list-container">
//       <h2>Product List</h2>
//       {products.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="product-grid">
//           {products.map((p) => (
//             <div key={p._id} className="product-card">
//               <h3>{p.name}</h3>
//               <p>{p.description}</p>
//               <p>Stock: {p.stock}</p>
//               <p>Price: ₹{p.price}</p>
//               {p.img && <img src={p.img} alt={p.name} width="100" />}
//               <div className="product-actions">
//                 <button onClick={() => handleEdit(p)}>Edit</button>
//                 <button onClick={() => handleDelete(p._id)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    img: null
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:5000/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete product");
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product._id);
    setEditData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      img: null
    });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setEditData({
      name: "",
      price: "",
      stock: "",
      description: "",
      img: null
    });
  };

  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setEditData({ ...editData, img: files[0] });
    } else {
      setEditData({ ...editData, [name]: value });
    }
  };

  const saveEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editData.name);
      formData.append("price", Number(editData.price));
      formData.append("stock", Number(editData.stock));
      formData.append("description", editData.description);
      if (editData.img) formData.append("img", editData.img);

      const res = await axios.put(
        `http://localhost:5000/products/${editingProduct}`,
        formData,
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
      );

      setProducts(products.map(p => (p._id === editingProduct ? res.data : p)));
      cancelEdit();
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update product");
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <div key={p._id} className="product-card">
              {editingProduct === p._id ? (
                <>
                  <input name="name" value={editData.name} onChange={handleEditChange} />
                  <input name="price" type="number" value={editData.price} onChange={handleEditChange} />
                  <input name="stock" type="number" value={editData.stock} onChange={handleEditChange} />
                  <input name="description" value={editData.description} onChange={handleEditChange} />
                  <input type="file" name="img" onChange={handleEditChange} />
                  <div className="product-actions">
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <p>Stock: {p.stock}</p>
                  <p>Price: ₹{p.price}</p>
                  {p.img && <img src={p.img} alt={p.name} width="100" />}
                  <div className="product-actions">
                    <button onClick={() => startEdit(p)}>Edit</button>
                    <button onClick={() => handleDelete(p._id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
