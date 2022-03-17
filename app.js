// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = new express();

mongoose.connect(
    "mongodb+srv://jddev:test123@cluster0.g3xru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const schema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Student = mongoose.model("Student", schema);

// insert new student
app.get("/create/:name/:age", (req, res) => {
    const firstStudent = new Student({
        name: req.params.name,
        age: req.params.age,
    });

    firstStudent.save().then(() => {
        console.log("New student inserted");
    });
});

// find
app.get("/", (req, res) => {
    Student.find({}, (err, students) => {
        if (err) console.log(err);
        students.forEach((student) => console.log(student));
    });
});

// delete
app.get("/delete", (req, res) => {
    Student.deleteOne({ _id: req.params.id }, (err) => {
        if (err) console.log(err);
        console.log("Student is deleted");
    });
});
app.listen(3000, () => {
    console.log("Start listening to port 3000");
});
