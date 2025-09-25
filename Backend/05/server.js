require("dotenv").config();     // connecting witht he .env file
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/");     // on terminal "mongosh"
    console.log("Connected to DB");
  } catch (error) {
    console.info(error);
  }
};

connectToDB();

//Create an schema  basically, it's a blueprint of and DB.
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
});

//Model is responsible to interact with DB
const userModel = mongoose.model("User", userSchema);

//make a typical Interaction with DB
userModel.create({ name: "Alice", age: 25, isMarried: false }).then(() => {
  console.log(
    "Data Added is Database under collection user in databse backendtest"
  );
});




app.get("/test", (req, res) => {
  res.send(`<h1>Test page on localhost:${process.env.PORT}</h1>`);
});
app.listen(process.env.PORT, () => {
  console.log(`Server ${process.env.PORT}`);
});
