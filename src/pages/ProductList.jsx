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

// // export default ProductList;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editData, setEditData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     description: "",
//     img: null
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("https://finalproject-backend-7rqa.onrender.com");
//         setProducts(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`https://finalproject-backend-7rqa.onrender.com/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product");
//     }
//   };

//   const startEdit = (product) => {
//     setEditingProduct(product._id);
//     setEditData({
//       name: product.name,
//       price: product.price,
//       stock: product.stock,
//       description: product.description,
//       img: null
//     });
//   };

//   const cancelEdit = () => {
//     setEditingProduct(null);
//     setEditData({
//       name: "",
//       price: "",
//       stock: "",
//       description: "",
//       img: null
//     });
//   };

//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setEditData({ ...editData, img: files[0] });
//     } else {
//       setEditData({ ...editData, [name]: value });
//     }
//   };

//   const saveEdit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", editData.name);
//       formData.append("price", Number(editData.price));
//       formData.append("stock", Number(editData.stock));
//       formData.append("description", editData.description);
//       if (editData.img) formData.append("img", editData.img);

//       const res = await axios.put(
//         `https://finalproject-backend-7rqa.onrender.com/${editingProduct}`,
//         formData,
//         { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
//       );

//       setProducts(products.map(p => (p._id === editingProduct ? res.data : p)));
//       cancelEdit();
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Failed to update product");
//     }
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
//               {editingProduct === p._id ? (
//                 <>
//                   <input name="name" value={editData.name} onChange={handleEditChange} />
//                   <input name="price" type="number" value={editData.price} onChange={handleEditChange} />
//                   <input name="stock" type="number" value={editData.stock} onChange={handleEditChange} />
//                   <input name="description" value={editData.description} onChange={handleEditChange} />
//                   <input type="file" name="img" onChange={handleEditChange} />
//                   <div className="product-actions">
//                     <button onClick={saveEdit}>Save</button>
//                     <button onClick={cancelEdit}>Cancel</button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <h3>{p.name}</h3>
//                   <p>{p.description}</p>
//                   <p>Stock: {p.stock}</p>
//                   <p>Price: ₹{p.price}</p>
//                   {p.img && <img src={p.img} alt={p.name} width="100" />}
//                   <div className="product-actions">
//                     <button onClick={() => startEdit(p)}>Edit</button>
//                     <button onClick={() => handleDelete(p._id)}>Delete</button>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editData, setEditData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     description: "",
//     img: null,
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("https://finalproject-backend-7rqa.onrender.com");
//         setProducts(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`https://finalproject-backend-7rqa.onrender.com/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete product");
//     }
//   };

//   const startEdit = (product) => {
//     setEditingProduct(product._id);
//     setEditData({
//       name: product.name,
//       price: product.price,
//       stock: product.stock,
//       description: product.description,
//       img: null,
//     });
//   };

//   const cancelEdit = () => {
//     setEditingProduct(null);
//     setEditData({ name: "", price: "", stock: "", description: "", img: null });
//   };

//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") setEditData({ ...editData, img: files[0] });
//     else setEditData({ ...editData, [name]: value });
//   };

//   const saveEdit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", editData.name);
//       formData.append("price", Number(editData.price));
//       formData.append("stock", Number(editData.stock));
//       formData.append("description", editData.description);
//       if (editData.img) formData.append("img", editData.img);

//       const res = await axios.put(
//         `https://finalproject-backend-7rqa.onrender.com/${editingProduct}`,
//         formData,
//         { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
//       );

//       setProducts(products.map((p) => (p._id === editingProduct ? res.data : p)));
//       cancelEdit();
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Failed to update product");
//     }
//   };

//   if (loading) return <p className="text-center mt-12 text-gray-500">Loading products...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600">{error}</p>;

//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
//       {products.length === 0 ? (
//         <p className="text-center col-span-full text-gray-500">No products found.</p>
//       ) : (
//         products.map((p) => (
//           <div
//             key={p._id}
//             className="bg-white shadow-lg rounded-xl p-5 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
//           >
//             {editingProduct === p._id ? (
//               <div className="space-y-3">
//                 <input
//                   name="name"
//                   value={editData.name}
//                   onChange={handleEditChange}
//                   className="border p-2 rounded w-full"
//                   placeholder="Name"
//                 />
//                 <input
//                   name="price"
//                   type="number"
//                   value={editData.price}
//                   onChange={handleEditChange}
//                   className="border p-2 rounded w-full"
//                   placeholder="Price"
//                 />
//                 <input
//                   name="stock"
//                   type="number"
//                   value={editData.stock}
//                   onChange={handleEditChange}
//                   className="border p-2 rounded w-full"
//                   placeholder="Stock"
//                 />
//                 <input
//                   name="description"
//                   value={editData.description}
//                   onChange={handleEditChange}
//                   className="border p-2 rounded w-full"
//                   placeholder="Description"
//                 />
//                 <input type="file" name="img" onChange={handleEditChange} />
//                 <div className="flex justify-between mt-2">
//                   <button
//                     onClick={saveEdit}
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={cancelEdit}
//                     className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <h3 className="text-lg font-bold text-yellow-700 mb-2">{p.name}</h3>
//                 <p className="text-gray-700 mb-1">{p.description}</p>
//                 <p className="text-gray-600 mb-1">Stock: {p.stock}</p>
//                 <p className="text-gray-600 mb-3 font-semibold">Price: ₹{p.price}</p>
//                 {p.img && <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded mb-3" />}
//                 <div className="flex justify-between">
//                   <button
//                     onClick={() => startEdit(p)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default ProductList;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");

//   // ===== Add Product Modal State =====
//   const [addModal, setAddModal] = useState(false);
//   const [addData, setAddData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     description: "",
//     img: null,
//   });

//   // ===== Edit Product Modal State =====
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editData, setEditData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     description: "",
//     img: null,
//   });

//   // ===== Fetch All Products =====
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("https://finalproject-backend-7rqa.onrender.com");
//         setProducts(res.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // ===== Handle Add Input Change =====
//   const handleAddChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setAddData({ ...addData, img: files[0] });
//     } else {
//       setAddData({ ...addData, [name]: value });
//     }
//   };

//   // ===== Save New Product =====
//   const saveNewProduct = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", addData.name);
//       formData.append("price", addData.price);
//       formData.append("stock", addData.stock);
//       formData.append("description", addData.description);
//       if (addData.img) formData.append("file", addData.img);

//       const res = await axios.post(
//         "https://finalproject-backend-7rqa.onrender.com",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setProducts([...products, res.data]);
//       setAddModal(false);

//       setAddData({ name: "", price: "", stock: "", description: "", img: null });

//       alert("Product Added!");
//     } catch (err) {
//       alert("Failed to add product");
//     }
//   };

//   // ===== Open Edit Modal =====
//   const startEdit = (product) => {
//     setEditingProduct(product._id);
//     setEditData({
//       name: product.name,
//       price: product.price,
//       stock: product.stock,
//       description: product.description,
//       img: null,
//     });
//   };

//   // ===== Handle Edit Change =====
//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setEditData({ ...editData, img: files[0] });
//     } else {
//       setEditData({ ...editData, [name]: value });
//     }
//   };

//   // ===== Save Edited Product =====
//   const saveEdit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", editData.name);
//       formData.append("price", editData.price);
//       formData.append("stock", editData.stock);
//       formData.append("description", editData.description);
//       if (editData.img) formData.append("img", editData.img);

