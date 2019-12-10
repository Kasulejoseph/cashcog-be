import express from 'express'
import cors from 'cors'
import './src/db/connect'

const app = express()

import expenseStream from './src/helper/expenseStream'
import routers from './src/routers'
// expenseStream()
app.use(express.json())
app.use(cors())
app.use(routers)

export default app