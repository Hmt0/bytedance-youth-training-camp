const Koa = require("koa");
const fs = require('fs');
const path = require("path");

const app = new Koa();

// 服务器拦截，把请求处理成浏览器能够理解的代码
app.use((ctx) => {
  const url = ctx.request.url;

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
  } else if(url.startsWith("/@modules")) {
    const moduleName = url.replace("/@modules", "");
    console.log("2", moduleName)

    const prefix = path.resolve(__dirname, "node_modules/" + moduleName)
    console.log("prefix", prefix);
    
    const module = require(prefix + "/package.json").module;
    console.log("module", module);

    const code = fs.readFileSync(path.resolve(prefix, module), "utf-8");
    // console.log(code);
    ctx.type = "text/javascript";
    ctx.body = rewriteImport(code);
  }
})

function rewriteImport (source) {
  return source
    .replace(/(from\s+['"])(?![\.\/])/g, "$1/@modules/")
    .replace(/process\.env\.NODE_ENV/g, '"development"');
    /** createApp
     * if (("development" !== 'production')) {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
    }
     */
}

app.listen(8080, () => {
  console.log("open server localhost: 8080");
});
