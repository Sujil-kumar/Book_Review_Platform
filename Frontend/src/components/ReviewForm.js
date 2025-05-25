import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ user: '', rating: 5, comment: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.user.trim() || !form.comment.trim()) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(form);
    setForm({ user: '', rating: 5, comment: '' });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        className="review-input"
        type="text"
        placeholder="Your Name"
        value={form.user}
        onChange={e => setForm({ ...form, user: e.target.value })}
        required
      />
      <input
        className="review-input"
        type="number"
        min="1"
        max="5"
        value={form.rating}
        onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
        required
      />
      <textarea
        className="review-textarea"
        placeholder="Write a review"
        value={form.comment}
        onChange={e => setForm({ ...form, comment: e.target.value })}
        required
      />
      <button className="review-submit" type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
