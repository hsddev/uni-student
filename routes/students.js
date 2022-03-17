// Dependencies
const router = require("express").Router();
const studentController = require("../controllers/students");

// find
router.get("/", studentController.index);

// insert new student
router.post("/create", studentController.create);

// delete
router.delete("/delete/:id", studentController.delete);

// update
router.get("/update/:id", studentController.edit);
router.put("/update/:id", studentController.update);

module.exports = router;
