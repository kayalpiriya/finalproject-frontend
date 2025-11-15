import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext";
import "./AllProduct.css";

function AllProduct() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleAdd = (p) => {
    addToCart(p);
    navigate(`/product/${p._id}`, { state: p });
  };

  return (
    <>
      <Navbar />
      <br></br><br></br>

      <div className="products-page">
        <h2>All Products</h2>

        <div className="products-grid">
          {products.map((p) => (
            <div key={p._id} className="product-card-new">
              <img src={p.img || "src/assets/default.jpg"} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="price">₹{p.price}</p>
              <p className="stock">Stock: {p.stock}</p>

              <button onClick={() => handleAdd(p)}>Add</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllProduct;
