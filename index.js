import express from 'express'
import './src/db/connect'
const app = express()
const router = express.Router()
import ExpenseController from './src/controller'
import expenseStream from './src/helper/expenseStream'

// expenseStream()
router.get('/', ExpenseController.getExpenses)

app.use(router)
app.listen(3000)