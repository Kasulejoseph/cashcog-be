import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let connectionString;

process.env.NODE_ENV == "local"
  ? (connectionString = process.env.DBLOCAL)
  : (connectionString = process.env.DBPROD);

  if(process.env.NODE_ENV == "test") {
    connectionString = process.env.DBTEST
  }
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch(error => console.log(error));
