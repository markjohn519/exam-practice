Write a code in the `answer.js` that read the directory of the current executing file. (without using filter), make a list of all the absolute file on that directory and write it in the `dir.json` in JSON array

// fs.readdirSync, return absolute path of files and directories from current working directory

const fs = require ('node:fs')
const path = require('node:path')
const content = readdirSync(\_\_dirname)
const data = []

for( const file of content){
if(path.basename(**filename) !== file){
data.push(path.join(**dirname, file))
}
}

fs.writeFileSync('./dir.json', JSON.stringify(data)) // dir.json filename nung akin
