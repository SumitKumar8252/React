const express = require("express");
const fs = require("fs");
const { getData, addOrUpdateCourse } = require("../model/course.model");

const courseRouter = express.Router();

// Show all of the data -------------------------------------------
courseRouter.get("/all-courses", (req, res) => {
  let data = getData().courses;
  // console.log(data)
  res.status(201).json({ msg: "All courses", data });
});

//search by query param -------------------------------------------
courseRouter.get("/course", (req, res) => {
  let title = req.query.title;

  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let courses = data.courses;

  let flag = true;
  courses.forEach((el, i) => {
    if (el.title.includes(title)) {
      flag = false;
      res.json({ msg: "Course", course: el });
    }
  });
  if (flag === true) {
    res.status(404).json({ msg: "Course not found .." });
  }
});

//Add the course -------------------------------------------
courseRouter.post("/add-course", (req, res) => {
  let newCourse = req.body;

  let data = getData().data;
  let courses = getData().courses;

  let id = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
  newCourse = { ...newCourse, id };

  courses.push(newCourse);
  data.courses = courses;

  addOrUpdateCourse(data);
  res.status(201).json(data);
});

//Update the course -------------------------------------------
courseRouter.put("/update-course/:id", (req, res) => {
  let id = req.params.id;
  let updateCourse = req.body;

  let data = getData().data;
  let courses = getData().courses;

  //check whether id is available or not !!
  let index = courses.findIndex((course) => course.id == id);
  if (index === -1) {
    res.json({ msg: "Course is not found" });
  } else {
    updateCourse = courses.map((el, i) => {
      if (el.id === id) {
        return { ...el, ...updateCourse };
      } else {
        return el;
      }
    });

    //replace with older one
    data.courses = updateCourse;
    addOrUpdateCourse(data);
    
    res.status(201).json({ msg: "Course is been updated .." });
  }
});

// Delete the course -------------------------------------------
courseRouter.delete("/delete-course/:id", (req, res) => {
  let id = req.params.id;

  let data = getData().data;
  let courses = getData().courses;

  let index = courses.findIndex((course) => course.id == Number(id));
  if (index == -1) {
    res.json({ msg: "Course not found" });
  } else {
    let updateCourse = courses.filter((el, i) => {
      return el.id != Number(id);
    });

    //replace the old courses
    data.courses = updateCourse;
    addOrUpdateCourse(data);
    res.json({ msg: "Course is Deleted .." });
  }
});

module.exports = courseRouter;
