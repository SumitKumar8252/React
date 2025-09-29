require("dotenv").config();

const express = require("express");
const connectToDB = require("./configs/mongodb.configs");
const userRoute = require("./routes/user.routes");
const app = express();

connectToDB();
app.use(express.json()); //Parse this with the middleware

app.use("/test", (req, res)=>{
    res.json({msg: "Test Route.."})
})

//User Routes
app.use("/users", userRoute)

app.listen(process.env.PORT, () => {
  console.log("Server Started !!");
});
