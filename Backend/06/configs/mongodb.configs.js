require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully Connected to DB.. ");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = connectToDB;