//       const res = await axios.put(
//         `https://finalproject-backend-7rqa.onrender.com/${editingProduct}`,
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setProducts(
//         products.map((p) =>
//           p._id === editingProduct ? res.data : p
//         )
//       );

//       setEditingProduct(null);
//     } catch (err) {
//       alert("Failed to update product");
//     }
//   };

//   // ===== Delete Product =====
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;

//     try {
//       await axios.delete(`https://finalproject-backend-7rqa.onrender.com/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   if (loading) return <p className="text-center mt-12">Loading...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600">{error}</p>;

//   return (
//     <div className="p-6">

//       {/* ===== TOP BAR WITH ADD BUTTON ===== */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold text-gray-700">Product List</h2>

//         <button
//           onClick={() => setAddModal(true)}
//           className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Add New Product +
//         </button>
//       </div>

//       {/* ===== TABLE ===== */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border p-2">Image</th>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Price</th>
//               <th className="border p-2">Stock</th>
//               <th className="border p-2">Description</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((p) => (
//               <tr key={p._id} className="text-center">
//                 <td className="border p-2">
//                   {p.img ? (
//                     <img src={p.img} alt={p.name}
//                       className="w-16 h-16 object-cover mx-auto rounded"
//                     />
//                   ) : "No Image"}
//                 </td>

//                 <td className="border p-2">{p.name}</td>
//                 <td className="border p-2">₹{p.price}</td>
//                 <td className="border p-2">{p.stock}</td>
//                 <td className="border p-2">{p.description}</td>

//                 <td className="border p-2 space-x-2">
//                   <button
//                     onClick={() => startEdit(p)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//       {/* ===================== ADD PRODUCT POPUP ===================== */}

//       {addModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 
//                         flex justify-center items-center p-4">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">

//             <h3 className="text-lg font-bold mb-4 text-gray-700">
//               Add New Product
//             </h3>

//             <div className="space-y-3">
//               <input name="name" placeholder="Name" onChange={handleAddChange}
//                 className="border p-2 rounded w-full" />

//               <input name="price" placeholder="Price" type="number"
//                 onChange={handleAddChange} className="border p-2 rounded w-full" />

//               <input name="stock" placeholder="Stock" type="number"
//                 onChange={handleAddChange} className="border p-2 rounded w-full" />

//               <textarea name="description" placeholder="Description"
//                 onChange={handleAddChange}
//                 className="border p-2 rounded w-full" />

//               <input type="file" name="img" onChange={handleAddChange} />

//               <div className="flex justify-between mt-4">
//                 <button onClick={saveNewProduct}
//                   className="bg-green-600 text-white px-4 py-2 rounded">
//                   Save
//                 </button>

//                 <button onClick={() => setAddModal(false)}
//                   className="bg-gray-400 text-white px-4 py-2 rounded">
//                   Cancel
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* ===================== EDIT PRODUCT POPUP ===================== */}

//       {editingProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 
//                         flex justify-center items-center p-4">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">

//             <h3 className="text-lg font-bold mb-4 text-gray-700">
//               Edit Product
//             </h3>

//             <div className="space-y-3">

//               <input name="name" value={editData.name}
//                 onChange={handleEditChange}
//                 className="border p-2 rounded w-full" />

//               <input name="price" value={editData.price}
//                 onChange={handleEditChange} type="number"
//                 className="border p-2 rounded w-full" />

//               <input name="stock" value={editData.stock}
//                 onChange={handleEditChange} type="number"
//                 className="border p-2 rounded w-full" />

//               <textarea name="description" value={editData.description}
//                 onChange={handleEditChange}
//                 className="border p-2 rounded w-full" />

//               <input type="file" name="img" onChange={handleEditChange} />

//               <div className="flex justify-between mt-4">
//                 <button onClick={saveEdit}
//                   className="bg-green-600 text-white px-4 py-2 rounded">
//                   Save
//                 </button>

//                 <button onClick={() => setEditingProduct(null)}
//                   className="bg-gray-400 text-white px-4 py-2 rounded">
//                   Cancel
//                 </button>
//               </div>

//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default ProductList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");

//   // ===== Add Product Modal State =====
//   const [addModal, setAddModal] = useState(false);
//   const [addData, setAddData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     description: "",
//     img: null,
//   });

//   // ===== Edit Product Modal State =====
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editData, setEditData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     description: "",
//     img: null,
//   });

//   // ===== Fetch All Products =====
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("https://finalproject-backend-7rqa.onrender.com");
//         setProducts(res.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // ===== Handle Add Input Change =====
//   const handleAddChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setAddData({ ...addData, img: files[0] });
//     } else {
//       setAddData({ ...addData, [name]: value });
//     }
//   };

//   // ===== Save New Product =====
//   const saveNewProduct = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", addData.name);
//       formData.append("price", addData.price);
//       formData.append("stock", addData.stock);
//       formData.append("description", addData.description);
//       if (addData.img) formData.append("img", addData.img); // ✅ correct field name

//       const res = await axios.post(
//         "https://finalproject-backend-7rqa.onrender.com",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setProducts([...products, res.data]);
//       setAddModal(false);

//       setAddData({ name: "", price: "", stock: "", description: "", img: null });

//       alert("Product Added!");
//     } catch (err) {
//       alert("Failed to add product: " + err.response?.data?.message);
//     }
//   };

//   // ===== Open Edit Modal =====
//   const startEdit = (product) => {
//     setEditingProduct(product._id);
//     setEditData({
//       name: product.name,
//       price: product.price,
//       stock: product.stock,
//       description: product.description,
//       img: null,
//     });
//   };

//   // ===== Handle Edit Change =====
//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setEditData({ ...editData, img: files[0] });
//     } else {
//       setEditData({ ...editData, [name]: value });
//     }
//   };

//   // ===== Save Edited Product =====
//   const saveEdit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", editData.name);
//       formData.append("price", editData.price);
//       formData.append("stock", editData.stock);
//       formData.append("description", editData.description);
//       if (editData.img) formData.append("img", editData.img); // ✅ correct field name

//       const res = await axios.put(
//         `https://finalproject-backend-7rqa.onrender.com/${editingProduct}`,
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setProducts(
//         products.map((p) =>
//           p._id === editingProduct ? res.data : p
//         )
//       );

//       setEditingProduct(null);
//     } catch (err) {
//       alert("Failed to update product: " + err.response?.data?.message);
//     }
//   };

//   // ===== Delete Product =====
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;

//     try {
//       await axios.delete(`https://finalproject-backend-7rqa.onrender.com/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       alert("Delete failed: " + err.response?.data?.message);
//     }
//   };

//   if (loading) return <p className="text-center mt-12">Loading...</p>;
//   if (error) return <p className="text-center mt-12 text-red-600">{error}</p>;

//   return (
//     <div className="p-6">

//       {/* ===== TOP BAR WITH ADD BUTTON ===== */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold text-gray-700">Product List</h2>

//         <button
//           onClick={() => setAddModal(true)}
//           className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Add New Product +
//         </button>
//       </div>

//       {/* ===== TABLE ===== */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border p-2">Image</th>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Price</th>
//               <th className="border p-2">Stock</th>
//               <th className="border p-2">Description</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((p) => (
//               <tr key={p._id} className="text-center">
//                 <td className="border p-2">
//                   {p.img ? (
//                     <img src={p.img} alt={p.name}
//                       className="w-16 h-16 object-cover mx-auto rounded"
//                     />
//                   ) : "No Image"}
//                 </td>

//                 <td className="border p-2">{p.name}</td>
//                 <td className="border p-2">₹{p.price}</td>
//                 <td className="border p-2">{p.stock}</td>
//                 <td className="border p-2">{p.description}</td>

//                 <td className="border p-2 space-x-2">
//                   <button
//                     onClick={() => startEdit(p)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//       {/* ===================== ADD PRODUCT POPUP ===================== */}
//       {addModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">

//             <h3 className="text-lg font-bold mb-4 text-gray-700">
//               Add New Product
//             </h3>

//             <div className="space-y-3">
//               <input name="name" placeholder="Name" onChange={handleAddChange}
//                 className="border p-2 rounded w-full" />

//               <input name="price" placeholder="Price" type="number"
//                 onChange={handleAddChange} className="border p-2 rounded w-full" />

//               <input name="stock" placeholder="Stock" type="number"
//                 onChange={handleAddChange} className="border p-2 rounded w-full" />

//               <textarea name="description" placeholder="Description"
//                 onChange={handleAddChange}
//                 className="border p-2 rounded w-full" />

//               <input type="file" name="img" onChange={handleAddChange} />

//               <div className="flex justify-between mt-4">
//                 <button onClick={saveNewProduct}
//                   className="bg-green-600 text-white px-4 py-2 rounded">
//                   Save
//                 </button>

//                 <button onClick={() => setAddModal(false)}
//                   className="bg-gray-400 text-white px-4 py-2 rounded">
//                   Cancel
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* ===================== EDIT PRODUCT POPUP ===================== */}
//       {editingProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">

