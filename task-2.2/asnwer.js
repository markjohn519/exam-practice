const { readFile, writeFile } = require('node:fs')

function read(filename, cb) {
  readFile(filename, cb)
}

function write(filename, content) {
  writeFile(filename, content)
}

function answer(file1, file2, file3) {

}
