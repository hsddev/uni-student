const Student = require("../models/student");

module.exports = {
    index: (req, res) => {
        Student.find({}, (err, students) => {
            if (err) console.log(err);
            res.render("index", { students: students });
        });
    },

    create: (req, res) => {
        const firstStudent = new Student({
            name: req.body.name,
            age: req.body.age,
        });

        firstStudent.save().then(() => res.redirect("/"));
    },

    edit: (req, res) => {
        const id = req.params.id;
        Student.find({}, (err, students) => {
            res.render("listEdit", { students: students, studentID: id });
        });
    },

    update: (req, res) => {
        const id = req.params.id;
        Student.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                age: req.body.age,
            },
            (err) => {
                if (err) return res.send(500, err);
                else res.redirect("/");
            }
        );
    },

    delete: (req, res) => {
        Student.deleteOne({ _id: req.params.id }, (err) => {
            if (err) console.log(err);
            else res.redirect("/");
        });
    },
};
