const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const connectDB = require("./config/db_config.js");

dotenv.config();
const app = express();

// MongoDB Connection
connectDB();

//Middle-Ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// tesing route /api/auth
app.use("/api/tasks ", taskRoutes);
app.use("/api/users", authRoutes);

// testing get request handling
app.get("/", (req, res) => {
  res.send("Backend is Working");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
