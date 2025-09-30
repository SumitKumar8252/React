const express = require("express");
const UserModel = require("../models/user.model");

const userRoute = express();

userRoute.get("/test", (req, res)=>{
  res.status(200).send("<h1>CONNECTED</h1>")
})

userRoute.get('/all-users', async(req, res)=>{
  try {
    let users= await UserModel.find({})
    res.status(200).json({msg: "Users List", users})
  } catch (error) {
   res.status(400).json({msg: "Not found !!"}) 
  }
})

userRoute.post("/add-user", async (req, res) => {
  try {
    let user = await UserModel.create(req.body);
    res.status(200).json({ msg: "User Added..", user });
  } catch (error) {
    console.log(error);
  }
});

userRoute.patch("/edit-user/:userId", async (req, res) => {
  const { userId } = req.params;
  let user = await UserModel.findById(userId);
  if (!user) {
    res.status(404).json({ msg: "User Not found !!" });
  }else{
    await UserModel.findByIdAndUpdate(userId, req.body )
    res.json({msg: "Updated.."})
  }
});


module.exports = userRoute;
