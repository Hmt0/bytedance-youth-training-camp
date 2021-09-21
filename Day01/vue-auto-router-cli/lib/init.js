const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone} = require('./download')
const open = require('open')

const log = content => console.log(chalk.green(content))

const spawn = async(...args) => {
    const {spawn} = require('child_process')
    return new Promise(resolve => {
        const options = args[args.length - 1]
        // Windows兼容性问题
        if(process.platform === 'win32') {
            options.shell = true
        }
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}

// 补充功能：显示进度条
module.exports = async name => {
    // 打印欢迎界面
    clear()
    const data = await figlet('WELCOME!!!')
    log(data)

    // 项目模板
    console.log('🚀创建项目 ' + name)
    await clone('github:su37josephxia/vue-template', name)


    // 子进程
    log('🚗安装依赖...')
    await spawn('npm', ['install'], {cwd: `./${name}`})
    log(chalk.green(`
        ✌安装完成:
        To get Start:
        ==========================
            cd ${name}
            npm run serve
        ==========================
    `))

    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], {cwd: `./${name}`})
}