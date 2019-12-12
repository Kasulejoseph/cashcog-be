import request from "request";
import es from "event-stream";
import saveData from "./saveData";
export default async () => {
  request
    .get("https://cashcog.xcnt.io/stream")
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
