import request from "request";
import es from "event-stream";
import dotenv from 'dotenv'
import saveData from "./saveData";
dotenv.config()
const {STREAM_URL} = process.env
export default async () => {
  request
    .get(STREAM_URL)
    .pipe(es.split())
    .pipe(es.parse())
    .pipe(
      es.through(
        async function write(data) {
          this.emit("data", data);
          const {
            uuid,
            description,
            currency,
            created_at,
            amount,
            employee
          } = data;
          const expenseObj = {
            uuid,
            description,
            created_at,
            amount,
            currency,
            employee
          };
          saveData(employee, expenseObj);
        },
        function end() {
          this.emit("end");
        }
      )
    );
};
