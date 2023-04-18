const assert = require('node:assert')
function add (a, b ) {
    if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('mali')
  }
  return a + b
  }

assert.strictEqual(add(1,2),3)
assert.throws(() => add( 7, '2'), Error)
assert.notStrictEqual(typeof add(1,2), 'string')
