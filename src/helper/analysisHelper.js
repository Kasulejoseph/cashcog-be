import Expense from "../model/expense";

export default async () => {
  let data = [];
  const amount = [];
  const expenseData = await Expense.find({});
  expenseData.forEach(item => {
    const dataObj = {
      amount: item.amount,
      date: item.created_at,
      employee: item.employee
    };
    data.push(dataObj);
    amount.push(item.amount);
  });
  const sum = amount.reduce((a, b) => a + b, 0);
  return { sum, data };
};
