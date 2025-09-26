// we will create a function with connecting mongoDB and NodeJS

const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongooseTest");
    console.log("Conneted to DB..");
  } catch (error) {
    console.log("Error found !")
    console.error(error);
  }
};

module.exports = connectToDB;
