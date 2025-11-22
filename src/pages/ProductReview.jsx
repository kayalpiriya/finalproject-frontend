// src/pages/ProductReview.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext.jsx";
import dayjs from "dayjs";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

function ProductReview({ productId }) {
  const { user, token } = useContext(AuthContext) || {};
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await axios.get(`http://localhost:5000/reviews/${productId}`);
        setReviews(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Login first");
    if (!rating || !comment) return alert("Add rating and comment");

    try {
      const res = await axios.post(
        "http://localhost:5000/reviews",
        { productId, rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReviews([res.data.review, ...reviews]);
      setComment("");
      setRating(0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <>
    <Navbar />
    <br></br><br></br><br></br>
    <div className="max-w-md mx-auto my-4 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-yellow-700">Customer Reviews</h2>

      {/* Review Form */}
      {user && (
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            placeholder="Write your review..."
            className="border rounded-md p-2 resize-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-white py-1 rounded hover:bg-yellow-600 transition"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      )}

      {/* Chat-like reviews */}
      <div className="flex flex-col gap-3">
        {reviews.map((rev) => (
          <div
            key={rev._id}
            className="bg-yellow-50 p-2 rounded-md shadow-sm"
          >
            <div className="text-sm font-semibold">{rev.user?.name || "User"}</div>
            <div className="text-yellow-400 text-sm">
              {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
            </div>
            <div className="text-gray-700 text-sm">{rev.comment}</div>
            <div className="text-gray-400 text-xs">{dayjs(rev.createdAt).format("DD MMM YYYY HH:mm")}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>);
}

export default ProductReview;
