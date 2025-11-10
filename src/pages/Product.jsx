// // import { useLocation, useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import "./Product.css";
// // import { useState } from "react";

// // function Product() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const product = location.state; // received product data

// //   // ✅ Cart state (temporary for frontend only)
// //   const [cart, setCart] = useState([]);

// //   // ✅ Handle Buy Now → directly go to cart page
// //   const handleBuyNow = () => {
// //     navigate("/shoppingcart", { state: { products: [product] } }); // 👈 send as array
// //   };

// //   // ✅ Handle Add to Cart → add product in local cart
// //   const handleAddToCart = () => {
// //     const updatedCart = [...cart, product];
// //     setCart(updatedCart);

// //     // navigate to cart page with multiple products
// //     navigate("/shoppingcart", { state: { products: updatedCart } });
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <div className="product-page">
// //         <div className="product-card">
// //           <img
// //             src={product?.img || "src/assets/default.jpg"}
// //             alt={product?.title || "Product"}
// //             className="product-img"
// //           />
// //         </div>

// //         <div className="list">
// //           <h3 className="product-title">{product?.title || "Unknown Product"}</h3>
// //           <p className="product-price">₹{product?.price || "N/A"}</p>

// //           <div className="buttons">
// //             <button className="buy-btn" onClick={handleBuyNow}>
// //               Buy Now
// //             </button>
// //             <button className="cart-btn" onClick={handleAddToCart}>
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default Product;



// // import { useLocation, useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import "./Product.css";
// // import { useContext } from "react";
// // import { CartContext } from "../pages/CartContext.jsx";

// // function Product() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { addToCart } = useContext(CartContext);
// //   const product = location.state; // product data from Home

// //   if (!product) return <p>Product not found!</p>;

// //   const handleAddToCart = () => {
// //     addToCart(product); // Add to global cart
// //     navigate("/shoppingcart"); // Go to cart page
// //   };

// //   const handleBuyNow = () => {
// //     addToCart(product); // Add to cart first
// //     navigate("/shoppingcart");
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="product-page">
// //         <div className="product-card">
// //           <img src={product.img || "src/assets/default.jpg"} alt={product.title} />
// //         </div>
// //         <div className="list">
// //           <h3>{product.title}</h3>
// //           <p>₹{product.price}</p>
// //           <p>Stock: {product.stock}</p>
// //           <div className="buttons">
// //             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
// //             <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Product;



// // import { useParams } from "react-router-dom";
// // import { useEffect, useState, useContext } from "react";
// // import { CartContext } from "../pages/CartContext.jsx";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import axios from "axios";

// // function Product() {
// //   const { id } = useParams();
// //   const { addToCart } = useContext(CartContext);
// //   const [product, setProduct] = useState(null);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:5000/products/${id}`);
// //         setProduct(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchProduct();
// //   }, [id]);

// //   if (!product) return <p>Loading product...</p>;

// //   const handleAddToCart = () => {
// //     addToCart(product);
// //   };

// //   const handleBuyNow = () => {
// //     addToCart(product);
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="product-page">
// //         <div className="product-card">
// //           <img src={product.img || "src/assets/default.jpg"} alt={product.title} />
// //         </div>
// //         <div className="list">
// //           <h3>{product.title}</h3>
// //           <p>₹{product.price}</p>
// //           <p>Stock: {product.stock}</p>
// //           <div className="buttons">
// //             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
// //             <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Product;



// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useContext } from "react";
// import { CartContext } from "../pages/CartContext.jsx";

// function Product() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const product = location.state; // Home.jsx la send pannina product

// //   if (!product) return <p>Product not found!</p>;

// // const GetSingleProduct =() =>  {
// // //  API get
// // }
//  // 🔹 Fetch single product from backend
//  useEffect(() => {
//   const getSingleProduct = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/products/${id}`);
//       setProduct(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching product:", err);
//       setLoading(false);
//     }
//   };
//   getSingleProduct();
// }, [id]);



//   const handleAddToCart = () => {
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   const handleBuyNow = () => {
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="product-page">
//         <div className="product-card">
//           <img src={product.img || "src/assets/default.jpg"} alt={product.title} />
//         </div>
//         <div className="list">
//           <h3>{product.title}</h3>
//           <p>₹{product.price}</p>
//           <p>Stock: {product.stock}</p>
//           <div className="buttons">
//             <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
//             <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Product;


import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/CartContext.jsx";
import axios from "axios";
import "./Product.css";

function Product() {
  const { id } = useParams(); // get product ID from URL
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch single product from backend
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setLoading(false);
      }
    };
    getSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    navigate("/shoppingcart");
  };

  const handleBuyNow = () => {
    if (!product) return;
    addToCart(product);
    navigate("/shoppingcart");
  };

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <Navbar />
      <div className="product-page">
        <div className="product-card">
          <img src={product.img || "src/assets/default.jpg"} alt={product.title} />
        </div>
        <div className="list">
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
          <p>Stock: {product.stock}</p>
          <div className="buttons">
            <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
            <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
