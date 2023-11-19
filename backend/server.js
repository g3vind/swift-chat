const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();
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
  //   console.log(singleChat);
  res.send(singleChat);
});

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}🚀`);
});
