
import User from '../model/user';
import Expense from '../model/expense';

export default async(employee, expenseObj) => {
    try {
        const data =  new User(employee)
        const expenseData = new Expense(expenseObj)
        await data.save()
        await expenseData.save()
        // console.log(expenseData);

    } catch (error) {
        Error('something went wrong')
    }
}