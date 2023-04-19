const { readFile, writeFile } = require('node:fs')
const { promisify } = require('node:util')

function read(filename) {
  return promisify(readFile)(filename)
}

function write(filename, content) {
  return promisify(writeFile)(filename, content)
}

async function answer(filenames) {
  let content = ''
  for (const file of filenames) {
    content += await read(file)
  }

  await write('output.txt', content)
}
answer(['README.md', 'README.md', 'README.md'])


