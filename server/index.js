import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
//import router from "./routers/greenhouse.js";
import userRouter from "./routers/user.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;
const URI = 'mongodb+srv://lathiha:20194266@cluster0.9fvud.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors())

//app.use('/', router)
app.use('/user', userRouter)

mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to DB")
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log('err', err);
    })
