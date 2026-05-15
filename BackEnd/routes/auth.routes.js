const express = require("express");

const router = express.Router();

const authController = require(
    "../controllers/auth.controller"
);

const catchAsync = require(
    "../utils/catchAsync"
);

const authValidation = require(
    "../validations/auth.validation"
);

const validationMiddleware = require(
    "../middleware/validation.middleware"
);

router.post(
    "/signup",

    authValidation.signupValidation,

    validationMiddleware,

    catchAsync(authController.signup)
);

router.post(
    "/login",

    authValidation.loginValidation,

    validationMiddleware,

    catchAsync(authController.login)
);

module.exports = router;