import express from 'express'

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: "Welcome home"
    })
})
app.use(router)
app.listen(3000)