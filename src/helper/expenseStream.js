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
          const { employee } = data;
          const { uuid, description, created_at, amount, currency } = data;
          const expenseObj = {
            uuid,
            description,
            created_at,
            amount,
            currency,
            employee: employee.uuid
          };
          saveData(employee, expenseObj);
        },
        function end() {
          this.emit("end");
        }
      )
    );
};
