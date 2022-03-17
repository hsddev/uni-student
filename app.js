// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const Student = require("./models/student");
const router = require("./routes/students");

app.use(bodyParser.json());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

mongoose.connect(
    "mongodb+srv://jddev:test123@cluster0.g3xru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use("/", router);

app.listen(3000, () => {
    console.log("Start listening to port 3000");
});
