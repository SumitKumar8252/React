const fs= require("fs")
const express= require("express")
let app= express ()

app.get("/test", (req, res)=>{
    res.send("this is Test route")
})

app.get('/about', (req, res)=>{
    res.send("This is about route")
})

app.get("/read", (req, res)=>{
    let data= fs.readFileSync('./data.txt', "utf-8")
    console.log(data)
    res.send(data)
})

app.listen(3000, ()=>{
    console.log("Server 3000 is active now !!")
})
