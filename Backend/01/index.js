//// Read File
const fs= require("fs")

console.log("Reading Start")

fs.readFile("./data.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("Error: ", err)
    }
    if(data){
        console.log("Data: ", data)
    }
})

console.log("Reading stopped")

//// Write File

// const fs= require("fs")

fs.writeFile("./data1.txt", "This file will create by its own and write this text on it.", (err)=>{
    if(err){
        console.log("Error: ", err)
    }
    console.log("File has been written and created.")
})

// Exporting file 

const sum= require("./helper")
sum(2,3)