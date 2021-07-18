const { sum, mul, sub, div } = require("./math")
const mathjs = require('mathjs')

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
        const spy = jest.spyOn(mathjs, 'log')
        const result = mathjs.log(10000, 10)
      
        expect(mathjs.log).toHaveBeenCalled()
        expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
      })

}) 






