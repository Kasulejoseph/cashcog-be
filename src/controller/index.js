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
    static async updateExpenses(req, res) {
        try {
            const { id } = req.params
            const { status } = req.body

            if(!status) {
                return res.send({
                    status: 400,
                    error: "Key should be status"
                })
            }
                        
            const data = await Expense.findOneAndUpdate({uuid: id}, {status}, {new: true})    
            if (!data) {
                return res.send({
                    status: 404,
                    error: `Expense with id ${id} is not found`
                })

            }    
            return res.send({
                status: 201,
                data
            })
            
        } catch (error) {
            res.send({
                status: 500,
                error: "something went wrong"
            })
        }
    }

}

export default ExpenseController