//             <h3 className="text-lg font-bold mb-4 text-gray-700">
//               Edit Product
//             </h3>

//             <div className="space-y-3">

//               <input name="name" value={editData.name}
//                 onChange={handleEditChange}
//                 className="border p-2 rounded w-full" />

//               <input name="price" value={editData.price}
//                 onChange={handleEditChange} type="number"
//                 className="border p-2 rounded w-full" />

//               <input name="stock" value={editData.stock}
//                 onChange={handleEditChange} type="number"
//                 className="border p-2 rounded w-full" />

//               <textarea name="description" value={editData.description}
//                 onChange={handleEditChange}
//                 className="border p-2 rounded w-full" />

//               <input type="file" name="img" onChange={handleEditChange} />

//               <div className="flex justify-between mt-4">
//                 <button onClick={saveEdit}
//                   className="bg-green-600 text-white px-4 py-2 rounded">
//                   Save
//                 </button>

//                 <button onClick={() => setEditingProduct(null)}
//                   className="bg-gray-400 text-white px-4 py-2 rounded">
//                   Cancel
//                 </button>
//               </div>

//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default ProductList;




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // ==========================================
// // 🎨 INTERNAL STYLES & ANIMATIONS (2025 UI)
// // ==========================================
// const styles = {
//   container: {
//     fontFamily: "'Inter', 'Segoe UI', sans-serif",
//     padding: "40px",
//     backgroundColor: "#f8f9fd",
//     minHeight: "100vh",
//     color: "#1f2937",
//   },
//   headerContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "30px",
//     animation: "slideDown 0.6s ease-out",
//   },
//   title: {
//     fontSize: "2rem",
//     fontWeight: "800",
//     background: "linear-gradient(135deg, #111827 0%, #4b5563 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     letterSpacing: "-0.02em",
//   },
//   addButton: {
//     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", // Indigo to Violet
//     color: "white",
//     border: "none",
//     padding: "12px 24px",
//     borderRadius: "12px",
//     fontWeight: "600",
//     fontSize: "0.95rem",
//     cursor: "pointer",
//     boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.5)",
//     transition: "all 0.3s ease",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
//   tableContainer: {
//     overflowX: "auto",
//     borderRadius: "20px",
//     boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)",
//     background: "rgba(255, 255, 255, 0.8)",
//     backdropFilter: "blur(10px)",
//     border: "1px solid rgba(255,255,255,0.5)",
//     animation: "fadeIn 0.8s ease-out",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: "0 10px", // Gap between rows
//     padding: "0 20px",
//   },
//   th: {
//     textAlign: "left",
//     padding: "20px",
//     color: "#9ca3af",
//     textTransform: "uppercase",
//     fontSize: "0.75rem",
//     fontWeight: "700",
//     letterSpacing: "0.05em",
//     borderBottom: "none",
//   },
//   row: {
//     backgroundColor: "#ffffff",
//     transition: "transform 0.2s, box-shadow 0.2s",
//     cursor: "default",
//     position: "relative",
//   },
//   td: {
//     padding: "20px",
//     borderTop: "1px solid #f3f4f6",
//     borderBottom: "1px solid #f3f4f6",
//     fontSize: "0.95rem",
//     verticalAlign: "middle",
//   },
//   firstTd: {
//     borderTopLeftRadius: "16px",
//     borderBottomLeftRadius: "16px",
//     borderLeft: "1px solid #f3f4f6",
//   },
//   lastTd: {
//     borderTopRightRadius: "16px",
//     borderBottomRightRadius: "16px",
//     borderRight: "1px solid #f3f4f6",
//   },
//   img: {
//     width: "60px",
//     height: "60px",
//     borderRadius: "12px",
//     objectFit: "cover",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   actionBtn: {
//     padding: "8px 16px",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: "600",
//     fontSize: "0.85rem",
//     transition: "transform 0.2s",
//     marginLeft: "8px",
//   },
//   editBtn: {
//     background: "#eff6ff",
//     color: "#3b82f6",
//   },
//   deleteBtn: {
//     background: "#fef2f2",
//     color: "#ef4444",
//   },
//   // Modal Styles
//   modalOverlay: {
//     position: "fixed",
//     inset: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.3)",
//     backdropFilter: "blur(8px)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//     zIndex: 1000,
//     animation: "fadeIn 0.3s ease-out",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: "40px",
//     borderRadius: "24px",
//     width: "100%",
//     maxWidth: "500px",
//     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//     border: "1px solid rgba(255,255,255,0.8)",
//     animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
//   },
//   modalTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "700",
//     marginBottom: "24px",
//     color: "#111827",
//   },
//   inputGroup: {
//     marginBottom: "16px",
//   },
//   input: {
//     width: "100%",
//     padding: "14px 16px",
//     borderRadius: "12px",
//     border: "1px solid #e5e7eb",
//     fontSize: "0.95rem",
//     backgroundColor: "#f9fafb",
//     transition: "all 0.2s",
//     outline: "none",
//     boxSizing: "border-box", // fixes width padding issues
//   },
//   fileInput: {
//     width: "100%",
//     padding: "10px",
//     background: "#f3f4f6",
//     borderRadius: "12px",
//     cursor: "pointer",
//   },
//   modalActions: {
//     display: "flex",
//     justifyContent: "flex-end",
//     gap: "12px",
//     marginTop: "32px",
//   },
//   saveBtn: {
//     background: "#111827",
//     color: "white",
//     padding: "12px 28px",
//     borderRadius: "12px",
//     border: "none",
//     fontWeight: "600",
//     cursor: "pointer",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//   },
//   cancelBtn: {
//     background: "transparent",
//     color: "#6b7280",
//     padding: "12px 24px",
//     borderRadius: "12px",
//     border: "1px solid #e5e7eb",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
// };

// // Inject keyframes and hover effects
// const AnimationStyles = () => (
//   <style>{`
//     @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
//     @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    
//     .hover-row:hover { transform: scale(1.01); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); z-index: 10; }
//     .hover-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
//     .hover-input:focus { border-color: #6366f1 !important; background-color: white !important; box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1); }
//   `}</style>
// );

// function ProductList() {
//   // =====================
//   // ORIGINAL LOGIC START
//   // =====================
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("token");
//   const [addModal, setAddModal] = useState(false);
//   const [addData, setAddData] = useState({ name: "", price: "", stock: "", description: "", img: null });
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [editData, setEditData] = useState({ name: "", price: "", stock: "", description: "", img: null });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("https://finalproject-backend-7rqa.onrender.com");
//         setProducts(res.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleAddChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setAddData({ ...addData, img: files[0] });
//     } else {
//       setAddData({ ...addData, [name]: value });
//     }
//   };

