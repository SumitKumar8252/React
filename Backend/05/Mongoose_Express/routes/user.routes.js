const express = require("express");
const UserModel = require("../models/user.model");

const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
  // find all the documnets present in User Collection through UserModel

  try {
    let users = await UserModel.find({}); // Retrive all the documents from the User Collections
    res.status(200).json({ msg: "User Lists", users });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong !!" });
  }
});

UserRouter.post("/add-user", async (req, res) => {
  console.log(req.body); //body take the data from the postman body and give the data to the Mongo DB
  //add body the req.body into DB  by calling UserModel
  // .create()
  let user = await UserModel.create(req.body);
  res.status(200).json({ msg: "User added", user }); // this response should work only after data added into DB
});

// Update the user by ID
UserRouter.patch("/update-user/:userId", async (req, res) => {
  const { userId } = req.params;
  let user = await UserModel.findById(userId);
  if (!user) {
    res.status(404).json({ msg: "User Not found !!" });
  } else {
    await UserModel.findByIdAndUpdate(userId, req.body);
    res.status(201).json({ msg: "User Updated .." });
  }
});

//Delete User by ID
UserRouter.delete("/delete-user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    let user = await UserModel.findById(userId);
    if (!user) {
      res.status(404).json({ msg: "User not found !!" });
    } else {
      await UserModel.findByIdAndDelete(userId);
      res.status(201).json({ msg: "User Deleted.." });
    }
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong.." });
  }
});

// check in web browser 
UserRouter.get("/test", (req, res) => {
  res.send("<h1> CONNECTED </h1>");
});

module.exports = UserRouter;
