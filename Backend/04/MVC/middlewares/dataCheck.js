// const express= require("express")

// Check the body of request ------
const dataCheck=(req, res, next)=>{
    const {title, instructor, duration}= req.body
    if(!title && !instructor && !duration){
        res.status(406).json({msg: "Wrong Request !"})
    }else{
        next()
    }
}

// courseRouter.use(dataCheck);

module.exports= dataCheck;