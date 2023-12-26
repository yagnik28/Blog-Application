const { User, Token } = require("../model/index");
const jwt = require("jsonwebtoken"); 
const dotenv = require("dotenv");

dotenv.config();

const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

async function login(req, res){
    const user = await User.findOne({ username: req.body.username });
    if(!user){
        return res.status(404).json({ msg: "Usename Not Found" })
    } 
    try {
        if(req.body.password !== user.password){
            return res.status(400).json({ msg: "Password doesn't match" })
        }
        const accesstoken = jwt.sign({userId: user._id, username: user.username}, ACCESS_SECRET_KEY, { expiresIn: "1h" });
        const refreshtoken = jwt.sign({userId: user._id, username: user.username}, REFRESH_SECRET_KEY);
        const newToken = new Token({ token:  refreshtoken });
        await newToken.save();
        res.json({ msg: "User Logged in successfully.", accessToken: accesstoken, refreshToken: refreshtoken, username: user.username, password: user.password })
    } 
    catch (error) {
        res.status(500).json({ msg: "Erro while login the user." })
    }
}

module.exports = login;