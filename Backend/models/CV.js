const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  age: Number,
  gender: String,
  skills: String,
  experience: String,
  education: String,
  habits: String,
});

module.exports = mongoose.model("CV", cvSchema);