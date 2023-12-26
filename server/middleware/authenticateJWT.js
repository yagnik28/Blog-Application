const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config();

const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY;

async function authenticateJwt(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({ msg: "Token is missing." });
    }

    jwt.verify(token, ACCESS_SECRET_KEY, (err, user) => {
        if(err){
            return res.status(403).json({ msg : "Unauthorized. Login again to post a blog." })
        }
        req.user = user;
        next();
    });

}

module.exports = authenticateJwt;