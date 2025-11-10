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

import { useEffect, useState } from "react";
import axios from "axios";

function AdminAddProduct() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const token = localStorage.getItem("token");

  const API_URL = "http://localhost:5000/products"; // backend products route

  // ✅ Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // 🔹 Handle image selection & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ Add product with image
  const addProduct = async (e) => {
    e.preventDefault();
    if (!token) return alert("Please login first!");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("stock", stock);
      if (image) formData.append("img", image); // Cloudinary expects 'img' key

      await axios.post(API_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product added successfully!");
      setName("");
      setPrice("");
      setStock(0);
      setImage(null);
      setPreview(null);
      fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to add product!");
    }
  };

  // ✅ Delete product
  const deleteProduct = async (id) => {
    if (!token) return alert("Please login first!");
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard 🧑‍🍳</h1>

      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        )}
        <button type="submit">Add Product</button>
      </form>

      <h3>All Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - ₹{p.price} - Stock: {p.stock}{" "}
            <button onClick={() => deleteProduct(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminAddProduct;
