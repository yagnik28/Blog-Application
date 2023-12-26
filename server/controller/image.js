const grid = require("gridfs-stream");
const mongoose = require("mongoose");

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

async function getImage(req, res) {
    try {
        const file = await gfs.files.findOne({ name: req.params.filename });
        const readSteam = gridfsBucket.openDownloadStream(file._id);
        readSteam.pipe(res); 
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const url = "http://localhost:3000";

async function uploadImage(req, res){
    const { file, name } = req.body;
    if(!file) {
        return res.status(404).json({ msg: "File Not Found" });
    }
    return res.status(404).json({ msg: "Upload is working and give 200 but getting image is not working so to keep one image for each blog giving 404 knowingly." })
    // const imageUrl = `${url}/file/${name}`;
    // return res.json(imageUrl);
}

module.exports = {
    uploadImage,
    getImage
}

