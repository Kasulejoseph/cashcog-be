import Expense from '../model/expense'
import User from '../model/user';
import updateHelper from '../helper/updateHelper';
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
        const data = await Expense.find({ employee: id })
        const count = data.length
        const employee = await User.find({ uuid: id })
        res.send({
            status: 200,
            count,
            employee,
            data
        })
    }
    static async updateExpenses(req, res) {
        try {
            const { id } = req.params
            const { status } = req.body
            const reqValue = Object.values(req.body)[0].toLowerCase()
            const requiredValues = ['declined', 'approved']
            const response = await updateHelper(id, status, reqValue, requiredValues, res)                                  
            return res.send(response)

        } catch (error) {
            res.send({
                status: 500,
                error: "something went wrong"
            })
        }
    }

}

export default ExpenseController