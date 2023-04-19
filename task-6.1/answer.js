const generator = require("@babel/generator")
const parser = require("@babel/parser")
const types = require("@babel/types")

const code = 'const x = 1 + 2;';
const ast = parser.parse(code);
const { code: generatedCode } = generator.default(ast);

console.log(generatedCode)