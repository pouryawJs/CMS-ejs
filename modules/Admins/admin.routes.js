const express = require("express");
const AdminController = require("./admin.conrollers");
const { validationErrors } = require("./../../middlewares/validatorErrors");
const { registerValidator } = require("../../validators/user.register");

const router = express.Router();

module.exports = router;
