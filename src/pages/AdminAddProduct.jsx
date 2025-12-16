// import { useEffect, useState } from "react";
// import axios from "axios";

// function Admin() {
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const token = localStorage.getItem("token");

//   const API_URL = "http://localhost:5000/api/products";

//   // ✅ Get all products
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setProducts(res.data);
//       console.log("Products:", res.data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   // ✅ Add product
//   const addProduct = async (e) => {
//     e.preventDefault();
//     if (!token) return alert("Please login first!");

//     try {
//       await axios.post(
//         API_URL,
//         { name, price },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Product added successfully!");
//       setName("");
//       setPrice("");
//       fetchProducts();
//     } catch (err) {
//       console.error("Error adding product:", err);
//       alert("Failed to add product!");
//     }
//   };

//   // ✅ Delete product
//   const deleteProduct = async (id) => {
//     if (!token) return alert("Please login first!");
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Deleted successfully!");
//       fetchProducts();
//     } catch (err) {
//       console.error("Error deleting:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard 🧑‍🍳</h1>

//       <form onSubmit={addProduct}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <button type="submit">Add Product</button>
//       </form>

//       <h3>All Products</h3>
//       <ul>
//         {products.map((p) => (
//           <li key={p._id}>
//             {p.name} - ₹{p.price}{" "}
//             <button onClick={() => deleteProduct(p._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Admin;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function AdminAddProduct() {
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState(0);
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const token = localStorage.getItem("token");

//   const API_URL = "http://localhost:5000/products"; // backend products route

//   // ✅ Fetch all products
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   // 🔹 Handle image selection & preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // ✅ Add product with image
//   const addProduct = async (e) => {
//     e.preventDefault();
//     if (!token) return alert("Please login first!");

//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("price", price);
//       formData.append("stock", stock);
//       if (image) formData.append("img", image); // Cloudinary expects 'img' key

//       await axios.post(API_URL, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Product added successfully!");
//       setName("");
//       setPrice("");
//       setStock(0);
//       setImage(null);
//       setPreview(null);
//       fetchProducts();
//     } catch (err) {
//       console.error("Error adding product:", err);
//       alert("Failed to add product!");
//     }
//   };

//   // ✅ Delete product
//   const deleteProduct = async (id) => {
//     if (!token) return alert("Please login first!");
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchProducts();
//     } catch (err) {
//       console.error("Error deleting:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard 🧑‍🍳</h1>

//       <form onSubmit={addProduct}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Stock"
//           value={stock}
//           onChange={(e) => setStock(e.target.value)}
//           required
//         />
//         <input type="file" accept="image/*" onChange={handleImageChange} />
//         {preview && (
//           <img
//             src={preview}
//             alt="preview"
//             style={{ width: "100px", height: "100px", objectFit: "cover" }}
//           />
//         )}
//         <button type="submit">Add Product</button>
//       </form>

//       <h3>All Products</h3>
//       <ul>
//         {products.map((p) => (
//           <li key={p._id}>
//             {p.name} - ₹{p.price} - Stock: {p.stock}{" "}
//             <button onClick={() => deleteProduct(p._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AdminAddProduct;


// import React, { useState } from "react";
// import axios from "axios";

// function AdminAddProduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [stock, setStock] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if(!token) return alert("Admin not logged in");

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("description", description);
//     formData.append("stock", stock);
//     if(image) formData.append("file", image);

//     try {
//       const res = await axios.post("http://localhost:5000/products", formData, {
//         headers: { 
//           "Content-Type": "multipart/form-data",
//           "Authorization": `Bearer ${localStorage.getItem("token")}` // admin token
//         }
//       });
      
//       alert("Product added!");
//     // Clear form
//     setName(""); setPrice(""); setDescription(""); setStock(""); setImage(null);
//   } catch (err) {
//     console.error(err);
//     alert("Product add failed: " + err.response?.data?.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
//       <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
//       <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
//       <input placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} />
//       <input type="file" onChange={e => setImage(e.target.files[0])} />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// }

// // export default AdminAddProduct;
// import React, { useState } from "react";
// import axios from "axios";

// function AdminAddProduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [stock, setStock] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if (!token) return alert("Admin not logged in");

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("description", description);
//     formData.append("stock", stock);
//     if (image) formData.append("file", image);

