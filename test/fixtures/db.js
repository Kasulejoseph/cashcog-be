import User from "../../src/model/user";
import Expense from "../../src/model/expense";

const user1 = {
  uuid: "0ea6f994-831c-4c73-8370-8933f48c2698",
  first_name: "KASULE",
  last_name: "JOSEPH"
};
const user2 = {
  uuid: "0ea6f994-831c-4c73-8370-8933f48c0000",
  first_name: "Annelore",
  last_name: "Schmiedecke"
};
const expense1 = {
  uuid: "77af409c-f758-4b9e-ba5e-324ba2f40000",
  description: "Culpa labore architecto earum ipsum sunt.",
  created_at: "2019-12-09T10:57:30.000Z",
  amount: 3656,
  currency: "NIS",
  employee: "0ea6f994-831c-4c73-8370-8933f48c2698"
};

const expense2 = {
  status: "approved",
  uuid: "affea006-708c-40db-b14f-4edc74ed4dc2",
  description: "Dolorem aliquam possimus voluptatibus architecto quisquam.",
  created_at: "2019-12-03T20:58:37.000Z",
  amount: 8862,
  currency: "XDR",
  employee: "0ea6f994-831c-4c73-8370-8933f48c2698"
};

const setDb = async () => {
  await User.deleteMany();
  await Expense.deleteMany();
  await new User(user1).save();
  await new Expense(expense1).save();
  await new User(user2).save();
  await new Expense(expense2).save();
};

export { setDb };
