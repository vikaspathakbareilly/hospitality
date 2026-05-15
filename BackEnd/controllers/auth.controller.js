const authService = require("../services/auth.service");

class AuthController {

    async signup(req, res) {

        const result = await authService.signup(req.body);

        res.status(201).json({
            success: true,
            message: "Signup Successful",
            data: result
        });
    }

    async login(req, res) {

        const result = await authService.login(req.body);

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: result
        });
    }
}

module.exports = new AuthController();