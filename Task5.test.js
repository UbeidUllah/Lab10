const Task5 = require('./Task5')

x = 1;

test("test case1 testing find method", () => {
    expect(Task5.find(x)).toBe(true);
});

y = 22;

test("test case2 testing find method", () => {
    expect(Task5.find(y)).toBe(false);
});