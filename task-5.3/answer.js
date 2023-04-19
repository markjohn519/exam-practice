let obj1 = {
  method1() { return true },
  method2() {}
}

let obj2 = Object.create(obj1, {
  method3: {
    value: function () { return true }
  }, 
  method4: {
    value: function () {}
  }
})

let answer = Object.create(obj2, {
  method5: {
    value: function () { return true }
  }, 
  method6: {
    value: function () {}
  }
})

console.log(answer.method1())
 // method1 is accessible through the prototype chain
console.log(answer.method3())
// method3 is accessible through the prototype chain
console.log(answer.method5())
 // method5 is a property of answer

console.log(answer.hasOwnProperty('method1'))
 // false, method1 is not a property of answer
console.log(answer.hasOwnProperty('method5'))
 // true, method5 is a property of answer