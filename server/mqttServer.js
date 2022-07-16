import axios from 'axios'
import mqtt from 'mqtt'
const mqttClient = mqtt.connect('tcp://broker.hivemq.com:1883', { username: 'DangQuangThang', password: '1234' })

const clientTopic = 'esp/response'
const publishTopic = 'esp/response'


// mqttClient.on('connect', () => {
//     console.log(`Server Connected`)
//     mqttClient.publish(publishTopic, JSON.stringify( {"led": {"state": false}}))
//     mqttClient.subscribe(publishTopic)
// })


//  mqttClient.on('message', (clientTopic, payload) => {
//     console.log(`Client Üzerinden Akan Veri`, payload.toString())
//  })
axios.get(`http://localhost:8000/device/last-status`).then((res) =>{
    console.log(res.data.content[0].status)
})