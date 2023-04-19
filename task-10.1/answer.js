const {readFile} = require('node:fs')

function read(filename, cb) {
    readFile(filename, cb)
}
function answer(fileA, fileB, fileC) {
    read(fileA, (err, content) => {
        if(err) {
            console.error(err)
            return
        }
        console.log(content)
    }), 
    read(fileB, (err, content) => {
        if(err) {
            console.error(err)
            return
        }
        console.log(content)
    }),
    read(fileC, (err, content) => {
        if(err) {
            console.error(err)
            return
        }
        console.log(content)
    })
}
