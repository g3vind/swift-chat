const express = require("express");
const { chats } = require("./data/data");
const app = express();

const PORT = 5000;

// ROUTES
app.get("/", (req, res) => {
  res.send("<h1>API IS RUNNING</h1>");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}🚀`);
});
