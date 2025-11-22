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


// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import axios from "axios";

// function Product() {
//   const { id } = useParams(); // get product ID from URL
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch single product from backend
//   useEffect(() => {
//     const getSingleProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setLoading(false);
//       }
//     };
//     getSingleProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   const handleBuyNow = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   if (loading) return <p>Loading product...</p>;
//   if (!product) return <p>Product not found!</p>;

//   return (
//     <>
//      <Navbar />
//       <div className="product-page">
//         <div className="product-card">
//           <img src={product.img || "src/assets/default.jpg"} alt={product.name} />
//         </div>
//         <div className="list">
//           <h3>{product.name}</h3>
//           <p>₹{product.price}</p>
//           <p>Stock: {product.stock}</p>
//           <p>{product.description}</p>
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


// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/CartContext.jsx";
// import axios from "axios";

// function Product() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getSingleProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };
//     getSingleProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     addToCart(product);
//     navigate("/shoppingcart");
//   };

//   if (loading) return <p className="text-center mt-20 text-xl">Loading product...</p>;
//   if (!product) return <p className="text-center mt-20 text-xl">Product not found!</p>;

//   return (
//     <>
//       <Navbar />
//       <br></br><br></br><br></br>
//       <div className="max-w-6xl mx-auto my-12 p-4 grid md:grid-cols-2 gap-10">
//         {/* Image */}
//         <div className="flex justify-center items-center bg-white shadow-lg rounded-xl p-6">
//           <img
//             src={product.img || "/assets/default.jpg"}
//             alt={product.name}
//             className="rounded-xl max-h-96 object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-4xl font-bold text-yellow-700 mb-4">{product.name}</h1>
//             <p className="text-xl font-semibold text-gray-800 mb-2">₹{product.price}</p>
//             <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
//             <p className="text-gray-700 mb-6">{product.description}</p>
//           </div>

//           <div className="flex flex-col md:flex-row gap-4">
//             <button
//               onClick={handleAddToCart}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={handleAddToCart}
//               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Product;















// Product.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../pages/CartContext.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";

// Chat-style Review Component
function ProductReview({ productId }) {
  const { user, token } = useContext(AuthContext) || {};
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  // Fetch reviews
  useEffect(() => {
    if (!productId) return;
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/reviews/${productId}`
        );
        setReviews(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
        setReviews([]);
      }
    };
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("Please log in to submit a review.");
      return;
    }
    if (!rating || !comment) {
      setError("Please provide rating and comment.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/reviews",
        { productId, rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReviews([res.data.review, ...reviews]);
      setRating(0);
      setComment("");
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to submit review.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center text-yellow-700">
        Customer Reviews
      </h3>

      {/* Review Form */}
      {user ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 mb-6"
        >
          <div className="flex items-center gap-2 text-xl">
            <span>Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 rounded-md p-2 resize-none min-h-[80px]"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
          >
            Submit Review
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      ) : (
        <p className="text-center text-gray-500">
          Please log in to write a review.
        </p>
      )}

      {/* Reviews List */}
      <div className="flex flex-col gap-4">
        {reviews.length === 0 && (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        )}
        {reviews.map((rev) => (
          <div key={rev._id} className="p-3 rounded-lg bg-yellow-50 shadow">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-semibold text-lg">
                {rev.user?.name || "User"}
              </h4>
              <div className="text-yellow-400">
                {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
              </div>
            </div>
            <p className="text-gray-700">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    navigate("/shoppingcart");
  };

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;
  if (!product) return <p className="text-center mt-20 text-xl">Product not found!</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-12 p-4 grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center items-center bg-white shadow-lg rounded-xl p-6">
          <img
            src={product.img || "/assets/default.jpg"}
            alt={product.name}
            className="rounded-xl max-h-96 object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-yellow-700 mb-4">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-800 mb-2">₹{product.price}</p>
            <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {product && <ProductReview productId={product._id} />}

      <Footer />
    </>
  );
}

export default Product;
