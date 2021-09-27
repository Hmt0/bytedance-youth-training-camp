#!/usr/bin/env node
// console.log('My first cli!')
// console.log(process.argv) // 命令行参数

// 定制命令行界面
const program = require('commander')

// my-cli -V获取版本号
program.version(require('../package').version)

program.command('init <name>')
    .description('init project')
    .action(name => {
        console.log('init' + name)
        require('../lib/init')(name)
    })

program.parse(process.argv)
// console.log(process.argv)

program.command('refresh')
    .description('refresh routers...')
    .action(require('../lib/refresh')())