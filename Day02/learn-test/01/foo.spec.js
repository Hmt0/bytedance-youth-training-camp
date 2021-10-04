const foo = require("./foo");
const bar = require("./bar");

// mock
// 函数调用
jest.mock("./bar.js", () => {
    // function -> 属性
    return jest.fn();
})

test("foo", () => {
    foo();

    console.log(bar);
    expect(bar).toHaveBeenCalled();
})