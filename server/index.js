const express = require("express");
const path    = require("path");

const app = express();

app.use(express.static(path.resolve("public")));

app.get("/redux-thunk", (req, res) => {
  res.sendFile(path.resolve("public/redux-thunk.html"));
});

app.get("/redux-saga", (req, res) => {
  res.sendFile(path.resolve("public/redux-saga.html"));
});

app.get("/redux-observable", (req, res) => {
  res.sendFile(path.resolve("public/redux-observable.html"));
});

app.get("/api", (req, res) => {
  res.sendFile(path.resolve("public/dummy.txt"));
});

const PORT = 8082;

app.listen(PORT, () => {
  console.log(`server is now listening on http://localhost:${PORT}`);
});
