import express from 'express'
import './src/db/connect'
const app = express()
const router = express.Router()

import ExpenseController from './src/controller'
import expenseStream from './src/helper/expenseStream'
const { getExpenses, userExpenses, updateExpenses } = ExpenseController
// expenseStream()
app.use(express.json())
router.get('/', getExpenses)
router.get('/users/:id', userExpenses)
router.patch('/:id', updateExpenses)

app.use(router)
app.listen(3000)