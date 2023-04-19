let obj1 = {
  method1() {},
  method2() {}
}

let obj2 = Object.create(obj1, {
  method3: {
    value: function() {}
  },
  method4: {
    value: function() {}
  }
})

let answer = Object.create(obj2, {
  method5: {
    value: function() {}
  },
  method6: {
    value: function() {}
  }
})