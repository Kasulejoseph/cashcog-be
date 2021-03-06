import Expense from "../model/expense";

export default async (queryParams, queryKeys, currentPage) => {
  const expPerPage = 9;
  let sort = {}
  const requiredParams = [
    "status",
    "uuid",
    "description",
    "created_at",
    "amount",
    "currency",
    "employee"
  ];
  if (queryParams.sort) {
    const getParts = queryParams.sort.split(":");
    sort[getParts[0]] = getParts[1] === "asc" ? 1 : -1;
  }
  if(Object.keys(sort).length == 0) {
    sort["created_at"] = -1
  }

  // eliminate page
  const newArray = queryKeys.filter(
    value => !["page", "sort"].includes(value)
  );  
  delete queryParams.page;
  delete queryParams.sort;
  const isValidParam = newArray.every(key => requiredParams.includes(key));
  if (!isValidParam) {
    return {
      status: 422,
      error: "Invalid query param(s)"
    };
  }
  
  const data = await Expense.find(queryParams)
    .skip(expPerPage * currentPage - expPerPage)
    .limit(expPerPage)
    .sort(sort);
  const count = await Expense.countDocuments(queryParams);
  const pages = Math.ceil(count / expPerPage);
  return {
    status: 200,
    pages,
    count,
    data
  };
};
