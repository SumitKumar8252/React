const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 20, max: 100 },
  email: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
