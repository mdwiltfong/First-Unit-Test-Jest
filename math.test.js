const { sum, mul, sub, div, log} = require("./math")
let math = require('./math');
console.log(log(10))
describe('Adding',()=>{
    test("Adding 1 + 1 equals 2", () => {
        expect(sum(1, 1)).toBe(2)
      })
})
describe('Multiplying',()=>{
    test("Multiplying 1 * 1 equals 1", () => {
        expect(mul(1, 1)).toBe(1)
      })
})
describe('Subtracting',()=>{
    test("Subtracting 1 - 1 equals 0", () => {
  expect(sub(1, 1)).toBe(0)
})
})
describe('Dividing',()=>{
    test("Dividing 1 / 1 equals 1", () => {
        expect(div(1, 1)).toBe(1)
      })
})

describe(`Math.js using spy packages`,()=>{
  test(`The mathjs log function`, () => {
    const spy = jest.spyOn(math, 'log')
    const result = math.log(10)
  
    expect(math.log).toHaveBeenCalled()
    expect(math.log).toHaveBeenCalledWith(10)
  })
 
}) 






