import express from 'express'
import './src/db/connect'
const app = express()
const router = express.Router()
import Expense from './src/controller'
// expenseStream()
router.get('/', Expense.addUser)

app.use(router)
app.listen(4000)