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