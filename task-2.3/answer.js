const { once } = require('node:events')

async function answer() {
  const unrealadable = new Unrealadable()

  await once(unrealadable, 'ping')
}

answer()
console.log('Complete')
