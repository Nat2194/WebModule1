const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.use(express.static("public"));

app.get("/api/ping", (req, res) => {
  console.log("query: " + req.query.id);
  if (req.query.id === "1") {
    res.json({ id: "simpson" });
  }
  if (req.query.id === "2") {
    res.json({ id: "keanu" });
  }
  res.json({ id: "patrick" });
});

app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});
