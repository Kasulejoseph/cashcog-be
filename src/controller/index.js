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
      res.status(response.statusCode).send(response);
    } catch (error) {
      const response = await handle500();
      res.status(500).send(response);
    }
  }
  static async userExpenses(req, res) {
    try {
      const { id } = req.params;
      const expenses = await Expense.find({ employee: id });
      const count = expenses.length;
      const employee = await User.find({ uuid: id });
      res.status(response.statusCode).send({
        status: 200,
        count,
        employee,
        expenses
      });
    } catch (error) {
      const response = await handle500();
      res.status(500).send(response);
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
      res.status(response.status).send(response);
    }
  }
}

export default ExpenseController;
