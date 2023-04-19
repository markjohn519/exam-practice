const path = require('path');
const { exec } = require('node:child_process')

function answer(command){
  exec(command, { cwd: path.join(__dirname, './folder')})
}
