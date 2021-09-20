const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    // console.log('这里有一个请求', getPrototypeChain(request))
    response.end('Hi Node')
    const {url, method} = request
    if(url === '/' && method === "GET") {
        fs.readFile('index.html', (err, data) =>{ 
            if(err) {
                // 服务器错误
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=uft-8'
                })
            }
        })
    }
})
.listen(3000, () => {
    console.log('Server at 3000')
})

// 获取原型链
function getPrototypeChain(obj) {
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}