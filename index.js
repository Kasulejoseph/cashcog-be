import express from 'express'
import './src/db/connect'
const app = express()

import expenseStream from './src/helper/expenseStream'
import routers from './src/routers'
// expenseStream()
app.use(express.json())
app.use(routers)

app.listen(3000)