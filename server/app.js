const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const connectDB = require("./config/db_config.js");

dotenv.config();
const app = express();

// MongoDB Connection
connectDB();

//Middle-Ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// tesing route
app.use("/api/users", userRoutes);

// testing get request handling
app.get("/", (req, res) => {
  res.send("Backend is Working");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
