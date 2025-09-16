const fs = require("fs");
const express = require("express");
const courseRouter = require("./routes/course.routes");
const lectureRouter = require("./routes/lecture.routes");
const loggerMiddleware = require("./middlewares/logger");
const app = express();

app.use(express.json()); // parse the file from the source (Postman, or anyother)

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("<h1>Hello from Home</h1>");
});

// Course Route -------------------------------------------
app.use("/courses", courseRouter);

// Lecture Route -----------------------------------------
app.use("/lectures", lectureRouter);

// Undefined / Unhandled Routes
app.use("/", (req, res) => {
  res.status(404).json({ msg: "This request is not found !!" });
});

// Listen or start the local server -------------------------------------------
app.listen(3000, () => {
  console.info("Server Stared ...");
});
