// const fs = require('fs')
// 异步IO
// fs.readFile('./config.js')

// 同步读取 二进制文件 图片 视频
// const data = fs.readFileSync('./config.js')
// console.log('data', data)

// toString()默认 utf-8
// console.log('data', data.toString())

// fs.readFile('./config.js', (err, data) => {
//     // 错误优先的回调
//     if (err) {
//         throw err;
//     }
//     console.log(data.toString())
// })

// 不使用回调
// const fs = require('fs').promises
// promise风格api

// promisify
(async () => {
    const fs = require('fs')
    const {promisify} = require('util')
    // 回调变为promise
    const readFile = promisify(fs.readFile);    
    const data = await readFile('./config.js')
    console.log(data.toString())
})()