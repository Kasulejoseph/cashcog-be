import express from "express";
import ExpenseController from "../controller";
const router = express.Router();
const { getExpenses, userExpenses, updateExpenses } = ExpenseController;

router.get("/", getExpenses);
router.get("/users/:id", userExpenses);
router.patch("/:id", updateExpenses);

export default router;
