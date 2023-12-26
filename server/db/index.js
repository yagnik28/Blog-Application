const mongoose = require("mongoose");

async function connection(MONGOOSE_URL){
    try{
        await mongoose.connect(MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connected Successfully.")
    }
    catch(error){
        console.log("Error occured while connecting with database", error);
    }
}

module.exports = connection; 