//     try {
//       await axios.post("http://localhost:5000/products", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert("Product added!");
//       setName(""); setPrice(""); setDescription(""); setStock(""); setImage(null);
//     } catch (err) {
//       console.error(err);
//       alert("Product add failed: " + err.response?.data?.message);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-2xl font-bold text-yellow-700 mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Price"
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Stock"
//           type="number"
//           value={stock}
//           onChange={(e) => setStock(e.target.value)}
//         />
//         <input
//           type="file"
//           className="w-full text-gray-700"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//         <button
//           type="submit"
//           className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AdminAddProduct;


// import React, { useState } from "react";
// import axios from "axios";

// function AdminAddProduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [stock, setStock] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if (!token) return alert("Admin not logged in");

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("description", description);
//     formData.append("stock", stock);
//     if (image) formData.append("img", image); // ✅ match backend field

//     try {
//       await axios.post("https://finalproject-backend-7rqa.onrender.com/products", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert("Product added!");
//       setName(""); setPrice(""); setDescription(""); setStock(""); setImage(null);
//     } catch (err) {
//       console.error(err);
//       alert("Product add failed: " + err.response?.data?.message);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-2xl font-bold text-yellow-700 mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Price"
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           placeholder="Stock"
//           type="number"
//           value={stock}
//           onChange={(e) => setStock(e.target.value)}
//           required
//         />
//         <input
//           type="file"
//           className="w-full text-gray-700"
//           onChange={(e) => setImage(e.target.files[0])}
//           accept="image/*"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AdminAddProduct;


import React, { useState, useRef } from "react";
import axios from "axios";

function AdminAddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);
  
  // State for validation errors
  const [errors, setErrors] = useState({});
  
  // Ref to clear file input visually after submit
  const fileInputRef = useRef(null);

  // --- VALIDATION LOGIC ---
  const validateForm = () => {
    const newErrors = {};

    // 1. Name Validation
    if (!name.trim()) {
      newErrors.name = "Product name is required.";
    }

    // 2. Price Validation
    if (!price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      newErrors.price = "Price must be a positive number.";
    }

    // 3. Description Validation
    if (!description.trim()) {
      newErrors.description = "Description is required.";
    } else if (description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    // 4. Stock Validation
    if (!stock) {
      newErrors.stock = "Stock quantity is required.";
    } else if (isNaN(stock) || parseInt(stock) < 0 || stock.includes(".")) {
      newErrors.stock = "Stock must be a non-negative integer.";
    }

    // 5. Image Validation
    if (!image) {
      newErrors.image = "Product image is required.";
    } else {
      // Check file type
      const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
      if (!validTypes.includes(image.type)) {
        newErrors.image = "Only JPG, PNG, and WEBP images are allowed.";
      }
      // Check file size (e.g., 5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (image.size > maxSize) {
        newErrors.image = "Image size must be less than 5MB.";
      }
    }

    setErrors(newErrors);
    // Return true if no errors exist
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Clear image error immediately if a file is selected
      if (errors.image) setErrors({ ...errors, image: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validation before sending request
    if (!validateForm()) return;

    const token = localStorage.getItem("token");
    if (!token) return alert("Admin not logged in");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stock", stock);
    formData.append("img", image);

    try {
      await axios.post("https://finalproject-backend-7rqa.onrender.com/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      
      alert("✅ Product added successfully!");
      
      // Reset Form
      setName("");
      setPrice("");
      setDescription("");
      setStock("");
      setImage(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = ""; // Clear file input UI

    } catch (err) {
      console.error(err);
      alert("❌ Product add failed: " + (err.response?.data?.message || err.message));
    }
  };

  // Helper helper to handle input changes and clear errors dynamically
  const handleChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Input */}
        <div>
          <input
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-colors 
              ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Product Name"
            value={name}
            onChange={handleChange(setName, "name")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Price Input */}
        <div>
          <input
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-colors 
              ${errors.price ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Price"
            type="number"
            step="0.01"
            value={price}
            onChange={handleChange(setPrice, "price")}
          />
          {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
        </div>

        {/* Description Input */}
        <div>
          <textarea
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-colors 
              ${errors.description ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleChange(setDescription, "description")}
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>

        {/* Stock Input */}
        <div>
          <input
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-colors 
              ${errors.stock ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Stock Quantity"
            type="number"
            value={stock}
            onChange={handleChange(setStock, "stock")}
          />
          {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock}</p>}
        </div>

        {/* Image Input */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Image</label>
          <input
            type="file"
            ref={fileInputRef}
            className={`w-full p-2 border rounded-lg text-gray-700 
              ${errors.image ? "border-red-500 bg-red-50" : "border-gray-300"}`}
            onChange={handleImageChange}
            accept="image/png, image/jpeg, image/webp"
          />
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-bold shadow-md active:scale-95"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;