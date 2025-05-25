# Book Review Platform

A full-stack Book Review Platform built using **React.js**, **Node.js**, **Express**, and **MongoDB**.

## Features

- View a list of featured books.
- Click on a book to see detailed information and reviews.
- Post your own review for a book.
- View and edit user profile information.
- Responsive UI for all devices.

## Tech Stack

- **Frontend**: React.js, React Router, CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose

## Installation

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Make sure MongoDB is running locally at `mongodb://localhost:27017/bookreview`.

## API Endpoints

- `GET /books` – List all books
- `GET /books/:id` – Get a book by ID
- `GET /reviews?bookId=xyz` – List reviews for a book
- `POST /reviews` – Add a new review
- `GET /users/:id` – Get user info
- `PUT /users/:id` – Update user info
