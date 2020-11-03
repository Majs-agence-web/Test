const news = require("./routes/newsRoutes");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/CBT")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Cound not connect to MongoDB...", err));

app.use(express.json());
app.use("/api/news", news);

const port = process.env.PORT || 8080;
app.listen(8080, () => console.log("Listening on port ${port}..."));