//   const saveNewProduct = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", addData.name);
//       formData.append("price", addData.price);
//       formData.append("stock", addData.stock);
//       formData.append("description", addData.description);
//       if (addData.img) formData.append("img", addData.img);

//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com", formData, { headers: { Authorization: `Bearer ${token}` } });
//       setProducts([...products, res.data]);
//       setAddModal(false);
//       setAddData({ name: "", price: "", stock: "", description: "", img: null });
//       alert("Product Added!");
//     } catch (err) {
//       alert("Failed to add product: " + err.response?.data?.message);
//     }
//   };

//   const startEdit = (product) => {
//     setEditingProduct(product._id);
//     setEditData({ name: product.name, price: product.price, stock: product.stock, description: product.description, img: null });
//   };

//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setEditData({ ...editData, img: files[0] });
//     } else {
//       setEditData({ ...editData, [name]: value });
//     }
//   };

//   const saveEdit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", editData.name);
//       formData.append("price", editData.price);
//       formData.append("stock", editData.stock);
//       formData.append("description", editData.description);
//       if (editData.img) formData.append("img", editData.img);

//       const res = await axios.put(`https://finalproject-backend-7rqa.onrender.com/${editingProduct}`, formData, { headers: { Authorization: `Bearer ${token}` } });
//       setProducts(products.map((p) => p._id === editingProduct ? res.data : p));
//       setEditingProduct(null);
//     } catch (err) {
//       alert("Failed to update product: " + err.response?.data?.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;
//     try {
//       await axios.delete(`https://finalproject-backend-7rqa.onrender.com/${id}`, { headers: { Authorization: `Bearer ${token}` } });
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       alert("Delete failed: " + err.response?.data?.message);
//     }
//   };
//   // =====================
//   // ORIGINAL LOGIC END
//   // =====================

//   if (loading) return <div style={{...styles.container, display: 'flex', justifyContent:'center', alignItems:'center'}}><p style={{fontSize: '1.2rem', color: '#6366f1', fontWeight: 'bold'}}>Loading Inventory...</p></div>;
//   if (error) return <div style={{...styles.container, display: 'flex', justifyContent:'center', alignItems:'center'}}><p style={{color: '#ef4444'}}>{error}</p></div>;

//   return (
//     <div style={styles.container}>
//       <AnimationStyles />

//       {/* ===== HEADER ===== */}
//       <div style={styles.headerContainer}>
//         <div>
//           <h2 style={styles.title}>Product Inventory</h2>
//           <p style={{color: '#6b7280', marginTop: '4px'}}>Manage your store catalog</p>
//         </div>
//         <button
//           onClick={() => setAddModal(true)}
//           style={styles.addButton}
//           className="hover-btn"
//         >
//           <span style={{fontSize:'1.2rem'}}>+</span> Add Product
//         </button>
//       </div>

//       {/* ===== MODERN TABLE ===== */}
//       <div style={styles.tableContainer}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Visual</th>
//               <th style={styles.th}>Product Name</th>
//               <th style={styles.th}>Pricing</th>
//               <th style={styles.th}>Stock</th>
//               <th style={{...styles.th, width: '30%'}}>Details</th>
//               <th style={{...styles.th, textAlign: 'right'}}>Controls</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((p, index) => (
//               <tr key={p._id} style={{...styles.row, animation: `slideUp ${0.3 + (index * 0.05)}s cubic-bezier(0.16, 1, 0.3, 1)`}} className="hover-row">
//                 <td style={{...styles.td, ...styles.firstTd}}>
//                   {p.img ? (
//                     <img src={p.img} alt={p.name} style={styles.img} />
//                   ) : (
//                     <div style={{...styles.img, background:'#e5e7eb', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.7rem', color:'#9ca3af'}}>No Img</div>
//                   )}
//                 </td>

//                 <td style={{...styles.td, fontWeight: '600', color: '#111827'}}>{p.name}</td>
//                 <td style={{...styles.td, fontWeight: '700', color: '#059669'}}>₹{p.price}</td>
//                 <td style={styles.td}>
//                    <span style={{
//                        padding: '4px 10px', 
//                        borderRadius: '20px', 
//                        background: p.stock > 10 ? '#ecfdf5' : '#fef2f2',
//                        color: p.stock > 10 ? '#059669' : '#dc2626',
//                        fontWeight: 'bold',
//                        fontSize: '0.85rem'
//                    }}>
//                        {p.stock} units
//                    </span>
//                 </td>
//                 <td style={{...styles.td, color: '#6b7280', lineHeight: '1.4'}}>{p.description?.substring(0, 60)}{p.description?.length > 60 ? '...' : ''}</td>

//                 <td style={{...styles.td, ...styles.lastTd, textAlign: 'right'}}>
//                   <button
//                     onClick={() => startEdit(p)}
//                     style={{...styles.actionBtn, ...styles.editBtn}}
//                     className="hover-btn"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     style={{...styles.actionBtn, ...styles.deleteBtn}}
//                     className="hover-btn"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {products.length === 0 && <div style={{padding: '40px', textAlign: 'center', color: '#9ca3af'}}>No products found. Add one to get started.</div>}
//       </div>

//       {/* ===================== ADD PRODUCT MODAL ===================== */}
//       {addModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h3 style={styles.modalTitle}>Create New Product</h3>

//             <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
//               <input name="name" placeholder="Product Name" onChange={handleAddChange} style={styles.input} className="hover-input" />
              
//               <div style={{display: 'flex', gap: '16px'}}>
//                   <input name="price" placeholder="Price (₹)" type="number" onChange={handleAddChange} style={styles.input} className="hover-input" />
//                   <input name="stock" placeholder="Stock Qty" type="number" onChange={handleAddChange} style={styles.input} className="hover-input" />
//               </div>

//               <textarea name="description" placeholder="Description" rows="4" onChange={handleAddChange} style={{...styles.input, resize:'none'}} className="hover-input" />

//               <div style={{position: 'relative'}}>
//                 <label style={{display:'block', marginBottom:'8px', fontSize:'0.85rem', fontWeight:'600', color:'#4b5563'}}>Product Image</label>
//                 <input type="file" name="img" onChange={handleAddChange} style={styles.fileInput} />
//               </div>

//               <div style={styles.modalActions}>
//                 <button onClick={() => setAddModal(false)} style={styles.cancelBtn} className="hover-btn">
//                   Cancel
//                 </button>
//                 <button onClick={saveNewProduct} style={styles.saveBtn} className="hover-btn">
//                   Publish Product
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===================== EDIT PRODUCT MODAL ===================== */}
//       {editingProduct && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h3 style={styles.modalTitle}>Update Product</h3>

//             <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
//               <input name="name" value={editData.name} onChange={handleEditChange} style={styles.input} className="hover-input" placeholder="Name"/>
              
//               <div style={{display: 'flex', gap: '16px'}}>
//                   <input name="price" value={editData.price} onChange={handleEditChange} type="number" style={styles.input} className="hover-input" placeholder="Price"/>
//                   <input name="stock" value={editData.stock} onChange={handleEditChange} type="number" style={styles.input} className="hover-input" placeholder="Stock"/>
//               </div>

//               <textarea name="description" value={editData.description} onChange={handleEditChange} rows="4" style={{...styles.input, resize:'none'}} className="hover-input" placeholder="Description"/>

//               <div style={{position: 'relative'}}>
//                  <label style={{display:'block', marginBottom:'8px', fontSize:'0.85rem', fontWeight:'600', color:'#4b5563'}}>Update Image</label>
//                  <input type="file" name="img" onChange={handleEditChange} style={styles.fileInput} />
//               </div>

