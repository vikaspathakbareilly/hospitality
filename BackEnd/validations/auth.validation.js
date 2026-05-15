const { body } = require("express-validator");

class AuthValidation {

    signupValidation = [

        body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage(
            "Name must be at least 3 characters"
        ),

        body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),

        body("mobile")
        .notEmpty()
        .withMessage("Mobile number is required")
        .matches(/^[0-9]{10}$/)
        .withMessage(
            "Mobile number must be 10 digits"
        ),

        body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage(
            "Password must be at least 6 characters"
        ),
    ];

    loginValidation = [

        body("emailOrMobile")
        .notEmpty()
        .withMessage(
            "Email or Mobile is required"
        ),

        body("password")
        .notEmpty()
        .withMessage("Password is required")
    ];
}

module.exports = new AuthValidation();