#!/usr/bin/env node
// console.log('My first cli!')

const program = require('commander')

program.version(require('../package').version)
program.command('init <name>')
    .description('init project')
    // .action(name => {
    //     console.log('init ' + name)
    // })
    .action(require('../lib/init'))
program.parse(process.argv)

// console.log(process.argv)
