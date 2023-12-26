const { User } = require("../model/index")

async function signup(req, res){
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.json({msg: "User Added Succefully."});
    } 
    catch (error) {
        res.status(500).json({msg: "Error occured while adding user"})
    }
}

module.exports = signup;