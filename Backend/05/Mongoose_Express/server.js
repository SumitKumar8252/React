require("dotenv").config();

const express = require("express");
const connectToDB = require("./configs/mongodb.config");
const UserRouter = require("./routes/user.routes");

connectToDB()
const app = express();

app.use(express.json())         // json body parser middleware



app.use("/users", UserRouter)


app.listen(process.env.PORT, ()=>{
    console.log("Server is Ready !!")
})