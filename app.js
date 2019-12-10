import express from "express";
import cors from "cors";
import "./src/db/connect";

const app = express();

import expenseStream from "./src/helper/expenseStream";
import routers from "./src/routers";

// to be improve : have it's own script probably..
expenseStream();

app.use(express.json());
app.use(cors());
app.use(routers);

export default app;
