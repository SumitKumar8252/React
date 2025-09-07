const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Test Route is working fine !!");
});

app.get("/test1", (req, res) => {
  res.json({ msg: "This is Test 1." });
});

app.post("/add-data", (req, res) => {
  console.log(req.body);
  res.send("Data added ...");
});

app.put("/update-data", (req, res) => {
  res.send("Data updated ..");
});

app.delete("/delete-data", (req, res) => {
  res.send("Data deleted ..");
});
app.listen(3000, () => {
  console.log("Server is ready !!");
});
