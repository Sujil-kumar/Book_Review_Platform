import axios from 'axios';
const API_BASE = 'http://localhost:5000';

export const getBooks = () => axios.get(`${API_BASE}/books`);
export const getBook = id => axios.get(`${API_BASE}/books/${id}`);
export const getReviews = bookId => axios.get(`${API_BASE}/reviews`, { params: { bookId } });
export const postReview = data => axios.post(`${API_BASE}/reviews`, data);
export const getUser = id => axios.get(`${API_BASE}/users/${id}`);
export const updateUser = (id, data) => axios.put(`${API_BASE}/users/${id}`, data);
