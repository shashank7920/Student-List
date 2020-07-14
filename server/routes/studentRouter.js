const express = require("express");
const Student = require("../models/student");
const router1 = express.Router();

router1.route("/getAll").get(function (req, res) {
  Student.find(function (err, students) {
    if (err) {
      console.log(err);
    } else {
      res.json(students);
    }
  });
});

router1.route("/add").post(function (req, res) {
  let student = new Student(req.body);
  student
    .save()
    .then((student) => {
      res.status(200).json({ student: "student added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new student failed");
    });
});

router1.route("/update/:id").post(function (req, res) {
  Student.findById(req.params.id, function (err, student) {
    if (!student) res.status(404).send("data is not found");
    else student.name = req.body.name;
    student.register_no = req.body.register_no;
    student.branch = req.body.branch;
    student.age = req.body.age;

    student
      .save()
      .then((student) => {
        res.json(student);
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});

router1.route("/getAll/:id").get(function (req, res) {
  let id = req.params.id;
  Student.findById(id, function (err, stud) {
    res.json(stud);
  });
});

module.exports = router1;
