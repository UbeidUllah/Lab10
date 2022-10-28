const Sum = require('./Task2')

const x = 3;
const y = 6;
const z = 10;

test("test case1 testing sum method", () => {
    expect(Sum.sum(x,y,z)).toBe(18)
});