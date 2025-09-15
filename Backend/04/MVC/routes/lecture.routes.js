const express = require("express");

const fs = require("fs");

const lectureRouter = express.Router();

// Lectures Routes ------------------------------------
lectureRouter.get("/all-lectures", (req, res) => {
  res.status(200).json({ msg: "List of Lecture .." });
});

lectureRouter.post("/add-lecture", (req, res) => {
  res.status(201).json({ msg: "Lecture is added .." });
});

lectureRouter.put("/update-lecutre/:id", (req, res) => {
  res.status(201).json({ msg: "Lecture is Updated .." });
});

lectureRouter.delete("/delete-lecture/:id", (req, res) => {
  res.status(201).json({ msg: "Lecture is been deleted .." });
});

module.exports = lectureRouter;
