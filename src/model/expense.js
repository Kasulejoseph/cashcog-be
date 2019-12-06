import mongoose from 'mongoose'

const expenseSchema = mongoose.Schema({
    uuid: {
        type: String
    },
    description: {
        type: String
    },
    created_at: {
        type: Date
    },
    amount: {
        type: Number
    },
    currency: {
        type: String
    }
})

const Expense  = mongoose.model('Expenses', expenseSchema)

export default Expense