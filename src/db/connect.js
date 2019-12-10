import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let connectionString;

process.env.NODE_ENV == "local"
  ? (connectionString = process.env.DBLOCAL)
  : (connectionString = process.env.DBPROD);

  if(process.env.NODE_ENV == "test") {
    connectionString = "mongodb://cashcog:casjos06@cluster0-shard-00-00-ac86u.mongodb.net:27017,cluster0-shard-00-01-ac86u.mongodb.net:27017,cluster0-shard-00-02-ac86u.mongodb.net:27017/cashcog-tests?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
  }

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch(error => console.log(error));
