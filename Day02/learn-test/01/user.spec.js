const User = require('./User');

test('should getName ', () => {
    const user = new User("xt");
    user.setName('xr');
    expect(user.getName()).toBe('xr');
})