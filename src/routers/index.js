import express from "express";
import ExpenseController from "../controller";
const router = express.Router();
const { getExpenses, userExpenses, updateExpenses } = ExpenseController;

router.get("/", getExpenses);
router.get("/users/:id", userExpenses);
router.patch("/:id", updateExpenses);
router.all('*', (req, res) => {
    res.status(405).send({
        status: 405,
        message: "method/request not allowed"
    })
})

export default router;
