import Expense from '../model/expense'
import User from '../model/user';
class ExpenseController {
    static async getExpenses(req, res) {
        const data = await Expense.find({}).populate('users')
        res.send({
            status: 200,
            data
        })
    }
    static async userExpenses(req, res) {
        const { id } = req.params
        const data = await Expense.find({employee: id}).populate('users')
        const employee = await User.find({uuid: id})
        res.send({
            status: 200,
            employee,
            data
        })
    }

}

export default ExpenseController