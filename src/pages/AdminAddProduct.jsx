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
  
  // பிழைகளை (Errors) சேமிக்க
  const [errors, setErrors] = useState({});
  
  // File input-ஐ clear செய்ய
  const fileInputRef = useRef(null);

  // --- VALIDATION LOGIC (சரிபார்க்கும் இடம்) ---
  const validateForm = () => {
    const newErrors = {};

    // 1. பெயர் (Name) இல்லையென்றால் error வரும்
    if (!name.trim()) {
      newErrors.name = "Product name is required (பெயர் அவசியம்).";
    }

    // 2. விலை (Price) இல்லையென்றால் error வரும்
    if (!price) {
      newErrors.price = "Price is required (விலை அவசியம்).";
    }

    // 3. விளக்கம் (Description) இல்லையென்றால் error வரும்
    if (!description.trim()) {
      newErrors.description = "Description is required (விளக்கம் அவசியம்).";
    }

    // 4. ஸ்டாக் (Stock) இல்லையென்றால் error வரும்
    if (!stock) {
      newErrors.stock = "Stock is required (ஸ்டாக் அவசியம்).";
    }

    // 5. படம் (Image) இல்லையென்றால் error வரும்
    if (!image) {
      newErrors.image = "Product image is required (படம் அவசியம்).";
    }

    setErrors(newErrors);
    
    // ஏதேனும் ஒரு error இருந்தால் false அனுப்பும், இல்லையென்றால் true அனுப்பும்
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- முக்கிய இடம் (Main Check) ---
    // இங்கே validateForm() சரிபார்க்கும். 
    // ஏதேனும் ஒன்று விடுபட்டிருந்தாலும் உள்ளே போகாது (Returns).
    if (!validateForm()) {
      alert("Please fill all the details! (எல்லா தகவல்களையும் நிரப்பவும்)"); 
      return; 
    }

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
      
      // எல்லாம் முடிந்ததும் Form-ஐ காலி செய்தல்
      setName("");
      setPrice("");
      setDescription("");
      setStock("");
      setImage(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = ""; 

    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product.");
    }
  };

  // Input மாற்றும் போது Error-ஐ நீக்க
  const handleChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      if (errors.image) setErrors({ ...errors, image: null });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Input */}
        <div>
          <input
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
              ${errors.name ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Product Name"
            value={name}
            onChange={handleChange(setName, "name")}
          />
          {/* Error செய்தி இருந்தால் சிவப்பு நிறத்தில் காட்டும் */}
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Price Input */}
        <div>
          <input
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
              ${errors.price ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Price"
            type="number"
            value={price}
            onChange={handleChange(setPrice, "price")}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        {/* Description Input */}
        <div>
          <textarea
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
              ${errors.description ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Description"
            value={description}
            onChange={handleChange(setDescription, "description")}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Stock Input */}
        <div>
          <input
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
              ${errors.stock ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-yellow-400"}`}
            placeholder="Stock Quantity"
            type="number"
            value={stock}
            onChange={handleChange(setStock, "stock")}
          />
          {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
        </div>

        {/* Image Input */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Image</label>
          <input
            type="file"
            ref={fileInputRef}
            className={`w-full p-2 border rounded-lg 
              ${errors.image ? "border-red-500 bg-red-50" : "border-gray-300"}`}
            onChange={handleImageChange}
            accept="image/*"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-bold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;