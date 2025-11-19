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
//         const res = await axios.get("http://localhost:5000/products");
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
//       await axios.delete(`http://localhost:5000/products/${id}`, {
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
//         `http://localhost:5000/products/${editingProduct}`,
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
//         const res = await axios.get("http://localhost:5000/products");
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
//       await axios.delete(`http://localhost:5000/products/${id}`, {
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
//         `http://localhost:5000/products/${editingProduct}`,
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


import React, { useEffect, useState } from "react";
import axios from "axios";

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
    img: null,
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const startEdit = (product) => {
    setEditingProduct(product._id);
    setEditData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      img: null,
    });
  };

  const closeModal = () => {
    setEditingProduct(null);
    setEditData({
      name: "",
      price: "",
      stock: "",
      description: "",
      img: null,
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
      formData.append("price", editData.price);
      formData.append("stock", editData.stock);
      formData.append("description", editData.description);
      if (editData.img) formData.append("img", editData.img);

      const res = await axios.put(
        `http://localhost:5000/products/${editingProduct}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setProducts(
        products.map((p) =>
          p._id === editingProduct ? res.data : p
        )
      );

      closeModal();
    } catch (err) {
      alert("Failed to update product");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`http://localhost:5000/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  if (loading) return <p className="text-center mt-12">Loading...</p>;
  if (error) return <p className="text-center mt-12 text-red-600">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Product List</h2>

      {/* TABLE FORMAT */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="text-center">
                <td className="border p-2">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-16 h-16 object-cover mx-auto rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>

                <td className="border p-2">{p.name}</td>
                <td className="border p-2">₹{p.price}</td>
                <td className="border p-2">{p.stock}</td>
                <td className="border p-2">{p.description}</td>

                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => startEdit(p)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT POPUP MODAL */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Edit Product</h3>

            <div className="space-y-3">
              <input
                name="name"
                value={editData.name}
                onChange={handleEditChange}
                className="border p-2 rounded w-full"
                placeholder="Name"
              />

              <input
                name="price"
                value={editData.price}
                onChange={handleEditChange}
                type="number"
                className="border p-2 rounded w-full"
                placeholder="Price"
              />

              <input
                name="stock"
                value={editData.stock}
                onChange={handleEditChange}
                type="number"
                className="border p-2 rounded w-full"
                placeholder="Stock"
              />

              <textarea
                name="description"
                value={editData.description}
                onChange={handleEditChange}
                className="border p-2 rounded w-full"
                placeholder="Description"
              />

              <input type="file" name="img" onChange={handleEditChange} />

              <div className="flex justify-between mt-4">
                <button
                  onClick={saveEdit}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>

                <button
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProductList;
