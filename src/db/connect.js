import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
let connectionString

process.env.NODE_ENV == 'local' ? connectionString = process.env.DBLOCAL : connectionString = process.env.DBPROD

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).catch((error) => console.log(error))