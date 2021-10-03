早期引入js文件需要挂载到全局：
window.foo = foo
问题：
来源不清晰
命名冲突

生产模式（默认）打包结果：
(()=>{"use strict";console.log("main"),console.log("foo")})();

打包结果拆分优化，多入口：
方式一：使用dependOn把重复的代码抽离出去
方式二：使用splitChunks自动抽取重复的代码

-----------懒加载--------------
分开打包文件

任务：
1.支持css解析
2.支持parse5解析
3.当调用yarn dev的时候可以起一个服务来辅助开发
4.自动清理dist
5.自动生成html
6.user.js可以懒加载
