const express = require("express");
const courseController = require("./course.controllers");
const { validationErrors } = require("./../../middlewares/validatorErrors");

const router = express.Router();

router.get("/", courseController.coursesPanel);

module.exports = router;
