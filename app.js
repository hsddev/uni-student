// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

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

// find
app.get("/", (req, res) => {
    Student.find({}, (err, students) => {
        if (err) console.log(err);
        students.forEach((student) => console.log(student));
    });
    res.render("index");
});

// insert new student
app.post("/create", (req, res) => {
    const firstStudent = new Student({
        name: req.body.name,
        age: req.body.age,
    });

    firstStudent.save().then(() => res.redirect("/"));
});

// delete
app.get("/delete/:id", (req, res) => {
    Student.deleteOne({ _id: req.params.id }, (err) => {
        if (err) console.log(err);
        console.log("Student is deleted");
    });
});

// update
app.get("/update/:id/:name/:age", (req, res) => {
    Student.updateMany(
        { _id: req.params.id },
        { name: req.params.name, age: req.params.age },
        { multi: true },
        (err) => {
            if (err) console.log(err);
            console.log("Student data is updated");
        }
    );
});

app.listen(3000, () => {
    console.log("Start listening to port 3000");
});
