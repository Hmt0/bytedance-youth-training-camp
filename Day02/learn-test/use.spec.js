const User = require('./User');

test("should getName ", () => {
    const user = new User('xiaohong');

    user.setName('xiaohei');

    expect(user.getName()).toBe("xiaohei");
})