const fs = require('node:fs')
const path = require('node:path')
let content = fs.readdirSync(__dirname)
let data = []

for (const file of content) {
  if (path.basename(__filename) !== file) {
    data.push(path.join(__dirname, file))
  }
}

fs.writeFileSync(path.join(__dirname, 'dir.json'), JSON.stringify(data))
