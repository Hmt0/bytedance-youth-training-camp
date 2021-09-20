const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone} = require('download')
const log = content => console.log(chalk.green(content))

module.exports = async name => {
    // 打印欢迎界面
    clear()
    const data = await figlet('WELCOME!!', function(err, data) {
        if(err) {
            console.log('出错啦！');
            console.dir(err);
            return;
        }
        log(data)
    })
    log(data)

    // 项目模板
    console.log('🚀创建项目' + name)
    await clone("github:su37josephxia/vue-template", name)
}