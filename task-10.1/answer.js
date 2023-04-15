const { readFileSync } = require('node:fs')

const read = (filename, callback) => {
    const content = readFileSync(filename, { encoding: 'utf8' })
}