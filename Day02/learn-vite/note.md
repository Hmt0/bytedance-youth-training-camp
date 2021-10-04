在html中直接引入ems js的问题：
1.不理解node_modules里面的库，不会在node_modules里面找，比如vue
2.相对路径理解不了，必须是绝对路径
3.引入style.css不能理解
（4.跨域）

正则工具：regexr.com

每一个import都会发起一个http请求，由服务器(index.cjs)处理后返回
优化：1.ts 2.多个import
预编译 esbuild -> 打包快，一个文件
ts -> serve -> ts变成浏览器能理解的代码 -> esbuild
lodash-es -> n个import -> http 多了浏览器吃不消 -> esbuild