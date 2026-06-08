const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/cv", require("./routes/cv"));

mongoose.connect("mongodb://localhost:27017/myReume");

app.listen(60, () => {
  console.log("Server running on 60");
});