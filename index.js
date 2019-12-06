import express from 'express'
import request from 'request'
import es from 'event-stream'

import './src/db/connect'
const app = express()
const router = express.Router()

request.get('https://cashcog.xcnt.io/stream')
    .pipe(es.split())
    .pipe(es.map(function (line, cb) {
        let yy = JSON.parse(line)
        console.log(yy.uuid);
        
        cb(null, line)
    }))

router.get('/', (req, res) => {
    res.send({
        message: 'me you'
    })
})
app.use(router)
app.listen(4000)