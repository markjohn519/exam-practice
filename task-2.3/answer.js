const { once } = require('node:events')

async function answer() {
  const ac = new AbortController()
  const { signal } = ac

  setTimeout(() => {
    ac.abort()
  }, 500)

  await once(param1, param2, { signal })
}
