require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
    origin:[ "http://localhost:5173","https://sri-murugan.vercel.app"], // Replace with your frontend URL
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  };

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Import Routes
const contactRoutes = require("./routes/Contact");
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
