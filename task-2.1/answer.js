const { readFile, writeFile } = require('node:fs')
const { promisify } = require('node:util')

function read(filename) {
  return promisify(readFile)(filename)
}

function write(filename, content) {
  return promisify(writeFile)(filename, content)
}

async function answer(filenames) {
}

