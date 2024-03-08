// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");






function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try{
    const decodedvalue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedvalue.username) {
        req.username = decodedvalue.username;
        next();
    }else{
        res.status(403).json({
            msg :    "You are not authorized to access this resource" 
        })
    }
    } catch(e){
        res.json({
            msg : "incorrect input error in middleware"
        })
    }
}
    module.exports = adminMiddleware;