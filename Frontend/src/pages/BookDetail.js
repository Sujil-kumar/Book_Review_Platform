import React, { useEffect, useState } from 'react';
import { getBook, getReviews, postReview } from '../api';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import './BookDetail.css';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getBook(id), getReviews(id)])
      .then(([bookRes, reviewsRes]) => {
        setBook(bookRes.data);
        setReviews(reviewsRes.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching book or reviews:", err);
        setLoading(false);
      });
  }, [id]);

  const handleReviewSubmit = review => {
    postReview({ ...review, book: id }).then(res => {
      setReviews(prev => [...prev, res.data]);
    });
  };

  if (loading) return <div className="book-detail-container">Loading...</div>;

  return (
    <div className="book-detail-container">
      <div className="book-detail">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-description">{book.description}</p>
      </div>

      <div className="reviews-section">
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet.</p>
        ) : (
          <ul className="review-list">
            {reviews.map(r => (
              <li key={r._id} className="review-item">
                <span className="review-comment">"{r.comment}"</span>
                <span className="review-rating"> – {r.rating} ⭐</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="review-form-section">
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default BookDetail;
