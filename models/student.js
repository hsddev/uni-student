const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: { type: Number, required: true },
});

const Student = mongoose.model("Student", schema);

module.exports = Student;
