import Expense from "../model/expense";

export default async () => {
  let data = [];
  let sum =  0;
  const expenseData = await Expense.find({});
  expenseData.forEach(item => {
    const dataObj = {
      amount: item.amount,
      date: item.created_at,
      employee: item.employee
    };
    data.push(dataObj);
    sum += item.amount;
  });
  return { sum, data };
};
