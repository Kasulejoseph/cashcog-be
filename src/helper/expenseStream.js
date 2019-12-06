import request from 'request'
import es from 'event-stream'

import User from '../model/user';


export default async() => {
    request.get('https://cashcog.xcnt.io/stream')
        .pipe(es.split())
        .pipe(es.parse())
        .pipe(es.through(async function  write(data) {
                this.emit('data', data)
                // console.log(data.employee);
                
                const userObj = data.employee
                try {
                    const data =  new User(userObj)
                    console.log(data);
                    await data.save()
                    
                } catch (error) {

                    
                }
            },
            function end() {
                this.emit('end')
            }))
}