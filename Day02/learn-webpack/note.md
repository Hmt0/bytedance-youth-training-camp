早期引入js文件需要挂载到全局：
window.foo = foo
问题：
来源不清晰
命名冲突

生产模式（默认）打包结果：
(()=>{"use strict";console.log("main"),console.log("foo")})();