//               <div style={styles.modalActions}>
//                 <button onClick={() => setEditingProduct(null)} style={styles.cancelBtn} className="hover-btn">
//                   Cancel
//                 </button>
//                 <button onClick={saveEdit} style={styles.saveBtn} className="hover-btn">
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // ==========================================
// // 🎨 INTERNAL STYLES & ANIMATIONS (2025 UI)
// // ==========================================
// const styles = {
//   container: {
//     fontFamily: "'Inter', 'Segoe UI', sans-serif",
//     padding: "40px",
//     backgroundColor: "#f8f9fd",
//     minHeight: "100vh",
//     color: "#1f2937",
//   },
//   headerContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "30px",
//     animation: "slideDown 0.6s ease-out",
//   },
//   title: {
//     fontSize: "2rem",
//     fontWeight: "800",
//     background: "linear-gradient(135deg, #111827 0%, #4b5563 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     letterSpacing: "-0.02em",
//     margin: 0,
//   },
//   subTitle: {
//     color: "#6b7280", 
//     marginTop: "4px",
//     fontSize: "0.95rem"
//   },
//   addButton: {
//     background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", // Indigo to Violet
//     color: "white",
//     border: "none",
//     padding: "12px 24px",
//     borderRadius: "14px",
//     fontWeight: "600",
//     fontSize: "0.95rem",
//     cursor: "pointer",
//     boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.5)",
//     transition: "all 0.3s ease",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
//   tableContainer: {
//     overflowX: "auto",
//     borderRadius: "24px",
//     boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)",
//     background: "rgba(255, 255, 255, 0.6)",
//     backdropFilter: "blur(12px)",
//     border: "1px solid rgba(255,255,255,0.6)",
//     animation: "fadeIn 0.8s ease-out",
//     paddingBottom: "10px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: "0 12px", // Creates the floating row effect
//     padding: "0 20px",
//   },
//   th: {
//     textAlign: "left",
//     padding: "20px",
//     color: "#9ca3af",
//     textTransform: "uppercase",
//     fontSize: "0.75rem",
//     fontWeight: "700",
//     letterSpacing: "0.08em",
//     borderBottom: "none",
//   },
//   row: {
//     backgroundColor: "#ffffff",
//     transition: "transform 0.2s, box-shadow 0.2s",
//     cursor: "default",
//     position: "relative",
//     boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
//   },
//   td: {
//     padding: "20px",
//     borderTop: "1px solid #f3f4f6",
//     borderBottom: "1px solid #f3f4f6",
//     fontSize: "0.95rem",
//     verticalAlign: "middle",
//   },
//   // Rounded corners for floating rows
//   firstTd: {
//     borderTopLeftRadius: "16px",
//     borderBottomLeftRadius: "16px",
//     borderLeft: "1px solid #f3f4f6",
//   },
//   lastTd: {
//     borderTopRightRadius: "16px",
//     borderBottomRightRadius: "16px",
//     borderRight: "1px solid #f3f4f6",
//   },
//   img: {
//     width: "56px",
//     height: "56px",
//     borderRadius: "12px",
//     objectFit: "cover",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
//     border: "2px solid white",
//   },
//   noImg: {
//     width: "56px",
//     height: "56px",
//     borderRadius: "12px",
//     background: "#f3f4f6",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "0.7rem",
//     color: "#9ca3af",
//     border: "1px dashed #d1d5db"
//   },
//   badge: {
//     padding: '6px 12px', 
//     borderRadius: '20px', 
//     fontWeight: '700',
//     fontSize: '0.75rem',
//     display: 'inline-block'
//   },
//   actionBtn: {
//     padding: "8px 16px",
//     borderRadius: "10px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: "600",
//     fontSize: "0.85rem",
//     transition: "transform 0.2s",
//     marginLeft: "8px",
//   },
//   editBtn: {
//     background: "#eff6ff",
//     color: "#3b82f6",
//   },
//   deleteBtn: {
//     background: "#fef2f2",
//     color: "#ef4444",
//   },
//   // Modal Styles
//   modalOverlay: {
//     position: "fixed",
//     inset: 0,
//     backgroundColor: "rgba(17, 24, 39, 0.4)", // Darker, richer overlay
//     backdropFilter: "blur(8px)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//     zIndex: 1000,
//     animation: "fadeIn 0.3s ease-out",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: "40px",
//     borderRadius: "28px",
//     width: "100%",
//     maxWidth: "520px",
//     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//     border: "1px solid rgba(255,255,255,0.8)",
//     animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
//   },
//   modalTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "800",
//     marginBottom: "28px",
//     color: "#111827",
//     letterSpacing: "-0.02em",
//   },
//   inputGroup: {
//     marginBottom: "20px",
//   },
//   label: {
//     display: 'block', 
//     marginBottom: '8px', 
//     fontSize: '0.85rem', 
//     fontWeight: '600', 
//     color: '#4b5563'
//   },
//   input: {
//     width: "100%",
//     padding: "14px 18px",
//     borderRadius: "14px",
//     border: "2px solid #f3f4f6",
//     fontSize: "0.95rem",
//     backgroundColor: "#f9fafb",
//     transition: "all 0.2s",
//     outline: "none",
//     boxSizing: "border-box",
//     color: "#1f2937",
//     fontFamily: "inherit",
//   },
//   fileInputWrapper: {
//     background: "#f9fafb",
//     border: "2px dashed #e5e7eb",
//     borderRadius: "14px",
//     padding: "20px",
//     textAlign: "center",
//     cursor: "pointer",
//     position: "relative",
//   },
//   modalActions: {
//     display: "flex",
//     justifyContent: "flex-end",
//     gap: "12px",
//     marginTop: "32px",
//   },
//   saveBtn: {
//     background: "#111827",
//     color: "white",
//     padding: "14px 32px",
//     borderRadius: "14px",
//     border: "none",
//     fontWeight: "600",
//     fontSize: "0.95rem",
//     cursor: "pointer",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//   },
//   cancelBtn: {
//     background: "white",
//     color: "#6b7280",
//     padding: "14px 24px",
//     borderRadius: "14px",
//     border: "1px solid #e5e7eb",
//     fontWeight: "600",
//     fontSize: "0.95rem",
//     cursor: "pointer",
//   },
// };

// // Inject keyframes and special hover effects
// const AnimationStyles = () => (
//   <style>{`
//     @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
//     @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    
//     /* Hover effects for Rows */
//     .hover-row:hover { 
//       transform: scale(1.005) translateY(-2px); 
//       box-shadow: 0 15px 30px -5px rgba(0,0,0,0.08) !important; 
//       z-index: 10; 
//     }

//     /* Hover effects for Buttons */
//     .hover-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
//     .hover-btn:active { transform: translateY(0px); }

//     /* Input Focus */
//     .hover-input:focus { 
//       border-color: #818cf8 !important; 
//       background-color: white !important; 
//       box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1); 
//     }
    
//     /* Custom Scrollbar */
//     ::-webkit-scrollbar { width: 8px; height: 8px; }
//     ::-webkit-scrollbar-track { background: transparent; }
//     ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
//     ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
//   `}</style>
// );

// function ProductList() {
//   // =====================
//   // LOGIC (UNCHANGED)
//   // =====================
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("token");
  
//   // Modal States
//   const [addModal, setAddModal] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
  
//   // Form States
//   const [addData, setAddData] = useState({ name: "", price: "", stock: "", description: "", img: null });
//   const [editData, setEditData] = useState({ name: "", price: "", stock: "", description: "", img: null });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("https://finalproject-backend-7rqa.onrender.com");
//         setProducts(res.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load products");
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleAddChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setAddData({ ...addData, img: files[0] });
//     } else {
//       setAddData({ ...addData, [name]: value });
//     }
//   };

