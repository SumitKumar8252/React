const { getData, addOrUpdateCourse } = require("../models/course.model");

const getAllCourses = (req, res) => {
  let data = getData().courses;
  // console.log(data)
  res.status(201).json({ msg: "All courses", data });
};

const addCourse = (req, res) => {
  let newCourse = req.body;

  let data = getData().data;
  let courses = getData().courses;

  let id = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
  newCourse = { ...newCourse, id };

  courses.push(newCourse);
  data.courses = courses;

  addOrUpdateCourse(data);
  res.status(201).json(data);
};

const updateCourseById = (req, res) => {
  let id = Number(req.params.id);
  let updatedData = req.body;

  let dataObj = getData();
  let data = dataObj.data;
  let courses = dataObj.courses;

  // Check whether id exists
  let index = courses.findIndex((course) => course.id === id);
  if (index === -1) {
    return res.json({ msg: "Course not found" });
  }

  let updatedCourses = courses.map((el) => {
    if (el.id === id) {
      return { ...el, ...updatedData };
    } else {
      return el;
    }
  });

  data.courses = updatedCourses;
  addOrUpdateCourse(data);

  res.status(200).json({ msg: "Course has been updated successfully." });
};

const deleteCourseById = (req, res) => {
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
};

const getByQuery = (req, res) => {
  let title = req.query.title;

  let courses = getData().courses;

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
};

module.exports = {
  getAllCourses,
  getByQuery,
  addCourse,
  updateCourseById,
  deleteCourseById,
};
