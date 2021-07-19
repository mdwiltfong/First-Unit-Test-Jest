const mathjs = require('mathjs')
console.log(mathjs.log(10))
test(`The mathjs log function`, () => {
  const spy = jest.spyOn(mathjs, 'log')
  const result = mathjs.log(10000, 10)

  expect(mathjs.log).toHaveBeenCalled()
  expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
})


test(`The mathjs log function`, () => {
    console.log(`Mock an entire package`)
    const result = mathjs.log(10000, 10)
    expect(result).toBe('test')
    expect(mathjs.log).toHaveBeenCalled()
    expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
  })