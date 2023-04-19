const { once } = require('node:events')

async function answer() {
  const unrealadable = new Unrealadable()
  const ac = new AbortController()
  const { signal } = ac
  setTimeout(()=> {
    ac.abort()
  }, 500)

  await once(unrealadable, 'ping', { signal })
}

answer()
console.log('Complete')
