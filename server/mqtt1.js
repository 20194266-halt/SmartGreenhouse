import mqtt from 'mqtt'
import axios from 'axios'

const mqttClient = mqtt.connect('tcp://broker.hivemq.com:1883', { username: 'DangQuangThang', password: '1234' })

const publishTopic = 'esp/response'
const http = axios.create()

mqttClient.on('connect', () => {
    console.log(`Connected to mqtt broker`)
    axios.get(`http://localhost:8000/device/62ca4b5788d4653bb16a8b7a`).then((res) => {
        console.log(res.data.content.status)
        if(res.data.content.status){
            mqttClient.publish(publishTopic,JSON.stringify({"led": {"state": {"onOff": "false"}}}))
        }
        else {
            mqttClient.publish(publishTopic,JSON.stringify({"led": {"state": {"onOff": "true"}}}))
        }
    })
    mqttClient.subscribe(publishTopic)
})
mqttClient.on('message', (topic, payload) => {
    console.log(`topic`, topic)
    console.log(`payload added sucessfully`, JSON.parse(payload.toString()))
})
