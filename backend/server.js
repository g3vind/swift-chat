const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

// Enable CORS for all routes
app.use(cors());

// PORT
const PORT = process.env.PORT || 5000;

// ROUTES
app.get("/", (req, res) => {
  res.send("<h1>API IS RUNNING</h1>");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}🚀`);
});
