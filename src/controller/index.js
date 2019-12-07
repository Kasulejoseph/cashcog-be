import Expense from '../model/expense'
class ExpenseController {
    static async getExpenses(req, res) {
        const data = await Expense.find({}).populate('users')
        res.send({
            status: 200,
            data
        })
    }

}

export default ExpenseController