import express from 'express'
import './src/db/connect'
const app = express()
const router = express.Router()
import ExpenseController from './src/controller'
import expenseStream from './src/helper/expenseStream'
const { getExpenses, userExpenses } = ExpenseController
// expenseStream()
router.get('/', getExpenses)
router.get('/:id', userExpenses)

app.use(router)
app.listen(3000)