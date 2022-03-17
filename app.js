// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = new express();

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

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

app.listen(3000, () => {
    console.log("Start listening to port 3000");
});
