import Expense from "../model/expense";

export default async (id, status, reqValue, requiredValues) => {
  let message = undefined;
  let statusCode = 200;
  if (!requiredValues.includes(reqValue)) {
    statusCode = 400;
    message = "Status should either be declined or approved";
    return { statusCode, message };
  }
  if (!status) {
    statusCode = 400;
    message = "Key should be status";
    return { statusCode, message };
  }
  const data = await Expense.findOneAndUpdate(
    { uuid: id },
    { status },
    { new: true }
  );  
  if (!data) {
    statusCode = 404;
    message = `Expense with id ${id} is not found`;
    return {statusCode, message};
  }
  return { statusCode, message, data };
};
