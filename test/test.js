const Validator = require('../src/Validator.js')

console.log(Validator)

const empty = new Validator({})
console.log(empty)

const nullV = new Validator({
  a: {
    type: Object,
    default: null
  }
})
console.log(nullV)

