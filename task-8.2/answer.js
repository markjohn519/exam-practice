
const fs = require ('node:fs')
const path = require('node:path')
const content = fs.readdirSync(__dirname)

const data = []

for(const file of content){
    if(path.basename(__filename) !== file){
        data.push(path.join(__dirname,file))
    }
}
fs.writeFileSync('./dir.json', JSON.stringify(data))
