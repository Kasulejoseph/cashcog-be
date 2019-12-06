import request from 'request'
import es from 'event-stream'

import User from '../model/user';
import Expense from '../model/expense';


export default async () => {
    request.get('https://cashcog.xcnt.io/stream')
        .pipe(es.split())
        .pipe(es.parse())
        .pipe(es.through(async function write(data) {
                this.emit('data', data)
                // console.log(data.employee);

                const userObj = data.employee
                const expenseObj = {
                    uuid: data.uuid,
                    description: data.description,
                    created_at: data.created_at,
                    amount: data.amount,
                    currency: data.currency,
                }
                try {
                    // const data =  new User(userObj)
                    const expenseData = new Expense(expenseObj)
                    // await data.save()
                    await expenseData.save()
                    console.log(expenseData);

                } catch (error) {


                }
            },
            function end() {
                this.emit('end')
            }))
}