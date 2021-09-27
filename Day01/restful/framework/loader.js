const fs = require('fs')
const path = require('path') 
const mongoose = require('mongoose')

// 加载器 文件
/**
 * 
 * @param {*} dir 文件夹 
 * @param {*} cb 
 */
function load(dir, cb) {
    const url = path.resolve(__dirname, dir)
    console.log(url)
    const files = fs.readdirSync(url)
    console.log(files)
    files.forEach(filename => {
        filename = filename.replace('.js', '')
        const file = require(url + '/' + filename)
        cb(filename, file)
    })
}

const loadModel = config => app => {
    mongoose.connect(config.db.url, confg.db.options)
    const conn = mongoose.connection
    conn.on('error', () => {
        console.error('数据库连接失败')
    })
    app.$model = {}
    load('../model', (filename, {schema}) => {
        console.log('load model: ' + filename, schema)
        app.$model[filename] = mongoose.model(filename, schema)
    })
}

module.exports = {
    loadModel
}
