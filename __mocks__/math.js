module.exports = {
    log: jest.fn(() => 'spam')
}

const mathjs = require('mathjs')

test(`The mathjs log function`, () => {
  console.log(`spam`)
  const result = mathjs.log(10000, 10)
  expect(result).toBe('test')
  expect(mathjs.log).toHaveBeenCalled()
  expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
})