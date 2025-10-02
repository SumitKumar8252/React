const express = require("express");
const UserModel = require("../models/user.model");

const UserRouter = express.Router();

UserRouter.post("/add-user", async (req, res) => {
  /// name, email, age, gender is coming from req.body which is an object
  // that should be added into db through UserModel
  try {
    let user = await UserModel.create(req.body);
    res.status(200).json({ msg: "User Created", user });
  } catch (err) {
    // 500 internal server error
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
});

UserRouter.patch("/add-address/:userId",async (req,res)=>{
  /// address is coming from req.body
  /// I need userId as ref, userId should be passed as path params
  // find the user by userId
  /// push the new address into address array present in the user document
  /// save the user, 
  const {userId} = req.params;
  try{
     let user = await UserModel.findById(userId);
     if(!user){
      // user noit found
      res.status(404).json({msg:"User Not Found.."})
     }else{
      // user found
      // req.body is object of new address
      user.address.push(req.body)
      console.log(user.address);
      /// then save the user document which stores new address in DB
      await user.save()
      res.status(201).json({msg:`Address added to the user ${user.name}`})
     }
  }catch (err) {
    // 500 internal server error
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
} )


UserRouter.patch("/add-order/:userId",async (req,res)=>{
  /// order is coming from req.body
  /// I need userId as ref, userId should be passed as path params
  // find the user by userId
  /// push the new order into orders array present in the user document
  /// save the user, 
  const {userId} = req.params;
  try{
     let user = await UserModel.findById(userId);
     if(!user){
      // user not found
      res.status(404).json({msg:"User Not Found.."})
     }else{
      // user found
      // req.body is object of new address
      user.orders.push(req.body)
      console.log(user.orders);
      /// then save the user document which stores new address in DB
      await user.save()
      res.status(201).json({msg:`Order added to the user ${user.name}`})
     }
  }catch (err) {
    // 500 internal server error
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
} )

/// Female users less than age 30

UserRouter.get("/analytics/flt30", async (req,res)=>{
  let users = await UserModel.find({$and:[{gender:"female"}, {age:{$lte:30}}]},{name:1, age:1, gender:1})
  res.json(users)
})

/// Users from Delhi and Karanataka
UserRouter.get("/analytics/ufdb", async (req,res)=>{
  let users = await UserModel.find({"address.state":{$in:["Delhi", "Karnataka", "Bihar"]}}, {name:1})
  res.json(users)
})
// Users whose order is more than 5000
UserRouter.get("/analytics/ogt50k", async (req,res)=>{
  let users = await UserModel.find({"orders.orderAmount":{$gte:50000}}).lean();

  let filetredOrders = users.map((user)=>{
    return {...user,orders: user.orders.filter((el)=> el.orderAmount>=50000)}
  })
  
  res.json(filetredOrders)
})

module.exports = UserRouter;
