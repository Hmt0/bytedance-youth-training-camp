## 中后台体系目标：

* 开发效率（复用性）
* 易用性效率>美观、体验
* 便捷的交互
* 复杂数据处理能力
* 可访问性要求提升
* 国际化要求提升

## 中后台体系

* 组件体系 日常开发需求
* 数据处理 数据和表现分离，强化复杂数据处理能力
* 搭建能力 以可视化方式快速生成新界面的能力

?line-height设置100% vertical-align:middle就不生效 必须指定多少px
w3c WAI-ARIA

创建umi应用：npx create-umi umi-app

?监听element 和 document有什么区别
?transform和absolute有什么区别

性能提升：transform3D使用GPU渲染

vscode警告：vscode Cannot find module '@babel/plugin-proposal-decorators'
原因：一个git仓库中有多个子项目，每个项目里有各自的eslint，此时会导致vscode首先在顶级目录下找eslint-plugin-vue，没找到就会失效。这时你可以单独打开一个子项目，让eslint在顶级目录下 可以找到，就可以继续使用eslint去修复代码格式了。
"eslint.workingDirectories": [
    ".eslintrc.js",
    {
        "mode": "auto"
    }
],

writting-mode
float
absolute top left

?useContext没有生效

#sidebar>*选择器

可不可以从把拖拽结果自动生成代码

column设置宽度