const express = require("express");
const path    = require("path");

const app = express();

app.use(express.static(path.resolve("public")));

app.get("/example1", (req, res) => {
  res.sendFile(path.resolve("public/example1.html"));
});

app.get("/example2", (req, res) => {
  res.sendFile(path.resolve("public/example2.html"));
});

app.get("/example3", (req, res) => {
  res.sendFile(path.resolve("public/example3.html"));
});

app.get("/api", (req, res) => {
  res.sendFile(path.resolve("public/photo-big.jpg"));
});

const PORT = 8082;

app.listen(PORT, () => {
  console.log(`server is now listening on http://localhost:${PORT}`);
});
