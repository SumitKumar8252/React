const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 10, max: 100 },
  email: { type: String, required: true, unique: true },
  password: { type: String, default: "pass123" },
  gender: {type: String, enum:["male", "female"]},
  address: [
    {
      houseNo: { type: Number, required: true },
      area: { type: String, required: true },
      pincode: { type: Number, required: true },
      state: { type: String, required: true },
      mobileNumber: {type: Number, required: true}
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
