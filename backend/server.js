const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config(); // Load environment variables from .env file

connectDB(); // Connect to MongoDB

const app = express();

app.use(express.json()); // To accept JSON data

// Enable CORS for all routes
app.use(cors());

// PORT
const PORT = process.env.PORT || 5000;

// ROUTES
app.get("/", (req, res) => {
  res.send("<h1>API IS RUNNING</h1>");
});

app.use("/api/user", userRoutes);

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

// LISTEN
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT} 🚀`);
});
