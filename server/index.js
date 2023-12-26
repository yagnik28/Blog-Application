const express = require("express");
const connection = require("./db");
const dotenv = require("dotenv");
const router = require("./routes/index");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})

const MONGOOSE_URL = process.env.MONGOOSE_URL;

connection(MONGOOSE_URL);