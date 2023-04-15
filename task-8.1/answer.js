const { writeFile } = require("node:fs");
const { readFile } = require("node:fs/promises");

const read = (filePath) => {
    return readFile(filePath, { encoding: "utf8" })
}

const write = (content) => {
    return writeFile('./contents.js', content)
}

const readThreeFiles = (file1, file2, file3) => {}
