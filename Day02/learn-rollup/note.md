terser压缩bundle.js代码

npm install the-answer --dev
npm install @rollup/plugin-node-resolve --dev
// 默认不支持解析node依赖的库

不希望把所有的依赖都打包，比如vue这种比较大的文件
用external标记外部库
"peerDependencies": {
    "vue": "3.0.0"
  },
用户自行安装

什么时候使用rollup：库 什么时候使用webpack：应用？
使用到的资源大小 打包结果

练习要求：
1.引入vue
2.vue不可以打包进去
3.支持解析 json
4.生成esm和cjs两种
5.esm代码压缩