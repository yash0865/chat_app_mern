import jwt from "jsonwebtoken";

const generateTokenSetCookie = (userID, res) => {
    const token = jwt.sign(
        { userID },
        process.env.JWT_SECRET,
        { expiresIn: '15d' }
    )

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 1000, //converting days to milli second
        httpOnly: true,// prevent XSS attacks cross-site scripting attacks,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "developement"
    })
}

export default generateTokenSetCookie;