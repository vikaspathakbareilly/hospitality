const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const AppError = require("../utils/appError");

class AuthService {

    async signup({ name, email, mobile, password }) {

        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    { email },
                    { mobile }
                ]
            }
        });

        if (existingUser) {
            throw new AppError(
                "Email or Mobile already exists",
                400
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            mobile,
            password: hashedPassword
        });

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            mobile: user.mobile
        };
    }

    async login({ emailOrMobile, password }) {

        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: emailOrMobile },
                    { mobile: emailOrMobile }
                ]
            }
        });

        if (!user) {
            throw new AppError(
                "Invalid Email or Mobile",
                401
            );
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            throw new AppError(
                "Invalid Password",
                401
            );
        }

        const token = jwt.sign({
                id: user.id,
            },
            process.env.JWT_SECRET, {
                expiresIn: "1d"
            }
        );

        return {
            token,
            user
        };
    }
}

module.exports = new AuthService();