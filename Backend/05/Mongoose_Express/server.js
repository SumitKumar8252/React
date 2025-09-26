require("dotenv").config();

const express = require("express");
const connectToDB = require("./configs/mongodb.config");

connectToDB()
const app = express();

app.use(express.json())


app.listen(process.env.PORT, ()=>{
    console.log("Server is Ready !!")
})