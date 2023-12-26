const multer = require("multer")
const { GridFsStorage } = require("multer-gridfs-storage");
const dotenv = require("dotenv")

dotenv.config();

const MONGOOSE_URL = process.env.MONGOOSE_URL;

const storage = new GridFsStorage({
    url: MONGOOSE_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
            const matchType = ["image/png", "image/jpeg", "image/jpg"];
            if(matchType.indexOf(file.memeType) === -1) {
                return `${Date.now()}-blog-${file.originalname}`;
            }
            return {
                bucketName: "photos",
                filename: `${Date.now()}-blog-${file.originalname}`
            }
        }
})

module.exports = multer({ storage });