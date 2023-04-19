const path = require('path');

function answer(command) {
  const { exec } = require('node:child_process')
  exec(command, { cwd: path.join(__dirname, './folder')})
}
