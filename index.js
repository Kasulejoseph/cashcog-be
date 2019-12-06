import express from 'express'
import './src/db/connect'
const app = express()
const router = express.Router()
import expenseStream from './src/helper/expenseStream'
import User from './src/controller'
import Expense from './src/controller'
// expenseStream()
router.get('/', Expense.addUser)

app.use(router)
app.listen(4000)