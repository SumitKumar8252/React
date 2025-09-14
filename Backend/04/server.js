const fs= require("fs")
const express= require('express')
const app= express()

app.use(express.json()) // parse the file from the source

app.get('/', (req, res)=>{
    res.send("Hello from Home")
})

// Show all of the data
app.get("/all-courses", (req, res)=>{
    let data = fs.readFileSync("./db.json", "utf-8")
    // console.log(data)
    res.send(data)
})

//Add the course
app.post('/add-course', (req, res)=>{
    let newCourse= req.body

    let data= JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    let courses= data.courses

    let id= courses.length > 0 ? courses[courses.length - 1].id + 1 : 1
    newCourse={...newCourse, id}

    courses.push(newCourse)

    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.json(data)
})

//Update the course
app.put("/update-course/:id", (req, res)=>{
    let id= req.params.id
    let updateCourse= req.body
    
    let data= JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    let courses= data.courses

    //check whether id is available or not !!
    let index= courses.findIndex((course)=> course.id== id)
    if(index=== -1){
        res.json({msg: "Course is not found"})
    }
    else{
        updateCourse= courses.map((el, i)=>{
            if(el.id===id){
                return {...el, ...updateCourse}
            }else{
                return el;
            }
        })

        //replace with older one
        data.courses= updateCourse

        fs.writeFileSync("./db.json", JSON.stringify(data))
        res.json({msg: "Course is been updated .."})
    }
})

// Delete the course
app.delete("/delete-course/:id", (req, res)=>{
   let id= req.params.id
   
   let data= JSON.parse(fs.readFileSync("./db.json", "utf-8"))
   let courses= data.courses

   let index= courses.findIndex((course)=> course.id== Number(id))
   if(index== -1){
    res.json({msg: "Course not found"})
   } else{
    let updateCourse= courses.filter((el, i)=>{
        return el.id != Number(id)
    })

    //replace the old courses
    data.courses= updateCourse
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.json({msg: "Course is Deleted .."})
   }
})

app.listen(3000, ()=>{
    console.info("Server Stared ...")
})