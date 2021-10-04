const add = require('./add');

test("should 1 + 1 = 2", () => {
    // 准备测试数据 -> given
    const a = 1;
    const b = 1;

    // 触发测试动作 -> when
    // expect(add(a, b)).toBe(2);
    const r = add(a, b);
    // 验证 -> then
    expect(r).toBe(2);
    // jest 匹配器
});