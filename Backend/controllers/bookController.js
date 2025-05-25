const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /books
// @access  Public
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch books', error: err.message });
  }
};

// @desc    Get single book by ID
// @route   GET /books/:id
// @access  Public
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving book', error: err.message });
  }
};

// @desc    Create a new book
// @route   POST /books
// @access  Admin (you can add auth later)
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create book', error: err.message });
  }
};
