import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => (
  <div className="book-card">
    <Link to={`/books/${book._id}`} className="book-link">
      <img src={book.coverImage} alt={book.title} className="book-image" />
      <div className="book-info">
        <h4 className="book-title">{book.title}</h4>
        <p className="book-author">{book.author}</p>
      </div>
    </Link>
  </div>
);

export default BookCard;
