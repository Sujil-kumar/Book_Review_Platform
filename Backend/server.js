const dotenv = require('dotenv');
dotenv.config();  // Loads .env variables into process.env

const connectDB = require('./config/db'); // Your DB connection module
const app = require('./app'); // Your Express app

connectDB(); // Connect to DB before starting server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
