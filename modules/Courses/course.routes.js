const express = require("express");
const courseController = require("./course.controllers");
const { validationErrors } = require("./../../middlewares/validatorErrors");
const { addCourseValidator } = require("./../../validators/newCourse");
const { isAdmin } = require("../../middlewares/isAdmin");

const router = express.Router();

router.route("/").get(isAdmin, courseController.coursesPanel);
router
    .route("/add")
    .post(
        isAdmin,
        addCourseValidator(),
        validationErrors,
        courseController.addCourse
    );

module.exports = router;
