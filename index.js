import express from 'express'
import './src/db/connect'
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: "Welcome home"
    })
})
app.use(router)
app.listen(3000)