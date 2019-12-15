import Expense from "../model/expense";
import User from "../model/user";
import updateHelper from "../helper/updateHelper";
import queryHelper from "../helper/queryHelper";
import handle500 from "../helper/handle500";

class ExpenseController {
  static async getExpenses(req, res) {
    try {
      const queryParams = req.query;
      const queryKeys = Object.keys(req.query);
      const currentPage = Number(req.query.page) || 1;
      const response = await queryHelper(queryParams, queryKeys, currentPage);      
      res.status(response.status).send(response);
    } catch (error) {
      const response = await handle500();
      res.status(response.statusCode).send(error);
    }
  }
  static async userExpenses(req, res) {
    try {
      const { id } = req.params;
      const expenses = await Expense.find({ 'employee.uuid':  id });
      const count = expenses.length;
      const employee = await User.find({ uuid: id });
      if(employee.length == 0) {
        return res.status(404).send({
          status: 404,
          error: `User with id ${id} is not found`
        })
      }
      res.status(200).send({
        status: 200,
        count,
        employee,
        expenses
      });
    } catch (error) {
      const response = await handle500();
      res.status(response.statusCode).send(error);
    }
  }
  static async updateExpenses(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const reqValue = Object.values(req.body)[0].toLowerCase();
      const requiredValues = ["declined", "approved"];
      const response = await updateHelper(id, status, reqValue, requiredValues);
      return res.status(response.statusCode).send(response);
    } catch (error) {
      const response = await handle500();      
      res.status(500).send(response);
    }
  }
  static async analystsData(req, res){
    try {
      let data = []
      const amount = []
      const expenseData = await Expense.find({})
      expenseData.forEach((item) => {
        const dataObj = {amount: item.amount, date: item.created_at, employee: item.employee}        
        data.push(dataObj)
        amount.push(item.amount)
      })
      const sum = amount.reduce((a, b) => a + b, 0)

      res.send({sum, data})
    } catch (error) {
      const response = await handle500();
      res.status(response.statusCode).send(error);
    }

  }
}

export default ExpenseController;
