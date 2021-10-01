-------------koa setup----------------
实现用模板自动新建koa项目
package.json中配置`"type": "module"`可以使用esm模块规范

`rd /S <文件夹名>`删除非空文件夹

优化：
getRootPath代替手动输入文件路径
packageName参数化

开发思想 - 小步骤

ejs Embedded JavaScript templates
Inquirer.js A collection of common interactive command line user interfaces.

问题驱动
1.手动创建的步骤，主流程happy path -> 翻译成代码 index.js
2.细化分支，扩展每个步骤 -> 引入模板 indexTemplate.ejs
3.动态生成代码模板 <% if()%>
4.程序的input inputConfig -> 根据用户输入自动生成config

生成package.json时的`,`如何处理 放前面 ?怎么格式化

?koa静态服务是干嘛的
?第一次运行npm test的时候没有可删除的文件夹

inquirer 一组常用的交互式命令行用户界面。

nodejs支持顶层await

开发节点：1.实现功能 2.重构代码

execa 子进程
prettier 格式化代码