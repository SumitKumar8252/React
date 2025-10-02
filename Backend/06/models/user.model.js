const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({  /// subdocument
    orderName:{type:String, required:true},
    orderAmount:{type:Number, required:true},
    deliveryStatus:{type:Boolean, default:false},
    modeOfPayment:{type:String, enum:["COD", "UPI", "NetBanking", "DebitCard", "CreditCard", "GiftCard"]}
})

const addressSchema = new mongoose.Schema({
    houseNo:{type:String,required:true},
    area:{type:String, required:true},
    landmark:String,
    teshil:{type:String, required:true},
    district:{type:String, required:true},
    state:{type:String, required:true},
    pincode:{type:Number, required:true},
    mobileNumber:{type:Number,required:true}
   })

const userSchema = new mongoose.Schema({
    name:{type: String, required:true}, /// name field cannot be skipped
    email:{type:String, required:true, unique:true}, /// no duplicate emails are allowed and email is cannot be skipped
    password:{type:String, default:"pass123"}, // if user is sending password then okay or else it will be set to default as pass123 by mongoose
    age:{type:Number, min:20, max:100},// age is validated between 20 to 100
    gender:{type:String, enum:["male", "female"]} , // only words "male" or "female" are allowed, not "Male", "Fe-male", "fe-male" etc
    orders:[ orderSchema],
    address:[ addressSchema], 

})

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;