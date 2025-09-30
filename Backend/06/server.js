require("dotenv").config();

const express = require("express");
const connectToDB = require("./configs/mongodb.configs");
const userRoute = require("./routes/user.routes");
const app = express();

connectToDB();
app.use(express.json()); //Parse this with the middleware


//User Routes
app.use("/users", userRoute)


//Handling the undefined routes
app.use((req, res)=>{
  res.status(404).json({msg: "Not found.. !!"})
})

app.listen(process.env.PORT, () => {
  console.log("Server Started !!");
});
