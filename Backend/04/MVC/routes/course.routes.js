const express = require("express");
const fs = require("fs");

const { getAllCourses, getByQuery, addCourse, updateCourseById, deleteCourseById } = require("../controllers/course.controller");
const dataCheck = require("../middlewares/dataCheck");

// For the routing 
const courseRouter = express.Router();

// Show all of the data -------------------------------------------
courseRouter.get("/all-courses", getAllCourses);

//search by query param -------------------------------------------
courseRouter.get("/course", getByQuery);

//Add the course -------------------------------------------

//  middleware ---> route
courseRouter.post("/add-course",dataCheck, addCourse);

//Update the course -------------------------------------------
courseRouter.put("/update-course/:id", updateCourseById);

// Delete the course -------------------------------------------
courseRouter.delete("/delete-course/:id", deleteCourseById);

module.exports = courseRouter;
