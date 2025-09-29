const express= require("express")
const UserModel = require("../models/user.model")

const userRoute= express()

userRoute.post("/add-user", async (req, res)=>{
try {
    let user= await UserModel.create(req.body)
    res.status(200).json({msg: "User Added..", user})
} catch (error) {
    console.log(error)
}
})

module.exports= userRoute