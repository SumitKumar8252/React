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

UserModel.post("/add-user", (req, res)=>{
    console.log(req.body)
    //add body the req.body into DB  by calling UserModel
    // .create()

    let user= UserModel.create()
})

UserRouter.get("/test", (req, res) => {
  res.send("<h1> CONNECTED </h1>");
});

module.exports = UserRouter;
