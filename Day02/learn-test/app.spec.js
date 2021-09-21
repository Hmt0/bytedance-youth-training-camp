const add = require('./add')

test("should 1 + 1 = 2", () => {
    // 准备测试数据
    const a = 1;
    const b = 1;
    // 出发测试动作
    const r = add(a, b);
    // 验证
    expect(r).toBe(2);
})