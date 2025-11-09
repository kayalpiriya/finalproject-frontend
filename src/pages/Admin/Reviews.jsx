import React, { useEffect, useState } from "react";
import { getAllReviews } from "../../api/reviews.js"; // ✅ make sure file exists

import "./Reviews.css"; // Optional: CSS file for styling

function AdminReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getAllReviews(); // API call
        setReviews(res.data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="admin-reviews">
      <h1>🍰 Reviews List</h1>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              <strong>{review.user}</strong>: {review.comment} ({review.rating}⭐)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminReviews; // ✅ default export
