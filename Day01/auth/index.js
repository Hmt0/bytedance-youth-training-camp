const http = require('http')

const session = {
}

http.createServer((req, res) => {
    // 观察cookie存在
    console.log('cookie: ', req.headers.cookie)

    const sessionKey = 'sid'
    const cookie = req.headers.cookie
    if(cookie && cookie.indexOf(sessionKey) > -1) {
        // 验证cookie
        res.end('Come Back')
        const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
        // cookie中保存sessionID
        const sid = pattern.exec(cookie)[1]
        console.log('session:', sid, session, session[sid])
    }
    else {
        const sid = (Math.random() * 99999999).toFixed()
        // 设置cookie
        res.setHeader('set-Cookie', `${sessionKey}=${sid};`)
        // 用户信息
        session[sid] = {name: 'hmt'}
        console.log(session)
        res.end('Hello')
    }

    // res.setHeader('Set-Cookie', 'abc=123')
    // res.end('Hello')
})
.listen(3000)