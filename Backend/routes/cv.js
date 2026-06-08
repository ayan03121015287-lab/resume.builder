const express = require("express");
const router = express.Router();
const CV = require("../models/CV");

// CREATE
router.post("/", async (req, res) => {
  const cv = new CV(req.body);
  await cv.save();
  res.json(cv);
});

// GET ALL (by user)
router.get("/:userId", async (req, res) => {
  const cvs = await CV.find({ userId: req.params.userId });
  res.json(cvs);
});

// GET SINGLE
router.get("/single/:id", async (req, res) => {
  const cv = await CV.findById(req.params.id);
  res.json(cv);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await CV.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await CV.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;