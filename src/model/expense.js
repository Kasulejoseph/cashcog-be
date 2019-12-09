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
    },
    employee: {
        type: String,
        ref: 'Users'
    },
    status: {
        type: String,
        default: "pending"
    }
})

expenseSchema.methods.toJSON = function () {
    const userObj = this.toObject()
    delete userObj.__v
    delete userObj._id
    return userObj
}

const Expense  = mongoose.model('Expenses', expenseSchema)

export default Expense