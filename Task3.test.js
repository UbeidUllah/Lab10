const Task3 = require('./Task3')


x = 4;
y = 2;

test("test case1 testing power method", () => {
    expect(Task3.power(x,y)).toBe(16)
});

x1 = 5.4;

test("test case2 testing ceiling method", () => {
    expect(Task3.ceiling(x1)).toBe(6)
});

test("test case3 testing round method", () => {
    expect(Task3.round(x1)).toBe(5)
});