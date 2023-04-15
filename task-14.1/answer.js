
function answer(command){
    const {exec} = require('node:child_process')
    exec(command,{cwd: './sandbox'})
}
