const fs = require('fs')
// 复制图片
const rs = fs.createReadStream('./assets/image.jpg')
const ws = fs.createWriteStream('./assets/copy.jpg')
rs.pipe(ws);