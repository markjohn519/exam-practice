const { once } = require('node:events')

async function answer() {
  // const unrealadable = new Unrealadable()
  let ac = new AbortController()
  let { signal } = ac
  setTimeout(()=> {
    ac.abort()
  }, 500)

  await once(param1, 'ping', {signal})
}

answer()
console.log('Complete')
