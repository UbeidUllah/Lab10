const Calculator = require('./Calculator')

const x = 12;
const y = 4;

test("test case1 testing sum method", () => {
    expect(Calculator.sum(x,y)).toBe(16)
});


test("test case2 testing diff method", () => {
    expect(Calculator.diff(x,y)).toBe(8)
});

test("test case3 testing mul method", () => {
    expect(Calculator.mul(x,y)).toBe(48)
});

test("test case4 testing div method", () => {
    expect(Calculator.div(x,y)).toBe(3)
});
