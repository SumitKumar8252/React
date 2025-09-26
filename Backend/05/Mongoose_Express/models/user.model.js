const mongoose= require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        email: String,
        isMarried: Boolean,
        location: String
    }
)

//Create model
const UserModel= mongoose.model("User", userSchema)

//export Model & Model is responsible to Interact with the DB.
module.exports= UserModel;