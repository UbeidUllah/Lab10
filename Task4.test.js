const Task4 = require('./Task4')

str = "hello world"

test("test case1 testing reverse method", () => {
    expect(Task4.reverseString(str)).toBe("dlrow olleh")
});