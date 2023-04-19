const { EventEmitter } = require('node:events');

class Unrealadable extends EventEmitter {
  constructor() {
    super();
    setTimeout(() => this.emit('ping'), 100);
  }
}

module.exports = Unrealadable