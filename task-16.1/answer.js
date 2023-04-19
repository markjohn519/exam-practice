const assert = require('node:assert')
function add (a, b ) {
    if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('mali')
  }
  return a / b
}

assert.strictEqual(add(7,8), 0.875)
assert.throws(() => add('5', 5))
assert.notStrictEqual(typeof add(5,5), 'string')
