import Expense from '../model/expense'
import User from '../model/user';
import updateHelper from '../helper/updateHelper';
import queryHelper from '../helper/queryHelper';
class ExpenseController {
    static async getExpenses(req, res) {
        try {
            const queryParams = req.query
            const queryKeys = Object.keys(req.query)
            const currentPage = Number(req.query.page) || 1
            const response = await queryHelper(queryParams, queryKeys, currentPage)            
            res.send(response)
        } catch (error) {
            res.send({
                status: 500,
                error: "sorry, something went wrong!"
            })

        }
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
            const response = await updateHelper(id, status, reqValue, requiredValues)
            return res.send(response)

        } catch (error) {
            res.send({
                status: 500,
                error: "Sorry, something went wrong!"
            })
        }
    }

}

export default ExpenseController