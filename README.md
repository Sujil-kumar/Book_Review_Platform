#  Book Review Platform

A full-stack web application for discovering, reviewing, and managing books. Built with **React**, **Node.js/Express**, and **MongoDB**.

---

##  Features

- View featured and trending books
- Search and filter books by title or genre
- User profile page with editable details
- Backend RESTful API using Express.js
- MongoDB database for storing books and user data

---

##  Tech Stack

**Frontend:**
- React.js
- Axios
- React Router

**Backend:**
- Node.js
- Express.js
- Mongoose (MongoDB)

**Database:**
- MongoDB Atlas



---

##  Setup Instructions

###  1. Clone the Repository

```bash
git clone https://github.com/your-username/BookReviewPlatform.git
cd BookReviewPlatform
```

###  2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Seed books (optional):

```bash
node seed/books.js
```

Start backend:

```bash
npm run dev
```

###  3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Make sure the frontend is configured to call your backend at `http://localhost:5000`.



---

##  API Endpoints

| Method | Route           | Description            |
|--------|------------------|------------------------|
| GET    | `/books`         | Get all books          |
| GET    | `/books/:id`     | Get book by ID         |
| GET    | `/users/:id`     | Get user profile       |
| PUT    | `/users/:id`     | Update user profile    |

---

##  Author

- Sujilkumar P
- 

---

##  License

This project is licensed under the MIT License.
