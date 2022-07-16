import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mqtt from "mqtt"
//import router from "./routers/greenhouse.js";
import userRouter from "./routers/user.js";
import greenHouseRouter from "./routers/greenhouse.js";
import deviceRouter from "./routers/device.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8000;
const URI = 'mongodb+srv://lathiha:20194266@cluster0.9fvud.mongodb.net/?retryWrites=true&w=majority'

const mqttClient = mqtt.connect('tcp://broker.hivemq.com:1883', { username: 'DangQuangThang', password: '1234' })
const publishTopic = 'esp/response'
const clientTopic = 'esp/response'

app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors())

//app.use('/', router)
app.use('/user', userRouter)
app.use('/green-houses', greenHouseRouter)
app.use('/device', deviceRouter)
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

    mqttClient.on('connect', () => {
        console.log(`Connected to mqtt broker`)
        mqttClient.subscribe(publishTopic)
    })
    
    mqttClient.on('message', (topic, payload) => {
        console.log(`topic`, topic)
        console.log(`payload received `, JSON.parse(payload.toString()))
    })
    