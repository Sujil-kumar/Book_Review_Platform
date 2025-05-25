const Review = require('../models/Review');

// @desc    Get all reviews for a book
// @route   GET /reviews?bookId=xxx
// @access  Public
exports.getReviews = async (req, res) => {
  try {
    const { bookId } = req.query;
    if (!bookId) {
      return res.status(400).json({ message: 'bookId query parameter is required' });
    }

    const reviews = await Review.find({ book: bookId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews', error: err.message });
  }
};

// @desc    Add a review
// @route   POST /reviews
// @access  Public
exports.addReview = async (req, res) => {
  try {
    const { book, user, rating, comment } = req.body;

    if (!book || !user || !rating || !comment) {
      return res.status(400).json({ message: 'All fields (book, user, rating, comment) are required' });
    }

    const review = new Review({ book, user, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add review', error: err.message });
  }
};
