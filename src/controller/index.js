import Expense from '../model/expense'
import User from '../model/user';
class ExpenseController {
    static async getExpenses(req, res) {
        const data = await Expense.find({})
        const count = data.length
        res.send({
            status: 200,
            count,
            data
        })
    }
    static async userExpenses(req, res) {
        const { id } = req.params
        const data = await Expense.find({employee: id})
        const count = data.length
        const employee = await User.find({uuid: id})
        res.send({
            status: 200,
            count,
            employee,
            data
        })
    }

}

export default ExpenseController