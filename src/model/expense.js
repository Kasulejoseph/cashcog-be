import mongoose from "mongoose";
const expenseSchema = mongoose.Schema({
  uuid: {
    type: String,
    unique: true
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
    type: Object
  },
  status: {
    type: String,
    default: "pending",
    lowercase: true
  }
});

expenseSchema.methods.toJSON = function() {
  const userObj = this.toObject();
  delete userObj.__v;
  delete userObj._id;
  return userObj;
};

const Expense = mongoose.model("Expenses", expenseSchema);

export default Expense;
