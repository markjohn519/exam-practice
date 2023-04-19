const EventEmitter = require('node:events')
const myEvent = new EventEmitter()

function answer(ee) {
  ee.once('close', () => {
    console.log('test');
  })
}

answer(myEvent)

myEvent.emit('close')
myEvent.emit('close')