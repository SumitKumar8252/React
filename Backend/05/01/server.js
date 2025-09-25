require("dotenv").config(); // connecting witht he .env file
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.URL); // on terminal "mongosh"
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

/// Method 1 to create data on DB
const userModel = mongoose.model("User", userSchema);

//make a typical Interaction with DB

userModel.create({ name: "Bob", age: 25, isMarried: false }).then(() => {
  console.log(
    "Data created in Database under collection user in database backendtest"
  );
});
userModel.create({ name: "Sumit", age: 24, isMarried: true });

let newUser = new userModel({ name: "Alice", age: 20, isMarried: false });
// let newUser2 = new userModel({ name: "Don", age: 20, isMarried: true });

// Method 2 to create - ( .save() )
// newUser2.save()
newUser
  .save()
  .then(() => {
    console.log("Data added !!");
  })
  .catch((err) => {
    console.log("Error : ", err);
  });

const user= userModel.find()
user.then((data)=>{
  console.log("updated: ", data)
}).catch((err)=>{
  console.log(err)
})


  // find and update  the data 
let updateUser= userModel.findByIdAndUpdate('68d5274f18f57adfa4e8c606', {name: "Bob the Builder"})
updateUser.then(()=>{
  console.log("User updated")
}).catch((err)=>{
  console.log(err)
})








app.get("/test", (req, res) => {
  res.send(`<h1>Test page on localhost: ${process.env.PORT}</h1>`);
});
app.listen(process.env.PORT, () => {
  console.log(`Server ${process.env.PORT}`);
});
