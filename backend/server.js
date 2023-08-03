const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const exerciseRouter = require("./routes/exercise")
const userRouter = require("./routes/user")

require("dotenv").config();

const MONGODB_URI = `mongodb+srv://ronit2001krish:kkNCbvJXytrV5fFe@cluster0.pzq3t8g.mongodb.net/mern`


const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use('/exercises',exerciseRouter)
app.use('/users',userRouter)

mongoose.connect(MONGODB_URI)
    .then(result => {
        console.log("connected")
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`)
        })

    })