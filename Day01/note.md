nodemon软件会自动监测文件的变化，当有变化时重新启动服务。

读图片为什么不用readFile?
把全部图片内容加载到服务器 占用内存 -> stream

request header
Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8

#!/usr/bin/env node
指定解释器类型

npm link 
在本地开发npm模块的时候，我们可以使用npm link命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试

commander
The complete solution for node.js command-line interfaces.

需要安装的包：
npm i commander download-git-repo ora handlebars figlet clear chalk open -s

nodejs子进程 child_process

？snpm init可以添加的功能：
错误处理
resolve子进程状态码


？对于经常引用的包，比如chalk，可以放在全局或者注入

?发布一个npm包
上传：npm publish

------------通过模型自动映射Restful服务--------------
1:29mysql adminer dockers hyper-V

连接池

SQL 翻页 模糊查询 排序

nodejs ORM

非关系型数据库问题：数据模型不清晰，无处查询 => **mongoose**
异步串联的方法：
callback generator async/await eventEmitter发布订阅
mongoose是发布订阅模式，可以定义*模型*

2:45用户 => 用户CRUD API Restful服务 => AdminUI

- HTTP动词：表示一个动作
- 宾语：表示动作的目标对象 1.是名词2.通常是复数
- 避免多级

比较标准的Restful API：GitHub API

Python Django
Java Jeecg
JavaScript keystoneJS 低代码平台
实现思路：1.代码生成器 2.动态编程
动态编程：
根据模型文件 自动加载模型
动态产生路由 注册通配路由
3:14