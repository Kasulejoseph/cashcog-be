import request from 'request'
import es from 'event-stream'

export default () => {
    request.get('https://cashcog.xcnt.io/stream')
        .pipe(es.split())
        .pipe(es.parse())
        .pipe(es.through(function write(data) {
                this.emit('data', data)
                return console.log(data)
            },
            function end() {
                this.emit('end')
            }))
}