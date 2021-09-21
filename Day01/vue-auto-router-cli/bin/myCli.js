#!/usr/bin/env node
// console.log('My first cli!')
const program = require('commander')

program.version(require('../package').version)

program.command('init <name>')
    .description('init project')
    .action(name => {
        require('../lib/init')(name)
    })

program.parse(process.argv)
// console.log(process.argv)

program.command('refresh')
    .description('refresh routers...')
    .action(require('../lib/refresh')())