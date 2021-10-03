const Koa = require("koa");
const fs = require('fs');
const path = require("path");

const app = new Koa();

app.use((ctx) => {
  const url = ctx.request.url;
  console.log(url);

  if(url === "/") {
    // 加载html
    ctx.body = fs.readFileSync("./index.html", "utf-8")
  }else if(url.endsWith(".js")) {
    // 找到对应的路径 去加载 然后给浏览器
    // console.log(url.slice(1))
    const p = path.resolve(__dirname, url.slice(1))
    // console.log(p)

    // 加载
    ctx.type = "text/JavaScript"
    // 做一个标识 如果是import * from "" -> node_modules
    // ctx.body =fs.readFileSync(p, "utf-8")
    const source = fs.readFileSync(p, "utf-8")
    ctx.body = rewriteImport(source)
  }
})

function rewriteImport (source) {
  return source.replace(/(from\s+['"])(?![\.\/])/g, "$1/@modules/")
}

app.listen(8080, () => {
  console.log("open server localhost: 8080");
});
