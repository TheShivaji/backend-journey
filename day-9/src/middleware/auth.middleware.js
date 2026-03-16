const jwt = require("jsonwebtoken")

async function identifyUser(req, res, next) {
    
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Token not provided, Unauthorized access"
        })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT)
    } catch (error) {
        console.log("Error in post controller", error.message)
        return res.status(401).json({
            message: "User is not authorized"
        })
    }
    req.user = decoded

    next()
}
module.exports = 
    identifyUser
