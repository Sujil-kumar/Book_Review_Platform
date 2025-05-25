import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import { getBooks } from '../api';
import BookCard from '../components/BookCard';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('All');

  useEffect(() => {
    getBooks()
      .then(res => {
        setBooks(res.data);
        setFilteredBooks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch books:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = books;

    if (searchTerm.trim()) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (genre !== 'All') {
      filtered = filtered.filter(book => book.genre === genre);
    }

    setFilteredBooks(filtered);
  }, [searchTerm, genre, books]);

  const genres = ['All', ...new Set(books.map(book => book.genre))];

  return (
    <div className="home-container">
      <div className="home-header">
        <h2 className="home-title">📚 Featured Books</h2>

        {/* ✅ Profile Page Button */}
        <Link to="/profile" className="home-profile-button">
          👤 My Profile
        </Link>
      </div>

      <div className="home-filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="home-search"
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="home-select"
        >
          {genres.map((g, index) => (
            <option key={index} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="home-message">Loading books...</p>
      ) : filteredBooks.length === 0 ? (
        <p className="home-message">No books found.</p>
      ) : (
        <div className="home-grid">
          {filteredBooks.map(book => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
