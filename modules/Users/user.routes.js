const express = require("express");
const userController = require("./user.controllers");
const { validationErrors } = require("./../../middlewares/validatorErrors");
const { registerValidator } = require("../../validators/user.register");
const { loginValidator } = require("../../validators/user.login");

const router = express.Router();
router
    .route("/register")
    .get(userController.registerPage)
    .post(registerValidator(), validationErrors, userController.create);
router
    .route("/login")
    .get(userController.loginPage)
    .post(loginValidator(), validationErrors, userController.login);

module.exports = router;
