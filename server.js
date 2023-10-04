const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require('./routes/todoRouter');
const { PORT, FRONT_END_URL1, FRONT_END_URL2 } = require("./config");
const connectDB = require("./config/connectDB");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database configuration
connectDB();

const corsOptions = {
    origin: [
      FRONT_END_URL1,
      FRONT_END_URL2
    ],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  
  app.use(cors(corsOptions));
  
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to the todos application." });
  })
// Routes
app.use('/api/todos', todoRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
