import express from 'express'
import './src/db/connect'
const app = express()
const router = express.Router()
import expenseStream from './src/helper/expenseStream'
expenseStream()
router.get('/', (req, res) => {
    res.send({
        message: 'me you'
    })
})

app.use(router)
app.listen(4000)