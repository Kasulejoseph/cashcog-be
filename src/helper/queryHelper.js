import Expense from "../model/expense";

export default async (queryParams, queryKeys, currentPage) => {
  const expPerPage = queryParams.limit ? Number(queryParams.limit): 0;
  const requiredParams = [
    "status",
    "uuid",
    "description",
    "created_at",
    "amount",
    "currency",
    "employee"
  ];

  // eliminate page and limit
  const newArray = queryKeys.filter(value => (value !== "page" && value !== "limit"));  
  delete queryParams.page;
  delete queryParams.limit;

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
  const pages = expPerPage === 0 ? 1: Math.ceil(count / expPerPage)
  return {
    status: 200,
    pages,
    count,
    data
  };
};
