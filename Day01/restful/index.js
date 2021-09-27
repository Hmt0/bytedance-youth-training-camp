const Koa = require('koa')
const app = new Koa()

// 注册路由
const config = require('./conf')
const {loadModel} = require('./framework/loader')
loadModel(config)(app)

app.listen(3000, () => {
    console.log('Server at 3000')
})