const fs = require("fs");
const express = require("express");
const courseRouter = require("./routes/course.routes");
const lectureRouter = require("./routes/lecture.routes");
const app = express();

app.use(express.json()); // parse the file from the source (Postman, or anyother)

app.get("/", (req, res) => {
  res.send("<h1>Hello from Home</h1>");
});

// Course Route -------------------------------------------
app.use("/courses", courseRouter);

// Lecture Route -----------------------------------------
app.use("/lectures", lectureRouter);






// Listen or start the local server -------------------------------------------
app.listen(3000, () => {
  console.info("Server Stared ...");
});