//   const saveNewProduct = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", addData.name);
//       formData.append("price", addData.price);
//       formData.append("stock", addData.stock);
//       formData.append("description", addData.description);
//       if (addData.img) formData.append("img", addData.img);

//       const res = await axios.post("https://finalproject-backend-7rqa.onrender.com", formData, { headers: { Authorization: `Bearer ${token}` } });
//       setProducts([...products, res.data]);
//       setAddModal(false);
//       setAddData({ name: "", price: "", stock: "", description: "", img: null });
//       alert("Product Added Successfully!");
//     } catch (err) {
//       alert("Failed to add product: " + err.response?.data?.message);
//     }
//   };

//   const startEdit = (product) => {
//     setEditingProduct(product._id);
//     setEditData({ name: product.name, price: product.price, stock: product.stock, description: product.description, img: null });
//   };

//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "img") {
//       setEditData({ ...editData, img: files[0] });
//     } else {
//       setEditData({ ...editData, [name]: value });
//     }
//   };

//   const saveEdit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", editData.name);
//       formData.append("price", editData.price);
//       formData.append("stock", editData.stock);
//       formData.append("description", editData.description);
//       if (editData.img) formData.append("img", editData.img);

//       const res = await axios.put(`https://finalproject-backend-7rqa.onrender.com/${editingProduct}`, formData, { headers: { Authorization: `Bearer ${token}` } });
//       setProducts(products.map((p) => p._id === editingProduct ? res.data : p));
//       setEditingProduct(null);
//     } catch (err) {
//       alert("Failed to update product: " + err.response?.data?.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`https://finalproject-backend-7rqa.onrender.com/${id}`, { headers: { Authorization: `Bearer ${token}` } });
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       alert("Delete failed: " + err.response?.data?.message);
//     }
//   };

//   // =====================
//   // RENDER
//   // =====================

//   if (loading) return (
//     <div style={{...styles.container, display: 'flex', justifyContent:'center', alignItems:'center'}}>
//       <div style={{textAlign: 'center'}}>
//         <div style={{width: '40px', height: '40px', border: '3px solid #e0e7ff', borderTop: '3px solid #6366f1', borderRadius: '50%', animation: 'spin 1s linear infinite'}}></div>
//         <p style={{color: '#6366f1', fontWeight: '600', marginTop: '15px'}}>Loading Inventory...</p>
//         <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
//       </div>
//     </div>
//   );

//   if (error) return <div style={{...styles.container, display: 'flex', justifyContent:'center', alignItems:'center'}}><p style={{color: '#ef4444'}}>{error}</p></div>;

//   return (
//     <div style={styles.container}>
//       <AnimationStyles />

//       {/* ===== HEADER ===== */}
//       <div style={styles.headerContainer}>
//         <div>
//           <h2 style={styles.title}>Product Inventory</h2>
//           <p style={styles.subTitle}>Manage your catalog and stock levels</p>
//         </div>
//         <button
//           onClick={() => setAddModal(true)}
//           style={styles.addButton}
//           className="hover-btn"
//         >
//           <span style={{fontSize:'1.2rem', fontWeight: '400'}}>+</span> Add Product
//         </button>
//       </div>

//       {/* ===== MODERN TABLE ===== */}
//       <div style={styles.tableContainer}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Visual</th>
//               <th style={styles.th}>Product Name</th>
//               <th style={styles.th}>Price</th>
//               <th style={styles.th}>Status</th>
//               <th style={{...styles.th, width: '30%'}}>Description</th>
//               <th style={{...styles.th, textAlign: 'right'}}>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((p, index) => (
//               <tr 
//                 key={p._id} 
//                 style={{
//                   ...styles.row, 
//                   // Staggered animation for rows based on index
//                   animation: `slideUp ${0.4 + (index * 0.1)}s cubic-bezier(0.16, 1, 0.3, 1)`
//                 }} 
//                 className="hover-row"
//               >
//                 {/* Image Column */}
//                 <td style={{...styles.td, ...styles.firstTd}}>
//                   {p.img ? (
//                     <img src={p.img} alt={p.name} style={styles.img} />
//                   ) : (
//                     <div style={styles.noImg}>No Img</div>
//                   )}
//                 </td>

//                 {/* Name Column */}
//                 <td style={{...styles.td, fontWeight: '600', color: '#111827'}}>{p.name}</td>
                
//                 {/* Price Column */}
//                 <td style={{...styles.td, fontWeight: '700', color: '#111827'}}>₹{p.price}</td>
                
//                 {/* Stock Column */}
//                 <td style={styles.td}>
//                    <span style={{
//                        ...styles.badge,
//                        background: p.stock > 10 ? '#ecfdf5' : p.stock > 0 ? '#fffbeb' : '#fef2f2',
//                        color: p.stock > 10 ? '#047857' : p.stock > 0 ? '#b45309' : '#b91c1c',
//                    }}>
//                        {p.stock > 0 ? `${p.stock} in stock` : 'Out of stock'}
//                    </span>
//                 </td>
                
//                 {/* Description Column */}
//                 <td style={{...styles.td, color: '#6b7280', lineHeight: '1.5', fontSize: '0.85rem'}}>
//                     {p.description?.substring(0, 55)}{p.description?.length > 55 ? '...' : ''}
//                 </td>

