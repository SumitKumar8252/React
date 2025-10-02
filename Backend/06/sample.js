const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, default: "pass123" },
  age: { type: Number, min: 20, max: 100 },
  gender: { type: String, enum: ["male", "female"] },
  address: [
    /// nested document
    {
      houseNo: { type: String, required: true },
      area: { type: String, required: true },
      landmark: String,
      state: { type: String, required: true },
      pincode: { type: Number, required: true },
      mobileNumber: { type: Number, required: true },
    },
  ],
  orders: [
    {
      orderName: { type: String, required: true },
      orderAmount: { type: String, required: true },
      deliveryStatus: { type: Boolean, default: false },
      modeOfPayment: {
        type: String,
        enum: [
          "COD",
          "UPI",
          "NetBanking",
          "DebitCard",
          "CreditCard",
          "GiftCard",
        ],
      },
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

// {
//     "houseNo":"141-98",
//     "area":"Bapuji Nagar",
//     "landmark":"Near Bapuji Statue",
//     "teshil":"Patna",
//     "district":"Patna",
//     "state":"Bihar"
//     "pincode":123456,
//     "mobileNumber":9876543210
//    }


// {
//     "orderName": "Mobile",
//     "orderAmount": 10000,
//     "modeOfPayment": "UPI"
//   }
