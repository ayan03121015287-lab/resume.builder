const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const cors = require("cors");

dns.setDefaultResultOrder("ipv4first");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/cv", require("./routes/cv"));

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 60;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});