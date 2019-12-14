import Expense from "../model/expense";

export default async (queryParams, queryKeys, currentPage) => {
  const expPerPage = 9;
  const requiredParams = [
    "status",
    "uuid",
    "description",
    "created_at",
    "amount",
    "currency",
    "employee"
  ];

  // eliminate page
  const newArray = queryKeys.filter(value => value !== "page");
  delete queryParams.page;

  const isValidParam = newArray.every(key => requiredParams.includes(key));
  if (!isValidParam) {
    return {
      status: 422,
      error: "Invalid query param(s)"
    };
  }

  const data = await Expense.find(queryParams)
    .skip(expPerPage * currentPage - expPerPage)
    .limit(expPerPage);
  const count = await Expense.countDocuments(queryParams);
  return {
    status: 200,
    pages: Math.ceil(count / expPerPage),
    count,
    data
  };
};
