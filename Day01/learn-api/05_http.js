const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    // console.log('这里有一个请求')
    // console.log(getPrototypeChain(request))
    // response.end('Hi Node!')
    const {url, method} = request
    if(url === '/' && method === "GET") {
        fs.readFile('index.html', (err, data) =>{ 
            if(err) {
                // 服务器错误
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=uft-8'
                })
                // 中文
                response.end('500 服务器挂了')
                return
            }
            // 请求成功
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html')
            response.end(data);
        })
    }else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/plain;charset=utf-8')
        response.end('404 没这玩意！')
    }
})
.listen(3000, () => {
    console.log('Server at 3000')
})

// 获取原型链
function getPrototypeChain(obj) {
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)) {
        // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
        protoChain.push(obj)
    }
    return protoChain
}