//                 {/* Actions Column */}
//                 <td style={{...styles.td, ...styles.lastTd, textAlign: 'right'}}>
//                   <button
//                     onClick={() => startEdit(p)}
//                     style={{...styles.actionBtn, ...styles.editBtn}}
//                     className="hover-btn"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     style={{...styles.actionBtn, ...styles.deleteBtn}}
//                     className="hover-btn"
//                   >
//                     Trash
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         {products.length === 0 && (
//             <div style={{padding: '60px', textAlign: 'center', color: '#9ca3af'}}>
//                 <p>No products found in inventory.</p>
//             </div>
//         )}
//       </div>

//       {/* ===================== ADD PRODUCT MODAL ===================== */}
//       {addModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h3 style={styles.modalTitle}>New Product</h3>

//             <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              
//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Product Name</label>
//                 <input name="name" placeholder="e.g. Wireless Headphones" onChange={handleAddChange} style={styles.input} className="hover-input" />
//               </div>
              
//               <div style={{display: 'flex', gap: '16px'}}>
//                   <div style={{flex: 1}}>
//                     <label style={styles.label}>Price (₹)</label>
//                     <input name="price" placeholder="0.00" type="number" onChange={handleAddChange} style={styles.input} className="hover-input" />
//                   </div>
//                   <div style={{flex: 1}}>
//                     <label style={styles.label}>Stock Qty</label>
//                     <input name="stock" placeholder="0" type="number" onChange={handleAddChange} style={styles.input} className="hover-input" />
//                   </div>
//               </div>

//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Description</label>
//                 <textarea name="description" placeholder="Enter product details..." rows="3" onChange={handleAddChange} style={{...styles.input, resize:'none', fontFamily: 'inherit'}} className="hover-input" />
//               </div>

//               <div style={styles.fileInputWrapper}>
//                 <label style={{fontSize:'0.9rem', color:'#6366f1', fontWeight:'600', cursor: 'pointer'}}>
//                     Upload Product Image
//                     <input type="file" name="img" onChange={handleAddChange} style={{display: 'none'}} />
//                 </label>
//                 <div style={{fontSize:'0.75rem', color:'#9ca3af', marginTop: '4px'}}>
//                     {addData.img ? addData.img.name : "PNG, JPG up to 5MB"}
//                 </div>
//               </div>

//               <div style={styles.modalActions}>
//                 <button onClick={() => setAddModal(false)} style={styles.cancelBtn} className="hover-btn">
//                   Cancel
//                 </button>
//                 <button onClick={saveNewProduct} style={styles.saveBtn} className="hover-btn">
//                   Publish Product
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===================== EDIT PRODUCT MODAL ===================== */}
//       {editingProduct && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h3 style={styles.modalTitle}>Update Product</h3>

//             <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              
//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Product Name</label>
//                 <input name="name" value={editData.name} onChange={handleEditChange} style={styles.input} className="hover-input" />
//               </div>
              
//               <div style={{display: 'flex', gap: '16px'}}>
//                   <div style={{flex: 1}}>
//                     <label style={styles.label}>Price (₹)</label>
//                     <input name="price" value={editData.price} onChange={handleEditChange} type="number" style={styles.input} className="hover-input" />
//                   </div>
//                   <div style={{flex: 1}}>
//                     <label style={styles.label}>Stock Qty</label>
//                     <input name="stock" value={editData.stock} onChange={handleEditChange} type="number" style={styles.input} className="hover-input" />
//                   </div>
//               </div>

//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Description</label>
//                 <textarea name="description" value={editData.description} onChange={handleEditChange} rows="3" style={{...styles.input, resize:'none'}} className="hover-input" />
//               </div>

//               <div style={styles.fileInputWrapper}>
//                 <label style={{fontSize:'0.9rem', color:'#6366f1', fontWeight:'600', cursor: 'pointer'}}>
//                     Change Product Image
//                     <input type="file" name="img" onChange={handleEditChange} style={{display: 'none'}} />
//                 </label>
//                 <div style={{fontSize:'0.75rem', color:'#9ca3af', marginTop: '4px'}}>
//                     {editData.img ? editData.img.name : "Leave empty to keep current image"}
//                 </div>
//               </div>

//               <div style={styles.modalActions}>
//                 <button onClick={() => setEditingProduct(null)} style={styles.cancelBtn} className="hover-btn">
//                   Cancel
//                 </button>
//                 <button onClick={saveEdit} style={styles.saveBtn} className="hover-btn">
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;





// src/pages/ProductList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

// ==========================================
// 🎨 INTERNAL STYLES & ANIMATIONS (2025 UI)
// ==========================================
const styles = {
  container: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    padding: "40px",
    backgroundColor: "#f8f9fd",
    minHeight: "100vh",
    color: "#1f2937",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    animation: "slideDown 0.6s ease-out",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "800",
    background: "linear-gradient(135deg, #111827 0%, #4b5563 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
    margin: 0,
  },
  subTitle: {
    color: "#6b7280", 
    marginTop: "4px",
    fontSize: "0.95rem"
  },
  addButton: {
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", 
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "14px",
    fontWeight: "600",
    fontSize: "0.95rem",
    cursor: "pointer",
    boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.5)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  tableContainer: {
    overflowX: "auto",
    borderRadius: "24px",
    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)",
    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.6)",
    animation: "fadeIn 0.8s ease-out",
    paddingBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 12px", 
    padding: "0 20px",
  },
  th: {
    textAlign: "left",
    padding: "20px",
    color: "#9ca3af",
    textTransform: "uppercase",
    fontSize: "0.75rem",
    fontWeight: "700",
    letterSpacing: "0.08em",
    borderBottom: "none",
  },
  row: {
    backgroundColor: "#ffffff",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
    position: "relative",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
  },
  td: {
    padding: "20px",
    borderTop: "1px solid #f3f4f6",
    borderBottom: "1px solid #f3f4f6",
    fontSize: "0.95rem",
    verticalAlign: "middle",
  },
  firstTd: {
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
    borderLeft: "1px solid #f3f4f6",
  },
  lastTd: {
    borderTopRightRadius: "16px",
    borderBottomRightRadius: "16px",
    borderRight: "1px solid #f3f4f6",
  },
  img: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
    border: "2px solid white",
  },
  noImg: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    background: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.7rem",
    color: "#9ca3af",
    border: "1px dashed #d1d5db"
  },
  badge: {
    padding: '6px 12px', 
    borderRadius: '20px', 
    fontWeight: '700',
    fontSize: '0.75rem',
    display: 'inline-block'
  },
  actionBtn: {
    padding: "8px 16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.85rem",
    transition: "transform 0.2s",
    marginLeft: "8px",
  },
  editBtn: { background: "#eff6ff", color: "#3b82f6" },
  deleteBtn: { background: "#fef2f2", color: "#ef4444" },
  
  // --- PAGINATION STYLES ---
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    gap: '8px'
  },
  pageBtn: (active) => ({
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: active ? 'rgb(214, 143, 143)' : 'white',
    color: active ? 'white' : '#4b5563',
   

    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: active ? '0 4px 12px rgba(99, 102, 241, 0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),

  // Modal Styles
  modalOverlay: {
    position: "fixed", inset: 0, backgroundColor: "rgba(17, 24, 39, 0.4)",
    backdropFilter: "blur(8px)", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", zIndex: 1000, animation: "fadeIn 0.3s ease-out",
  },
  modalContent: {
    backgroundColor: "white", padding: "40px", borderRadius: "28px", width: "100%", maxWidth: "520px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", border: "1px solid rgba(255,255,255,0.8)", animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  modalTitle: { fontSize: "1.5rem", fontWeight: "800", marginBottom: "28px", color: "#111827", letterSpacing: "-0.02em" },
  inputGroup: { marginBottom: "20px" },
  label: { display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#4b5563' },
  input: { width: "100%", padding: "14px 18px", borderRadius: "14px", border: "2px solid #f3f4f6", fontSize: "0.95rem", backgroundColor: "#f9fafb", transition: "all 0.2s", outline: "none", boxSizing: "border-box", color: "#1f2937", fontFamily: "inherit" },
  fileInputWrapper: { background: "#f9fafb", border: "2px dashed #e5e7eb", borderRadius: "14px", padding: "20px", textAlign: "center", cursor: "pointer", position: "relative" },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "32px" },
  saveBtn: { background: "#111827", color: "white", padding: "14px 32px", borderRadius: "14px", border: "none", fontWeight: "600", fontSize: "0.95rem", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
  cancelBtn: { background: "white", color: "#6b7280", padding: "14px 24px", borderRadius: "14px", border: "1px solid #e5e7eb", fontWeight: "600", fontSize: "0.95rem", cursor: "pointer" },
};

const AnimationStyles = () => (
  <style>{`
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    .hover-row:hover { transform: scale(1.005) translateY(-2px); box-shadow: 0 15px 30px -5px rgba(0,0,0,0.08) !important; z-index: 10; }
    .hover-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
    .hover-input:focus { border-color: #818cf8 !important; background-color: white !important; box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1); }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
  `}</style>
);

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  
  // Modal States
  const [addModal, setAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Form States
  const [addData, setAddData] = useState({ name: "", price: "", stock: "", description: "", img: null });
  const [editData, setEditData] = useState({ name: "", price: "", stock: "", description: "", img: null });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://finalproject-backend-7rqa.onrender.com");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setAddData({ ...addData, img: files[0] });
    } else {
      setAddData({ ...addData, [name]: value });
    }
  };

  const saveNewProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", addData.name);
      formData.append("price", addData.price);
      formData.append("stock", addData.stock);
      formData.append("description", addData.description);
      if (addData.img) formData.append("img", addData.img);

      const res = await axios.post("https://finalproject-backend-7rqa.onrender.com", formData, { headers: { Authorization: `Bearer ${token}` } });
      setProducts([...products, res.data]);
      setAddModal(false);
      setAddData({ name: "", price: "", stock: "", description: "", img: null });
      alert("Product Added Successfully!");
    } catch (err) {
      alert("Failed to add product: " + err.response?.data?.message);
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product._id);
    setEditData({ name: product.name, price: product.price, stock: product.stock, description: product.description, img: null });
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
      formData.append("price", editData.price);
      formData.append("stock", editData.stock);
      formData.append("description", editData.description);
      if (editData.img) formData.append("img", editData.img);

      const res = await axios.put(`https://finalproject-backend-7rqa.onrender.com/${editingProduct}`, formData, { headers: { Authorization: `Bearer ${token}` } });
      setProducts(products.map((p) => p._id === editingProduct ? res.data : p));
      setEditingProduct(null);
    } catch (err) {
      alert("Failed to update product: " + err.response?.data?.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`https://finalproject-backend-7rqa.onrender.com/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      alert("Delete failed: " + err.response?.data?.message);
    }
  };

  if (loading) return <div style={{...styles.container, display: 'flex', justifyContent:'center', alignItems:'center'}}><p>Loading...</p></div>;
  if (error) return <div style={{...styles.container, display: 'flex', justifyContent:'center', alignItems:'center'}}><p style={{color: '#ef4444'}}>{error}</p></div>;

  return (
    <div style={styles.container}>
      <AnimationStyles />

      <div style={styles.headerContainer}>
        <div>
          <h2 style={styles.title}>Product Inventory</h2>
          <p style={styles.subTitle}>Manage your catalog and stock levels</p>
        </div>
        <button onClick={() => setAddModal(true)} style={styles.addButton} className="hover-btn">
          <span style={{fontSize:'1.2rem', fontWeight: '400'}}>+</span> Add Product
        </button>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Visual</th>
              <th style={styles.th}>Product Name</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Status</th>
              <th style={{...styles.th, width: '30%'}}>Description</th>
              <th style={{...styles.th, textAlign: 'right'}}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((p, index) => (
              <tr key={p._id} style={{...styles.row, animation: `slideUp ${0.4 + (index * 0.1)}s cubic-bezier(0.16, 1, 0.3, 1)`}} className="hover-row">
                <td style={{...styles.td, ...styles.firstTd}}>
                  {p.img ? <img src={p.img} alt={p.name} style={styles.img} /> : <div style={styles.noImg}>No Img</div>}
                </td>
                <td style={{...styles.td, fontWeight: '600', color: '#111827'}}>{p.name}</td>
                <td style={{...styles.td, fontWeight: '700', color: '#111827'}}>₹{p.price}</td>
                <td style={styles.td}>
                   <span style={{...styles.badge, background: p.stock > 10 ? '#ecfdf5' : p.stock > 0 ? '#fffbeb' : '#fef2f2', color: p.stock > 10 ? '#047857' : p.stock > 0 ? '#b45309' : '#b91c1c'}}>
                       {p.stock > 0 ? `${p.stock} in stock` : 'Out of stock'}
                   </span>
                </td>
                <td style={{...styles.td, color: '#6b7280', lineHeight: '1.5', fontSize: '0.85rem'}}>
                    {p.description?.substring(0, 55)}{p.description?.length > 55 ? '...' : ''}
                </td>
                <td style={{...styles.td, ...styles.lastTd, textAlign: 'right'}}>
                  <button onClick={() => startEdit(p)} style={{...styles.actionBtn, ...styles.editBtn}} className="hover-btn">Edit</button>
                  <button onClick={() => handleDelete(p._id)} style={{...styles.actionBtn, ...styles.deleteBtn}} className="hover-btn">Trash</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* --- PAGINATION CONTROLS --- */}
        {products.length > 0 && (
          <div style={styles.paginationContainer}>
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1} 
              style={{...styles.pageBtn(false), opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'default' : 'pointer'}}
            >
              &lt;
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <button 
                key={i + 1} 
                onClick={() => paginate(i + 1)} 
                style={styles.pageBtn(currentPage === i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages} 
              style={{...styles.pageBtn(false), opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'default' : 'pointer'}}
            >
              &gt;
            </button>
          </div>
        )}

        {products.length === 0 && (
            <div style={{padding: '60px', textAlign: 'center', color: '#9ca3af'}}>
                <p>No products found in inventory.</p>
            </div>
        )}
      </div>

      {/* MODALS (Same as before) */}
      {addModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalTitle}>New Product</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={styles.inputGroup}><label style={styles.label}>Product Name</label><input name="name" placeholder="e.g. Wireless Headphones" onChange={handleAddChange} style={styles.input} className="hover-input" /></div>
              <div style={{display: 'flex', gap: '16px'}}>
                  <div style={{flex: 1}}><label style={styles.label}>Price (₹)</label><input name="price" placeholder="0.00" type="number" onChange={handleAddChange} style={styles.input} className="hover-input" /></div>
                  <div style={{flex: 1}}><label style={styles.label}>Stock Qty</label><input name="stock" placeholder="0" type="number" onChange={handleAddChange} style={styles.input} className="hover-input" /></div>
              </div>
              <div style={styles.inputGroup}><label style={styles.label}>Description</label><textarea name="description" placeholder="Enter product details..." rows="3" onChange={handleAddChange} style={{...styles.input, resize:'none', fontFamily: 'inherit'}} className="hover-input" /></div>
              <div style={styles.fileInputWrapper}><label style={{fontSize:'0.9rem', color:'#6366f1', fontWeight:'600', cursor: 'pointer'}}>Upload Product Image<input type="file" name="img" onChange={handleAddChange} style={{display: 'none'}} /></label><div style={{fontSize:'0.75rem', color:'#9ca3af', marginTop: '4px'}}>{addData.img ? addData.img.name : "PNG, JPG up to 5MB"}</div></div>
              <div style={styles.modalActions}><button onClick={() => setAddModal(false)} style={styles.cancelBtn} className="hover-btn">Cancel</button><button onClick={saveNewProduct} style={styles.saveBtn} className="hover-btn">Publish Product</button></div>
            </div>
          </div>
        </div>
      )}

      {editingProduct && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalTitle}>Update Product</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={styles.inputGroup}><label style={styles.label}>Product Name</label><input name="name" value={editData.name} onChange={handleEditChange} style={styles.input} className="hover-input" /></div>
              <div style={{display: 'flex', gap: '16px'}}>
                  <div style={{flex: 1}}><label style={styles.label}>Price (₹)</label><input name="price" value={editData.price} onChange={handleEditChange} type="number" style={styles.input} className="hover-input" /></div>
                  <div style={{flex: 1}}><label style={styles.label}>Stock Qty</label><input name="stock" value={editData.stock} onChange={handleEditChange} type="number" style={styles.input} className="hover-input" /></div>
              </div>
              <div style={styles.inputGroup}><label style={styles.label}>Description</label><textarea name="description" value={editData.description} onChange={handleEditChange} rows="3" style={{...styles.input, resize:'none'}} className="hover-input" /></div>
              <div style={styles.fileInputWrapper}><label style={{fontSize:'0.9rem', color:'#6366f1', fontWeight:'600', cursor: 'pointer'}}>Change Product Image<input type="file" name="img" onChange={handleEditChange} style={{display: 'none'}} /></label><div style={{fontSize:'0.75rem', color:'#9ca3af', marginTop: '4px'}}>{editData.img ? editData.img.name : "Leave empty to keep current image"}</div></div>
              <div style={styles.modalActions}><button onClick={() => setEditingProduct(null)} style={styles.cancelBtn} className="hover-btn">Cancel</button><button onClick={saveEdit} style={styles.saveBtn} className="hover-btn">Save Changes</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;