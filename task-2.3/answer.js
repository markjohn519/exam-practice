const { once } = require('node:events')
const Unrealadable = require('./unrealadable')

async function answer() {
  const unrealadable = new Unrealadable()
  const ac = new AbortController()
  const { signal } = ac
  setTimeout(()=> {
    ac.abort()
  }, 1000)

  await once(unrealadable, 'ping', { signal })
}

answer()
console.log('Complete')
