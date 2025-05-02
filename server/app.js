const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require("path");

const authRoutes = require('./routes/authRoutes'); // Import the auth routes
const userRoutes = require('./routes/userRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const feeRoutes = require('./routes/feeRoutes');
const adminRoutes = require('./routes/adminRoutes');


require('dotenv').config();

const app = express();




// Enable CORS for frontend connection (adjust for your frontend URL)
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


// Connect to the database
connectDB();

// Serve static files (uploaded images) from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use routes
app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes); 
app.use("/api/registration", registrationRoutes);
app.use("/api/fees", feeRoutes);
app.use('/api/admin', adminRoutes);


app.use((req, res) => {
  res.status(404).send('Not Found');
});


module.exports = app;
